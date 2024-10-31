'use client'

import {AppProvider, type Navigation, type NavigationItem, type Session} from '@toolpad/core/AppProvider';
import theme from "@/src/theme";
import {DashboardLayout} from "@toolpad/core/DashboardLayout";
import * as React from "react";
import {getUserAchievements} from "@/src/lib/api/achievement";

export default function AchievementMenus({children, achievementMenus}: {
    children: React.ReactNode,
    achievementMenus: any
}) {

    const [session, setSession] = React.useState<Session | null>({
        user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });

    const navigation: Navigation = []

    let jx3id = "234187180631122955"
    let userAchievementMenus: Set<number> = new Set()

    if (jx3id) {
        getUserAchievements(jx3id).then((posts) => {
            userAchievementMenus = new Set(posts.data.achievements.split(',').map(Number))
        })
    }

    Object.entries(achievementMenus).forEach(([key, item]) => {

        let completeAchievementsNum = 0;

        const navigationItem: NavigationItem = {
            segment: `achievement/${item.id}`,
            title: '',
            children: [],
        }

        if (item.own_achievements_count > 0) {
            item.complete_achievements = getCompleteAchievements(item.achievements);
            navigationItem.children?.push({
                segment: "",
                title: `${item.name} (${item.complete_achievements.length}/${item.own_achievements_count})`
            })

            completeAchievementsNum += item.complete_achievements.length
        }

        Object.entries(item.children).forEach(([childKey, childItem]) => {
            childItem.complete_achievements = getCompleteAchievements(childItem.achievements);
            navigationItem.children?.push({
                segment: childItem.detail,
                title: `${childItem.name} (${childItem.complete_achievements.length}/${childItem.achievements_count})`
            })

            completeAchievementsNum += childItem.complete_achievements.length
        });

        navigationItem.title = `${item.name} (${completeAchievementsNum}/${item.own_achievements_count + item.achievements_count})`

        navigation.push(navigationItem);
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    function getCompleteAchievements(achievements) {
        return achievements.filter(item => {
            if (Array.isArray(item)) {
                return item.every(item => userAchievementMenus.has(item));
            } else {
                return userAchievementMenus.has(item);
            }
        });
    }

    return (
        <AppProvider theme={theme} navigation={navigation} authentication={authentication}>
            <DashboardLayout>{children}</DashboardLayout>
        </AppProvider>
    )
}