export type ProjectMetadata = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  slug: Option;
  github_url: string;
  live_url: string;
  video_demo_url?: string;
};

type Option = "noteworthy" | "reclara";

export const project_metadata_collection: Record<Option, ProjectMetadata> = {
  noteworthy: {
    title: "Noteworthy",
    description:
      "Noteworthy is a platform that allows you to create and share your notes.",
    date: "2024-01-11T00:00:00Z",
    thumbnail: "/projects/noteworthy/noteworthy-cover.webp",
    slug: "noteworthy",
    github_url: "https://github.com/nabilfaturr/noteworthy",
    live_url: "https://cutt.ly/noteworthy-live",
    video_demo_url: "https://www.youtube.com/embed/CgF-ZkqhNr4",
  },
  reclara: {
    title: "Reclara",
    description:
      "YouTube video summarization system with automatic transcription and AI-powered summaries.",
    date: "2024-11-11T00:00:00Z",
    thumbnail: "/projects/reclara/reclara-cover.webp",
    slug: "reclara",
    github_url: "https://github.com/nabilfaturr/reclara",
    live_url: "https://cutt.ly/reclara-live",
    video_demo_url: "https://www.youtube.com/embed/K1iApz-vKyU",
  },
};
