import heroImg from "../assets/pizaa1.png";

export const HeroSection = () => {
  return (
    <section id="home"
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay transparan full screen */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-mono-SFMono-Regular md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Foodie's Delight
          </h1>
          <p className="text-lg italic md:text-xl text-white drop-shadow-md">
            Serving passion on every plate — taste the experience!
          </p>
        </div>
      </div>
    </section>
  );
};
