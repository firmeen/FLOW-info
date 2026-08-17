import type { PageContentMap } from "@/i18n/schema";

export const pageContentTh = {
  platform: {
    eyebrow: "01 / แพลตฟอร์ม",
    title: "แพลตฟอร์มเดียวที่เชื่อมตั้งแต่การเริ่มต้นของลูกค้า ไปจนถึงภาพรวมที่เจ้าของธุรกิจใช้ตัดสินใจได้",
    titleHighlights: [
      { text: "แพลตฟอร์มเดียว", tone: "product" },
      { text: "ภาพรวมที่เจ้าของธุรกิจใช้ตัดสินใจได้", tone: "outcome" },
    ],
    description:
      "FLOW เชื่อมกิจกรรมของลูกค้า ลำดับการทำงาน การปฏิบัติงานของทีม การชำระเงิน ข้อมูลลูกค้า และภาพรวมสำหรับเจ้าของธุรกิจไว้บนรากฐานเดียวกัน",
    descriptionHighlights: [
      { text: "รากฐานเดียวกัน", tone: "strong" },
    ],
    quote: "ธุรกิจของคุณมีลำดับการทำงาน ทำให้มันมองเห็นและเชื่อมถึงกัน",
    quoteHighlights: [{ text: "มองเห็นและเชื่อมถึงกัน", tone: "outcome" }],
  },
  solutions: {
    eyebrow: "02 / โซลูชัน",
    title: "แกนกลางเดียว ปรับให้เข้ากับรูปแบบการดำเนินงานของแต่ละธุรกิจ",
    titleHighlights: [
      { text: "แกนกลางเดียว", tone: "product" },
      { text: "รูปแบบการดำเนินงานของแต่ละธุรกิจ", tone: "outcome" },
    ],
    description:
      "FoodFlow, JobFlow และ CareFlow ใช้ FLOW Core เดียวกัน แต่จัดลำดับงานและประสบการณ์ให้เหมาะกับวิธีที่ธุรกิจแต่ละประเภทรับงาน ดำเนินงาน จบงาน และนำข้อมูลไปใช้ต่อ",
    descriptionHighlights: [{ text: "FLOW Core เดียวกัน", tone: "strong" }],
    quote: "แกนกลางเดียว รูปแบบการทำงานต่างกัน",
    quoteHighlights: [{ text: "รูปแบบการทำงานต่างกัน", tone: "outcome" }],
  },
  howItWorks: {
    eyebrow: "03 / FLOW ทำงานอย่างไร",
    title: "ทุกการกระทำทำให้ธุรกิจเดินหน้าต่อ",
    titleHighlights: [{ text: "เดินหน้าต่อ", tone: "outcome" }],
    description:
      "FLOW ออกแบบจากการเคลื่อนของงาน: การกระทำเข้าสู่ระบบ กลายเป็นงานที่ต้องดำเนินการ เดินไปจนจบ และเปลี่ยนเป็นข้อมูลธุรกิจที่นำไปใช้ต่อได้",
    descriptionHighlights: [{ text: "ข้อมูลธุรกิจที่นำไปใช้ต่อได้", tone: "strong" }],
    quote: "ทุกการกระทำทำให้ธุรกิจเดินหน้าต่อ",
    quoteHighlights: [{ text: "เดินหน้าต่อ", tone: "outcome" }],
  },
  about: {
    eyebrow: "04 / เกี่ยวกับ FLOW",
    title: "เริ่มจากวิธีที่งานเกิดขึ้นจริง แล้วเชื่อมทุกขั้นตอนที่ตามมา",
    titleHighlights: [
      { text: "วิธีที่งานเกิดขึ้นจริง", tone: "product" },
      { text: "เชื่อมทุกขั้นตอนที่ตามมา", tone: "outcome" },
    ],
    description:
      "FIMIN FLOW กำลังพัฒนา FLOW ให้เป็นแพลตฟอร์มการดำเนินงานที่เริ่มจากลำดับงานจริง เชื่อมข้อมูลที่จำเป็น และลดการขาดช่วงระหว่างคน ระบบ และขั้นตอนของธุรกิจ",
    descriptionHighlights: [{ text: "ลำดับงานจริง", tone: "strong" }],
    quote: "เริ่มจากลำดับงาน เทคโนโลยีตามมาทีหลัง",
    quoteHighlights: [{ text: "เริ่มจากลำดับงาน", tone: "product" }],
  },
  contact: {
    eyebrow: "05 / ติดต่อ",
    title: "เริ่มจากวิธีที่ธุรกิจของคุณทำงานจริง",
    titleHighlights: [{ text: "ทำงานจริง", tone: "outcome" }],
    description:
      "บอกประเภทธุรกิจ สิ่งที่ลูกค้าทำเพื่อเริ่มงาน คนที่เกี่ยวข้อง และจุดที่กระบวนการปัจจุบันเริ่มไม่ชัดเจน เพียงเท่านี้ก็มีบริบทพอสำหรับเริ่มต้นคุยเรื่อง FLOW อย่างเป็นประโยชน์",
    descriptionHighlights: [{ text: "เริ่มไม่ชัดเจน", tone: "contrast" }],
    quote: "Systems that flow. Businesses that grow.",
    quoteHighlights: [{ text: "Businesses that grow.", tone: "outcome" }],
  },
} as const satisfies PageContentMap;
