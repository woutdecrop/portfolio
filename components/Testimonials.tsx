import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Matthias helped me go from failing math to getting an A! His patience and clear explanations made all the difference.",
      name: "Sophie M.",
      title: "High School Student",
      subject: "Mathematics",
    },
    {
      id: 2,
      quote: "Excellent tutor for physics. He breaks down complex concepts into understandable pieces. Highly recommend!",
      name: "Thomas L.",
      title: "University Student",
      subject: "Physics",
    },
    {
      id: 3,
      quote: "My son's confidence in science has improved dramatically. Matthias is professional, punctual, and genuinely cares about his students.",
      name: "Marie D.",
      title: "Parent",
      subject: "Chemistry",
    },
    {
      id: 4,
      quote: "The programming lessons were fantastic! I now feel comfortable with coding and even started my own projects.",
      name: "Lucas R.",
      title: "High School Student",
      subject: "Computer Science",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg transition-all duration-200">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author info */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
                <span className="text-orange-400 bg-orange-500/20 border border-orange-500/50 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.subject}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
