import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offer/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLatter from '../Components/NewLetter/NewsLatter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLatter/>
    </div>
  )
}

export default Shop