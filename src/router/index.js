import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import NewPostView from '@/views/NewPostView.vue'
import PostListView from '@/views/PostListView.vue'
import PostView from '@/views/PostView.vue'
import AdminView from '@/views/AdminView.vue'
import EditPostView from '@/views/EditPostView.vue'

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
      path: '/new',
      name: 'new',
      component: NewPostView,
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
      path: '/post/edit/:id',
      name: 'edit',
      component: EditPostView,
      props: true,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ],
})

export default router
