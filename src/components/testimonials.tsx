export default function Testimonials() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          🎥 Hear From Our Happy Students!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-video bg-white rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/placeholder-${index}`}
                title={`Student Testimonial ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  