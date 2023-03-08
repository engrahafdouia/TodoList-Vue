<template>
  <section >
    <v-footer
    class="bg-purpleme text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>



    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Design By Rahaf </strong>
    </div>
  </v-footer>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
