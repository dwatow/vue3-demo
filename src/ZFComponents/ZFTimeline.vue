<script setup>
import { computed } from "vue";
import { ref } from "vue";
const rawData = ref([
  {
    year: 2017,
    content: {
      title: "2017 Q3",
      content: "開始提供虛擬貨幣買賣交易",
    },
  },
  {
    year: 2020,
    content: {
      title: "2020 Q2",
      content: "正式推出 ZomFast 桑速品牌",
    },
  },
  {
    year: 2021,
    content: {
      title: "2021 Q1",
      content: "成為幣安現金面交的認證商家",
    },
  },
  {
    year: 2021,
    content: {
      title: "2021 Q2",
      content: "成為 Kikitrade 獨家的法幣交換渠道",
    },
  },
  {
    year: 2022,
    content: {
      title: "2022 Q1",
      content: "完成金管會洗錢防制法令遵循聲明",
    },
  },
]);

const data = computed(() => {
  return rawData.value
    .map((item, index) => ({
      ...item,
      index,
    }))
    .reduce((m, item) => {
      if (m[item.year] == null) {
        m[item.year] = [item];
      } else {
        m[item.year].push(item);
      }
      return m;
    }, {});
});
</script>
<template>
  <div class="timeline">
    <div class="line"></div>
    <!-- <pre>{{ data }}</pre> -->
    <div class="timeline-container">
      <div class="year" v-for="(items, year) in data" :key="year">
        <div class="year-title">
          {{ year }}
        </div>
        <div
          class="year-content"
          :class="{ left: index % 2 === 0, right: index % 2 === 1 }"
          v-for="{ content, year, index } in items"
          :key="year"
        >
          <div class="year-content-dot"></div>
          <h4>{{ content.title }}</h4>
          <p>{{ content.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timeline {
  position: relative;
  .line {
    position: absolute;
    top: -20px;
    bottom: 0;
    width: 2px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: $primary;
  }
}

.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.year {
  &-title {
    background-color: $primary;
    border-radius: 34px;
    color: white;
    padding: 10px 20px;
    width: 82px;
    margin: auto;
    position: relative;
    z-index: 10;
  }
  &-content {
    width: 200px;
    &.left {
      transform: translateX(math.div(259, 200) * 100%);
      .year-content-dot {
        left: calc(-80% - 3px);
        &::before {
          content: "";
          display: block;
          height: 2px;
          position: absolute;
          left: 0;
          top: 3px;
          width: #{math.div(259px, 2)};
          background-color: $secondary;
        }
      }
    }
    &.right {
      transform: translateX(math.div(-259, 200) * 100%);
      .year-content-dot {
        right: calc(-80% - 3px);
        &::before {
          content: "";
          display: block;
          height: 2px;
          position: absolute;
          right: 0;
          top: 3px;
          width: #{math.div(259px, 2)};
          background-color: $secondary;
        }
      }
    }

    position: relative;
    &-dot {
      background-color: $secondary;
      border-radius: 1000px;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    h4 {
      font-family: $font-family-montserrat;
      color: #00239c;
      font-size: 24px;
      font-weight: bold;
    }
    p {
      font-family: $font-family-sans-serif;
      font-style: normal;
      font-size: 20px;
      color: $text-80;
    }
    line-height: 1.8;
    letter-spacing: 0.05em;
  }
}
</style>
