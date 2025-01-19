"use client";
import Principal from "../../SchoolPics/Principal.jpg";
import { useState } from "react";
export default function PrincipalMessage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="relative bg-blue-100">
      {/* Top Curved Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 35 300 150"
          preserveAspectRatio="none"
          className="w-full h-[180px]"
        >
          <path
            d="M0,50 C150,150 350,0 500,50 L500,150 L0,150 Z"
            fill="#3B82F6"
          />
        </svg>
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto py-16 px-6 md:px-12 bg-white rounded-lg shadow-lg">
        {/* Principal's Photo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={Principal} // Replace with the actual photo path
            alt="Principal"
            className="w-[450px] h-[450px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Principal's Message */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Message from <span className="text-blue-600">Principal</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Dear Students, Parents, and Staff, I hope this message finds you in
            good health and high spirits. As we embark on a new academic year, I
            want to express my heartfelt gratitude to each one of you for being
            an integral part of our school community. Our Vision: Excellence in
            Education At East Horizon English High School, we believe that
            education is not just about textbooks and exams; it’s about
            nurturing curious minds, fostering creativity, and building
            character. Our dedicated teachers and staff work tirelessly to
            create an environment where students can thrive academically,
            socially, and emotionally.
          </p>

          {isExpanded ? (
            <p className="text md:text text-gray-600 leading-relaxed">
              What to Expect This Year Innovative Learning: Get ready for
              exciting new teaching methods, interactive workshops, and
              collaborative projects. Community Engagement: We’ll continue to
              strengthen our ties with parents, local organizations, and the
              wider community. Wellness Focus: Mental and physical well-being
              are paramount. Look out for mindfulness sessions, sports events,
              and health initiatives. Your Role As students, you are the heart
              of our school. Your enthusiasm, curiosity, and kindness inspire us
              every day. Parents, your unwavering support and partnership are
              invaluable. And to our dedicated staff, thank you for your
              commitment to shaping young minds. Let’s Make This Year
              Remarkable! Together, let’s create memories, overcome challenges,
              and celebrate achievements. Whether you’re a returning student or
              joining us for the first time, know that you belong here—a part of
              our vibrant and caring school family. Wishing you all a fantastic
              year ahead! Sandeep Rai, Principal, East Horizon English High
              School.
            </p>
          ) : null}

          <button
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition"
            onClick={handleToggle}
          >
            {isExpanded ? <span>Read Less</span> : <span>Read More</span>}
          </button>
        </div>
      </div>
    </section>
  );
}
