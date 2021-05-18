<template>
  <div class="result">
    <span>{{ homeScore }}</span>
    <span>{{` - `}}</span>
    <span>{{ awayScore }}</span>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    homeScore: Number,
    awayScore: Number
  }
};
</script>

<style>
.result {
  background-color: white;
  color: #222;
  font-size: 30px;
  border-radius: 4px;
  padding: 10px;
  font-weight: 600;
  margin: 0px 10px;
}
</style>