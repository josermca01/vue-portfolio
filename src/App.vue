<template>
  <Profile/>
  <About/>
</template>
<script setup>
import { computed } from 'vue'
import reposList from './requests/index'
import Profile from './components/Profile.vue';
import About from './components/About.vue';
    // Computa os repositórios a partir dos dados da API
    const repos = computed(() => reposList?.viewer.pinnedItems.edges.map(edge => edge.node) || [])
</script>
<style scoped>
</style>
