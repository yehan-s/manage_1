import Vue from 'vue'
import App from './App.vue'
import { Button, Radio, Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag } from 'element-ui';
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/less/index.less'
import store from '@/store'
import http from 'axios'
import '@/api/mock'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
