import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTwitter from "@/components/icons/IconTwitter";
import React, { Fragment, useEffect, useRef, useState } from "react";
import LogoLight from "@/components/icons/LogoLight";
import IconChevronRight from "@/components/icons/IconChevronRight";
import Image from "next/image";
import ChiplyticsLogo from "../../public/img/chiplytics.png";
import SparkmateLogo from "../../public/img/sparkmate.png";
import OrangewoodLogo from "../../public/img/orangewood..png";
import VuecasonLogo from "../../public/img/vuecason.png";
import CollaborationFeaturesImage from "../../public/img/collaboration-features.svg";
import FullHistoryAndVersioningImage from "../../public/img/full-history-and-versioning.svg";
import ProjectManagementImage from "../../public/img/project-management.svg";
import AnotationImage from "../../public/img/anotation.svg";

// integrations
import Microsoft365Image from "../../public/img/integrations/microsoft-365.svg";
import GoogleImage from "../../public/img/integrations/google.svg";
import NotionImage from "../../public/img/integrations/notion.svg";
import JiraImage from "../../public/img/integrations/jira.png";
import LinearAppImage from "../../public/img/integrations/linear-app.png";

import SlackImage from "../../public/img/integrations/slack.svg";
import MicrosoftTeamImage from "../../public/img/integrations/microsoft-team.svg";
import GmailImage from "../../public/img/integrations/gmail.svg";

import SmartsheetImage from "../../public/img/integrations/smartsheet.png";
import JamaImage from "../../public/img/integrations/jama.png";

import SolidWorksImage from "../../public/img/integrations/solidworks.png";
import IproImage from "../../public/img/integrations/ipro.png";
import NxImage from "../../public/img/integrations/nx.svg";
import OnshapeImage from "../../public/img/integrations/onshape.svg";
import SwImage from "../../public/img/integrations/sw.png";

import SOCImage from "../../public/img/soc.svg";
import ItarImage from "../../public/img/itar.svg";
import SelfHostImage from "../../public/img/self-host.png";
import LogoDark from "@/components/icons/LogoDark";

import { useRive } from "@rive-app/react-canvas";

const HighlightCode = dynamic(() => import("@/components/HighlightCode"), {
  ssr: false,
});

const headerMenus = [
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "Integrations",
    path: "#integrations",
  },
  {
    title: "Customers",
    path: "#customers",
  },
  {
    title: "Pricing",
    path: "#pricing",
  },
  {
    title: "Security",
    path: "#security",
  },
  {
    title: "About",
    path: "#about",
  },
];

const testimonial = {
  testimonail:
    "Testimonial text can be around 3-4 sentences. We can add the links to the social networks of this persons to prove that this person is real.",
  author: {
    name: "Name Surname",
    title: "Ceo of the Company",
    imgUrl: "/img/testimonial-author-sample.png",
  },
  socials: {
    x: "https://twitter.com/home",
    linkedin: "https://www.linkedin.com",
  },
};

const testimonials = Array.from<typeof testimonial>({ length: 3 }).fill(
  testimonial
);

