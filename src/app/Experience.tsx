
export default function Experience (){
    return (
        <>
            <section className="w-full mt-8 px-4 md:px-12 py-6">
                <h2 className="text-2xl font-bold mb-6 text-center bg-red-500 text-white rounded-4xl shadow-xl shadow-gray-700 p-2">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* GreenFi Experience */}
                    <div className="bg-gray-100 rounded-xl shadow-md shadow-gray-700 text-gray-500 font-semibold p-6">
                        <h3 className="text-xl font-bold text-green-700 ">Junior Full Stack Developer – GreenFi</h3>
                        <p className="text-sm text-gray-500">June 2024 – June 2025</p>
                            
                        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                                <li>Worked on ESG modules using React, TypeScript, and Tailwind CSS.</li>
                                <li>Communicated daily with cross-functional teams and stakeholders.</li>
                                <li>Participated in code reviews and improved UI responsiveness.</li>
                                <li>Contributed to backend development and resolved bugs using Node.js and SQL</li>
                        </ul>
                    </div>

                    {/* External Faculty Experience */}
                    <div className="bg-gray-100 rounded-xl shadow-md p-6 shadow-gray-700 text-gray-500 font-semibold">
                        <h3 className="text-xl font-bold text-blue-700">External Faculty</h3>
                        <p className="text-sm text-gray-500">Aug 2022 – October 2023</p>
                        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                                <li>Taught Nursing Informatics and Mathematics to undergraduate students.</li>
                                <li>Developed engaging, simplified lessons for non-technical learners.</li>
                                <li>Received positive feedback for clarity and professionalism.</li>
                                <li>Demonstrated leadership and integrity in educational delivery.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}