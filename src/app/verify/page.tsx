"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "Verify Certificate",          id: "/verify"},
      ]}
      brandName="KoboMaster"
    />
  </div>

  <div id="verification-form" data-section="verification-form">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      tag="Verification Portal"
      title="Verify Certificate"
      description="Enter your unique certificate code below to verify its authenticity and display holder information."
      inputPlaceholder="Enter certificate code"
      buttonText="Verify Now"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get Help"
      title="Still Need Assistance?"
      description="If you are having trouble verifying your certificate, please reach out to our support team directly."
      imageSrc="http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg"
      mediaAnimation="opacity"
      inputPlaceholder="Enter your inquiry"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="KoboMaster"
      columns={[
        {
          title: "Platform",          items: [
            {
              label: "Course",              href: "/"},
            {
              label: "Verification",              href: "/verify"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}