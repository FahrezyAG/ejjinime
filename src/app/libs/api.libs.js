export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`)
    const anime = await response.json()
    return anime
}
