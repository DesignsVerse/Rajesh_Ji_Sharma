
import ServiceSection from "@/app/components/Services/Services";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DesignsVerse",
  description:
    "Explore our premium website development, digital marketing, and personal branding services at DesignsVerse. We craft SEO-friendly websites, powerful marketing strategies, and brand identities to elevate your online presence."
};

const ServicePage = () => {
  return (
    <>
      
      <ServiceSection />
    </>
  );
};

export default ServicePage;
