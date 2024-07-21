<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuth, UserButton, SignedIn } from "vue-clerk";
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
        <RouterLink to="/sign-in" class="text-white text-xl font-semibold"
          >SignIn</RouterLink
        >
        <RouterLink to="/sign-up" class="text-white text-xl font-semibold"
          >SignUp</RouterLink
        >
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  </header>

  <main class="container mx-auto">
    <div class="flex items-center justify-center min-h-[calc(100dvh-80px)]">
      <div>
        <RouterView />
      </div>
    </div>
  </main>
</template>
