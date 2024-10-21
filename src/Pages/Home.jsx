import React, { useContext } from 'react'
import Header from '../Components/Header/Header.jsx'
import Banner from '../Components/Banner/Banner.jsx'
import NewReleaseCards from '../Components/Cards/NewReleaseCatds/NewReleaseCards.jsx'
import NewWebSeriesCards from '../Components/Cards/NewWebSeriesCards/NewWebSeriesCards.jsx'
import NewReleaseDramas from '../Components/Cards/NewReleaseDramas/NewReleaseDramas.jsx'
import Subscription from '../Components/Subscription/Subscription.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import { MoviedataContext } from '../Context/MoviesContext/MovieContext.jsx'

const Home = () => {
  const {banner ,ratings ,likes ,cardData , webData , Drama ,Action} = useContext(MoviedataContext)
  return (
    <>
    <Header/>
    <Banner />
    <NewReleaseCards />
    <NewWebSeriesCards/>
    <NewReleaseDramas data={Drama}/>
    <Subscription/>
    <Footer/>
    </>
  )
}

export default Home