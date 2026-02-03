import Image from "next/image";
import Link from "next/link";

const nailImages = Array.from({ length: 46 }, (_, i) => ({
  id: i + 1,
  src: "/images/nail_" + (i + 1) + ".jpg",
}));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ネイルデザインギャラリー
          </h1>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-2">
            あなたらしいネイルを見つけて
          </p>
          <p className="text-base opacity-90">Check me</p>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            デザイン一覧
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {nailImages.map((nail) => (
              <div
                key={nail.id}
                className="aspect-square rounded-xl overflow-hidden bg-gray-100 card-shadow hover:shadow-lg transition-shadow duration-300 relative group"
              >
                <Image
                  src={nail.src}
                  alt={"ネイルデザイン " + nail.id}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-[#FCDBB8]/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 bg-[#F5A962] text-white rounded-full font-medium hover:bg-[#E08B3A] transition-colors"
          >
            よくある質問はこちら
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 text-center">
        <p className="text-sm opacity-80">Check me</p>
      </footer>
    </div>
  );
}
