<script setup>
const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

import { XMarkIcon } from '@heroicons/vue/24/solid'
</script>


<template>
  <transition name="fade-scale">
  <div 
    v-if="isOpen" 
    class="fixed inset-0   bg-opacity-10 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
      <!-- Close button -->
      <button 
        @click="close" 
        class="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
      >
        <x-mark-icon class="w-8 h-8  rounded hover:bg-red-600 transition duration-300" />
      </button>

      <!-- Modal Content -->
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Get Started with <span class="text-gold"> SoulFuel</span></h2>
      <p class="text-gray-600 mb-6">
        Sign up now and begin your journey of daily inspiration and purposeful living.
      </p>

      <form>
        <input 
          type="Username"  required
          placeholder="Username" 
          class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
        />
        <input 
          type="email"  required
          placeholder="Enter your email" 
          class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
        />
        <input 
          type="Password" 
          placeholder="Password"  required
          class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
        />
        <button 
          type="submit" 
          class="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
        >
          Join Now
        </button>
      </form>
    </div>
  </div>
  </transition>
</template>


<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
