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

type Option = "noteworthy";

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
};
