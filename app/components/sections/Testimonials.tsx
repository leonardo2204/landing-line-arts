import { Star, ExternalLink } from "lucide-react";
import { mockTestimonials } from "../../utils/mockData";
import { useLanguage } from "../../context/LanguageContext";

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonialsData = {
    "pt-BR": {
      title: "O que nossos clientes dizem",
      subtitle:
        "Junte-se a milhares de clientes satisfeitos que criaram livros de colorir personalizados",
    },
    en: {
      title: "What our customers say",
      subtitle:
        "Join thousands of happy customers who've created personalized coloring books",
    },
  };

  const currentData = testimonialsData[language] || testimonialsData["pt-BR"];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-warning-500 fill-warning-500" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockTestimonials.map((testimonial) => (
            <a
              key={testimonial.id}
              href={testimonial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                  </div>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.testimonial[language] || testimonial.testimonial["pt-BR"]}"
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
