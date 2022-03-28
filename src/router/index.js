import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoffeeView from "../views/CoffeeView"
import EngageView from "../views/EngageView"
import ActivityView from "../views/ActivityView"
import AppView from "../views/AppView"
import SearchView from "../views/SearchView"
Vue.use(VueRouter);
const routes = [
    // 首页
    {
        path: "/",
        name: "home",
        component: HomeView,
        redirect: "/home/faxian",
    },
    // 咖啡日报
    {
        path: "/coffee",
        name: "Coffee",
        redirect: "/coffee/aboutUs",
        component: CoffeeView,
        children: [{
                path: 'aboutUs',
                component: () =>
                    import ('../components/Coffee/AboutUs.vue')
            },
            {
                path: 'aboutMs',
                component: () =>
                    import ('../components/Coffee/AboutMs.vue')
            }
        ]
    },
    // 社区
    {
        path: "/home",
        name: "home1",
        component: HomeView,
        redirect: "/home/faxian",
        children: [{
                path: "faxian",
                name: "FaXian",
                component: () =>
                    import ('../components/sons/FaXian')
            },
            {
                path: "zuire",
                name: "zuire",
                component: () =>
                    import ('../components/sons/ZuiRe')
            },
            {
                path: "biduan",
                name: "biduan",
                component: () =>
                    import ('../components/sons/BiDuan')
            },
            {
                path: "daihuida",
                name: "daihuida",
                component: () =>
                    import ('../components/sons/DaiHuida')
            },
            {
                path: "mianshi",
                name: "mianshi",
                component: () =>
                    import ('../components/sons/MianShi')
            },
            {
                path: "name",
                name: "name",
                component: () =>
                    import ('../components/sons/NaMe')
            },
            {
                path: "ribao",
                name: "ribao",
                component: () =>
                    import ('../components/sons/RiBao')
            },
            {
                path: "shuju",
                name: "shuju",
                component: () =>
                    import ('../components/sons/ShuJu')
            }, {
                path: "zhuanlan",
                name: "zhuanlan",
                component: () =>
                    import ('../components/sons/ZuanLan')
            },

        ]
    },
    // 招聘
    {
        path: "/Engage",
        name: "Engage",
        component: EngageView
    },
    // 活动
    {
        path: "/Activity",
        name: "Activity",
        component: ActivityView,
        redirect: "/Activity/ActivityAll",
        children: [{
            path: "ActivityAll",
            component: () =>
                import ("@/components/activity/ActivityAll")
        }, {
            path: "ActivityTop",
            component: () =>
                import ("@/components/activity/ActivityTop")
        }, {
            path: "ActivityBtm",
            component: () =>
                import ("@/components/activity/ActivityBtm")
        }]

    },
    // App下载
    {
        path: "/App",
        name: "App",
        component: AppView
    },
    // 搜索
    {
        path: "/Search",
        name: "Search",
        component: SearchView,
        redirect: "/Search/all",
        children: [{
                path: "all",
                component: () =>
                    import ("../components/All/All")
            },
            {
                path: "question",
                component: () =>
                    import ("../components/All/Questions")
            },
            {
                path: "essay",
                component: () =>
                    import ("../components/All/Essay")
            }
        ]
    },
];

const router = new VueRouter({
    routes,
});

export default router;