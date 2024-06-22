<style scoped>
.table-width {
  overflow-x: scroll;
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
          <date-picker v-model="year" format="YYYY" class="pa-3" color="teal darken-1" label="年度" dense clearable
            type="Year" persistent-placeholder></date-picker>
        </v-col>
        <v-col cols="2">
          <v-select v-model="selectGradeClass" class="mt-2" color="teal darken-1" label="学年-クラス" :items="gradeClass" dense
            persistent-placeholder></v-select>
        </v-col>
        <v-col cols="2">
          <v-text-field class="mt-2" color="teal darken-1" label="担任氏名" dense persistent-placeholder></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <data-table class="my-2 table-width" fixed-header height="60vh" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="l-th-sm-1">氏名</th>
                  <th class="l-th-sm-1">氏名カナ</th>
                  <th class="l-th-sm-1">性別</th>
                  <th class="l-th-sm-1">生年月日</th>
                  <th class="l-th-sm-1">所属委員会</th>
                  <th class="l-th-sm-1">所属部活動</th>
                  <th class="l-th-sm-1">保護者氏名</th>
                  <th class="l-th-sm-1">保護者氏名カナ</th>
                  <th class="l-th-sm-1">住所</th>
                  <th class="l-th-sm-1">電話番号</th>
                  <th class="l-th-sm-1">メールアドレス</th>
                  <th class="l-th-sm-1">兄弟学生番号</th>
                  <th class="l-th-sm-1">所属委員会役職</th>
                  <th class="l-th-sm-1">所属部活動役職</th>
                  <th class="l-th-sm-1">緊急時連絡先電話番号</th>
                  <th class="l-th-sm-1">緊急時連絡先氏名</th>
                  <th class="l-th-sm-1">緊急時連絡先氏名カナ</th>
                  <th class="l-th-sm-1">緊急時連絡先住所</th>
                  <th class="l-th-sm-1">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="l-td-sm-1">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                  <td class="l-text-sm-2">
                    <v-text-field class="mt-2" color="teal darken-1" dense></v-text-field>
                  </td>
                </tr>
              </tbody>
            </template>
          </data-table>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="3" offset="4">
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
  name: 'student-register',
  mixins: [ViewBasic],
  props: {
  },
  components: {
    DatePicker
  },
  data () {
    return {
      selectSubject: null,
      year: null,
      selectGradeClass: null,
      gradeClass: [
        "1-1", "1-2", "1-3", "2-1", "2-2", "2-3", "3-1", "3-2", "3-3"
      ],
      students: [
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