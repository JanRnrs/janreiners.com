<script setup lang="ts">

const Languages: string[] = ['german', 'english' ];

</script>

<template>
    <div >
        <h2>Skills</h2>
        <ul >
            <li v-for="lang in Languages" :key="lang">{{ lang }}</li>
        </ul>
    </div>
</template>



<style scoped></style>
