<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="1024"
            fill="none"
            viewBox="0 0 404 1024"
        >
          <defs>
            <pattern
                id="pattern-velo"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.0" class="text-gray-200" fill="none" />
            </pattern>
          </defs>
          <rect width="404" height="1024" fill="url(#pattern-velo)" />
        </svg>
        <svg
          class="absolute top-2/3 right-full transform -translate-y-1/2 -translate-x-32"
          width="404"
          height="1024"
          fill="none"
          viewBox="0 0 404 1024"
        >
          <defs>
            <pattern
                id="pattern-velo"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.0" class="text-gray-200" fill="none" />
            </pattern>
          </defs>
          <rect width="404" height="1024" fill="url(#pattern-velo)" />
        </svg>

      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <span
          v-if="header"
          class="block text-base text-center text-ra-green-600 font-semibold tracking-wide uppercase"
        >{{ header }}</span>
        <h1 v-if="title" class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
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
defineProps({
  header: { type: String, required: false, default: undefined },
  title: { type: String, required: false, default: undefined },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false }
});
</script>
