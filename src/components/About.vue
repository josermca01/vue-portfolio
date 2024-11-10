<template>
    <v-col cols="auto" class="d-flex flex-column pa-9">
        <div class="fill-width d-flex text-high-emphasis text-h5">campo Sobre</div>
        <div class="fill-width d-flex flex-column mb-2 text-medium-emphasis text-h5">
            Tecnologias
            <div class="fill-width d-flex flex-wrap text-subtitle-1">
                <div v-for="tech in techs" :key="tech.name" class="bg-background3 d-flex align-center justify-center mr-3 mt-2 px-2 rounded"> 
                    <v-avatar :color="tech.color"
                        size="0.7rem" class="mr-1">
                    </v-avatar> {{ tech.name }}</div>
            </div>
        </div>
        <div class="fill-width d-flex flex-column text-medium-emphasis text-h5">
            Formações
            <div class="fill-width d-flex text-high-emphasis text-subtitle-1">
                Nome da formação
            </div>
            <div class="fill-width d-flex text-high-emphasis text-subtitle-1">
                <div>teste</div>
                <div>teste</div>
            </div>
        </div>
        <div class="fill-width d-flex flex-column text-medium-emphasis text-h5">
            Conexoes
            <div class="fill-width d-flex text-high-emphasis text-subtitle-1">
                <div>teste</div>
                <div>teste</div>
            </div>
        </div>
    </v-col>
</template>

<script setup>
function createTechs(name, icon, color) {
    return {
        name: name,
        icon: icon,
        color: color
    };
}
let techs = []
techs.push(createTechs("Java", "mdi-language-java", "yellow-accent-2"))
techs.push(createTechs("JavaScript", "mdi-language-javascript", "yellow-accent-2"))
techs.push(createTechs("Python", "mdi-language-python", "yellow-accent-2"))
techs.push(createTechs("TypeScript", "mdi-language-typescript", "yellow-accent-2"))
techs.push(createTechs("HTML", "mdi-language-html5", "yellow-accent-2"))
techs.push(createTechs("CSS", "mdi-language-css3", "yellow-accent-2"))
</script>