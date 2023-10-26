<template>
    <v-app-bar app color="white" dark>
        <div class="d-flex align-center mr-2">
            <v-img alt="Google Logo" class="shrink" contain src="../assets/google-logo.svg" transition="scale-transition"
                width="100" />
            <router-link to="/" tag="v-btn" class="btn-text" active-class="active" style="font-size: large;">Marketing Platform</router-link>
        </div>
        <router-link to="/for-small-business" tag="v-btn" class="btn-text" active-class="active">For Small
            Business</router-link>
        <router-link to="/for-enterprise" tag="v-btn" class="btn-text" active-class="active">For Enterprise</router-link>
        <v-btn text class="btn-text">Resources</v-btn>
        <v-btn text class="btn-text">Blog</v-btn>
        <v-spacer></v-spacer>
        <v-btn text class="btn-blue">Partners</v-btn>
        <v-btn text class="btn-blue">Support</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'CustomAppBar'
};
</script>

<style scoped>
.btn-text,
.btn-blue {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    transition: color 0.3s ease;
}

.btn-text {
    color: grey;
}

.btn-blue {
    color: #4285F4;
}

.btn-text:hover,
.btn-text:hover::before,
.btn-blue:hover,
.btn-blue:hover::before {
    color: black !important;
    background-color: transparent !important;
}

.btn-text::before,
.btn-blue::before {
    background-color: transparent !important;
}
</style>

