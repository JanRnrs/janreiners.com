<script setup lang="ts">
const showContactDetails = import.meta.env.VITE_SHOW_CONTACT_DETAILS === 'true';
const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1
      class="text-mainColor-700 text-7xl print:text-5xl leading-tight font-extrabold"
      aria-label="Name"
    >
      Jan Reiners
    </h1>
    <h2 class="text-gray-500 text-4xl print:text-3xl" aria-label="Profession">
      Software Engineer
    </h2>
    <div>
      <div class="flex gap-1 items-center">
        <img
          src="@/assets/github-icon.svg"
          alt="GitHub icon"
          class="w-4 h-4 print:w-3 print:h-3"
        />
        <a href="https://github.com/JanRnrs" aria-label="GitHub profile"
          >https://github.com/JanRnrs</a
        >
      </div>
      <div class="flex gap-1 items-center">
        <img
          src="@/assets/linkedin_black_logo_icon.svg"
          alt="LinkedIn icon"
          class="w-4 h-4 print:w-3 print:h-3"
        />
        <a
          href="https://www.linkedin.com/in/jan-reiners-98243620a/"
          aria-label="LinkedIn profile"
          >https://www.linkedin.com/in/jan-reiners-98243620a/</a
        >
      </div>
      <div v-if="showContactDetails">
        <div class="flex gap-1 items-center">
          <img
            src="@/assets/phone-icon.svg"
            alt="Phone icon"
            class="w-4 h-4 print:w-3 print:h-3"
          />
          <a
            :href="'tel:' + phoneNumber.replaceAll(' ', '')"
            aria-label="Phone number"
            >{{ phoneNumber }}</a
          >
        </div>
        <div class="flex gap-1 items-center">
          <img
            src="@/assets/email-icon.svg"
            alt="Email icon"
            class="w-4 h-4 print:w-3 print:h-3"
          />
          <a :href="'mailto:' + emailAddress" aria-label="Email address">{{
            emailAddress
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
