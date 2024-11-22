<template>
    <section class="cards mt-[80px]">
        <div class="container 2xl px-[15px] mx-auto">
            <h2 class="cards__title text-5xl mb-[40px] font-bold">{{ title }}</h2>

            <div class="cards__items grid xl:grid-cols-3 grid-cols-2 sm:gap-x-[30px] xl:gap-x-10 sm:gap-y-[30px] gap-x-3 gap-y-3 xl:auto-rows-[480px] auto-rows-[246px] mb-10">
                <CardsItem />
                <CardsItem />
                <CardsItem />
                <CardsItem />
                <CardsItem />
            </div>

            <router-link v-if="isHomePage" class="cards__link flex justify-self-center py-[12px] px-[15px] font-bold text-lg" :to="to">
                Посмотреть все фотоотчеты
            </router-link>
        </div>
    </section>
</template>

<script setup>
import CardsItem from './CardsItem.vue';

const props = defineProps({
    title: String,
    isHomePage: {
        typeof: Boolean,
        default: false
    },
    to: String
})
</script>

<style lang="css">
@import url('./Cards.css');
</style>