import { ParentRouterKey } from '@/types/router';
export const parentRoute: Record<ParentRouterKey, {
    name: string;
    path: string;
    component: () => Promise<any>;
    children: PageRouterConfig[];
}> = {
    [ParentRouterKey.Root]: {
        path: '/',
        name: 'root',
        component: () => import('../components/PageLayout'),
        children: []
    }
}