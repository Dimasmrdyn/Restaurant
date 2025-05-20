export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-bold mb-3">Foodie's Delight</h3>
          <p className="text-gray-400">
            Serving passion on every plate. A place where taste meets comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition">Menu</a></li>
            <li><a href="#reservation" className="text-gray-300 hover:text-yellow-400 transition">Reservation</a></li>
            <li><a href="#location" className="text-gray-300 hover:text-yellow-400 transition">Location</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition">About</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400">123 Culinary Street<br />Food City, FL 12345</p>
          <p className="text-gray-400 mt-2">Email: hello@foodiesdelight.com<br />Phone: (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Foodie's Delight. All rights reserved.
      </div>
    </footer>
  );
};
