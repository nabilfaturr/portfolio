import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const URL = `https://github.com/nabilfaturr/reclara`;

export default function ReclaraGithubPage() {
  redirect(URL);
}
