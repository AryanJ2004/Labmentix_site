import { FileText, Medal, Briefcase, Building2, Target } from 'lucide-react';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-[#66c8ff]" />,
      title: "Internship Offer Letter",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#ffa500]" />,
      title: "Letter Of Recommendation",
    },
    {
      icon: <Medal className="w-8 h-8 text-[#ffd700]" />,
      title: "Internship Certificate",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#8b4513]" />,
      title: "Real World Projects",
    },
    {
      icon: <Target className="w-8 h-8 text-[#ff6b6b]" />,
      title: "100% Guaranteed Internship",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#66c8ff]" />,
      title: "700+ Hiring Companies",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-2">KEY BENEFITS 🎯</h2>
      <div className="flex justify-center mb-16">
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-lg h-24 flex items-center justify-center gap-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {benefit.icon}
            <span className="text-black font-bold text-xl">{benefit.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
