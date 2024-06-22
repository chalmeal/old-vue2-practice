<template>
  <v-card class="ma-2" height="78vh" max-width="15vw" outlined>
    <v-list rounded>
      <v-list-item-group v-model="selectedSubject" color="teal darken-2" :items="subject">
        <v-list-item v-for="item in subject" :key="item.text" @click="select(item.value)">
          <v-list-item-content>
            <v-list-item-title class="l-text-sm-1 text-center">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "result-menu",
  props: [
    "subject"
  ],
  data () {
    return {
      selectedSubject: 0
    }
  },
  computed: {
  },
  mounted () { },
  methods: {
    select (v) {
      this.$emit("select", v);
    }
  }
}
</script>