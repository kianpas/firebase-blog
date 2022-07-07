<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :post="post"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BlogPost from "../components/blogs/BlogPost";
import BlogCard from "../components/blogs/BlogCard";

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

const sampleBlogCards = reactive([
  {
    blogTitle: "Blog Card #1",
    blogCoverPhoto: "stock-1",
    blogDate: "May 1, 2021",
  },
  {
    blogTitle: "Blog Card #2",
    blogCoverPhoto: "stock-2",
    blogDate: "May 1, 2021",
  },
  {
    blogTitle: "Blog Card #3",
    blogCoverPhoto: "stock-3",
    blogDate: "May 1, 2021",
  },
  {
    blogTitle: "Blog Card #4",
    blogCoverPhoto: "stock-4",
    blogDate: "May 1, 2021",
  },
]);
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}
</style>
