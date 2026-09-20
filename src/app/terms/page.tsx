import type { Metadata } from "next";
import LegalPage, { H2, P, UL } from "@/components/LegalPage";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | StyleChild Parties & Events",
  description: "Booking, deposit, payment, guest-count and website terms for StyleChild Parties & Events in Boca Raton, Florida.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage
      tag="Terms"
      title="Terms & Conditions"
      intro={`These terms apply to your use of this website and to parties, events and activations booked with ${BRAND.legal} ("StyleChild", "we", "us"). By using the site or booking with us, you agree to them.`}
    >
      <H2>1. Inquiries and quotes</H2>
      <P>Submitting a form or calling us is a request for information and does not reserve a date. Pricing shown on this site is starting pricing and may change based on personalization, premium products, specialty inventory or event complexity. Your written proposal or invoice controls if it differs from the website.</P>

      <H2>2. Reserving your date</H2>
      <UL items={[
        "A 50% non-refundable deposit is required to reserve your date. Dates are not held without a deposit.",
        "Your final guest count and final payment are due three weeks before the event.",
        "Weekend parties require a minimum of 10 children.",
        "Package pricing covers up to 10 or up to 20 guests as listed. Larger groups are available by custom quote.",
      ]} />

      <H2>3. Parties at StyleChild HQ</H2>
      <UL items={[
        "Parties at our Boca Raton location run 1.5 hours.",
        "Hosts may arrive 30 minutes early to set up additional food or décor.",
        "Food is not included unless it is listed as an add-on on your invoice.",
        "Please leave on time so we can prepare for the next celebration. Overtime may be billed if the space is available.",
      ]} />

      <H2>4. Off-site parties and activations</H2>
      <P>Off-site activations start at $750. Travel, delivery and additional staffing may apply. Large events may require additional attendants based on the activity and number of guests. The host is responsible for providing a safe, accessible space with adequate tables, shade or cover, and power where needed.</P>

      <H2>5. Changes, rescheduling and cancellations</H2>
      <P>Deposits are non-refundable. If you need to reschedule, contact us as early as possible and we will do our best to move your deposit to a new available date. Changes to theme, stations or personalization requested after the three-week deadline may not be possible or may incur additional cost. If StyleChild must cancel because of circumstances beyond our control, such as severe weather, a declared emergency or venue closure, we will offer a new date or a refund of amounts paid for services not delivered.</P>

      <H2>6. Character appearances and third-party vendors</H2>
      <P>Princess, superhero and other character visits, dance instructors and similar services are subject to availability. If a specific performer becomes unavailable, we will provide a comparable substitute or adjust your invoice.</P>

      <H2>7. Supervision, allergies and safety</H2>
      <UL items={[
        "A parent, guardian or designated adult host must remain on site for the duration of the party and is responsible for supervising guests.",
        "Crafts use small parts such as beads, charms and gems, along with markers, adhesives and heat-transfer equipment operated by our staff. Activities are adjusted for age, but small parts are not suitable for children under 3.",
        "Tell us in advance about allergies or sensitivities. Candy and cupcake add-ons may contain or come into contact with common allergens including nuts, dairy, wheat, soy and eggs.",
        "Paint markers and transfers are permanent. We recommend guests wear clothing that can get messy. StyleChild is not responsible for stained clothing or personal items.",
      ]} />

      <H2>8. Personalized items</H2>
      <P>Please double-check the spelling of names and guest lists you send us. Personalized items are made to order and cannot be returned or exchanged. Sizes for wearable items such as sneakers, slippers, tees and sweatshirts are due with your final guest count. Items, colors and icons shown on this website are examples and may vary with inventory.</P>

      <H2>9. Bash in a Box</H2>
      <P>Shipped parties are sent to the address you provide. Delivery dates from carriers are estimates. Inspect your box on arrival and contact us within 48 hours about missing or damaged items so we can make it right before your party.</P>

      <H2>10. Photos and video</H2>
      <P>Our team may take photos or video during events. We will not use identifiable images of children in our marketing without permission from a parent or guardian. See our Privacy Policy for details.</P>

      <H2>11. Website content</H2>
      <P>All content on this site, including the StyleChild name, logo, graphics, photos, video and text, belongs to StyleChild or its licensors and may not be copied or used without written permission. Some images on this site are illustrative and may be digitally created to show the type of activities we offer.</P>

      <H2>12. Communications</H2>
      <P>By submitting your contact details, you agree that we may contact you by phone, text or email about your inquiry or booking. Message and data rates may apply. Reply STOP to opt out of texts.</P>

      <H2>13. Limitation of liability</H2>
      <P>To the fullest extent permitted by law, StyleChild&apos;s total liability for any claim related to an event or this website is limited to the amount you paid us for that event. We are not liable for indirect, incidental or consequential damages. Nothing in these terms limits liability that cannot be limited under applicable law.</P>

      <H2>14. Governing law</H2>
      <P>These terms are governed by the laws of the State of Florida. Any dispute will be brought in the state or federal courts located in Palm Beach County, Florida.</P>

      <H2>15. Changes to these terms</H2>
      <P>We may update these terms from time to time. The version posted here on the date of your booking applies to that booking. Questions? Call {BRAND.phone} or email {BRAND.email}.</P>
    </LegalPage>
  );
}
