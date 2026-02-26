import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

const ResumeCard = ({
	resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
	resume: Resume;
}) => {
	const { fs } = usePuterStore();
	const [resumeUrl, setResumeUrl] = useState("");

	useEffect(() => {
		const loadResume = async () => {
			const blob = await fs.read(imagePath);
			if (!blob) return;
			let url = URL.createObjectURL(blob);
			setResumeUrl(url);
		};

		loadResume();
	}, [imagePath]);

	return (
		<Link
			to={`/resume/${id}`}
			className="flex flex-col gap-8 bg-white rounded-2xl p-4 animate-in fade-in duration-300"
		>
			<div className="resume-card-header">
				<div className="flex flex-col gap-2">
					{companyName && (
						<h2 className="text-black! font-bold wrap-break-word">
							{companyName}
						</h2>
					)}
					{jobTitle && (
						<h3 className="text-lg wrap-break-word text-gray-500">
							{jobTitle}
						</h3>
					)}
					{!companyName && !jobTitle && (
						<h2 className="text-black! font-bold">Resume</h2>
					)}
				</div>
				<div className="shrink-0">
					<ScoreCircle score={feedback.overallScore} />
				</div>
			</div>

			{resumeUrl && (
				<div className="gradient-border animate-in fade-in duration-300">
					<div className="w-full h-full">
						<img
							src={resumeUrl}
							alt="resume"
							className="w-full max-sm:h-50 object-cover object-top rounded-xl"
						/>
					</div>
				</div>
			)}
		</Link>
	);
};
export default ResumeCard;
