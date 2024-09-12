import ComingSoon from "@/components/shared/page/coming-soon";
import SectionProvider from "@/components/shared/provider/section-provider";
import React from "react";

type GuestbookPageProps = {};

const GuestbookPage: React.FC<GuestbookPageProps> = () => {
  return (
    <SectionProvider>
      <ComingSoon page="Guestbook" />
    </SectionProvider>
  );
};

export default GuestbookPage;
