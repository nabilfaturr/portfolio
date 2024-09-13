import { redirect } from "next/navigation";

export default function CVPage() {
  const cv_url = `https://drive.google.com/file/d/1HDzPKPzvsA-DA1RH1EkvhAjjqlk8WD1E/view?usp=sharing`;
  redirect(cv_url);
}
