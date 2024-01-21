// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'headers',
        name: 'Headers',
        component: () => import('@/views/headers/index.vue'),
      },
      {
        path: 'heroheaders',
        name: 'Heroheaders',
        component: () => import('@/views/hero-headers/index.vue'),
      },
      {
        path: 'content',
        name: 'Content',
        component: () => import('@/views/content/index.vue'),
      },
      {
        path: 'features',
        name: 'Features',
        component: () => import('@/views/features/index.vue'),
      },
      {
        path: 'calltoaction',
        name: 'Call to Action',
        component: () => import('@/views/call-to-action/index.vue'),
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: () => import('@/views/gallery/index.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/blog/index.vue'),
      },
      {
        path: 'testimonial',
        name: 'Testimonial',
        component: () => import('@/views/testimonial/index.vue'),
      },
      {
        path: 'ecommerce',
        name: 'Ecommerce',
        component: () => import('@/views/ecommerce/index.vue'),
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: () => import('@/views/pricing/index.vue'),
      },
      {
        path: 'team',
        name: 'Team',
        component: () => import('@/views/team/index.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/contact/index.vue'),
      },
      {
        path: 'title',
        name: 'Title',
        component: () => import('@/views/title/index.vue'),
      },
      {
        path: 'footer',
        name: 'Footer',
        component: () => import('@/views/footer/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
