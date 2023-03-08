<template>
  <v-parallax src="/hero.jpg" covered>
    <div class="overlay">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h2 font-weight-bold m-4">
          <h1 class="text-h2 subheading center-text font-weight-bold ma-10">
            Welcome to ToDoList
          </h1>
        </h1>
        <h3 class="text-h6 subheading font-weight-thin" color="primary"></h3>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              v-bind="props"
              :color="isHovering ? 'purpleme' : 'warning'"
              title="Learn Now "
              class="my-4"
              rounded="pill"
              >Learn now
            </v-btn>
          </template>
        </v-hover>
      </div>
    </div>
  </v-parallax>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  background-color: rgba(6, 5, 5, 0.235);
  height: 100%;
}
</style>
