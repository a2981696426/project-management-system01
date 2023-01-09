<template>
  <!--begin::Menu 2-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px"
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content fs-6 text-dark fw-bolder px-3 py-4">
        快捷操作
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a href="#" class="menu-link px-3"> 新标签 </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a href="#" class="menu-link px-3"> 新客户 </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-3"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="right-start"
      data-kt-menu-flip="left-start, top"
    >
      <!--begin::Menu item-->
      <a href="#" class="menu-link px-3">
        <span class="menu-title">新团队</span>
        <span class="menu-arrow"></span>
      </a>
      <!--end::Menu item-->

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-3"> 管理员组 </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-3"> 工作人员组 </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-3"> 普通成员组 </a>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a href="#" class="menu-link px-3"> 新联系人 </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator mt-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content px-3 py-3">
        <a class="btn btn-primary btn-sm px-4" href="#"> 生成报告 </a>
      </div>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "dropdown-2",
  components: {},
});
</script>
