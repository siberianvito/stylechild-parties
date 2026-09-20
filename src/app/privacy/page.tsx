import type { Metadata } from "next";
import LegalPage, { H2, P, UL } from "@/components/LegalPage";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | StyleChild Parties & Events",
  description: "How StyleChild Parties & Events collects, uses and protects the information you share when you plan a party with us.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      tag="Privacy"
      title="Privacy Policy"
      intro={`This policy explains what ${BRAND.legal} ("StyleChild", "we", "us") collects when you use this website or ask us about a party, how we use it, and the choices you have.`}
    >
      <H2>1. Information we collect</H2>
      <P>We collect the information you choose to give us and a small amount of technical data your browser sends automatically.</P>
      <UL items={[
        <><strong>Inquiry details:</strong> parent or guardian name, phone number, email address, preferred party date, party type, location preference, theme, approximate guest count and any notes you add.</>,
        <><strong>Child information:</strong> only what you choose to share to plan the party, such as your child&apos;s age, first name for personalization, or allergies. We ask that this information be provided by a parent or guardian.</>,
        <><strong>Booking and payment details:</strong> if you book, we collect what is needed to issue invoices and process your deposit and final payment. Card payments are handled by our payment processor. We do not store full card numbers on this website.</>,
        <><strong>Technical data:</strong> IP address, device and browser type, pages viewed and referring page, collected through cookies and similar technologies.</>,
      ]} />

      <H2>2. How we use your information</H2>
      <UL items={[
        "To respond to your inquiry, check availability and prepare a party proposal.",
        "To plan, personalize, host and follow up on your event.",
        "To send service messages about your booking, such as confirmations, reminders and final guest-count requests.",
        "To measure and improve our website and advertising.",
        "To meet legal, tax and accounting obligations.",
      ]} />

      <H2>3. Calls, texts and email</H2>
      <P>When you submit the form or call us, you agree that StyleChild may contact you by phone, text message or email at the contact details you provided about your inquiry or booking. Message and data rates may apply. Message frequency varies. Reply STOP to any text to opt out and HELP for help. Consent to receive marketing texts is not a condition of purchase. We do not sell or share mobile phone numbers or text-messaging consent with third parties for their marketing.</P>

      <H2>4. Cookies, analytics and advertising</H2>
      <P>We use cookies and similar technologies to keep the site working, understand how visitors use it and measure the performance of our ads. This may include Google Ads and Google Analytics, which can set cookies and collect technical data to report conversions and show relevant ads. You can control cookies in your browser settings and opt out of personalized Google ads at adssettings.google.com.</P>

      <H2>5. How we share information</H2>
      <P>We do not sell your personal information. We share it only with:</P>
      <UL items={[
        "Service providers who help us run the business, such as form delivery and email, customer-relationship software, payment processing, website hosting and analytics, under obligations to protect it.",
        "Entertainers or vendors involved in your specific party, limited to what they need, for example a character performer's arrival details.",
        "Authorities or advisors when required by law or to protect our rights, guests or property.",
        "A successor business in the event of a merger, sale or reorganization.",
      ]} />

      <H2>6. Photos and video at parties</H2>
      <P>We love sharing party moments, but we will not use identifiable photos or video of your child or guests in our marketing without the permission of a parent or guardian. If you gave permission and change your mind, contact us and we will remove the content from channels we control.</P>

      <H2>7. Children&apos;s privacy</H2>
      <P>This website is intended for parents and guardians. We do not knowingly collect personal information online directly from children under 13. If you believe a child has submitted information to us, contact us and we will delete it.</P>

      <H2>8. Retention and security</H2>
      <P>We keep inquiry and booking records for as long as needed to provide our services and meet legal and accounting requirements, then delete or anonymize them. We use reasonable administrative, technical and physical safeguards, but no method of transmission or storage is completely secure.</P>

      <H2>9. Your choices and rights</H2>
      <P>You may ask us to access, correct or delete the personal information we hold about you, or to stop marketing messages, by emailing {BRAND.email} or calling {BRAND.phone}. Depending on where you live, you may have additional rights under state privacy law. We will not discriminate against you for exercising them.</P>

      <H2>10. Third-party links</H2>
      <P>Our site links to other sites, including our shop at stylechild.com and our social media pages. Their privacy practices are governed by their own policies.</P>

      <H2>11. Changes to this policy</H2>
      <P>We may update this policy from time to time. The date at the top shows when it was last revised. Continued use of the site after a change means you accept the updated policy.</P>
    </LegalPage>
  );
}
