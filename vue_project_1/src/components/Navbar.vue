<template>
    <nav>
        <a href="#">Home</a>
        <a href="#">Movie</a>
        <a href="#">About</a>
    </nav>
</template>
    
<script>
    export default {
        name: 'NavBarComponent',
      
    }
</script>
    
<style>
    .navbar {
        background: #000;
        padding: 20px;
        text-align: center;
    }
    .navbar a {
        color: #fff;
        text-decoration: none;
        padding: 1rem;
    }
</style>