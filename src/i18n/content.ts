import { aboutStory } from "@/content/about";
import { brand } from "@/content/brand";
import { contactContent } from "@/content/contact";
import {
  businessValueTransformations,
  coreCapabilityFamilies,
  homeWorkflowSteps,
  problemGroups,
  productSurfaces,
} from "@/content/home";
import { howFlowWorksSteps } from "@/content/how-it-works";
import { footerNavigation, primaryNavigation, solutionNavigation } from "@/content/navigation";
import { pageContent } from "@/content/pages";
import { platformArchitectureStages, platformCore, platformLayers } from "@/content/platform";
import { solutions } from "@/content/solutions";
import { aboutStoryTh } from "@/content/th/about";
import { brandTh } from "@/content/th/brand";
import { contactContentTh } from "@/content/th/contact";
import { homeContentTh } from "@/content/th/home";
import { howFlowWorksStepsTh } from "@/content/th/how-it-works";
import { navigationTh } from "@/content/th/navigation";
import { pageContentTh } from "@/content/th/pages";
import { platformContentTh } from "@/content/th/platform";
import { solutionsTh } from "@/content/th/solutions";
import type { Locale } from "@/i18n/config";
import type {
  AboutStory,
  BrandContent,
  ContactContent,
  HomeContent,
  HowFlowWorksStep,
  NavigationContent,
  PageContentMap,
  PlatformContent,
  SolutionsContent,
} from "@/i18n/schema";

const navigationEn: NavigationContent = {
  primaryNavigation,
  solutionNavigation,
  footerNavigation,
};

const homeContentEn: HomeContent = {
  problemGroups,
  coreCapabilityFamilies,
  homeWorkflowSteps,
  productSurfaces,
  businessValueTransformations,
};

const platformContentEn: PlatformContent = {
  platformLayers,
  platformArchitectureStages,
  platformCore,
};

export type LocalizedContent = {
  brand: BrandContent;
  navigation: NavigationContent;
  pages: PageContentMap;
  home: HomeContent;
  platform: PlatformContent;
  solutions: SolutionsContent;
  howItWorks: readonly HowFlowWorksStep[];
  about: AboutStory;
  contact: ContactContent;
};

const englishContent: LocalizedContent = {
  brand,
  navigation: navigationEn,
  pages: pageContent,
  home: homeContentEn,
  platform: platformContentEn,
  solutions,
  howItWorks: howFlowWorksSteps,
  about: aboutStory,
  contact: contactContent,
};

const thaiContent: LocalizedContent = {
  brand: brandTh,
  navigation: navigationTh,
  pages: pageContentTh,
  home: homeContentTh,
  platform: platformContentTh,
  solutions: solutionsTh,
  howItWorks: howFlowWorksStepsTh,
  about: aboutStoryTh,
  contact: contactContentTh,
};

export function getLocalizedContent(locale: Locale): LocalizedContent {
  return locale === "th" ? thaiContent : englishContent;
}
