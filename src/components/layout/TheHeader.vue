<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" to="/">Firebase Blog</router-link>
      </div>
      <div class="nav-links" v-show="!mobile">
        <ul>
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blog</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <BaseIcon
      class="menu-icon"
      v-show="mobile"
      @click="toggleMobileNav"
      imgSrc="bars-regular.svg"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blog</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(null);

window.addEventListener("resize", checkScreen);

function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
  return;
}

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value;
}
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

header .link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;
}

header .link:hover {
  color: #1eb9b8;
}
.link-light {
  color: #fff;
}

nav {
  display: flex;
  padding: 25px 0;
}
nav .branding {
  display: flex;
  align-items: center;
}

nav .branding .header {
  font-weight: 600;
  font-size: 24px;
  color: #000;
  text-decoration: none;
}

nav .nav-links {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}

nav .nav-links ul {
  margin-right: 32px;
}

nav .nav-links ul .link {
  margin-right: 32px;
}

nav .nav-links ul .link:last-child {
  margin-right: 0;
}

.menu-icon img {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}

.mobile-nav .link {
  padding: 15px 0;
  color: #fff;
}

.mobile-nav-enter-from {
  transform: translateX(-250px);
}

.mobile-nav-enter-active {
  transition: all 0.5s ease-out;
}
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
