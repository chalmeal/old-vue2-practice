<template>
  <V-row dense>
    <v-col cols="2">
      <v-select v-model="selectYearMonth" class="mx-5 my-3" color="teal darken-1" label="実施年月" :items="yearMonth"
        persistent-placeholder></v-select>
      <ResultMenu :subject="optionsSubjectTypes" @select="select" />
    </v-col>
    <v-col cols="10">
      <v-card class="my-2" height="90vh" outlined>
        <v-card-text>
          <ResultList :yearMonth="selectYearMonth" :subject="selectSubject" />
        </v-card-text>
      </v-card>
    </v-col>
  </V-row>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import { SubjectType } from "@/types";
import ResultMenu from "@/views/Result/ResultMenu.vue"
import ResultList from "@/views/Result/ResultList.vue"

export default {
  name: 'result-home',
  mixins: [ViewBasic],
  components: {
    ResultMenu, ResultList
  },
  data () {
    return {
      yearMonth: ["すべて", "2022/06", "2022/02", "2021/12", "2021/09"],
      selectYearMonth: "すべて",
      selectSubject: "ALL"
    }
  },
  computed: {
    optionsSubjectTypes () {
      return Object.keys(SubjectType).map((k) => ({
        text: SubjectType[k],
        value: k,
      }));
    },
  },
  methods: {
    select (v) {
      this.selectSubject = v;
    }
  }
}
</script>
