<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :post="post"
      :key="index"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BlogPost from "../components/blogs/BlogPost";

const welcomeScreen = reactive({
  title: "Welcome!",
  blogPost:
    "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
  welcomeScreen: true,
  photo: "coding",
});

const sampleBlogPost = reactive([
  {
    title: "This is a sample Title1",
    blogHtml: "This is a sample Blog post Title",
    blogCoverPhoto: "beautiful-stories",
  },
  {
    title: "This is a sample Title2",
    blogHtml: "This is a sample Blog post Title",
    blogCoverPhoto: "designed-for-everyone",
  },
]);
</script>
