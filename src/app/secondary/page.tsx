import Link from "next/link";

export default function SecondaryPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-2xl font-bold text-blue-700">
            منصة الشهاب التعليمية
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="font-semibold text-blue-700">
            منصة الشهاب للتعليم عن بُعد
          </p>

          <h2 className="mt-3 text-4xl font-extrabold">
            المرحلة الثانوية
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            اختر السنة الدراسية للانتقال إلى الدروس والمواد والتمارين.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-7 text-center shadow-md">
            <div className="text-5xl">🟦</div>

            <h3 className="mt-5 text-xl font-bold">
              السنة الأولى ثانوي
            </h3>

            <Link
              href="/secondary/first-year"
              className="mt-5 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              دخول
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-md">
            <div className="text-5xl">📗</div>

            <h3 className="mt-5 text-xl font-bold">
              السنة الثانية ثانوي
            </h3>

            <Link
              href="/secondary/second-year"
              className="mt-5 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              دخول
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-md">
            <div className="text-5xl">🎓</div>

            <h3 className="mt-5 text-xl font-bold">
              السنة الثالثة ثانوي
            </h3>

            <Link
             href="/secondary/third-year"
              className="mt-5 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              دخول
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}