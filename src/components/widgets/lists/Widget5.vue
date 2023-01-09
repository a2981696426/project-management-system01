<template>
  <!--begin::List Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder mb-2 text-dark">工作安排</span>
        <span class="text-muted fw-bold fs-7">任务：4 | 会议：4</span>
      </h3>

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
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
      <!--begin::Timeline-->
      <div class="timeline-label">
        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">08:42</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-warning fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="fw-mormal timeline-content text-muted ps-3">
            个人设置界面交付
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">10:00</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-success fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Content-->
          <div class="timeline-content fw-bolder text-gray-800 ps-3">
            <div>2022 第一季度产品新功能可行性讨论会</div>
            地点：<a href="#" class="text-primary">会议室03</a>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">14:37</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-bolder text-gray-800 ps-3">
            <div>设计组进度复核</div>
            地点：<a href="#" class="text-primary">会议室01</a>
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-primary fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-mormal text-muted ps-3">
            系统同步数据信息
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-bolder text-gray-800 ps-3">
            <div>可视化界面项目对接会议</div>
            地点：<a href="#" class="text-primary">会议室02</a>
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-primary fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-mormal text-muted ps-3">
            地理信息相关模块设计
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-bolder text-gray-800 ps-3">
            <div>项目计划优化调整，参考执行</div>
            地点：<a href="#" class="text-primary">会议室02</a>
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bolder text-gray-800 fs-6">10:30</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-success fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-mormal text-muted ps-3">
            客户管理页面增加筛选功能
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Timeline-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown1,
  },
});
</script>
