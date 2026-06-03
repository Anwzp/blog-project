export default {
    parent: ParentRouterKey.BlogPageLayout,
    name: 'Tags',
    path: '/tags',
    component: () => import('./tags.vue'),
    meta: {
        title: '标签',
        icon: 'icon-tag',
        order: 1,
    },

} satisfies PageRouterConfig;