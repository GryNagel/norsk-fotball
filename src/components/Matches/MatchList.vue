<template>
  <div class="match-list">
    <div v-if="state === STATES.LOADING">Loading ...</div>

    <div v-if="state === STATES.ERROR">
      {{ error.message || "Something bad happened 😢" }}
    </div>

    <div v-if="state === STATES.OK">
      <div class="round" v-for="round in rounds" :key="round.round">
        <h2>Runde {{ round.round }}</h2>
        <Match
          v-for="match in round.matches"
          :key="match.id"
          :match="match"
          :standings="standings.teams"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { STATE } from "@/_constants/states";
import { API_URL } from "@/api";

import Match from "./Match";

export default {
  name: "MatchList",
  components: {
    Match,
  },
  created: function() {
    this.fetchMatchData();
    this.fetchStandingsData();
  },
  data() {
    return {
      state: STATE.LOADING,
      STATES: STATE,
      error: "",
      matches: [],
      rounds: [],
      standings: {},
    };
  },
  methods: {
    groupByRound: function(matches) {
      return matches
        .reduce((acc, currentItem) => {
          const round = currentItem.round;
          if (!acc[round]) {
            acc[round] = { round, matches: [] };
          }
          acc[round].matches.push(currentItem);
          return acc;
        }, [])
        .sort((a, b) => a - b)
        .filter((item) => item.round);
    },
    fetchMatchData: async function() {
      try {
        const result = await fetch(API_URL.MATCHES);
        const matches = await result.json();
        this.matches = matches;
        this.rounds = this.groupByRound(matches);
        this.state = STATE.OK;
      } catch (error) {
        this.state = STATE.ERROR;
        this.error = error;
      }
    },
    fetchStandingsData: async function() {
      try {
        const result = await fetch(API_URL.STANDINGS);
        const standings = await result.json();
        this.standings = standings;
      } catch (error) {
        this.state = STATE.ERROR;
        this.error = error;
      }
    },
  },
};
</script>

<style scoped>
.match-list {
  max-width: 700px;
  margin: 0 auto;
}

.round {
  margin-bottom: 50px;
}
</style>
