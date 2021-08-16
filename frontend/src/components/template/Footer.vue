<template>
    <div class="footer">
        <span>CopyRight <strong>LWF</strong></span>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: rgba(155, 149, 149, 0.939);
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>

