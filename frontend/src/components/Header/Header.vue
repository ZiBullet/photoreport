<template>
    <section class="banner bg-black">
        <div class="container 2xl mx-auto px-3.5">
            <header class="header py-11">
                <nav class="header__nav flex justify-between gap-4 items-center">
                    <router-link class="header__nav-logo w-40 flex items-center justify-center" to="/">
                        <img class="w-full h-full object-cover" src="@assets/icons/logo-wh.svg" alt="logo">
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
                        <router-link to="/search" class="header__nav-link lg:flex hidden text-2xl items-center justify-center">
                            <span class="flex items-center justify-center">
                                <i class="icon-search text-2xl"></i>
                            </span>
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
            </header>
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