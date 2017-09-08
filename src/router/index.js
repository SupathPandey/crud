import Vue from 'vue'
import Router from 'vue-router'
import Resource from '@/components/Resources/Resource.vue'
import Tab_1 from '@/components/Resources/Tab_1.vue'
import Tab_2 from '@/components/Resources/Tab_2.vue'
import Tab_3 from '@/components/Resources/Tab_3.vue'
import Tab_4 from '@/components/Resources/Tab_4.vue'
import Add_Resource from '@/components/Forms/add_resource.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resource',
      component: Resource
    },
    {
      path: '/tab_1',
      name: 'Tab_1',
      component: Tab_1
    },
    {
      path: '/tab_2',
      name: 'Tab_2',
      component: Tab_2
    },
    {
      path: '/tab_3',
      name: 'Tab_3',
      component: Tab_3
    },
    {
      path: '/tab_4',
      name: 'Tab_4',
      component: Tab_4
    },
    {
      path: '/add_resource',
      name: 'Add_Resource',
      component: Add_Resource
    }
  ],
  mode: 'history'
})
