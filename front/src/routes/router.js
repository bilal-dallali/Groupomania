import WallPage from "../pages/Wall/WallPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import ProfilePage from "../pages/ProfilePage.vue"
import EditProfile from "../pages/EditProfile.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/home", component: WallPage },
    { path: "/profile", component: ProfilePage },
    { path: "/edit-profile", component: EditProfile},
    { path: "/", redirect: "/home" },
    
]
const router = createRouter({ history: createWebHistory(), routes })

export { router }