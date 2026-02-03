import Link from "next/link";

const faqData = [
  {
    question: "お直しは何日間ですか？",
    answer: "1週間以内であれば無料でお直しいたします。",
  },
  {
    question: "パラジェルは取り扱っていますか？",
    answer: "はい、パラジェルを取り扱っております。",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="gradient-bg text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ギャラリーに戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">
            よくある質問
          </h1>
          <div className="w-12 h-1 bg-white mt-4"></div>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 card-shadow border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#F5A962] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    Q
                  </span>
                  <h3 className="font-bold text-gray-800 pt-1">{faq.question}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#FCDBB8] text-[#F5A962] rounded-full flex items-center justify-center font-bold text-sm">
                    A
                  </span>
                  <p className="text-gray-600 pt-1 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 text-center">
        <p className="text-sm opacity-80">Check me</p>
      </footer>
    </div>
  );
}
