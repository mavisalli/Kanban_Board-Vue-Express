<template>
  <div class="container-fluid">
    <div class="row" v-if="error == null">
      <div class="col-12 board-title">
        {{ board.result.title }}
      </div>

      <div class="form">
        <label>Card Title :</label>
        <input type="input" v-model="new_card.title" placeholder=" required" />

        <label>Card Text :</label>
        <input
          type="input"
          v-model="new_card.description"
          placeholder=" required"
        />

        <button @click="createNewCard" class="button">Add Card</button>
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
      new_card: {
        title: "",
        description: "",
      },
    };
  },
  components: {
    Tasklist,
  },
  async created() {
    try {
      const slug = this.$route.params.slug;
      this.board = (await axios.get(`boards?board_title=${slug}/`)).data;
    } catch (error) {
      this.error = error;
    }
  },

  methods: {
    createNewCard() {
      axios
        .post("cards/", {
          title: this.new_card.title,
          description: this.new_card.description,
          column_id: this.board.result.columns[0]._id,
        })
        .then((res) => {
          const newCard = res.data;

          this.board.result.columns[0].cards.push(newCard.card);
          this.new_card.title = "";
          this.new_card.description = "";
        });
    },
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
  margin-top: -90px;
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

input {
  width: 20%;
  padding: 5px 10px;
  margin: 2px 10px;
  border: solid 1px;
  background-color: rgb(30, 31, 30);
  color: aliceblue;
}

.button {
  background-color: #e67e22;
  border: none;
  color: white;
  width: 10%;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

label {
  color: #6e6b69;
  font-size: 20px;
  font-weight: 600;
  margin-top: 3px;
}

.form {
  display: flex;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 50px;
}
</style>
