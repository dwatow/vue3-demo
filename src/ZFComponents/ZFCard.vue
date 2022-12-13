<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  okText: {
    type: String,
    default: "ok",
  },
});
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="props.imgSrc" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
      <p class="card-text">
        {{ props.content }}
      </p>
      <a href="#" class="btn btn-primary">{{ props.okText }}</a>
    </div>
  </div>
</template>
