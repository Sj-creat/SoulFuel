import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(false)
  const errorMsg = ref('')
  const successMsg = ref('')

  // 🔹 Sign Up
  const signUp = async (email, password, username) => {
    loading.value = true
    errorMsg.value = ''
    successMsg.value = ''
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }
      }
    })
    loading.value = false

    if (error) errorMsg.value = error.message
    else {
      successMsg.value = 'Check your email to confirm your account ✉️'
      user.value = data.user
    }
  }

  // 🔹 Sign In
  const signIn = async (email, password) => {
    loading.value = true
    errorMsg.value = ''
    successMsg.value = ''
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    loading.value = false

    if (error) errorMsg.value = error.message
    else {
      successMsg.value = 'Welcome back 👋'
      user.value = data.user
    }
  }

  // 🔹 Sign Out
  const signOut = async () => {
    await supabase.auth.signOut()
    user.value = null
  }

  // 🔹 Fetch active user (when app starts)
  const fetchUser = async () => {
    const { data } = await supabase.auth.getUser()
    user.value = data.user
  }

  return { user, loading, errorMsg, successMsg, signUp, signIn, signOut, fetchUser }
})
