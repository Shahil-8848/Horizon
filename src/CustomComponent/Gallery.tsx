import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
  title: string;
  description: string;
  backgroundImage: string;
}

const cardData: Card[] = [
  {
    title: "Premium Travel Experience",
    description:
      "Experience the future of transportation with our cutting-edge bus service. Comfortable seats, friendly staff, and timely departures ensure your journey is nothing short of excellent.",
    backgroundImage:
      "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/471153877_1426606758355358_2996385477803140257_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Tl8ccIYS20Q7kNvgHk6aSY&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=ACXacvcVhGhZonGSrhqI2Nz&oh=00_AYBg5fCn0q-MoaiGTeO8KBoX30OQstvlgeuYcFSDbplnMA&oe=676E8991",
  },
  {
    title: "Premium Travel Experience",
    description:
      "Experience the future of transportation with our cutting-edge bus service. Comfortable seats, friendly staff, and timely departures ensure your journey is nothing short of excellent.",
    backgroundImage:
      "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/471153877_1426606758355358_2996385477803140257_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Tl8ccIYS20Q7kNvgHk6aSY&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=ACXacvcVhGhZonGSrhqI2Nz&oh=00_AYBg5fCn0q-MoaiGTeO8KBoX30OQstvlgeuYcFSDbplnMA&oe=676E8991",
  },
  {
    title: "Premium Travel Experience",
    description:
      "Experience the future of transportation with our cutting-edge bus service. Comfortable seats, friendly staff, and timely departures ensure your journey is nothing short of excellent.",
    backgroundImage:
      "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/471153877_1426606758355358_2996385477803140257_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Tl8ccIYS20Q7kNvgHk6aSY&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=ACXacvcVhGhZonGSrhqI2Nz&oh=00_AYBg5fCn0q-MoaiGTeO8KBoX30OQstvlgeuYcFSDbplnMA&oe=676E8991",
  },
  {
    title: "Connected Network",
    description:
      "Connect to your destination with ease. Our extensive network covers all major cities, making your travel planning simple and convenient.",
    backgroundImage: "/api/placeholder/1200/800",
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextCard = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % cardData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const handlePrevCard = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        handleNextCard();
      }, 2000); // Changed to 4 seconds as requested
    }
    return () => clearInterval(interval);
  }, [handleNextCard, isPaused]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + cardData.length) % cardData.length;
      cards.push({ index, position: i });
    }
    return cards;
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image carousel"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out scale-110"
        style={{
          backgroundImage: `url(${cardData[activeIndex].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${isTransitioning ? 1.15 : 1.1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-5 "></div>
      </div>

      <div className="relative h-full flex items-center">
        {/* Left description section */}
        <div className="w-1/2 p-16 flex items-center">
          <div className="text-white space-y-8">
            <div className="overflow-hidden">
              <h2
                className={`text-6xl font-bold mb-6 transform transition-all duration-500 ${
                  isTransitioning
                    ? "translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {cardData[activeIndex].title}
              </h2>
            </div>
            <div className="overflow-hidden">
              <p
                className={`text-xl leading-relaxed transform transition-all duration-500 delay-100 ${
                  isTransitioning
                    ? "translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {cardData[activeIndex].description}
              </p>
            </div>
            <button className="mt-8 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Right carousel section */}
        <div className="w-1/2 relative flex items-center justify-center h-full">
          {getVisibleCards().map(({ index, position }) => (
            <div
              key={index}
              className={`absolute w-80 h-[28rem] rounded-3xl transition-all duration-700 ease-out
                ${
                  position === 0
                    ? "z-30 scale-110 shadow-2xl"
                    : "z-20 scale-90 blur-[1px]"
                }
                ${position === -1 ? "-translate-x-40 opacity-50" : ""}
                ${position === 1 ? "translate-x-40 opacity-50" : ""}
                hover:scale-[1.12] cursor-pointer
              `}
              style={{
                backgroundImage: `url(${cardData[index].backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">
                    {cardData[index].title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevCard}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextCard}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Progress indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setActiveIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
