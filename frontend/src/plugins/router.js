import Vue from "vue";
import VueRouter from "vue-router";
import ShellView from "@/components/Shell/ShellView";
import Feed from "@/components/Feed/Feed";
import ManagementView from "@/components/Management/ManagementView";
import BookmarksPage from "@/components/Shell/BookmarkPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ShellView,
    children: [
      {
        path: "/home",
        component: Feed,
      },
      {
        path: "/management",
        component: ManagementView,
      },
      {
        path: "/favorites",
        component: BookmarksPage,
      },
    ],
  },
  { path: "/login", component: ManagementView },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

export default router;
