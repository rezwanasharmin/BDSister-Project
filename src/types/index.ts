export interface SectionExplainer {
  title: string;
  description: string;
  islamicOrSisterhoodNote?: string;
  howItWorks?: string[];
}

export interface WingItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  roleInBDSisters: string;
  iconName: string;
  badgeColor: string;
  linkUrl: string;
}

export interface KeyAreaItem {
  id: number;
  title: string;
  banglaTitle: string;
  description: string;
  icon: string;
  features: string[];
  explainer: SectionExplainer;
}

export interface ProductItem {
  id: string;
  title: string;
  sellerSister: string;
  brandName: string;
  brandVerified: boolean;
  mrpPrice: number;
  specialDiscountPrice: number;
  isWholesaleEligible: boolean;
  wholesaleMinQuantity?: number;
  wholesaleUnitPrice?: number;
  rating: number;
  totalReviews: number;
  category: "Products" | "Services";
  imageUrl: string;
  inStock: boolean;
}

export interface ForumTopicPreview {
  id: string;
  category: "Faith & Personal Growth" | "Family & Parenting" | "Sisters in Business" | "Health & Wellness" | "Skills Exchange";
  title: string;
  authorSister: string;
  isVerifiedMember: boolean;
  postedAt: string;
  excerpt: string;
  fullContentSample: string;
  replyCount: number;
  viewsCount: number;
  isModerated: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  wing: string;
  date: string;
  time: string;
  type: "Online Workshop" | "Sisterhood Halaqah" | "Business Masterclass" | "Skill Sharing";
  speaker: string;
  seatsLeft: number;
  isFree: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: "PDF Guide" | "Video Lecture" | "Worksheet" | "Curated Article";
  curatedBySister: string;
  downloadsOrReads: number;
  fileSizeOrDuration: string;
}
