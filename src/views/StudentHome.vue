<template>
  <div>
    <StudentList />
  </div>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import StudentList from "@/views/Student/StudentList.vue";
import StudentRegister from "@/views/Register/StudentRegisterList.vue"

export default {
  name: 'student',
  mixins: [ViewBasic],
  components: {
    StudentList, StudentRegister
  },
}
</script>
