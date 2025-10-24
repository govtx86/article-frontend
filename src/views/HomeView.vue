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
    <div class="px-[50px]">
        <ul v-for="post in posts">
            <RouterLink :to="'/post/' + post.id" class="no-underline text-black">
                <li>
                    <h2>
                        {{ post.title }} <br>
                    </h2>
                </li>
                {{ post.description }}
            </RouterLink>
        </ul>
    </div>
</template>