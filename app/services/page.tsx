import Service from "@/app/components/Services/services";
import ServiceSection from "@/app/components/Services/services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "हमारी सेवाएं | पंडित दीपक गौतम जी",
  description:
    "पंडित दीपक गौतम जी से ज्योतिष, मंत्र-साधना, पूजा-पाठ और धार्मिक अनुष्ठानों की अनुभवी सेवाएं प्राप्त करें। शत्रु नाश, सफलता प्राप्ति और आध्यात्मिक समाधान के लिए संपर्क करें।"
};

const ServicePage = () => {
  return (
    <>
      <Service/>
    </>
  );
};

export default ServicePage;
