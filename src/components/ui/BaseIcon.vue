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

.arrow {
  padding: 0 !important;
  margin-left: 8px;
  width: 12px;
}
.arrow path {
  fill: #fff;
}

.arrow-light path {
  fill: #fff;
}

.menu-icon img {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}
</style>
