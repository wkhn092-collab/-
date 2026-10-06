"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { biz, pitchMessage, propertyTypes, services, urgencyOptions, whatsappUrl } from "@/content";
import { Icon, WhatsAppIcon } from "./Icons";

type Service = (typeof services)[number];

const steps = ["סוג העבודה", "הנכס", "מתי"];

export default function QuoteWizard() {
  const [service, setService] = useState<Service | null>(null);
  const [property, setProperty] = useState<string | null>(null);
  const [urgency, setUrgency] = useState<string | null>(null);

  const step = !service ? 0 : !property ? 1 : !urgency ? 2 : 3;

  const message =
    service && property && urgency
      ? `שלום ${biz.shortName}, הגעתי מהאתר.\nעבודה: ${service.title}\nנכס: ${property}\nמתי: ${urgency}\nאשמח להצעת מחיר. מצרף/ת תמונות.`
      : "";

  function back() {
    if (urgency) setUrgency(null);
    else if (property) setProperty(null);
    else setService(null);
  }

  function restart() {
    setService(null);
    setProperty(null);
    setUrgency(null);
  }

  const optionClass =
    "press flex min-h-14 w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-right text-base text-white hover:border-amber/70 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber";

  return (
    <div className="mx-auto w-full max-w-xl rounded-3xl border border-amber/25 bg-ink-soft/90 p-5 shadow-2xl shadow-black/40 sm:p-8">
      <ol className="mb-6 flex items-center gap-2" aria-label="התקדמות">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 flex-col gap-1.5">
            <span className={`h-1 rounded-full transition-colors duration-300 ${i < step ? "bg-amber" : i === step ? "bg-amber/50" : "bg-white/10"}`} />
            <span className={`text-xs ${i <= step ? "text-amber-light" : "text-white/40"}`}>{label}</span>
          </li>
        ))}
      </ol>

      <div className="min-h-[29rem] [overflow-anchor:none] sm:min-h-[22rem]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 && (
            <>
              <h3 className="mb-4 font-display text-2xl text-white">מה צריך לעשות?</h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {services.map((s) => (
                  <button key={s.id} type="button" className={optionClass} onClick={() => setService(s)}>
                    <Icon name={s.icon} className="size-6 shrink-0 text-amber" />
                    {s.title}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h3 className="mb-4 font-display text-2xl text-white">איפה העבודה?</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {propertyTypes.map((p) => (
                  <button key={p.id} type="button" className={optionClass} onClick={() => setProperty(p.label)}>
                    {p.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="mb-4 font-display text-2xl text-white">כמה זה דחוף?</h3>
              <div className="grid gap-2.5">
                {urgencyOptions.map((u) => (
                  <button key={u.id} type="button" className={optionClass} onClick={() => setUrgency(u.label)}>
                    {u.id === "leak" && <Icon name="drop" className="size-5 shrink-0 text-amber" />}
                    {u.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="mb-2 font-display text-2xl text-white">הבקשה שלך מוכנה</h3>
              <p className="mb-4 text-sm text-white/60">כך היא תגיע לוואטסאפ של {biz.shortName}:</p>
              <div className="mb-3 rounded-2xl rounded-tr-sm bg-[#dcf8c6] p-4 text-[15px] leading-relaxed whitespace-pre-line text-[#111]">
                {message}
              </div>
              <p className="mb-5 flex items-center gap-2 text-sm text-amber-light">
                <Icon name="check" className="size-4 shrink-0" />
                טיפ: צרפו 2–3 תמונות של המקום, וההצעה תגיע מהר ומדויק יותר.
              </p>
              <a
                href={whatsappUrl(pitchMessage(message))}
                target="_blank"
                rel="noopener noreferrer"
                className="press flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 text-lg font-bold text-ink hover:bg-[#2ee372]"
              >
                <WhatsAppIcon className="size-6" />
                שליחה בוואטסאפ
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/50">
                <Icon name="lock" className="size-3.5" />
                הפנייה נשלחת ישירות ממך. שום פרט לא נשמר באתר.
              </p>
            </>
          )}
        </motion.div>
      </AnimatePresence>
      </div>

      {step > 0 && (
        <div className="mt-5 flex justify-between text-sm">
          <button type="button" onClick={back} className="press flex items-center gap-1 rounded-lg px-2 py-2 text-amber-light hover:text-amber">
            <Icon name="arrow" className="size-4 rotate-180" />
            חזרה
          </button>
          {step === 3 && (
            <button type="button" onClick={restart} className="press rounded-lg px-2 py-2 text-white/60 hover:text-white">
              להתחיל מחדש
            </button>
          )}
        </div>
      )}
    </div>
  );
}
