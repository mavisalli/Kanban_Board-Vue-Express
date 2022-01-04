<template>
  <div>
    <h2>
      You can see the sample board by typing <span>Kanban Project</span> in the
      Board Name field.
    </h2>
    <div class="form">
      <label>Board Name</label>
      <input type="text" v-model="search" />

      <button class="button" @click="goRegisteredBoard">Go</button>
    </div>

    <div class="form">
      <label>New Board Name</label>
      <input type="text" v-model="new_board.title" />
      <button class="button" @click="createNewBoard">Create Your Board</button>
    </div>

    <hr />

    <h3>Your History Pages</h3>

    <ol>
      <li v-for="(path, index) in paths" :key="index">
        {{ path }}
      </li>
    </ol>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      paths: [],
      new_board: {
        title: "",
      },
      search: "",
    };
  },
  created() {
    this.paths = JSON.parse(localStorage.getItem("paths")) || [];
  },
  methods: {
    createNewBoard() {
      let title = this.new_board.title;
      axios
        .post("/api/boards", {
          title,
        })
        .then((res) => {
          this.$router.push(`${res.data.board.slug}`);
        });
    },
    goRegisteredBoard() {
      let search = this.search.toLowerCase().replace(" ", "-");
      this.$router.push(`${search}`);
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 25px;
  color: #ffffff;
  text-align: center;
}

span {
  color: orange;
}

h4 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
}

p {
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}

h2 {
  margin-top: -10px;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
}

li {
  color: orange;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
}

.form {
  display: flex;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 30px;
}
.button {
  background-color: #e67e22;

  border: none;

  color: white;

  padding: 15px 32px;

  text-align: center;

  display: inline-block;

  font-size: 20px;

  margin: 4px 2px;

  cursor: pointer;
}

label {
  color: #6e6b69;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 700;
}

input {
  width: 30%;
  color: black;
  font-size: 20px;

  padding: 10px 20px;

  margin: 5px 10px;

  box-sizing: border-box;
}

span {
  color: #e67e22;
}
</style>
