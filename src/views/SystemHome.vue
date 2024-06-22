<template>
  <div>
    <v-tabs color="teal darken-1">
      <v-tab class="mx-4" href="#import">情報取込</v-tab>
      <v-tab href="#export">情報出力</v-tab>
      <v-tab-item value="import" transition="no">
        <Import />
      </v-tab-item>
      <v-tab-item value="export" transition="no">
        <Export />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import ViewBasic from "@/views/mixins/mixin.js";
import Import from "@/views/System/Import.vue"
import Export from "@/views/System/Export.vue"

export default {
  name: 'register',
  mixins: [ViewBasic],
  components: {
    Import, Export
  },
}
</script>