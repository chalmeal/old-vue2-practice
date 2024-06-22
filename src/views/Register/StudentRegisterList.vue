<style lang="scss" scoped>
td {
  width: 10vw
}
</style>

<template>
  <v-card class="ma-3" outlined>
    <v-dialog v-model="modal.register" eager width="95vw">
      <StudentRegister @hide="modal.register = false"></StudentRegister>
    </v-dialog>
    <v-card-text>
      <v-row dense>
        <v-col cols="6">
          <v-row dense>
            <v-col cols="9">
              <v-alert class="l-text-sm-2" dense text icon="mdi-account-plus" border="top" color="teal darken-1" dark>
                学生情報の一括登録を行います。単体での登録は学生マスタの「登録」から行ってください。
              </v-alert>
            </v-col>
            <v-col cols="3">
              <v-btn class="white--text my-1" color="brown darken-1" block small
                @click="modal.register = true">新規一括登録</v-btn>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="4">
              <v-text-field class="mt-2" color="teal darken-1" label="キーワード" maxlength="256" dense persistent-placeholder
                hide-details="auto">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <data-table class="my-6" fixed-header height="57vh" dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>年度</th>
                      <th>学年-クラス</th>
                      <th>担任</th>
                      <th>最終更新日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="filteredItems == 0">
                      <td colspan="8">対象が存在しません</td>
                    </tr>
                    <tr v-for="item in filteredItems" :key="item.id" class="l-selectable" @click="select(item)">
                      <td class="text-left l-text-sm-2">{{ item.year }}</td>
                      <td class="text-left l-text-sm-2">{{ item.grade }}-{{ item.class }}</td>
                      <td class="text-left l-text-sm-2">{{ item.teacher }}</td>
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
            <StudentRegisterPreview :register="selected" />
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import StudentRegisterPreview from './StudentRegisterPreview.vue';
import StudentRegister from "./StudentRegister.vue";

export default {
  name: 'student-register',
  mixins: [ViewBasic],
  components: {
    StudentRegisterPreview, StudentRegister
  },
  data () {
    return {
      modal: {
        register: false
      },
      selected: null,
      items: [
        {
          id: 1,
          grade: "1",
          class: "1",
          teacher: "中川 祐樹",
          year: "2023",
          updateDate: "2023-03-01",
          students: [
            {
              studentNumber: 202304160,
              name: "大久保 京香",
              nameKana: "オオクボ キョウカ",
              sexType: "FEMALE",
              committee: "",
              club: "",
              parentName: "大久保 隆治",
              parentNameKana: "オオクボ タカハル",
              address: "栃木県宇都宮市青町11-11",
              tel: "080-1111-1111",
              mail: "okubo@example.com",
              birthday: "2009-04-16",
              discription: "",
            },
            {
              studentNumber: 20231115,
              name: "三井 悠太",
              nameKana: "ミツイ ユウタ",
              sexType: "MALE",
              committee: "",
              club: "",
              parentName: "三井 尚人",
              parentNameKana: "ミツイ ナオト",
              address: "栃木県宇都宮市赤町11-11",
              tel: "080-2222-2222",
              mail: "mitsui@example.com",
              birthday: "2019-11-15",
              discription: "",
            },
          ]
        },
        {
          id: 2,
          grade: "2",
          class: "1",
          teacher: "野田 夏美",
          year: "2023",
          updateDate: "2023-03-10",
          students: [
            {
              studentNumber: 202212260,
              name: "藤原 春華",
              nameKana: "フジワラ ハルカ",
              sexType: "FEMALE",
              committee: "BOOKS",
              club: null,
              parentName: "藤原 基樹",
              parentNameKana: "フジワラ モトキ",
              address: "栃木県宇都宮市赤町6-6-6",
              tel: "090-9999-9999",
              mail: "fijiwara@example.com",
              birthday: "2008-12-26",
              discription: "",
            },
            {
              studentNumber: 202209220,
              name: "遠藤 良太",
              nameKana: "エンドウ リョウタ",
              sexType: "MALE",
              committee: "MORALS",
              club: "BASKET",
              parentName: "遠藤 麻美",
              parentNameKana: "エンドウ アサミ",
              address: "栃木県宇都宮市緑町2-2-2",
              tel: "090-8888-8888",
              mail: "endo@example.com",
              birthday: "2008-09-22",
              discription: "",
            },
            {
              studentNumber: 202205160,
              name: "野口 なお",
              nameKana: "ノグチ ナオ",
              sexType: "FEMALE",
              committee: "BOOKS",
              club: "TENNIS",
              parentName: "野口 翔太",
              parentNameKana: "ノグチ ショウタ",
              address: "栃木県宇都宮市赤町5-5-5",
              tel: "090-7777-7777",
              mail: "noguchi@example.com",
              birthday: "2008-05-16",
              discription: "",
            },
            {
              studentNumber: 202210060,
              name: "須藤 雄之助",
              nameKana: "スドウ ユウノスケ",
              sexType: "MALE",
              committee: "MORALS",
              club: "BASEBALL",
              parentName: "須藤 博之",
              parentNameKana: "スドウ ヒロユキ",
              address: "栃木県宇都宮市緑町3-3-3",
              tel: "090-1010-1010",
              mail: "sudo@example.com",
              birthday: "2008-10-06",
              discription: "",
            },
          ]
        },
        {
          id: 3,
          grade: "3",
          class: "1",
          teacher: "渡辺 優成",
          year: "2023",
          updateDate: "2023-03-11",
          students: [
            {
              studentNumber: 202103290,
              name: "中林 利治",
              nameKana: "ナカバヤシ トシハル",
              sexType: "MALE",
              committee: "BOOKS",
              club: "ART",
              parentName: "中林 孝行",
              parentNameKana: "ナカバヤシ タカユキ",
              address: "栃木県宇都宮市赤町3-3-3",
              tel: "090-4444-4444",
              mail: "nakabayashi@example.com",
              birthday: "2008-03-29",
              discription: "",
            },
            {
              studentNumber: 202110060,
              name: "月岡 奈波",
              nameKana: "ツキオカ ナナミ",
              sexType: "FEMALE",
              committee: "MORALS",
              club: "MUSIC",
              parentName: "月岡 公介",
              parentNameKana: "ツキオカ コウスケ",
              address: "栃木県宇都宮市緑町1-1-1",
              tel: "090-5555-5555",
              mail: "tsukioka@example.com",
              birthday: "2007-11-06",
              discription: "",
            },
            {
              studentNumber: 202102250,
              name: "松沢 大地",
              nameKana: "マツサワ ダイチ",
              sexType: "MALE",
              committee: "ENVIRONMENTS",
              club: "BASEBALL",
              parentName: "松沢 文雄",
              parentNameKana: "マツサワ フミオ",
              address: "栃木県宇都宮市赤町4-4-4",
              tel: "090-6666-6666",
              mail: "matsusawa@example.com",
              birthday: "2008-02-25",
              discription: "",
            },
          ]
        },
      ],
    }
  },
  computed: {
    filteredItems () {
      return this.items;
    }
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