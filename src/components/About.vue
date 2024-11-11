<template>
    <v-col cols="auto" class="d-flex flex-column pa-9">
        <div class="fill-width d-flex text-high-emphasis text-h5">campo Sobre</div>
        <div class="fill-width d-flex flex-column mb-2 text-medium-emphasis text-h5">
            Tecnologias
            <div class="fill-width d-flex flex-wrap text-subtitle-1">
                <div v-for="tech in techs" :key="tech.name" class="bg-background3 d-flex align-center justify-center mr-3 mt-2 px-2 rounded"> 
                    <v-avatar size="0.7rem" class=" mr-1" :id="tech.color">
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
techs.push(createTechs("Java", "mdi-language-java", "java"))
techs.push(createTechs("JavaScript", "mdi-language-javascript", "javascript"))
techs.push(createTechs("Python", "mdi-language-python", "python"))
techs.push(createTechs("TypeScript", "mdi-language-typescript", "typescript"))
techs.push(createTechs("HTML", "mdi-language-html5", "html"))
techs.push(createTechs("CSS", "mdi-language-css3", "css"))
</script>
<style scoped>
#python {
  background-image: conic-gradient(#3366ff 0deg,#3366ff 45deg,#ffff66 45deg,#ffff66 225deg,#3366ff 225deg);
}
#java {
  background-image: conic-gradient(#ff8000 0deg,#ff8000 90deg, #4d79ff 90deg,#4d79ff 270deg,#ff8000 270deg);
}
#javascript {
  background-color:  #ffcc00;
}
#typescript {
  background-color: #4d79ff;
}
#html {
  background-color: #ff8533;
}
#css {
  background-color:#0066ff;
}
</style>