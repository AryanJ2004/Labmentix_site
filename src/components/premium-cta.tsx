"use client";

import { Target, Rocket } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PremiumCTA() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-20">
      <div className="container mx-auto px-4 text-center">
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
        <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          Unlock Premium Placement Assistance
          <Target className="w-8 h-8" />
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-12">
          Gain exclusive access to TwiLearn's premium portal where you can find referral-based job opportunities and get ahead in your career! Join our network and get the support you need to land your dream job.
          <span className="ml-2">🚀</span>
        </p>

        <button
          onClick={handleClick}
          className="bg-[#ffa500] hover:bg-[#ff9400] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors flex items-center gap-2 mx-auto"
        >
          ENROLL & ACCESS PREMIUM PORTAL NOW!
          <Rocket className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
