import React from 'react'
import { Star, Quote } from 'lucide-react'

const Customers = () => {
  const reviews = [
    {
      name: 'Ananya Sharma',
      role: 'Verified Customer',
      image: 'https://i.pravatar.cc/100?img=47',
      rating: 5,
      review:
        'Absolutely love the quality! The design is elegant, and everything looks even better in person. Highly recommended!',
    },
    {
      name: 'Rahul Menon',
      role: 'Verified Customer',
      image: 'https://i.pravatar.cc/100?img=12',
      rating: 5,
      review:
        'Amazing shopping experience. The product quality is excellent, packaging is beautiful, and delivery was quick.',
    },
    {
      name: 'Priya Nair',
      role: 'Verified Customer',
      image: 'https://i.pravatar.cc/100?img=44',
      rating: 5,
      review:
        'Beautiful collection with a premium feel. I found exactly what I was looking for. Will definitely shop again!',
    },
  ]

  return (
    <section className="bg-rose-50 px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-[0.25em] text-gray-600">
            CUSTOMER STORIES
          </p>

          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Real experiences from customers who love our collection
            and quality.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((customer) => (
            <div
              key={customer.name}
              className="group rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              {/* Quote Icon */}
              <div className="mb-5 flex items-center justify-between">
                <Quote
                  size={34}
                  className="text-rose-200 transition-colors group-hover:text-primary"
                />

                <div className="flex gap-1">
                  {Array.from({ length: customer.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="min-h-24 text-sm leading-7 text-gray-600">
                "{customer.review}"
              </p>

              {/* Customer Details */}
              <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-5">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {customer.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {customer.role}
                  </p>
                </div>

                <div className="ml-auto">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-rose-100 bg-white px-6 py-3 shadow-sm">
            <Star size={22} className="fill-amber-400 text-amber-400" />

            <span className="text-lg font-bold text-gray-900">
              4.9/5
            </span>

            <span className="text-sm text-gray-500">
              Loved by our customers
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Customers