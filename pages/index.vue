<template>
    <div class="container">
        <!-- left sidebar -->   
        <div class="left-sidebar">
            <div class="sidebar-profile-box">
                <img src="/images/cover-pic.png" alt="profile-cover-pic" width="100%">
                <div class="siderbar-profile-info">
                    <img src="/images/user-1.png" alt="">
                    <h1>Larry Holmer</h1>
                    <h3>Senior Developer at Netflix</h3>
                    <ul>
                        <li>Your profile views <span>65</span></li>
                        <li>Your post views <span>1534</span></li>
                        <li>Your connections <span>217</span></li>
                    </ul>
                </div>
                <div class="sidebar-profile-link">
                    <a href="#"><img src="/images/items.png" alt="">My items</a>
                    <a href="#"><img src="/images/premium.png" alt="">Try Premium</a>
                </div>
            </div>
            <div class="sidebar-activity" v-show="showSidebarActivity">
                <h3>RECENT</h3>
                <a href="#"><img src="/images/recent.png" alt=""> Web Development</a>
                <a href="#"><img src="/images/recent.png" alt=""> User Interface</a>
                <a href="#"><img src="/images/recent.png" alt=""> Online Learning</a>
                <a href="#"><img src="/images/recent.png" alt=""> Learn Online</a>
                <a href="#"><img src="/images/recent.png" alt=""> Code Better</a>
                <a href="#"><img src="/images/recent.png" alt=""> Group Learning</a>

                <h3>GROUPS</h3>
                <a href="#"><img src="/images/group.png" alt=""> Web Design Group</a>
                <a href="#"><img src="/images/group.png" alt=""> Learn Coding Online</a>
                <a href="#"><img src="/images/group.png" alt=""> Blockchain Devs</a>
                <a href="#"><img src="/images/group.png" alt=""> Machine Learning & AI</a>

                <h3>HASHTAG</h3>
                <a href="#"><img src="/images/hashtag.png" alt=""> webdevelopment</a>
                <a href="#"><img src="/images/hashtag.png" alt=""> blockchain</a>
                <a href="#"><img src="/images/hashtag.png" alt=""> learnpython</a>

                <div class="discover-more-link">
                    <a href="#">Discover more</a>
                </div>
            </div>

            <p class="toggleActivityLink" @click="toggleActivity()">{{ toggleActivityText }} <b>+</b></p>
        </div>
        <!-- main content -->        
        <div class="main-content">

            <div class="create-post">
                <div class="create-post-input">
                    <img src="/images/user-1.png" alt="">
                    <textarea rows="2" placeholder="Write a post"></textarea>
                </div>
                <div class="create-post-links">
                    <li><img src="/images/photo.png" alt="">Photo</li>
                    <li><img src="/images/video.png" alt="">Video</li>
                    <li><img src="/images/event.png" alt="">Event</li>
                    <li>Post</li>
                </div>
            </div>

            <div class="sort-by">
                <hr>
                <p>Sort by: <span>top <img src="/images/down-arrow.png" alt=""></span></p>
            </div>

            <div class="post">
                <div class="post-author">
                    <img src="/images/user-3.png" alt="">
                    <div>
                        <h1>Susan Smith</h1>
                        <small>Founder and CEO at Gellelio | Angel Investor</small>
                        <small>2 hours ago</small>
                    </div>
                </div>
                <p>
                    The success of every website depends on search engine optimisation and digital marketing strategy. 
                    If you are on the first page of all major search engines then you are ahead among your competitors.
                </p>
                <img src="/images/post-image-1.png" alt="" width="100%">

                <div class="post-stats">
                    <div>
                        <img src="/images/thumbsup.png" alt="">
                        <img src="/images/love.png" alt="">
                        <img src="/images/clap.png" alt="">
                        <span class="liked-users">Abhinav Mishra and 75 others</span>
                    </div>
                    <div>
                        <span>22 comments &middot; 40 shares</span>
                    </div>
                </div>

                <div class="post-activity">
                    <div>
                        <img src="/images/user-1.png" alt="" class="post-activity-user-icon">
                        <img src="/images/down-arrow.png" alt="" class="post-activity-arrow-icon">
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/like.png" alt="">
                        <span>Like</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/comment.png" alt="">
                        <span>Comment</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/share.png" alt="">
                        <span>Share</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/send.png" alt="">
                        <span>Send</span>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-author">
                    <img src="/images/user-4.png" alt="">
                    <div>
                        <h1>Anna Moore</h1>
                        <small>Founder and CEO at Gellelio | Angel Investor</small>
                        <small>2 hours ago</small>
                    </div>
                </div>
                <p>
                    The success of every website depends on search engine optimisation and digital marketing strategy. 
                    If you are on the first page of all major search engines then you are ahead among your competitors.
                </p>
                <img src="/images/post-image-2.png" alt="" width="100%">

                <div class="post-stats">
                    <div>
                        <img src="/images/thumbsup.png" alt="">
                        <img src="/images/love.png" alt="">
                        <img src="/images/clap.png" alt="">
                        <span class="liked-users">Abhinav Mishra and 75 others</span>
                    </div>
                    <div>
                        <span>22 comments &middot; 40 shares</span>
                    </div>
                </div>

                <div class="post-activity">
                    <div>
                        <img src="/images/user-1.png" alt="" class="post-activity-user-icon">
                        <img src="/images/down-arrow.png" alt="" class="post-activity-arrow-icon">
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/like.png" alt="">
                        <span>Like</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/comment.png" alt="">
                        <span>Comment</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/share.png" alt="">
                        <span>Share</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/send.png" alt="">
                        <span>Send</span>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-author">
                    <img src="/images/user-5.png" alt="">
                    <div>
                        <h1>Lilian Tielemans</h1>
                        <small>Founder and CEO at Gellelio | Angel Investor</small>
                        <small>2 hours ago</small>
                    </div>
                </div>
                <p>
                    The success of every website depends on search engine optimisation and digital marketing strategy. 
                    If you are on the first page of all major search engines then you are ahead among your competitors.
                </p>
                <img src="/images/post-image-3.png" alt="" width="100%">

                <div class="post-stats">
                    <div>
                        <img src="/images/thumbsup.png" alt="">
                        <img src="/images/love.png" alt="">
                        <img src="/images/clap.png" alt="">
                        <span class="liked-users">Abhinav Mishra and 75 others</span>
                    </div>
                    <div>
                        <span>22 comments &middot; 40 shares</span>
                    </div>
                </div>

                <div class="post-activity">
                    <div>
                        <img src="/images/user-1.png" alt="" class="post-activity-user-icon">
                        <img src="/images/down-arrow.png" alt="" class="post-activity-arrow-icon">
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/like.png" alt="">
                        <span>Like</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/comment.png" alt="">
                        <span>Comment</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/share.png" alt="">
                        <span>Share</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/send.png" alt="">
                        <span>Send</span>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-author">
                    <img src="/images/user-2.png" alt="">
                    <div>
                        <h1>Pierce Moore</h1>
                        <small>Founder and CEO at Gellelio | Angel Investor</small>
                        <small>2 hours ago</small>
                    </div>
                </div>
                <p>
                    The success of every website depends on search engine optimisation and digital marketing strategy. 
                    If you are on the first page of all major search engines then you are ahead among your competitors.
                </p>
                <img src="/images/post-image-4.png" alt="" width="100%">

                <div class="post-stats">
                    <div>
                        <img src="/images/thumbsup.png" alt="">
                        <img src="/images/love.png" alt="">
                        <img src="/images/clap.png" alt="">
                        <span class="liked-users">Abhinav Mishra and 75 others</span>
                    </div>
                    <div>
                        <span>22 comments &middot; 40 shares</span>
                    </div>
                </div>

                <div class="post-activity">
                    <div>
                        <img src="/images/user-1.png" alt="" class="post-activity-user-icon">
                        <img src="/images/down-arrow.png" alt="" class="post-activity-arrow-icon">
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/like.png" alt="">
                        <span>Like</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/comment.png" alt="">
                        <span>Comment</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/share.png" alt="">
                        <span>Share</span>
                    </div>
                    <div class="post-activity-link">
                        <img src="/images/send.png" alt="">
                        <span>Send</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- right sidebar -->
        <div class="right-sidebar">
            <div class="sidebar-news">
                <img src="/images/more.png" alt="" class="info-icon">

                <h3>Trending News</h3>

                <a href="#">High demand for skilled manpower</a>
                <span>1d ago &middot; 10,934 readers</span>

                <a href="#">Careers growing horizontally too</a>
                <span>19h ago &middot; 1,552 readers</span>

                <a href="#">Less work visa for US, more for UK</a>
                <span>1d ago &middot; 27,290 readers</span>

                <a href="#">More hiring = higher confidence?</a>
                <span>18h ago &middot; 8,208 readers</span>

                <a href="#">Gautam Adani is the world's third richest</a>
                <span>12h ago &middot; 4,205 readers</span>

                <a href="#" class="read-more-link">Read More</a>
            </div>

            <div class="sidebar-ad">
                <small>Ad &middot; &middot; &middot; </small>
                <p>Master the 5 principles of web design</p>
                <div>
                    <img src="/images/user-1.png" alt="">
                    <img src="/images/mi-logo.png" alt="">
                </div>
                <b>Brand and Demand in Xiaomi</b>
                <a href="#" class="ad-link">Learn More</a>
            </div>

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
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from "vue";

    const showSidebarActivity = ref(true);

    const toggleActivityText = ref("Show more");

    const toggleActivity = () => {
        showSidebarActivity.value = !showSidebarActivity.value;
        toggleActivityText.value = (toggleActivityText.value == "Show more") ? "Show less" : "Show more";
    };

    const screenWidth = computed(() => window.innerWidth);

    onMounted(() => {
        if (screenWidth.value <= 600) {
            showSidebarActivity.value = false;
        }
    });
