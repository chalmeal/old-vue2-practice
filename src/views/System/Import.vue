<template>
  <v-row dense>
    <v-col cols="4">
      <v-card class="ma-2" offset="1" outlined width="30vw">
        <v-card-title class="l-text-sm-1">成績情報取込</v-card-title>
        <v-card-text class="l-text-sm-2 l-message-box">
          <div>成績情報をCSVファイルから取り込みます。</div>
          <div>運用マニュアル「取込方法」を参照してください。</div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mt-2 white--text" color="brown darken-1" block small>成績情報を取り込む</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="ma-2" offset="1" outlined width="30vw">
        <v-card-title class="l-text-sm-1">学生情報取込</v-card-title>
        <v-card-text class="l-text-sm-2 l-message-box">
          <div>学生情報をCSVファイルから取り込みます。</div>
          <div>運用マニュアル「取込方法」を参照してください。</div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mt-2 white--text" color="brown darken-1" block small>学生情報を取り込む</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import { } from "@/types";


export default {
  name: 'import',
  mixins: [ViewBasic],
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
