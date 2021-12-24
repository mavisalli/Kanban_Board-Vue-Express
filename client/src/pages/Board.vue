<template>
  <div class="container-fluid">
    <div class="row" v-if="board.result.columns.length">
      <div class="col-12 board-title">
        {{ board.result.title }}
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-3"
        v-for="(item, index) in board.result.columns"
        :key="index"
      >
        <Tasklist
          :items="item.cards"
          :title="item.name"
          :column_id="item._id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tasklist from "../components/Tasklist";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      board: {
        result: {
          title: null,
          columns: [],
        },
      },
    };
  },
  components: {
    Tasklist,
  },
  async created() {
    const id = this.$route.params.id;

    this.board = (
      await axios.get(`http://localhost:3000/boards?board_id=${id}`)
    ).data;
  },
};
</script>

<style scoped>
.board-title {
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  padding-bottom: 20px;
}

.col-12 {
  margin-bottom: 15px;
}
</style>
