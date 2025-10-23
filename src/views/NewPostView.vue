<script setup>
import MDEditorComponent from '@/components/post/EditorComponent.vue';
import axiosInstance from '@/services/axios';
import { ref } from 'vue';

const title = ref("");
const author = ref("");
const description = ref("");
const content = ref('<p>Hello World!</p>');
const errMsg = ref("");

const onSave = async () => {
    try {
        const response = await axiosInstance.post("/api/articles", {
            title: title.value,
            author: author.value,
            description: description.value,
            content: content.value,
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
            <input v-model="title" required class="w-[350px] rounded-[0px] p-[5px] outline-hidden" type="text"
                name="title" id="postTitle"> <br>
            <label for="author">Author: </label>
            <input v-model="author" required class="w-[250px] rounded-[0px] p-[5px] outline-hidden" type="text"
                name="author" id="postAuthor"><br>
            <label for="description">Description: </label>
            <textarea v-model="description" required class="w-[350px] rounded-[0px] p-[5px] outline-hidden"
                type="text" name="description" id="postDescription"/>
            <button class="float-right" type="submit">Save</button>
        </div>
        <div v-if="errMsg != ''"> {{ errMsg }}</div>
        <MDEditorComponent class="mx-[50px]" v-model:model-value="content"></MDEditorComponent>
    </form>
</template>