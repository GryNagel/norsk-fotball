<template>
  <header>
      <h1>Norsk fotball</h1>
    <!-- <nav>
      <router-link to="/">Games</router-link>|
    </nav> -->
  </header>
</template>

<script>
export default {
    name: 'Header', 
};
</script>

<style scoped>
header{
    grid-area: header; 
    height: 80px; 
    background: #fff; 
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 20px;
    align-items: center;
    padding: 0 20px; 
}
h1{
    color: #222; 
}

nav{
    text-align: left;
}
</style>