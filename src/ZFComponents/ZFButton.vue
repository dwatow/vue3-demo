<script setup>
import { ref } from 'vue';
import { Button } from 'bootstrap';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  countSec: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['click'])

let isCounting = ref(false);
let sec = ref(props.countSec);

function counter() {
  if (sec.value > 0) {
    // isCounting = true
    sec.value -= 1;
    setTimeout(counter, 1000)
  } else {
    sec.value = props.countSec
    isCounting.value = false;
  }
}

function onClick(e) {
  isCounting.value = true;
  emit('click', e);
  counter();
}

</script>

<template>
  <button class="btn rounded-pill" :style="{ minWidth: '3.5em' }" type="button" :class="`btn-${variant}`" @click="onClick">
    <div class="d-flex justify-content-center" >
      <div class="position-absolute" :class="{hiden: !isCounting}">{{ sec+1 }}s</div>
      <div :class="{hiden: isCounting}">
        <slot>按我</slot>
      </div>
    </div>
  </button>
</template>

<style scoped lang="scss">
.hiden {
  opacity: 0;
}
</style>