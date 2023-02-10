<script setup>
import slideNews from "../components/slideNews.vue";
import groupNews from "../components/groupNews.vue";
</script>

<template>
  <main>
    <div>
      <slideNews />
    </div>
    <div class="mt-5">
      <div><b>News Update</b></div>
      <div>
        <groupNews />
      </div>
    </div>
  </main>
</template>
