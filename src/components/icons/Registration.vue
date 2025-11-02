<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const props = defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])
function close() { emit('close') }

const auth = useAuthStore()
const username = ref('')
const email = ref('')
const password = ref('')

const handleSignUp = async () => {
  await auth.signUp(email.value, password.value, username.value)
  if (!auth.errorMsg) {
    setTimeout(() => emit('close'), 1500) // optional auto close
  }
}
</script>




<template>
  <transition name="fade-scale">
  <div 
    v-if="isOpen" 
    class="fixed inset-0  bg-opacity-10 flex items-center justify-center z-50"
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

      <form @submit.prevent="handleSignUp">
  <input 
    v-model="username"
    type="text"
    required
    placeholder="Username" 
    class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
  />
  <input 
    v-model="email"
    type="email"
    required
    placeholder="Enter your email" 
    class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
  />
  <input 
    v-model="password"
    type="password"
    required
    placeholder="Password" 
    class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
  />
  
  <button 
    type="submit"
    class="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
    :disabled="auth.loading"
  >
    {{ auth.loading ? 'Creating account...' : 'Join Now' }}
  </button>

  <!-- Feedback messages -->
  <p v-if="auth.errorMsg" class="text-red-500 text-sm mt-2">{{ auth.errorMsg }}</p>
  <p v-if="auth.successMsg" class="text-green-600 text-sm mt-2">{{ auth.successMsg }}</p>
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
