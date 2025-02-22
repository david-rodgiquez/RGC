import { ASHBY_API_KEY } from "@/config";
import axios, { AxiosResponse } from "axios";

export const ashby = axios.create({
  baseURL: "https://api.ashbyhq.com",
  auth: {
    username: ASHBY_API_KEY as string,
    password: "",
  },
});

type JobPosting = {
  id: string;
  title: string;
  jobId: string;
  departmentName: string;
  teamName: string;
  locationName: string;
  employmentType: string;
  isListed: boolean;
  externalLink: string;
  publishedDate: string;
  updatedAt: string;
};

type SuccessResponse<TData> = AxiosResponse<{
  success: true;
  results: TData;
}>;

const groupJobPostingsByDepartment = (
  jobs: (JobPosting & {
    jobPostingInfo: JobPostingInfo & { salary: string | null };
  })[]
) => {
  const groupedByDepartment = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const indexOfExistingDepartment = groupedByDepartment.findIndex(
      (dep) => dep.departmentName === job.departmentName
    );
    if (indexOfExistingDepartment < 0) {
      groupedByDepartment.push({
        departmentName: job.departmentName,
        jobs: [job],
      });
    } else {
      groupedByDepartment[indexOfExistingDepartment].jobs =
        groupedByDepartment[indexOfExistingDepartment].jobs.concat(job);
    }
  }

  return groupedByDepartment;
};

type JobPostingInfo = {
  id: string;
  title: string;
  departmentName: string;
  employmentType: string;
  descriptionPlain: string;
  descriptionHtml: string;
  compensation: {
    compensationTierSummary: null;
    summaryComponents: [];
    compensationTiers: any;
    shouldDisplayCompensation: false;
  };
  locationName: string;
  address: {
    postalAddress: {
      addressRegion: string;
      addressCountry: string;
      addressLocality: string;
    };
  };
  externalLink: string;
  publishedDate: string;
  updatedAt: string;
};

export const getJobPostingInfo = async (id: string) => {
  try {
    const res = await ashby.post<any, SuccessResponse<JobPostingInfo>>(
      "jobPosting.info",
      { jobPostingId: id }
    );
    return res.data.results;
  } catch (error) {
    return null;
  }
};

export const getJobPostings = async () => {
  const res = await ashby.post<any, SuccessResponse<JobPosting[]>>(
    "jobPosting.list",
    { listedOnly: true }
  );
  const jobPostingWithInfoPromises = res.data.results.map(
    async (jobPosting) => {
      const jobPostingInfo = (await getJobPostingInfo(jobPosting.id))!;
      const salary = jobPostingInfo.descriptionPlain
        .match(/\$[0-9].*\//g)?.[0]
        .replace("/", "");
      return {
        ...jobPosting,
        jobPostingInfo: {
          ...jobPostingInfo,
          salary:
            jobPostingInfo.compensation.compensationTierSummary ??
            salary ??
            null,
        },
      };
    }
  );

  const jobPostingWithInfo = await Promise.all(jobPostingWithInfoPromises);

  return groupJobPostingsByDepartment(jobPostingWithInfo);
};
