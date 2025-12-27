import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimationTitle from "./AnimationTitle";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useGSAP(() => {
    // Parallax effect for gallery items
    const items = gsap.utils.toArray(".gallery-item");

    items.forEach((item, index) => {
      const depth = (index % 3) + 1;

      gsap.to(item, {
        y: -100 * depth,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scale and fade in animation
      gsap.from(item, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const galleryImages = [
    {
      src: "/img/gallery-1.webp",
      title: "Epic Battles",
      description: "Experience intense combat",
    },
    {
      src: "/img/gallery-2.webp",
      title: "Vast Worlds",
      description: "Explore endless landscapes",
    },
    {
      src: "/img/gallery-3.webp",
      title: "Hidden Treasures",
      description: "Discover rare artifacts",
    },
    {
      src: "/img/gallery-4.webp",
      title: "Legendary Heroes",
      description: "Become a champion",
    },
    {
      src: "/img/gallery-5.webp",
      title: "Mystical Realms",
      description: "Venture into the unknown",
    },
  ];

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="relative w-screen bg-black py-20 overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/img/stones.webp"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="font-general text-sm uppercase text-blue-50 md:text-[10px] mb-5">
            Visual Journey
          </p>
          <AnimationTitle
            title="Expl<b>o</b>re the <br/> Gal<b>l</b>ery"
            containerClass="!text-blue-50"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer"
              style={{
                gridRow: index === 2 ? "span 2" : "auto",
              }}
            >
              <div className="relative aspect-square md:aspect-auto md:h-96 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-zentry text-blue-50 mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-blue-100 font-circular-web">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative video element */}
        <div className="mt-20 rounded-2xl overflow-hidden border-2 border-blue-50/20">
          <video
            src="/videos/feature-5.mp4"
            autoPlay
            loop
            muted
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
