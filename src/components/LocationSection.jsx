export const LocationSection = () => {
  return (
    <section id="location" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
        <p className="text-gray-600 text-lg">
          Visit our restaurant at Bojong, Purwakarta — feel the taste of tradition.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.291254875115!2d107.45886175857996!3d-6.641007767196381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6922fc9bb3e2b9%3A0x36d0844aa1e27a94!2sJl.%20Raya%20Sawit%2C%20Bojong%2C%20Kec.%20Bojong%2C%20Kabupaten%20Purwakarta%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
