<template>
    <div class="search-box">
        <!-- @input으로 들어갈 값은 $event.target.value로 받습니다. (입력된 값으로 바로 넘기는것) 
        v-model로 사용가능함 
        @input="inputText = $event.target.value" == v-model="inputText"
        -->
        <input type="search" 
        @change="onSearch($event)"
        placeholder="검색어를 입력하세요" />
        <button>검색</button>
    
    </div>
    <p>{{ inputText }}</p>
    <button @click="$emit('showAllMovies')">전체보기</button>
</template>
<script>
export default {
    name: 'SearchBarComponent',
    data() {
        return {
            inputText: '', // 검색어를 저장할 변수
        }
    },
    // 부모 --> 자식 data 전달
    props: {
        data: Array, // 부모 컴포넌트에서 전달받는 영화 데이터
    },
    methods: {
        onSearch(event) {
            this.inputText = event.target.value; // input에 입력된 값을 inputText에 저장
            this.$emit('searchMovie', { movieName: event.target.value})
        }
    },
    watch: {
        inputText(name) {
            // 입력한 영화 제목이 데이터에 있는지 확인하는 역할
            // 현재 data는 props를 통해 가져온 것이고 별도로 선언한 것이 아니기 때문에 객체 안의 data라 판단하여 this를 써주어야함
            const findName = this.data.filter(movie => {
                return movie.title.includes(name);
            })
            console.log(findName);
            // findName은 검색어가 포함된 영화 제목을 가진 배열이 됨
            if(findName.length == 0){
                alert("해당 자료가 없습니다.")
            }
        }
    }
}
</script>
<style>
.search-box {
    padding: 10px;
    display: flex;
    justify-content: center;
}

.search-box input {
    padding: 5px 10px;
}

.search-box button {
    margin: 0;
}
</style>