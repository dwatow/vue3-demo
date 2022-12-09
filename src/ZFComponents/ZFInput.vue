<script setup>
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "primary",
  },
  label: {
    type: String,
    default: "Label",
  },
  status: {
    type: [Boolean, null],
    default: null,
  },
  validFeedback: {
    type: String,
    default: "entry good value",
  },
  invalidFeedback: {
    type: String,
    default: "invalid message",
  },
  description: {
    type: String,
    default: "description content",
  },
  placeholder: {
    type: String,
    default: "user input",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tabindex: {
    type: Number,
    default: -1,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
function onUpdateValue(e) {
  emit("update:modelValue", e.target.value.trim);
}
</script>

<template>
  <div
    :id="props.id"
    role="group"
    aria-invalid="true"
    class="form-group is-invalid"
  >
    <span
      v-if="status === false"
      :tabindex="props.tabindex"
      :id="`${props.id}__BV_feedback_invalid_`"
      aria-live="assertive"
      aria-atomic="true"
      class="d-block invalid-feedback feedback-message"
    >
      {{ props.invalidFeedback }}
    </span>
    <span
      v-if="status === true"
      :tabindex="props.tabindex"
      :id="`${props.id}__BV_feedback_valid_`"
      aria-live="assertive"
      aria-atomic="true"
      class="d-block valid-feedback feedback-message"
    >
      {{ props.validFeedback }}
    </span>
    <label
      :id="`${props.id}__BV_label_`"
      :for="`input-${props.id}`"
      class="d-block"
      >{{ props.label }}</label
    >
    <div>
      <input
        :id="`input-${props.id}`"
        type="text"
        :disabled="props.disabled"
        aria-invalid="true"
        class="form-control"
        :class="{
          'is-invalid': props.status === false,
          'is-valid': props.status === true,
        }"
        :aria-describedby="`${props.id}__BV_description_ ${props.id}__BV_feedback_invalid_`"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @update:modelValue="onUpdateValue"
      />
      <div
        :tabindex="props.tabindex"
        :id="`${props.id}__BV_description_`"
        class="form-text text-muted text-end"
      >
        {{ props.description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback-message {
  float: right !important;
  width: fit-content !important;
}

.form-group {
  margin: 16px 0;
  font-family: $font-family-sans-serif;
  label {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.1em;
    margin: 8px 0;
  }
  input {
    margin: 4px 0;
    font-family: $font-family-montserrat;
  }
}
</style>
