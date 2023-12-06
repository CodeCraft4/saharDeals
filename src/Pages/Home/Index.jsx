import React from 'react'
import HeroSection from './Components/Hero/Index'
import About from './Components/About/Index'
import Footer from './Components/Footer/Index'
import CardPagination from './Components/Product/PaginationCard'
import { PRODUCT_CARD } from 'Constant/content'

const Home = () => {
  return (
    <div>
      <header>
       <HeroSection/>
      </header>
      <main>
        <section>
          <CardPagination PRODUCT_CARD={PRODUCT_CARD}/>
        </section>
        <section>
          <About/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
