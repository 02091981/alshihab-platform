import Link from "next/link";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;

  const subjectName = subject.replaceAll("-", " ");

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/secondary/third-year"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← العودة إلى السنة الثالثة ثانوي
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-blue-700">
            {subjectName}
          </h1>

          <p className="mt-2 text-slate-600">
            اختر القسم الذي تريد الدخول إليه.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <Link
            href={`/secondary/third-year/${subject}/lessons`}
            className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">📖</div>

            <h2 className="mt-5 text-xl font-bold">
              الدروس
            </h2>

            <p className="mt-2 text-slate-600">
              تصفح الدروس والملخصات.
            </p>
          </Link>

          <Link
            href={`/secondary/third-year/${subject}/exercises`}
            className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">📝</div>

            <h2 className="mt-5 text-xl font-bold">
              التمارين
            </h2>

            <p className="mt-2 text-slate-600">
              تدرب وحل التمارين.
            </p>
          </Link>

          <Link
            href={`/secondary/third-year/${subject}/tests`}
            className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">🧪</div>

            <h2 className="mt-5 text-xl font-bold">
              الاختبارات
            </h2>

            <p className="mt-2 text-slate-600">
              اختبر مستواك.
            </p>
          </Link>

          <Link
            href={`/secondary/third-year/${subject}/exams`}
            className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">📋</div>

            <h2 className="mt-5 text-xl font-bold">
              الامتحانات
            </h2>

            <p className="mt-2 text-slate-600">
              راجع امتحانات السنوات السابقة.
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}