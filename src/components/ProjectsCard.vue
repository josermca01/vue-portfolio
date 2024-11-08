<template>
    <v-row class="fill-height no-gutters" justify="center">
        <template v-for="(repo, i) in repos" :key="i">
            <v-col cols="12" md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card :href="repo.html_url" target="_blank" rel="noopener noreferrer"
                        :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2" v-bind="props">
                        <v-card-title class="text-h6 text-white d-flex flex-column">
                            <p class="mt-4">{{ repo.name }}</p>
                            <div>
                                <p class="ma-0 text-body-1 font-weight-bold">
                                    {{ repo.description }}
                                </p>
                            </div>
                            <div class="d-flex justify-space-between">
                                <p class="pa-2  text-caption font-weight-medium">
                                    <v-icon icon="mdi-star-outline"></v-icon>
                                    {{ repo.stargazerCount }}
                                </p>
                                <div class="d-flex">
                                    <p v-for="lang in repo.language" class="pa-2 text-caption font-weight-medium">
                                        {{ lang }}
                                    </p>
                                </div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>
        </template>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        icons: [{
            name: "Java",
            img: "mdi-language-java"
        }, {
            name: "JavaScript",
            img: "mdi-language-javascript"
        }, {
            name: "TypeScript",
            img: "mdi-language-typescript"
        }, {
            name: "Python",
            img: "mdi-language-python"
        }, {
            name: "HTML",
            img: "mdi-language-html5"
        }, {
            name: "CSS",
            img: "mdi-language-css3"
        }],
    }),
}
</script>
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

<style scoped>
.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>
