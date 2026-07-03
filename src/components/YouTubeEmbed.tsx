function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }

    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

type YouTubeEmbedProps = {
  url: string;
  title: string;
};

export function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-sm border border-white/10 px-4 py-3 text-sm text-accent transition hover:border-white/25 hover:text-white"
      >
        Watch video
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-sm border border-white/8 bg-black">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
