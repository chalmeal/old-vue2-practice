<template>
  <div>
    <v-tabs color="teal darken-1">
      <v-tab class="mx-4" href="#result">成績登録</v-tab>
      <v-tab href="#student">学生登録</v-tab>
      <v-tab-item value="result" transition="no">
        <ResultRegister />
      </v-tab-item>
      <v-tab-item value="student" transition="no">
        <StudentRegister />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import ResultRegister from "@/views/Register/ResultRegisterList.vue"
import StudentRegister from "@/views/Register/StudentRegisterList.vue"

export default {
  name: 'register',
  mixins: [ViewBasic],
  components: {
    ResultRegister, StudentRegister
  },
}
</script>
