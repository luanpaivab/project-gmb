<template>
    <div class="card-fotos">
        <img :src="`http://localhost:3001/uploads/${img.filename}`" 
        alt="/"
        height="210"
        width="410"/>
    </div>
</template>

<script>
export default {
    name:"Card",
    props: {
        img: Object
    }
}
</script>

<style>
    .card-fotos{
        display:inline-flex;
        border: 1px solid #fff;
        justify-content: center;
    }
</style>