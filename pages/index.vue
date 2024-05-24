<template>
  <div class="flex flex-col gap-2">
    <TheLogo class="text-5xl font-bold" />
    <p class="hover:text-primary-400 transition">Prontos para o quiz?</p>
    <!-- <USelectMenu v-model="category" :options="categories" class="mt-8" /> -->
    <UButton
      label="Começar!"
      icon="i-heroicons-play-circle"
      variant="outline"
      class="py-4 hover:scale-110"
      to="classic"
      block
    />
  </div>
</template>

<script setup lang="ts">
import { categories } from "~/values";
import { useQuestionStore } from "~/store/question";

const questionStore = useQuestionStore();
const { category } = storeToRefs(questionStore);
</script>
