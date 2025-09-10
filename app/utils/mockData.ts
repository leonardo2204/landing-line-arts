// Mock data for development purposes

export const mockBeforeAfterImages = [

  {
    id: '2',
    title: {
      en: 'Pet companion',
      'pt-BR': 'Companheiro de estimação'
    },
    before: '/dog-sleeping-before.jpg',
    after: '/dog-sleeping-after.png',
    description: {
      en: 'Create a coloring page of your furry friend.',
      'pt-BR': 'Crie uma página para colorir do seu amigo peludo.'
    }
  },
  {
    id: '3',
    title: {
      en: 'People',
      'pt-BR': 'Pessoas'
    },
    before: '/cantora-antes.jpg',
    after: '/cantora-depois.png',
    description: {
      en: 'Draw your favorite moments and relive them!',
      'pt-BR': 'Reviva suas memórias favoritas colorindo.'
    }
  }
];

export const mockTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    testimonial: 'My kids absolutely love coloring their own photos! It\'s become a wonderful family activity that brings us together.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    testimonial: 'I made a coloring book of our dog for my daughter\'s birthday. She was thrilled and spent hours coloring each page.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    testimonial: 'The quality of the line art is amazing. Clearly captures all the important details while being easy to color.',
    rating: 4,
  },
  {
    id: '4',
    name: 'David Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    testimonial: 'I used this for a creative therapy project with my patients. The results were fantastic and the process was simple.',
    rating: 5,
  }
];

export const mockFaqs = [
  {
    id: '1',
    question: 'How long does it take to convert my photos?',
    answer: 'Our AI technology typically transforms your photos into coloring pages within 30-60 seconds per image, depending on complexity.'
  },
  {
    id: '2',
    question: 'What type of photos work best?',
    answer: 'Photos with clear subjects, good lighting, and minimal background clutter work best. However, our AI is designed to handle a wide variety of images.'
  },
  {
    id: '3',
    question: 'How will I receive my coloring book?',
    answer: 'After processing, you can download a printable PDF of your coloring book immediately. We also offer an option to have a professionally printed book shipped to your address for an additional fee.'
  },
  {
    id: '4',
    question: 'Can I edit the coloring pages after they\'re created?',
    answer: 'Yes, you can make basic adjustments to the line thickness and contrast before finalizing your coloring book.'
  },
  {
    id: '5',
    question: 'What resolution should my photos be?',
    answer: 'For best results, we recommend photos that are at least 1000px on the shortest side. Higher resolution photos will produce more detailed coloring pages.'
  },
  {
    id: '6',
    question: 'Can I include text or captions with my coloring pages?',
    answer: 'Yes, you can add custom titles, captions, or messages to each page of your coloring book during the creation process.'
  }
];

// Simple mock function that simulates image transformation
export const transformImage = (imageUrl: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would call the Supabase Edge Function
      resolve('https://i.imgur.com/TLFPYh9.png');
    }, 1500);
  });
};