<script setup lang="ts">
import Experience from './components/Experiences/Experience.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import ProfilPicture from './components/ProfilPicture.vue';
import PersonalInfo from './components/PersonalInfo.vue';
import Languages from './components/Languages.vue';
import GridContainer from './components/GridContainer.vue';
</script>

<template>
  <div class="print:text-xs md:mx-[1.5cm]">
    <GridContainer>
      <ProfilPicture />
      <div class="flex col-span-2 p-2 items-center">
        <PersonalInfo
          class="flex flex-col px-6 md:px-0 pb-6 md:pb-0 print:pb-0 print:px-0"
        />
      </div>
    </GridContainer>
    <GridContainer>
      <div
        class="bg-mainColor-700 text-white px-8 py-8 flex flex-col gap-5 md:py-3 print:py-5"
      >
        <Skills class="" />
        <Languages />
      </div>
      <div
        class="md:col-span-2 print:col-span-2 py-4 md:p-2 md:py-3 flex flex-col px-8 gap-6 print:p-2 print:py-5"
      >
        <Experience />
        <Education />
      </div>
    </GridContainer>
    <div class="print:hidden">
      This page was optimised for a print view.
    </div>
  </div>
</template>

<style scoped></style>
