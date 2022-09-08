function SearchsItem({search,onDeleteSearch}){

    const handleCloseClick = (e)=>{
        e.preventDefault()
        onDeleteSearch(e.target.id)
    }
    return(
        <div className="searchsItem">
            <span>{search.charAt(0).toUpperCase()+search.slice(1)}</span>
            <span 
            className="material-symbols-outlined"
            id={search}
            onClick={handleCloseClick}
            
            >close</span>
        </div>
    )
}
export default SearchsItem