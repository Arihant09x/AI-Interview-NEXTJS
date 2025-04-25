import React from "react";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import robot from "../../public/robot.png";
import Image from "next/image";
import InterviewCard from "../../Components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import LogoutButton from "@/components/LogoutButton"; // Import the LogoutButton
import ToastButton from "@/Components/ToastButton"; // Import the ToastButton

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, LatestInterviews] = await Promise.all([
    getInterviewByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]); // Doing Parallel request

  const hasPastInterview = userInterviews?.length! > 0;
  const hasUpcomingInterview = LatestInterviews?.length! > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
          <ToastButton
            className="btn-primary"
            href="/interview"
            message="Redirecting to start an interview..."
            label="Start an Interview"
          />
        </div>
        <Image
          src={robot}
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interview</h2>
        <div className="interviews-section">
          {hasPastInterview ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                userId={user?.id}
                key={interview.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>
              You haven&apos;t taken any interview yet. Take it now to improve
              your skills
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterview ? (
            LatestInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
