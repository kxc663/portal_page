<template>
    <v-alert dense class="mt-2 text-center white--text" color="black" icon="info" style="font-size: small;">
        {{ alertText }}
        <v-btn text color="white" style="font-size: smaller; font-weight: bold;" @click="handleButtonClick">
            {{ btnText }}
        </v-btn>
    </v-alert>
</template>

  
<script>

export default {
    props: {
        alertText: {
            type: String,
            default: '',
        },
        btnText: {
            type: String,
            default: '',
        }
    },
    methods: {
        handleButtonClick() {
            console.log('Button clicked!');
        },
    },
}
</script>