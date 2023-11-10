<template>
    <div class="card">
        <div class="card-header">
            <img :src="logo" class="card-logo" alt="Logo">
        </div>
        <div class="card-body">
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-description">{{ description }}</p>
        </div>
        <div class="card-footer">
            <a href="#" class="card-link"><span class="arrow">→</span></a>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CardComponent',
    props: {
        logo: String,
        title: String,
        description: String
    }
}
</script>
  
<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
    text-align: center;
    padding: 16px;
}

.card-logo {
    max-width: 100px;
    height: auto;
}

.card-body {
    padding: 16px;
}

.card-title {
    margin: 0;
    font-size: 1.2em;
    color: #333;
}

.card-description {
    color: #666;
    font-size: 0.9em;
}

.card-footer {
    padding: 16px;
    text-align: right;
}

.card-link {
    color: #007bff;
    text-decoration: none;
    font-size: 0.9em;
}

.card-link .arrow {
    font-weight: bold;
}</style>
  