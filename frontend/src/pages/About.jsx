import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        About Us
      </h1>

      {/* Intro */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 p-8 mb-8 group transition duration-500">
        <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

        <p className="relative z-10 text-gray-600 text-lg group-hover:text-white transition duration-500">
          The Student Directory platform is designed to help people find and explore
          student information easily. It creates a bridge between students and
          opportunities by providing access to essential academic and personal
          information in a structured way.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="relative overflow-hidden rounded-xl border border-blue-600 p-8 group transition duration-500">
          <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 group-hover:text-white transition duration-500">
              Our Mission
            </h2>
            <p className="text-gray-600 group-hover:text-gray-200 transition duration-500">
              Our mission is to create a centralized student information system
              that makes it easy to search, connect, and collaborate.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="relative overflow-hidden rounded-xl border border-green-600 p-8 group transition duration-500">
          <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-3 text-green-600 group-hover:text-white transition duration-500">
              Our Vision
            </h2>
            <p className="text-gray-600 group-hover:text-gray-200 transition duration-500">
              We aim to build a modern digital platform that supports students,
              educational institutions, and communities through accessible
              information.
            </p>
          </div>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="relative overflow-hidden rounded-xl border border-gray-300 p-8 mt-8 group transition duration-500">
        <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

        <div className="relative z-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition duration-500">
            Why This Platform?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-600 group-hover:text-gray-200 transition duration-500">
            <li>Easy access to student information</li>
            <li>Quick search & filtering system</li>
            <li>Supports networking & collaboration</li>
            <li>Modern and user-friendly design</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;