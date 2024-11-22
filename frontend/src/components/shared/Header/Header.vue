<template>
    <section class="banner h-svh min-h-[376px] mb-[80px]">
        <header class="header py-11 absolute top-0 left-0 z-10 w-full">
            <div class="container 2xl mx-auto px-3.5">
                <nav class="header__nav flex justify-between gap-4 items-center">
                    <router-link class="header__nav-logo md:w-40 w-6 flex items-center justify-center" to="/">
                        <img class="md:block hidden w-full h-full object-cover" src="@assets/icons/logo-wh.svg" alt="logo">
                        <img class="md:hidden block w-full h-full object-cover" src="@assets/icons/logo-phones.svg" alt="logo">
                    </router-link>
                    <ul class="header__nav-list lg:flex items-center lg:gap-10 hidden xl:gap-16 ">
                        <li class="header__nav-list-item flex justify-center items-center">
                            <router-link to="/" class="header__nav-list-link text-lg">Главная</router-link>
                        </li>
                        <li class="header__nav-list-item flex justify-center items-center">
                            <router-link to="/estabs" class="header__nav-list-link text-lg">Заведения</router-link>
                        </li>
                        <li class="header__nav-list-item flex justify-center items-center">
                            <router-link to="/events" class="header__nav-list-link text-lg">События</router-link>
                        </li>
                        <li class="header__nav-list-item flex justify-center items-center">
                            <router-link to="/reports" class="header__nav-list-link text-lg">Фотоотчеты</router-link>
                        </li>
                        <li class="header__nav-list-item flex justify-center items-center">
                            <router-link to="/order" class="header__nav-list-link text-lg">Заказать фотосъемку</router-link>
                        </li>
                    </ul>
                    <div class="header__nav-links flex items-center gap-9">
                        <router-link to="/search"
                            class="header__nav-link w-6 lg:flex hidden text-2xl items-center justify-center">
                            <img class="w-full h-full object-cover" src="@assets/icons/search.svg" alt="search icon">
                        </router-link>
                        <router-link to="/profile" class="header__nav-link w-6 lg:flex hidden items-center justify-center">
                            <img class="w-full h-full object-cover" src="@assets/icons/user.svg" alt="">
                        </router-link>
                        <button @click="isOpen = true"
                            class="header__nav-menu w-6 gap-1 lg:hidden flex flex-col items-center justify-center">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </div>
            <Sidebar :isOpen="isOpen" @closeMenu="isOpen = false" :burger-icon="false" right disableOnOutsideClick>
                <router-link class="menu-item" to="/">
                    Главная
                </router-link>
                <router-link class="menu-item" to="/estabs">
                    Заведения
                </router-link>
                <router-link class="menu-item" to="/events">
                    События
                </router-link>
                <router-link class="menu-item" to="/reports">
                    Фотоотчеты
                </router-link>
                <router-link class="menu-item" to="/order">
                    Заказать фотосъемку
                </router-link>
                <router-link class="menu-item" to="/search">
                    Поиск
                </router-link>
                <router-link class="menu-item" to="profile">
                    Профиль
                </router-link>
            </Sidebar>
        </header>

        <div class="banner__wrap w-full h-full relative">
            <img src="@assets/imgs/poster.webp" alt="" class="select-none absolute w-full h-full object-cover">
            <div class="px-4 h-full flex flex-col justify-center container 2xl mx-auto">
                <div class="banner__desc mb-4 relative z-[6] flex flex-col items-start max-w-[538px] w-full">
                    <h4 class="banner__desc-title font-medium text-sm uppercase mb-[15px]">
                        АРТ ПРОСТРАНСТВО KLUMBA SPACE
                    </h4>
                    <p class="banner__desc-text mb-7 xl:text-5xl sm::text-4xl  text-2xl font-bold">
                        Кавер-бэнд <br> «В Главных ролях »
                    </p>
                    <a href="#" class="banner__desc-link flex items-center justify-center gap-[15px] font-bold text-sm">
                        <span>Посмотреть</span>
                        <img src="@assets/icons/arrow-right.svg" alt="">
                    </a>
                </div>
            </div>
            <img src="@assets/icons/heart-sm.svg" alt="" class="lg:hidden absolute z-[4] bottom-[6%] right-[40%]">
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { Slide as Sidebar } from 'vue3-burger-menu'
const isOpen = ref(false)

</script>

<style lang="css">
@import url('./Header.css');
</style>