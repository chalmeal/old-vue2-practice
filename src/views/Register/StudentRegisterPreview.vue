<style lang="scss" scoped>
td {
  white-space: nowrap;
}

th {
  white-space: nowrap;
}
</style>

<template>
  <v-card v-if="register" outlined>
    <v-card-title>
      <v-col class="caption" cols="11">
        プレビュー - 【{{ register.year }}_{{ register.grade }}-{{ register.class }}】
      </v-col>
      <v-col cols="1">
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item dense>
              <v-list-item-title>編集</v-list-item-title>
            </v-list-item>
            <v-list-item dense>
              <v-list-item-title>削除</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col>
          <data-table class="my-2 l-scroll" fixed-header height="60vh" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>氏名</th>
                  <th>氏名カナ</th>
                  <th>性別</th>
                  <th>生年月日</th>
                  <th>委員会</th>
                  <th>部活動</th>
                  <th>保護者氏名</th>
                  <th>保護者氏名カナ</th>
                  <th>住所</th>
                  <th>電話番号</th>
                  <th>メールアドレス</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="filteredItems == 0">
                  <td colspan="8">対象が存在しません</td>
                </tr>
                <tr v-for="item in filteredItems" :key="item.studentNumber" class="l-selectable">
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.name }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.nameKana }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.sexType | sexType }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.birthday }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.committee | committeeType }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.club | clubType }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.parentName }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.parentNameKana }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.address }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.tel }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.mail }}</td>
                  <td class="text-left l-text-sm-2 l-table-pre">{{ item.discription }}</td>
                </tr>
              </tbody>
            </template>
          </data-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";

export default {
  name: 'student-register-preview',
  mixins: [ViewBasic],
  props: {
    register: { type: Object }
  },
  data () {
    return {
      items: null
    }
  },
  computed: {
    filteredItems () {
      return this.register.students
    }
  },
}
</script>