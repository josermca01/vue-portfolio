<template>
  <v-sheet class="ma-4" color="background2" elevation="0" rounded="lg">
    <v-card class="background rounded-0 elevation-0" >
      <v-img class="rounded-t-xl" :height="heightBackground" src="src\assets\images\b.jpg" cover>
      </v-img>
      <v-row class="background" no-gutters>
        <v-col :cols="colsNums">
          <v-sheet class="background pa-2 ma-2">
            <v-avatar border="background opacity-100 xl" class="position-absolute bottom-0 left-0"
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
      <v-sheet :class="nameTitle">
        José Ricardo Munhoz
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class=" pa-2 ">
      </v-sheet>
    </v-col>
  </v-row>
  <v-row class="bg-background" no-gutters>
    <v-col class="d-flex" :cols="colsNums">
      <v-sheet class="d-flex">
        <div :class="socialSpace" v-for="item in social" :key="item.link">
          <a v-if="item.icon=='mdi-download-box-outline'":href="item.link" download class="btn"><v-icon class="bg-background2 rounded-circle pa-6" :icon="item.icon"></v-icon></a>
          <a v-else class="btn" :href="item.link" target="_blank"
          rel="noopener noreferrer"><v-icon class="bg-background2 rounded-circle pa-6" :icon="item.icon"></v-icon></a>
          </div>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class=" pa-2 ">
      </v-sheet>
    </v-col>
  </v-row>
  </v-sheet>
  
</template>

<script setup>
import { useTheme } from 'vuetify';

import { computed } from 'vue'
import { useDisplay } from 'vuetify'
const social = [{
  icon: "mdi-github",
  link: "https://github.com/josermca01"
}, {
  icon: "mdi-linkedin",
  link: "https://www.linkedin.com/in/jose-ricardo-munhoz-456596217/"
}, {
  icon: "mdi-gmail",
  link: "mailto:josermca01@gmail.com"
}, {
  icon: "mdi-download-box-outline",
  link: "src/assets/documents/José Ricardo Munhoz Carlos de Almeida.pdf"
},]
const theme = useTheme()
const { name } = useDisplay()
const heightBackground = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 200
    case 'sm': return 250
    case 'md': return 270
    case 'lg': return 350
    case 'xl': return 350
    case 'xxl': return 350
  }
  return undefined
})
const height = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 120
    case 'sm': return 150
    case 'md': return 170
    case 'lg': return 200
    case 'xl': return 250
    case 'xxl': return 300
  }
  return undefined
})
const socialSpace = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return "pa-1"
    case 'sm': return "pa-2"
    case 'md': return "pa-2"
    case 'lg': return "pa-2"
    case 'xl': return "pa-2"
    case 'xxl': return "pa-2"
  }
  return undefined
})
const nameTitle = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return "pa-4 text-h4"
    case 'sm': return "pa-4 text-h4"
    case 'md': return "pa-4 text-h3"
    case 'lg': return "pa-4 text-h2"
    case 'xl': return "pa-4 text-h2"
    case 'xxl': return "pa-4 text-h2"
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
.avt{
  background-color: "background";
  border-radius: 50%;
  position: relative;
}
.btn{
  border-radius: 50%;
}
.btn::before{
  border-radius: 50%;
}
</style>