import Link from "next/link";

const subjects = [
  { name: "اللغة العربية", slug: "arabic" },
  { name: "الرياضيات", slug: "mathematics" },
  { name: "اللغة الفرنسية", slug: "french" },
  { name: "اللغة الإنجليزية", slug: "english" },
  { name: "علوم الطبيعة والحياة", slug: "science" },
  { name: "الفيزياء والتكنولوجيا", slug: "physics-technology" },
  { name: "التاريخ والجغرافيا", slug: "history-geography" },
  { name: "التربية الإسلامية", slug: "islamic-education" },
  { name: "التربية المدنية", slug: "civic-education" },
  { name: "الإعلام الآلي", slug: "computer-science" },
];

export default function ThirdYearMiddlePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/middle"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← العودة إلى المتوسط
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-blue-700">
            السنة الثالثة متوسط
          </h1>

          <p className="mt-2 text-slate-600">
            اختر المادة التي تريد الدراسة فيها.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject.slug}
              className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">📚</div>

              <h2 className="mt-5 text-xl font-bold">
                {subject.name}
              </h2>

              <Link
                href={`/middle/third-year/${subject.slug}`}
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