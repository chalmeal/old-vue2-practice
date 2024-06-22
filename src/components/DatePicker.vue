<style scoped></style>

<template>
  <v-menu class="ma-0 pa-0" v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
    offset-y min-width="auto">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-model="date" @input="onInput" :class="classText" :label="label" persistent-placeholder
        :prepend-icon="prependIcon" :prepend-outer-icon="prependOuterIcon" :append-icon="appendIcon"
        :append-outer-icon="appendOuterIcon" :dense="dense" :hide-details="hideDetails" :error-messages="errorMessages"
        :disabled="disabled" :readonly="readonly" :hint="hint" :color="color" :persistent-hint="persistentHint"
        v-bind="attrs" v-on="on"></v-text-field>
    </template>
    <v-date-picker v-bind="$attrs" no-title :header-date-format="formatHeaderDate" :month-format="formatMonth"
      :weekday-format="formatWeekday" @input="onInput" :color="color" type="Month">
      <v-btn block small outlined @click="reset" v-if="canReset">
        未設定
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "date-picker",
  inheritAttrs: false,
  props: {
    label: { type: String },
    classText: { type: String },
    format: { type: String, default: "YYYY/MM" },
    prependIcon: { type: String, default: "" },
    prependOuterIcon: { type: String, default: "" },
    appendIcon: { type: String, default: "" },
    appendOuterIcon: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: true },
    hint: { type: String, default: "" },
    persistentHint: { type: Boolean, default: false },
    errorMessages: { type: Array },
    hideDetails: { type: String, default: "auto" },
    dense: { type: Boolean, default: false },
    value: { required: true },
    canReset: { type: Boolean, default: false },
    color: { type: String, defult: "primary" }
  },
  data () {
    return {
      menu: null,
      date: null,
    };
  },
  computed: {},
  mounted () {
    this.bindText(this.value);
  },
  watch: {
    value (v) {
      this.bindText(v);
    },
  },
  methods: {
    bindText (v) {
      if (this.readonly) {
        this.date = v ? dayjs(v).format(this.format) : null;
      } else {
        this.date = v;
      }
    },
    onInput (v) {
      this.$emit("input", v);
      this.menu = false;
    },
    formatHeaderDate (v) {
      const arr = v.split("-");
      if (arr.length == 1) {
        return arr[0] + "年";
      }
      const m =
        arr[1].substring(0, 1) === "0" ? arr[1].substring(1, 2) : arr[1];
      return arr[0] + "年" + m + "月";
    },
    formatMonth (v) {
      const m = v.substring(5, 7);
      return m.substring(0, 1) === "0" ? m.substring(1, 2) + "月" : m + "月";
    },
    formatWeekday (v) {
      const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
      return daysOfWeek[new Date(v).getDay(v)];
    },
    reset () {
      this.onInput(null);
    },
  },
};
</script>