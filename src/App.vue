<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile to="/" style="cursor: pointer">
          <v-icon left class="mr-2">home</v-icon>
        </v-list-tile>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
          {{ item.title }}
          <v-list-tile-action>
            <v-icon left class="ml-2">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content></v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
        @click.native.stop="sideNav = !sideNav">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Resources</router-link>
      </v-toolbar-title>
      <v-spacer left></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat 
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">         
         {{ item.title }} 
         <v-icon left dark class="ml-2"> {{ item.icon }} </v-icon>
        </v-btn>
          
      </v-toolbar-items>

          
    </v-toolbar>
   <main>
     <router-view></router-view>
   </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false, 
        menuItems: 
        [
        {icon: 'games', title: 'tab_1', link: '/tab_1'}, 
        {icon: 'games', title: 'tab_2', link: '/tab_2'},
        {icon: 'games', title: 'tab_3', link: '/tab_3'},
        {icon: 'games', title: 'tab_4', link: '/tab_4'}
        ]
      }
    }
  }
</script>
 
<style lang="stylus">
  @import './stylus/main'
</style>
