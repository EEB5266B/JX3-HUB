export const getAchievementMenus = async () => {
    let data = await fetch('https://node.jx3box.com/api/node/achievement/menus', {next: {revalidate: 3600}})
    return await data.json()
}

export const getAchievementMenusItem = async (item: string, childrenItem: string) => {
    let data = await fetch(`https://cms.jx3box.com/api/cms/helper/achievements/${item}${childrenItem ? '/' + childrenItem : ''}`, {next: {revalidate: 3600}})
    return await data.json()
}

export const getUserAchievements = async (jx3id: string) => {
    let data = await fetch(`https://proxy.eeb5266b.com/https://next2.jx3box.com/api/next2/user-achievements?jx3id=${jx3id}`)
    return await data.json()
}