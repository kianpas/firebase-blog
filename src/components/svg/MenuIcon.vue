<template><div :class="classes" v-html="svg" /></template>

<script>
export default {
  data() {
    return {
      svg: "",
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  created() {
    this.svg = require("../../assets/Icons/bars-regular.svg");
  },
};
</script>

<style></style>
