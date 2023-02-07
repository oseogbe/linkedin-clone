<template>
    <nav class="navbar">
        <div class="navbar-left">
            <!-- <nuxt-link to="/" class="logo" @click="activeLink = 'index'" :class="{'active-link': activeLink == 'index'}"><img src="/images/logo.png" alt="linkedon-clone logo" /></nuxt-link> -->
            <a href="/" @click="activeLink = 'index'" :class="{'active-link': activeLink == 'index'}" class="logo"><img src="/images/logo.png" alt="linkedon-clone logo"></a>

            <div class="search-box">
                <img src="/images/search.png" alt="search icon">
                <input type="text" placeholder="Search">
            </div>
        </div>
        <div class="navbar-center">
            <ul>
                <!-- <li><nuxt-link to="/"><img src="/images/home.png" alt=""> <span>Home</span></nuxt-link></li> -->
                <li><a href="/" @click="activeLink = 'index'" :class="{'active-link': activeLink == 'index'}"><img src="/images/home.png" alt=""> <span>Home</span></a></li>
                <li><nuxt-link to="#"><img src="/images/network.png" alt=""> <span>My Network</span></nuxt-link></li>
                <li><nuxt-link to="#"><img src="/images/jobs.png" alt=""> <span>Jobs</span></nuxt-link></li>
                <li><nuxt-link to="#"><img src="/images/message.png" alt=""> <span>Messaging</span></nuxt-link></li>
                <li><nuxt-link to="#"><img src="/images/notification.png" alt=""> <span>Notifications</span></nuxt-link></li>
            </ul>
        </div>
        <div class="navbar-right">
            <div class="online">
                <img src="/images/user-1.png" alt="" class="nav-profile-img" @click="openProfileMenu()">
            </div>
        </div>
        <!-- ------------  profile dropdown-menu  ------------ -->
        <div class="profile-menu-wrap">
            <div class="profile-menu" v-show="showProfileMenu">
                <div class="user-info">
                    <img src="/images/user-1.png" alt="">
                    <div>
                        <h3>Larry Holmer</h3>
                        <a href="/profile">See your profile</a>
                        <!-- <nuxt-link @click="activeLink = 'profile'" to="/profile">See your profile</nuxt-link> -->
                    </div>
                </div>
                <hr>
                <nuxt-link to="#" class="profile-menu-link">
                    <img src="/images/feedback.png" alt="">
                    <p>Give Feedback</p>
                    <span>></span>
                </nuxt-link>
                <nuxt-link to="#" class="profile-menu-link">
                    <img src="/images/setting.png" alt="">
                    <p>Settings & Privacy</p>
                    <span>></span>
                </nuxt-link>
                <nuxt-link to="#" class="profile-menu-link">
                    <img src="/images/help.png" alt="">
                    <p>Help & Support</p>
                    <span>></span>
                </nuxt-link>
                <nuxt-link to="#" class="profile-menu-link">
                    <img src="/images/display.png" alt="">
                    <p>Display & Accsssibility</p>
                    <span>></span>
                </nuxt-link>
                <nuxt-link to="#" class="profile-menu-link">
                    <img src="/images/logout.png" alt="">
                    <p>Logout</p>
                    <span>></span>
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const activeLink = ref('index');

const showProfileMenu = ref(false);

const openProfileMenu = () => {
    showProfileMenu.value = !showProfileMenu.value
};

</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    padding: 6px 6%;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    .navbar-left {
        display: flex;
        align-items: center;

        .logo img {
            width: 30px;
            margin-right: 15px;
            display: block;
        }

        .search-box {
            background: #f0f2f5;
            width: 300px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            padding: 0 15px;

            @media (max-width: 600px) {
                background: transparent;
                width: auto;
                padding: 0;
            }

            img {
                width: 14px;
            }

            input {
                width: 100%;
                background: transparent;
                padding: 8px;
                outline: none;
                border: none;

                @media (max-width: 600px) {
                    width: 0;
                    padding: 0;
                }
            }
        }
    }

    .navbar-center {
        ul {
            li {
                display: inline-block;
                list-style: none;

                a {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    margin: 5px 8px;
                    padding-right: 5px;
                    position: relative;

                    @media (max-width: 600px) {
                        padding-right: 0;
                        margin: 5px;
                    }

                    &::after {
                        content: '';
                        width: 0;
                        height: 2px;
                        background: var(--blue);
                        position: absolute;
                        bottom: -15px;
                        transition: width .3s;
                    }

                    &.active-link::after,
                    &:hover::after {
                        width: 100%;

                        @media (min-width: 600px) {
                            margin-left: 3px;
                        }
                    }

                    img {
                        width: 30px;
                    }

                    span {
                        @media (max-width: 600px) {
                            display: none;
                        }
                    }
                    
                }
            }
        }
    }

    .navbar-right {
        .online {
            position: relative;

            &::after {
                content: '';
                width: 7px;
                height: 7px;
                border: 2px solid var(--white);
                border-radius: 50%;
                right: 0;
                top: 0;
                background: var(--green);
                position: absolute;
            }

            .nav-profile-img {
                width: 40px;
                border-radius: 50%;
                display: block;
                cursor: pointer;
                position: relative;

                @media (max-width: 600px) {
                    width: 30px;
                }
            }
        }
        
    }

    .profile-menu-wrap {
        position: absolute;
        top: 100%;
        right: 5%;
        width: 320px;
        max-height: 400px;
        overflow: hidden;
        transition: max-height 0.5s;

        .profile-menu {
            background: #222;
            color: var(--white);
            padding: 20px;
            margin: 10px;

            .user-info {
                display: flex;
                align-items: center;

                img {
                    width: 50px;
                    border-radius: 50%;
                    margin-right: 15px;
                }

                h3 {
                    font-weight: 500;
                    margin-bottom: -7px;
                }

                a {
                    color: #c9dbf8;
                    font-size: 13px;
                }
            }

            hr {
                border: 0;
                height: 1px;
                width: 100%;
                background: var(--white);
                margin: 15px 0 10px;
            }

            &-link {
                display: flex;
                align-items: center;
                color: var(--white);
                margin: 12px 0;
                font-size: 14px;

                img {
                    width: 35px;
                    border-radius: 50%;
                    margin-right: 15px;
                }

                p {
                    width: 100%;
                }
            }
        }
    }
}
</style>