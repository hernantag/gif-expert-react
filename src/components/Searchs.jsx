import SearchsItem from "./SearchsItem"

function Searchs({searchs,onDeleteSearch}){
    return(
        <div className="searchs">
            {searchs.length == 0 && <h2>¡Empieza a buscar gifs YA!</h2>}
            {
            searchs.map(search => (<SearchsItem key={search} search={search} onDeleteSearch={onDeleteSearch}/>))
            }
            
        </div>
    )
}

export default Searchs