<template>
  <div>
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
// const type = ref(props.type);
console.log(imgSrc);
</script>

<style scoped>
.svg-icon {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
}
.arrow path {
  fill: #fff;
}

.arrow-light path {
  fill: #fff;
}
</style>
