import Image from 'next/image'
import { ScrollText, Building2, GraduationCap, Briefcase, Star } from 'lucide-react'

export default function Certification() {
  const certificationPoints = [
    {
      icon: <ScrollText className="w-6 h-6" />,
      text: "AICTE Approved Certificate"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "Accepted in All Colleges & Universities"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      text: "Industry-Recognized Certification"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      text: "MSME Approved Certification"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      text: "Valuable for Professional Development"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Boosts Job & Internship Opportunities"
    }
  ]

  return (
    <div className="bg-[#0a0b2e] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          WHY OUR INTERNSHIP
        </h2>
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          CERTIFICATION MATTERS
          <span className="ml-2">🎓</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            {certificationPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white h-20 text-gray-600 rounded-xl p-4 flex items-center gap-3 shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              >
                <div className="text-blue-400">
                  {point.icon}
                </div>
                <span className="font-medium text-lg">{point.text}</span>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/certificate.png"
              alt="TwiLearn Certificate"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

