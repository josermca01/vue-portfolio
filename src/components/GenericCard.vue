<template>
    <v-row class="ma-6 fill-height no-gutters" justify="center">
        <template v-for="(info, i) in infos" :key="i">
            <v-col cols="12" md="4">
                <a :href="info.html_url" target="_blank" rel="noopener noreferrer" class="btn bg-background">
                    <div class="bg-grey-darken-4 rounded h-100 w-100 pa-2 d-flex align-start flex-column">

                        <p class="mt-4 ml-2 font-weight-bold">{{ info.name }}</p>
                        <div v-if="info.description">
                            <p class="ma-2 text-body-1 font-weight-light wrap">
                                {{ info.description }}
                            </p>
                        </div>
                        <div v-else>
                            <p class="ma-2 text-body-1 font-weight-light wrap opacity-0">
                                .
                            </p>
                        </div>
                        <div class="d-flex justify-space-between w-100">
                            <div class="d-flex align-center">
                                <p v-if="info.stargazerCount" class="pa-2 text-caption font-weight-medium">
                                    <v-icon icon="mdi-star-outline"></v-icon>
                                    {{ info.stargazerCount }}
                                </p>
                            </div>
                            <div v-if="info.language" :class="projectsTechs">
                                <p v-for="lang in info.language" class="pa-2 text-caption font-weight-medium">
                                    {{ lang }}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </v-col>
        </template>
    </v-row>
</template>
<script>
export default {
    props: {
    infos: { type:Object }
  }
}
</script>
<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
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
        case 'sm': return "d-flex flex-column"
        case 'md': return "d-flex flex-row-reverse md-flex-column"
        case 'lg': return "d-flex flex-row-reverse md-flex-column"
        case 'xl': return "d-flex flex-row-reverse md-flex-column"
    }
    return undefined
})
</script>

<style scoped>

</style>