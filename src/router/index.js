import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue';
import commonData from '../@db/common';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('../components/Dashboard.vue'),
            },
            {
                path: '/empty',
                name: 'empty',
                component: () => import('../components/EmptyPage.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../pages/User/UserTest.vue')
            },
            {
                path: '/purchase',
                name: 'purchase',
                component: () => import('../pages/Purchase/Purchase.vue'),
                meta: {
                  pageTitle: "Purchase",
                },
            },
            {
                path: '/order',
                name: 'order',
                component: () => import('../pages/Order/Order.vue'),
                meta: {
                  pageTitle: "Order",
                },
            },
            {
                path: '/promotion',
                name: 'promotion',
                component: () => import('../pages/Promotion/Promotion.vue'),
                meta: {
                  pageTitle: "Promotion",
                },
            },
            {
                path: '/news',
                name: 'news',
                component: () => import('../pages/News/News.vue'),
                meta: {
                  pageTitle: "News",
                },
            },
            {
                path: '/insurance',
                name: 'insurance',
                component: () => import('../pages/Insurance/Insurance.vue'),
                meta: {
                  pageTitle: "Insurance",
                },
            },
            {
                path: '/priceList',
                name: 'priceList',
                component: () => import('../pages/PriceList/PriceList.vue'),
                meta: {
                  pageTitle: "PriceList",
                },
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login/Login.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
