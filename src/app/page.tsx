"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { CheckCircle, Shield, Zap } from "lucide-react";

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
        { name: "Home", id: "/" },
        { name: "Verify Certificate", id: "/verify" },
      ]}
      brandName="KoboMaster"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Kobotoolbox Mastery"
      description="Unlock the power of digital data collection. Join our comprehensive training course conducted via WhatsApp groups and become a professional field data specialist."
      buttons={[
        { text: "Start Learning", href: "#pricing" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="What is Kobotoolbox?"
      description="Kobotoolbox is the world's most popular open-source data collection platform. Our training course guides you through practical modules delivered directly to your WhatsApp group."
      bulletPoints={[
        { title: "WhatsApp Delivery", description: "Receive lessons and support through dedicated interactive groups." },
        { title: "Expert Guidance", description: "Direct access to instructors for personalized troubleshooting." },
        { title: "Offline Capability", description: "Collect data in remote locations with ease." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/business-partners-working-together-project_9975-22883.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { icon: CheckCircle, title: "Certified Expert", description: "Gain an official certificate upon course completion." },
        { icon: Shield, title: "Secure Data", description: "Learn industry-standard protocols for data privacy." },
        { icon: Zap, title: "Efficient Workflows", description: "Maximize your team's efficiency in the field." },
      ]}
      title="Why Choose Our Course"
      description="Comprehensive modules designed for field researchers, NGOs, and data specialists."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Ahmed", imageSrc: "http://img.b2bpic.net/free-photo/confident-handsome-businessman-suit-glasses-looking-serious_176420-31755.jpg" },
        { id: "2", name: "Omar Khaleed", imageSrc: "http://img.b2bpic.net/factory-inspector-suit-monitoring-solar-panel-production-output_482257-125982.jpg" },
        { id: "3", name: "Layla Hassan", imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-scientist_23-2148820194.jpg" },
        { id: "4", name: "Youssef Ibrahim", imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg" },
        { id: "5", name: "Nour Ali", imageSrc: "http://img.b2bpic.net/free-photo/woman-hat-with-book-garden_1157-37040.jpg" },
      ]}
      cardTitle="What Our Students Say"
      cardTag="Success Stories"
      cardAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Training Fee"
      description="A single, comprehensive course to master Kobotoolbox."
      plans={[
        { 
          id: "whatsapp-course", 
          badge: "Best Value", 
          price: "$10", 
          subtitle: "Full Access WhatsApp Training", 
          buttons: [{ text: "Join WhatsApp Group", href: "https://chat.whatsapp.com/your-group-link-here" }], 
          features: ["All Core Modules", "WhatsApp Group Support", "Certified by Completion", "Lifetime Access"] 
        }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="KoboMaster"
      columns={[
        {
          title: "Platform", items: [
            { label: "Course", href: "/" },
            { label: "Verification", href: "/verify" },
          ],
        },
        {
          title: "Support", items: [
            { label: "Contact", href: "#contact" },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}