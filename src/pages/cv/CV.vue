<!-- filepath: /d:/Dokumente/development/janreiners.com/src/pages/cv/Cv.vue -->
<script setup lang="ts">
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import ProfilPicture from './components/ProfilPicture.vue';
import PersonalInfo from './components/PersonalInfo.vue';
import Languages from './components/Languages.vue';
import GridContainer from './components/GridContainer.vue';
</script>

<template>
  <div class="print:text-xs md:mx-[1.6cm]">
    <GridContainer>
      <ProfilPicture />
      <div class="flex col-span-2 p-3 items-center">
        <PersonalInfo />
      </div>
    </GridContainer>
    <GridContainer>
      <div class="bg-mainColor-700 text-white px-8 py-8 gap-8 md:py-3">
        <Skills />
        <Languages />
      </div>
      <div class="md:col-span-2 md:p-2 gap-6 px-8">
        
        <Experience />
        
        <Education />
      </div>
    </GridContainer>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>