<template>
    <v-row class="mt-2 fill-height no-gutters" justify="center">
        <template v-for="item in items" :key="item.name">
            <v-col cols="12" sm="4" md="3">
                <a :href="item.url" target="_blank" rel="noopener noreferrer" class="btn">
                    <div class="bg-grey-darken-4 rounded h-100 w-100 pa-2 d-flex align-center overflow-hidden">
                        <v-icon class="rounded-circle pa-6 align-centar":icon="item.icon"></v-icon>{{ item.name }}
                    </div>
                </a>
            </v-col>
        </template>
    </v-row>
</template>
<script>
export default {
    props: {
    items: { type:Object }
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