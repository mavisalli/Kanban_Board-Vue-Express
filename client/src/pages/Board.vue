<template>
  <div class="container-fluid">
    <div class="row" v-if="error == null">
      <div class="col-12 board-title">
        {{ board.result.title }}
      </div>
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
    <div class="row" v-else>
      <h3>404 Not Found</h3>
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
      error: null,
    };
  },
  components: {
    Tasklist,
  },
  async created() {
    try {
      const id = this.$route.params.id;
      this.board = (
        await axios.get(`http://localhost:3000/boards?board_id=${id}`)
      ).data;
    } catch (error) {
      this.error = error;
    }
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

h3 {
  color: red;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
</style>
