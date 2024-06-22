<template>
  <v-card v-if="register" outlined>
    <v-card-title>
      <v-col class="caption" cols="11">
        プレビュー - 【{{ register.yearMonth }}_{{ register.grade }}-{{ register.class }}_{{ register.subject | subjectType }}】
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
          <data-table class="my-2" fixed-header height="60vh" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>氏名</th>
                  <th>性別</th>
                  <th>点数</th>
                  <th>順位</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="filteredItems == 0">
                  <td colspan="8">対象が存在しません</td>
                </tr>
                <tr v-for="item in filteredItems" :key="item.studentNumber" class="l-selectable">
                  <td class="text-left l-text-sm-2">{{ item.studentName }}</td>
                  <td class="text-left l-text-sm-2">{{ item.sexType | sexType }}</td>
                  <td class="text-left l-text-sm-2">{{ item.point }}</td>
                  <td class="text-left l-text-sm-2">{{ item.rank }}</td>
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
  name: 'result-register-preview',
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
      return this.register.content
    }
  },
}
</script>