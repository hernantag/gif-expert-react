function GifItem({url,title}){
    return(
        <div className="gif-item">
            <img src={url} alt={title} />
        </div>
    )
}
export default GifItem