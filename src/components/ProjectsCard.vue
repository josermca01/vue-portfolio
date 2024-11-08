<template>
    <v-row>
        <v-col
        class="flex-grow-0 flex-shrink-1"
        :cols="colsNums"
        style="min-width: 100px;"
        v-for="repo in repos"
      >
        <v-sheet class="ma-2 pa-2">
          {{ repo.name }}
        </v-sheet>
      </v-col>
    </v-row>
    
</template>
<script setup>
import { computed } from 'vue'
import reposList from '../requests/index'
import { useDisplay } from 'vuetify'
const repos = computed(() => reposList?.viewer.pinnedItems.edges.map(edge => edge.node) || [])
const { name } = useDisplay()
const colsNums = computed(() => {
// name is reactive and
// must use .value
switch (name.value) {
case 'xs': return 12
case 'sm': return 12
case 'md': return 6
case 'lg': return 6
case 'xl': return 4
}
  return undefined
})
</script>