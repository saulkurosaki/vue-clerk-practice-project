<script setup lang="ts">
import { UserProfile, useAuth } from "vue-clerk";
import { useMiddleware } from "../helpers/middleware.ts";

const { isSignedIn } = useAuth();

useMiddleware(isSignedIn.value);
</script>

<template>
  <UserProfile />
</template>
