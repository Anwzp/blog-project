export default {
    parent: '',
    name: 'BlogPageLayout',
    redirect: '/home',
    path: '/',
    component: () => import('./index.vue'),
} satisfies PageRouterConfig;