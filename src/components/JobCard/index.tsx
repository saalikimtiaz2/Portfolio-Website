import { jobTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";

function JobCard({ job }: { job: jobTypes }) {
  return (
    <div className="pl-2 sm:pl-6">
      <div className="border-l border-neutral-500 pl-10 pb-6 jobCardWrapper relative">
        <div className="absolute top-0 -left-7 p-3 bg-neutral-800 h-14 w-14 rounded-full overflow-hidden flex item-end justify-center">
          <img src={imageUrlFor(job.logo).url()} className="h-8 " />
        </div>
        <div className="flex justify-between gap-x-4 xs:flex-col md:flex-row mb-4">
          <div>
            <h5 className="text-xl font-medium font-dm">{job.title}</h5>
            <p className="md:whitespace-nowrap">
              {job.company},{" "}
              <span className="text-neutral-500">{job.location}</span>
            </p>
          </div>

          <p className="text-sm whitespace-nowrap">
            {job.startedDate} - {job.stillWorking ? "Present" : job.endingDate}
          </p>
        </div>
        <PortableText value={job.description} />
      </div>
    </div>
  );
}

export default JobCard;
