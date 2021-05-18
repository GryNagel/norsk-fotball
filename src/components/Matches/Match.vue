<template>
  <div>
    <h4>{{ formatDate(match.timestamp) }}</h4>
    <div class="match">
      <Team
        :name="match.homeTeam.name"
        :color="this.match.homeTeam.clubs[0].textColor"
        :backgroundColor="this.match.homeTeam.clubs[0].primaryColor"
        :standing="`${getStanding(match.homeTeam.id)}`"
        :logo="match.homeTeam.logo.url"
      />
      <Result
        v-if="match.matchStatusId === 1"
        :awayScore="match.result.awayScore90"
        :homeScore=" match.result.homeScore90"
      />
      <div v-else> 
          {{ match.stadium.name }}
      </div>
      <Team
        :name="match.awayTeam.name"
        :color="this.match.awayTeam.clubs[0].textColor"
        :backgroundColor="this.match.awayTeam.clubs[0].primaryColor"
        :standing="`${getStanding(match.awayTeam.id)}`"
        :logo="match.awayTeam.logo.url"
      />
    </div>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import Team from "./Team";
import Result from "./Result";

export default {
  name: "Match",
  props: ["match", "standings"],
  components: {
    Team,
    Result
  },
  computed: {
    homeTeamStyles() {
      return {
        backgroundColor: this.match.homeTeam.clubs[0].primaryColor,
        color: this.match.homeTeam.clubs[0].textColor
      };
    },
    awayTeamStyles() {
      return {
        backgroundColor: this.match.awayTeam.clubs[0].primaryColor,
        color: this.match.awayTeam.clubs[0].textColor
      };
    }
  },
  methods: {
    formatDate: function(date) {
      return format(parseISO(date), "dd.MM.yyy HH:mm");
    },
    getStanding(teamId) {
      return this.standings.find(team => team.id === teamId).place;
    }
  }
};
</script>

<style>
.match {
  display: grid;
  grid-template-columns: 1fr 150px 1fr;
  align-items: center;
}
</style>