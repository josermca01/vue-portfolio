<template>
 <v-card flat>
    <v-img
      height="350"
      src="src\assets\images\b.jpg"
      cover>
    </v-img>
    <v-row class=""no-gutters>
      <v-col cols="2">
        <v-sheet class=" pa-2 ma-2">
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class=" pa-2 ma-2">
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class=""no-gutters>
      <v-col cols="2">
        <v-sheet class=" pa-2 ma-2">
        <v-avatar border="background opacity-100 xl " class="ml-8 position-absolute bottom-0 left-0" image="src\assets\images\a.gif"
            :size="height">
        </v-avatar>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class=" pa-2 ma-2">
        </v-sheet>
      </v-col>
    </v-row>
 </v-card>
       <v-row class=""no-gutters>
         <v-col cols="6">
           <v-sheet class=" pa-2 ma-2">
            José Ricardo Munhoz Carlos de Almeida
           </v-sheet>
         </v-col>
         <v-col>
           <v-sheet class=" pa-2 ma-2">
           </v-sheet>
         </v-col>
       </v-row>
       <v-row class=""no-gutters>
         <v-col cols="6">
           <v-sheet class=" pa-2 ma-2">
            Git Linkedin Gmail Cv
           </v-sheet>
         </v-col>
         <v-col>
           <v-sheet class=" pa-2 ma-2">
           </v-sheet>
         </v-col>
       </v-row>
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