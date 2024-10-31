import AchievementContainer from "@/src/app/achievement/achievementContainer";

export default async function Page({params,}: { params: Promise<{ item: string }> }) {
    const item = (await params).item

    return <AchievementContainer item={item}></AchievementContainer>
}