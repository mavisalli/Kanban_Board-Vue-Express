<template>
  <div>
    <h3>
      Hello, you can go to the board I created by typing
      <span>http://localhost:8080/61c5bbd43f049ea09ee4bd0c</span> in the url.
    </h3>
    <h4>You can find other boards below:</h4>

    <p>/61c606812d17de9e1a1aa34e</p>
    <p>/61c608132d17de9e1a1aa36a</p>

    <hr />

    <h2>Your History Pages</h2>
    <ol>
      <li v-for="(path, index) in paths" :key="index">
        {{ path }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paths: [],
    };
  },
  created() {
    this.paths = JSON.parse(localStorage.getItem("paths")) || [];
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
</style>
