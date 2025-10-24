<script setup>
import PostViewComponent from '@/components/post/PostViewComponent.vue';
import axiosInstance from '@/services/axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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

const posteditpath = "/post/edit/" + props.id
const onDelete = async () => {
    try {
        const response = await axiosInstance.delete("/api/articles/" + props.id)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="px-[50px]">
        <h1>{{ post.title }}</h1>
        <div class="float-right flex gap-3 border-0">
    
        <RouterLink :to="posteditpath">
            <button @click="onEdit" type="button">Edit</button>
        </RouterLink>
            <button type="button">Delete</button>
        </div>
    <h3>
        Author: {{ post.author }}
    </h3>
    <PostViewComponent :content="post.content"></PostViewComponent>
</div>
</template>