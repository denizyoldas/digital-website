import Footer from '../components/footer'
import Header from '../components/header'
import Enjoy from '../components/home/enjoy'
import Hero from '../components/home/hero'
import Powered from '../components/home/powered'
import MobileHeader from '../components/mobile-header'

export default function Home() {
  return (
    // px-4 sm:px-5 md:px-8 lg:px-8 xl:px-8
    <div>
      <Header />
      <div className="px-4 sm:px-5 md:px-8 lg:px-8 xl:px-8">
        <Hero />
        <Powered />
        <Enjoy />
      </div>
      <Footer />
    </div>
  )
}
