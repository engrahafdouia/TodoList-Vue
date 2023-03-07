<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      @click="drawer = true"
      class="d-flex d-sm-none"
    ></v-app-bar-nav-icon>
    <v-toolbar-title >
      <v-img
        width="40px"
        src="/logonew.jpg"
        alt="image.alt"
      />
       </v-toolbar-title>
    <v-tabs v-model="tab" align="right" align-with-title class="d-none d-sm-flex">
      <v-tab class="mytab" to="/">Home</v-tab>
      <v-tab class="mytab" >About</v-tab>
      <v-tab class="mytab" to="/tasks">Tasks</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
  </v-app-bar>
  <!-- Add a navigation bar -->
  <v-navigation-drawer v-model="drawer" temporary width="250" height="100vh">
    <v-list nav dense>
      <v-list-item
        class="bg-purpleme"
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        nav

      >

        <v-btn rounded variant="text" > welcome user!</v-btn>

        <v-divider class="my-3"></v-divider>
      </v-list-item>
      <v-list-item to="/" class="myicon"
        ><v-icon>mdi-home</v-icon> Home</v-list-item
      >
      <v-list-item  class="myicon">
        <v-icon>mdi-earth</v-icon>About</v-list-item
      >
      <v-list-item to="/tasks" class="myicon"
        ><v-icon>mdi-database</v-icon>Tasks</v-list-item
      >

    </v-list>
  </v-navigation-drawer>
  <!-- Navigation bar ends -->
</template>

<script>
export default {
  data() {
    return {
      expand: false,
      expand2: false,
      index: 0,
      drawer: false,
      dialog: false,
      tab: null,
      rail: true,
    };
  },
};
</script>
