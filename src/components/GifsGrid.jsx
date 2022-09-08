import GifItem from "./GifItem"
import useGetGifs from "../hooks/useGetGifs"

function GifsGrid({search}){

    const {gifsArray,isLoading} = useGetGifs(search)
    
    return (
        <>
        <div className="grid-header">
            <span className="material-symbols-outlined">gif</span>
            <h2>{search.charAt(0).toUpperCase()+search.slice(1)}</h2>
        </div>
        
        <div className="gifs-grid">
            {isLoading && <h2>Cargando..</h2>}
            {gifsArray ? gifsArray.map( gif => <GifItem key={gif.id} {...gif}/>) : null }
        </div>
        </>
    )
}

export default GifsGrid