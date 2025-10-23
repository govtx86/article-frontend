<script setup lang="ts">
import axiosInstance from '@/services/axios';

const onDeleteAll = async () => {
    try {
        const response = await axiosInstance.delete("/api/articles")
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <h1>Admin</h1>
    <div>
        <button type="button" @click="onDeleteAll">Clear all posts</button>
    </div>
</template>