import fetchGifsUrl from "../helpers/fetchGifsUrl"
import { useEffect,useState } from "react"


function useGetGifs(search){
    const [isLoading, setIsLoading] = useState(true)
    const [gifsArray, setGifsArray] = useState([])

    const getGifs = async (search)=>{
        setGifsArray(await fetchGifsUrl(search))
        setIsLoading(false)
    }

    useEffect(()=>{
        getGifs(search)
    })
    return(
        {
            gifsArray,
            isLoading
        }
    )
}

export default useGetGifs