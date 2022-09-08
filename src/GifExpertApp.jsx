import { useState } from "react"
import AppHeader from "./components/AppHeader"
import GifSearch from "./components/GifSearch"
import GifsGrid from "./components/GifsGrid"
import Searchs from "./components/Searchs"
import useGetSearchs from "./hooks/useGetSearchs"


function GifExpertApp(){

    

    const {onNewSearch,searchs,isEmpty,onDeleteSearch} = useGetSearchs()
    


    return(
        <>
        <AppHeader />
        <GifSearch onNewSearch={onNewSearch} />
        <Searchs
            onDeleteSearch={onDeleteSearch} 
            searchs={searchs} 
        />
        {isEmpty && <GifsGrid key={"random"}search={"Nature"}/>}
        {searchs.map(search=>(
        <GifsGrid 
        key={search}
        search={search}
        />))}
         
        </>
    )
}
export default GifExpertApp