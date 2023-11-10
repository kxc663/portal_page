<template>
    <div>
        <CustomAppBar />
        <v-main>
            <AlertComponent :alertText="alertText" :btnText="alertBtnText" />
            <BannerComponent :bannerHeight="'80%'" :bannerImage="bannerImageUrl" :slogan="bannerSloganText"
                :description="bannerDescriptionText" :btn_text="bannerBtnText" :shouldShowButton="true" />
            <FooterComponent />
        </v-main>
    </div>
</template>
  
<script>
import AlertComponent from '../components/AlertComponent.vue';
import CustomAppBar from '../components/CustomAppBar.vue';
import BannerComponent from '../components/BannerComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'ForEnterprise',
    components: {
        CustomAppBar,
        AlertComponent,
        BannerComponent,
        FooterComponent
    },
    data() {
        return {
            alertText: `Google is committed to advancing racial equity for Black communities.`,
            alertBtnText: `See how.`,
            bannerImageUrl: `https://lh3.googleusercontent.com/g1VeY9p01k-fMeY0yTPigiPXx09HBHtcK6SfGLrX_GVk1UO9zik80izCL5yecuKJqKJF-EgpTBIcdpN8ekQGh-dEgLoeJmxlpuU=s1500`,
            bannerSloganText: `Meaningful insights.
                   Smarter marketing.
                   Better results.`,
            bannerDescriptionText: `Google Marketing Platform brings together your advertising and analytics to help you make quality customer connections, surface deeper insights, and drive better marketing results.`,
            bannerBtnText: `Talk to Sales`

        };
    }
};
</script>
  
<style scoped></style>
  