<script setup>
import { onMounted, ref } from "vue";
import ZFTest from "@/ZFComponents/ZFTest.vue";
import ZFButton from "@/ZFComponents/ZFButton.vue";
import ZFButtonGroup from "@/ZFComponents/ZFButtonGroup.vue";
import ZFInput from "@/ZFComponents/ZFInput.vue";
import ZFTabs from "@/ZFComponents/ZFTabs.vue";
import ZFTimeline from "@/ZFComponents/ZFTimeline.vue";
import ZFCard from "@/ZFComponents/ZFCard.vue";

const log = console.log;
const stringValue = ref("");
const tabs = [
  {
    label: "home",
    content: {
      value: "this is value",
    },
  },
  { label: "profile", content: "this is profile" },
  { label: "contact", content: "this is contact" },
  { label: "disabled", content: "this is disabled", disabled: true },
];

const chris = ref(null);
onMounted(() => {
  console.log("chris", chris.value);
});
</script>

<template>
  <h1>展示台</h1>
  <div v-if="false">
    <pre>stringValue: {{ stringValue }}</pre>
    <h1>Test</h1>
    <ZFTest
      :chris="'chris'"
      :label="`sdfa`"
      v-model="stringValue"
      @change="log"
      ref="chris"
    >
      <span>n</span>
    </ZFTest>
  </div>

  <h2 class="color-test">Head Title</h2>
  <h1>Headline 1<small>subtitle</small></h1>
  <h2>Headline 2<small>subtitle</small></h2>
  <h3>Headline 3<small>subtitle</small></h3>
  <h4>Headline 4<small>subtitle</small></h4>
  <div class="h1">Headline 1<span class="subtitle">subtitle</span></div>
  <div class="h2">Headline 2<span class="subtitle">subtitle</span></div>
  <div class="h3">Headline 3<span class="subtitle">subtitle</span></div>
  <div class="h4">Headline 4<span class="subtitle">subtitle</span></div>

  <h2 class="color-test">1. Buttons</h2>
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
  <h2>2. notify bar</h2>
  <h2>3. box-flow</h2>
  <h2>4. Accordion 手風琴</h2>
  <h2>5. NavBar</h2>
  <h2>6. Modal</h2>
  <h2>7. Graph 圖表</h2>
  <h2>8. button group</h2>
  <ZFButtonGroup>
    <ZFButton variant="outline-primary" @click="log">開始交易</ZFButton>
    <ZFButton variant="outline-primary" @click="log">primary</ZFButton>
    <ZFButton variant="outline-secondary" @click="log">secondary</ZFButton>
    <ZFButton variant="outline-error" @click="log">error</ZFButton>
    <ZFButton variant="outline-support" @click="log">support</ZFButton>
    <ZFButton variant="outline-text" @click="log">text</ZFButton>
  </ZFButtonGroup>
  <h2>9. Tabs</h2>
  <ZFTabs :tabs="tabs" v-slot="{ content }">
    <div>there is {{ content }}</div>
  </ZFTabs>
  <h2>10. Input</h2>
  <pre>stringValue: {{ stringValue }}</pre>
  <ZFInput v-model="stringValue"></ZFInput>
  <ZFInput v-model="stringValue" :status="false"></ZFInput>
  <ZFInput v-model="stringValue" :status="true"></ZFInput>
  <ZFInput v-model="stringValue" disabled></ZFInput>
  <h2>11. title-box</h2>
  <h2>12. 直式表格</h2>
  <h2>13. 下拉 Dropdowns</h2>
  <h2>14. 倒數計時器</h2>
  <h2>16. Message-box</h2>
  <h2>17. KYC 流程圖</h2>
  <h2>18. 上傳圖片 UploadImg</h2>
  <h2>15. Checkbox</h2>
  <h2>19. Radio</h2>
  <h2>20. Toggle</h2>
  <h2>21. alert</h2>
  <h2>22. 巢狀表格</h2>
  <h2>23. Calendar</h2>
  <h2>18. Pagination</h2>
  <h2>19. Card</h2>
  <ZFCard
    img-src="https://picsum.photos/seed/picsum/288"
    title="title"
    content="content"
    ok-text="ok"
  ></ZFCard>
  <h2>20. Scroll-top</h2>
  <h2>21. Timeline</h2>
  <ZFTimeline></ZFTimeline>
</template>

<style lang="scss">
@import "../scss/all.scss";
.color-test {
  color: $primary-50;
}
</style>
