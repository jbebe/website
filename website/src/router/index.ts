import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MarkdownPage from '../components/common/MarkdownPage.vue';
import homeContent from '../views/Home.md';
import articlesContent from '../views/Articles.md';
import unknownContent from '../views/Unknown.md';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "About me",
    component: MarkdownPage,
    props: { data: homeContent },
    meta: {
      title: 'Bálint Juhász\'s Personal Home Page'
    }
  },
  {
    path: "/articles",
    name: "Articles",
    component: MarkdownPage,
    props: { data: articlesContent },
    meta: {
      title: 'Articles | Bálint Juhász\'s Personal Home Page'
    }
  },
  {
    path: "/unknown",
    name: "???",
    component: MarkdownPage,
    props: { data: unknownContent },
    meta: {
      title: '??? | Bálint Juhász\'s Personal Home Page'
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
