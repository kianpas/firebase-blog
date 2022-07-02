<template>
  <div class="menu-icon">
    <img
      alt="Vue logo"
      :src="require(`../../assets/Icons/${imgSrc}`)"
      @click="toggleMobileNav"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  imgSrc: String,
});
const imgSrc = ref(props.imgSrc);
</script>
