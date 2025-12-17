export type FeaturedSlide = {
  src: string;       // path under /public
  alt: string;
  title: string;
  href: string;      // project page
  accent?: "marina" | "lava";
};

export const featuredSlides: FeaturedSlide[] = [
  {
    src: "/projects/gulfstream/gulfstreamv3.png",
    alt: "Project Gulfstream pilot-ready unit",
    title: "Gulfstream",
    href: "/projects/gulfstream",
    accent: "marina",
  },
  {
    src: "/projects/hardtail/hardtailinstore.png",
    alt: "Project Hardtail pilot unit",
    title: "Hardtail",
    href: "/projects/hardtail",
    accent: "lava",
  },
  {
    src: "/projects/lightfoot/lightfootpilot.png",
    alt: "Project Lightfoot pilot installation",
    title: "Lightfoot",
    href: "/projects/lightfoot",
    accent: "marina",
  },
  {
    src: "/projects/wiliot-mdk/MDKcad.png",
    alt: "Wiliot MDK CAD",
    title: "Wiliot MDK",
    href: "/projects/wiliot-mdk",
    accent: "marina",
  },
  {
    src: "/projects/element-science-adhesive-testing/elementfinalresult.png",
    alt: "Element Science final sealed assembly result",
    title: "Element Science",
    href: "/projects/element-science-adhesive-testing",
    accent: "lava",
  },
];
