import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

const Status = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const additionalTextRef = useRef<HTMLDivElement>(null);
  const stats: Stat[] = [
    { label: "Years of Academic Excellence", value: "50", suffix: "+" },
    { label: "Empowered Students", value: "10000", suffix: "+" },
    { label: "Distinguished Faculty", value: "500", suffix: "+" },
    {
      label: "Groundbreaking Research Publications",
      value: "1000",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsRef.current) {
        // Create animations for each stat
        const statElements = statsRef.current.children;

        gsap.from(statElements, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Animate numbers
        Array.from(statElements).forEach((stat) => {
          const valueElement = stat.querySelector(".stat-value");
          const finalValue = parseInt(
            valueElement?.getAttribute("data-value") || "0"
          );

          gsap.from(valueElement, {
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power2.out",
          });
        });
      }

      // Animate additional text
      if (additionalTextRef.current) {
        gsap.from(additionalTextRef.current, {
          scrollTrigger: {
            trigger: additionalTextRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-primary">
      <div className="container mx-auto px-6">
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white transform hover:scale-105 transition-transform duration-300"
            >
              <h3
                className="stat-value text-6xl font-extrabold mb-4 font-sans"
                data-value={stat.value}
              >
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </h3>
              <p className="text-xl font-semibold text-white/90 font-serif tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div ref={additionalTextRef} className="text-center text-white mt-16">
          <h2 className="text-7xl font-extrabold mb-4 font-sans">25 Years</h2>
          <p className="text-3xl font-medium text-white/90 font-serif italic">
            Serving Education with Excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Status;
