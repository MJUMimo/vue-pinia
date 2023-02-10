import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourse = defineStore("Course", () => {
  const course = ref([
    {
      code: "คพ313",
      nameTh: "การพัฒนาโปรแกรมประยุกต์บนเว็บ",
      credit: "3 (2-3-5)",
    },
    {
      code: " คพ343",
      nameTh: "การวิเคราะห์และออกแบบเชิงวัตถุ",

      credit: "3 (2-3-5)",
    },
    {
      code: "คพ252",
      nameTh: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",

      credit: "3 (2-3-5)",
    },
    {
      code: "ศท242",
      nameTh: "ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 2",

      credit: "3 (2-3-5)",
    },
    {
      code: "คพ232",
      nameTh: "สถาปัตยกรรมคอมพิวเตอร์",

      credit: "3 (2-3-5)",
    },
    {
      code: "ศท013",
      nameTh: "สุขภาพเพื่อการดำรงชีวิต",

      credit: "3 (2-3-5)",
    },
    {
      code: "สต301",
      nameTh: "หลักสถิติ",

      credit: "3 (2-3-5)",
    },
  ]);
  return { course };
});
