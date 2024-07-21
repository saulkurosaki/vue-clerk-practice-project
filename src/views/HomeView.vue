<script setup lang="ts">
import { useAuth } from "vue-clerk";
import { useMiddleware } from "../helpers/middleware.ts";

const { isSignedIn } = useAuth();

useMiddleware(isSignedIn.value);
</script>

<template>
  <div class="text-3xl underline text-red-500">Home Page</div>
</template>
