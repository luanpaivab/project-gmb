<template>
    <div class="page-title">
        <h1><i v-if="icon" :class="icon"></i>{{ text }}{{ main }}</h1>
        <h2>{{ sub }}</h2>
    <div>

    </div>
    </div>
</template>

<script>
export default {
    name: "PageTitle",
    props: ['icon', 'main', 'sub','text']    
}
</script>

<style>
.page-title h1 {
    margin: 0px;
    font-size: 1.8rem;
    color: #000;
}

.page-title h2{
    color: #777;
    margin-top: 5px;
    font-size: 1.3rem;
}
</style>

