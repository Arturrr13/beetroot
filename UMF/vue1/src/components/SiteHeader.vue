<template>
    <section class="site__header">
        <div class="overlay__blur" @click="displayBlock" :style="{ display: blurDisplay, height: blurHeight }"></div>
        <div class="header__top" :style="{ display: display }"></div>
        <header class="header" :class="{ scroll: scroll }" :style="{ justifyContent: headreJusContent }">
            <div class="navigation" :style="{ display: navDisplay }">
                <div class="logo">
                    <router-link to="/" title="UMF" rel="nofollow" style="height: 100%; position: absolute;">
                        <img src="../assets/image/UMF-Logos.png" alt="">
                    </router-link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <router-link id="home" rel="nofollow" to="/" data-content="HOME">HOME</router-link>
                        </li>
                        <li>
                            <router-link id="about" rel="nofollow" to="/about" data-content="ABOUT US">ABOUT US</router-link>
                        </li>
                        <li>
                            <router-link id="crypto" rel="nofollow" to="/crypto" data-content="CRYPTO">CRYPTO</router-link>
                        </li>
                        <li class="community">
                            <a rel="nofollow" class="arrow" data-content="COMMUNITY" href="Href">COMMUNITY</a>
                            <div class="sub__menu">
                                <ul>
                                    <li>Content</li>
                                    <li> 
                                        <a title="Youtube" href="https://www.youtube.com/" target="_blank">Youtube</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="Href">Medium</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="Href">Blogs</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>Social</li>
                                    <li>
                                        <a title="Twitter" href="https://www.twitter.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-twitter"></span>
                                            </div>
                                            <span>Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Telegram" href="https://www.telegram.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-telegram" style="font-size: 20px;"></span>
                                            </div>
                                            <span>Telegram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Instagrame" href="https://www.instagrame.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-instagram" style="font-size: 18px;"></span>
                                            </div>
                                            <span>Instagrame</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Linkedin" href="https://www.linkedin.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-linkedin"></span>
                                            </div>
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <router-link id="faq" rel="nofollow" to="/FAQ" data-content="FAQ">FAQ</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="btn__wrapper">
                    <router-link title="Go to presale" rel="nofollow" to="/presale" class="button btn__style click">
                        Presale
                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.8839 10.8839C31.372 10.3957 31.372 9.60427 30.8839 9.11612L22.9289 1.16117C22.4408 0.67301 21.6493 0.67301 21.1612 1.16117C20.673 1.64932 20.673 2.44078 21.1612 2.92893L28.2322 10L21.1612 17.0711C20.673 17.5592 20.673 18.3507 21.1612 18.8388C21.6493 19.327 22.4408 19.327 22.9289 18.8388L30.8839 10.8839ZM0 11.25H30V8.75H0V11.25Z" fill="#63AF8F"/>
                        </svg>
                    </router-link>
                    <router-link title="Login" rel="nofollow" to="/login" v-if="!getStatus">
                        <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1633 4.09295L15.0612 2.17072C14.1429 1.86721 13.2245 1.96838 12.5102 2.47423C12.2041 2.67657 12 2.87891 11.7959 3.08125H7.91837C6.38776 3.08125 5.06122 4.39646 5.06122 5.91401V6.9257C5.06122 7.33038 5.36735 7.73506 5.87755 7.73506C6.38776 7.73506 6.69388 7.33038 6.69388 6.9257V5.91401C6.69388 5.20582 7.30612 4.69997 7.91837 4.69997H11.2857V19.3696H7.91837C7.20408 19.3696 6.69388 18.7626 6.69388 18.1555V17.1439C6.69388 16.7392 6.38776 16.3345 5.87755 16.3345C5.36735 16.3345 5.06122 16.638 5.06122 17.0427V18.0544C5.06122 19.5719 6.28572 20.8871 7.91837 20.8871H11.7959C12 21.0895 12.2041 21.393 12.4082 21.4942C12.9184 21.7977 13.4286 22 14.0408 22C14.3469 22 14.7551 21.8988 15.0612 21.7977L20.1633 19.8754C21.2857 19.4708 22 18.4591 22 17.245V6.62219C22 5.50933 21.1837 4.39646 20.1633 4.09295Z" fill="#63AF8F"/>
                            <path d="M6.38776 13.5017C6.08163 13.8052 6.08163 14.3111 6.38776 14.6146C6.4898 14.7158 6.69388 14.8169 6.89796 14.8169C7.10204 14.8169 7.30612 14.7158 7.40816 14.6146L9.44898 12.5912C9.55102 12.49 9.55102 12.3889 9.65306 12.3889C9.65306 12.2877 9.7551 12.1865 9.7551 12.0854C9.7551 11.9842 9.7551 11.883 9.65306 11.7819C9.65306 11.6807 9.55102 11.5795 9.44898 11.5795L7.40816 9.55612C7.10204 9.25261 6.59184 9.25261 6.28571 9.55612C5.97959 9.85963 5.97959 10.3655 6.28571 10.669L7 11.3772H2.81633C2.40816 11.3772 2 11.6807 2 12.1865C2 12.6924 2.30612 12.9959 2.81633 12.9959H7.10204L6.38776 13.5017Z" fill="#63AF8F"/>
                        </svg>
                    </router-link>
                    <router-link title="Logout" rel="nofollow" to="/" 
                        v-if="getStatus"
                        @click="logout"
                    >
                        <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 6.62219V17.245C22 18.3579 21.2857 19.4708 20.1633 19.8754L15.0612 21.7977C14.7551 21.8988 14.449 22 14.0408 22C13.5306 22 12.9184 21.7977 12.4082 21.4942C12.2041 21.2918 11.898 21.0895 11.7959 20.8871H7.91837C6.38776 20.8871 5.06122 19.6731 5.06122 18.0544V17.0427C5.06122 16.638 5.36735 16.2333 5.87755 16.2333C6.38776 16.2333 6.69388 16.5368 6.69388 17.0427V18.0544C6.69388 18.7626 7.30612 19.2684 7.91837 19.2684H11.2857V4.69997H7.91837C7.20408 4.69997 6.69388 5.20582 6.69388 5.91401V6.9257C6.69388 7.33038 6.38776 7.73506 5.87755 7.73506C5.36735 7.73506 5.06122 7.33038 5.06122 6.9257V5.91401C5.06122 4.39646 6.28572 3.08125 7.91837 3.08125H11.7959C12 2.87891 12.2041 2.67657 12.4082 2.47423C13.2245 1.96838 14.1429 1.86721 15.0612 2.17072L20.1633 4.09295C21.1837 4.39646 22 5.50933 22 6.62219Z" fill="#63AF8F"/>
                            <path d="M4.85714 14.8169C4.65306 14.8169 4.44898 14.7158 4.34694 14.6146L2.30612 12.5912C2.20408 12.49 2.20408 12.3889 2.10204 12.3889C2.10204 12.2877 2 12.1865 2 12.0854C2 11.9842 2 11.883 2.10204 11.7819C2.10204 11.6807 2.20408 11.5795 2.30612 11.5795L4.34694 9.55612C4.65306 9.25261 5.16327 9.25261 5.46939 9.55612C5.77551 9.85963 5.77551 10.3655 5.46939 10.669L4.7551 11.3772H8.93878C9.34694 11.3772 9.7551 11.6807 9.7551 12.1865C9.7551 12.6924 9.34694 12.7936 8.93878 12.7936H4.65306L5.36735 13.5017C5.67347 13.8052 5.67347 14.3111 5.36735 14.6146C5.26531 14.7158 5.06122 14.8169 4.85714 14.8169Z" fill="#63AF8F"/>
                        </svg>
                    </router-link>
                </div>
            </div>
                <div class="burger__nav" :class="{ active: active }">
                    <div class="menuToggle" @click="toggleActive"></div>
                    <div class="menu">
                        <nav>
                            <ul>
                                <li style="--i:6;">
                                    <router-link rel="nofollow" to="/" @click="displayBlock">HOME</router-link>
                                </li>
                                <li style="--i:5;">
                                    <router-link rel="nofollow" to="/about" @click="displayBlock">ABOUT US</router-link>
                                </li>
                                <li style="--i:4;">
                                    <router-link rel="nofollow" to="/crypto" @click="displayBlock">CRYPTO</router-link>
                                </li>
                                <li style="--i:3;" class="community">
                                    <a rel="nofollow" class="arrow" href="Href">COMMUNITY</a>
                                    <div class="sub__menu2">
                                        <ul>
                                            <li style="--i:7;"> 
                                                <a title="Youtube" href="https://www.youtube.com/" target="_blank">Youtube</a>
                                            </li>
                                            <li style="--i:6;">
                                                <a target="_blank" href="Href">Medium</a>
                                            </li>
                                            <li style="--i:5;">
                                                <a target="_blank" href="Href">Blogs</a>
                                            </li>
                                            <li style="--i:4;">
                                                <a title="Twitter" href="https://www.twitter.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-twitter"></span>
                                                    </div>
                                                    <span>Twitter</span>
                                                </a>
                                            </li>
                                            <li style="--i:3;">
                                                <a title="Telegram" href="https://www.telegram.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-telegram" style="font-size: 20px;"></span>
                                                    </div>
                                                    <span>Telegram</span>
                                                </a>
                                            </li>
                                            <li style="--i:2;">
                                                <a title="Instagrame" href="https://www.instagrame.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-instagram" style="font-size: 18px;"></span>
                                                    </div>
                                                    <span>Instagrame</span>
                                                </a>
                                            </li>
                                            <li style="--i:1;">
                                                <a title="Linkedin" href="https://www.linkedin.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-linkedin"></span>
                                                    </div>
                                                    <span>Linkedin</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li style="--i:2;">
                                    <router-link rel="nofollow" to="/FAQ" @click="displayBlock">FAQ</router-link>
                                </li>
                                <li style="--i:1;">
                                    <router-link title="Go to presale" rel="nofollow" to="/presale" @click="displayBlock">
                                        Presale
                                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.8839 10.8839C31.372 10.3957 31.372 9.60427 30.8839 9.11612L22.9289 1.16117C22.4408 0.67301 21.6493 0.67301 21.1612 1.16117C20.673 1.64932 20.673 2.44078 21.1612 2.92893L28.2322 10L21.1612 17.0711C20.673 17.5592 20.673 18.3507 21.1612 18.8388C21.6493 19.327 22.4408 19.327 22.9289 18.8388L30.8839 10.8839ZM0 11.25H30V8.75H0V11.25Z" fill="#63AF8F"/>
                                        </svg>
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'SiteHeader',
    data(){
        return{
            scroll: false,
            display: 'none',
            navDisplay: 'flex',
            headreJusContent: 'space-between',
            blurDisplay: 'none',
            blurHeight: '',
            active: false
        }
    },
    computed: {
        ...mapGetters('UserModules', ['getStatus'])
    },
    created () {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', () => {
            if(this.active === true){
                this.active = false
                this.closeBurger()
            }
        })
    },
    methods: {
        ...mapMutations('UserModules', ['setStatus']),
        closeBurger(){
            this.navDisplay = 'flex'
            this.headreJusContent = 'space-between'
            this.scroll = true 
            document.body.style.overflow = ''
            this.blurDisplay = 'none'
        },
        toggleActive(){
            this.active = this.active === false ? true : false 
            if(this.active === true){
                this.navDisplay = 'none'
                this.headreJusContent = 'flex-end'
                this.scroll = false 
                document.body.style.overflow = 'hidden'
                document.querySelector('section').style.width = '100vw'
                this.blurDisplay = 'block'
                this.blurHeight = `${document.querySelector('#app').clientHeight}px`
            } else {
                this.closeBurger()
            }
        },
        displayBlock(){
            this.active = this.active === false ? true : false 
            this.closeBurger()
        },
        handleScroll(){
            window.scrollY > 64 ? this.display = 'block' : this.display = 'none'
            window.scrollY > 64 ? this.scroll = true : this.scroll = false
        },
        logout(){
            this.setStatus(false)
            this.$cookies.remove('UserToken')
        }
    },
}
</script>

