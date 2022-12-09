import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useActionItemStore = defineStore("actionItem", () => {
  const list = ref([
    {
      name: "chris",
      description: "this is chris",
      status: "opened",
    },
  ]);
  const actionItems = computed(() => list.value);
  function updateItem(index, item) {
    list.value[index] = item;
  }
  function createItem(item) {
    console.log(item);
    list.value.push(item);
  }
  function deleteItem(index) {
    // delete list.value[index];
    list.value.splice(index, 1);
  }
  return { actionItems, updateItem, createItem, deleteItem };
});
