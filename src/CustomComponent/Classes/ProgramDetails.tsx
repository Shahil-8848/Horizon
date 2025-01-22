import React from "react";
import { useParams } from "react-router-dom";
import { ArrowRight, Book, Users, Clock, Award } from "lucide-react";
import Kids from "../../../SchoolPics/Kids.jpg";
import Event3 from "../../../SchoolPics/Event3.jpg";
import GroupPic from "../../../SchoolPics/GroupPic.jpg";
import Plus2Pics5 from "../../../SchoolPics/Plus2Pics5.jpg";

const programData = {
  montessori: {
    title: "Montessori Program",
    ageGroup: "Age 3-5",
    description:
      "Our Montessori program nurtures young minds through hands-on learning experiences, fostering independence and creativity in a supportive environment.",
    imageUrl: Kids,
    features: [
      {
        icon: Book,
        title: "Hands-on Learning",
        description: "Interactive materials for sensory development",
      },
      {
        icon: Users,
        title: "Mixed Age Groups",
        description: "Collaborative learning environment",
      },
      {
        icon: Clock,
        title: "Flexible Schedule",
        description: "Child-led pacing for activities",
      },
      {
        icon: Award,
        title: "Holistic Development",
        description: "Focus on cognitive, social, and emotional growth",
      },
    ],
    curriculum: [
      "Practical Life Exercises",
      "Sensorial Activities",
      "Language Development",
      "Mathematics Introduction",
      "Cultural Studies",
    ],
    testimonial: {
      quote:
        "The Montessori program has been transformative for our daughter. She's become more independent and curious about the world around her.",
      author: "Sarah Thompson, Parent",
    },
  },
  primary: {
    title: "Montessori Program",
    ageGroup: "Age 3-5",
    description:
      "Our Montessori program nurtures young minds through hands-on learning experiences, fostering independence and creativity in a supportive environment.",
    imageUrl: Event3,
    features: [
      {
        icon: Book,
        title: "Hands-on Learning",
        description: "Interactive materials for sensory development",
      },
      {
        icon: Users,
        title: "Mixed Age Groups",
        description: "Collaborative learning environment",
      },
      {
        icon: Clock,
        title: "Flexible Schedule",
        description: "Child-led pacing for activities",
      },
      {
        icon: Award,
        title: "Holistic Development",
        description: "Focus on cognitive, social, and emotional growth",
      },
    ],
    curriculum: [
      "Practical Life Exercises",
      "Sensorial Activities",
      "Language Development",
      "Mathematics Introduction",
      "Cultural Studies",
    ],
    testimonial: {
      quote:
        "The Montessori program has been transformative for our daughter. She's become more independent and curious about the world around her.",
      author: "Sarah Thompson, Parent",
    },
  },
  secondary: {
    title: "Secondary Program",
    ageGroup: "Age 3-5",
    description:
      "Our Montessori program nurtures young minds through hands-on learning experiences, fostering independence and creativity in a supportive environment.",
    imageUrl: GroupPic,
    features: [
      {
        icon: Book,
        title: "Hands-on Learning",
        description: "Interactive materials for sensory development",
      },
      {
        icon: Users,
        title: "Mixed Age Groups",
        description: "Collaborative learning environment",
      },
      {
        icon: Clock,
        title: "Flexible Schedule",
        description: "Child-led pacing for activities",
      },
      {
        icon: Award,
        title: "Holistic Development",
        description: "Focus on cognitive, social, and emotional growth",
      },
    ],
    curriculum: [
      "Practical Life Exercises",
      "Sensorial Activities",
      "Language Development",
      "Mathematics Introduction",
      "Cultural Studies",
    ],
    testimonial: {
      quote:
        "The Montessori program has been transformative for our daughter. She's become more independent and curious about the world around her.",
      author: "Sarah Thompson, Parent",
    },
  },

  plus26: {
    title: "Higher Secondary Program",
    ageGroup: "Age 15-19",
    description:
      "Our Montessori program nurtures young minds through hands-on learning experiences, fostering independence and creativity in a supportive environment.",
    imageUrl: Plus2Pics5,
    features: [
      {
        icon: Book,
        title: "Hands-on Learning",
        description: "Interactive materials for sensory development",
      },
      {
        icon: Users,
        title: "Mixed Age Groups",
        description: "Collaborative learning environment",
      },
      {
        icon: Clock,
        title: "Flexible Schedule",
        description: "Child-led pacing for activities",
      },
      {
        icon: Award,
        title: "Holistic Development",
        description: "Focus on cognitive, social, and emotional growth",
      },
    ],
    curriculum: [
      "Practical Life Exercises",
      "Sensorial Activities",
      "Language Development",
      "Mathematics Introduction",
      "Cultural Studies",
    ],
    testimonial: {
      quote:
        "The Montessori program has been transformative for our daughter. She's become more independent and curious about the world around her.",
      author: "Sarah Thompson, Parent",
    },
  },
  // Add data for other programs here (primary, secondary, higher-secondary)
};

export default function ProgramDetails() {
  const { programId } = useParams<{ programId: string }>();
  const program = programData[programId as keyof typeof programData];
  // const ParameterId= program.title
  if (!program) {
    return <div className="bg-red-500 pt-50">Program not found</div>;
  }

  return (
    <div className="bg-gray-50 pt-50">
      {/* Hero Section */}
      <section className="relative h-[80vh]  min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={program.imageUrl || "/placeholder.svg"}
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {program.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">{program.ageGroup}</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Program Description */}
        <section id="learn-more" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Our {program.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {program.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {program.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Curriculum Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.curriculum.map((item, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonial */}
        <section className="bg-primary text-white p-8 rounded-lg">
          <blockquote className="text-xl italic mb-4">
            "{program.testimonial.quote}"
          </blockquote>
          <p className="font-semibold">- {program.testimonial.author}</p>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our {program.title}?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Take the first step towards your child's bright future.
          </p>
          <a
            href="/apply"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Apply Now <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
