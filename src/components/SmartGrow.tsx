const SmartGrow = () => {
  const content = {
    title: "Farm Smarter, Grow Together",
    description: [
      "Empowering farmers with simple digital tools, real-time insights, and a supportive community to boost productivity and profits",
      "Join a growing network of farmers using smart tools, market insights, and expert guidance to make better decisions and achieve more together",
      "From weather updates to mandi rates and crop advice, we help you farm smarter while connecting you with a community that grows stronger together.",
    ],
    images: [
      {
        src: "/smartgrow1.png",
        alt: "Farmer using digital tools for crop management",
      },
      { src: "/smartgrow2.png", alt: "Real-time market insights dashboard" },
      { src: "/smartgrow3.png", alt: "Community of farmers collaborating" },
      { src: "/smartgrow4.png", alt: "Weather and crop advisory interface" },
    ],
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-white"
      aria-labelledby="smartgrow-title"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 mb-10 md:mb-14">
        <h2
          id="smartgrow-title"
          className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#022B27] md:w-2/5"
        >
          {content.title}
        </h2>
        <div className="flex flex-col gap-4 md:w-3/5">
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-[#022B27]">
            {content.description[0]}
          </p>
          {content.description.slice(1).map((text, index) => (
            <p
              key={`desc-${index}`}
              className="font-normal text-sm sm:text-base text-[#808380]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center md:grid md:grid-cols-4">
        {content.images.map((image, index) => (
          <img
            key={`img-${index}`}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="
              w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-full 
              max-w-[250px] md:max-w-none object-cover rounded-2xl
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:-translate-y-2 hover:shadow-xl
              hover:brightness-110
              animate-fadeIn"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "backwards",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SmartGrow;
