<template>
 <v-card flat>
    <v-img
      height="350"
      src="src\assets\images\b.jpg"
      cover>
    </v-img>
    <v-row class="bg-blue-grey-darken-4"no-gutters>
      <v-col cols="2">
        <v-sheet class="bg-blue-grey-darken-4 pa-2 ma-2">
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="bg-blue-grey-darken-4 pa-2 ma-2">
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="bg-blue-grey-darken-4"no-gutters>
      <v-col cols="2">
        <v-sheet class="bg-blue-grey-darken-4 pa-2 ma-2">
        <v-avatar border="background opacity-100 xl " class="ml-8 position-absolute bottom-0 left-0" image="src\assets\images\a.gif"
            :size="height">
        </v-avatar>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="bg-blue-grey-darken-4 pa-2 ma-2">
            teste
        </v-sheet>
      </v-col>
    </v-row>
 </v-card>
</template>

<script setup>
import { useTheme } from 'vuetify';

import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const theme = useTheme()
const { name } = useDisplay()
const height = computed(() => {
// name is reactive and
// must use .value
switch (name.value) {
case 'xs': return 120
case 'sm': return 150
case 'md': return 170
case 'lg': return 200
case 'xl': return 250
case 'xxl': return 1200
}
  return undefined
})
</script>