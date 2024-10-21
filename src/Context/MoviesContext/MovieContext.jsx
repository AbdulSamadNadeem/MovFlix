import React,{ createContext, useEffect, useState } from "react";

export const MoviedataContext = createContext()
const apiKey = 'fd13a3b9a33f43a7d4cfcefebd5bb74f'


export const MovieContext = ({children}) => {
    const[banner , setbanner] = useState([])
    const[ratings , setratings] = useState([])
    const[likes , setlikes] = useState([])
    const [cardData , setCardData] = useState([])
    const [webData , setWebData] = useState([])
    const [Drama , setDrama] = useState([])
    const [Action , setAction] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
       .then((res)=>{
        return res.json();
       })
       .then((data)=>{
        const Results = data.results
        
    
        const imagPath =Results.map((item)=>{
         const likes = item.vote_count
         const backdropImg=item.poster_path
         const popularity = item.popularity
         setratings(popularity)
         setlikes(likes)
         return(`https://image.tmdb.org/t/p/w500/${backdropImg}`)
         
        })
    
        setbanner(imagPath)
    
      })
     
      .catch((err)=>{
        console.log(err.message)
       })
       },[])
       
       useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=2`)
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
          const results = data.results
          const MovieData = results.map((item)=>(
            {
              title :item.title,
              votes : item.vote_average,
              imageLink :`https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
            
          ))
          setCardData(MovieData)
        })
        .catch((err)=>{
          console.log(err.message)
        })
       },[])
       
       useEffect(()=>{
           fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
           .then((res)=>{
            return res.json()
           })
           .then((data)=>{
           
            const results = data.results
            const WebSeries = results.map((item)=>(
              {
                title:item.title,
                votes:item.vote_average,
                imgPath:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
              }
            ))
            setWebData(WebSeries)
           })
           .catch((err)=>{
            console.log(err.message)
           })
       },[])
    
       useEffect(()=>{
         fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=18`)
         .then((res)=>{
          return res.json()
         })
         .then((data)=>{
          const results = data.results
          console.log(results)
          const Dramas = results.map((item)=>(
            {
              title:item.name,
              votes:item.vote_average,
              imgPath:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
          ))
          
          setDrama(Dramas)
    
         })
         .catch((err)=>{
          console.log(err.message)
         })
       },[])
       
       const ActionMovies=async(page)=>{
       
        try{
          const res= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`)
          const data = await res.json()
          const results= data.results
          return results.map((item,index)=>(
            { 
              pages:index,
              title:item.title,
              votes:item.vote_average,
              imgPath:`https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              genre : item.genre_ids
            }
          ))
         } catch (err){
          console.log(err)
         }
        
        }
      const RenderPages= async()=>{
        let AllMovies=[]
    
       for(let i=1 ; i<=100 ; i++){
         const pages= await ActionMovies(i)
         AllMovies=AllMovies.concat(pages)
       }
       setAction(AllMovies)
      }
    
      useEffect(()=>{
        RenderPages()
      },[])
  return (
    <MoviedataContext.Provider value={{banner ,ratings ,likes ,cardData , webData , Drama ,Action}}>
      {children}
    </MoviedataContext.Provider>
  )
}
