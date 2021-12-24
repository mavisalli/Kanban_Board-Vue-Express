<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    //save visited pages to localstorage
    const path = this.$route.path;
    const backlistPaths = ["/"];

    if (backlistPaths.includes(path)) return;

    const paths = JSON.parse(localStorage.getItem("paths")) || [];

    paths.push(path);

    localStorage.setItem("paths", JSON.stringify(paths));
  },
};
</script>

<style></style>