</script>

<style lang="scss" scoped>
/*------------ left sidebar ------------*/
.left-sidebar {
    flex-basis: 25%;
    align-self: flex-start;
    position: sticky;
    top: 73px;

    .sidebar-profile-box {
        background: var(--white);

        .siderbar-profile-info {
            padding: 0 25px;

            img {
                width: 90px;
                border-radius: 50%;
                background: var(--white);
                padding: 4px;
                margin-top: -45px;
            }

            h1 {
                font-size: 20px;
                font-weight: 600;
                color: #222;
            }

            h3 {
                font-size: 14px;
                font-weight: 500;
                color: var(--gray);
            }

            ul {
                list-style: none;
                margin: 20px 0;

                li {
                    width: 100%;
                    margin: 5px 0;
                    font-size: 13px;

                    span {
                        float: right;
                        color: var(--blue);
                    }
                }
            }
        }

        .sidebar-profile-link {
            display: flex;
            align-items: center;
            border-top: 1px solid #CCC;

            a {
                flex-basis: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px 0;
                font-size: 13px;
                border-left: 1px solid #CCC;

                &:first-child {
                    border-left: 0;
                }

                img {
                    width: 20px;
                    margin-right: 10px;
                }
            }
        }
    }

    .sidebar-activity {
        background: var(--white);
        padding: 5px 25px;
        margin: 12px 0;

        @media(max-width: 600px) {
            &.open-activity {
                display: block;
            }
        }

        h3 {
            color: var(--gray);
            font-size: 14px;
            font-weight: 500;
            margin: 20px 0 10px;
        }

        a {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 500;
            color: #888;
            margin: 3px 0;

            img {
                width: 20px;
                margin-right: 10px;
            }
        }

        .discover-more-link {
            border-top: 1px solid #CCC;
            text-align: center;
            margin-top: 20px;
            margin-left: -25px;
            margin-right: -25px;

            a {
                color: var(--blue);
                display: inline-block;
                margin: 10px 0;
            }
        }
    }

    .toggleActivityLink {
        display: none;

        @media(max-width: 600px) {
            display: block;
            width: fit-content;
            margin: 10px auto;
            font-size: 14px;
            cursor: pointer;
        }
    }
}

