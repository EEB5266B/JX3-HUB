import * as React from 'react';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {AppProvider} from "@toolpad/core/nextjs";
import theme from "@/src/theme";
import {Navigation, NavigationItem} from "@toolpad/core/AppProvider/AppProvider";
import {getAchievementMenus, getUserAchievements} from "@/src/lib/api/achievement"
import AchievementMenus from "@/src/app/achievement/achievementMenus.tsx";

export default async function AchievementLayout({children}: {
    children: React.ReactNode
}) {

    let achievementMenus = {}

    await getAchievementMenus().then((posts) => {
        achievementMenus = posts.data.menus
    })

    return (<AchievementMenus achievementMenus={achievementMenus}>{children}</AchievementMenus>)
}
