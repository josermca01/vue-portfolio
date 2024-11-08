<template>
    <v-row>
        <v-col class="rounded flex-grow-0 flex-shrink-1" :cols="colsNums" style="min-width: 100px;" v-for="repo in repos">
            <v-sheet class=" rounded ma-2 pa-2">
                <v-row class="ma-2 pa-2">{{ repo.name }}</v-row>
                <v-row class="ma-2 pa-2"><v-col aling="start">{{ repo.description }}</v-col><v-col aling="end" cols="auto">
                        <v-btn :href="repo.html_url" target="_blank" rel="noopener noreferrer" icon="mdi-open-in-new" size="large"></v-btn>
                    </v-col></v-row>
                <v-row class="ma-2 pa-2"><v-col aling="start">{{ repo.stargazerCount }}</v-col><v-col aling="end">
                        <div :class="projectsTechs">
                            <v-sheet class="ma-2" v-for="lang in repo.language">{{ lang }}
                            </v-sheet>
                        </div>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-col>
    </v-row>

</template>
<script setup>
import { computed } from 'vue'
import reposList from '../requests/index'
import { useDisplay } from 'vuetify'
const repos = computed(() => reposList?.map(repo => repo) || [])
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
const projectsTechs = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
        case 'xs': return "d-flex flex-column"
        case 'sm': return "d-flex flex-row-reverse md-flex-column"
        case 'md': return "d-flex flex-row-reverse md-flex-column"
        case 'lg': return "d-flex flex-row-reverse md-flex-column"
        case 'xl': return "d-flex flex-row-reverse md-flex-column"
    }
    return undefined
})
</script>