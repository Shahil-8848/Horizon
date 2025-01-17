import { useEffect, useState } from "react";
import Awards from "../../SchoolPics/Awards.jpg";
import Singing from "../../SchoolPics/Singing2.jpg";
import Notice from "../../SchoolPics/notice.jpg";
interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: Awards,
    title: "School Award 2025",
    description: "January 17",
  },
  {
    id: 2,
    image: Singing,
    title: "Science Exhibition",
    description: "Students showcase their innovative projects",
  },
  {
    id: 3,
    image: Notice,
    title: "Cultural Program",
    description: "Celebrating our diverse cultural heritage",
  },
];

export function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("left");
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[320px] pl-5 bg-white-500 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-[120px]">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : direction === "left"
                ? "opacity-0 translate-x-full"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex h-full">
              <div className="w-[150px] h-[120px] flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-2 overflow-hidden">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
