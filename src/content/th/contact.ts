import { brandTh } from "@/content/th/brand";
import type { ContactContent } from "@/i18n/schema";

export const contactContentTh = {
  intro: {
    eyebrow: "เริ่มจากลำดับงานจริง",
    title: "การคุยครั้งแรกที่มีประโยชน์ที่สุด คือการเล่าว่างานในธุรกิจเดินอย่างไรในวันนี้",
    description:
      "ไม่จำเป็นต้องมี Requirement หรือเอกสารที่สมบูรณ์ก่อนเริ่มคุย เริ่มจากประเภทธุรกิจ สิ่งที่ลูกค้าทำเพื่อเริ่มงาน คนที่เกี่ยวข้อง และจุดที่กระบวนการปัจจุบันเริ่มไม่ชัดเจนหรือทำให้เสียเวลาเกินจำเป็น",
  },
  prompts: [
    "ธุรกิจหรือบริการประเภทใดกำลังเกี่ยวข้อง?",
    "ลูกค้าทำอะไรเป็นจุดเริ่มต้นของลำดับงาน?",
    "จุดไหนของการดำเนินงานปัจจุบันที่เสียเวลา ขาดบริบท หรือมองสถานะไม่ชัด?",
  ],
  channels: [
    {
      type: "instagram",
      label: "Instagram",
      value: "@fim.flow",
      href: "https://www.instagram.com/fim.flow/",
      copyValue: "@fim.flow",
      description: "ติดตามทิศทางผลิตภัณฑ์ ภาพลักษณ์ และการอัปเดตสาธารณะของ FLOW",
      action: "เปิด Instagram",
    },
    {
      type: "facebook",
      label: "Facebook",
      value: "FIM FLOW",
      href: null,
      copyValue: "FIM FLOW",
      description: "ชื่อแสดงผลอย่างเป็นทางการบน Facebook โดยยังไม่สร้าง URL ที่ไม่ได้รับการยืนยัน",
      action: "คัดลอกชื่อ",
    },
    {
      type: "email",
      label: "Email",
      value: "fimin.flowofficial@gmail.com",
      href: "mailto:fimin.flowofficial@gmail.com",
      copyValue: "fimin.flowofficial@gmail.com",
      description: "อีเมลสำหรับเรื่องธุรกิจ ผลิตภัณฑ์ ความร่วมมือ และการพัฒนาที่เกี่ยวข้องกับ FLOW",
      action: "ส่งอีเมล",
    },
    {
      type: "line",
      label: "LINE",
      value: "@614henux",
      href: null,
      copyValue: "@614henux",
      description: "LINE ID อย่างเป็นทางการ สามารถคัดลอก ID แล้วเพิ่มใน LINE ได้โดยตรง",
      action: "คัดลอก LINE ID",
    },
    {
      type: "github",
      label: "GitHub",
      value: "firmeen/FLOW-info",
      href: brandTh.repositoryUrl,
      description: "Source และประวัติการพัฒนาแบบสาธารณะของเว็บไซต์แนะนำ FLOW",
      action: "เปิด GitHub",
    },
  ],
  note:
    "Instagram และอีเมลใช้ที่อยู่ตรงตามข้อมูลติดต่อที่ยืนยันแล้ว ส่วน Facebook และ LINE แสดงด้วยชื่อหรือ ID จริงโดยไม่สร้าง canonical URL ขึ้นเอง",
} as const satisfies ContactContent;
