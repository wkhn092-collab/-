export const biz = {
  name: "י.ש שיפוצים ואיטום",
  shortName: "י.ש שיפוצים",
  tagline: "שיפוצים · איטום · עבודות גמר",
  area: "המרכז והשרון",
  areaIn: "במרכז ובשרון",
  phone: "050-000-0000",
  phoneHref: "tel:+972500000000",
  hours: [
    { days: "א׳–ה׳", time: "07:00–18:00" },
    { days: "ו׳", time: "07:00–13:00" },
  ],
  wazeUrl: "https://waze.com/ul",
};

// Every WhatsApp button in the demo goes to the seller (international format, digits only), not to the lead.
export const pitch = {
  whatsapp: "972503967230",
  intro: `היי, ראיתי את ההדמיה של האתר שלי (${biz.name})`,
  builder: "אבישי",
  studio: "עומק",
  studioUrl: "https://my-web-three-blue.vercel.app/?utm_source=pitch&utm_medium=demo&utm_campaign=renovation",
};

export const whatsappUrl = (text: string) =>
  `https://wa.me/${pitch.whatsapp}?text=${encodeURIComponent(text)}`;

export const pitchMessage = (customerMessage?: string) =>
  customerMessage
    ? `${pitch.intro}. ניסיתי את האשף, וזו ההודעה שלקוח היה שולח לי:\n\n${customerMessage}`
    : `${pitch.intro} ואשמח לשמוע עוד.`;

export const services = [
  {
    id: "renovation",
    title: "שיפוץ דירה כללי",
    text: "מתכנון ועד מסירת מפתח: הריסה, חשמל ואינסטלציה, ריצוף, טיח וצבע. קבלן אחד שאחראי על הכול.",
    icon: "wrench",
  },
  {
    id: "bathroom",
    title: "שיפוץ חדרי רחצה",
    text: "חדר רחצה חדש תוך ימים, כולל איטום רצפה מלא מתחת לריצוף, כדי שלא תהיה נזילה לשכנים.",
    icon: "drop",
  },
  {
    id: "roof",
    title: "איטום גגות",
    text: "יריעות ביטומניות, איטום פוליאוריתני וזפת חמה. בדיקה בשטח לפני החורף ותיקון לפני שזה נהיה נזק.",
    icon: "roof",
  },
  {
    id: "damp",
    title: "רטיבות בקירות ובמרתפים",
    text: "מאתרים את מקור הרטיבות, מטפלים בשורש הבעיה ולא רק צובעים מעל העובש.",
    icon: "wall",
  },
  {
    id: "finishing",
    title: "עבודות גמר",
    text: "טיח, שפכטל, צבע, גבס ותקרות אקוסטיות. הפרטים הקטנים שהופכים שיפוץ לבית.",
    icon: "roller",
  },
  {
    id: "tiling",
    title: "ריצוף וחיפוי",
    text: "פורצלן, פרקט, חיפוי קירות ומדרגות. פילוס מדויק ופוגות ישרות.",
    icon: "grid",
  },
] as const;

export const propertyTypes = [
  { id: "apartment", label: "דירה" },
  { id: "house", label: "בית פרטי" },
  { id: "roof", label: "גג או מרפסת" },
  { id: "business", label: "עסק או משרד" },
] as const;

export const urgencyOptions = [
  { id: "leak", label: "יש נזילה או רטיבות עכשיו" },
  { id: "month", label: "רוצה להתחיל בחודש הקרוב" },
  { id: "plan", label: "מתכנן קדימה, רוצה הצעת מחיר" },
] as const;

export const process = [
  { title: "שיחה ותמונות", text: "שולחים כמה תמונות בוואטסאפ. כבר בשיחה הראשונה מבינים את הכיוון." },
  { title: "ביקור ומדידה בשטח", text: "מגיעים, מודדים ובודקים מה מסתתר מאחורי הקיר. בלי הפתעות אחר כך." },
  { title: "הצעת מחיר כתובה", text: "כל סעיף, כל חומר וכל מחיר כתובים. יודעים בדיוק על מה משלמים." },
  { title: "לוח זמנים וחתימה", text: "תאריך התחלה ותאריך סיום כתובים בהסכם, ותשלום לפי התקדמות." },
  { title: "הגנה על הבית", text: "מכסים רצפות, רהיטים ופתחים לפני שמתחילים. הבית נשאר נקי ככל האפשר." },
  { title: "ביצוע עם עדכון יומי", text: "תמונה ועדכון קצר בוואטסאפ בסוף כל יום עבודה. לא צריך לרדוף אחרי אף אחד." },
  { title: "מסירה ואחריות", text: "ניקיון, סיור מסירה משותף ותעודת אחריות בכתב." },
];

export const sampleRating = { value: 4.9, count: 64 };
export const sampleStats = [
  { value: 12, suffix: "+", label: "שנות ניסיון" },
  { value: 350, suffix: "+", label: "פרויקטים שנמסרו" },
  { value: 10, suffix: " שנים", label: "אחריות על איטום" },
];
