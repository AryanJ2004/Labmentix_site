import Hero from "@/components/hero"
import Steps from "@/components/steps"
import Domains from "@/components/domains"
import WhyChooseUs from "@/components/why-choose-us"
import KeyBenefits from "@/components/key-benefits"
import Roadmap from "@/components/roadmap"
import Bonuses from "@/components/bonuses"
import Certification from "@/components/certification"
import OfferEmails from "@/components/offer-emails"
import Testimonials from "@/components/testimonials"
import PremiumCTA from "@/components/premium-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a2e] text-white">
      <Hero />
      <Steps />
      <WhyChooseUs />
      <Testimonials />
      <Domains />
      <KeyBenefits />
      <Roadmap />
      <Bonuses />
      <Certification />
      <OfferEmails />
      <PremiumCTA />
    </main>
  )
}

