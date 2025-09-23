<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { BookOpenIcon, MusicalNoteIcon, UsersIcon, FireIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import Home from '@/views/Home.vue'
import heroBgDesktop from '@/assets/soul o.png'
import heroBgMobile from '@/assets/try.jpg'

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
        <li><a href="#home" class="hover:text-[#ffd700] transition">Home</a></li>
        <li><a href="#features" class="hover:text-[#ffd700] transition">Features</a></li>
        <li><a href="#about" class="hover:text-[#ffd700] transition">About</a></li>
        <li><a href="#get-started" class="hover:text-[#ffd700] transition">Get started</a></li>
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
        <a href="#home" class="block hover:text-[#ffd700]" @click="mobileOpen = false">Home</a>
        <a href="#features" class="block hover:text-[#ffd700]" @click="mobileOpen = false">Features</a>
        <a href="#about" class="block hover:text-[#ffd700]" @click="mobileOpen = false">About</a>
        <a href="#get-started" class="block hover:text-[#ffd700]" @click="mobileOpen = false">Get started</a>
      </nav>
    </div>
  </transition>


  <!-- Hero Section -->
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
  >
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom hidden sm:block"
      :style="{ backgroundImage: `url(${heroBgDesktop})` }"
    ></div>

    <div
      class="absolute inset-0 bg-cover w-full bg-center bg-no-repeat animate-zoom block sm:hidden"
      :style="{ backgroundImage: `url(${heroBgMobile})` }"
    ></div>

    <!-- Dark overlay for readability -->
    <div class="absolute inset-0  bg-opacity-50"></div>

    <!-- Texts -->
    <div class="relative z-10 max-w-2xl px-4">
      
      <p class="text-base sm:text-lg lg:text-xl mb-8 pt-80">
        {{ subtitle }}
      </p>
      <a
        href="#get-started"
        class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Get Started &rarr;
      </a>
    </div>
  </section>
  <!-- features section  -->
  <section id="features" class="py-16 bg-[#10172a] text-center" >
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

  <section id="about" class="relative bg-[#1f2937] py-20 px 6 md:px-12 lg:px-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#4a5d8e] mb-6">
        About <span class="text-gold">SoulFuel</span>
      </h2>
      <p class="text-lg text-gray-300 leading-relaxed mb-6">
        SoulFuel is more than just a platform — it’s a movement. 
        Our mission is to <span class="font-semibold text-[#4a5d8e]">fuel your spirit</span> with 
        daily inspiration, purposeful living, and uplifting content. 
      </p>
      <p class="text-lg text-gray-300 leading-relaxed mb-6">
        Whether you’re seeking motivation, spiritual guidance, or a 
        community of like-minded individuals, SoulFuel is here to 
        help you <span class="font-semibold text-gold">ignite your passion</span> 
        and walk in purpose.
      </p>
      <a href="#get-started" 
         class="inline-block bg-[#4a5d8e] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gold hover:text-[#ffd700] transition">
        Get Started
      </a>
      </div>

      <!-- Image / Illustration -->
      <div class="flex justify-center md:justify-end">
        <img src="../assets/logo.png" alt="About SoulFuel" class="rounded-2xl shadow-lg max-w-sm md:max-w-md lg:max-w-lg">
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

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.animate-zoom {
  animation: zoom 10s ease-in-out infinite alternate;
}

</style> 