import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"  // Import Link for navigation

export default function Hero() {
  return (
    <div className="container mx-auto px-4 pt-8">
      {/* Logo */}
      <div className="flex justify-center mb-16">
        <div className="text-center">
          <Image
            src="/logo.jpg"
            alt="TwiLearn"
            width={250}
            height={60}
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-5xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          <span>1 to 6 Months </span>
          <span className="text-[#ffa500] underline decoration-2 underline-offset-4">
            Internship + Training
          </span>
          <span> Program</span>
        </h2>

        <p className="text-xl md:text-2xl leading-relaxed">
          Realtime Projects + ATS Resume + Top 1% Linkedin Profile = 
          <span className="text-[#ffa500]"> Your Next dream job</span>
        </p>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          {/* LinkedIn Button */}
          <Link href="https://www.linkedin.com" className="bg-white text-black rounded-md py-4 px-8 flex items-center gap-2 text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-xl ">
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span>90K+ LinkedIn</span>
          </Link>

          {/* Google Button */}
          <Link href="https://www.google.com" className="bg-white text-black rounded-md py-4 px-8 flex items-center gap-2 text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/google.png"
              alt="Google"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="flex items-center gap-1">
              <span className="font-semibold">4.8</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Google</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
