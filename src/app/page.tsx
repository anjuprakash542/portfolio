'use client'
import { useState } from "react";
import Image from "next/image";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experience from "./Experience";
import Certification from "./Certifications";
import Education from "./Education";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative bg-gray-200 min-h-screen">
      <div className="absolute top-0 left-0 right-0">
        {/* Header */}
        <header className="bg-white h-16 w-[90%] md:w-[80%] mx-auto mt-4 rounded-3xl shadow-xl shadow-gray-400 flex justify-between items-center px-4 md:px-8">
          <div>
            <Image
              src="/Images/LETTER_A_LOGO.png"
              alt="Anju Prakash logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <ul className="hidden sm:flex flex-wrap justify-between items-center gap-4 text-sm font-bold text-gray-600">
            <a href="#skills">
            <li>SKILLS</li>
            </a>
            
            <a href="#experience">
            <li>EXPERIENCE</li>
            </a>
            <a href="mailto:anjuprakash542@gmail.com">
            <li>CONTACT</li>
            </a>
            <li>
              <a href="/AnjuPrakashCV.pdf" download>
                <button className="rounded-xl px-6 py-2 bg-red-500 text-white hover:bg-red-600 transition font-bold">
                  Download CV
                </button>
              </a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <button
            className="block sm:hidden text-2xl font-bold bg-gray-600 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <ul className="absolute top-16 right-4 bg-white shadow-lg rounded-xl p-4 space-y-2 text-sm font-bold text-gray-700 z-50 md:hidden">
              <a href="#skills">
                <li>SKILLS</li>
              </a>

              <a href="#experience">
                <li>EXPERIENCE</li>
              </a>
              
              <a href="mailto:anjuprakash542@gmail.com">
                <li>CONTACT</li>
              </a>
              
              <li>
                <a href="/AnjuPrakashCV.pdf" download>
                  <button className="w-full rounded-xl px-4 py-2 bg-red-500 text-white hover:bg-red-600 font-bold shadow-xl shadow-red-900">
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          )}

        </header>

        {/* Main Content */}
        <main className="w-full mt-8 px-4 md:px-12 py-10 text-gray-800">
          <div className="w-full bg-gray-100 shadow-xl shadow-gray-600 p-12 rounded-lg max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10">
            {/* Text Section */}
            <section className="w-full md:w-1/2 flex flex-col items-start gap-4">
              <div>
                <div className="text-lg md:text-2xl font-medium text-orange-600">I am</div>
                <div className="text-gray-800 font-bold text-2xl md:text-3xl">Anju Prakash</div>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                A Full Stack Developer passionate about building scalable web apps using&nbsp;
                <span className="font-semibold text-gray-900">
                  React.js, Next.js, TypeScript, and modern tools.
                </span>
              </p>
            </section>

            {/* Profile Image */}
            <Image
              src="/Images/profilePic.jpg"
              alt="Anju Prakash Profile Picture"
              width={180}
              height={180}
              className="rounded-full shadow-xl shadow-gray-600"
            />
          </div>

          {/* About Me Section */}
          <div className="w-full mt-24">
            <AboutMe />
          </div>

          <div id="skills" className="w-full mt-24">
            <Skills/>
          </div>
          
          <div id ="experience" className="w-full mt-24">
           <Experience/>
          </div>

          <div className="w-full mt-24">
              <Certification/>
          </div>

          <div className="w-full mt-24">
              <Education/>
          </div>
        </main>
        <footer className="bg-black text-white px-4 md:px-12 mt-8 py-12">
        
          <ul className="flex justify-between ">
            <li>
               Email: <span className="text-white"> anjuprakash542@gmail.com </span>
            </li>
             <li>
               Contact: <span className="text-white"> +91 8086818835 </span>
             </li>
             <li>
              Linkedin : <span className="text-white"> www.linkedin.com/in/anju-prakash-fullstackdeveloper </span>
             </li>
           </ul>
        </footer>
      </div>
    </div>
  );
}
