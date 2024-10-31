import React from 'react';
import {getAchievementMenusItem} from "@/src/lib/api/achievement"
import Grid from '@mui/material/Grid2';
import AchievementCard from "@/src/app/achievement/achievementCard";

export default async function AchievementContainer({item, childrenItem}: { item: string, childrenItem: string }) {

    let achievements = []

    await getAchievementMenusItem(item, childrenItem).then((posts) => {
        achievements = posts.data.achievements
    })

    return (
        <div style={{padding: 20}}>
            <Grid container spacing={3}>
                {achievements.map((achievement) => (
                    <Grid size="auto" key={achievement.ID}>
                        <AchievementCard achievement={achievement}></AchievementCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}