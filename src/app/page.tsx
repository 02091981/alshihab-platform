import Link from "next/link";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">

      {/* الشريط العلوي */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold text-blue-700">
            منصة الشهاب التعليمية
          </h1>

          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <Link href="/" className="hover:text-blue-700">
              الرئيسية
            </Link>

            <a href="#" className="hover:text-blue-700">
              الدروس
            </a>

            <a href="#" className="hover:text-blue-700">
              التمارين
            </a>

            <a href="#" className="hover:text-blue-700">
              الاختبارات
            </a>

            <a href="#" className="hover:text-blue-700">
              تسجيل الدخول
            </a>
          </nav>
        </div>
      </header>

      {/* الواجهة الرئيسية */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">

          <p className="mb-4 text-sm font-semibold text-blue-700">
            تعليم عن بُعد بطريقة أسهل وأفضل
          </p>

          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            مرحبًا بكم في منصة الشهاب
            <br />
            للتعليم عن بُعد
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            تعلّم من مكانك، تابع دروسك، احضر حصصك المباشرة،
            أنجز تمارينك واختبر مستواك في منصة واحدة.
          </p>

          <Link
            href="#stages"
            className="mt-9 inline-block rounded-xl bg-blue-700 px-9 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
          >
            ابدأ التعلم
          </Link>
        </div>
      </section>

      {/* اختيار المرحلة */}
      <section
        id="stages"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold">
            اختر مرحلتك الدراسية
          </h3>

          <p className="mt-3 text-slate-600">
            اختر المستوى المناسب لك للوصول إلى المواد والدروس.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">

          {/* ابتدائي */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-52 items-center justify-center bg-blue-100">
              <span className="text-7xl">📚</span>
            </div>

            <div className="p-7">
              <h4 className="text-2xl font-bold">
                المرحلة الابتدائية
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                دروس وتمارين ووسائل تعليمية تساعد التلميذ على بناء أساس قوي.
              </p>

              <Link
                href="/primary"
                className="mt-6 block w-full rounded-xl border border-blue-700 py-3 text-center font-semibold text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                استكشف المرحلة
              </Link>
            </div>
          </div>

          {/* متوسط */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-52 items-center justify-center bg-indigo-100">
              <span className="text-7xl">🎓</span>
            </div>

            <div className="p-7">
              <h4 className="text-2xl font-bold">
                المرحلة المتوسطة
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                دروس منظمة وتمارين واختبارات لمساعدة التلميذ على تطوير مستواه.
              </p>

              <Link
                href="/middle"
                className="mt-6 block w-full rounded-xl border border-blue-700 py-3 text-center font-semibold text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                استكشف المرحلة
              </Link>
            </div>
          </div>

          {/* ثانوي */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-52 items-center justify-center bg-sky-100">
              <span className="text-7xl">🏫</span>
            </div>

            <div className="p-7">
              <h4 className="text-2xl font-bold">
                المرحلة الثانوية
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                مراجعة ودروس وحصص عن بُعد وتمارين واختبارات للتحضير الجيد.
              </p>

              <Link
                href="/secondary"
                className="mt-6 block w-full rounded-xl border border-blue-700 py-3 text-center font-semibold text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                استكشف المرحلة
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* مميزات المنصة */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h3 className="text-3xl font-bold">
              كل ما يحتاجه التلميذ في مكان واحد
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl border p-7 text-center">
              <div className="text-4xl">🎥</div>
              <h4 className="mt-4 font-bold">حصص عن بُعد</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                متابعة الحصص المباشرة مع الأستاذ.
              </p>
            </div>

            <div className="rounded-2xl border p-7 text-center">
              <div className="text-4xl">📖</div>
              <h4 className="mt-4 font-bold">دروس منظمة</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                الوصول إلى الدروس والموارد التعليمية.
              </p>
            </div>

            <div className="rounded-2xl border p-7 text-center">
              <div className="text-4xl">📝</div>
              <h4 className="mt-4 font-bold">تمارين واختبارات</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                التدريب وقياس مستوى التلميذ.
              </p>
            </div>

            <div className="rounded-2xl border p-7 text-center">
              <div className="text-4xl">📊</div>
              <h4 className="mt-4 font-bold">متابعة التقدم</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                متابعة النتائج والتقدم الدراسي.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* التذييل */}
      <footer className="border-t bg-slate-50 py-8 text-center text-sm text-slate-500">
        © 2026 منصة الشهاب التعليمية
      </footer>

    </main>
  );
}