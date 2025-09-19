<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { BookOpenIcon, MusicalNoteIcon, UsersIcon, FireIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import Home from '@/views/Home.vue'

const title = ref("SoulFuel")
const subtitle = ref("Fuel your spirit with daily inspiration, purposeful living, and uplifting content.")
const mobileOpen = ref(false)

// SEO tags
useHead({
  title: "SoulFuel - Welcome",
  meta: [
    { name: "description", content: "SoulFuel is a platform that inspires, motivates, and fuels your spirit." },
    { name: "keywords", content: "SoulFuel, motivation, inspiration, faith" },
    { property: "og:title", content: "SoulFuel - Welcome" },
    { property: "og:description", content: "Join SoulFuel for motivational and inspirational resources." },
    { property: "og:type", content: "website" }
  ]
})
</script>

<template>
   <!-- nav-bar -->
  <header class="fixed top-0 left-0 w-full shadow-md z-50 bg-[#4a5d8e]">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- logo & title -->
      <div class="flex items-center space-x-3">
        <img src="../assets/logo.png" alt="SoulFuel" class="w-15 h-15 rounded-full" />
        <span class="text-2xl font-extrabold text-gold">{{ title }}</span>
      </div>

      <!-- Desktop nav -->
      <ul class="hidden md:flex space-x-8 text-gray-300 font-medium">
        <li><a href="#home" class="hover:text-gold transition">Home</a></li>
        <li><a href="#features" class="hover:text-gold transition">Features</a></li>
        <li><a href="#about" class="hover:text-gold transition">About</a></li>
        <li><a href="#get-started" class="hover:text-gold transition">Get started</a></li>
      </ul>

      <!-- Mobile toggle -->
      <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-300 focus:outline-none">
        <Bars3Icon v-if="!mobileOpen" class="w-8 h-8" />
        <XMarkIcon v-else class="w-8 h-8" />
      </button>
    </nav>
  </header>

  <!-- Mobile sidebar -->
  <transition name="slide">
    <div
      v-if="mobileOpen"
      class="fixed top-0 right-0 h-full w-50 bg-[#1f2937] shadow-lg z-50 p-6 space-y-6 text-gray-300 font-medium transform transition-transform duration-300"
    >
      <!-- Close button inside -->
      <img src="../assets/logo.png" alt="SoulFuel" class="w-15 h-15 rounded-full" />
      <button @click="mobileOpen = false" class="absolute top-4 right-4 text-gray-400 hover:text-gold">
        <XMarkIcon class="w-8 h-8" />
      </button>

      <nav class="mt-12 space-y-4">
        <a href="#home" class="block hover:text-gold" @click="mobileOpen = false">Home</a>
        <a href="#features" class="block hover:text-gold" @click="mobileOpen = false">Features</a>
        <a href="#about" class="block hover:text-gold" @click="mobileOpen = false">About</a>
        <a href="#get-started" class="block hover:text-gold" @click="mobileOpen = false">Get started</a>
      </nav>
    </div>
  </transition>


  <!-- hero -->
  <section class="min-h-screen flex flex-col items-center justify center text-center px-4 bg-[#10172a] pt-25">
    <h1 class="text-3xl font-extrabold text-gold mb-4">
        {{ title }}
    </h1>
    <p class="text-lg text-gray-300 max-w-xl">
        {{ subtitle }}
    </p>
  </section>
  <!-- features section  -->
  <section class="py-16 bg-[#10172a] text-center" >
    <h2 class="text-3xl font-bold text-bold mb-10 text-gold">What SoulFuel Offers</h2>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 px-6 max-w-6xl mx-auto">
        <!-- card 1 -->
      <div class="bg-[#1f2937] p-6 rounded-2xl shadow-md hover:shadow-xl shadow-gray-400 transition">
        <BookOpenIcon class="w-12 h12 text-gold mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2 text-gray-400">Bible Reading</h3>
        <p class="text-[#f5f5f5]">
          Read through the Scriptures with ease, chapter by chapter, and grow deeper in the Word.
        </p>
      </div>
      <!-- card 2 -->
      <div class="bg-[#1f2937] p-6 rounded-2xl shadow-md hover:shadow-xl shadow-gray-400 transition">
        <FireIcon class="w-12 h12 text-gold mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2 text-gray-400">Daily Inspiration</h3>
        <p class="text-[#f5f5f5]">
          Get fresh words of encouragement and wisdom everyday to fuel your spirit.
        </p>
      </div>
      <!-- card 3 -->
      <div class="bg-[#1f2937] p-6 rounded-2xl shadow-md hover:shadow-xl shadow-gray-400 transition">
        <MusicalNoteIcon class="w-12 h12 text-gold mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2 text-gray-400">Audio Messages</h3>
        <p class="text-[#f5f5f5]">
          Listen to uplifting audio messages anytime, anywhere.
        </p>
      </div>
      <!-- card 4 -->
      <div class="bg-[#1f2937] p-6 rounded-2xl shadow-md hover:shadow-xl shadow-gray-300 transition">
        <UsersIcon class="w-12 h12 text-gold mx-auto mb-4 " />
        <h3 class="text-xl font-semibold mb-2 text-gray-400">Community</h3>
        <p class="text-[#f5f5f5]">
          Connect with like-minded people and grow together in purpose
        </p>
      </div>
    </div>
  </section>
  <!-- footer  -->
</template>

 <style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 