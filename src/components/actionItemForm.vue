<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    value: Object,
    required: true,
  },
});

const defaultItem = {
  status: "opened",
};

const item = computed(() => {
  return {
    ...defaultItem,
    ...props.value,
  };
});
</script>

<template>
  <div class="item">
    <div>
      <div><label for="input-name">name</label></div>
      <input
        id="input-name"
        type="text"
        :value="item.name"
        @input="
          $emit('update:name', {
            ...item,
            name: $event.target.value,
          })
        "
      />
    </div>
    <div>
      <div><label for="input-descript">descript</label></div>
      <input
        id="input-descript"
        type="text"
        :value="item.description"
        @input="
          $emit('update:description', {
            ...item,
            description: $event.target.value,
          })
        "
      />
    </div>
    <div>
      <div><label for="select-status">status</label></div>
      <select
        id="select-status"
        :value="item.status"
        @input="
          $emit('update:status', {
            ...item,
            status: $event.target.value,
          })
        "
      >
        <option value="opened" default>已開立</option>
        <option value="processing">已受理</option>
        <option value="closed">已完成</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss">
.item {
  border: solid black 1px;
  width: fit-content;
  padding: 5px;
}
</style>
