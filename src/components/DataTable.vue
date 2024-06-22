<style scoped>

</style>

<template>
  <v-simple-table v-bind="$attrs">
    <template v-slot:wrapper>
      <div class="v-data-table__wrapper" :style="styles" @scroll="onScroll">
        <table>
          <slot></slot>
        </table>
      </div>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "data-table",
  inheritAttrs: false,
  props: {
    height: [Number, String],
    width: [Number, String]
  },
  computed: {
    styles () {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
  mounted () { },
  methods: {
    onScroll (e) {
      if (e.target.scrollHeight <= e.target.scrollTop + e.target.offsetHeight) {
        this.$emit("bottom");
      }
    },
  },
};
</script>