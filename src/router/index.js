import { createRouter, createWebHistory } from "vue-router";
import Livre2 from "../components/Livre2.vue";
import LivreAdd from "../components/LivreAdd.vue";
import LivreDelete from "../components/LivreDelete.vue";
import LivreStock from "../components/LivreStock.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Livre2
    },
    {
      path: "/add",
      name: "add",
      component: LivreAdd
    },
    {
      path: "/delete",
      name: "delete",
      component: LivreDelete
    },
    {
      path: "/modify",
      name: "stock",
      component: LivreStock
    }
  ]
});

export default router;