function IconSystemModeling(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M2.66699 20H16.0003V26.6666H22.667V20H29.3337V13.3333H16.0003V6.66663H9.33366V13.3333H2.66699V20Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M9.33301 20V13.3334H15.9997V20H22.6663V13.3334"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <rect
        x="9.33301"
        y="6.66663"
        width="6.66667"
        height="6.66667"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <rect
        x="16"
        y="20"
        width="6.66667"
        height="6.66667"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function IconDigitalThreads(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M9 15.6667L9 23C9 24.1046 9.89543 25 11 25L19 25M9 15.6667L19 15.6667M9 15.6667L9 10"
        strokeWidth="1.44444"
        stroke="inherit"
      />
      <mask id="path-2-inside-1_6690_7704" fill="white">
        <rect x="4" y="4" width="10" height="6" rx="1.17308" />
      </mask>
      <rect
        x="4"
        y="4"
        width="10"
        height="6"
        rx="1.17308"
        stroke="inherit"
        strokeWidth="3.38889"
        mask="url(#path-2-inside-1_6690_7704)"
      />
      <mask id="path-3-inside-2_6690_7704" fill="white">
        <rect x="18" y="13" width="10" height="6" rx="1.16669" />
      </mask>
      <rect
        x="18"
        y="13"
        width="10"
        height="6"
        rx="1.16669"
        stroke="inherit"
        strokeWidth="3.37044"
        mask="url(#path-3-inside-2_6690_7704)"
      />
      <mask id="path-4-inside-3_6690_7704" fill="white">
        <rect x="18" y="22" width="10" height="6" rx="1.16669" />
      </mask>
      <rect
        x="18"
        y="22"
        width="10"
        height="6"
        rx="1.16669"
        stroke="inherit"
        strokeWidth="3.37044"
        mask="url(#path-4-inside-3_6690_7704)"
      />
    </svg>
  );
}
function IconCadReviews(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M0.75 23.25V8.31066L8.31066 0.75H23.25V15.6893L15.6893 23.25H0.75Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M8.75 0.75H23.25L23.25 15.25H8.75L8.75 0.75Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M0.477652 23.25L8.31098 15.4166H23.523L15.6897 23.25H0.477652Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M0.75 8.75H15.25L15.25 23.25H0.75L0.75 8.75Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function IconRequirements(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="1.33333"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M17.333 8L21.7775 8H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.333 13.3334H21.7775H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.333 18.6666H21.7775H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.333 24H21.7775H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="8"
        y="8"
        width="5.33333"
        height="5.33333"
        rx="0.666667"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <rect
        x="8"
        y="18.6666"
        width="5.33333"
        height="5.33333"
        rx="0.666667"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function IconProductDataManagement(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M6.66699 28V6.66667C6.66699 5.95942 6.94794 5.28115 7.44804 4.78105C7.94814 4.28095 8.62641 4 9.33366 4H22.667C23.3742 4 24.0525 4.28095 24.5526 4.78105C25.0527 5.28115 25.3337 5.95942 25.3337 6.66667V28L21.3337 25.3333L18.667 28L16.0003 25.3333L13.3337 28L10.667 25.3333L6.66699 28Z"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.33337H20M12 14.6667H20M17.3333 20H20"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const moduleMenus = [
  {
    title: "System Modeling",
    icon: IconSystemModeling,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    RiveComponent: ({ className }: { className: string }) => (
      <RiveComponent
        className={className}
        src="https://public.rive.app/hosted/311509/109741/a5KUF5v7_06g_6szzyZJmw.riv"
      />
    ),
  },
  {
    title: "Digital Threads",
    icon: IconDigitalThreads,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    RiveComponent: ({ className }: { className: string }) => (
      <RiveComponent
        className={className}
        src="https://public.rive.app/hosted/311509/109744/Et3bwYpUX0OIJmbIsyU3rw.riv"
      />
    ),
  },
  {
    title: "CAD Reviews",
    icon: IconCadReviews,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    RiveComponent: ({ className }: { className: string }) => (
      <RiveComponent
        className={className}
        src="https://public.rive.app/hosted/311509/109742/s6g0qd24cUGkTBaksnefIg.riv"
      />
    ),
  },
  {
    title: "Requirements",
    icon: IconRequirements,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    RiveComponent: ({ className }: { className: string }) => (
      <RiveComponent
        className={className}
        src="https://public.rive.app/hosted/311509/109742/s6g0qd24cUGkTBaksnefIg.riv"
      />
    ),
  },
  {
    title: "Product Data Management",
    icon: IconProductDataManagement,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    RiveComponent: ({ className }: { className: string }) => (
      <RiveComponent
        className={className}
        src="https://public.rive.app/hosted/311509/109743/gMjssTaEN0e2lFYDzW76lQ.riv"
      />
    ),
  },
] as const;

function ModuleMenuItemDescription({
  bulletRef,
  containerRef,
  description,
}: {
  description: string;
  bulletRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLButtonElement>;
}) {
  useEffect(() => {
    const cardElement = containerRef.current;
    const bulletElement = bulletRef.current;
    if (!cardElement || !bulletElement) return;
    const cardElementRect = cardElement.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    bulletElement.style.transform = `translate(${0}px, ${
      cardElementRect.top - bodyRect.top
    }px)`;
    console.log(cardElementRect);
  }, [bulletRef, containerRef]);

  return <p className="text-lg leading-tight mt-1">{description}</p>;
}

function ModuleMenuItem({
  setOpenedModule,
  module,
  isOpened,
}: {
  isOpened: boolean;
  module: (typeof moduleMenus)[number];
  setOpenedModule: React.Dispatch<
    React.SetStateAction<(typeof moduleMenus)[number]["title"]>
  >;
}) {
  const cardContainerRef = useRef<HTMLButtonElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const descriptionElement = cardContainerRef.current;
    const titleElement = titleRef.current;

    if (!descriptionElement || !titleElement) return;

    if (isOpened) {
      descriptionElement.style.maxHeight = `${descriptionElement.scrollHeight}px`;
    } else {
      descriptionElement.style.maxHeight = `${titleElement.clientHeight}px`;
    }
  }, [isOpened, cardContainerRef, titleRef]);

  return (
    <button
      data-is-active={isOpened}
      ref={cardContainerRef}
      type="button"
      onClick={() => {
        setOpenedModule(module.title);
      }}
      key={module.title}
      className={`text-left relative rounded-lg flex flex-col border overflow-hidden ${
        isOpened ? " border-[#DBE4EF]" : "hover:bg-gray-50 border-transparent"
      }`}
      style={{ transition: "max-height 0.5s" }}
    >
      <div className="flex items-center gap-2 p-5" ref={titleRef}>
        <module.icon className={`w-10 ${isOpened ? "stroke-[#4C90F0]" : ""}`} />
        <h3 className="font-bold text-xl">{module.title}</h3>
      </div>
      <p ref={descriptionRef} className="text-lg leading-tight px-5 pb-5">
        {module.description}
      </p>
    </button>
  );
}

function ModulesMenu() {
  const bulletRef = useRef<HTMLDivElement>(null);
  const menuItemContainerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [openedModule, setOpenedModule] =
    useState<(typeof moduleMenus)[number]["title"]>("System Modeling");

  const RiveComponent = moduleMenus.find(
    (m) => m.title === openedModule
  )!.RiveComponent;

  useEffect(() => {
    const itemContainerElement = menuItemContainerRef.current;
    const bulletElement = bulletRef.current;

    if (!itemContainerElement || !bulletElement) return;

    const items = Array.from(itemContainerElement.children);
    const containerRect = itemContainerElement.getBoundingClientRect();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const isActive = item.getAttribute("data-is-active") === "true";

      if (isActive) {
        let lastActiveIndex = items.findIndex((itm) => {
          return itm.getAttribute("data-active-type") === "last";
        });

        // outLastIndex = lastActiveIndex;

        // const isBottomToTop = lastActiveIndex < i;

        // // console.log({ containerRect, lastActiveIndex, currentActiveIndex });
        // const itemRect = item.getBoundingClientRect();
        // const height = (item as HTMLElement).style.maxHeight.replace("px", "");

        // console.log(itemRect, height);

        // bulletElement.style.top = `${
        //   Math.abs(
        //     containerRect.top - itemRect.top
        //     // -
        //     //   Number(height) / 2 +
        //     //   bulletElement.clientHeight / 2
        //   )
        //   // +
        //   //   // window.scrollY +
        //   //   Number(height) / 2 +
        //   //   bulletElement.clientHeight / 2
        // }px`;
        // // console.log(itemRect);

        const last = items.find(
          (item) => item.getAttribute("data-active-type") === "last"
        );
        last?.removeAttribute("data-active-type");

        const current = items.find(
          (item) => item.getAttribute("data-active-type") === "current"
        );
        current?.setAttribute("data-active-type", "last");

        item.setAttribute("data-active-type", "current");
      }

      if (isActive) {
        const activeIndex = items.findIndex(
          (item) => item.getAttribute("data-is-active") === "true"
        );

        let lastActiveIndex = items.findIndex((itm) => {
          return itm.getAttribute("data-active-type") === "last";
        });

        const isBottomToTop = lastActiveIndex > activeIndex;

        const itemRect = item.getBoundingClientRect();
        const height = (item as HTMLElement).style.maxHeight.replace("px", "");

        if (lastActiveIndex < 0 || isBottomToTop) {
          const middle = Math.abs(
            containerRect.top -
              itemRect.top -
              Number(height) / 2 +
              bulletElement.clientHeight / 2
          );
          bulletElement.style.top = `${middle}px`;
          if (lineRef.current) {
            lineRef.current.style.top = `${middle - Number(height) / 2}px`;
            lineRef.current.style.height = `${Number(height)}px`;
          }
        } else {
          const middle = Math.abs(
            containerRect.top -
              itemRect.bottom +
              Number(height) / 2 +
              bulletElement.clientHeight / 2
          );

          bulletElement.style.top = `${middle}px`;
          if (lineRef.current) {
            lineRef.current.style.top = `${middle - Number(height) / 2}px`;
            lineRef.current.style.height = `${Number(height)}px`;
          }
        }
        break;
      }
    }
  }, [openedModule]);

  return (
    <div className="w-full mt-8 flex flex-col md:flex-row gap-8 h-[520px]">
      <div className="flex w-full md:w-4/12 gap-5 shrink-0">
        <div className="h-full relative w-0.5 shrink-0 rounded-full flex justify-center bg-gradient-to-b from-10% from-[#eef6ff] via-50% via-[#B7D7F9] ">
          <div
            ref={lineRef}
            style={{ transition: "top 0.5s" }}
            className="absolute z-20 bg-gradient-to-b from-20% from-[#B7D7F9] via-50% via-[#4C90F0] to-80% to-[#B7D7F9] w-0.5 rounded-full h-40 "
          ></div>
          <div
            className="absolute z-20"
            ref={bulletRef}
            style={{ transition: "top 0.5s" }}
          >
            <div className="border-gray-300/60 border-4 rounded-full">
              <div className="border border-gray-300 rounded-full">
                <div className="h-3 w-3 bg-blue-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col" ref={menuItemContainerRef}>
          {moduleMenus.map((module) => {
            return (
              <ModuleMenuItem
                key={module.title}
                isOpened={openedModule === module.title}
                module={module}
                setOpenedModule={setOpenedModule}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-8/12">
        <RiveComponent className="md:ml-8" />
      </div>
    </div>
  );
}

const codes = [
  {
    language: "Node.js",
    lang: "javascript",
    code: `// Get a user's access token and
// profile data from and Identity Provider

import WorkOS from '@workos-inc/code';
const workos = new WorkOS('sk_example_123456789')
const profile = await workos.sso.getProfileAndToken({
  code: '0123928382193219321',
  clientID: 'client_123456789'
})
`,
  },
  {
    language: "Ruby",
    lang: "ruby",
    code: `# Get a user’s access token and
# profile data from an Identity Provider

require 'workos'

WorkOS.key = 'sk_example_123456789'

WorkOS::SSO.profile_and_token(
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  client_id: 'client_123456789',
)`,
  },
  {
    language: "Python",
    lang: "python",
    code: `# Get a user’s access token and
# profile data from an Identity Provider

import workos
from workos import client

workos.api_key = 'sk_example_123456789'
workos.client_id = 'client_123456789'

client.sso.get_profile_and_token('01E2RJ4C05B52KKZ8FSRDAP23J')`,
  },
  {
    language: "Java",
    lang: "java",
    code: `// Get a user’s access token and
// profile data from an Identity Provider

import com.workos.WorkOS;

WorkOS workos = new WorkOS("sk_example_123456");

ProfileAndToken profileAndToken = workos.sso.getProfileAndToken("01E2RJ4C05B52KKZ8FSRDAP23J", "client_123456789");

Profile profile = profileAndToken.profile;`,
  },
  {
    language: "Go",
    lang: "go",
    code: `// Get a user’s access token and
// profile data from an Identity Provider

import "github.com/workos/workos-go/pkg/sso"

sso.SetAPIKey("sk_example_123456789")

sso.GetProfileAndToken(
  context.Background(),
  sso.GetProfileAndTokenOptions{
    Code: "01E2RJ4C05B52KKZ8FSRDAP23J",
  }
)`,
  },
  {
    language: ".NET",
    lang: "csharp",
    code: `// Get a user’s access token and
// profile data from an Identity Provider

WorkOS.SetApiKey("sk_example_123456");

var ssoService = new SSOService();
var options = new GetProfileAndTokenOptions
{
    ClientId = "client_123456789",
    Code = "01E2RJ4C05B52KKZ8FSRDAP23J",
};

var profile = await ssoService.GetProfileAndToken(options);`,
  },
  {
    language: "cURL",
    lang: "bash",
    code: `curl --request POST 
--url "https://api.workos.com/sso/token? 
client_id=client_123456789& 
client_secret=sk_example_123456789& 
grant_type=authorization_code& 
code=01E2RJ4C05B52KKZ8FSRDAP23J"
  `,
  },
] as const;

type Codes = typeof codes;

const developerApiMenus = [
  {
    title: "Set a property",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
  {
    title: "Create blocks 1",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
  {
    title: "Create blocks 2",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
  {
    title: "Create blocks 3",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
] as const;

function CodeBlock({ codes }: { codes: Codes }) {
  const [activeLanguage, setActiveLanguage] = useState<
    Codes[number]["language"]
  >(codes[0].language);

  const selectedCode = codes.find((code) => code.language === activeLanguage)!;

  return (
    <div className="w-full h-full rounded-lg border border-[#252A31] shadow-[0px_0px_0px_4px_#2F333B]">
      <div className="flex border-b border-[#383E47] gap-2 w-full overflow-x-auto">
        {codes.map((code) => (
          <button
            onClick={() => setActiveLanguage(code.language)}
            key={code.language}
            className={`px-3 font-medium py-1.5 hover:text-[#4C90F0] transition-colors border-b-2 hover:border-b-[#4C90F0] ${
              code.language === activeLanguage
                ? "border-b-[#4C90F0]"
                : "border-b-transparent"
            }`}
          >
            {code.language}
          </button>
        ))}
      </div>
      <div className="w-full h-full ">
        <HighlightCode code={selectedCode.code} language={selectedCode.lang} />
      </div>
    </div>
  );
}

function DeveloperApiMenu() {
  const [openedMenu, setOpenedMenu] =
    useState<(typeof developerApiMenus)[number]["title"]>("Set a property");

  const codes = developerApiMenus.find(
    (menu) => menu.title === openedMenu
  )!.codes;

  return (
    <div className="w-full mt-8 flex flex-col md:flex-row gap-8">
      <div className="flex w-full md:w-4/12 gap-5 shrink-0">
        <div className="h-full w-0.5 shrink-0 rounded-full bg-gradient-to-b from-10% from-[#4c90f02d] via-80% via-transparent"></div>
        <div className="flex flex-col w-full">
          {developerApiMenus.map((menu) => {
            const isOpened = openedMenu === menu.title;
            return (
              <button
                type="button"
                onClick={() => setOpenedMenu(menu.title)}
                key={menu.title}
                className={`p-5 text-left relative rounded-lg flex flex-col justify-center ${
                  isOpened
                    ? "border border-[#252A31] shadow-[0px_0px_0px_4px_#2F333B]"
                    : "text-[#ABB3BF]"
                }`}
              >
                {isOpened && (
                  <div className="absolute z-10 -left-[33px] ">
                    <div className="border-gray-600/60 border-4 rounded-full">
                      <div className="border border-[#1C2127] rounded-full">
                        <div className="h-3 w-3 bg-blue-500 border-2 border-[#1C2127] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                {isOpened && (
                  <div className="bg-gradient-to-b from-20% from-transparent via-50% via-[#4C90F0] to-80% to-transparent w-0.5 rounded-full absolute -left-[23px] h-full top-0"></div>
                )}
                <h3 className="font-bold text-xl">{menu.title}</h3>
                <p className="text-lg leading-tight mt-1">{menu.description}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-8/12 md:pl-8">
        <CodeBlock codes={codes} />
      </div>
    </div>
  );
}

const integrations = [
  {
    images: [
      Microsoft365Image,
      GoogleImage,
      NotionImage,
      JiraImage,
      LinearAppImage,
    ],
    title: "Productivity",
    description: "Keep your docs and tasks in-sync.",
  },
  {
    images: [SlackImage, MicrosoftTeamImage, GmailImage],
    title: "Communication",
    description: "Keep your team up to date in real time.",
  },
  {
    images: [SmartsheetImage, JamaImage],
    title: "Program management",
    description:
      "Enhance your programmatic with digital threads and traceability..",
  },
  {
    images: [SolidWorksImage, OnshapeImage, SwImage, NxImage, IproImage],
    title: "CAD + Engineering Tools",
    description:
      "Build an end to end digital thread with the tools engineers know and love",
  },
];

const securities = [
  {
    image: SOCImage,
    title: "SOC2",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
  {
    image: ItarImage,
    title: "Itar",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
  {
    image: SelfHostImage,
    title: "Self-host or GovCloud",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
];

const footerMenus = [
  {
    title: "Product",
    menus: [
      {
        title: "Customers",
        url: "#",
      },
      {
        title: "Industries",
        url: "#",
      },
      {
        title: "Features",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
      {
        title: "Docs",
        url: "#",
      },
      {
        title: "Studies",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    menus: [
      {
        title: "Company Overview",
        url: "#",
      },
      {
        title: "Careers",
        url: "/jobs",
      },
      {
        title: "Press",
        url: "#",
      },
      {
        title: "Investors",
        url: "#",
      },
    ],
  },
  {
    title: "Legal",
    menus: [
      {
        title: "Terms of Service",
        url: "/terms",
      },
      {
        title: "Privacy Policy",
        url: "/privacy",
      },
      {
        title: "GDPR",
        url: "#",
      },
    ],
  },
  {
    title: "Contact",
    menus: [
      {
        title: "Contact Us",
        url: "/contact",
      },
      {
        title: "Social Link Icons",
        url: "#",
      },
    ],
  },
];

function RiveComponent({
  className,
  src,
  autoPlay = true,
  playOnHover,
  animations = true,
}: {
  playOnHover?: boolean;
  autoPlay?: boolean;
  className: string;
  src: string;
  animations?: boolean;
}) {
  const { rive, RiveComponent } = useRive(
    {
      src: src,
      autoplay: autoPlay,
      animations: animations ? "animation" : undefined,
    },
    { fitCanvasToArtboardHeight: true }
  );

  return (
    <RiveComponent
      className={className}
      onMouseLeave={() => playOnHover && rive && rive.pause()}
      onMouseEnter={() => playOnHover && rive && rive.play()}
    />
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Rollup — Collaborative engineering environment</title>
      </Head>
      <header className="text-[#16181C] font-blender antialiased w-full bg-[rgba(255,255,255,0.80)] border-b border-b-[#DCE0E5] sticky top-0 backdrop-blur-[20px] z-40">
        <nav className="max-w-7xl px-4 w-full mx-auto flex items-center justify-between h-14 font-semibold text-lg">
          <div className="flex items-center gap-8">
            <Link href="/">
              <LogoLight className="h-10" />
            </Link>
            <div className="items-center w-full gap-8 hidden lg:flex">
              {headerMenus.map((menu) => (
                <Link key={menu.path} href={menu.path}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 h-max shrink-0">
            <Link href="https://app.rollup.ai/">Login</Link>
            <Link
              href="https://app.rollup.ai/"
              className="py-1.5 px-3 bg-[#2D72D2] text-white"
            >
              Go to app
            </Link>
          </div>
        </nav>
      </header>
      <div className="text-[#16181C] font-blender antialiased overflow-hidden">
        <section className="bg-[url('/img/home-bg-line.svg')] bg-no-repeat bg-top">
          <div className="max-w-7xl px-4 mx-auto mt-24">
            <div className="mx-auto flex flex-col gap-2 justify-center items-center">
              <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                The Platform for Moonshots
              </h1>
              <p className="font-semibold text-lg text-center md:text-2xl">
                The modern collaboration + low-code platform for engineering
                teams.
              </p>
              <Link
                href="https://app.rollup.ai/"
                className="flex items-center gap-1 mt-6 bg-[#2D72D2] text-white px-5 py-2"
              >
                <span>Get Started</span>
                <IconChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <RiveComponent
              className="max-w-6xl mx-auto mt-20"
              src="https://public.rive.app/hosted/311509/109176/se9bOJUhVU6KQVhSoJLL2w.riv"
            />
          </div>
          <div
            id="customers"
            className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-14 mt-20 px-4"
          >
            <Image quality={100} src={ChiplyticsLogo} alt="Chiplytics" />
            <Image quality={100} src={SparkmateLogo} alt="Sparkmate" />
            <Image quality={100} src={OrangewoodLogo} alt="Orangewood" />
            <Image quality={100} src={VuecasonLogo} alt="Vuecason" />
          </div>

          <div className="w-full mx-auto flex flex-wrap justify-center gap-6 md:gap-10 mt-24 px-4">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-9 border bg-white border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD] rounded-lg max-w-sm w-full"
              >
                <div className="flex gap-3 items-center">
                  <Image
                    src={testimonial.author.imgUrl}
                    alt={testimonial.author.name}
                    height={48}
                    width={48}
                    className="shrink-0 h-12 w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-lg leading-none">
                      {testimonial.author.name}
                    </span>
                    <span className="text-base leading-none font-medium">
                      {testimonial.author.title}
                    </span>
                  </div>
                  <div className="hidden sm:flex self-start ml-auto gap-2">
                    <Link href={testimonial.socials.linkedin}>
                      <IconTwitter className="h-5 w-5" />
                    </Link>
                    <Link href={testimonial.socials.linkedin}>
                      <IconLinkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-lg leading-tight">
                  {testimonial.testimonail}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-4xl md:text-5xl">Modules</h2>
          <p className="text-xl md:text-2xl max-w-xl leading-tight mt-4 font-bold">
            Short description Technical Modules Short description Technical
            Modules Short description Technical
          </p>

          <ModulesMenu />
        </section>
        <section id="features" className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-4xl md:text-5xl">
            Collaboration Features
          </h2>
          <p className="text-xl md:text-2xl max-w-xl leading-tight mt-4 font-bold">
            Short description Technical Modules Short description Technical
            Modules Short description Technical
          </p>

          <div className="grid grid-cols-12 mt-8 w-full gap-6 md:gap-8">
            <div className="md:col-span-8 col-span-12 w-full">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <h3 className="font-bold text-2xl">Inboxes</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Your Engineering Command Center: Centralize Changes,
                  Actionables, and Feedback in a Unified, Streamlined Inbox.
                  Condense hours of emails and context swithching into minutes
                  of feedback each day.
                </p>
                <Image
                  quality={100}
                  src={CollaborationFeaturesImage}
                  alt="Collaboration Features"
                  className="w-full rounded-lg border border-[#DBE4EF] overflow-hidden mt-8"
                />
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <h3 className="font-bold text-2xl">
                  Full-history and Versioning
                </h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Track Every change: Comprehensive History and Versioning for
                  Complete Project Transparency and Control.
                </p>
                <Image
                  quality={100}
                  src={FullHistoryAndVersioningImage}
                  alt="Full-history and Versioning"
                  className="w-full mt-8"
                />
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <Image
                  quality={100}
                  src={ProjectManagementImage}
                  alt="Project Management"
                  className="w-full mb-8"
                />
                <h3 className="font-bold text-2xl">Project Management</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Integrated Project Management Statuses and Tasks for Seamless
                  Planning, Execution, and Tracking.
                </p>
              </div>
            </div>
            <div className="md:col-span-8 col-span-12">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <Image
                  quality={100}
                  src={AnotationImage}
                  alt="Anotation"
                  className="w-full rounded-lg h-96 object-cover overflow-hidden mb-8"
                />
                <h3 className="font-bold text-2xl">Anotation</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Short description of the opportunity provided by Rollup system
                  Short description of the opportunity provided by Rollup system
                  Short description of the opportunity provided by Rollup system
                  the opportunity provided by Rollup system Short description of
                  the opportunity provided by Rollup system{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1C2127] text-white mt-40 py-40">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="max-w-xl flex flex-col gap-4">
              <h2 className="font-bold text-3xl md:text-4xl">
                With Rollup, you and your engineers can collaborate with
                information-rich workspaces...
              </h2>
              <p className="text-lg md:text-xl">
                ...that provide a 360° view of all your project&apos;s
                engineering data, context, and history into one place.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 md:gap-10">
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <RiveComponent
                  playOnHover={true}
                  autoPlay={false}
                  animations={false}
                  src="https://public.rive.app/hosted/311509/109748/wShhd5THq0GG0QZA44g4Tw.riv"
                  className="w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Keyboard Navigation</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Jump between contexts and execute changes in milliseconds.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <RiveComponent
                  playOnHover={true}
                  autoPlay={false}
                  animations={false}
                  src="https://public.rive.app/hosted/311509/109749/yNB4JjwcnkKlEcur2guJ3w.riv"
                  className="w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Drag and Drop</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Intuitive drag and drop interactions are everywhere.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <RiveComponent
                  playOnHover={true}
                  autoPlay={false}
                  animations={false}
                  src="https://public.rive.app/hosted/311509/109750/etUe4KXQ3E25rXYWkhKewA.riv"
                  className="w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Realtime</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Never think about refreshing the browser, or hitting save
                    again.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <RiveComponent
                  playOnHover={true}
                  autoPlay={false}
                  animations={false}
                  src="https://public.rive.app/hosted/311509/109751/zzbOWOvUcEmYwTfbGqNXRw.riv"
                  className="w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Reference any object anywhere
                  </h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Our powerful syntax for linking objects and their values
                    means you&apos;ll never repeat yourself.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <RiveComponent
                  playOnHover={true}
                  autoPlay={false}
                  animations={false}
                  src="https://public.rive.app/hosted/311509/109752/tPSIiP4hREaS8ZFbPqd4Cg.riv"
                  className="w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Api</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Great engineering teams build their own tools. First-class
                    APIs and Developer-friendly features mean you can
                    incorporate Rollup into your new and exisgting systems easy.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <RiveComponent
                  playOnHover={true}
                  autoPlay={false}
                  animations={false}
                  src="https://public.rive.app/hosted/311509/109753/Xy9a6mP-V0qFpUnZaOFTuA.riv"
                  className="w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Command Bar</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Our global command bar lets you do anything anywhere in
                    seconds in Rollup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="integrations" className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-4xl md:text-5xl">Integrations</h2>
          <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mt-14">
            {integrations.map((integration) => (
              <div
                key={integration.title}
                className="border leading-tight border-[#DBE4EF] rounded-lg p-9 w-full shadow-[0px_0px_0px_4px_#F4F8FD]"
              >
                <div className="flex gap-6 flex-wrap">
                  {integration.images.map((image, i) => (
                    <div
                      className="h-12 w-12 shadow-[0px_0px_0px_4px_#F4F8FD] p-2 flex items-center justify-center border border-[#DBE4EF] rounded-lg"
                      key={i}
                    >
                      <Image
                        quality={100}
                        alt={integration.title}
                        src={image}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-xl">{integration.title}</h3>
                  <p className="text-lg">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full bg-[#1C2127] text-white mt-40 py-40">
          <div className="max-w-7xl px-4 mx-auto ">
            <h2 className="font-bold text-4xl md:text-5xl">
              Developer-Friendly APIs
            </h2>
            <p className="text-xl md:text-2xl max-w-xl leading-tight mt-4 font-bold">
              Short description Technical Modules Short description Technical
              Modules Short description Technical
            </p>

            <DeveloperApiMenu />
          </div>
        </section>
        <section id="security" className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-4xl md:text-5xl">Security</h2>
          <p className="text-2xl max-w-2xl leading-tight mt-4 font-bold">
            Rollup has experience helping our customers meet their specific
            regulatory and industry requirements. Our platform provides
            functionality that can be configured so that it operates to meet our
            customers&apos; requirements including:
          </p>
          <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-8 w-full items-center mt-16">
            {securities.map((security, i) => (
              <Fragment key={security.title}>
                <div className="flex flex-col gap-2 justify-center items-center text-center">
                  <Image src={security.image} alt={security.title} />
                  <h3 className="font-semibold text-2xl">{security.title}</h3>
                  <p className="text-lg">{security.description}</p>
                </div>
                {i % 1 === 0 && i !== securities.length - 1 ? (
                  <div
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(109, 150, 215, 0.00) 0%, rgba(109, 150, 215, 0.40) 49.61%, rgba(109, 150, 215, 0.00) 100%)",
                    }}
                    className="w-0.5 hidden lg:block h-36"
                  />
                ) : null}
              </Fragment>
            ))}
          </div>
        </section>
        <section className="bg-[url(/img/footer-blue-line.png)] bg-[#2D72D2] mt-40 bg-no-repeat w-full bg-right bg-contain">
          <div className="max-w-7xl px-4 mx-auto w-full py-32">
            <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Ready to engineer faster?
            </h2>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://app.rollup.ai/"
                className="bg-white hover:bg-[#ffffffe0] text-[#2D72D2] font-medium flex gap-2 rounded-sm px-4 items-center justify-center py-2"
              >
                <span>Start for Free</span>
                <IconChevronRight className="h-3 w-3 text-[#2D72D2]" />
              </Link>
              <Link
                href="https://app.rollup.ai/"
                className="bg-[#f6f7f918] hover:bg-[#f6f7f93d] transition-colors text-white border border-white font-medium flex gap-2 rounded-sm px-4 items-center justify-center py-2"
              >
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </section>
        <footer className="bg-[#16181C] w-full">
          <div className="max-w-7xl mx-auto px-4 text-white py-24">
            <div className="w-full flex flex-col gap-8 md:gap-0 md:flex-row">
              <div className="w-4/12">
                <Link href="/">
                  <LogoDark />
                </Link>
                <p className="mt-3">
                  © Copyright {new Date().getFullYear()} Rollup
                </p>
                <p>1710 Rose Street, Berkeley, CA 94703</p>
              </div>
              <div className="w-8/12 flex flex-wrap gap-8 lg:gap-0 justify-between">
                {footerMenus.map((menu) => (
                  <div key={menu.title} className="flex flex-col gap-2">
                    <h4 className="text-2xl font-medium">{menu.title}</h4>
                    <ul className="list-none text-lg">
                      {menu.menus.map((menu) => (
                        <li key={menu.title}>
                          <Link href={menu.url}>{menu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-medium">Social</h4>
                  <div className="flex gap-4">
                    <Link href="#">
                      <IconLinkedin className="fill-white h-5 w-5" />
                    </Link>
                    <Link href="#">
                      <IconTwitter className="fill-white h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
