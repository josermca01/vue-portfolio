<template>
   <v-sheet class="ma-4" color="background2" elevation="3" rounded="lg">
    <v-tabs
      v-model="tab"
      :items="tabs"
      align-tabs="start"
      color="white"
      height="60"
      slider-color="highlight"
      show-arrows
    >
      <template v-slot:tab="{ item }">
        <v-tab
          :text="item.text"
          :value="item.value"
          class="text-none"
        ></v-tab>
      </template>

      <template v-slot:item="{ item }">
        <v-tabs-window-item :value="item.value" class="pa-4">
         <v-card variant="flat" color="background2" v-if="item.text=='Sobre'"><About/></v-card>
         <v-card variant="flat" color="background2" v-if="item.text=='Projetos'"><ProjectsCard/></v-card>
         <v-card variant="flat" color="background2" v-if="item.text=='Experiências'"><Experiences/></v-card>
         <v-card variant="flat" color="background2" v-if="item.text=='Certificados'"><Certificates/></v-card>
         </v-tabs-window-item>
      </template>
    </v-tabs>
  </v-sheet>
</template>

<script>
export default {
   data: () => ({
      tab: 'tab-1',
      tabs: [
        {
          text: 'Sobre',
          value: 'tab-1',
        },
        {
          text: 'Projetos',
          value: 'tab-2',
        },
        {
          text: 'Experiências',
          value: 'tab-3',
        },
        {
          text: 'Certificados',
          value: 'tab-4',
        },
      ],
    }),
}
</script>
<script setup>
import Experiences from './Experiences.vue';
import About from './About.vue';
import Certificates from './Certificates.vue';
import ProjectsCard from './ProjectsCard.vue';
import { computed } from 'vue'
import reposList from '../requests/index'
const items = ["Sobre", "Projetos", "Certificados"]
const repos = computed(() => reposList?.viewer.pinnedItems.edges.map(edge => edge.node) || [])
</script>