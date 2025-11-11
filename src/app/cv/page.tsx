import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const CV_URL = `https://docs.google.com/document/d/15X-gRWMxyFrcvTXbRyEkx8XL6yZOC4yFTIpQVhIf5LE/edit?usp=sharing`;

export default function CVPage() {
  redirect(CV_URL);
}
