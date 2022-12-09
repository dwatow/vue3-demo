<script setup>
import { useAttrs } from "vue";

const prop = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["create", "delete"]);
const attrs = useAttrs();
console.log(attrs);
</script>

<template>
  <div class="list" v-if="items.length > 0">
    <div v-for="(item, index) in prop.items" :key="index">
      <slot :index="index" :item="item" />
      <button @click="emit('delete', index)">移除</button>
    </div>
  </div>
  <div class="message" v-else>(沒有資料)</div>
  <button @click="emit('create')">新增</button>
</template>

<style lang="scss">
.list {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
