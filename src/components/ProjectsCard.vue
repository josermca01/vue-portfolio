<template>
    <GenericCard :infos="repos"/>
</template>
<script setup>
import GenericCard from './GenericCard.vue';
import { computed } from 'vue'
import reposList from '../requests/index'
const repos = computed(() => reposList?.map(repo => repo) || [])
</script>
