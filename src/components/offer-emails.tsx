export default function OfferEmails() {
    const emails = [
      {
        company: "Listed",
        position: "Marketing Intern",
        date: "05/12/2023"
      },
      {
        company: "Mealful",
        position: "Software Developer",
        date: "31/01/2024"
      },
      {
        company: "Virtusa",
        position: "Document Preparation",
        date: "02/01/2023"
      },
      {
        company: "Expertrons",
        position: "Full Stack Developer",
        date: "12/04/2024"
      },
      {
        company: "Engineer's Cradle",
        position: "Internship",
        date: "16/10/2023"
      }
    ]
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          Offer Emails Received After Program Completion
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {emails.map((email, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-black">{email.company}</h3>
                  <p className="text-gray-600 text-sm">{email.position}</p>
                </div>
                <span className="text-gray-400 text-sm">{email.date}</span>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="font-medium">Congratulations on your offer!</p>
                <p className="text-sm text-gray-600 mt-2">Your Hard Work Paid Off - Offer Inside!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  