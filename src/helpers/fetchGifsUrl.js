import GifsGrid from "../components/GifsGrid"

async function fetchGifsUrl(q){
    const url = `//api.giphy.com/v1/gifs/search?api_key=E9BNiva6B7otN3K40haaruveh50JwFXf&q=${q}&limit=15`
    const res = await fetch(url)
    const {data} = await res.json()
    const arr = data.map(gif=>({
        id:gif.id,
        title:gif.title,
        url:gif.images.downsized_medium.url
    }))

    return arr
}

export default fetchGifsUrl