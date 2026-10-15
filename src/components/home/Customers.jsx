
import React, { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Customers = () => {
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/100?img=47",
      rating: 5,
      review:
        "Absolutely love the quality! The design is elegant, and everything looks even better in person. Highly recommended!",
    },
    {
      name: "Rahul Menon",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/100?img=12",
      rating: 5,
      review:
        "Amazing shopping experience. The product quality is excellent, packaging is beautiful, and delivery was quick.",
    },
    {
      name: "Priya Nair",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/100?img=44",
      rating: 5,
      review:
        "Beautiful collection with a premium feel. I found exactly what I was looking for. Will definitely shop again!",
    },
    {
      name: "Arjun Nair",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/100?img=11",
      rating: 5,
      review:
        "Excellent craftsmanship and beautiful finishing. The jewellery feels premium and made my occasion extra special.",
    },
    {
      name: "Meera Krishnan",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/100?img=49",
      rating: 5,
      review:
        "The collection is stunning. The packaging was lovely, and the entire shopping experience was smooth.",
    },
    {
      name: "Adithya Kumar",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/100?img=13",
      rating: 5,
      review:
        "Beautiful designs and great attention to detail. I found the perfect gift and would happily shop here again.",
    },
  ];

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Desktop auto-scroll animation
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrame;
    let lastTime = 0;
    const speed = 0.035; // pixels per millisecond

    const animate = (time) => {
      if (!container || window.innerWidth < 1024) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (lastTime) {
        const delta = Math.min(time - lastTime, 32);

        // Pause movement when the user hovers over the reviews.
        if (!container.matches(":hover")) {
          container.scrollLeft += speed * delta;

          // Seamlessly restart after the first set of cards.
          const halfWidth = container.scrollWidth / 2;

          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
        }
      }

      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Update active carousel dot on mobile
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector("[data-review-card]");
    if (!card) return;

    const cardWidth =
      card.getBoundingClientRect().width + 24;

    setActiveIndex(
      Math.round(container.scrollLeft / cardWidth) % reviews.length
    );
  };

  const scrollToReview = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector("[data-review-card]");
    if (!card) return;

    const cardWidth =
      card.getBoundingClientRect().width + 24;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const renderCard = (customer, index) => (
    <div
      key={`${customer.name}-${index}`}
      data-review-card
      className="group w-[85vw] shrink-0 snap-center rounded-2xl border border-[#451D20]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:w-[360px] lg:w-[calc((100%-48px)/3)] lg:p-8"
    >
      <div className="mb-5 flex items-center justify-between">
        <Quote
          size={34}
          className="text-[#451D20]/20 transition-colors group-hover:text-[#451D20]"
        />

        <div className="flex gap-1">
          {Array.from({ length: customer.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      </div>

      <p className="min-h-24 text-sm leading-7 text-gray-600">
        "{customer.review}"
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <img
          src={customer.image}
          alt={customer.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900">
            {customer.name}
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            {customer.role}
          </p>
        </div>

        <span className="ml-auto shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
          Verified
        </span>
      </div>
    </div>
  );

  return (
    <section className="overflow-hidden bg-[#faf7f2] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-xs tracking-[0.25em] text-[#8b6560] sm:text-sm">
            CUSTOMER STORIES
          </p>

          <h2 className="mt-4 font-serif text-3xl text-[#451D20] sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Real experiences from customers who love our collection
            and quality.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 lg:overflow-x-hidden lg:snap-none lg:pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Mobile: one set for manual swipe.
                Desktop: duplicate the set for continuous scrolling. */}
            {reviews.map((customer, index) =>
              renderCard(customer, index)
            )}

            <div className="contents lg:contents">
              {reviews.map((customer, index) => (
                <div
                  key={`duplicate-${customer.name}`}
                  aria-hidden="true"
                  className="contents"
                >
                  {renderCard(customer, index + reviews.length)}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile carousel controls */}
          <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
            <button
              onClick={() =>
                scrollToReview(
                  (activeIndex - 1 + reviews.length) % reviews.length
                )
              }
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#451D20]/20 text-[#451D20] transition hover:bg-[#451D20] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((customer, index) => (
                <button
                  key={customer.name}
                  onClick={() => scrollToReview(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 bg-[#451D20]"
                      : "w-2 bg-[#451D20]/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                scrollToReview((activeIndex + 1) % reviews.length)
              }
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#451D20]/20 text-[#451D20] transition hover:bg-[#451D20] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Rating */}
        <div className="mt-10 text-center sm:mt-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#451D20]/10 bg-white px-5 py-3 shadow-sm sm:px-6">
            <Star
              size={22}
              className="fill-amber-400 text-amber-400"
            />
            <span className="text-lg font-bold text-[#451D20]">
              4.9/5
            </span>
            <span className="text-xs text-gray-500 sm:text-sm">
              Loved by our customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
