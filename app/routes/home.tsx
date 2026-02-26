import type { Route } from "./+types/home";
import Layout from "~/layouts/Layout";
import ResumeCard from "~/components/ResumeCard";
import ButtonLink from "~/components/app/ButtonLink";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Resume.HUB" },
		{
			name: "description",
			content: "Your resume assistant for smart feedback for your dream job!",
		},
	];
}

export default function Home() {
	const { auth, kv } = usePuterStore();
	const navigate = useNavigate();
	const [resumes, setResumes] = useState<Resume[]>([]);
	const [loadingResumes, setLoadingResumes] = useState(false);

	useEffect(() => {
		if (!auth.isAuthenticated) navigate("/auth?next=/");
	}, [auth.isAuthenticated]);

	useEffect(() => {
		const loadResumes = async () => {
			setLoadingResumes(true);

			const resumes = (await kv.list("resume:*", true)) as KVItem[];

			const parsedResumes = resumes?.map(
				(resume) => JSON.parse(resume.value) as Resume,
			);

			setResumes(parsedResumes || []);
			setLoadingResumes(false);
		};

		loadResumes();
	}, []);

	return (
		<Layout>
			<h1 className="my-8 text-center">Applications & Resume Track</h1>

			<h2 className="text-center">
				{!loadingResumes && resumes?.length === 0 ? (
					'No resumes found. Upload your first resume to get feedback'
				) : (
					'Resume review assistance and check AI-powered feedback'
				)}
			</h2>

			{loadingResumes && (
				<div className="flex flex-col items-center justify-center">
					<img src="/images/resume-scan-2.gif" className="w-50" />
				</div>
			)}

			{!loadingResumes && resumes.length > 0 && (
				<div className="grid grid-cols-2 gap-4 mt-10 overflow-x-auto">
					{resumes.map((resume) => (
						<ResumeCard key={resume.id} resume={resume} />
					))}
				</div>
			)}

			{!loadingResumes && resumes?.length === 0 && (
				<div className="flex flex-col items-center justify-center mt-10 gap-4">
					<ButtonLink path="/upload">Upload resume</ButtonLink>
				</div>
			)}
		</Layout>
	);
}
