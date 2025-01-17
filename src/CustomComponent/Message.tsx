"use client";
import Principal from "../../SchoolPics/Principal.jpg";
export default function PrincipalMessage() {
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
            Welcome to <span className="text-blue-600">Our School</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            It is with great pride and joy that I welcome you to our school
            website. Here at [School Name], we believe in fostering a nurturing
            environment where every child feels valued, inspired, and empowered
            to reach their full potential.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our dedicated team of educators works tirelessly to deliver a
            curriculum that is not only academically challenging but also
            creative, inclusive, and enriching. Together, we cultivate a
            community of learners who are prepared to thrive in a dynamic and
            ever-changing world.
          </p>
          <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
