"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const TeamMember = ({
  member,
}: {
  member: { image: string; alt: string; bio: string };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 350; // Set a character limit for the preview

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded
    ? member.bio
    : member.bio.slice(0, MAX_LENGTH) +
      (member.bio.length > MAX_LENGTH ? "..." : "");

  return (
    <div className="flex flex-col items-center justify-start w-full lg:w-1/2 max-w-[700px] mx-auto">
      <div className="mb-5">
        <Image
          src={member.image}
          alt={member.alt}
          width={256}
          height={256}
          layout="intrinsic"
          className="mx-auto !w-[200px] !h-[200px] object-cover rounded-full hover:scale-105 transition-transform duration-300 bg-[aliceblue]"
        />
      </div>
      <div className="text-left text-justify leading-6 lg:leading-7">
        <div
          className={clsx(
            "transition-all duration-300 overflow-hidden inline",
            isExpanded ? "max-h-[1000px]" : "max-h-[100px]"
          )}
        >
          {displayedText}
        </div>
        {member.bio.length > MAX_LENGTH && (
          <span
            onClick={toggleReadMore}
            className="text-blue-500 cursor-pointer ml-2 text-nowrap"
          >
            {isExpanded ? "Read less" : "Read more"}
          </span>
        )}
      </div>
    </div>
  );
};
