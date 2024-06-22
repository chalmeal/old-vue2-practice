<template>
  <v-container>
    <v-row dense>
      <v-col>
        <v-card width="75vw" class="mx-auto mt-5" outlined>
          <v-card-title class="pa-1 pl-2 caption teal darken-1 grey--text text--lighten-3">学生管理システム</v-card-title>
          <v-card-text class="l-message-box mt-3">
            <div>本システムでは学生情報を取り扱います。</div>
            <div>学生マスタ情報の管理及び成績管理等を行います。</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card class="ma-2" outlined>
          <v-card-title>成績</v-card-title>
          <v-card-text class="l-message-box">
            学生の成績を確認します。
          </v-card-text>
          <v-card-actions>
            <v-btn class="mt-2" color="teal darken-1" outlined block small to="/result">成績へ</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="ma-2" outlined>
          <v-card-title>学生マスタ</v-card-title>
          <v-card-text class="l-message-box">
            学生マスタを一元管理します。
          </v-card-text>
          <v-card-actions>
            <v-btn class="mt-2" color="teal darken-1" outlined block small to="/student">学生マスタへ</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6">
        <v-card class="ma-2" outlined>
          <v-card-title>新規登録</v-card-title>
          <v-card-text class="l-message-box">
            成績及び学生情報の新規登録を行います。
          </v-card-text>
          <v-card-actions>
            <v-btn class="mt-2" color="teal darken-1" outlined block small to="/register">新規登録へ</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="ma-2" outlined>
          <v-card-title>設定</v-card-title>
          <v-card-text class="l-message-box">
            各種設定及びその他項目の確認等を行います。
          </v-card-text>
          <v-card-actions>
            <v-btn class="mt-2" color="teal darken-1" outlined block small to="/system">設定へ</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";

export default {
  name: 'home',
  mixins: [ViewBasic],
  components: {
  },
}
</script>
