import Navbar from '@/components/Navbar'
import BottomNav from '@/components/BottomNav'
import Hero from '@/components/Hero'
import MarqueeSection from '@/components/MarqueeSection'
import Features from '@/components/Features'
import Analyze from '@/components/Analyze'
import CarouselSection from '@/components/CarouselSection'
import StyleBot from '@/components/StyleBot'
import Wardrobe from '@/components/Wardrobe'
import Planner from '@/components/Planner'
import Experts from '@/components/Experts'
import AllFeatures from '@/components/AllFeatures'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <BottomNav />
      <main>
        <Hero />
        <MarqueeSection />
        <Features />
        <Analyze />
        <CarouselSection />
        <StyleBot />
        <Wardrobe />
        <Planner />
        <Experts />
        <AllFeatures />
      </main>
      <Footer />
    </>
  )
}