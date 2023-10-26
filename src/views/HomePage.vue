<template>
    <v-app>
        <CustomAppBar />
        <v-main>
            <AlertComponent :alertText="alertText" :btnText="alertBtnText"/>
            <BannerComponent :bannerHeight="'70%'" :bannerImage="bannerImageUrl" :slogan="bannerSloganText" :description="bannerDescriptionText"
                :btn_text="bannerBtnText" />
        </v-main>
        <router-view></router-view>
    </v-app>
</template>

<script>
import AlertComponent from '../components/AlertComponent.vue';
import CustomAppBar from '../components/CustomAppBar.vue';
import BannerComponent from '../components/BannerComponent.vue';

export default {
    name: 'HomePage',
    components: {
        AlertComponent,
        CustomAppBar,
        BannerComponent
    },
    data() {
        return {
            alertText: `Google is committed to advancing racial equity for Black communities.`,
            alertBtnText: `See how.`,
            bannerImageUrl: `https://lh3.googleusercontent.com/KWN57FdsV14gg-DtL97jCSdSfd8Y1Hzr5DD01uGP1dF_XR2lJ3EUIu75oeQUOYUmxJcDr4SZ04DmOO6TuaG5P1shLAKNVXFaRPN5Imtq4y0nb2RCUQ=s1500`,
            bannerSloganText: `Faster, smarter marketing`,
            bannerDescriptionText: `Introducing Google Marketing Platform, a unified advertising and analytics platform for smarter marketing and better results.`,
            bannerBtnText: `Sign in to Google Marketing Platform`
        };
    }
};
</script>