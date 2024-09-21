export type ProjectMetadata = {
  title: string;
  description: string;
  long_description: string;
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
    long_description:
      "Noteworthy is a platform that allows you to create and share your notes. create folder to store your notes, and also rich text editor to write your notes.",
    date: "2024-01-11T00:00:00Z",
    thumbnail: "/projects/noteworthy/noteworthy-cover.webp",
    slug: "noteworthy",
    github_url: "https://github.com/nabilfaturr/noteworthy",
    live_url: "https://cutt.ly/noteworthy-live",
    video_demo_url: "https://www.youtube.com/embed/CgF-ZkqhNr4",
  },
};

export const latest_project_metadata =
  project_metadata_collection["noteworthy"];
