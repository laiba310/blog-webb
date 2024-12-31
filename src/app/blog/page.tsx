import { CardDemo } from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SearchBar from '@/components/searchbar'
import React from 'react'

const page = () => {
  return (
    <div> <Header />

    <SearchBar />
           
              
                  
                  <CardDemo/>
                  <Footer />
  
    </div>
  )
}

export default page