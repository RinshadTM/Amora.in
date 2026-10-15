import React from 'react'
import assets from '../../assets/asset'

const Category = () => {
  const categories = [
    { name: 'chains', image: assets.chain },
    { name: 'Rings', image: assets.ring },
    { name: 'Watches', image: assets.watches },
    { name: 'Bracelet', image: assets.Bracelet },
    { name: 'Earrings', image: assets.Earrings },
    { name: 'Accessories', image: assets.accessories },
  ]

  return (
    <section className="bg-rose-50 py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">

        <p className="pt-2 text-sm font-bold tracking-[0.25em] text-gray-600">
          CURATED ESSENTIALS
        </p>

        <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-primary">
          Shop by Category
        </h2>

        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Thoughtfully crafted pieces for everyday refinement
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-8 justify-items-center">

          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <p className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                {category.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Category