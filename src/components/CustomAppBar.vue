<template>
    <v-app-bar app color="white" dark>
        <div class="d-flex align-center mr-2">
            <v-img alt="Google Logo" class="shrink" contain src="../assets/google-logo.svg" transition="scale-transition"
                width="100" />
            <v-btn text class="btn-text" style="font-size: large;">Marketing Platform</v-btn>
        </div>
        <v-btn text class="btn-text">For Small Business</v-btn>
        <v-btn text class="btn-text">For Enterprise</v-btn>
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