/*------------ main content ------------*/
.main-content {
    flex-basis: 47%;

    @media (max-width: 600px) {
        flex-basis: 100%;
    }

    .create-post {
        background: var(--white);

        &-input {
            padding: 20px 25px 10px;
            display: flex;
            align-items: flex-start;

            @media (max-width: 600px) {
                textarea {
                    height: 6em;
                }
            }

            img {
                width: 35px;
                border-radius: 50%;
                margin-right: 10px;
            }

            textarea {
                width: 100%;
                border: 0;
                outline: 0; 
                resize: none;
                background: transparent;
                margin-top: 8px;
            }
        }

        &-links {
            display: flex;
            align-items: flex-start;

            li {
                list-style: none;
                border-top: 1px solid #CCC;
                border-right: 1px solid #CCC;
                flex-basis: 25%;
                height: 40px;
                font-size: 13px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &:last-child {
                    background: var(--blue);
                    color: var(--white);
                    border-top: 0;
                    border-right: 0;
                }

                img {
                    width: 15px;
                    margin-right: 5px;
                }
            }
        }
    }

    .sort-by {
        display: flex;
        align-items: center;
        margin: 10px 0;

        hr {
            flex: 1;
            border: 0;
            height: 1px;
            background: #CCC;
        }

        p {
            font-size: 13px;
            padding-left: 5px;

            span {
                font-weight: 600;
                cursor: pointer;

                img {
                    width: 12px;
                    margin-left: 3px;
                }
            }
        }
    }

    .post {
        background: var(--white);
        padding: 20px 25px 5px;
        margin: 5px 0 15px;

        &-author {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            img {
                width: 35px;
                border-radius: 50%;
                margin-right: 10px;
                margin-top: 5px;
            }

            h1 {
                font-size: 18px;
                font-weight: 600;
                color: #333;
            }

            small {
                display: block;
                margin-bottom: -2px;
            }
        }

        p {
            font-size: 14px;
            margin-bottom: 15px;
        }

        .post-stats {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            border-bottom: 1px solid #CCC;
            padding-bottom: 6px;

            div {
                display: flex;
                align-items: center;
                padding-top: 7px;

                @media (max-width: 600px) {
                    margin: 2px 0;
                }

                img {
                    width: 15px;
                    margin-right: -5px;
                }

                .liked-users {
                    margin-left: 10px;
                }
            }
        }

        .post-activity {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            font-size: 14px;
            font-weight: 500;

            div {
                display: flex;
                align-items: center;
            }

            &-user-icon {
                width: 22px;
                border-radius: 50%;
            }

            &-arrow-icon {
                width: 12px;
                margin-left: 5px;
            }

            &-link {
                img {
                    width: 18px;
                    margin-right: 8px;

                    @media (max-width: 600px) {
                        margin-right: 0;
                    }
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

/*------------ right sidebar ------------*/
.right-sidebar {
    flex-basis: 25%;
    align-self: flex-start;
    position: sticky;
    top: 73px;

    .sidebar-news {
        background: var(--white);
        padding: 10px 25px;

        .info-icon {
            width: 15px;
            float: right;
            margin-top: 17px;
        }

        h3 {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin: 10px 0 30px;
        }

        a {
            display: block;
            font-size: 12px;
            font-weight: 600;
            margin-top: 10px;
            margin-bottom: -5px;
        }

        span {
            font-size: 12px;
        }

        .read-more-link {
            color: var(--blue);
            font-weight: 500;
            margin: 20px 0 10px;
        }
    }

    .sidebar-ad {
        margin: 12px 0;
    }

    .sidebar-useful-links {
        padding: 15px 25px;
        text-align: center;

        a {
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
        }

        .copyright-msg {
            display: flex;
            align-items: center;
            justify-content: center;
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

.left-sidebar,
.right-sidebar {
    @media (max-width: 600px) {
        flex-basis: 100%;
        position: relative;
        top: unset;
    }
}
</style>