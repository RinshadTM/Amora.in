import React from 'react'
import { Star, ShoppingBag, Heart, ArrowRight } from 'lucide-react'
import assets from '../../assets/asset'

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Gold Watch',
      category: 'Watches',
      price: 2499,
      oldPrice: 3299,
      rating: 4.9,
      image: assets.watches,
      discount: '24% OFF',
    },
    {
      id: 2,
      name: 'Elegant Gold Ring',
      category: 'Jewellery',
      price: 1299,
      oldPrice: 1699,
      rating: 4.8,
      image: assets.ring,
      discount: '24% OFF',
    },
    {
      id: 3,
      name: 'Premium Chain',
      category: 'Accessories',
      price: 899,
      oldPrice: 1199,
      rating: 4.7,
      image: assets.chain,
      discount: '25% OFF',
    },
    {
      id: 4,
      name: 'Gold Bracelet',
      category: 'Jewellery',
      price: 1599,
      oldPrice: 1999,
      rating: 4.9,
      image: assets.Bracelet,
      discount: '20% OFF',
    },
  ]

  return (
    <section className="bg-white px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm tracking-[0.25em] text-gray-500">
              CUSTOMER FAVOURITES
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Our Best Sellers
            </h2>

            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              Discover the pieces everyone is falling in love with.
            </p>
          </div>

          <button
            type="button"
            onClick={() => console.log('View all products')}
            className="group flex w-fit items-center gap-2 font-semibold text-primary transition-colors hover:opacity-70"
          >
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-rose-50 sm:h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                  {product.discount}
                </span>

                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={() => console.log('Wishlist:', product.name)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-colors hover:bg-rose-100 hover:text-rose-600"
                >
                  <Heart size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => console.log('Add to cart:', product.name)}
                  className="absolute bottom-3 left-3 right-3 flex translate-y-3 items-center justify-center gap-2 rounded-xl bg-white/95 py-3 font-semibold text-gray-900 opacity-0 shadow-md transition-all duration-300 hover:bg-primary hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="p-4 sm:p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1.5">
                  <Star
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    (Customer rating)
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-lg font-bold text-primary">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BestSellers