import type { Config } from "@react-router/dev/config";

export default {
    prerender: [
        '/',
        '/en',
        '/blog',
        'blog/bobbie-goods-guia-completo',
        '/en/blog',
        '/en/blog/bobbie-goods-guia-completo',
    ],
    future: {
        unstable_viteEnvironmentApi: true,
    },
} satisfies Config;