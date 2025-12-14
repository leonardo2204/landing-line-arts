import type { BlogPostContent } from './types';
import { bobbieGoodsGuideContent } from './posts/bobbie-goods-guide';
import { customStickersContent } from './posts/custom-stickers';
import { labubuGuideContent } from './posts/labubu-guide';
import { crazyHairGuideContent } from './posts/crazy-hair-guide';
import { halloweenGuideContent } from './posts/halloween-guide';
import { christmasGuideContent } from './posts/christmas-guide';

export const blogPosts: BlogPostContent[] = [
  halloweenGuideContent,
  crazyHairGuideContent,
  labubuGuideContent,
  customStickersContent,
  bobbieGoodsGuideContent,
  christmasGuideContent
];

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPostContent | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Re-export the type for convenience
export type { BlogPostContent };
