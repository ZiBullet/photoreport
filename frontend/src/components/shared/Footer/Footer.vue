<template>
    <footer class="footer pt-[70px] pb-[60px]">
        <div class="container 2xl px-[15px] mx-auto">
            <div class="footer__wrap pt-10 flex gap-[58px] flex-wrap justify-between">
                <div class="footer__col flex flex-col gap-10">
                    <router-link to="/" class="footer__col-logo">
                        <img src="@assets/icons/logo.svg" alt="">
                    </router-link>
                    <address class="footer__col-address lg:text-lg sm:text-[22px] text-[12px] flex flex-col items-start not-italic">
                        <a href="#" class="footer__col-link mb-5">
                            Кемерово <br>
                            Советский проспект 34
                        </a>
                        <a href="mailto:Limon.agency@yandex.ru"
                            class="footer__col-link mb-[10px]">Limon.agency@yandex.ru</a>
                        <a href="tel:+79990009999" class="footer__col-link">+7 999 000 9999</a>
                    </address>
                </div>

                <ul class="footer__list flex flex-col self-end gap-[15px] font-medium lg:text-lg sm:text-[22px] text-[12px]">
                    <li class="footer__list-item">
                        <router-link to="/" class="footer__list-link">Главная</router-link>
                    </li>
                    <li class="footer__list-item">
                        <router-link to="/estabs" class="footer__list-link">Заведения</router-link>
                    </li>
                    <li class="footer__list-item">
                        <router-link to="/events" class="footer__list-link">События</router-link>
                    </li>
                    <li class="footer__list-item">
                        <router-link to="/reports" class="footer__list-link">Фотоотчеты</router-link>
                    </li>
                </ul>
                <ul class="footer__list text-lg flex flex-col self-end gap-[15px] font-medium lg:text-lg sm:text-[22px] text-[12px]">
                    <li class="footer__list-item">
                        <a href="#" class="footer__list-link">Заказать фотосъемку</a>
                    </li>
                    <li class="footer__list-item">
                        <a href="#" class="footer__list-link">Вакансии</a>
                    </li>
                    <li class="footer__list-item lg:max-w-[220px]">
                        <a href="#" class="footer__list-link">Пользовательское соглашение</a>
                    </li>
                </ul>

                <div class="footer__shapes lg:flex gap-1 hidden ">
                    <div class="footer__shape w-[70px] h-[70px]"></div>
                    <div class="footer__shape w-[70px] h-[70px]"></div>
                    <div class="footer__shape w-[70px] h-[70px]"></div>
                </div>
                <div class="footer__shapes flex gap-1 lg:hidden ">
                    <a href="#" class="footer__shape flex items-center justify-center rounded-2xl lg:w-[75px] lg:h-[70px] w-5 h-5 overflow-hidden">
                        <img class="h-full w-full" src="@assets/icons/inst.svg" alt="">
                    </a>
                    <a href="#" class="footer__shape flex items-center justify-center rounded-2xl lg:w-[75px] lg:h-[70px] w-5 h-5 overflow-hidden">
                        <img class="h-full w-full" src="@assets/icons/face.svg" alt="">
                    </a>
                    <a href="#"
                        class="footer__shape flex items-center justify-center rounded-2xl lg:w-[75px] lg:h-[70px] w-5 h-5 overflow-hidden">
                        <img class="h-full w-full" src="@assets/icons/google.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="css">
@import url('./Footer.css');
</style>