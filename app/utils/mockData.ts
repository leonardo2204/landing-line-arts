// Mock data for development purposes

export const mockBeforeAfterImages = [
  {
    id: "2",
    title: {
      en: "Pet companion",
      "pt-BR": "Companheiro de estimação",
    },
    before: "/gato-antes.jpeg",
    after: "/gato-depois.jpeg",
    description: {
      en: "Create a coloring page of your furry friend.",
      "pt-BR": "Crie uma página para colorir do seu amigo peludo.",
    },
  },
  {
    id: "3",
    title: {
      en: "People",
      "pt-BR": "Pessoas",
    },
    before: "/casamento-antes.jpeg",
    after: "/casamento-depois.jpeg",
    description: {
      en: "Draw your favorite moments and relive them!",
      "pt-BR": "Reviva suas memórias favoritas colorindo.",
    },
  },
];

export const mockTestimonials = [
  {
    id: "1",
    name: "Leonardo Ferrari",
    avatar: "leo-china.jpeg",
    testimonial: {
      en: "I have so much fun creating the images and stickers. The result is truly impressive, the lines stay very close to the original.",
      "pt-BR":
        "Muito massa criar as imagens e adesivos. O resultado é realmente impressionante, os traços se mantêm muito parecidos com o original.",
    },
    rating: 5,
    url: "https://www.linkedin.com/in/leonardo2204/",
  },
  {
    id: "2",
    name: "Stefanie Szabo",
    avatar: "ste-szabo.jpg",
    testimonial: {
      en: "I love having travel memories. Having the opportunity to transform a memory into something physical is charming and meaningful.",
      "pt-BR":
        "Eu amo ter lembranças de viagem. Ter a oportunidade de transformar uma lembrança em algo físico é encantador e significativo.",
    },
    rating: 5,
    url: "https://www.instagram.com/stehszabo/",
  },
  {
    id: "3",
    name: "Ana Maria",
    avatar: "ana-maria.jpg",
    testimonial: {
      en: "The quality of the line art is amazing. Clearly captures all the important details while being easy to color.",
      "pt-BR":
        "A qualidade da arte em linhas é incrível. Captura claramente todos os detalhes importantes e é fácil de colorir.",
    },
    rating: 5,
    url: "https://www.instagram.com/anamariagw/",
  },
  {
    id: "4",
    name: "Bruna Lorenzoni",
    avatar: "bru-lorenzoni.jpg",
    testimonial: {
      en: "I wanted to thank you for the care with the book. The photos are beautiful! Really really beautiful! Gratitude! 💛",
      "pt-BR":
        "Queria te agradecer pelo carinho com o livro. As foto estão lindas! Ficou muito bonito mesmo! Gratidão! 💛",
    },
    rating: 5,
    url: "https://www.instagram.com/brulorenzoni/",
  },
];

export const mockFaqs = [
  {
    id: "1",
    question: "How long does it take to convert my photos?",
    answer:
      "Our AI technology typically transforms your photos into coloring pages within 30-60 seconds per image, depending on complexity.",
  },
  {
    id: "2",
    question: "What type of photos work best?",
    answer:
      "Photos with clear subjects, good lighting, and minimal background clutter work best. However, our AI is designed to handle a wide variety of images.",
  },
  {
    id: "3",
    question: "How will I receive my coloring book?",
    answer:
      "After processing, you can download a printable PDF of your coloring book immediately. We also offer an option to have a professionally printed book shipped to your address for an additional fee.",
  },
  {
    id: "4",
    question: "Can I edit the coloring pages after they're created?",
    answer:
      "Yes, you can make basic adjustments to the line thickness and contrast before finalizing your coloring book.",
  },
  {
    id: "5",
    question: "What resolution should my photos be?",
    answer:
      "For best results, we recommend photos that are at least 1000px on the shortest side. Higher resolution photos will produce more detailed coloring pages.",
  },
  {
    id: "6",
    question: "Can I include text or captions with my coloring pages?",
    answer:
      "Yes, you can add custom titles, captions, or messages to each page of your coloring book during the creation process.",
  },
];

// Simple mock function that simulates image transformation
export const transformImage = (imageUrl: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would call the Supabase Edge Function
      resolve("https://i.imgur.com/TLFPYh9.png");
    }, 1500);
  });
};
