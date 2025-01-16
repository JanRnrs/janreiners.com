<script setup lang="ts">

interface School {
  id: number;
  degree: string;
  institution: string;
  dates: string;
}

const schools:School[] = [
  {
    id: 1,
    degree: 'Bachelor',
    institution: 'Fh Aachen',
    dates: 'from - until',
  },
  {
    id: 2,
    degree: 'Abitur',
    institution: 'Gymnasium Am Geroweiher',
    dates: 'from - until',

  }
];
</script>

<template>
  <div class="">
    <h2 class="">Education</h2>
    <div v-for="school in schools" :key="school.id" class="">
      <h3 class="">{{ school.degree }}</h3>
      <p class="">{{ school.institution }} - {{ school.dates }}</p>
      <p>{{ school.description }}</p>
    </div>
  </div>
</template>



<style scoped></style>
