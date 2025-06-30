<template>
    <div class="container">
        <h1>영화정보</h1> <!-- data 값을 받아와야함 : Props-->
        <div v-for="(movie) in data" :key="movie.id" class="movie">
            <figure>
                <img :src="`${movie.url}`" :alt="movie.title" />
            </figure>
            <div class="info">
                <p class="bg-yellow">{{ movie.title }}</p>
                <p>개봉: {{ movie.year }}</p>
                <p>장르: {{ movie.category }}</p>
                <button @click="$emit('increaseLike', {id: movie.id})">좋아요</button>
                <span> {{ movie.like }}</span>
                <p> <!-- @click이 발생할 때 현 인덱스를 selectedMovie 값에 넣어주기: 여러 조건을 한 번에 같이 표시하려면 ';' 을 사용할 것-->
                    <button @click="$emit('openModal', {id: movie.id})">상세보기</button>
                    <!-- 값 변경을 위해 부모에 emit으로 보내야하는데, 첫 번째는 이벤트명 두 번째부터는 파라미터-->
                </p>
            </div>
        </div>
    </div>
</template>
<!-- Component 등록하기 -->
<script>
export default {
    // 컴포넌트명
    name: "MoviesComponent",
    // 컴포넌트에서 사용할 데이터
    // 상태변수, 상태함수 등등은 부모로부터 가져와야함
    props: {
        data: Array, // 부모 컴포넌트에서 전달받는 영화 데이터

    },
}
</script>
<style>
    .container {
        padding: 20px;
    }
</style>