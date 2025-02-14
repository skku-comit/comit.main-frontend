import HeroSection from '@/components/home/HeroSection'
import SellingPointsSection from '@/components/home/SellingPointsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ShowoffSection from '@/components/home/ShowoffSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SellingPointsSection />
      <FeaturesSection />
      <ShowoffSection />
      <ReviewsSection />
      <CTASection />
    </div>
  )
}
