<template>
    <v-col cols="auto" class="d-flex flex-column pa-9">
        <div v-for="inst in experiences.places" :key="inst.name" class="d-flex flex-wrap align-center">
            <div class="text-high-emphasis mb-8 align-center">
                <p class="text-h5 mb-2">
                    {{ inst.position }}
                </p>
                <p>
                    {{ inst.name }}
                </p>
                <p class="text-medium-emphasis">
                    {{ inst.from }} - {{ inst.to }}
                </p>
                <p class="text-medium-emphasis mb-2">
                    {{ inst.place }}
                </p>
                <p v-for="act in inst.activities" :key="act">{{ act.name }}</p>
            </div>
        </div>
    </v-col>
</template>

<script setup>
const experiences = {
    places: [{
        name: 'Prefeitura Municipal de Araçoiaba da Serra',
        place: 'Araçoiaba da Serra, SP, Brasil',
        position: 'Estágio',
        from: 'mar de 2022',
        to: 'dez de 2023',
        activities: [{
            name: '• Atuação na área de suporte de TI para os servidores no paço municipal.'
        }, {
            name: '• Auxílio na organização de servidores da prefeitura.'
        }, {
            name: '• Suporte na instalação do sistema de rede do prédio.'
        }]
    }, {
        name: 'Colégio Magna Vida',
        place: 'Araçoiaba da Serra, SP, Brasil',
        position: 'Assistente de Informática',
        from: 'mai de 2020',
        to: 'dez de 2020',
        activities: [{
            name: '• Atuação na área de suporte de TI para aos funcionários do colégio.'
        }, {
            name: '• Auxilio na organização de tarefas e disponibilização de notas para os alunos na plataforma online do colégio.'
        }]
    }]
}
</script>

<style></style>