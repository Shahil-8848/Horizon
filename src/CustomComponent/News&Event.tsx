import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
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
      {
        url: Event1,
        alt: "Students on suspension bridge",
      },
      {
        url: Event2,
        alt: "Group photo at viewpoint",
      },
      {
        url: Event3,
        alt: "Students relaxing",
      },
      {
        url: Event4,
        alt: "Group photo at temple",
      },
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
      {
        url: EventScout1,
        alt: "Stage performance",
      },
      {
        url: EventScout2,
        alt: "Graduate portrait",
      },
      {
        url: EventScout3,
        alt: "Group celebration",
      },
      {
        url: EventScout4,
        alt: "Farewell gathering",
      },
    ],
  },
  {
    id: "3",
    title: "Annual Sports Meet 2024",
    date: "February 28, 2024",
    description:
      "A spectacular display of athletic prowess and sportsmanship as students competed in various sports disciplines, fostering team spirit and healthy competition.",
    category: "Sports",
    images: [
      { url: "/placeholder.svg?height=400&width=600", alt: "Race event" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Basketball match" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Award ceremony" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Team photo" },
    ],
  },
];

export default function NewsAndEvents() {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayedEvents = showAll ? events : events.slice(0, 2);

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
  }, [showAll]);

  return (
    <section className=" relative py-16 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-4  from-primary to-primary/60 bg-clip-text ">
            News & Events
          </h2>
          <p className="text-gray-600 text-lg">
            Events and activities that shape the Horizon Academy experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {displayedEvents.map((event) => (
            <Card
              key={event.id}
              className="event-card overflow-hidden bg-white"
            >
              <div className="grid grid-cols-2 gap-1 p-1">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-md"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  {event.category}
                </div>
                <h3 className="text-2xl font-bold mb-2 font-serif">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {event.description}
                </p>
                <Button className="group" variant="outline">
                  Read More
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {events.length > 2 && (
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? "Show Less" : "View All Events"}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
