<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title">{{ title }}</span>
            <span class="stat-value"><h2>{{ value }}</h2></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stat",
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style() {
            return "color: " + (this.color || "#000")
        }
    }
}
</script>

<style>
    .stat {
        flex: 1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: rgb(226, 225, 223);
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    }

    .stat-icon {
        display: flex;
        align-items: center;
    }

    .stat-icon i {
        font-size: 3rem;
    }

    .stat-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
</style>


