<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import {
  useAuth,
  UserButton,
  SignedIn,
  SignedOut,
  ClerkLoaded,
} from "vue-clerk";
</script>

<template>
  <header class="bg-[#6c47ff]">
    <div class="container flex justify-between items-center h-20 w-full">
      <div
        @click="$router.push('/')"
        class="text-2xl font-extrabold text-white cursor-pointer"
      >
        ClerkVueAuth
      </div>
      <nav class="flex items-center gap-10">
        <SignedOut>
          <RouterLink to="/sign-in" class="text-white text-xl font-semibold"
            >SignIn</RouterLink
          >
          <RouterLink to="/sign-up" class="text-white text-xl font-semibold"
            >SignUp</RouterLink
          >
        </SignedOut>
        <SignedIn>
          <UserButton after-sign-out-url="/sign-in" />
        </SignedIn>
      </nav>
    </div>
  </header>

  <main class="container mx-auto">
    <div class="flex items-center justify-center min-h-[calc(100dvh-80px)]">
      <div>
        <ClerkLoaded>
          <RouterView />
        </ClerkLoaded>
      </div>
    </div>
  </main>
</template>
