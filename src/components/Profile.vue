<template>
  <v-card flat>
    <v-img height="350" src="src\assets\images\b.jpg" cover>
    </v-img>
    <v-row class="" no-gutters>
      <v-col :cols="colsNums">
        <v-sheet class=" pa-2 ma-2">
          <v-avatar border="background opacity-100 xl" class="ml-8 position-absolute bottom-0 left-0"
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
        <div class="ma-2 pa-2" v-for="item in social" :key="item.link">
          <a class="btn" :href="item.link" target="_blank"
          rel="noopener noreferrer"><v-icon class="bg-grey-darken-4 rounded-circle pa-6" :icon="item.icon"></v-icon></a>
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
  link: "https://github.com/josermca01"
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
.avt{
  background-color: "background";
  border-radius: 50%;
  position: relative;
}
.btn{
  background-color: "background";
  color: white;
  text-decoration: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 45%;
  padding: 0.1rem;
  transition: 0.7s;
  position: relative;
}
.btn::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--angle),transparent 45%,white);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  opacity: 0%;
  border-radius: 50%;
}
.btn:hover{
  opacity: 45%;
  background-image: conic-gradient(from var(--angle),transparent 45%,white);
  animation: 3s spin linear infinite;
}
.btn:hover::before{
  filter: blur(1.5rem);
  opacity: 0.5;
  background-image: conic-gradient(from var(--angle),transparent 45%,white);
  animation: 3s spin linear infinite;
}
@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes spin{
  from{
    --angle: 0deg;
  }
  to{
    --angle: 360deg;
  }
}
</style>