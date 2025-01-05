import { Target } from 'lucide-react';

export default function Bonuses() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-2">
        Unlock Exclusive Bonuses
        <span className="ml-2">🎁</span>
      </h2>

      <div className="max-w-5xl mx-auto mt-12 space-y-6">
        {/* Bonus 1 */}
        <div className="bg-white rounded-lg p-6 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[#ff6600] before:rounded-t-lg transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-black">Bonus 1: Free Pre-recorded Course</h3>
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
              ₹4999 - Free!
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            Get full access to our expertly designed course. Hands-on projects, real-world insights!
          </p>
        </div>

        {/* Bonus 2 */}
        <div className="bg-white rounded-lg p-6 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[#ff6600] before:rounded-t-lg transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-black">Bonus 2: Placement Masterclass</h3>
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
              ₹999 - Free!
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            Master the job hunt with our 4-step framework to enter the top 1% of applicants.
          </p>
        </div>

        {/* Additional Bonuses */}
        <div className="bg-white rounded-lg p-6 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[#ff6600] before:rounded-t-lg transform transition-transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-bold text-black flex items-center gap-2">
            Additional Bonuses <Target className="w-5 h-5 text-red-500" />
          </h3>
          <ul className="text-gray-600 mt-2 space-y-2">
            <li>• 8000+ HR Contacts</li>
            <li>• ATS-Friendly Resume Templates</li>
            <li>• Cold Email Strategy</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
          Claim All Bonuses!
        </button>
      </div>
    </div>
  );
}
