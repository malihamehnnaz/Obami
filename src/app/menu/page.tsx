import { Star } from "lucide-react";

const menuCategories = [
  {
    id: "roast-pork",
    name: "Roast Pork",
    items: [
      {
        name: "Roast Pork Banh Mi",
        price: "15.50",
        description: "Crispy baguette filled with roast pork, fresh cilantro, cucumber, pickled carrots, and sliced chili peppers.",
        image: "https://obami.com.au/wp-content/uploads/2025/11/imgi_69_ALd4DhGTmKAdiSeXEu2Z8RkGOMDRIkeQBfZfHqALiJgp3rvatURHoYOEnov8sqJqqzjDIVOGuk9RO5NarMc2RJH-MnNZL6_eXIZyKuhvgZ1JDS2pTxAs0gCyaR2w_VuvuRbd4u7t4rAhAOZyKNhHg4U8lXf7OYcFxADqlQ4nVBSqzjlvm-300x240.png"
      },
      // Add more items as needed
    ]
  },
  {
    id: "soup",
    name: "Soup",
    items: [
      {
        name: "Spicy Beef Noodle Soup / Bun Bo Hue",
        price: "25.00",
        description: "Spicy. Sliced beef, beef brisket & beef ball.",
        image: "https://obami.com.au/wp-content/uploads/2025/11/imgi_315_36bd3563-8d24-45e9-aea0-5687f8eeddd8-retina-large-300x240.png"
      },
      {
        name: "Pho",
        price: "25.00",
        description: "Sliced beef, beef ball & beef brisket.",
        image: "https://obami.com.au/wp-content/uploads/2025/11/imgi_317_7fde5974-b621-4d89-8699-92af9779b780-retina-large-300x240.png"
      }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      {
        name: "Steamed Rice",
        price: "25.00",
        description: "With crispy chicken, grilled pork shoulder or grilled pork chop with fish sauce.",
        image: null
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="bg-white min-h-screen py-24 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Discover the authentic tastes of Vietnam, prepared fresh daily.
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-10 border-b border-gray-200 pb-4">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col group">
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif italic">
                          Image Coming Soon
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                        <span className="text-orange-600 font-bold text-lg ml-2 flex-shrink-0">A${item.price}</span>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                        {item.description}
                      </p>
                      <a 
                        href="https://www.ubereats.com/au/store/obami/UXcrBC3PSjmUGlCklwod9Q?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full mt-auto bg-orange-600 text-white py-2.5 text-center text-sm font-semibold uppercase tracking-wide rounded-md hover:bg-orange-700 transition-colors"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}