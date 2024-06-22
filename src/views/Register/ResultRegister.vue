<style scoped>
.table-culumn-width {
  width: 10vw
}
</style>

<template>
  <v-card>
    <v-card-title class="pa-1 pl-2 caption teal darken-1 grey--text text--lighten-3">
      <v-row dense>
        <v-col cols="10">新規一括登録</v-col>
        <v-icon class="ml-auto me-3" color="white" @click="hide">mdi-close-circle-outline</v-icon>
      </v-row>
    </v-card-title>
    <v-card-text class="pa-4 overflow-y-auto">
      <v-row dense>
        <v-col class="my-1" cols="2">
          <date-picker v-model="yearMonth" class="pa-3" color="teal darken-1" label="実施年月" dense clearable
            persistent-placeholder></date-picker>
        </v-col>
        <v-col cols="2">
          <v-select v-model="selectGradeClass" class="mt-2" color="teal darken-1" label="学年-クラス" :items="gradeClass" dense
            persistent-placeholder></v-select>
        </v-col>
        <v-col cols="2">
          <v-select v-model="selectSubject" class="mt-2" color="teal darken-1" label="教科" :items="optionsSubjectTypes"
            dense persistent-placeholder></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <data-table class="my-2" fixed-header height="60vh" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="table-culumn-width">氏名</th>
                  <th class="table-culumn-width">性別</th>
                  <th class="table-culumn-width">点数</th>
                  <th class="table-culumn-width">順位</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="filteredItems === false">
                  <td colspan="8">学年-クラスを選択してください</td>
                </tr>
                <tr v-for="item in filteredItems" :key="item.studentNumber">
                  <td class="text-left l-text-sm-2">{{ item.name }}</td>
                  <td class="text-left l-text-sm-2">{{ item.sexType | sexType }}</td>
                  <td><v-text-field color="teal darken-1" dense max="100" min="0" maxlength="3" /></td>
                  <td class="text-left l-text-sm-2">{{}}</td>
                  <td><v-text-field color="teal darken-1" dense /></td>
                </tr>
              </tbody>
            </template>
          </data-table>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="8">
          <v-card outlined>
            <v-card-text>
              <v-row dense>
                <v-col cols="4" class="l-text-sm-1">点数未入力：</v-col>
                <v-col cols="3" class="l-text-sm-1">平均点：</v-col>
                <v-col cols="3" class="l-text-sm-1">最大点：</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-btn class="my-3 white--text" color="brown darken-1" block small>一時保存</v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="my-3 white--text" color="blue-grey darken-1" block small>登録</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import { SubjectType } from "@/types";
