import { useState } from "react"



function useGetSearchs(){

    const [isEmpty, setIsEmpty] = useState(true)

    const [searchs, setSearchs] = useState([])
    
    const onNewSearch = (newSearch)=>{
        if(searchs.includes(newSearch)) return
        setSearchs([newSearch,...searchs])
        setIsEmpty(false)
    }
    const onDeleteSearch = (forDeleteSearch)=>{
        const arrFiltered = searchs.filter(search => (forDeleteSearch != search)) 
        setSearchs(arrFiltered)
        if(arrFiltered.length == 0) setIsEmpty(true)
    }
    return(
        {   
            onDeleteSearch,
            onNewSearch,
            searchs,
            isEmpty
        }
    )
}
export default useGetSearchs