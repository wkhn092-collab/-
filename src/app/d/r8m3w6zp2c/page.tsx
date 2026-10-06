import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import CountUp from "@/components/CountUp";
import { Icon, WhatsAppIcon } from "@/components/Icons";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteWizard from "@/components/QuoteWizard";
import Reveal, { MotionRoot, Stagger, StaggerItem } from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import TiltCard from "@/components/TiltCard";
import { biz, sampleRating, sampleStats, services, whatsappUrl } from "@/content";

const IMG = "/demo/renovation";
const HIDE_STICKY_ON = ["quote", "contact"];

function IllustrationTag({ className = "" }: { className?: string }) {
  return (
    <span className={`absolute z-10 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur ${className}`}>
      תמונה להמחשה
    </span>
  );
}

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className={`mb-2 text-sm font-bold tracking-wide ${light ? "text-amber" : "text-amber-deep"}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    </Reveal>
  );
}

const trustPoints = [
  { icon: "doc", text: "הצעת מחיר כתובה, סעיף אחר סעיף" },
  { icon: "calendar", text: "תאריך סיום כתוב בהסכם" },
  { icon: "shield", text: "אחריות בכתב על כל עבודה" },
];

export default function DemoPage() {
  const quickMessage = `שלום ${biz.shortName}, הגעתי מהאתר ואשמח להצעת מחיר.`;

  return (
    <MotionRoot>
      <div className="sticky top-0 z-50 bg-amber px-4 py-1.5 text-center text-xs font-bold text-ink sm:text-sm">
        הדמיה שהוכנה במיוחד עבורך · לא פורסמה ברשת · שם, פרטים ותמונות לדוגמה
      </div>

      <header className="absolute inset-x-0 top-8 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-amber text-ink">
              <Icon name="roof" className="size-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-white">{biz.name}</span>
              <span className="block text-xs text-amber-light/90">{biz.tagline}</span>
            </span>
          </div>
          <a
            href={biz.phoneHref}
            className="press hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-amber hover:text-ink sm:flex"
          >
            <Icon name="phone" className="size-4" />
            <span dir="ltr">{biz.phone}</span>
          </a>
        </div>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink pb-14 pt-36 sm:items-center sm:pb-24">
          <div className="hero-bg absolute inset-x-0 top-0 -z-10 h-[62%] md:inset-0 md:h-auto">
            <Image
              src={`${IMG}/hero-apartment-m.webp`}
              alt="סלון מואר בדירה משופצת עם ריצוף פורצלן ויציאה למרפסת"
              fill
              priority
              sizes="(min-width: 768px) 1px, 100vw"
              className="object-cover object-[60%_center] md:hidden"
            />
            <Image
              src={`${IMG}/hero-apartment.webp`}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 100vw, 1px"
              className="hidden object-cover object-[20%_center] md:block"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink from-45% via-ink/60 to-ink/0 md:bg-gradient-to-l md:from-ink/95 md:from-0% md:via-ink/65 md:to-ink/0" />
          <IllustrationTag className="bottom-4 left-4" />

          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-ink/50 px-3 py-1 text-sm text-amber-light">
                <Icon name="pin" className="size-4" />
                עובדים ב{biz.area}
              </p>
              <h1 className="font-display text-4xl leading-[1.15] text-white sm:text-6xl">
                שיפוץ בלי בלגן.
                <br />
                <span className="text-amber">איטום בלי הפתעות.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                קבלן אחד לכל הבית: שיפוצים, איטום גגות ורטיבות ועבודות גמר. מחיר כתוב מראש, לוח זמנים מחייב ועדכון יומי בוואטסאפ.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  id="hero-cta"
                  href="#quote"
                  className="press flex min-h-14 items-center justify-center gap-2 rounded-xl bg-amber px-7 text-lg font-bold text-ink shadow-lg shadow-amber/25 hover:bg-amber-light"
                >
                  הצעת מחיר ב-3 לחיצות
                  <Icon name="arrow" className="size-5" />
                </a>
                <a
                  href={whatsappUrl(quickMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/30 px-7 text-lg text-white hover:border-amber hover:text-amber-light"
                >
                  <WhatsAppIcon className="size-5" />
                  שולחים תמונה בוואטסאפ
                </a>
              </div>
              <ul className="mt-7 grid gap-2 text-sm text-white/75 sm:grid-cols-3">
                {trustPoints.map((t) => (
                  <li key={t.text} className="flex items-center gap-2">
                    <Icon name={t.icon} className="size-5 shrink-0 text-amber" />
                    {t.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Services */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <SectionTitle eyebrow="מה אנחנו עושים" title="מהגג ועד הריצוף, באחריות של קבלן אחד" />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <TiltCard className="flex gap-4 p-5 sm:flex-col sm:p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-amber transition-colors group-hover:bg-amber group-hover:text-ink">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-display text-xl text-ink">{s.title}</h3>
                    <p className="leading-relaxed text-slate">{s.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={`${IMG}/roof-membrane.webp`}
                alt="איש מקצוע מלחים יריעות איטום ביטומניות על גג שטוח"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[50%_65%] transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
              <span className="absolute right-4 bottom-4 rounded-xl bg-ink/80 px-3 py-2 text-sm font-bold text-white backdrop-blur">
                איטום גגות לפני החורף
              </span>
              <IllustrationTag className="top-4 left-4" />
            </Reveal>
            <Reveal delay={0.06} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={`${IMG}/plastering.webp`}
                alt="יד בכפפה מחליקה שפכטל על קיר לבן עם מרית"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[50%_55%] transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
              <span className="absolute right-4 bottom-4 rounded-xl bg-ink/80 px-3 py-2 text-sm font-bold text-white backdrop-blur">
                גמר מדויק, בפלס לייזר
              </span>
              <IllustrationTag className="top-4 left-4" />
            </Reveal>
          </div>
        </section>

        {/* 3. Proof */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="לפני ואחרי" title="גררו את הקו, ותראו מה שיפוץ אחד עושה" />
            <div className="grid items-start gap-12 md:grid-cols-[1.15fr_1fr]">
              <div>
                <Reveal className="relative mx-auto max-w-md">
                  <BeforeAfter
                    before={{ src: `${IMG}/bath-before.webp`, alt: "חדר רחצה ישן לפני שיפוץ: אמבטיה עם וילון, אריחים כחולים ואסלה ישנה" }}
                    after={{ src: `${IMG}/bath-after.webp`, alt: "אותו חדר רחצה אחרי שיפוץ: מקלחון זכוכית, אריחים חדשים, ריצוף כהה וארון כיור" }}
                  />
                  <IllustrationTag className="bottom-4 left-4" />
                </Reveal>
                <p dir="ltr" className="mx-auto mt-2 max-w-md text-right text-[11px] text-slate">
                  Photo: marsupium photography ·{" "}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Bathroom_Renovation_(15449068040).jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Wikimedia Commons
                  </a>{" "}
                  · CC BY-SA 2.0
                </p>

                <Reveal delay={0.08} className="mt-6 rounded-2xl border border-dashed border-amber-deep/40 bg-paper p-5">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="text-center">
                      <div className="font-display text-3xl text-ink">
                        <CountUp to={sampleRating.value} decimals={1} />
                      </div>
                      <div className="flex justify-center gap-0.5 text-amber" aria-hidden>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Icon key={i} name="star" className="size-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-1 text-xs text-slate">
                        <CountUp to={sampleRating.count} /> ביקורות בגוגל
                      </p>
                    </div>
                    {sampleStats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-display text-3xl text-ink">
                          <CountUp to={s.value} />
                          <span className="text-amber-deep">{s.suffix}</span>
                        </div>
                        <p className="mt-1 text-xs text-slate">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-amber-deep">* כל המספרים להמחשה בלבד. בגרסה האמיתית יופיעו הדירוג והנתונים שלך.</p>
                </Reveal>
              </div>

              <div>
                <Reveal className="mb-6">
                  <h3 className="font-display text-2xl text-ink">7 שלבים, בלי הפתעות</h3>
                  <p className="text-slate">ככה נראה שיפוץ אצלנו, מהתמונה הראשונה בוואטסאפ ועד המפתח.</p>
                </Reveal>
                <ProcessTimeline />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Signature moment */}
        <section id="quote" className="blueprint relative isolate scroll-mt-10 overflow-hidden bg-ink py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <p className="mb-2 text-sm font-bold text-amber">הצעת מחיר</p>
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                מה צריך לשפץ? 3 לחיצות, והבקשה מוכנה.
              </h2>
              <p className="mt-3 text-white/70">בלי טפסים ובלי לחכות לטלפון. הבקשה נשלחת ישירות לוואטסאפ, ואפשר לצרף תמונות.</p>
            </Reveal>
            <Reveal>
              <QuoteWizard />
            </Reveal>
          </div>
        </section>

        {/* 5. Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <SectionTitle eyebrow="יצירת קשר" title="מגיעים אליך, בכל המרכז והשרון" />
          <Reveal className="grid gap-6 rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 md:grid-cols-2">
            <div className="space-y-5">
              <div className="flex gap-3">
                <Icon name="pin" className="mt-0.5 size-6 shrink-0 text-amber-deep" />
                <div>
                  <p className="font-bold text-ink">אזור שירות: {biz.area}</p>
                  <p className="text-sm text-slate">ביקור ומדידה בשטח בתיאום מראש</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="clock" className="mt-0.5 size-6 shrink-0 text-amber-deep" />
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-ink">
                  {biz.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt className="font-bold">{h.days}</dt>
                      <dd dir="ltr" className="text-right text-slate">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex gap-3">
                <Icon name="phone" className="mt-0.5 size-6 shrink-0 text-amber-deep" />
                <a href={biz.phoneHref} className="font-bold text-ink hover:text-amber-deep" dir="ltr">{biz.phone}</a>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                href={whatsappUrl(quickMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="press flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] font-bold text-ink hover:bg-[#2ee372]"
              >
                <WhatsAppIcon className="size-5" />
                וואטסאפ
              </a>
              <a
                href={biz.phoneHref}
                className="press flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber font-bold text-ink hover:bg-amber-light"
              >
                <Icon name="phone" className="size-5" />
                חיוג
              </a>
              <a
                href={biz.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="press flex min-h-12 items-center justify-center gap-2 rounded-xl bg-ink font-bold text-white hover:bg-ink-soft"
              >
                <Icon name="pin" className="size-5" />
                ניווט ב-Waze
              </a>
              <p className="rounded-xl bg-paper p-3 text-sm text-slate">
                בגרסה האמיתית, הכפתורים מובילים ישירות למספר ולכתובת שלך, וכל פנייה מגיעה אליך לוואטסאפ.
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-ink/10 px-5 pb-28 pt-8 text-center text-xs leading-relaxed text-slate md:pb-8">
        <p>הדמיה פרטית. שם העסק, הטלפון, המספרים והתמונות הם לדוגמה בלבד, ויוחלפו בפרטים שלך.</p>
        <p>האתר לא נסרק במנועי חיפוש ולא אוסף מידע על גולשים.</p>
      </footer>

      <StickyCta watchId="hero-cta" hideOnIds={HIDE_STICKY_ON} />
    </MotionRoot>
  );
}
