import React from "react";
import {
  getFeedbackByinterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcons from "@/Components/DisplayTechIcons";
import Agent from "@/Components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const interview = await getInterviewById(id);
  const feedback = await getFeedbackByinterviewId({
    interviewId: id,
    userId: user?.id!,
  });
  if (!interview) redirect("/");
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        {/* Interview Details */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10"
            />
            <h3 className="capitalize text-lg sm:text-xl font-semibold">
              {interview.role} Interview
            </h3>
            <DisplayTechIcons techStack={interview.techstack} />
          </div>
        </div>

        {/* Interview Type */}
        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit text-sm sm:text-base">
          {interview.type}
        </p>
      </div>

      {/* Agent Component */}
      <Agent
        userName={user?.name || ""}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
      />
    </>
  );
};

export default Page;
