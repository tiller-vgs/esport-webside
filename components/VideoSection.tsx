type Video = {
  title: string;
  embed: string;
};

const videos: Video[] = [
  {
    title: "Info om Tiller E-Sport",
    embed: "https://www.youtube.com/embed/nt2VwmvzYtE",
  },
  {
    title: "Tilbud og aktiviteter",
    embed: "https://www.youtube.com/embed/l_YW4IU9Lgc",
  },
];

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="flex flex-col items-center justify-center py-12 px-6 bg-black border-yellow-400 border-2 rounded-2xl w-full"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">
        Våre videoer
      </h2>

      <div className="grid gap-6 w-full max-w-5xl md:grid-cols-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full aspect-video"
              src={video.embed}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
