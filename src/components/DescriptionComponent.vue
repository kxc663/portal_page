<template>
    <div class="container">
        <div v-if="imagePosition === 'left'" class="image">
            <img :src="imageUrl" alt="Description Image">
        </div>
        <div class="content">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <a :href="linkUrl">{{ linkText }}</a>
        </div>
        <div v-if="imagePosition === 'right'" class="image">
            <img :src="imageUrl" alt="Description Image">
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        title: String,
        description: String,
        linkText: String,
        linkUrl: String,
        imageUrl: String,
        imagePosition: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    height: 100vh;
}

.image {
    flex: 0.4;
}

.image img {
    max-width: 100%;
    height: auto;
}

.content {
    flex: 0.6;
    padding: 20px;
}

a {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
}
</style>