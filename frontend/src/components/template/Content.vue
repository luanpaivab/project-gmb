<template>
    <div class="content-master">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style>
    .content-master {
        grid-area: content;
        background-color: #efefef;
    }
</style>