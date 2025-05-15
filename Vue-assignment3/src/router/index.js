import { createRouter, createWebHistory } from 'vue-router'
import CreateGroup from '@/views/CreateGroup.vue'
import SummeryComp from '@/views/SummeryComp.vue'
import DebtsComp from '@/views/DebtsComp.vue'

const routes = [
  { path: '/', component: CreateGroup },
  { path: '/summary', component: SummeryComp },
  { path: '/debts', component: DebtsComp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
