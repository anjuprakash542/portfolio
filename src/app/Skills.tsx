import Image from "next/image"
export default function Skills () {
    return(
        <>
        <div className="text-black flex flex-col md:flex-row justify-center items-center w-full gap-6 md:gap-8 mt-8 px-4 md:px-12 py-6">
            {/* Image */}
            <Image
                src="/Images/SKILLS.webp"
                alt="skill set image"
                width={320}
                height={180}
                className="mb-6 md:mb-0 w-full h-full md:h-1/2 shadow-xl shadow-gray-600"
            />

  {/* Skills Section */}
  <div className="flex flex-col items-center md:items-start w-full  md:w-1/2">
    <h2 className="bg-red-500 text-center text-white py-2 px-8 rounded-lg font-bold shadow-lg shadow-gray-800 text-lg">
     TECHNICAL &nbsp; SKILLS
    </h2>

    <ul className="flex flex-wrap justify-center md:justify-start items-center mt-6 gap-4 text-sm md:text-base">
      {[
        "Software Installation & Configuration",
        "Basic System Troubleshooting",
        "Windows & Linux Environment (Basics)",
        "Networking Fundamentals (TCP/IP, DNS, DHCP)",
        "Basic Network Troubleshooting",
        "Client-Server Architecture",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "C++",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Node.js",
        "MongoDB",
        "SQL",
        "REST API",
        "Express.js",
        "Redux",
        "ShadCN",
        "CRUD Operations",
        "Cursor",
        "Git",
      ].map((skill, index) => (
        <li
          key={index}
          className="bg-black px-4 py-2 rounded-lg shadow-lg shadow-gray-900 text-center text-white "
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
        </div>
        <div className="w-full mt-8 px-4 md:px-12 py-6 flex flex-col">
          <h2 className="text-xl font-bold text-center rounded-4xl bg-teal-600 text-white shadow-xl shadow-gray-800 p-2">
            Soft Skills or Interpersonal Skills
          </h2>
          <div className="mt-8 bg-gray-100 p-4 shadow-2xl shadow-gray-700  text-gray-500 font-semibold">
          - 🤝 Strong verbal and written communication skills — regularly interacted with team members, clients, and non-technical stakeholders. <br/>
          - 🎯 Clear and concise in conveying ideas, requirements, and feedback. <br/>
          - 💬 Fluent in English and Malayalam; confident in public speaking and presentations.<br/>
          - 🌱 Adaptable and quick learner — open to feedback and continuous improvement.<br/>
          - 📢 Conducted sessions as an external faculty, explaining complex topics like Nursing Informatics and Mathematics in simple ways.<br/>
          - 🧭 Strong leadership qualities — took initiative in guiding peer developers, organizing sessions, and supporting team members to meet project goals.<br/>

          - ⚖️ Ethical and honest — known for integrity, transparency, and maintaining a high standard of personal and professional ethics in all engagements.<br/>
          </div>

        </div>
        </>

    )
}