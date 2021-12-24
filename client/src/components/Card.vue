<template>
  <div class="card-item">
    <h3 class="item-title">{{ data.title }}</h3>
    <p class="item-description">{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
.card-item {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 24px;
  margin: 16px;
}

.card-item .item-title {
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}

.card-item .item-description {
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
}
</style>
