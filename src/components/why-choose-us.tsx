import { Laptop, ScrollText, Mail, Target } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Laptop className="w-12 h-12 text-[#66c8ff]" />,
      title: "Real-time Projects",
    },
    {
      icon: <ScrollText className="w-12 h-12 text-[#ffa500]" />,
      title: "AICTE Approved Internship Certificate",
    },
    {
      icon: <Mail className="w-12 h-12 text-[#ff6b6b]" />,
      title: "Offer Letter",
    },
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: "Job Placement Assistance",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">
        Why Choose our Internship Program?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg p-8 flex flex-col items-center text-center shadow-lg h-56 transition-transform transform hover:scale-105 hover:shadow-xl" // Added hover scale and transition
          >
            {benefit.icon}
            <h3 className="mt-4 font-semibold">{benefit.title}</h3>
          </div>
        ))}
       
      </div>
    </div>
  );
}
