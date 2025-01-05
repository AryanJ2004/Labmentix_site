"use client";
import React from 'react';

export default function Steps() {
  const steps = [
    {
      number: "01",
      title: "Enroll in the program by paying the minimal registration fees."
    },
    {
      number: "02",
      title: "Get an Offer letter and course access on your mail."
    },
    {
      number: "03",
      title: "Learn practically from MAANG Mentors: Start your self-paced learning journey with comprehensive materials."
    },
    {
      number: "04",
      title: "Work on real-time Projects: Build real-time projects that matter and showcase your skills."
    },
    {
      number: "05",
      title: 'Get Placement assistance with more than 750+ companies: Attend our exclusive "Hack Your Dream Job Bootcamp (3 hours)".'
    },
    {
      number: "06",
      title: "Learn a 4-step strategy to land a job like the top 1%, build an exceptional resume, optimize your LinkedIn, and start applying for jobs."
    },
    {
      number: "07",
      title: "Submit your projects by the end of the program and receive a Verified Internship Certificate + Letter of Recommendation."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-[#0a0a2e] text-white">
      <h2 className="text-4xl font-bold text-center mb-16">How It Works?</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#66c8ff]" />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-0 w-20 h-20 bg-[#0a0a2e] flex items-center justify-center">
                <div className="w-6 h-6 bg-[#66c8ff] rounded-full" />
              </div>
              <div 
                className={`bg-white text-black rounded-lg p-8 shadow-2xl animate-float-${index % 2 === 0 ? 'even' : 'odd'}`}
              >
                <h3 className="text-[#ff6b6b] font-bold text-xl mb-4">Step {step.number}:</h3>
                <p className="text-gray-600 text-lg">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes floatEven {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatOdd {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(0px); }
        }
        .animate-float-even {
          animation: floatEven 4s ease-in-out infinite;
        }
        .animate-float-odd {
          animation: floatOdd 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

