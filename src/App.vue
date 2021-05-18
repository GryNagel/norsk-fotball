<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import "./_styles/default.css";

export default {
  components: {
    Header
  }
};
</script>