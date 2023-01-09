<template>
  <div class="card-header border-0">
    <h3 class="card-title fw-bolder text-dark">团队成员</h3>
  </div>

  <div class="card-body pt-2">
    <template v-for="(item, index) in list" :key="index">
      <!--begin::Item-->
      <div
        :class="{ 'mb-7': list.length - 1 !== index }"
        class="d-flex align-items-center"
      >
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <img :src="item.avatar" class="" alt="" />
        </div>
        <!--end::Avatar-->

        <!--begin::Text-->
        <div class="flex-grow-1">
          <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{
            item.name
          }}</a>

          <span class="text-muted d-block fw-bold">{{ item.description }}</span>
        </div>
        <!--end::Text-->
      </div>
      <!--end::Item-->
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-authors",
  components: {},
  setup() {
    const list = ref([
      {
        avatar: "media/avatars/300-6.jpg",
        name: "祝安娜",
        description: "项目经理",
      },
      {
        avatar: "media/avatars/300-5.jpg",
        name: "邢江",
        description: "网络工程",
      },
      {
        avatar: "media/avatars/300-11.jpg",
        name: "左飞",
        description: "地理测绘",
      },
      {
        avatar: "media/avatars/300-23.jpg",
        name: "周先平",
        description: "地理测绘",
      },
      {
        avatar: "media/avatars/300-10.jpg",
        name: "赵达英",
        description: "数据管理",
      },
      {
        avatar: "media/avatars/300-9.jpg",
        name: "周华山",
        description: "数据分析",
      },
      {
        avatar: "media/avatars/300-12.jpg",
        name: "章洁",
        description: "UI设计",
      },
    ]);

    return {
      list,
    };
  },
});
</script>
