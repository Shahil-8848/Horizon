import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { NewsComponent } from "./NewsComponent";

import Event1 from "../../SchoolPics/Event1.jpg";
import Event2 from "../../SchoolPics/Event2.jpg";
import Event3 from "../../SchoolPics/Event3.jpg";
import Event4 from "../../SchoolPics/Event4.jpg";
import EventScout1 from "../../SchoolPics/EventScout1.jpg";
import EventScout2 from "../../SchoolPics/EventScout2.jpg";
import EventScout3 from "../../SchoolPics/EventScout3.jpg";
import EventScout4 from "../../SchoolPics/EventScout4.jpg";

gsap.registerPlugin(ScrollTrigger);

interface EventImage {
  url: string;
  alt: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  images: EventImage[];
  category: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Annual Program 2024",
    date: "March 15, 2024",
    description:
      "Glimpses of the Children Dance where children showcase their dancing ability and coordination while dancing.",
    category: "Field Trips",
    images: [
      { url: Event1, alt: "Students on suspension bridge" },
      { url: Event2, alt: "Group photo at viewpoint" },
      { url: Event3, alt: "Students relaxing" },
      { url: Event4, alt: "Group photo at temple" },
    ],
  },
  {
    id: "2",
    title: "Scout Session 2024",
    date: "April 2, 2024",
    description:
      "Saying goodbye to the halls of our alma mater, but the memories will last a lifetime. Thank you for the lessons, the laughs, and the unforgettable moments shared together.",
    category: "Ceremonies",
    images: [
      { url: EventScout1, alt: "Stage performance" },
      { url: EventScout2, alt: "Graduate portrait" },
      { url: EventScout3, alt: "Group celebration" },
      { url: EventScout4, alt: "Farewell gathering" },
    ],
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="event-card overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="grid grid-cols-2 gap-1 p-1">
          {event.images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-md"
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-2 left-2 px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-white">
          {event.category}
        </div>
      </div>
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <h3 className="text-lg font-bold mb-1 font-serif line-clamp-1">
          {event.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{event.date}</p>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2">
          {event.description}
        </p>
        <Button className="group w-full" variant="outline" size="sm">
          Read More
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}

export default function NewsAndEvents() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        ".event-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-16 bg-gray-50" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="container mx-auto ">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-4 from-primary to-primary/60 bg-clip-text">
            News & Events
          </h2>
          <p className="text-gray-600 text-lg">
            Events and activities that shape the Horizon Academy experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-6"> Events</h3>
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            <div className="text-center">
              <Button>View all Events</Button>
            </div>
          </div>
          <div className="lg:w-1/3 mt-10">
            <NewsComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
