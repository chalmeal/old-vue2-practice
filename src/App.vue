<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-app-bar class="l-no-print-area" app color="teal darken-1" dark height="50">
      <v-col cols="2">
        <v-toolbar-title class="l-selectable-hidden" @click="clickHome">学生管理システム</v-toolbar-title>
      </v-col>
      <v-tabs>
        <v-tab to="/home">ホーム</v-tab>
        <v-tab to="/result">成績</v-tab>
        <v-tab to="/student">学生マスタ</v-tab>
        <v-tab to="/register">新規登録</v-tab>
        <v-tab to="/system">設定</v-tab>
      </v-tabs>
      <v-btn fab small color="teal darken-1">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="d-flex">
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
export default {
  name: 'App',
  mixins: [ViewBasic],
  data () {
    return {
    }
  }, methods: {
    clickHome () {
      this.$router.push('/home')
    }
  }
};
</script>
