import aboutImg from "../assets/pizza2.png"; // Pastikan kamu punya gambar ini

export const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Gambar */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Teks */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Our Restaurant</h2>
          <p className="text-gray-700 text-lg mb-4">
            At <span className="font-semibold text-yellow-600">Foodie's Delight</span>, we believe food is not just about taste — it's an experience.
            Founded in 2021, our mission is to bring joy through carefully crafted meals, cozy ambiance, and warm hospitality.
          </p>
          <p className="text-gray-600">
            Whether you're celebrating with family or just enjoying a quiet dinner, our chefs are ready to serve dishes that make memories.
            Come and feel the difference of true passion in every bite.
          </p>
        </div>
      </div>
    </section>
  );
};
