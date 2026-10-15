
import React from "react";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Gem,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const Aboute = () => {
  const values = [
    {
      icon: <Gem size={25} />,
      title: "Timeless Design",
      description:
        "Elegant jewellery designed to complement your style today and for years to come.",
    },
    {
      icon: <Heart size={25} />,
      title: "Made with Love",
      description:
        "Every piece celebrates individuality, meaningful moments, and personal expression.",
    },
    {
      icon: <ShieldCheck size={25} />,
      title: "Quality First",
      description:
        "We focus on thoughtful details, beautiful finishes, and lasting style.",
    },
    {
      icon: <Leaf size={25} />,
      title: "Thoughtful Choices",
      description:
        "We believe in choosing pieces with care and creating a more meaningful experience.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#451D20]">
      {/* Hero */}
      <section className="mx-4 mt-5 overflow-hidden rounded-3xl bg-[#f8efed] sm:mx-8 lg:mx-12">
        <div className="grid items-center md:grid-cols-2">
          <div className="about-reveal order-2 px-6 py-12 sm:px-10 md:order-1 lg:px-16 lg:py-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#99716a]">
              <Sparkles size={16} />
              OUR STORY
            </span>

            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Jewellery that tells
              <span className="mt-2 block italic text-[#9b6b55]">
                your story.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#795d59] sm:text-base">
              At Lumara, we believe the most beautiful things are the
              ones that hold meaning. Discover timeless jewellery made
              to celebrate your individuality and life's special moments.
            </p>

            <Link
              to="/bestsellers"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#451D20] px-7 py-4 text-sm text-white transition duration-300 hover:-translate-y-1 hover:bg-[#633035] hover:shadow-lg"
            >
              Explore our collection
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="about-image-reveal order-1 h-[300px] overflow-hidden sm:h-[400px] md:order-2 md:h-full md:min-h-[330px]">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85"
              alt="Elegant fine jewellery"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#a17b70]">
          MORE THAN JUST JEWELLERY
        </p>

        <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
          Little details. Lasting memories.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
          Jewellery is more than an accessory. It can be a reminder of
          someone special, a celebration of who you are, or a little
          luxury that makes an ordinary day feel extraordinary. Lumara
          brings these moments closer with designs that feel personal,
          beautiful, and timeless.
        </p>

        <div className="mx-auto mt-8 h-px w-20 bg-[#b9957c]" />
      </section>

      {/* Brand Story */}
      <section className="bg-[#fcf8f6] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="about-image-reveal overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85"
              alt="Delicate jewellery details"
              loading="lazy"
              className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px]"
            />
          </div>

          <div className="about-reveal">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#a17b70]">
              THE LUMARA EXPERIENCE
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Beauty in every detail.
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
              We celebrate the beauty of simplicity. From everyday
              essentials to statement pieces, our collection is curated
              for people who appreciate thoughtful design and effortless
              elegance.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Our goal is simple: help you find jewellery that feels
              like you, makes gifting more meaningful, and becomes part
              of the moments you treasure most.
            </p>

            <Link
              to="/gift"
              className="group mt-7 inline-flex items-center gap-2 border-b border-[#451D20] pb-2 text-sm font-medium"
            >
              Discover thoughtful gifts
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#a17b70]">
            WHAT MATTERS TO US
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
            The values behind Lumara
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Every detail reflects our love for beautiful design and
            meaningful experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={value.title}
              style={{ animationDelay: `${index * 120}ms` }}
              className="about-reveal group rounded-2xl border border-[#eee1dd] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a69d] hover:bg-[#fcf8f6] hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8efed] text-[#451D20] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {value.icon}
              </div>

              <h3 className="mt-6 font-serif text-xl">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing Banner */}
      <section className="px-4 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#451D20] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

          <div className="relative">
            <Sparkles className="mx-auto mb-5 text-[#e8c9a7]" size={30} />

            <p className="text-xs tracking-[0.25em] text-[#e8c9a7]">
              YOUR STORY, YOUR STYLE
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Find something that feels like you.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
              Discover pieces that celebrate your style and make every
              moment a little more special.
            </p>

            <Link
              to="/bestsellers"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#451D20] transition duration-300 hover:-translate-y-1 hover:bg-[#f8efed] hover:shadow-xl"
            >
              Shop Lumara
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .about-reveal {
          animation: aboutFadeUp 0.8s ease-out both;
        }

        .about-image-reveal {
          animation: aboutFadeIn 1s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-image-reveal {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Aboute;
