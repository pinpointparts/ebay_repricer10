'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const TEST_ACCOUNT = {
  email: 'Test@123.com',
  password: 'Test123',
  name: 'Test User'
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        if (email === TEST_ACCOUNT.email && password === TEST_ACCOUNT.password) {
          set({ 
            user: { 
              email: TEST_ACCOUNT.email, 
              name: TEST_ACCOUNT.name 
            }, 
            isAuthenticated: true 
          })
          return true
        }
        return false
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      }
    }),
    {
      name: 'auth-storage',
    }
  )
)