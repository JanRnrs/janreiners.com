<script setup lang="ts">
import SectionHeadline from './SectionHeadline.vue';
const Languages: string[] = ['german', 'english' ];

</script>

<template>
    <div >
        <SectionHeadline headline="Languages"/>
        <ul >
            <li v-for="lang in Languages" :key="lang">{{ lang }}</li>
        </ul>
    </div>
</template>


<style scoped></style>
