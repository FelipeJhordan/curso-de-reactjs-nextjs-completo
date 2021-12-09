export const loadPosts = async () => {
    const postsResponse = fetch('http://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('http://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    return postsJson.map((posts, index) => {
        return { ...posts, cover: photosJson[index].url }
    })
}