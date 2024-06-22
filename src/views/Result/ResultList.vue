<style scoped></style>

<template>
  <div>
    <v-row no-gutters>
      <v-col class="pa-5">
        <div class="l-search mt-2 mb-4">
          <v-row dense>
            <v-col cols="2">
              <v-text-field class="mt-2" color="teal darken-1" label="キーワード" maxlength="256" dense persistent-placeholder
                hide-details="auto">
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-select v-model="gradeClass_status" class="mt-2" color="teal darken-1" label="学年-クラス" :items="gradeClass"
                dense persistent-placeholder></v-select>
            </v-col>
            <v-col cols="2">
              <v-select v-model="sexType" class="mt-2" color="teal darken-1" label="性別" :items="optionsSexTypes" dense
                clearable persistent-placeholder></v-select>
            </v-col>
          </v-row>
        </div>
        <data-table class="my-2" fixed-header height="70vh" dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th>実施年月</th>
                <th>氏名</th>
                <th>学年-クラス</th>
                <th>性別</th>
                <th>教科</th>
                <th>点数</th>
                <th>偏差値/平均点</th>
                <th>順位</th>
                <th>最終更新日</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="filteredItems == 0">
                <td colspan="8">対象が存在しません</td>
              </tr>
              <tr v-for="item in filteredItems" :key="item.id" class="l-selectable" @click="select(item)">
                <td class="text-left l-text-sm-2">{{ item.yearMonth }}</td>
                <td class="text-left l-text-sm-2">{{ item.name }}</td>
                <td class="text-left l-text-sm-2">{{ item.grade }}-{{ item.class }}</td>
                <td class="text-left l-text-sm-2">{{ item.sexType | sexType }}</td>
                <td class="text-left l-text-sm-2">{{ item.subject | subjectType }}</td>
                <td class="text-left l-text-sm-2">{{ item.point }}</td>
                <td class="text-left l-text-sm-2">{{}}</td>
                <td class="text-left l-text-sm-2">{{}}</td>
                <td class="text-left l-text-sm-2">{{ item.updateDate }}</td>
              </tr>
            </tbody>
          </template>
        </data-table>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
import ViewBasic from "@/views/mixins/mixin.js";
import { SexType } from "@/types";
export default {
  name: "result-list",
  mixins: [ViewBasic],
  props: [
    "yearMonth",
    "subject"
  ],
  components: {
  },
  data () {
    return {
      modal: {
        detail: false
      },
      item: null,
      selectedId: null,
      gradeClass: [
        "すべて", "1-1", "1-2", "1-3", "2-1", "2-2", "2-3", "3-1", "3-2", "3-3"
      ],
      gradeClass_status: "すべて",
      sexType: null,
      items: [
        {
          id: 1,
          yearMonth: "2022/06",
          name: "河浪 優香",
          grade: "3",
          class: "1",
          sexType: "FEMALE",
          subject: "JAPANESE",
          point: "81",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 2,
          yearMonth: "2022/06",
          name: "山本 昌介",
          grade: "3",
          class: "1",
          sexType: "MALE",
          subject: "MATH",
          point: "67",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 3,
          yearMonth: "2022/06",
          name: "沢村 雄一郎",
          grade: "3",
          class: "2",
          sexType: "MALE",
          subject: "JAPANESE",
          point: "70",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 4,
          yearMonth: "2022/02",
          name: "中林 利治",
          grade: "2",
          class: "2",
          sexType: "MALE",
          subject: "SOCIAL",
          point: "88",
          rank: "",
          updateDate: "2023-03-26"
        },
        {
          id: 5,
          yearMonth: "2022/02",
          name: "月岡 奈波",
          grade: "2",
          class: "3",
          sexType: "FEMALE",
          subject: "SCIENCE",
          point: "45",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 6,
          yearMonth: "2022/02",
          name: "松沢 大地",
          grade: "2",
          class: "3",
          sexType: "MALE",
          subject: "SOCIAL",
          point: "75",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 7,
          yearMonth: "2021/12",
          name: "野口 なお",
          grade: "1",
          class: "1",
          sexType: "FEMALE",
          subject: "ENGLISH",
          point: "92",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 8,
          yearMonth: "2021/12",
          name: "遠藤 良太",
          grade: "1",
          class: "2",
          sexType: "MALE",
          subject: "MATH",
          point: "50",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 9,
          yearMonth: "2021/12",
          name: "藤原 春華",
          grade: "1",
          class: "2",
          sexType: "FEMALE",
          subject: "SOCIAL",
          point: "81",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 10,
          yearMonth: "2021/12",
          name: "山本 昌介",
          grade: "3",
          class: "1",
          sexType: "MALE",
          subject: "JAPANESE",
          point: "80",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 11,
          yearMonth: "2021/09",
          name: "月岡 奈波",
          grade: "2",
          class: "3",
          sexType: "FEMALE",
          subject: "MATH",
          point: "28",
          rank: "",
          updateDate: "2023-03-20"
        },
        {
          id: 12,
          yearMonth: "2021/09",
          name: "藤原 春華",
          grade: "1",
          class: "2",
          sexType: "FEMALE",
          subject: "ENGLISH",
          point: "90",
          rank: "",
          updateDate: "2023-03-22"
        },
      ],
    }
  },
  computed: {
    optionsSexTypes () {
      return Object.keys(SexType).map((k) => ({
        text: SexType[k],
        value: k,
      }));
    },
    filteredItems () {
      return this.items.filter(v => {
        if (this.yearMonth === "すべて") {
          return v;
        } else {
          return this.yearMonth === v.yearMonth;
        }
      })
        .filter(v => {
          if (this.subject === "ALL") {
            return v
          } else {
            return this.subject === v.subject
          }
        })
        .filter(v => {
          var gradeClass = v.grade.concat("-" + v.class)
          if (this.gradeClass_status === "すべて") {
            return v;
          } else {
            return (
              this.gradeClass_status === gradeClass
            );
          }
        }).filter(v => !this.sexType || this.sexType === v.sexType);
    },
    selected () {
      return this.selectedId
        ? this.items.find((v) => v.id === this.selectedId)
        : null;
    },
  },
  mounted () {
  },
  methods: {
    select (v) {
      this.selectedId = v.id;
      if (v) {
        this.modal.detail = true;
      }
    },
    hide () {
      this.$emit("hide");
    },
  },
}
</script>