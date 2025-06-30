<template>
    <!-- 클래스 같은거 조건으로 달 때 객체 형태로 넘길 것-->
    <div class="event" :class="{ show: isOpen }">
        <p>
            {{ text }}
        </p>
        <button @click="isOpen = false">X</button>
    </div>
</template>

<script>
export default {
    name: 'EventComponent',
    // Event에서 text를 Props로 부름 --> 타입만 적어두기
    props: {
        text: String,
        isEventOpen: Boolean,
    },
    data() {
        return {
            isOpen: true, // 이벤트창이 열려있는지 여부
        }
    }
}
</script>

<style>
.event {
    background: #444;
    padding: 10px 20px;
    color: #fff;
    text-align: center;
    font-size: small;
    display: none;
    justify-content: space-between;
    align-items: center;
}

.show {
    display: flex;
}

.event p {
    margin: 0;
}

.event button {
    margin: 0;
}
</style>