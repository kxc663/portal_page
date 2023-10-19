<template>
  <v-app>
    <CustomAppBar />
    <v-main>
      <v-alert dense class="mt-2 text-center white--text" color="black" icon="" style="font-size: small;">
        Google is committed to advancing racial equity for Black communities.
        <v-btn text color="white" style="font-size: smaller; font-weight: bold;">
          See how.
        </v-btn>
      </v-alert>
      <BannerComponent
        :bannerImage="'https://lh3.googleusercontent.com/KWN57FdsV14gg-DtL97jCSdSfd8Y1Hzr5DD01uGP1dF_XR2lJ3EUIu75oeQUOYUmxJcDr4SZ04DmOO6TuaG5P1shLAKNVXFaRPN5Imtq4y0nb2RCUQ=s1500'"
        :slogan="'Faster, smarter marketing'"
        :description="'Introducing Google Marketing Platform, a unified advertising and analytics platform for smarter marketing and better results.'"
        :btn_text="'Sign in to Google Marketing Platform'" />
    </v-main>
  </v-app>
</template>

<script>
import CustomAppBar from './components/CustomAppBar.vue';
import BannerComponent from './components/BannerComponent.vue';

export default {
  name: 'App',
  components: {
    CustomAppBar,
    BannerComponent,
  }
};
</script>
