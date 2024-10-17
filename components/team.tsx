import { teamSections } from "@/data";
import { TeamMember } from "./team-member";

export const Team = () => {
  return (
    <div className="space-y-10 my-8 sm:space-y-24 w-full sm:my-20">
      <div className="leading-7 text-4xl sm:text-5xl font-bold">About the Team</div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
        {teamSections.map((el, index) => {
          return <TeamMember key={`team-${index}`} member={el} />;
        })}
      </div>
    </div>
  );
};
