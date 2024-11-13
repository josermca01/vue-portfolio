<template>
  <v-col cols="auto" class="d-flex flex-column pa-9">
    <div class="fill-width d-flex flex-column text-high-emphasis text-h5">Desenvolvedor de Software FullStack.
      <p class="mt-2 text-subtitle-1 text-medium-emphasis">
      Atualmente estudando sobre <span class="techstext">VueJS, Angular e React</span> no front-end e <span class="techstext">Springboot, Laravel e Flask</span> no back-end.
      Também possuo experiência com testes unitários usando JUnit e metodologias ágeis, como Kanban e Scrum. Estou
      sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para contribuir para o sucesso do
      projeto e da equipe!
    </p>
    </div>
    <br>
    <div class="fill-width d-flex flex-column mb-2 text-medium-emphasis text-h5">
      Tecnologias
      <div class="fill-width d-flex flex-wrap text-subtitle-1">
        <div v-for="tech in techs" :key="tech.name"
          class="bg-background3 d-flex align-center justify-center mr-3 mt-2 px-2 rounded">
          <v-avatar size="0.7rem" class=" mr-1" :id="tech.color">
          </v-avatar> {{ tech.name }}
        </div>
      </div>
    </div>
    <br>
    <div class="fill-width d-flex flex-column text-medium-emphasis text-h5">
      Formações
      <div class="d-flex flex-wrap align-center">
        <div v-for="inst in formacoes" :key="inst.name"
          class="pr-6 mt-2 text-high-emphasis text-subtitle-1 align-center">
          {{ inst.name }} <br>
          {{ inst.inst }} <br>
          {{ inst.description }}
        </div>
      </div>
    </div>
    <br>
    <div class="fill-width d-flex flex-column text-medium-emphasis text-h5">
      Conexoes
      <div class="fill-width d-flex text-high-emphasis text-subtitle-1">
        <ConectionsCard :items/>
      </div>
    </div>
  </v-col>
</template>
<script setup>
import ConectionsCard from './ConectionsCard.vue';
function createFormacao(inst, name, description) {
  return {
    inst: inst,
    name: name,
    description: description
  };
}
let formacoes = []
function createConections(icon, name, url) {
  return {
    icon: icon,
    name: name,
    url: url
  };
}
let items = []
items.push(createConections("mdi-github", "GitHub", "https://github.com/josermca01"))
items.push(createConections("mdi-linkedin", "Linkedin", "https://www.linkedin.com/in/jose-ricardo-munhoz-456596217/"))
items.push(createConections("mdi-gmail", "Gmail", "mailto:josermca01@gmail.com"))
items.push(createConections("mdi-whatsapp", "WhatsApp", "https://api.whatsapp.com/send?phone=5515991511717"))
formacoes.push(createFormacao("Facens", "Engenharia da Computação", "de 2019 a 2023"))
function createTechs(name, color) {
  return {
    name: name,
    color: color
  };
}
let techs = []
techs.push(createTechs("Java", "java"))
techs.push(createTechs("JavaScript", "javascript"))
techs.push(createTechs("Python", "python"))
techs.push(createTechs("TypeScript", "typescript"))
techs.push(createTechs("HTML", "html"))
techs.push(createTechs("CSS", "css"))
</script>
<style scoped>
#python {
  background-image: conic-gradient(#3366ff 0deg, #3366ff 45deg, #ffff66 45deg, #ffff66 225deg, #3366ff 225deg);
}

#java {
  background-image: conic-gradient(#ff8000 0deg, #ff8000 90deg, #4d79ff 90deg, #4d79ff 270deg, #ff8000 270deg);
}

#javascript {
  background-color: #ffcc00;
}

#typescript {
  background-color: #4d79ff;
}

#html {
  background-color: #ff8533;
}

#css {
  background-color: #0066ff;
}
.techstext{
  color: #536DFE;
}
.techstext::selection{
  color: #FFEE58;
}
</style>