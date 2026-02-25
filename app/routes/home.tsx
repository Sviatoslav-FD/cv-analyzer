import NavBar from "~/components/NavBar";
import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import { resumes } from "data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV analyzer" },
    { name: "description", content: "Artificial intelligence-based resume analyzer" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg)] bg-cover">
    <NavBar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>

    {
      resumes.length > 0 && resumes.map(resume => (
        <ResumeCard key={resume.id} resume={resume} />
      ))
    }
    </section>
  </main>
}
