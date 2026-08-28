import Link from "next/link";

const years = [
  { name: "السنة الأولى ابتدائي", href: "/primary/first-year", icon: "🟦" },
  { name: "السنة الثانية ابتدائي", href: "/primary/second-year", icon: "📗" },
  { name: "السنة الثالثة ابتدائي", href: "/primary/third-year", icon: "📘" },
  { name: "السنة الرابعة ابتدائي", href: "/primary/fourth-year", icon: "📙" },
  { name: "السنة الخامسة ابتدائي", href: "/primary/fifth-year", icon: "🎓" },
];

export default function PrimaryPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← العودة إلى الرئيسية
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-blue-700">
            المرحلة الابتدائية
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="font-semibold text-blue-700">
            منصة الشهاب للتعليم عن بُعد
          </p>

          <h2 className="mt-3 text-4xl font-extrabold">
            اختر السنة الدراسية
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            اختر السنة المناسبة للوصول إلى المواد والدروس والتمارين.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {years.map((year) => (
            <div
              key={year.href}
              className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{year.icon}</div>

              <h3 className="mt-5 text-xl font-bold">
                {year.name}
              </h3>

              <Link
                href={year.href}
                className="mt-5 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                دخول
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}