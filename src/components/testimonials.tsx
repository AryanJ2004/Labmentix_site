import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      src: "/test1.jpg",
      alt: "Student success story - Data Scientist at Kogool"
    },
    {
      id: 2,
      src: "/test2.jpg",
      alt: "From Learner to Achiever - Success at Axtria"
    },
    {
      id: 3,
      src: "/test3.jpg",
      alt: "Success story - Deputy Manager at Bandhan Bank"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-[#0a0b2e]">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto place-items-center">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative w-80 h-80 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={testimonial.src}
              alt={testimonial.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={testimonial.id === 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

