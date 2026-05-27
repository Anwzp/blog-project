export default {
    name: 'Blog',
    path: '/blog',
    meta: {
        title: '博客',
        isKeepAlive: true,
        parent: 'Home',
    },
    component: () => import('./blog.vue'),
} satisfies PageRouterConfig;