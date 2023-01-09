<template>
  <!--begin::List Widget 3-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title fw-bolder text-dark">待办事项</h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-8': list.length - 1 !== index }"
          class="d-flex align-items-center"
        >
          <!--begin::Bullet-->
          <span
            class="bullet bullet-vertical h-40px"
            :class="`bg-${item.color}`"
          ></span>
          <!--end::Bullet-->

          <!--begin::Checkbox-->
          <div class="form-check form-check-custom form-check-solid mx-5">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
          <!--end::Checkbox-->

          <!--begin::Description-->
          <div class="flex-grow-1">
            <a
              href="#"
              class="text-gray-800 text-hover-primary fw-bolder fs-6"
              >{{ item.title }}</a
            >

            <span class="text-muted fw-bold d-block">{{ item.text }}</span>
          </div>
          <!--end::Description-->

          <span
            class="badge fs-8 fw-bolder"
            :class="`badge-light-${item.color}`"
            >新</span
          >
        </div>
        <!--end:Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end:List Widget 3-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-3",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        color: "success",
        title: "创建数据存储系统",
        text: "2天内到期",
      },
      {
        color: "primary",
        title: "2022 第一季度产品新功能可行性讨论会",
        text: "3天内到期",
      },
      {
        color: "warning",
        title: "范围和估计判断",
        text: "5天内到期",
      },
      {
        color: "primary",
        title: "KPI 应用展示",
        text: "2天内到期",
      },
      {
        color: "danger",
        title: "项目计划优化调整",
        text: "12天内到期",
      },
      {
        color: "success",
        title: "定制化界面升级",
        text: "1周内到期",
      },
    ]);

    return {
      list,
    };
  },
});
</script>
