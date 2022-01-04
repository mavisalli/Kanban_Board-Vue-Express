<template>
  <div class="tasklist-item" :class="title.toLowerCase().replace(' ', '-')">
    <h3 class="tasklist-item-title">
      {{ title }}
    </h3>
    <draggable
      class="list-group"
      :list="items"
      group="cards"
      @change="changed(column_id, $event)"
    >
      <card v-for="item in items" :key="item._id" :data="item" />
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import Card from "./Card.vue";
import axios from "axios";

export default {
  props: ["items", "title", "column_id"],
  components: {
    Card,
    draggable,
  },
  methods: {
    changed: function (column_id, evt) {
      if (!evt) return;
      if (evt.added) {
        let card_id = evt.added.element._id;
        axios.post("/api/addToColumn", { card_id, column_id }).then((res) => {
          console.log(res.data);
        });
      } else if (evt.removed) {
        let card_id = evt.removed.element._id;
        axios
          .post("/api/removeFromColumn", {
            card_id,
            column_id,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else if (evt.moved) {
        const cards = this.items.map((item) => ({
          _id: item._id,
        }));
        console.log(cards);
        axios
          .post("/api/updateCardOrder", {
            column_id,
            cards,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    },
  },
  async created() {
    await this.changed();
  },
};
</script>

<style scoped>
.backlog .card-item {
  background-color: gray;
}

.to-do .card-item {
  background-color: #d93535;
}

.in-progress .card-item {
  background-color: orange;
}

.done .card-item {
  background-color: rgb(33, 131, 33);
}

.tasklist-item {
  background: #262626;
  border-radius: 16px;
  padding: 24px;
}

.tasklist-item .tasklist-item-title {
  font-weight: 700;
  font-size: 37px;
  padding: 24px 24px 16px 24px;
  margin: 16px 0px;
  color: #ffffff;
}
</style>
