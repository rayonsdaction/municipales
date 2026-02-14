<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <!-- Arc de cercle à gauche -->
    <svg
        class="absolute top-[-140px] left-0 transform -translate-x-[350px]"
        width="700"
        height="600"
        viewBox="0 0 200 500"
        fill="none"
    >
      <path
          d="M100,450 A100,100 0 0,0 0,100"
          stroke="#f9f7bd"
          stroke-width="50"
          stroke-linecap="round"
      />
    </svg>
    <svg
        class="absolute -top-[60px] left-0 transform -translate-x-[200px]"
        width="300"
        height="350"
        viewBox="0 0 200 900"
        fill="none"
    >
      <path
          d="M50,800 A100,100 0 0,0 200,500"
          stroke="#f9f7bd"
          stroke-width="200"
          stroke-linecap="round"
      />
    </svg>

    <!-- Arc de cercle à droite -->
    <svg
        class="absolute top-[160px] right-0 transform translate-x-[420px]"
        width="700"
        height="600"
        viewBox="0 0 10 500"
        fill="none"
    >
      <path
          d="M0,450 A100,100 0 0,1 0,100"
          stroke="#f9f7bd"
          stroke-width="50"
          stroke-linecap="round"
      />
    </svg>

    <svg
        class="absolute top-[400px] right-0 transform translate-x-[180px]"
        width="300"
        height="350"
        viewBox="0 0 10 900"
        fill="none"
    >
      <path
          d="M150,400 A100,100 0 0,1 0,100"
          stroke="#f9f7bd"
          stroke-width="200"
          stroke-linecap="round"
      />
    </svg>

    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <span
            v-if="header"
            class="block text-base text-center text-ra-green-600 font-semibold tracking-wide uppercase"
        >{{ header }}</span>
        <h1 v-if="title" class="mt-2 block text-3xl text-center leading-8 font-extrabold text-gray-900 sm:text-4xl">
          {{ title }}
        </h1>
        <slot name="header" />
        <p class="mt-8 text-xl text-gray-500 leading-8 text-justify">
          {{ description }}
        </p>
      </div>
      <div class="mt-6 prose prose-lg text-gray-500 mx-auto">
        <img v-if="imageUrl" class="w-full rounded-lg" :src="imageUrl" width="1310" height="873">
        <slot />
      </div>
    </div>
  </div>
</template>


<script setup>
import './assets/styles/main.scss';

defineProps({
  header: { type: String, required: false, default: undefined },
  title: { type: String, required: false, default: undefined },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false }
});
</script>
