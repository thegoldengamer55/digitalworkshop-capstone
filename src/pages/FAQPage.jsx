import React, { useLayoutEffect } from "react";
import FAQ from "../components/FAQ/FAQ";

const FAQPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <FAQ />
    </div>
  );
};

export default FAQPage;
