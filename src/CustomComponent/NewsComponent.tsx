import { Card } from "@/components/ui/card";
import WorldSchoolSummit from "../../SchoolPics/WorldSchoolSummit.jpg";
import MalaysiaPic1 from "../../SchoolPics/MalaysiaPic1.jpg";
import Greet3 from "../../SchoolPics/Greet3.jpg";
interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "School is Awarded the Best All Rounder School Award",
    description:
      "Our students showcased exceptional talent and innovation at the National Science Fair, bringing home the top prize.",
    date: "2022-01-18",
    image: WorldSchoolSummit,
  },
  {
    id: "2",
    title: "Our Principal receives a Master's Degree in Education",
    description:
      "Exciting news! Our state-of-the-art STEM lab will be inaugurated next month, providing cutting-edge resources for our students.",
    date: "2024-04-05",
    image: MalaysiaPic1,
  },
  {
    id: "3",
    title: "Alumni Achieves Breakthrough in their achievements",
    description:
      "We're proud to announce that one of our alumni has made a significant breakthrough in cancer research at a leading university.",
    date: "2024-03-22",
    image: Greet3,
  },
];

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <Card className="flex overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-1/3">
        <img
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-4 relative">
        <div className="text-xs text-gray-500 absolute top-2 right-2">
          {news.date}
        </div>
        <h3 className="text-lg font-bold mb-2 pr-16">{news.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{news.description}</p>
      </div>
    </Card>
  );
}

export function NewsComponent() {
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4 p-4">
        {newsItems.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
