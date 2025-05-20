export const ReservationSection = () => {
  return (
    <section id="reservation" className="bg-black py-16 px-6">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Reservation</h2>
        <p className="text-white text-lg">
          Book your table in advance and enjoy your meal with no wait!
        </p>
      </div>

      <form className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email or Phone"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Number of Guests"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="datetime-local"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Book Now
        </button>
      </form>
    </section>
  );
};
