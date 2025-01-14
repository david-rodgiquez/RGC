import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTwitter from "@/components/icons/IconTwitter";
import React, { Fragment, RefObject, useEffect, useRef, useState } from "react";
import IconChevronRight from "@/components/icons/IconChevronRight";
import Image from "next/image";
import ChiplyticsLogo from "../../public/img/chiplytics.svg";
import SparkmateLogo from "../../public/img/sparkmate.svg";
import OrangewoodLogo from "../../public/img/orangewood.svg";
import VuecasonLogo from "../../public/img/vuecason.svg";
import NerosLogo from "../../public/img/neros.svg";
import CollaborationFeaturesImage from "../../public/img/collaboration-features.svg";
import FullHistoryAndVersioningImage from "../../public/img/full-history-and-versioning.svg";
import ProjectManagementImage from "../../public/img/project-management.svg";
import AnotationImage from "../../public/img/annotations-mobile.svg";

// integrations
import Microsoft365Image from "../../public/img/integrations/microsoft-365.svg";
import GoogleImage from "../../public/img/integrations/google.svg";
import NotionImage from "../../public/img/integrations/notion.svg";
import JiraImage from "../../public/img/integrations/jira.svg";
import LinearAppImage from "../../public/img/integrations/linear-app.png";

import SlackImage from "../../public/img/integrations/slack.svg";
import MicrosoftTeamImage from "../../public/img/integrations/microsoft-team.svg";
import GmailImage from "../../public/img/integrations/gmail.svg";

import PythonImage from "../../public/img/integrations/python.svg";
import GithubImage from "../../public/img/integrations/github.svg";
import GitlabImage from "../../public/img/integrations/gitlab.svg";

import SmartsheetImage from "../../public/img/integrations/smartsheet.png";
import JamaImage from "../../public/img/integrations/jama.png";

import SolidWorksImage from "../../public/img/integrations/solidworks.png";
import IproImage from "../../public/img/integrations/ipro.png";
import NxImage from "../../public/img/integrations/nx.svg";
import OnshapeImage from "../../public/img/integrations/onshape.svg";
import SwImage from "../../public/img/integrations/sw.png";

import SOCImage from "../../public/img/soc2-blue.png";
import ItarImage from "../../public/img/itar.svg";
import SelfHostImage from "../../public/img/self-host.png";

import { useRive } from "@rive-app/react-canvas";
import { useSpring, animated } from "@react-spring/web";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import NewLayout from "@/components/NewLayout";
import IconSystemModeling from "@/components/icons/IconSystemModeling";
import IconDigitalThreads from "@/components/icons/IconDigitalThreads";
import IconRequirements from "@/components/icons/IconRequirement";
import IconProductDataManagement from "@/components/icons/IconProductDataManagement";

const HighlightCode = dynamic(() => import("@/components/HighlightCode"), {
  ssr: false,
});

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
      "Centralize Your Engineering Universe. Trace and Connect Every Design Change and Parameter in One Integrated Digital Thread.",
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
      "Speed up the Mechanical Design process, with design reviews and real-time feedback pinpointed onto the geometry",
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
      "Write and manage requirements with enhanced collaboration, approvals, and real-time verification with Rollup data sources",
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
      "Ensure complete coverage of components across mechnical and electrical domains without data duplication issues.",
    RiveComponent: ({ className }: { className: string }) => (
      <RiveComponent
        className={className}
        src="https://public.rive.app/hosted/311509/109743/gMjssTaEN0e2lFYDzW76lQ.riv"
      />
    ),
  },
] as const;

export type Modules = typeof moduleMenus;
const ModuleMenuItem = dynamic(() => import("../components/ModuleMenuItem"), {
  ssr: false,
});

const ModuleMenuItemDesktop = dynamic(
  () => import("../components/ModuleMenuItemDesktop"),
  {
    ssr: false,
  }
);

export function ModuleMenuRiveComponentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 1 },
    delay: 300,
  });
  return <animated.div style={styles}>{children}</animated.div>;
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
  const [items, setItems] = useState<Element[]>([]);

  useEffect(() => {
    const itemContainerElement = menuItemContainerRef.current;
    const bulletElement = bulletRef.current;

    if (!itemContainerElement || !bulletElement) return;

    // const items = Array.from(itemContainerElement.children);
    const containerRect = itemContainerElement.getBoundingClientRect();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const isActive = item.getAttribute("data-is-active") === "true";

      if (isActive) {
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
  }, [openedModule, items]);

  useEffect(() => {
    const onScroll = () => {
      const childrenItems = menuItemContainerRef.current?.children;
      if (!items.length && childrenItems?.length) {
        setItems(Array.from(childrenItems));
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [items.length]);

  return (
    <div className="w-full mt-8 flex flex-col md:flex-row gap-8 md:h-[520px]">
      <div className="flex w-full md:w-4/12 gap-5 shrink-0 relative">
        <div className="relative w-0.5 shrink-0 rounded-full flex justify-center bg-gradient-to-b from-10% from-[#eef6ff] via-50% via-[#B7D7F9] ">
          <div
            ref={lineRef}
            style={{ transition: "top 0.5s" }}
            className="absolute z-20 bg-gradient-to-b from-20% from-[#B7D7F9] via-50% via-[#4C90F0] to-80% to-[#B7D7F9] w-0.5 rounded-full h-40 "
          ></div>
          <div
            className="absolute z-20"
            ref={bulletRef}
            style={{ transition: "top 0.5s", top: "69px" }}
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
                RiveComponent={module.RiveComponent}
              />
            );
          })}
        </div>
        <div className="absolute hidden lg:block -bottom-18 md:-bottom-6 inset-x-0 ">
          <Link
            href="/modules"
            className="flex items-center font-medium hover:bg-[#215DB0] transition-colors ml-6 text-lg gap-2 text-center text-white px-5 py-3 rounded w-max bg-[#2D72D2]"
          >
            <span>More about Modules</span>
            <IconChevronRight className="h-5 w-5 " />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-8/12">
        <ModuleMenuItemDesktop
          RiveComponent={() => <RiveComponent className="" />}
        />
      </div>
    </div>
  );
}

