<script setup>
import axiosInstance from '@/services/axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const posts = ref([]);

const getPosts = async () => {
    try {
        const response = await axiosInstance.get("/api/articles")
        posts.value = response.data;
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
getPosts()
</script>

<template>
    <ul v-for="post in posts">
        <RouterLink :to="'/post/' + post.id">
            <li>
                {{ post.title }} <br>
            </li>
        </RouterLink>
        {{ post.description }}
    </ul>
</template>