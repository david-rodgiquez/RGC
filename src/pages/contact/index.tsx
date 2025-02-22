import IconSpinner from "@/components/icons/IconSpinner";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import MapDark from "../../../public/img/map_dark.png";
import MapLight from "../../../public/img/new-map-light.svg";
import NewLayout from "@/components/NewLayout";

type ContactFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
};

type Status = "idle" | "success" | "error" | "loading";

interface UseContactBaseReturnFn {
  status: Status;
  submit: (data: ContactFormPayload) => Promise<void>;
}

interface UseContactLoading extends UseContactBaseReturnFn {
  status: "loading";
  error: undefined;
}

interface UseContactSuccess extends UseContactBaseReturnFn {
  status: "success";
  error: undefined;
}

interface UseContactError extends UseContactBaseReturnFn {
  status: "error";
  error: string;
}

interface UseContactIdle extends UseContactBaseReturnFn {
  status: "idle";
  error: undefined;
}

type UseContactReturnFn =
  | UseContactIdle
  | UseContactLoading
  | UseContactError
  | UseContactSuccess;

function useContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | undefined>();

  const submit = async (data: ContactFormPayload) => {
    setStatus("loading");
    setError(undefined);

    try {
      await axios.post("/api/contact", data);
      setStatus("success");
    } catch (error) {
      let errorMessage = "";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data.message || error.message;
      } else {
        errorMessage = (error as Error).message;
      }

      setError(errorMessage);
      setStatus("error");
    }
  };

  return { status, submit, error } as UseContactReturnFn;
}

function ContactFormSection() {
  const { status, submit, error } = useContact();

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as ContactFormPayload;

    submit(data);
  };

  return (
    <div className="md:w-8/12 w-full border-[#DBE4EF] border rounded-lg md:shadow-[0px_0px_0px_4px_#F4F8FD] bg-white dark:bg-[#1C2127] text-black dark:text-white">
      <div className="w-full py-12 md:py-16 px-8 md:px-28 flex flex-col gap-8">
        <h3 className="text-4xl font-semibold">Contact Form</h3>
        {status !== "success" ? (
          <form
            onSubmit={onSubmitForm}
            autoComplete="off"
            className="w-full flex flex-col gap-4"
          >
            <div className="w-full text-xl flex gap-2 flex-col">
              <label htmlFor="fullName">
                Full name <span className="text-[#2D72D2]">*</span>
              </label>
              <input
                required
                id="fullName"
                type="text"
                name="fullName"
                className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
              />
            </div>
            <div className="w-full text-xl flex gap-2 flex-col">
              <label htmlFor="email">
                Email <span className="text-[#2D72D2]">*</span>
              </label>
              <input
                required
                id="email"
                type="email"
                name="email"
                className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
              />
            </div>
            <div className="w-full text-xl flex gap-2 flex-col">
              <label htmlFor="phone">
                Phone <span className="text-[#2D72D2]">*</span>
              </label>
              <input
                required
                id="phone"
                type="phone"
                name="phone"
                className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
              />
            </div>
            <div className="w-full text-xl flex gap-2 flex-col">
              <label htmlFor="message">What can we help you with?</label>
              <textarea
                rows={5}
                id="message"
                name="message"
                className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
              />
            </div>
            {status === "error" && (
              <p className="text-red-600 text-xl">{error}</p>
            )}
            <button
              disabled={status === "loading"}
              type="submit"
              className="disabled:opacity-50 disabled:pointer-events-none py-2 mt-6 font-medium px-6 rounded-sm flex justify-center md:justify-between items-center w-full md:w-max gap-10 text-lg text-white bg-[#2D72D2]"
            >
              {status === "loading" ? (
                <IconSpinner className="h-6 w-6 text-black" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        ) : (
          <div className="w-full flex flex-col gap-2 text-xl dark:text-white">
            <p>We received your submission!</p>
            <p>We typically respond within 12-24 hours</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact | Rollup</title>
      </Head>
      <NewLayout>
        <main className="w-full font-blender mt-24 mb-20">
          <div className="w-full max-w-4xl px-4 flex gap-3 mx-auto flex-col items-center justify-center">
            <span className="uppercase text-lg font-bold font-berkeley text-[#2D72D2] dark:text-[#4C90F0]">
              Contact Us
            </span>
            <h1 className="text-[3.25rem] leading-[3rem] lg:text-7xl lg:leading-[4rem] max-w-lg  text-center font-bold dark:text-white">
              Let&apos;s build something great together
            </h1>
          </div>
          <div className="max-w-7xl w-full flex-col md:flex-row px-4 mx-auto mt-16 font-blender flex gap-6">
            <ContactFormSection />
            <div className="w-full md:w-4/12 border-[#DBE4EF] border rounded-lg md:shadow-[0px_0px_0px_4px_#F4F8FD] bg-white dark:bg-[#1C2127] text-black dark:text-white">
              <div className="w-full py-12 md:py-16 px-8 md:px-16 flex flex-col gap-8">
                <h3 className="text-4xl font-semibold">Get in touch</h3>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Headquarters</h4>
                  <p className="text-lg dark:text-[#ABB3BF]">
                    9255 W Sunset Blvd STE 1100
                    <br />
                    90069-3308 West Hollywood, CA
                    <br />
                    United States
                  </p>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Engineering</h4>
                  <p className="text-lg dark:text-[#ABB3BF]">
                    Rollup Engineering
                    <br />
                    Number + Street
                    <br />
                    London, United Kingdom
                  </p>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Contact Email</h4>
                  <p className="text-lg dark:text-[#ABB3BF]">
                    contact@rollup.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mt-6 max-w-7xl mx-auto w-full ">
            <div
              data-hide-on-theme="dark"
              className="border-[#DBE4EF] border rounded-lg md:shadow-[0px_0px_0px_4px_#F4F8FD]"
            >
              <Image
                src={MapLight}
                alt="Map"
                className="w-full object-contain"
              />
            </div>
            {/* <div data-hide-on-theme="light">
              <Image
                src={MapDark}
                alt="Map"
                className="w-full object-contain"
              />
            </div> */}
          </div>
        </main>
      </NewLayout>
    </>
  );
}
