<template>
  <v-card flat>
    <v-img height="350" src="src\assets\images\b.jpg" cover>
    </v-img>
    <v-row class="" no-gutters>
      <v-col :cols="colsNums">
        <v-sheet class=" pa-2 ma-2">
          <v-avatar border="background opacity-100 xl " class="ml-8 position-absolute bottom-0 left-0"
            image="src\assets\images\a.gif" :size="height">
          </v-avatar>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class=" pa-2 ma-2">
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
  <v-row class="" no-gutters>
    <v-col :cols="colsNums">
      <v-sheet class=" pa-2 ">
        José Ricardo Munhoz Carlos de Almeida
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class=" pa-2 ">
      </v-sheet>
    </v-col>
  </v-row>
  <v-row class="" no-gutters>
    <v-col class="d-flex pl-8" :cols="colsNums">
      <v-sheet class="d-flex">
        <div class="ma-2 pa-2" v-for="item in social" :key="item.link"
        >
        <v-btn class="v-btn-socials"
            variant="outlined"
            :icon="item.icon"  :href="item.link"  target="_blank" rel="noopener noreferrer"
          >
          </v-btn>
        </div>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class=" pa-2 ">
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { useTheme } from 'vuetify';

import { computed } from 'vue'
import { useDisplay } from 'vuetify'
const social = [{
  icon:"mdi-github",
  link:"https://github.com/josermca01"
},{
  icon:"mdi-linkedin",
  link:"https://www.linkedin.com/in/jose-ricardo-munhoz-456596217/"
},{
  icon:"mdi-gmail",
  link:"mailto:josermca01@gmail.com"
},{
  icon:"mdi-download-box-outline",
  link:"https://github.com/josermca01"
},]
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
const colsNums = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 12
    case 'sm': return 12
    case 'md': return 12
    case 'lg': return 12
    case 'xl': return 12
    case 'xxl': return 12
  }
  return undefined
})
</script>

<style scoped>
.v-btn-socials:hover {
    transition: opacity 1;
}

.v-btn-socials {
    opacity: 0.6;
}

</style>