<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--  
      Url이 만약 news라면 NewsView 컴포넌트로 
      전반적인 것이 router-view 
    -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
