<template>
  <div class="app-wrapper">
    <div class="app">
      <TheHeader />
      <router-view></router-view>
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
}

.blog-cards {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}

@media (min-width: 500px) {
  .blog-card-wrap {
    padding: 100px 16px;
  }

  .blog-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .blog-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .blog-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
