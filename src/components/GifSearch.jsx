import {useState} from "react"

function GifSearch({onNewSearch}){

    const [inputValue, setInputValue] = useState("")

    const handleOnChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length <= 1) return
        onNewSearch(inputValue.toLowerCase().trim())
        setInputValue("")
    }

    return(
        <div className="search-container">
            <form onSubmit={handleOnSubmit} className="form-search">
                <input type="text"
                    placeholder="¡Encuentra tus GIFS favoritos!"
                    value={inputValue}
                    onChange={handleOnChange}
                />
            </form>
        </div>
        
    )
}

export default GifSearch