<template>
    <footer class="footer">
        <div class="footer-section">
            <h3>About Google Marketing Platform</h3>
            <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">For Small Businesses</a></li>
                <li><a href="#">For Enterprise</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Learning & support</h3>
            <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Analytics Academy</a></li>
                <li><a href="#">Skillshop</a></li>
                <li><a href="#">Google Primer</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Developers & partners</h3>
            <ul>
                <li><a href="#">Google Marketing Platform Partners</a></li>
                <li><a href="#">Analytics for developers</a></li>
                <li><a href="#">Tag Manager for developers</a></li>
                <li><a href="#">Campaign Manager 360 for developers</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Related products</h3>
            <ul>
                <li><a href="#">Google Ads</a></li>
                <li><a href="#">Google AdSense</a></li>
                <li><a href="#">Google Ad Manager</a></li>
                <li><a href="#">Google Cloud</a></li>
                <li><a href="#">Firebase</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>More from Google </h3>
            <ul>
                <li><a href="#">Think with Google</a></li>
                <li><a href="#">Business Solutions</a></li>
                <li><a href="#">Google Workspace</a></li>
            </ul>
        </div>

        <div class="f-cop">
            <p>© 2023 Google - <a href="#">Privacy & Terms</a></p>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'FooterComponent'
}
</script>
  
<style scoped>
.footer {
    padding: 20px;
    background-color: ghostwhite;
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer-section {
    flex: 1;
    padding-top: 5vh;
    min-width: 200px;
    margin: 10px;
}

.footer-section h3 {
    color: black;
}

ul {
    list-style: none;
    padding: 0;
}

ul li a {
    color: black;
    text-decoration: none;
}

.f-cop {
    color: #aaa;
    text-align: center;
    margin-top: 20px;
    width: 100%;
}
</style>
  