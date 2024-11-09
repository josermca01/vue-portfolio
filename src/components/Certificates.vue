<template>
    <GenericCard :infos="certificates"/>
</template>
<script setup>
import GenericCard from './GenericCard.vue';
import { computed } from 'vue'
function createCertificate(name, html_url, description,language) {
  return {
    name: name,
    html_url: html_url,
    description:description,
    language:language
  };
}
let certificates = []
certificates.push(createCertificate("Formação Java e Spring Boot","https://cursos.alura.com.br/degree/certificate/ffcc0c47-a098-491f-898e-7a5a7a4c1fdc","Finalizado em 21 de agosto de 2024",["Organização emissora Alura"]))
certificates.push(createCertificate("Formação Boas Práticas em Java","https://cursos.alura.com.br/degree/certificate/a20467b2-def3-48e4-a046-52b250f590e5","Finalizado em 16 de setembro de 2024",["Organização emissora Alura"]))
certificates.push(createCertificate("Formação React: desenvolva aplicações web usando JSX e Hooks","https://cursos.alura.com.br/degree/certificate/af7f0003-e40b-4878-9436-5aa46f4bb54e","Finalizado em 28 de outubro de 2024",["Organização emissora Alura"]))

</script>
