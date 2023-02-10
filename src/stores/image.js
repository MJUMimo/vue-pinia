import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
      src: `https://erp.mju.ac.th/picture/information/6cd754cfb67641bcb649df8cb7eb86a8s.jpg`,
      alt: "01",
      detail:
        " คณะศิลปศาสตร์ จัดโครงการอบรมจริยธรรมการวิจัยในคนและพัฒนาศักยภาพนักวิจัย",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/c03e220e95614e818780901afe6be6fcs.jpg",
      alt: "02",
      detail:
        "  คณะสัตวแพทยศาสตร์ ม.แม่โจ้ ออกพื้นที่ปฏิบัติงานในหน่วยสัตวแพทย์อาสาจุฬาภรณ์",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/36474b8d60ba4ed38a036e7fc083c236s.jpg",
      alt: "03",
      detail:
        "  ม.แม่โจ้ ได้จัดการประกวดสุนทรพจน์ภาษาอังกฤษ MJU Liberal Arts English Speech Contest 2023 ภายใต้หัวข้อ 'Self-Improvement and Empowerment.'",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/5f2bab5166f34fff8ad1da231371e4a0s.jpg",
      alt: "04",
      detail:
        " องค์การบริหารส่วนจังหวัดนครราชสีมา ศึกษาดูงาน “ระบบการทำฟาร์ม เกษตรสมัยใหม่ (4.0)”",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/b391fe37b80b4780979499dc2dc6e57fs.jpg",
      alt: "05",
      detail: " อบต.คลองปาง จ.ตรัง เข้าศึกษาดูงาน อพ.สธ.-มจ.",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/217499d0c12c42729ca6696f57fa8207s.jpg",
      alt: "06",
      detail:
        " ม.แม่โจ้ จัดพิธีทำบุญตักบาตร บำเพ็ญกุศลถวายพระพรแด่สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา ให้ทรงหายจากพระอาการประชวร",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/69fd3559f5ee47d0a6d51ea2e999d147s.jpg",
      alt: "07",
      detail:
        " มหาวิทยาลัยแม่โจ้ จัดพิธีลงนามบันทึกความเข้าใจความร่วมมือทางวิชาการ กับ สถาบันวิจัยและพัฒนาพื้นที่สูง (องค์การมหาชน)",
    },
    {
      src: "https://erp.mju.ac.th/picture/information/3272a73fca684ec1920e166b4a20d289s.jpg",
      alt: "08",
      detail:
        " เป็นผู้แทนมหาวิทยาลัยแม่โจ้ เข้าร่วมงานในพิธีกระทำสัตย์ปฏิญาณตนต่อธงชัยเฉลิมพล ประจำปี 2566 วันกองทัพไทย",
    },
  ]);
  return { image };
});