<style scoped lang="scss">
    section .overlay__blur{
        animation: overlayBlur 1.5s linear both;
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100%;
        background: #0e0421d4;
        z-index: 10;
        display: none;
        backdrop-filter: blur(4px);
    }
    .header__top{
        display: none;
        content: '';
        width: 100%;
        height: 165px;
    }

    section{
        display: flex;
        flex-direction: column;
    }
    .btn__wrapper{
        display: flex;
        align-items: center;
        gap: 30px;
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 90px;
        margin-top: 64px;
        position: relative;
        z-index: 1000;
        .logo{
            width: 78px;
            height: 90px;
            a img{
                width: 78px;
                height: 90px;
            }
        }
        .navigation{
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }
        nav ul{
            display: flex;
            flex-direction: row;
            li a{
                position: relative;
                display: inline-block;
                overflow: hidden;
                padding: 20px 18px;
                font-weight: 800;
                font-size: 18px;
                line-height: 25px;
                letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.8);
                transition: .5s;
                &::before {
                    position: absolute;
                    content: attr(data-content);
                    top: 20px;
                    left: 18px;
                    width: 0;
                    color: #63AF8F;
                    text-decoration: none;
                    white-space: nowrap;
                    overflow: hidden;
                    transition: width .5s ease;
                }
                &:hover::before {
                    width: 100%;
                    text-decoration: underline;
                    cursor: pointer;
                }
                &.active{
                    background: #63AF8F;
                    border-radius: 15px;
                    color: #000000;
                    border-bottom: none;
                    &::before{
                        color: #5F3791;
                    }
                }
            }
        }
        .button{
            width: 192px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                margin-left: 21px;
            }
        }
    }
    .header{
        &.scroll{
            background: linear-gradient(25deg, rgba(99,175,143,.6) 14%, rgba(112,101,169,.6) 34%, rgba(95,55,145,.6) 53%, rgba(0,0,0,.6) 82%);
            box-shadow: 1px 2px 10px #63AF8F;
            backdrop-filter: blur(5px);
            margin-top: 0;
            position: fixed;
            width: 100%;
            z-index: 1000;
            top: 0;
            left: 0;
        }
    }
    .community{
        position: relative;
        z-index: 5;
        .arrow{
            padding-right: 30px;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                padding: 0;
                right: 10px;
                top: 20px;
                transform: rotate(-45deg);
                border-bottom: 3px solid #FFFFFF;
                border-left: 3px solid #FFFFFF;
                width: 13px;
                height: 13px;
            }
            &:hover{
                cursor: pointer;
                &::after{
                    border-bottom: 2px solid #63AF8F;
                    border-left: 2px solid #63AF8F;
                }
            }
        }
        &:hover .sub__menu{
            animation: subMenu .5s linear both;
            display: flex;
            justify-content: space-between;
            padding: 16px;
            ul{
                animation: subMenuUl .5s linear .7s both;
            }
        }
        .sub__menu{
            position: absolute;
            top: 60px;
            display: none;
            box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            ul li:nth-child(1){
                font-size: 20px;
                line-height: 22px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #FFFFFF;
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #63AF8F;
            }
            ul{
                display: flex;
                flex-direction: column;
                gap: 10px;
                li:hover{
                    a, a span, a span::before{
                        color: #63AF8F;
                        transform: scale(1.1);
                        transition: .5s ease;
                    }
                    .social{
                        background: #000000;
                        box-shadow: 0 0 10px #63AF8F;
                        transition: .5s ease;
                    }
                }
            }
            ul li a{
                padding: 0 0 5px 0;
                display: flex;
                align-items: center;
                gap: 10px;
                border-bottom: none;
                .social{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #555457;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    @keyframes subMenu {
      0% {width: 150px; height: 0px; background: linear-gradient(25deg, rgba(99,175,143,.6) 34%, rgba(112,101,169,.8) 64%);}
      50% {width: 150px; height: 290px; background: linear-gradient(25deg, rgba(99,175,143,.6) 14%, rgba(112,101,169,.8) 34%, rgba(95,55,145,.9) 83%, rgba(0,0,0,1) 100%);}
      100% {width: 310px; height: 290px; background: linear-gradient(25deg, rgba(99,175,143,.6) 14%, rgba(112,101,169,.8) 34%, rgba(95,55,145,.9) 83%, rgba(0,0,0,1) 100%);}
    }

    @keyframes subMenuUl {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }

    @keyframes overlayBlur {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
</style>