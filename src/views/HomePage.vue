<template>
    <v-app>
        <CustomAppBar />
        <v-main>
            <AlertComponent :alertText="alertText" :btnText="alertBtnText" />
            <BannerComponent :bannerHeight="'30%'" :bannerImage="bannerImageUrl" :slogan="bannerSloganText"
                :description="bannerDescriptionText" :btn_text="bannerBtnText" />
            <DescriptionComponent :title="descriptionTitle_s" :description="descriptionText_s"
                :linkText="descriptionLinkText_s" :linkUrl="descriptionLinkUrl_s" :imageUrl="descriptionImageUrl_s"
                :imagePosition="descriptionImagePosition_s" />

            <DescriptionComponent :title="descriptionTitle_e" :description="descriptionText_e"
                :linkText="descriptionLinkText_e" :linkUrl="descriptionLinkUrl_e" :imageUrl="descriptionImageUrl_e"
                :imagePosition="descriptionImagePosition_e" />
            <p class="main-title">Integrated solutions for every marketer.</p>
            <div class="cards-container">
                <CardComponent v-for="card in cards" :key="card.id" :logo="card.logo" :title="card.title"
                    :description="card.description" />
            </div>
            <FooterComponent />
        </v-main>
        <router-view></router-view>
    </v-app>
</template>

<script>
import AlertComponent from '../components/AlertComponent.vue';
import CustomAppBar from '../components/CustomAppBar.vue';
import BannerComponent from '../components/BannerComponent.vue';
import DescriptionComponent from '../components/DescriptionComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'HomePage',
    components: {
        AlertComponent,
        CustomAppBar,
        BannerComponent,
        DescriptionComponent,
        CardComponent,
        FooterComponent
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
            descriptionLinkUrl_e: `/for-enterprise`,
            descriptionImageUrl_e: `https://lh3.googleusercontent.com/3_THrEE2jwx7wgkxJ2wCx1EN7Mgd2ajWnINgI6V9gyruAe7J_U05MKQBPKaOdXI_zuQ_yMQ055PDZ2za3N6ejbbqH6hBmSxZqb45Bg=s3000`,
            descriptionImagePosition_e: `left`,

            cards: [
                {
                    id: 1,
                    logo: '../assets/1.png',
                    title: 'Analytics',
                    description: 'Understand your customers so you can deliver better experiences.'
                },
                {
                    id: 2,
                    logo: '../assets/2.png',
                    title: 'Tag Manager',
                    description: 'Manage all your tags without editing code.'
                },
                {
                    id: 3,
                    logo: '../assets/3.png',
                    title: 'Campaign Manager 360',
                    description: 'Get a complete view of all your digital media campaigns.'
                },
                {
                    id: 4,
                    logo: '../assets/4.png',
                    title: 'Display & Video 360',
                    description: 'Reach today’s always-connected audiences wherever they are.'
                },
                {
                    id: 5,
                    logo: '../assets/5.png',
                    title: 'Search Ads 360',
                    description: 'Get real-time data and unified insights for your search campaigns.'
                }
            ]
        };
    }
};
</script>

<style>
.main-title {
  text-align: center;
  margin: 0 auto; 
  font-size: 3em; 
  max-width: 50%; 
}


.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 20vw;
}

.cards-container>* {
    flex: 1 1 calc(33.333% - 20px);
    margin: 10px;
}
</style>