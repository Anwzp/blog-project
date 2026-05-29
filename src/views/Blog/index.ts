export default {
    parent: ParentRouterKey.BlogPageLayout,
    name: 'Blog',
    path: '/blog',
    meta: {
        title: '博客',
        isKeepAlive: true,
    },
    component: () => import('./blog.vue'),
} satisfies PageRouterConfig;