<template>
  <!--begin::Menu 1-->
  <div
    class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
    data-kt-menu="true"
  >
    <!--begin::Header-->
    <div class="px-7 py-5">
      <div class="fs-5 text-dark fw-bolder">筛选条件</div>
    </div>
    <!--end::Header-->

    <!--begin::Menu separator-->
    <div class="separator border-gray-200"></div>
    <!--end::Menu separator-->

    <!--begin::Form-->
    <div class="px-7 py-5">
      <!--begin::Input group-->
      <div class="mb-10">
        <!--begin::Label-->
        <label class="form-label fw-bold">状态：</label>
        <!--end::Label-->

        <!--begin::Input-->
        <div>
          <el-select
            class="form-select-solid"
            placeholder="Select option"
            v-model="data.status"
          >
            <el-option label="已批准" value="1">已批准</el-option>
            <el-option label="待审批" value="2">待审批</el-option>
            <el-option label="进行中" value="3">进行中</el-option>
            <el-option label="未通过" value="4">未通过</el-option>
          </el-select>
        </div>
        <!--end::Input-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="mb-10">
        <!--begin::Label-->
        <label class="form-label fw-bold">成员类型：</label>
        <!--end::Label-->

        <!--begin::Options-->
        <div class="d-flex">
          <!--begin::Options-->
          <label
            class="form-check form-check-sm form-check-custom form-check-solid me-5"
          >
            <el-checkbox type="checkbox" value="1" v-model="data.author" />
            <span class="form-check-label"> 负责人 </span>
          </label>
          <!--end::Options-->

          <!--begin::Options-->
          <label
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <el-checkbox type="checkbox" value="2" v-model="data.customer" />
            <span class="form-check-label"> 客户 </span>
          </label>
          <!--end::Options-->
        </div>
        <!--end::Options-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="mb-10">
        <!--begin::Label-->
        <label class="form-label fw-bold">通知：</label>
        <!--end::Label-->

        <!--begin::Switch-->
        <div
          class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
        >
          <input
            class="form-check-input"
            type="checkbox"
            name="notifications"
            v-model="data.notifications"
          />
          <label class="form-check-label"> 开启 </label>
        </div>
        <!--end::Switch-->
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex justify-content-end">
        <button
          type="reset"
          class="btn btn-sm btn-white btn-active-light-primary me-2"
          data-kt-menu-dismiss="true"
        >
          重置
        </button>

        <button
          type="submit"
          class="btn btn-sm btn-primary"
          data-kt-menu-dismiss="true"
        >
          完成
        </button>
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Form-->
  </div>
  <!--end::Menu 1-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Filter {
  status: string;
  author: boolean;
  customer: boolean;
  notifications: boolean;
}

export default defineComponent({
  name: "dropdown-1",
  components: {},
  setup() {
    const data = ref<Filter>({
      status: "1",
      author: true,
      customer: true,
      notifications: true,
    });

    return {
      data,
    };
  },
});
</script>
