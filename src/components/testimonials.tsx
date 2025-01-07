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
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={testimonial.src}
              alt={testimonial.alt}
              width={1080}
              height={1080}
              className="object-cover w-full h-full"
              priority={testimonial.id === 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

