export default {
    parent: ParentRouterKey.BlogPageLayout,
    name: 'Contact',
    path: '/contact',
    meta: {
        title: '联系我',
        isKeepAlive: true,
    },
    component: () => import('./contact.vue')
}