"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    id: 1,
    text: "10 aud for the beef wagyu bahnmi option, too good , too good. Toasted buns, amazing, chefs kiss",
    author: "Nonenone Ofyobizwacks",
    rating: 5
  },
  {
    id: 2,
    text: "everything we've tried from here were all pretty impressive. from the rice meal, the banh mi, and the pho, it was all impeccable! good portion sizes too; always a good value for your money. staffs were really accommodating and friendly too! would definitely recommend!",
    author: "Wil ang",
    rating: 5
  },
  {
    id: 3,
    text: "I recently tried the Roast Pork Pork Banh Mi and was very impressed! The crispy, soft, and fresh bread was excellent, providing a great balance of textures. The roast pork was tender and flavorful, and the pate and mayonnaise added a nice richness. The overall flavour was delicious, and I especially enjoyed the sweet and savoury balance. The staff was friendly and helpful.",
    author: "C.L",
    rating: 5
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="text-orange-600 text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal 
              key={review.id} 
              animation="fade-up" 
              delay={index * 100} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6 flex-grow">
                  {review.text}
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="font-serif font-bold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Verified Customer</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
