'use client'

import {Card, CardContent, Typography} from "@mui/material";
import React, {useState} from "react";

export default function AchievementCard({achievement}: { achievement: any }) {

    const [raised, setRaised] = useState(false);

    return (
        <Card sx={{minWidth: 400}} raised={raised}
              onMouseEnter={() => {
                  setRaised(true);
              }}
              onMouseLeave={() => {
                  setRaised(false);
              }}>
            <CardContent>
                <Typography>
                    {achievement.Name}
                </Typography>
                <Typography>
                    {achievement.ShortDesc}
                </Typography>
            </CardContent>
        </Card>)
}
