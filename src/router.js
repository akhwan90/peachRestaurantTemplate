import Home from './components/Title.vue'
import Menu from './components/ListMenu.vue'
import Dexperience from './components/Dexperience.vue'
import Reservation from './components/Reservation.vue'
import Location from './components/Location.vue'

export const routes=[
	{path:'',name:'home',component:Home},
	{path:'/menu',name:'menu',component:Menu},
	{path:'/dexperience', name:'dexperience',component:Dexperience},
	{path:'/reservation', name:'reservation',component:Reservation},
	{path:'/location', name:'location',component:Location},
	{path: '*', redirect:{name:'home'}}
]