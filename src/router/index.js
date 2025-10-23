import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import EditorView from '@/views/EditorView.vue'
import PostListView from '@/views/PostListView.vue'
import PostView from '@/views/PostView.vue'

function keepDefaultView(to, from) {
  if (from.matched.length) {
    to.matched[0].components.default = from.matched[0].components.default;
  } else {
    to.matched[0].components.default = HomeView;
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostListView,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ],
})

export default router
