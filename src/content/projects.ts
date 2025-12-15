export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "gulfstream",
    title: "Project Gulfstream",
    oneLiner: "Automated multi-signal checkout platform from prototype to 10-store pilot.",
    tags: ["Mechanical Design", "DFM", "Pilot Deployment"],
    featured: true,
  },
  {
    slug: "hardtail",
    title: "Project Hardtail",
    oneLiner: "Multisignal receipt checker supporting shrink reduction in pilot.",
    tags: ["Integration", "Sensing", "Deployment"],
    featured: true,
  },
  {
    slug: "lightfoot",
    title: "Project Lightfoot",
    oneLiner: "Self-powering cart wheel with gearbox + alternator + power validation.",
    tags: ["Mechatronics", "Power", "Test"],
    featured: true,
  },
  {
    slug: "wiliot-mdk",
    title: "Wiliot MDK",
    oneLiner: "Cart-mounted mobile development kit with Bluetooth sensing.",
    tags: ["Hardware Integration", "Field Use"],
    featured: true,
  },
  {
    slug: "element-science-adhesive-testing",
    title: "Element Science – Adhesive Testing",
    oneLiner: "Adhesive selection + controlled dispensing + validation testing for sealed housings.",
    tags: ["Test & Validation", "Manufacturing"],
    featured: true,
  },
];
