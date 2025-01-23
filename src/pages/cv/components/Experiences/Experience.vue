<!-- filepath: /d:/Dokumente/development/janreiners.com/src/pages/cv/components/Experience.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import config from '@/config.json';
import SectionHeadline from '../SectionHeadline.vue';
import ExperienceSkill from './ExperienceSkill.vue';

interface Job {
  Company: string;
  Position: string;
  Date: string;
  Location: string;
  summary: string;
  Description: string[];
  Skills: string[];
}

const jobs = ref<Job[]>(config.cv.Experience);
</script>

<template>
  <div>
    <div class="text-mainColor-700">
      <SectionHeadline headline="Experience" />
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="px-2 break-inside-avoid-page"
      >
        <span class="flex justify-between">
          <h3 class="text-xl">{{ job.Position }}</h3>
          <p class="text-m text-gray-400">{{ job.Date }}</p>
        </span>

        <p class="text-m font-bold">{{ job.Company }}</p>
        <p class="text-m text-gray-400">{{ job.Location }}</p>
        <p>{{ job.summary }}</p>
        <ul class="list-disc pl-4">
          <li v-for="(desc, i) in job.Description" :key="i">{{ desc }}</li>
        </ul>
        <div
          class="flex gap-x-1 gap-y-1 pt-1 items-start flex-wrap print:text-xs text-sm leading-tight"
        >
          <ExperienceSkill
            v-for="(skill, i) in job.Skills"
            :key="i"
            :skill="skill"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
