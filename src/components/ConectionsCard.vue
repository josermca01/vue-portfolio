<template>
    <v-row class="mt-2 fill-height no-gutters" justify="center">
        <template v-for="item in items" :key="item.name">
            <v-col cols="12" sm="6" md="4" lg="3">
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