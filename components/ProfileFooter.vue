<template>
    <div class="profile-footer">
        <div class="sidebar-useful-links">
            <a href="#">About</a>
            <a href="#">Accessibility</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Advertising</a>
            <a href="#">Get the App</a>
            <a href="#">More</a>

            <div class="copyright-msg">
                <img src="/images/logo.png" alt="linkedon logo">
                <p>Linkedon &#169; 2023. All rights reserved</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.profile-footer {
    padding: 0 6% 30px;

    .sidebar-useful-links {
        text-align: left;
        padding: 0;

        a {
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
        }

        .copyright-msg {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 10px;
            font-size: 12px;
            font-weight: 500;

            img {
                width: 18px;
                margin-right: 4px;
            }
        }
    }
}
</style>