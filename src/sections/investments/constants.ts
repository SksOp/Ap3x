import { Investment } from "@/components/investments";

export const investment: Investment[] = [
  {
    id: 1,
    name: "Absolute",
    logoLink:
      "data:image/png;base64,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", //optional if not logo show the first letter of the name
    href: "htts://www.absolute.com",
    category: "Chain",
  },
  {
    id: 2,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
  {
    id: 3,
    name: "Absolute",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.absolute.com",
    category: "Chain",
  },
  {
    id: 4,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
  {
    id: 5,
    name: "Absolute",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.absolute.com",
    category: "Chain",
  },
  {
    id: 6,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Chain",
  },
  {
    id: 7,
    name: "Absolute",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.absolute.com",
    category: "Chain",
  },
  {
    id: 8,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Chain",
  },
  {
    id: 9,
    name: "Absolute",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.absolute.com",
    category: "Chain",
  },
  {
    id: 10,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
  {
    id: 10,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
  {
    id: 10,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
  {
    id: 10,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
  {
    id: 10,
    name: "Binance",
    logoLink: "", //optional if not logo show the first letter of the name
    href: "htts://www.binance.com",
    category: "Industry",
  },
];
