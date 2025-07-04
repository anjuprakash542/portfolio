export default function Certification() {
    return (
      <div className="w-full bg-[url('/Images/certification.jpg')] bg-cover bg-contain bg-center bg-no-repeat shadow-xl shadow-gray-800 mt-8 px-4 md:px-12 py-22">
        <section className="w-full max-w-lg mx-auto bg-transparent text-white rounded-full flex flex-col justify-center items-center px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-red-600 px-4 py-2 rounded shadow-lg shadow-gray-900">
            CERTIFICATION IN MERN STACK
          </h2>
          <a href="/Anju Prakash_certificate_2103928.pdf" download>
            <button className="bg-black cursor-pointer p-3 md:p-4 text-center rounded-xl font-bold shadow-xl shadow-gray-800">
              Download Certificate
            </button>
          </a>
        </section>
      </div>
    );
  }
  