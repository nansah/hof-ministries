import Link from "next/link";

const sermons = [
  {
    title: "The Power of Faith",
    date: "March 2, 2026",
    speaker: "Senior Pastor",
    description: "Discover how faith can move mountains and transform your life.",
    audioUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Walking in Love",
    date: "February 24, 2026",
    speaker: "Co-Pastor",
    description: "A message on living out Christ's love in our daily relationships.",
    audioUrl: "#",
    videoUrl: "#",
  },
  // Add more sermons here
];

export default function SermonsPage() {
  return (
    <div>
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg, #3b1259 0%, #5c2080 100%)" }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Sermons</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#e8d5b7" }}>
          Listen to recent messages and be encouraged by the Word of God.
        </p>
      </section>
      <section className="py-20 px-6" style={{ background: "#fdf8f2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sermons.map((sermon, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow-lg bg-white flex flex-col gap-3">
              <h2 className="text-2xl font-bold mb-1" style={{ color: "#3b1259" }}>{sermon.title}</h2>
              <p className="text-sm font-semibold" style={{ color: "#c9a227" }}>{sermon.date} &mdash; {sermon.speaker}</p>
              <p className="text-base mb-2" style={{ color: "#5a3e28" }}>{sermon.description}</p>
              <div className="flex gap-4 mt-2">
                <a href={sermon.audioUrl} className="px-4 py-2 rounded bg-[#c9a227] text-[#3b1259] font-bold text-sm" target="_blank" rel="noopener noreferrer">Audio</a>
                <a href={sermon.videoUrl} className="px-4 py-2 rounded bg-[#3b1259] text-[#e8d5b7] font-bold text-sm" target="_blank" rel="noopener noreferrer">Video</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
