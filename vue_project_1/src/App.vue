<template>
  <Navbar />

  <!-- text: Props-->
  <Event :text="text[eventTextNum]" />
  <SearchBar :data="data_temp" @searchMovie="handleSearchMovie" @showAllMovies="showAllMovies" />

  <!-- $event로 emit의 파라미터를 받음 -->
  <Movies :data="data_temp" @openModal="handleModalOpen" @increaseLike="handleIncreaseLike" />
  <!-- :data (v-bind)로 Modal로 보냄, 마찬가지로 :isModal, :selectedMovie로 해서 Modal로 보냄 (v-bind)-->
  <Modal :data="data" :isModal="isModal" :selectedMovie="selectedMovie" @closeModal="isModal = false" />
</template>
<script>
import movie from './js/movie';  // export default로 내보낼 때 이용
import NavBarComponent from './components/Navbar.vue';
import ModalComponent from './components/Modal.vue';
import EventComponent from './components/Event.vue';
import MoviesComponent from './components/Movies.vue';
import SearchBarComponent from './components/SearchBar.vue';

export default {
  name: 'App',
  data() {
    return {
      isModal: false,
      data: movie,
      data_temp: [...movie], // 영화 데이터 사본
      selectedMovie: 0,
      text: [
        "NETFLIX 강렬한 운명의 드라마, 경성크리처",
        "디즈니 100주년 기념작, 위시",
        "그날, 대한민국의 운명이 바뀌었다, 서울의 봄",
      ],
      eventTextNum: 0, // 배열 번호 변수가 바뀌어야함(text 배열의 인덱스값으로 사용)
      interval: null, // setInterval을 지정할 변수
    }
  },
  methods: {
    handleModalOpen(payload) {
      this.isModal = true; // 모달창을 열기
      this.selectedMovie = payload.id; // payload는 객체로 전달됨, key는 인덱스값
      // payload는 객체로 전달됨, key는 인덱스값  
      // selectedMovie에 현재 클릭한 영화의 인덱스를 넣어줌
      console.log("selectedMovie: ", this.selectedMovie)
    },
    handleIncreaseLike(payload) {
      var id = payload.id; // payload는 객체로 전달됨, key는 인덱스값
      this.data.find(movie => {
        if (movie.id == id) {
          movie.like += 1; // 좋아요 수 증가
        }
      })
      // payload는 객체로 전달됨, key는 인덱스값  
    },
    handleSearchMovie(payload) {
      let title = payload.movieName;
      this.data_temp = this.data.filter(movie => {
        return movie.title.includes(title);
      })
    },
    showAllMovies() {
      this.data_temp = [...this.data]; // temp 데이터를 원본 데이터로 초기화 할 것

    }
  },
  mounted() {
    // 마운트될때 수행
    // setInterval을 이용하면 비동기적으로 계속 돌기 때문에 컴포넌트가 종료된 시점에도
    // 돌려고하여 오류가 발생할 수 있는 문제가 있음
    this.interval = setInterval(() => {
      this.eventTextNum += 1; // 1초 후에 이벤트 텍스트 변경
      if (this.eventTextNum >= this.text.length) {
        this.eventTextNum = 0; // 배열의 길이를 넘어가면 다시 처음으로
      }
    }, 3000); // 1초마다 수행
  },
  unmounted() {
    clearInterval(this.interval)
  },
  components: {
    Navbar: NavBarComponent,
    Modal: ModalComponent,
    Event: EventComponent,
    Movies: MoviesComponent,
    SearchBar: SearchBarComponent,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
