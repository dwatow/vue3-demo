<script setup>
import { computed } from "vue";
const props = defineProps({
  id: {
    type: String,
    default: "zfaccordion",
  },
  items: {
    type: Array,
    required: true,
  },
  alwaysOpen: {
    type: Boolean,
    default: false,
  },
});

// const emptyStr = ref("");
const alwaysOpen = computed(() => {
  return props.alwaysOpen ? "" : `#${props.id}`;
});
</script>

<template>
  <div class="accordion accordion-flush" :id="props.id">
    <div
      class="accordion-item"
      v-for="(item, index) in props.items"
      :key="index"
    >
      <h2 class="accordion-header" id="`heading${index}`">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${index}`"
          aria-expanded="true"
          :aria-controls="`collapse${index}`"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="`collapse${index}`"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        :data-bs-parent="alwaysOpen"
      >
        <div class="accordion-body" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  button {
    font-size: 24px;
  }
  .accordion-body {
    font-size: 20px;
  }
  .accordion-button {
    border: none;
    box-shadow: none;
    &:focus {
      border: none;
    }
  }
}
</style>
