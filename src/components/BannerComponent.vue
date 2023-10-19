<template>
    <div class="banner-container">
        <v-img :src="bannerImage" class="banner-image">
            <v-container class="fill-height text-center">
                <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12" md="8">
                        <h1 class="display-2 white--text">{{ slogan }}</h1>
                        <p class="title white--text">{{ description }}</p>
                        <v-btn large color="primary" @click="handleButtonClick">{{ btn_text }}</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </div>
</template>
  
<script>

export default {
    props: {
        bannerImage: {
            type: String,
            required: true,
        },
        slogan: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        btn_text: {
            type: String,
            default: '',
        },
    },
    methods: {
        handleButtonClick() {
            console.log('Button clicked!');
        },
    },
};
</script>
  
<style scoped>
.banner-container {
    width: 100%;
    height: 70%;
    position: relative;
}

.banner-image {
    width: 100%;
    height: 100%;
}
</style>
  