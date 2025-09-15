import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const data = [
  {
    title: 'Who is LearnFast Pro for?',
    description:
      "LearnFast Pro is built for professionals who want to accelerate their growth in UX, product design, research, and related roles. Whether you're just starting your career or looking to sharpen advanced skills, LearnFast Pro gives you full access to interactive courses, briefs, assessments, career paths, and certification—everything you need to grow faster and showcase your expertise.",
  },
  {
    title: 'Can I cancel my subscription?',
    description:
      'Yes, you can cancel your subscription at any time through your account settings. Your Pro access will remain active until the end of your current billing period.',
  },
  {
    title: 'What happens to my progress if I cancel LearnFast Pro?',
    description:
      'If you cancel, you’ll retain access to your certificates, skill graph, and learning history. However, you’ll lose access to Pro-only features—like locked course content, assessment retakes, detailed insights, and project feedback. You can always upgrade again to restore full access.',
  },

  {
    title: 'Can I expense my LearnFast subscription through my company?',
    description:
      "Yes, many of our users expense LearnFast through their learning & development budget. If you're learning individually, you can submit your invoice to your employer. If you're part of a team or manage others, check out LearnFast for Teams for advanced team features, reporting, and admin controls.",
  },
  {
    title: 'Do you offer refunds?',
    description:
      'We generally do not offer refunds, but we review all refund requests on a case-by-case basis. If you believe there’s a special circumstance, please contact us at support@LearnFast.com, and our team will be happy to review your situation.',
  },
  {
    title: 'Do I need to pay separately for the Professional UX Certification?',
    description:
      "No. Access to the certification exam and your certificate is included with an active LearnFast Pro subscription. There are no additional fees unless you're purchasing the certification as a standalone offering outside of Pro.",
  },
  {
    title: 'Will I receive an invoice for my LearnFast Pro subscription?',
    description:
      'Yes. Invoices are automatically emailed to the address associated with your LearnFast account after payment is processed. If you need help locating your invoice or require a custom invoice (e.g. for expensing), contact support@LearnFast.com.',
  },
  {
    title: 'What payment methods do you accept?',
    description:
      'We currently accept Visa, Mastercard, Apple Pay, and Google Pay.',
  },
  {
    title: 'Do you offer student discounts?',
    description:
      'Yes — we offer a 62.5% discount on the yearly plan for students. To activate your discount, send a valid student ID or enrollment confirmation to our support team, and we’ll apply it to your account.',
  },
  {
    title: 'Do you offer team or enterprise pricing?',
    description:
      'Yes. We offer flexible pricing for teams of all sizes—from startups to global organizations. With LearnFast for Teams, you get admin tools, progress tracking, centralized billing, and discounted volume pricing. Contact our team to request a custom quote or start a trial for your team.',
  },
]

export function FAQs() {
  return (
    <section className="flex w-full max-w-3xl flex-col items-center gap-4 py-6 max-md:px-8 sm:gap-6">
      <h2 className="text-popover-foreground mr-auto text-2xl font-semibold">
        FAQs
      </h2>
      <div className="grid w-full grid-cols-1">
        <div className="w-full">
          <Accordion type="single" collapsible={true} defaultValue="item-0">
            {data.map((feature, index) => (
              <AccordionItem key={index} value={'item-' + index}>
                <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline md:text-lg">
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2 flex flex-col gap-3 text-base">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
