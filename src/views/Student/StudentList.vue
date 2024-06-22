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
          </v-row>
        </div>
        <data-table class="my-2" fixed-header height="50vh" dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th>学生番号</th>
                <th>氏名</th>
                <th>氏名カナ</th>
                <th>性別</th>
                <th>学年</th>
                <th>クラス</th>
                <th>最終更新日</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="items.length == 0">
                <td colspan="8">現在の共有事項はありません</td>
              </tr>
              <tr v-for="item in filteredItems" :key="item.id" class="l-selectable" @click="select(item)">
                <td class="text-left l-text-sm-2">{{ item.studentNumber }}</td>
                <td class="text-left l-text-sm-2">{{ item.name }}</td>
                <td class="text-left l-text-sm-2">{{ item.nameKana }}</td>
                <td class="text-left l-text-sm-2">{{ item.sexType | sexType }}</td>
                <td class="text-left l-text-sm-2">{{ item.grade }}</td>
                <td class="text-left l-text-sm-2">{{ item.class }}</td>
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
export default {
  name: "student-list",
  mixins: [ViewBasic],
  components: {
  },
  data () {
    return {
      modal: {
        detail: false
      },
      item: null,
      selectedId: null,
      items: [
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
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
          birthday: "",
          discription: "",
          updateDate: "2023-03-01"
        },
      ],
    }
  },
  computed: {
    filteredItems () {
      var HitItems = [];
      for (var i in this.items) {
        var item = this.items[i];
        HitItems.push(item);
      }
      return HitItems;
    },
    selected () {
      return this.selectedId
        ? this.items.find((v) => v.id === this.selectedId)
        : null;
    },
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