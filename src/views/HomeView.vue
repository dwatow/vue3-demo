<script setup>
import { ref, computed } from "vue";
import { useActionItemStore } from "@/stores/actionItem";
import actionList from "@/components/actionList.vue";
import actionItemForm from "@/components/actionItemForm.vue";

const actionItemStore = useActionItemStore();
const listStatus = ref("opened");

const items = computed(() =>
  actionItemStore.actionItems.filter((item) => item.status === listStatus.value)
);

const statusTotal = computed(() => [
  actionItemStore.actionItems.filter((item) => item.status === "opened").length,
  actionItemStore.actionItems.filter((item) => item.status === "processing")
    .length,
  actionItemStore.actionItems.filter((item) => item.status === "closed").length,
  actionItemStore.actionItems.length,
]);

const enumStatus = {
  opened: 0,
  processing: 1,
  closed: 2,
  all: 3,
};
</script>

<template>
  <h1>待辦</h1>
  <pre>{{ listStatus }}</pre>
  <select id="select-list-staus" v-model="listStatus">
    <option value="opened" default>
      已開立 ({{ statusTotal[enumStatus["opened"]] }})
    </option>
    <option value="processing">
      已受理 ({{ statusTotal[enumStatus["processing"]] }})
    </option>
    <option value="closed">
      已完成 ({{ statusTotal[enumStatus["closed"]] }})
    </option>
    <option value="all">全部 ({{ statusTotal[enumStatus["all"]] }})</option>
  </select>

  <pre>items:{{ items }}</pre>
  <actionList
    :items="items"
    v-slot="{ index, item }"
    @create="actionItemStore.createItem({ status: 'opened' })"
    @delete="actionItemStore.deleteItem(index)"
  >
    <actionItemForm
      :value="item"
      @update:name="actionItemStore.updateItem(index, $event)"
      @update:description="actionItemStore.updateItem(index, $event)"
      @update:status="actionItemStore.updateItem(index, $event)"
    ></actionItemForm>
  </actionList>
  <!-- <div v-for="(item, index) in items" :key="index">
    <button @click="actionItemStore.deleteItem(index)">移除</button>
  </div>
  <button @click="actionItemStore.createItem({ status: 'opened' })">
    新增
  </button> -->
</template>
