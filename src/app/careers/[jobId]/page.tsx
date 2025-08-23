import React from "react";
import { notFound } from "next/navigation";
import { positions } from "@/lib/openings";
import JobDetailsPage from "@/components/sections/JobDetailsPage";
import { Metadata } from "next";

interface JobPageProps {
  params: {
    jobId: string;
  };
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const job = positions.find(p => p.id === parseInt(params.jobId));
  
  if (!job) {
    return {
      title: "Job Not Found | Testriq Careers",
      description: "The requested job position could not be found."
    };
  }

  return {
    title: `${job.title} | Testriq Careers`,
    description: job.description,
    keywords: [
      job.title,
      ...job.skills,
      "QA careers",
      "software testing jobs",
      "Testriq jobs"
    ],
    openGraph: {
      title: `${job.title} | Testriq Careers`,
      description: job.description,
      type: "website",
      url: `https://testriq.com/careers/${job.id}`,
    },
  };
}

export async function generateStaticParams() {
  return positions.map((position) => ({
    jobId: position.id.toString(),
  }));
}

const JobPage: React.FC<JobPageProps> = ({ params }) => {
  const job = positions.find(p => p.id === parseInt(params.jobId));

  if (!job) {
    notFound();
  }

  return <JobDetailsPage job={job} />;
};

export default JobPage;

