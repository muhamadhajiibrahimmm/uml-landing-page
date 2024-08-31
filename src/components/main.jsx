import React from "react";
import DitalTecnology from "../assets/picture/digital_technology.jpg";
import Tecnology2024 from "../assets/picture/tecnology_2024.jpg";
import Tecnologymendunia from "../assets/picture/tecnology_mendunia.png";
import LogoPetra from "../assets/picture/logo_petra.png";
import LogoMicrosoft from "../assets/picture/logo_Microsoft.png";
import LogoAti from "../assets/picture/ati.png";

const Main = () => {
  return (
    <main className="bg-[#081827] py-16">
      {/* Existing Section */}
      <div
        id="home"
        className="container mx-auto px-4 flex flex-col md:flex-row items-center"
      >
        {/* Left Side: Title and Description */}
        <div className="md:w-4/5 mb-8 md:mb-0 md:pl-12 text-center">
          <h2 className="text-5xl font-bold text-sky-300 mb-6">TechGuard</h2>
          <p className="text-white text-lg mb-4">
            Protecting your digital world with cutting-edge technology and
            innovative solutions. At TechGuard, we ensure that your tech journey
            is safe, secure, and always ahead of the curve.
          </p>
          <a href="#partners" className="my-2">
            <button className="transition-all duration-500 text-white py-3 px-12 bg-sky-500 font-semibold rounded-3xl hover:text-sky-500 hover:bg-white">
              View Partners
            </button>
          </a>
        </div>

        {/* Right Side: Photo */}
        <div className="md:w-5/5 px-5">
          <img
            src={DitalTecnology}
            alt="TechGuard"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="my-16"></div>

      {/* New Section: Technology Explanation and Additional Photos */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          {/* Centered Text Section */}
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Understanding Technology
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              Technology is a driving force behind modern innovation and
              progress. It encompasses a broad range of fields, from software
              and hardware to emerging technologies like artificial intelligence
              and quantum computing.
            </p>
            <p className="text-gray-600 text-lg">
              Staying informed about technological advancements is crucial for
              leveraging their benefits and staying ahead in various industries.
              From enhancing productivity to fostering new innovations,
              technology plays a pivotal role in shaping the future.
            </p>
          </div>

          {/* Photos Below Text */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={Tecnology2024}
              alt="Technology 2024"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
            />
            <img
              src={Tecnologymendunia}
              alt="Technology mendunia"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex py-6">
            <a href="#" className="mx-auto">
              <button className="transition-all duration-500 text-white py-3 px-12 bg-sky-500 font-semibold rounded-3xl hover:opacity-80">
                Back to top
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* New Section: Three Photos Horizontally */}
      <section id="partners" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Our Partners
          </h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10">
            <img
              src={LogoPetra}
              alt="Logo Petra"
              className="h-64 rounded-lg "
            />
            <img src={LogoAti} alt="Logo Ati" className="h-64 rounded-lg " />
            <img
              src={LogoMicrosoft}
              alt="Logo Microsoft"
              className="h-64 rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
