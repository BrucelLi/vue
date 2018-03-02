<template>
    <div>
        <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
            <swiper-slide class="swiper-item"></swiper-slide>
            <swiper-slide class="swiper-item"></swiper-slide>
            <swiper-slide class="swiper-item"></swiper-slide>
            <swiper-slide class="swiper-item"></swiper-slide>
            <swiper-slide class="swiper-item"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        data() {
            return {
                swiperOption: {
                    autoplay:true,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    notNextTick: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/css/base.scss';
    .swiper-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        .swiper-item {
            height: 5rem;
            background: no-repeat center/cover;
            &:nth-of-type(1){
                @include dpr-img("../style/img/","01");
            }
            &:nth-of-type(2){
                @include dpr-img("../style/img/","02");
            }
            &:nth-of-type(3){
                @include dpr-img("../style/img/","03");
            }
            &:nth-of-type(4){
                @include dpr-img("../style/img/","04");
            }
            &:nth-of-type(5){
                @include dpr-img("../style/img/","05");
            }
            &:nth-of-type(6){
                @include dpr-img("../style/img/","01");
            }
            &:nth-of-type(7){
                @include dpr-img("../style/img/","02");
            }
        }
    }
</style>