<script setup lang="ts">

const skills: string[] = ['Skill 1', 'Skill 2', 'Skill 3'];

</script>

<template>
    <div >
        <h2>Skills</h2>
        <ul >
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
    </div>
</template>



<style scoped></style>
