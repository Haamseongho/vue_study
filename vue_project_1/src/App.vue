<template>
  <Navbar />
  <!-- text: Props-->
  <Event :text="text"/>
  <h1>영화정보</h1>
  <div v-for="(item, i) in data" :key="i">
    <figure>
      <img :src="`${item.url}`" :alt="item.title"/>
    </figure>
    <div class="info">
      <p class="bg-yellow">{{ item.title }}</p>
      <p>개봉: {{ item.year }}</p>
      <p>장르: {{ item.category }}</p>
      <button @click="increateLike(i)">좋아요</button>
      <span> {{  item.like  }}</span>
      <p> <!-- @click이 발생할 때 현 인덱스를 selectedMovie 값에 넣어주기: 여러 조건을 한 번에 같이 표시하려면 ';' 을 사용할 것-->
        <button @click="isModal = true; selectedMovie=i">상세보기</button>
      </p>
    </div>
  </div>
  <Modal 
  :data="data" 
  :isModal="isModal" 
  :selectedMovie="selectedMovie"
  @closeModal="isModal = false"
  />
  </template>
<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
import movie from './js/movie';  // export default로 내보낼 때 이용
import NavBarComponent from './components/Navbar.vue'
import ModalComponent from './components/Modal.vue'
import EventComponent from './components/Event.vue'
export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data: movie,
        selectedMovie: 0,
        text: "NETFLIX 강렬한 운명의 드라마, 경성크리처",
      }
    },
    methods: {
      increateLike(index) {
        this.data[index].like += 1
      }
    },
    components : {
      Navbar: NavBarComponent,
      Modal: ModalComponent,
      Event: EventComponent,
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
