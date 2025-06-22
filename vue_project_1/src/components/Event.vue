<template>
    <div class="event">
        <p>
            {{ text }}
        </p>
    </div>
</template>
    
<script>
    export default {
        name: 'EventComponent',
        // Event에서 text를 Props로 부름 --> 타입만 적어두기
        props: {
            text: String
        }
    }
</script>
    
<style>
    .event {
        background: #444;
        padding: 20px;
        color: #fff;
        text-align: center;
        font-size: small;
    }
    .event p {
        margin: 0;
    }
</style>