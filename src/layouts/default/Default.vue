<template>
  <v-app>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
<style>
.mytab:hover {
  color: #2333b0;
  border-bottom-color: #2333b0;
  /* border: 9px red; */
}
.myicon:hover {
  color: #2333b0;
  border-bottom-color: #2333b0;
}
.login:hover {
  color: "indigo";
}
</style>
