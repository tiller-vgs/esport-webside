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
    <section id="videos" className="flex flex-col px-[5%] py-10 w-full">
      <div className="mb-12 w-full text-right">
        <p className="mb-3 font-semibold text-primary">Tiller E-Sport</p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Våre <span className="text-primary">videoer</span>
        </h1>

        <p className="mt-4 text-gray-300">
          Hold deg oppdatert på hva som skjer med våre videoer.
        </p>
      </div>

      <div className="grid gap-6 w-full md:grid-cols-2">
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
