import properties from "../data/properties";
const Properties = () => {
  return (
    <div className="bg-[#FCFAF8] p-2 md:p-10">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-[#4D3E33] mb-8">
          Featured Properties
        </h1>
        <p className="text-center text-xl text-[#7a6f66] mb-6">
          Handpicked apartments available for immediate booking
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 md:m-10 mb-5 ">
          {properties.map((property) => (
            <div
              key={property.id}
              className="rounded-3xl group bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className=" w-full h-64 group-hover:scale-110 
              transition-transform duration-700 rounded-t-3xl"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full">
                  {property.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-start text-xl font-bold text-[#4D3E33] mt-1">
                  {property.title}
                </h2>
                <p className="text-[#967760] text-start flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {property.location}
                </p>
                <p className="text-primary text-2xl text-start font-bold mt-4">
                  {property.price}
                </p>

                <div className="flex flex-wrap gap-2 py-8">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-sm font-semibold text-[#4D3E33]  bg-[#E0EDF7] px-3 py-1 rounded-xl"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div>
                  <button className="w-full group-hover:bg-primary-glow  duration-300  items-center justify-center rounded-2xl px-4 py-2 bg-[#F18C5A] text-lg font-semibold text-white hover:-translate-y-0.5">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className=" group-hover:bg-primary-glow  duration-300  border border-[#F18C5A] items-center justify-center rounded-lg px-20 py-2 bg-[#ffffff] text-lg font-semibold text-[#F18C5A]
        hover:bg-[#F18C5A] hover:text-white hover:border-[#F18C5A] hover:-translate-y-0.5"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Properties;
