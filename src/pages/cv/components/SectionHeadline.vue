<script setup lang="ts">
interface SectionHeadlineProps {
  headline: string;
}
const { headline = '' } = defineProps<SectionHeadlineProps>();
</script>

<template>
  <h3
    class="border-b-4 border-b-current text-4xl print:text-2xl font-bold pb-2 mb-2"
  >
    {{ headline }}
  </h3>
</template>
