import AchievementContainer from "@/src/app/achievement/achievementContainer";

export default async function Page({params}: { params: Promise<{ item: string, childrenItem: string }> }) {
    const item = (await params).item
    const childrenItem = (await params).childrenItem

    return <AchievementContainer item={item} childrenItem={childrenItem}></AchievementContainer>
}