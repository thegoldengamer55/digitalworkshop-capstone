import React, { useLayoutEffect } from "react";
import ContactMain from "../components/Contact/ContactMain/ContactMain";
import ContactForm from "../components/Contact/ContactForm/ContactForm";

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ContactMain />
      <ContactForm />
    </>
  );
};

export default Contact;
