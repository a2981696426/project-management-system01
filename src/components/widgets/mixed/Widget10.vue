<template>
  <!--begin::Mixed Widget 10-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div
      class="card-body p-0 d-flex justify-content-between flex-column overflow-hidden"
    >
      <!--begin::Hidden-->
      <div class="d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3">
        <div class="me-2">
          <span class="fw-bolder text-gray-800 d-block fs-3">工作量</span>

          <span class="text-gray-400 fw-bold">1月1日 - 1月10日 2023</span>
        </div>

        <div class="fw-bolder fs-3" :class="`text-${chartColor}`">15,300</div>
      </div>
      <!--end::Hidden-->

      <!--begin::Chart-->
      <apexchart
        class="mixed-widget-10-chart"
        :options="chartOptions"
        :series="series"
        type="bar"
        :height="chartHeight"
      ></apexchart>
      <!--end::Chart-->
    </div>
  </div>
  <!--end::Mixed Widget 10-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-12",
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
  },
  setup(props) {
    const color = ref(props.chartColor);

    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");
    const secondaryColor = getCSSVariableValue("--bs-gray-300");
    const baseColor = getCSSVariableValue("--bs-" + color.value);

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "bar",
        height: props.chartHeight,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["50%"],
          endingShape: "rounded",
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日", "1月8日"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        y: 0,
        offsetX: 0,
        offsetY: 0,
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {
        type: "solid",
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "" + val + " 人/天";
          },
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        padding: {
          top: 10,
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };

    const series = [
      {
        name: "完成量",
        data: [50, 60, 70, 80, 60, 50, 70, 60],
      },
      {
        name: "计划量",
        data: [50, 60, 70, 80, 60, 50, 70, 60],
      },
    ];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
