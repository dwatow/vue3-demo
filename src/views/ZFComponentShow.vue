<script setup>
import { ref } from "vue";
import ZFButton from "@/ZFComponents/ZFButton.vue";
import ZFInput from "@/ZFComponents/ZFInput.vue";

const log = console.log;
const stringValue = ref("");
</script>

<template>
  <h1>展示台</h1>
  <h2 class="abcde">Head Title</h2>
  <h1>Headline 1<small>subtitle</small></h1>
  <h2>Headline 2<small>subtitle</small></h2>
  <h3>Headline 3<small>subtitle</small></h3>
  <h4>Headline 4<small>subtitle</small></h4>
  <div class="h1">Headline 1<span class="subtitle">subtitle</span></div>
  <div class="h2">Headline 2<span class="subtitle">subtitle</span></div>
  <div class="h3">Headline 3<span class="subtitle">subtitle</span></div>
  <div class="h4">Headline 4<span class="subtitle">subtitle</span></div>

  <h2 class="abcde">Buttons</h2>

  <h3>實心樣式</h3>
  <ZFButton variant="primary" @click="log">開始交易</ZFButton>
  <ZFButton variant="primary" @click="log">primary</ZFButton>
  <ZFButton variant="secondary" @click="log">secondary</ZFButton>
  <ZFButton variant="error" @click="log">error</ZFButton>
  <ZFButton variant="support" @click="log">support</ZFButton>
  <ZFButton variant="text" @click="log">text</ZFButton>
  <h3>outline樣式</h3>
  <ZFButton variant="outline-primary" @click="log">開始交易</ZFButton>
  <ZFButton variant="outline-primary" @click="log">primary</ZFButton>
  <ZFButton variant="outline-secondary" @click="log">secondary</ZFButton>
  <ZFButton variant="outline-error" @click="log">error</ZFButton>
  <ZFButton variant="outline-support" @click="log">support</ZFButton>
  <ZFButton variant="outline-text" @click="log">text</ZFButton>
  <h3>倒數計時</h3>
  <ZFButton variant="support" :countSec="5" @click="log">點我計時</ZFButton>
  <h2>Input</h2>
  <ZFInput v-model="stringValue"></ZFInput>
  <ZFInput v-model="stringValue" :status="false"></ZFInput>
  <ZFInput v-model="stringValue" :status="true"></ZFInput>
  <ZFInput v-model="stringValue" disabled></ZFInput>
</template>

<style lang="scss">
@import "../scss/all.scss";
.abcde {
  color: $primary-50;
}
</style>
