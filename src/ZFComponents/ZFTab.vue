<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:tab"]);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <li class="nav-item tab" role="presentation">
    <div
      class="nav-link"
      :class="{ active: props.active }"
      :id="props.id"
      :disabled="props.disabled"
      data-bs-toggle="tab"
      :data-bs-target="`#${props.id}-pane`"
      role="tab"
      :aria-controls="`${props.id}-pane`"
      aria-selected="true"
      @click="emit('update:tab')"
    >
      <slot></slot>
    </div>
  </li>
</template>

<style scoped lang="scss">
.nav-item {
  color: white !important;
  background-color: $primary-10;
  & :not([disabled="true"]) {
    background-color: $primary-10;
  }
  & [disabled="true"] {
    background-color: transparent;
  }
}
</style>
