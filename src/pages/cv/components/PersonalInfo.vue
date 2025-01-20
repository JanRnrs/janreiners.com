<script setup lang="ts">
const showContactDetails = import.meta.env.VITE_SHOW_CONTACT_DETAILS === 'true';
const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
</script>

<template>
    <div class="flex flex-col gap-2">
        <h1 class="text-mainColor-700 text-7xl font-extrabold">Jan Reiners</h1>
        <h2 class="text-gray-500 text-4xl ">Software Engineer</h2>
        <div>
            <div class="flex gap-1 items-center">
                <img src="@/assets/github-icon.svg" alt="github" class="w-5 h-5">
                <a href="https://github.com/JanRnrs">https://github.com/JanRnrs</a>
            </div>
            <div class="flex gap-1 items-center">
                <img src="@/assets/linkedin_black_logo_icon.svg" alt="linkedin" class="w-5 h-5 ">
                <a href="https://www.linkedin.com/in/jan-reiners-98243620a/">https://www.linkedin.com/in/jan-reiners-98243620a/</a>
            </div>
            <div v-if="showContactDetails">
                <div class="flex gap-1 items-center">
                    <img src="@/assets/phone-icon.svg" alt="mobile number" class="w-5 h-5">
                    <p>{{ phoneNumber }}</p>
                </div>
                <div class="flex gap-1 items-center">
                    <img src="@/assets/email-icon.svg" alt="email address" class="w-5 h-5 ">
                    <p>{{ emailAddress }}</p>
                </div>
            </div>
        </div>
    </div>
</template>