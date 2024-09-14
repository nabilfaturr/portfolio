import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function CVPage() {
  const cv_pdf_url = `https://drive.google.com/file/d/15vT6ni8OHpgYqQtKvBBJdlhxE4E9KElk/view?usp=sharing`;
  redirect(cv_pdf_url);
}