import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, Eye, Palette, Image, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  altText,
  name,
  onPrevious,
  onNext,
  showNavigation,
}: {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  name: string;
  onPrevious: () => void;
  onNext: () => void;
  showNavigation: boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full h-full flex flex-col">
        <button
          onClick={onClose}
          className="self-end mb-4 text-white text-2xl hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <div className="flex-1 flex items-center justify-center min-h-0 relative">
          {showNavigation && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevious();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-10"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-10"
              >
                ›
              </button>
            </>
          )}
          <div className="relative w-full h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center min-h-0">
              <img
                src={imageSrc}
                alt={altText}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="flex-shrink-0 flex justify-center pt-4">
              <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-sm font-medium">{name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = ({ item }: { item: { id: string; name: string } }) => {
  const [modalData, setModalData] = useState<{
    src: string;
    alt: string;
    isAfter: boolean;
  } | null>(null);

  const openModal = (src: string, alt: string, isAfter: boolean) => {
    setModalData({ src, alt, isAfter });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const navigateModal = (toAfter: boolean) => {
    if (!modalData) return;
    const newSrc = toAfter ? `/${item.id}-depois.jpeg` : `/${item.id}-antes.jpeg`;
    const newAlt = toAfter ? "after image" : "before image";
    setModalData({ src: newSrc, alt: newAlt, isAfter: toAfter });
  };

  const handlePrevious = () => {
    if (!modalData) return;
    // Circular: if currently showing "before" (false), go to "after" (true)
    navigateModal(!modalData.isAfter);
  };

  const handleNext = () => {
    if (!modalData) return;
    // Circular: if currently showing "after" (true), go to "before" (false)
    navigateModal(!modalData.isAfter);
  };

  return (
    <>
      <div className="relative">
        <div className="relative h-64 sm:h-64 md:h-64 flex justify-center items-end group max-w-full overflow-hidden">
          {/* Name overlay on top - positioned relative to the container */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          </div>
          {/* Left Card (Left Hand) */}
          <div className="absolute bottom-0 left-1/2 w-2/5 sm:w-1/2 h-full bg-white rounded-lg shadow-lg transform -translate-x-3/4 -rotate-8 origin-bottom-center z-10 transition-all duration-500 ease-in-out group-hover:-translate-x-full group-hover:-rotate-12 overflow-hidden">
            <img
              src={`/${item.id}-antes.jpeg`}
              alt={"before image"}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              width={320}
              height={120}
              onClick={() =>
                openModal(`/${item.id}-antes.jpeg`, "before image", false)
              }
            />
          </div>

          {/* Right Card (Right Hand) */}
          <div className="absolute bottom-0 left-1/3 w-2/5 sm:w-1/2 h-full bg-white rounded-lg shadow-xl transform translate-x-1/4 rotate-8 origin-bottom-center z-20 transition-all duration-500 ease-in-out group-hover:translate-x-1/3 group-hover:rotate-12 overflow-hidden">
            <img
              src={`/${item.id}-depois.jpeg`}
              alt={"after image"}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              width={320}
              height={120}
              onClick={() =>
                openModal(`/${item.id}-antes.jpeg`, "before image", false)
              }
            />
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={modalData !== null}
        onClose={closeModal}
        imageSrc={modalData?.src || ""}
        altText={modalData?.alt || ""}
        name={item.name}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}
      />
    </>
  );
};

const GalleryPage = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    document.title = language === 'pt-BR'
      ? 'Galeria | MylineArts'
      : 'Gallery | MylineArts';
    window.scrollTo(0, 0);
  }, [language]);

  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const galleryData = {
    'pt-BR': {
      title: 'Galeria de transformações',
      subtitle: 'Veja como nossas transformações com IA dão vida às suas fotos, criando páginas para colorir únicas e adesivos personalizados',
      backToHome: 'Voltar para início',
      sections: [
        {
          icon: <Eye className="w-6 h-6 text-primary-500" />,
          title: 'Antes e depois',
          description: 'Explore nossa coleção de transformações reais feitas por nossa tecnologia de IA. Clique nas imagens para ver em tamanho completo.'
        },
        {
          icon: <Palette className="w-6 h-6 text-primary-500" />,
          title: 'Arte personalizada',
          description: 'Cada transformação mantém os detalhes importantes da foto original, criando páginas para colorir perfeitas para todas as idades.'
        },
        {
          icon: <Image className="w-6 h-6 text-primary-500" />,
          title: 'Qualidade profissional',
          description: 'Todas as imagens são processadas com nossa IA avançada, garantindo linhas nítidas e detalhes precisos para uma experiência de colorir excepcional.'
        },
        {
          icon: <Sparkles className="w-6 h-6 text-primary-500" />,
          title: 'Variedade de estilos',
          description: 'De retratos familiares a animais de estimação, nossa IA adapta-se a diferentes tipos de fotos, mantendo a essência de cada imagem.'
        }
      ],
      ctaTitle: 'Pronto para transformar suas fotos?',
      ctaDescription: 'Crie suas próprias páginas para colorir personalizadas e adesivos únicos a partir de suas memórias favoritas.',
      ctaButton: 'Começar agora'
    },
    'en': {
      title: 'Transformation gallery',
      subtitle: 'See how our AI transformations bring your photos to life, creating unique coloring pages and personalized stickers',
      backToHome: 'Back to home',
      sections: [
        {
          icon: <Eye className="w-6 h-6 text-primary-500" />,
          title: 'Before and after',
          description: 'Explore our collection of real transformations made by our AI technology. Click on images to view them full size.'
        },
        {
          icon: <Palette className="w-6 h-6 text-primary-500" />,
          title: 'Personalized art',
          description: 'Each transformation preserves the important details of the original photo, creating perfect coloring pages for all ages.'
        },
        {
          icon: <Image className="w-6 h-6 text-primary-500" />,
          title: 'Professional quality',
          description: 'All images are processed with our advanced AI, ensuring sharp lines and precise details for an exceptional coloring experience.'
        },
        {
          icon: <Sparkles className="w-6 h-6 text-primary-500" />,
          title: 'Variety of styles',
          description: 'From family portraits to pets, our AI adapts to different types of photos, maintaining the essence of each image.'
        }
      ],
      ctaTitle: 'Ready to transform your photos?',
      ctaDescription: 'Create your own personalized coloring pages and unique stickers from your favorite memories.',
      ctaButton: 'Get started'
    }
  };

  const currentData = galleryData[language] || galleryData['pt-BR'];

  const galleryItems = [
    { id: "labubu", name: "Labubu" },
    { id: "ze-cris", name: "Zé Neto e Cristiano" },
    { id: "lauana-violao", name: "Lauana Prado com violão" },
    { id: "casamento", name: "Casamento Bruna Lorenzoni" },
    { id: "gato", name: "Gatinho" },
    { id: "casal", name: "Leo & Ste" },
    { id: "capivara", name: "Capivara" },
    { id: "capa", name: "Mainara e Zanella" },
    { id: "china", name: "China" },
    { id: "ze", name: "Zé Neto" },
    { id: "dog", name: "Grace" },
    { id: "macaco", name: "Kipling" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <Link
              to={getLanguagePrefix() || '/'}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {currentData.backToHome}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {currentData.title}
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {currentData.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Info Sections */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentData.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="shrink-0 p-3 bg-primary-50 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 md:gap-24 mb-12"
          >
            {galleryItems.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentData.ctaTitle}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {currentData.ctaDescription}
              </p>
              <a
                href="https://app.mylinearts.com"
                className="btn btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                {currentData.ctaButton}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
