<script setup>
import PostViewComponent from '@/components/post/PostViewComponent.vue';
import axiosInstance from '@/services/axios';
import { ref } from 'vue';

const props = defineProps(['id']);

const post = ref({});

const getPost = async () => {
    try {
        const response = await axiosInstance.get("/api/articles/" + props.id)
        post.value = response.data;
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
getPost()
</script>

<template>
<div>
    <h1>{{ post.title }}</h1>
    <div>
        Author: {{ post.author }}
    </div>
</div>
    <PostViewComponent :content="post.content"></PostViewComponent>
</template>