const codes = [
  // {
  //   language: "Node.js",
  //   lang: "javascript",
  //   code: `// Get a user's access token and
  //   // profile data from and Identity Provider

  //   import WorkOS from '@workos-inc/code';
  //   const workos = new WorkOS('sk_example_123456789')
  //   const profile = await workos.sso.getProfileAndToken({
  //     code: '0123928382193219321',
  //     clientID: 'client_123456789'
  //   })
  //   `,
  // },
  // {
  //   language: "Ruby",
  //   lang: "ruby",
  //   code: `# Get a user’s access token and
  //   # profile data from an Identity Provider

  //   require 'workos'

  //   WorkOS.key = 'sk_example_123456789'

  //   WorkOS::SSO.profile_and_token(
  //     code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  //     client_id: 'client_123456789',
  //   )`,
  // },
  {
    language: "Python",
    lang: "python",
    code: `# Get a user’s access token and
# profile data from an Identity Provider

import WorkOS from '@workos-inc/node';

const workos = newWorkOS('sk_example_123456789');

const profile = await workos.sso.getProfileAndToken({
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  ClientID: 'client_123456789',
})`,
  },
  {
    language: "Matlab",
    lang: "java",
    code: `# Get a user’s access token and
# profile data from an Identity Provider

import WorkOS from '@workos-inc/node';

const workos = newWorkOS('sk_example_123456789');

const profile = await workos.sso.getProfileAndToken({
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  ClientID: 'client_123456789',
})`,
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
    description: (
      <>
        Read and write to{" "}
        <Link href="#" className="underline">
          properties
        </Link>{" "}
        in Rollup
      </>
    ),
    codes: codes,
  },
  {
    title: "Interact with Blocks",
    description: "Create and delete blocks in Rollup",
    codes: codes,
  },
  {
    title: "Requirements statuses",
    description:
      " Check the status of a requirement and change it's value to fit new constraints",
    codes: codes,
  },
  {
    title: "Update Data Sources",
    description: "Update Data Source Objects with new values",
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

function DeveloperApiMenuItem({
  setOpenedModule,
  menu,
  isOpened,
}: {
  isOpened: boolean;
  menu: (typeof developerApiMenus)[number];
  setOpenedModule: React.Dispatch<
    React.SetStateAction<(typeof developerApiMenus)[number]["title"]>
  >;
}) {
  return (
    <button
      data-is-active={isOpened}
      type="button"
      onClick={() => {
        setOpenedModule(menu.title);
      }}
      key={menu.title}
      className={`text-left p-6 relative rounded-lg flex flex-col gap-1 border overflow-hidden ${
        isOpened
          ? "border border-[#252A31] shadow-[0px_0px_0px_4px_#2F333B]"
          : "border-transparent opacity-50 "
      }`}
    >
      <h3 className="font-bold text-xl">{menu.title}</h3>
      <p className="text-lg leading-tight">{menu.description}</p>
    </button>
  );
}

function DeveloperApiMenu() {
  const bulletRef = useRef<HTMLDivElement>(null);
  const menuItemContainerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [openedMenu, setOpenedMenu] =
    useState<(typeof developerApiMenus)[number]["title"]>("Set a property");

  const codes = developerApiMenus.find((m) => m.title === openedMenu)!.codes;

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
        const height = item.clientHeight;

        if (lastActiveIndex < 0 || isBottomToTop) {
          const middle = Math.abs(
            containerRect.top -
              itemRect.top -
              height / 2 +
              bulletElement.clientHeight / 2
          );
          bulletElement.style.top = `${middle}px`;
          if (lineRef.current) {
            lineRef.current.style.top = `${middle - height / 2}px`;
            lineRef.current.style.height = `${height}px`;
          }
        } else {
          const middle = Math.abs(
            containerRect.top -
              itemRect.bottom +
              height / 2 +
              bulletElement.clientHeight / 2
          );

          bulletElement.style.top = `${middle}px`;
          if (lineRef.current) {
            lineRef.current.style.top = `${middle - height / 2}px`;
            lineRef.current.style.height = `${height}px`;
          }
        }
        break;
      }
    }
  }, [openedMenu]);

  return (
    <div className="w-full mt-8 flex flex-col md:flex-row gap-8 md:h-[520px]">
      <div className="flex w-full md:w-4/12 gap-5 shrink-0">
        <div className="h-full relative w-0.5 shrink-0 rounded-full flex justify-center bg-gradient-to-b from-10% from-[#4c90f02d] via-80% via-transparent">
          <div
            ref={lineRef}
            style={{ transition: "top 0.5s" }}
            className="absolute z-20 bg-gradient-to-b from-20% from-transparent via-60% via-[#4C90F0] to-80% to-transpfrom-transparent w-0.5 rounded-full"
          ></div>
          <div
            className="absolute z-20"
            ref={bulletRef}
            style={{ transition: "top 0.5s" }}
          >
            <div className="border-gray-600/60 border-4 rounded-full">
              <div className="border border-[#1C2127] rounded-full">
                <div className="h-3 w-3 bg-blue-500 border-2 border-[#1C2127] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col" ref={menuItemContainerRef}>
          {developerApiMenus.map((menu) => {
            return (
              <DeveloperApiMenuItem
                key={menu.title}
                isOpened={openedMenu === menu.title}
                menu={menu}
                setOpenedModule={setOpenedMenu}
              />
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
    images: [SolidWorksImage, OnshapeImage, SwImage, NxImage, IproImage],
    title: "CAD + Engineering Tools",
    description:
      "Build an end to end digital thread with the tools engineers know and love",
  },
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
    images: [GithubImage, PythonImage, GitlabImage],
    title: "Developer tools",
    description:
      "Build internal tools on top of Rollup or pull code in from your existing codebases with just a few clicks.",
  },
  // {
  //   images: [SmartsheetImage, JamaImage],
  //   title: "Program management",
  //   description:
  //     "Enhance your programmatic with digital threads and traceability..",
  // },
];

const securities = [
  {
    image: SOCImage,
    title: "SOC2",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
  {
    image: ItarImage,
    title: "ITAR Compatible",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
  {
    image: SelfHostImage,
    title: "Self-host or GovCloud",
    description:
      "Rollup was built from Day 1 with ITAR in-mind. Our professional and enterprise platform options allow you to collaborate on sensitive, controlled projects without comprising on having an incredible user experience.",
  },
  // {
  //   image: ItarImage,
  //   title: "ISO",
  //   description: "Maximum 2 sentence and the restrictions is 120 symbols",
  // },
];

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}

export function RiveComponent({
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

function RiveComponentInteractiveOnHover({
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
  const riveRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersectionObserver(riveRef, {
    freezeOnceVisible: true,
  });
  const isIntersect = !!intersection?.isIntersecting;

  const { rive, RiveComponent } = useRive(
    {
      src: src,
      autoplay: autoPlay,
      animations: animations ? "animation" : undefined,
    },
    { fitCanvasToArtboardHeight: true }
  );

  useEffect(() => {
    if (!rive || window.innerWidth >= 1280) return;
    if (isIntersect) {
      rive?.play();
    } else {
      rive?.stop("animation");
    }
  }, [isIntersect, rive]);

  return (
    <div ref={riveRef}>
      <RiveComponent
        className={className}
        onMouseLeave={() => playOnHover && rive && rive.pause()}
        onMouseEnter={() => playOnHover && rive && rive.play()}
      />
    </div>
  );
}

function HeadlineAnimation({ children }: { children: React.ReactNode }) {
  const styles = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
}

function HeroImageAnimation({ children }: { children: React.ReactNode }) {
  const styles = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
  });

  return <animated.div style={styles}>{children}</animated.div>;
}

const animationItemsOnHover = [
  {
    title: "Keyboard Navigation",
    description:
      "Jump between pages and contexts, and execute actions in milliseconds",
    riveUrl:
      "https://public.rive.app/hosted/311509/109748/wShhd5THq0GG0QZA44g4Tw.riv",
  },
  {
    title: "Drag and Drop",
    description: "Intuitive drag and drop interactions are everywhere.",
    riveUrl:
      "https://public.rive.app/hosted/311509/109749/yNB4JjwcnkKlEcur2guJ3w.riv",
  },
  {
    title: "Realtime",
    description:
      "Never think about refreshing the browser, or hitting save again.",
    riveUrl:
      "https://public.rive.app/hosted/311509/109750/etUe4KXQ3E25rXYWkhKewA.riv",
  },
  {
    title: "Reference any object anywhere",
    description:
      "Our powerful syntax for linking objects and their values means you&apos;ll never repeat yourself.",
    riveUrl:
      "https://public.rive.app/hosted/311509/109751/zzbOWOvUcEmYwTfbGqNXRw.riv",
  },
  {
    title: "Api",
    description:
      "Great engineering teams build their own tools. First-class APIs and Developer-friendly features mean you can incorporate Rollup into your new and exisgting systems easy.",
    riveUrl:
      "https://public.rive.app/hosted/311509/109752/tPSIiP4hREaS8ZFbPqd4Cg.riv",
  },
  {
    title: "Command Bar",
    description:
      "Our global command bar lets you do anything anywhere in seconds in Rollup.",
    riveUrl:
      "https://public.rive.app/hosted/311509/109753/Xy9a6mP-V0qFpUnZaOFTuA.riv",
  },
];

const customersLogo = [
  {
    logo: ChiplyticsLogo,
    name: "Chiplytics",
    url: "https://www.chiplytics.io/",
  },
  {
    logo: SparkmateLogo,
    name: "Sparkmate",
    url: "https://www.sparkmate.com/",
  },
  {
    logo: OrangewoodLogo,
    name: "Orangewood",
    url: "https://www.orangewood.co/",
  },
  {
    logo: VuecasonLogo,
    name: "Vuecason",
    url: "https://www.vuecason.com/",
  },
  {
    logo: NerosLogo,
    name: "Neros",
    url: "https://www.neros.tech/",
  },
] satisfies { name: string; logo: string; url: string }[];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rollup — Collaborative engineering environment</title>
      </Head>

      <NewLayout>
        <section className="">
          <div className="max-w-7xl px-4 mx-auto mt-16 md:mt-24 bg-[url('/img/home-bg-line.svg')] bg-no-repeat bg-cover bg-[50%_160px] md:bg-auto md:bg-[50%_70%] md:pb-12">
            <HeadlineAnimation>
              <div className="mx-auto flex flex-col gap-2 justify-center items-center">
                <h1 className="text-5xl font-bold text-center sm:text-5xl md:text-6xl lg:text-7xl md:font-semibold">
                  The Platform for Moonshots
                </h1>
                <p className="font-semibold text-lg text-center md:text-2xl">
                  The modern collaboration + low-code platform for engineering
                  teams.
                </p>
                <Link
                  href="https://app.rollup.ai/"
                  className="flex items-center rounded-sm gap-2 mt-6 transition-colors bg-[#2D72D2] hover:bg-[#215DB0] font-semibold text-white px-6 py-3"
                >
                  <span>Get Started</span>
                  <IconChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </HeadlineAnimation>
            <HeroImageAnimation>
              <div className="min-h-[200px] md:min-h-[413px] lg:min-h-[671px]">
                <RiveComponent
                  className="max-w-6xl mx-auto mt-10 md:mt-20"
                  src="https://public.rive.app/hosted/311509/111144/91nH-3Dgn06FpZU7YKk4IA.riv"
                />
              </div>
            </HeroImageAnimation>
          </div>
          <div
            id="customers"
            className="w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-y-0 md:gap-x-8 lg:gap-14 mt-10 md:mt-14 px-4"
          >
            {customersLogo.map((customer) => (
              <Link
                key={customer.name}
                href={customer.url}
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="hover:contrast-200"
              >
                <Image
                  quality={100}
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-[100px] md:max-w-none"
                />
              </Link>
            ))}
          </div>

          <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 md:mt-24 px-4">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              className="!pb-12 "
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i}>
                  <div className="p-6 md:p-9 border bg-white border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD] rounded-lg">
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
                      <div className="flex self-start ml-auto gap-2">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="max-w-7xl px-4 mx-auto mt-20 md:mt-40">
          <h2 className="font-bold text-4xl md:text-5xl">Modules</h2>
          <p className="text-xl md:text-2xl max-w-xl leading-tight mt-4 font-bold">
            Rollup had a variety of modules for every aspect of your engineering
            projects, all in one realtime, browser-based environment.
          </p>

          <ModulesMenu />
        </section>
        <section
          id="features"
          className="max-w-7xl px-4 mx-auto mt-20 md:mt-40"
        >
          <h2 className="font-bold text-4xl md:text-5xl">
            Collaboration Features
          </h2>
          <p className="text-xl md:text-2xl max-w-xl leading-tight mt-4 font-bold">
            Rollup is the easiest way to collaborate with your engineering team
            across disciplines.
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
                <h3 className="font-bold text-2xl">Annotations</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  From 3D CAD to 2D Drawings, to PDFs, images, and more --
                  markup your engineering media and files with built-in
                  annotations.
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

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              className="!pb-12 custom-grid mt-12 home-swiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: "auto",
                },
              }}
            >
              {animationItemsOnHover.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="border h-full flex flex-col gap-8 rounded-lg hover:border-[#4C90F0] transition-colors border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                    <RiveComponentInteractiveOnHover
                      playOnHover={true}
                      autoPlay={false}
                      animations={false}
                      src={item.riveUrl}
                      className="w-full"
                    />
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section
          id="integrations"
          className="max-w-7xl px-4 mx-auto mt-20 md:mt-40"
        >
          <h2 className="font-bold text-4xl md:text-5xl">Integrations</h2>
          <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mt-14">
            {integrations.map((integration) => (
              <div
                key={integration.title}
                className="border leading-tight border-[#DBE4EF] rounded-lg p-6 md:p-9 w-full shadow-[0px_0px_0px_4px_#F4F8FD]"
              >
                <div className="flex gap-2 lg:gap-6 flex-wrap">
                  {integration.images.map((image, i) => (
                    <div
                      className="h-10 md:h-12 w-10 md:w-12 shadow-[0px_0px_0px_4px_#F4F8FD] p-2 flex items-center justify-center border border-[#DBE4EF] rounded-lg"
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
                <div className="mt-4 md:mt-6">
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
              Our user-friendly API is accessible for all paid plan users.
              <br />
              Leverage our API to build internal apps on top of your data in
              Rollup, or build and package integrations to distribute.
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
                <div className="flex flex-col justify-center items-center text-center  leading-none max-w-xs">
                  <Image
                    src={security.image}
                    alt={security.title}
                    quality={100}
                    className=" object-contain max-h-28"
                  />
                  <h3 className="font-semibold text-2xl mt-5">
                    {security.title}
                  </h3>
                  <p className="text-lg mt-2 ">{security.description}</p>
                  <Link href="#" className="font-medium underline mt-4">
                    Learn More
                  </Link>
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
      </NewLayout>
    </>
  );
}
