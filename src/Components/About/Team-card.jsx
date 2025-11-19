import { FaPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamCards = ({ item }) => {
  return (
    <div className="relative group bg-[url('/download.svg')] bg-[#F2F3F5] bg-no-repeat bg-center bg-contain w-[400px] h-[500px] rounded-[16px] overflow-hidden">

      {/* Image */}
      <div>
        <img
          src={item.photo}
          alt="Team Photo"
          className="w-full h-auto p-4 rounded-[28px]"
        />
      </div>

      {/* Text section */}
      <div className="ml-16">
        <h2 className="text-2xl font-bold mt-4">Our Dedicated Team</h2>
        <p className="text-gray-600 mt-2">Meet the professionals.</p>
      </div>

      {/* --- SOCIAL ICONS --- */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-3">

        {/* Social icons wrapper */}
        <div className="flex flex-col items-center 
          opacity-0 translate-y-6
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500 space-y-3">

          <a className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 duration-300">
            <FaFacebookF className="text-blue-600" />
          </a>
          <a className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 duration-300">
            <FaInstagram className="text-pink-500" />
          </a>
          <a className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 duration-300">
            <FaLinkedinIn className="text-blue-700" />
          </a>
          <a className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 duration-300">
            <FaTwitter className="text-sky-500" />
          </a>

        </div>

        {/* Plus icon */}
        <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full shadow-lg 
          text-white text-2xl cursor-pointer 
          group-hover:rotate-45 transition-all duration-500">
          <FaPlus />
        </div>

      </div>
    </div>
  );
};

export default TeamCards;
