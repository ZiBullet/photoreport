<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/shared/Header/Header.vue';
import Footer from '@/components/shared/Footer/Footer.vue';
</script>