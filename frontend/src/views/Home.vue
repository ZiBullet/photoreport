<template>
    <div class="home">
        <Cards title="Фотоотчеты" :isHomePage="true" to="/reports" />
    </div>
</template>

<script setup>
import Cards from '@/components/shared/Cards/Cards.vue';
</script>