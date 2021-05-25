<template>
  <div class="">
    <h2>This is Admin Dashboard</h2>
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  middleware: 'authenticated',
})
</script>

<style></style>