import DatePicker from '../../components/DatePicker.vue';
export default {
  name: 'result-register',
  mixins: [ViewBasic],
  props: {
  },
  components: {
    DatePicker
  },
  data () {
    return {
      selectSubject: null,
      yearMonth: null,
      selectGradeClass: null,
      yearMonth: ["2022/06", "2022/02", "2021/12", "2021/09"],
      gradeClass: [
        "1-1", "1-2", "1-3", "2-1", "2-2", "2-3", "3-1", "3-2", "3-3"
      ],
      students: [
        {
          studentNumber: 202011210,
          name: "河浪 優香",
          nameKana: "カワナミ ユウカ",
          sexType: "FEMALE",
          grade: "3",
          class: "1",
          teacher: "中川 祐樹",
          committee: "BOOKS",
          club: "TENNIS",
          parentName: "河浪 壮一郎",
          parentNameKana: "カワナミ ソウイチロウ",
          address: "栃木県宇都宮市赤町1-1-1",
          tel: "090-1111-1111",
          mail: "kawanami@example.com",
          discription: "",
          updateDate: "2023-03-01"
        },
        {
          studentNumber: 202008010,
          name: "山本 昌介",
          nameKana: "ヤマモト ショウスケ",
          sexType: "MALE",
          grade: "3",
          class: "1",
          teacher: "中川 祐樹",
          committee: "MORALS",
          club: "BASEBALL",
          parentName: "山本 登",
          parentNameKana: "ヤマモト ノボル",
          address: "栃木県宇都宮市赤町2-2-2",
          tel: "090-2222-2222",
          mail: "yamamoto@example.jp",
          discription: "",
          updateDate: "2023-03-01"
        },
        {
          studentNumber: 202001190,
          name: "沢村 雄一郎",
          nameKana: "サワムラ ユウイチロウ",
          sexType: "MALE",
          grade: "3",
          class: "2",
          teacher: "近藤 綾子",
          committee: "ENVIRONMENTS",
          club: "SOCCER",
          parentName: "沢村 那津子",
          parentNameKana: "サワムラ ナツコ",
          address: "栃木県宇都宮市青町1-1-1",
          tel: "090-3333-3333",
          mail: "sawamura@example.com",
          discription: "",
          updateDate: "2023-03-10"
        },
        {
          studentNumber: 202103290,
          name: "中林 利治",
          nameKana: "ナカバヤシ トシハル",
          sexType: "MALE",
          grade: "2",
          class: "2",
          teacher: "渡辺 優成",
          committee: "BOOKS",
          club: "ART",
          parentName: "中林 孝行",
          parentNameKana: "ナカバヤシ タカユキ",
          address: "栃木県宇都宮市赤町3-3-3",
          tel: "090-4444-4444",
          mail: "nakabayashi@example.com",
          discription: "",
          updateDate: "2023-03-01"
        },
        {
          studentNumber: 202110060,
          name: "月岡 奈波",
          nameKana: "ツキオカ ナナミ",
          sexType: "FEMALE",
          grade: "2",
          class: "3",
          teacher: "斎藤 朱音",
          committee: "MORALS",
          club: "MUSIC",
          parentName: "月岡 公介",
          parentNameKana: "ツキオカ コウスケ",
          address: "栃木県宇都宮市緑町1-1-1",
          tel: "090-5555-5555",
          mail: "tsukioka@example.com",
          discription: "",
          updateDate: "2023-03-01"
        },
        {
          studentNumber: 202102250,
          name: "松沢 大地",
          nameKana: "マツサワ ダイチ",
          sexType: "MALE",
          grade: "2",
          class: "3",
          teacher: "大木 幸太郎",
          committee: "ENVIRONMENTS",
          club: "BASEBALL",
          parentName: "松沢 文雄",
          parentNameKana: "マツサワ フミオ",
          address: "栃木県宇都宮市赤町4-4-4",
          tel: "090-6666-6666",
          mail: "matsusawa@example.com",
          discription: "",
          updateDate: "2023-03-09"
        },
        {
          studentNumber: 202205160,
          name: "野口 なお",
          nameKana: "ノグチ ナオ",
          sexType: "FEMALE",
          grade: "1",
          class: "1",
          teacher: "戸田 美優",
          committee: "BOOKS",
          club: "TENNIS",
          parentName: "野口 翔太",
          parentNameKana: "ノグチ ショウタ",
          address: "栃木県宇都宮市赤町5-5-5",
          tel: "090-7777-7777",
          mail: "noguchi@example.com",
          discription: "",
          updateDate: "2023-03-01"
        },
        {
          studentNumber: 202209220,
          name: "遠藤 良太",
          nameKana: "エンドウ リョウタ",
          sexType: "MALE",
          grade: "1",
          class: "2",
          teacher: "相川 正樹",
          committee: "MORALS",
          club: "BASKET",
          parentName: "遠藤 麻美",
          parentNameKana: "エンドウ アサミ",
          address: "栃木県宇都宮市緑町2-2-2",
          tel: "090-8888-8888",
          mail: "endo@example.com",
          discription: "",
          updateDate: "2023-03-01"
        },
        {
          studentNumber: 202212260,
          name: "藤原 春華",
          nameKana: "フジワラ ハルカ",
          sexType: "FEMALE",
          grade: "1",
          class: "2",
          teacher: "相川 正樹",
          committee: "BOOKS",
          club: null,
          parentName: "藤原 基樹",
          parentNameKana: "フジワラ モトキ",
          address: "栃木県宇都宮市赤町6-6-6",
          tel: "090-9999-9999",
          mail: "fujiwara@example.com",
          discription: "",
          updateDate: "2023-03-01"
        },
      ],
    }
  },
  computed: {
    filteredItems () {
      if (!this.selectGradeClass) {
        return !this.students
      } else {
        return this.students.filter(v => {
          var gradeClass = v.grade.concat("-" + v.class)
          return !this.selectGradeClass || this.selectGradeClass === gradeClass
        });
      }
    },
    optionsSubjectTypes () {
      return Object.keys(SubjectType).map((k) => {
        if (k !== "ALL") {
          return { text: SubjectType[k], value: k };
        }
      });
    },
  },
  methods: {
    hide () {
      this.$emit("hide");
    },
  }
}
</script>