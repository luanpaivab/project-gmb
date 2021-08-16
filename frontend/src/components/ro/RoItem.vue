<template>
    <div class="ro-item">
        <router-link :to="{ name: 'roById', params: {id: data.item.id } }">
            <div class="ro-item-info">
                <h2>{{ rockdoido.id }}</h2>
                <p>{{ rockdoido.solicit }}</p>
                <span class="ro-item-author">
                    <strong>Responsável: </strong> {{ rockdoido.author }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'RoItem',
    props: ['rockdoido'],
}
</script>

<style>
    .ro-item {
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: rgba(194, 188, 188, 0.529);
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        height: 100px;
        width: 320px;
    }

    .ro-item a {
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        color: #000;
    }

    .ro-item-info h2 {
        font-size: 1.2rem;
        margin: 0;
    }

    .ro-item-info {
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }

    .ro-item-info p {
        margin: 0;
        color: #555;
        font-size: 1.1rem;
    }

    .ro-item-info span{
        display: flex;
        font-size: 1.1rem;
        flex-wrap: wrap;
    }

</style>
