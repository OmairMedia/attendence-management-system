<template>
  <div class="">
    <nav-bar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '@/components/navBar'

export default Vue.extend({
  components: {
    navBar,
  },
})
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
