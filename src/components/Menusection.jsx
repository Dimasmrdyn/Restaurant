import dish1 from "../assets/burger1.jpg";
import dish2 from "../assets/burger2.jpg";
import dish3 from "../assets/idnfood3.jpg";
import dish4 from "../assets/idnfood2.jpg";
import dish5 from "../assets/idnfood1.jpg";
import dish6 from "../assets/idnfood4.jpg";
import dish7 from "../assets/idnfood5.jpg";
import dish8 from "../assets/idnfood6.jpg";
import dish9 from "../assets/idnfood7.jpg";
import dish10 from "../assets/idnfood8.jpg";

export const MenuSection = () => {
  const menuItems = [
    {
      img: dish1,
      title: "Grilled Salmon",
      desc: "Fresh salmon with herbs and lemon butter sauce.",
      price: "$18.99",
    },
    {
      img: dish2,
      title: "Steak Deluxe",
      desc: "Juicy sirloin steak served with garlic mashed potatoes.",
      price: "$22.50",
    },
    {
      img: dish3,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish4,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish5,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish6,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish7,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish8,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish9,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
    {
      img: dish10,
      title: "Pasta Primavera",
      desc: "Classic pasta tossed with seasonal vegetables.",
      price: "$14.75",
    },
  ];

  return (
    <section id="menu" className="bg-black py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">Our Menu</h2>
        <p className="text-white text-lg">
          A curated selection of our chef’s favorite dishes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <p className="text-yellow-600 font-bold text-lg">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
