<template>
  <div :class="type">
    <img :src="require(`../../assets/Icons/${imgSrc}`)" />
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  imgSrc: String,
  type: String,
});
const imgSrc = ref(props.imgSrc);
const type = ref(props.type);
</script>

<style scoped>
.svg-icon {
  color: #fff;
}
</style>
