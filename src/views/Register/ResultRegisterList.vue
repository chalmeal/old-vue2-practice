<style lang="scss" scoped>
td {
  width: 10vw
}
</style>

<template>
  <v-card class="ma-3" outlined>
    <v-dialog v-model="modal.register" eager width="95vw">
      <ResultRegister @hide="modal.register = false"></ResultRegister>
    </v-dialog>
    <v-card-text>
      <v-row dense>
        <v-col cols="6">
          <v-row dense>
            <v-col cols="9">
              <v-alert class="l-text-sm-2" dense text icon="mdi-plus-box-multiple" border="top" color="teal darken-1"
                dark>
                成績情報の一括登録を行います。単体での登録は成績の「登録」から行ってください。
              </v-alert>
            </v-col>
            <v-col cols="3">
              <v-btn class="white--text my-1" color="brown darken-1" block small
                @click="modal.register = true">新規一括登録</v-btn>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-select v-model="selectYearMonth" class="mt-2" color="teal darken-1" label="実施年月" :items="yearMonth" dense
                clearable persistent-placeholder></v-select>
            </v-col>
            <v-col>
              <v-select v-model="selectGradeClass" class="mt-2" color="teal darken-1" label="学年-クラス" :items="gradeClass"
                dense clearable persistent-placeholder></v-select>
            </v-col>
            <v-col>
              <v-select v-model="selectSubject" class="mt-2" color="teal darken-1" label="教科" :items="optionsSubjectTypes"
                dense clearable persistent-placeholder></v-select>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <data-table class="my-2" fixed-header height="59vh" dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>実施年月</th>
                      <th>学年-クラス</th>
                      <th>教科</th>
                      <th>最終更新日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="filteredItems == 0">
                      <td colspan="8">対象が存在しません</td>
                    </tr>
                    <tr v-for="item in filteredItems" :key="item.id" class="l-selectable" @click="select(item)">
                      <td class="text-left l-text-sm-2">{{ item.yearMonth }}</td>
                      <td class="text-left l-text-sm-2">{{ item.grade }}-{{ item.class }}</td>
                      <td class="text-left l-text-sm-2">{{ item.subject | subjectType }}</td>
                      <td class="text-left l-text-sm-2">{{ item.updateDate }}</td>
                    </tr>
                  </tbody>
                </template>
              </data-table>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-fade-transition>
            <ResultRegisterPreview :register="selected" />
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import ResultRegisterPreview from "./ResultRegisterPreview.vue";
import ResultRegister from "./ResultRegister.vue";
import { SubjectType } from "@/types";

export default {
  name: 'result-register-list',
  mixins: [ViewBasic],
  components: {
    ResultRegisterPreview, ResultRegister
  },
  data () {
    return {
      modal: {
        register: false
      },
      selected: null,
      selectSubject: null,
      selectYearMonth: null,
      selectGradeClass: null,
      yearMonth: ["2022/06", "2022/02", "2021/12", "2021/09"],
      gradeClass: [
        "1-1", "1-2", "1-3", "2-1", "2-2", "2-3", "3-1", "3-2", "3-3"
      ],
      items: [
        {
          id: 1,
          yearMonth: "2022/06",
          grade: "1",
          class: "2",
          subject: "JAPANESE",
          updateDate: "2022-06-22",
          content: [
            {
              studentNumber: "202209220",
              studentName: "遠藤 良太",
              sexType: "MALE",
              point: "61",
              discription: "",
              rank: "",
            },
            {
              studentNumber: "202212260",
              studentName: "藤原 春華",
              sexType: "FEMALE",
              point: "80",
              discription: "",
              rank: "",
            },
            {
              studentNumber: "202209010",
              studentName: "高本 大樹",
              sexType: "MALE",
              point: "29",
              discription: "",
              rank: "",
            },
          ]
        },
        {
          id: 2,
          yearMonth: "2022/06",
          grade: "2",
          class: "2",
          subject: "SOCIAL",
          updateDate: "2022-06-23",
          content: [
            {
              studentNumber: "202103290",
              studentName: "中林 利治",
              sexType: "MALE",
              point: "70",
              discription: "",
              rank: "",
            },
            {
              studentNumber: "202111060",
              studentName: "大森 明日音",
              sexType: "FEMALE",
              point: "75",
              discription: "",
              rank: "",
            },
            {
              studentNumber: "202101300",
              studentName: "斎藤 美優",
              sexType: "FEMALE",
              point: "49",
              discription: "",
              rank: "",
            },
          ]
        },
        {
          id: 3,
          yearMonth: "2022/06",
          grade: "3",
          class: "1",
          subject: "ENGLISH",
          updateDate: "2022-06-28",
          content: [
            {
              studentNumber: "202008010",
              studentName: "山本 昌介",
              sexType: "MALE",
              point: "53",
              discription: "",
              rank: "",
            },
            {
              studentNumber: "202011210",
              studentName: "河浪 優香",
              sexType: "FEMALE",
              point: "90",
              discription: "",
              rank: "",
            },
          ]
        },
      ]
    }
  },
  computed: {
    optionsSubjectTypes () {
      return Object.keys(SubjectType).map((k) => ({
        text: SubjectType[k],
        value: k,
      }));
    },
    filteredItems () {
      return this.items.filter(v => {
        return !this.selectYearMonth || this.selectYearMonth === v.yearMonth
      }).filter(v => {
        var gradeClass = v.grade.concat("-" + v.class)
        return !this.selectGradeClass || this.selectGradeClass === gradeClass
      }).filter(v => {
        return !this.selectSubject || this.selectSubject === v.subject
      });
    },
  },
  methods: {
    select (v) {
      this.selected = null;
      this.$nextTick(() => {
        this.selected = v;
      });
    }
  }

}
</script>