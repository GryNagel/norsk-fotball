<template>
  <div class="team" :style="style">
    <div class="name">
      <img class="logo" :src="logo" :alt="name" />
      {{ name }}
    </div>
    <span class="standing">{{ `#${standing}` }}</span>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: ["logo", "name", "standing", "backgroundColor", "color"],
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      };
    }
  }
};
</script>

<style scoped>
.team {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
}

.name {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.standing {
  font-weight: 600;
}
</style>