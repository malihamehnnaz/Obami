import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <h1 className="relative z-20 text-5xl md:text-7xl font-serif font-bold text-white tracking-wider animate-fade-in-up">About OBA'MI</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 ornamental-bottom">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At OBA'MI, we believe great food should be simple, fresh, and full of flavor. Inspired by the streets of Vietnam and crafted with a modern twist, our mission is to bring you the authentic taste of Vietnamese banh mi — made fresh daily with premium ingredients.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              From our crisp baguettes to our homemade sauces and perfectly balanced fillings, every detail reflects our passion for quality and taste. Whether you're grabbing a quick lunch, a takeaway bite, or enjoying a relaxing meal with friends, OBA'MI is here to serve comfort, culture, and creativity in every bite.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              Experience the warmth of Vietnamese street food — reimagined for Sydney's vibrant food scene.
            </p>
          </div>
          <div className="h-[500px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-serif animate-slide-in-right hover-lift transition-elegant overflow-hidden">
            <img src="https://lyquan.com.au/wp-content/uploads/2025/04/vietnamese-food-hobart-.webp" alt="OBA'MI Restaurant" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Why Choose OBA'MI Section */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 ornamental-bottom">Why Choose OBA'MI?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up-delay-1 hover-lift transition-elegant p-8 border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-orange-600 flex-shrink-0 animate-scale-in" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Authentic Taste</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We bring the true flavors of Vietnam to your plate, made with high-quality ingredients and traditional recipes that have been perfected over generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up-delay-2 hover-lift transition-elegant p-8 border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-orange-600 flex-shrink-0 animate-scale-in" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Fresh Ingredients</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our meals are prepared with the freshest vegetables, meats, and herbs, ensuring a delicious experience every time you visit us.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up-delay-2 hover-lift transition-elegant p-8 border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-orange-600 flex-shrink-0 animate-scale-in" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Friendly Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're grabbing a quick bite or enjoying a leisurely meal, our team is dedicated to making your visit enjoyable and memorable.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up-delay-3 hover-lift transition-elegant p-8 border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-orange-600 flex-shrink-0 animate-scale-in" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Convenient Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Situated in the heart of Surry Hills at 318 Elizabeth St, we're easy to find and perfect for a quick lunch or dinner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Ready to Taste Authentic Vietnam?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Visit us today and experience the perfect blend of traditional Vietnamese flavors with a modern Australian touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/menu" 
              className="inline-block px-8 py-3 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-elegant hover-lift hover-glow rounded-lg"
            >
              View Our Menu
            </Link>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-elegant hover-lift rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}