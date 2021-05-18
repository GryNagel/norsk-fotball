<template>
  <div class="home">
    <MatchList />
  </div>
</template>

<script>

import MatchList from "../components/Matches/MatchList";

export default {
  name: "Home", 
  components: {
    MatchList
  }
};
</script>
