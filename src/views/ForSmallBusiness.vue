<template>
    <div>
        <CustomAppBar />
        <BannerComponent :bannerImage="bannerImageUrl" :slogan="bannerSloganText" :description="bannerDescriptionText"
            :btn_text="bannerBtnText" :shouldShowButton="false" />
    </div>
</template>
  
<script>
import CustomAppBar from '../components/CustomAppBar.vue';
import BannerComponent from '../components/BannerComponent.vue';

export default {
    name: 'ForSmallBusiness',
    components: {
        CustomAppBar,
        BannerComponent
    },
    data() {
        return {
            bannerImageUrl: `https://lh3.googleusercontent.com/8zOqIwsUFFRkcj9C3dekSTRmfikHShNiQf_0BtA5zB2Xz8rvjen1_caXT3LfTsqKJlfWUrKaLi1BwEqKSHmWZo7Vz0MeE6xGIe9Rrg=s1500`,
            bannerSloganText: `Easy-to-use tools for your business. `,
            bannerDescriptionText: `Get free tools to make the most of your marketing, from site and app analytics to intuitive testing and more.`,
            bannerBtnText: ``
        };
    }
};
</script>
  
<style scoped></style>
  