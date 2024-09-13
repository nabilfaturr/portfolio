import ComingSoon from "@/components/shared/page/coming-soon";
import SectionProvider from "@/components/shared/provider/section-provider";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | nabilfaturr",
  description:
    "Nabil Faturrahman's guestbook page. kindly leave a message for me. thank you!",
};

type GuestbookPageProps = {};

const GuestbookPage: React.FC<GuestbookPageProps> = () => {
  return (
    <SectionProvider>
      <ComingSoon page="Guestbook" />
    </SectionProvider>
  );
};

export default GuestbookPage;
