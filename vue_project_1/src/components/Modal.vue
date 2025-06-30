<template>
    <div class="modal" v-if="isModal">
    <div class="inner">
      <h3> {{  data[selectedMovie].title  }}</h3>
      <p>영화 상세정보</p>
      <!-- 
      Modal은 자식임.. 부모에서 값을 변경하는건데, 자식에서 부모값을 변경하는건 불가함 
      $emit('closeModal')는 부모 컴포넌트에서 정의한 closeModal 메소드를 실행하는 것임
      closeModal -> 이벤트명으로 자식 컴포넌트가 버튼 클릭시 emit으로 부모한테 내보냄 
      따라서 부모 컴포넌트에서 Modal 컴포넌트에 @closeModal로 해서 접근함.  그다음 거기서 값을 변경
      --> 
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
    
<script>
    export default {
        name: 'ModalComponent',
        props: { // v-bind로 부모 컴포넌트에서 전달받는 값 --> props는 자료형으로만 정의
            data: Array,
            isModal: Boolean,
            selectedMovie: Number
        }
    }
</script>
    
<style>
    
</style>