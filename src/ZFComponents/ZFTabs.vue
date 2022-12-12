<script setup>
import { computed, ref } from "vue";
import ZFTab from "./ZFTab.vue";
const props = defineProps({
  tabs: {
    type: Array,
    default: () => [
      {
        label: "Home",
        content: "this is Home",
        disabled: false,
      },
    ],
  },
});

const currentTab = ref(props.tabs[0]);
const currentLabel = computed(() => {
  return currentTab.value.label;
});
const currentContent = computed(() => {
  return currentTab.value.content;
});

function onChangeTab(tab) {
  if (tab.disabled === true) return;
  currentTab.value = tab;
}
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="shadow">
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
      <ZFTab
        v-for="(tab, index) in props.tabs"
        :id="`${tab.label}-tab`"
        :active="tab.label === currentLabel"
        :key="index"
        :disabled="tab.disabled"
        @update:tab="onChangeTab(tab)"
        >{{ tab.label }}</ZFTab
      >
    </ul>
    <div class="tab-content p-3">
      <div
        class="tab-pane fade"
        :class="{
          active: currentTab.label === currentLabel,
          show: currentTab.label === currentLabel,
        }"
        :id="`${currentTab}-pane`"
        role="tabpanel"
        :aria-labelledby="`${currentTab}`"
        tabindex="0"
      >
        <slot :content="currentContent">{{ currentContent }}</slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
