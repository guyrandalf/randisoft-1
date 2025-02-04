import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Randisoft Recruit - AI-Powered Hiring Platform",
  description:
    "Transform your hiring process with AI-powered recruitment solutions",
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
