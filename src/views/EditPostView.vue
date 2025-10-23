<script setup>
import MDEditorComponent from '@/components/post/EditorComponent.vue';
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

const errMsg = ref("");


const onSave = async () => {
    try {
        const response = await axiosInstance.put("/api/articles/" + props.id, {
            title: post.value.title,
            author: post.value.author,
            description: post.value.description,
            content: post.value.content,
        })
        errMsg.value = null;
    } catch (error) {
        errMsg.value = error.message;
        console.log(error);
    }
}

</script>

<template>
    <form @submit.prevent="onSave">

        <div class="m-[10px]">
            <label for="title">Title: </label>
            <input v-model="post.title" required class="w-[350px] rounded-[0px] p-[5px] outline-hidden" type="text"
                name="title" id="postTitle"> <br>
            <label for="author">Author: </label>
            <input v-model="post.author" required class="w-[250px] rounded-[0px] p-[5px] outline-hidden" type="text"
                name="author" id="postAuthor"><br>
            <label for="description">Description: </label>
            <textarea v-model="post.description" required class="w-[350px] rounded-[0px] p-[5px] outline-hidden"
                type="text" name="description" id="postDescription"/>
            <button class="float-right" type="submit">Save</button>
        </div>
        <div v-if="errMsg != ''"> {{ errMsg }}</div>
        <MDEditorComponent class="mx-[50px]" v-model:model-value="post.content"></MDEditorComponent>
    </form>
</template>