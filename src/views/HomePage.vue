<template>
    <v-app>
        <CustomAppBar />
        <v-main>
            <AlertComponent :alertText="alertText" :btnText="alertBtnText" />
            <BannerComponent :bannerHeight="'30%'" :bannerImage="bannerImageUrl" :slogan="bannerSloganText"
                :description="bannerDescriptionText" :btn_text="bannerBtnText" />
            <DescriptionComponent :title="descriptionTitle_s" :description="descriptionText_s" :linkText="descriptionLinkText_s"
                :linkUrl="descriptionLinkUrl_s" :imageUrl="descriptionImageUrl_s" :imagePosition="descriptionImagePosition_s" />

            <DescriptionComponent :title="descriptionTitle_e" :description="descriptionText_e" :linkText="descriptionLinkText_e"
                :linkUrl="descriptionLinkUrl_e" :imageUrl="descriptionImageUrl_e" :imagePosition="descriptionImagePosition_e" />

        </v-main>
        <router-view></router-view>
    </v-app>
</template>

<script>
import AlertComponent from '../components/AlertComponent.vue';
import CustomAppBar from '../components/CustomAppBar.vue';
import BannerComponent from '../components/BannerComponent.vue';
import DescriptionComponent from '../components/DescriptionComponent.vue';

export default {
    name: 'HomePage',
    components: {
        AlertComponent,
        CustomAppBar,
        BannerComponent,
        DescriptionComponent
    },
    data() {
        return {
            alertText: `Google is committed to advancing racial equity for Black communities.`,
            alertBtnText: `See how.`,
            bannerImageUrl: `https://lh3.googleusercontent.com/KWN57FdsV14gg-DtL97jCSdSfd8Y1Hzr5DD01uGP1dF_XR2lJ3EUIu75oeQUOYUmxJcDr4SZ04DmOO6TuaG5P1shLAKNVXFaRPN5Imtq4y0nb2RCUQ=s1500`,
            bannerSloganText: `Faster, smarter marketing`,
            bannerDescriptionText: `Introducing Google Marketing Platform, a unified advertising and analytics platform for smarter marketing and better results.`,
            bannerBtnText: `Sign in to Google Marketing Platform`,

            descriptionTitle_s: `Easy-to-use tools for small business.`,
            descriptionText_s: `Get free tools to make the most of your marketing, from site and app analytics to intuitive testing and more.`,
            descriptionLinkText_s: `See small business solutions`,
            descriptionLinkUrl_s: `/for-small-business`,
            descriptionImageUrl_s: `https://lh3.googleusercontent.com/3Obh_6pdqf49IZBncFJd_-mcVmF5-PgtejBFSmzK8S1OxD4AZMIbQm33z3eob8jwBr0KezXBlr_PJzH4pKQYqDWmcpn3FW-5HE7pqw=s3000`,
            descriptionImagePosition_s: `right`,

            descriptionTitle_e: `Advanced solutions for large enterprises `,
            descriptionText_e: `Make deeper customer connections to drive better marketing results with a complete set of advertising and analytics solutions.`,
            descriptionLinkText_e: `See enterprise solutions`,
            descriptionLinkUrl_e: `/for-enterprice`,
            descriptionImageUrl_e: `https://lh3.googleusercontent.com/3_THrEE2jwx7wgkxJ2wCx1EN7Mgd2ajWnINgI6V9gyruAe7J_U05MKQBPKaOdXI_zuQ_yMQ055PDZ2za3N6ejbbqH6hBmSxZqb45Bg=s3000`,
            descriptionImagePosition_e: `left`

        };
    }
};
</script>