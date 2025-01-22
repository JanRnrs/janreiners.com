<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  skill: string;
}>();
</script>


<template>
  <div class=" text-sm inline-block px-2 py-0.5 rounded-full border-mainColor-700 border-2">
    {{ props.skill }}
  </div>
</template>


<style scoped>
</style>