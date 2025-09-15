import { PrismaClient } from '../src/lib/generated/prisma'

import { ICourse, CourseLevel } from '@/lib/types'

const prisma = new PrismaClient()

const courses: ICourse[] = [
  {
    title: 'Introduction to ChatGPT',
    summary:
      'Learn to leverage ChatGPT for faster design decisions and streamlined project management workflows',
    cover: '/courses/course-cover-1.svg',
    exp: 4500,
    duration: 120, // in minutes
    level: CourseLevel.INTERMEDIATE,
    lessons: [
      {
        title: 'Getting Started with ChatGPT',
        description: 'Introduction to ChatGPT and its capabilities.',
      },
      {
        title: 'Basic Prompting Techniques',
        description:
          'Learn how to craft effective prompts for better responses.',
      },
      {
        title: 'Advanced Prompting Strategies',
        description: 'Explore advanced techniques for complex queries.',
      },
      {
        title: 'ChatGPT for UX Writing',
        description: 'Using ChatGPT to generate user-centric copy.',
      },
      {
        title: 'Synthesizing User Research',
        description:
          'Leverage ChatGPT to analyze and summarize user research data.',
      },
      {
        title: 'Design Documentation Automation',
        description: 'Automate the creation of design documents with ChatGPT.',
      },
      {
        title: 'Project Status Reporting',
        description: 'Generate comprehensive project status reports quickly.',
      },
      {
        title: 'Meeting Notes and Action Items',
        description: 'Use ChatGPT to transcribe and summarize meeting notes.',
      },
      {
        title: 'Creating User Personas',
        description: 'Develop detailed user personas using AI assistance.',
      },
      {
        title: 'Task and Project Planning',
        description:
          'Streamline project planning with ChatGPT-generated plans.',
      },
      {
        title: 'Ethical Considerations',
        description:
          'Understand the ethical implications of using AI in design and management.',
      },
      {
        title: 'Building a Prompt Library',
        description:
          'Create a reusable library of effective prompts for various scenarios.',
      },
    ],
    whatYouWillLearn: [
      'Accelerate Design Workflows — Speed up UX copy creation, persona development, and design documentation with AI assistance.',
      'Streamline Project Management — Generate status reports, meeting notes, and project plans in minutes instead of hours.',
      'Master Prompt Engineering — Learn the exact techniques for crafting prompts that deliver useful, accurate results.',
      'Boost Creative Output — Overcome creative blocks with AI-powered brainstorming for both design and project solutions.',
    ],
    description:
      "ChatGPT has become an essential tool for modern product teams, fundamentally changing how designers and project managers approach their daily tasks. This practical course demystifies AI-powered workflows and equips you with immediately applicable skills for leveraging ChatGPT in professional contexts. Through hands-on exercises and real-world examples, you'll learn the skill of prompt engineering specifically tailored to design and project management challenges. Starting with core ChatGPT mechanics and basic prompt structures, you'll quickly advance to role-specific applications like UX writing, user research synthesis, and project documentation. By the final level, you'll be creating sophisticated multi-step workflows and building your own library of reusable prompt templates. Each lesson combines theory with practice, ensuring you can immediately apply what you learn to real projects. What sets this course apart is its focus on professional product development scenarios. Rather than generic ChatGPT tips, every example and exercise relates directly to the challenges designers and project managers face daily. You'll learn to generate compelling UX copy, transform meeting notes into actionable documentation, create user personas from research data, and streamline repetitive tasks that typically consume hours of your week. The course emphasizes both the possibilities and limitations of AI assistance, helping you develop judgment about when and how to best leverage ChatGPT while maintaining quality and human insight in your work.",
    author: {
      name: 'Colin Michael Pace',
      avatar: '/courses/users/user-1.jpg',
      role: 'CPO',
      bio: "As a seasoned Product Designer and Product Manager with a global perspective, I transform complex challenges into elegant solutions. My self-taught journey has given me a unique approach to design thinking, which I've successfully applied across startups and enterprise environments. Having collaborated with diverse teams spanning from the USA to Italy and India, I bring a rich understanding of cross-cultural product development. Currently, I'm channeling my expertise into democratizing professional education through Uxcel, where we're reimagining career development as an engaging, game-like experience. What sets me apart is my blend of entrepreneurial spirit, hands-on expertise, and a passionate commitment to education.",
    },
  },
  {
    title: 'Product Management for Designers',
    summary:
      'Learn product management for UX designers: PM skills, strategy & cross-functional collaboration.',
    level: CourseLevel.INTERMEDIATE,
    cover: '/courses/course-cover-2.svg',
    exp: 5200,
    duration: 150, // in minutes
    whatYouWillLearn: [
      'Master outcome-driven thinking — Shift from features to measurable impact using OKRs and hypothesis-driven design',
      'Discover problems worth solving — Learn PM techniques for finding, validating, and framing high-value user problems',
      'Influence without authority — Build trust and drive decisions through evidence-based storytelling and collaboration',
      'Navigate product strategy — Understand how to connect daily work to business goals and strategic priorities',
    ],
    lessons: [
      {
        title: 'The Product Mindset',
        description: 'Understanding the shift from design to product thinking.',
      },
      {
        title: 'Outcome vs. Output',
        description:
          'Learning to focus on outcomes rather than just delivering features.',
      },
      {
        title: 'Understanding OKRs',
        description: 'Using Objectives and Key Results to align team goals.',
      },
      {
        title: 'Problem Discovery',
        description: 'Techniques for identifying user problems.',
      },
      {
        title: 'Hypothesis-Driven Design',
        description:
          'Framing design work as hypotheses to be tested and validated.',
      },
      {
        title: 'Prioritization Frameworks',
        description: 'Using RICE and other methods to prioritize features.',
      },
      {
        title: 'Stakeholder Management',
        description:
          'Building relationships and influencing decisions without direct authority.',
      },
      {
        title: 'Product Roadmapping',
        description: 'Planning product development in alignment with strategy.',
      },
    ],
    description:
      "In today's product landscape, designers who understand product management principles are invaluable. This course bridges the gap between design and product, teaching you essential PM frameworks including OKRs (Objectives and Key Results), RICE prioritization, hypothesis-driven design, and product discovery techniques. You'll learn how to identify high-value problems, prioritize features based on impact, and communicate design decisions using data and user insights. Key skills you'll develop: outcome-focused thinking vs. feature delivery, user problem discovery and validation, stakeholder management and influence without authority, product roadmap planning, MVP design principles, and strategic storytelling. Through practical lessons on PM mindset, problem discovery, product process, and strategy, you'll gain tools used by product managers at leading tech companies. This course is perfect for UX/UI designers transitioning to product management, design leads working with PMs, product designers in startups, or any designer wanting to increase their strategic impact. By course completion, you'll speak the language of product management, contribute to product strategy discussions, and design solutions that balance user needs with business goals. Transform from a feature designer to a strategic product thinker who drives meaningful outcomes.",
    author: {
      name: 'Rosie Hoggmascall',
      avatar: '/courses/users/user-2.jpg',
      role: 'Product Manager',
      bio: 'Rosie is a Product Growth expert specialising in UX and monetisation, having worked with clients like Miro, Barclays Eagle Labs, Prolific, Thriva and Blinkist. She has 8 years experience across consulting and early stage startups funded by Index Ventures, EQT Capital, Alumni Ventures and Intel Capital. In 2024, she won Top Testing Influencers 2024 and ranked as a Top 10 writer on product growth on Medium. She also writes a weekly newsletter on product-led growth called Growth Dives 🪩',
    },
  },
  {
    title: 'Data-Driven Design',
    summary:
      'Learn to use data to inform and validate your design decisions and improve user experiences.',
    cover: '/courses/course-cover-3.svg',
    exp: 3800,
    duration: 450, // in minutes
    level: CourseLevel.BEGINNER,
    whatYouWillLearn: [
      'Understand key UX metrics — Learn which metrics matter and how to track them effectively',
      'Leverage analytics tools — Get hands-on experience with Google Analytics, Hotjar, and more',
      'Conduct A/B testing — Design and analyze experiments to validate design decisions',
      'Create data-informed designs — Use insights to drive user-centric design improvements',
    ],
    lessons: [
      {
        title: 'Introduction to Data-Driven Design',
        description:
          'Understanding the importance of data in design decisions.',
      },
      {
        title: 'Key UX Metrics',
        description:
          'Identifying and tracking important user experience metrics.',
      },
      {
        title: 'Analytics Tools Overview',
        description:
          'Getting started with tools like Google Analytics, Hotjar, and Mixpanel.',
      },
      {
        title: 'Setting Up Analytics',
        description: 'Implementing analytics tracking on your website or app.',
      },
      {
        title: 'Data Interpretation',
        description:
          'Learning to read and interpret data to inform design choices.',
      },
      {
        title: 'A/B Testing Fundamentals',
        description:
          'Designing and conducting A/B tests to validate design changes.',
      },
      {
        title: 'User Behavior Analysis',
        description:
          'Using data to understand user behavior and identify pain points.',
      },
      {
        title: 'Data-Driven Design Process',
        description: 'Integrating data analysis into your design workflow.',
      },
      {
        title: 'Case Studies',
        description:
          'Examining real-world examples of data-driven design success.',
      },
      {
        title: 'Ethical Considerations',
        description:
          'Understanding privacy and ethical issues in data collection and analysis.',
      },
    ],
    description:
      "Learn the basic UI (user interface) components that every designer and developer uses when creating technology products. UI components come in many shapes, sizes, and levels of complexity, and it's important to master them all. In this introductory course, you'll learn about the essential components, their definitions, and best practices. With this course, you'll gain knowledge on how to design various styles of buttons, checkboxes, radio buttons, and other selection controls. You'll also learn how to create informative and appealing labels that inspire users to take action. Forms, cards, modals, sliders, and menus are UI components that are present in any interface, and we discuss all aspects of their styles, alignment, and copy. After completing this course, you'll be able to apply the best practices to design essential UI elements that meet users' needs and expectations. We'll focus on the principles of consistency and familiarity to teach you how to design interfaces that are intuitive and help users accomplish their main goals.",
    author: {
      name: 'Alexis Dean',
      avatar: '/courses/users/user-3.jpg',
      role: 'Data Analyst',
      bio: 'Alexis is a Data Analyst with over 10 years of experience in turning complex data into actionable insights. She has worked across various industries, including tech, finance, and healthcare, helping companies leverage data to drive strategic decisions. Alexis is passionate about teaching and has conducted numerous workshops on data analytics, visualization, and data-driven decision-making. She believes that data is a powerful tool for innovation and is dedicated to helping others unlock its potential.',
    },
  },
  {
    title: 'User Psychology',
    summary:
      'Learn the psychological principles behind user behavior and decision-making. Master core concepts in user psychology to help you design more engaging products.',
    cover: '/courses/course-cover-4.svg',
    exp: 4250,
    duration: 300, // in minutes
    description:
      "Understanding user psychology can transform the way you approach product design and development. You don’t need a psychology degree to see that human behavior follows predictable patterns. Many psychological studies reveal valuable insights that can be applied to creating better user experiences. Take the famous 'Gorilla Experiment,' for instance: viewers watching a video of students passing a basketball often fail to notice a person in a gorilla suit. This demonstrates how people can miss obvious details when focused on a task—emphasizing the importance of clear, intuitive design that guides users’ attention where it matters most. In Uxcel's User Psychology course, we’ll show you how understanding psychology can drive better product outcomes. We’ll explore why a single negative experience can turn users away and how to avoid cognitive biases that influence decision-making. You’ll discover why the number of menu options isn’t always seven and what Miller’s Law really tells us about human memory. The course delves into three key psychological needs that fuel user engagement, plus why understanding user memory is essential for creating frictionless experiences. You’ll also gain insights into building trust through strategies like free trials and why deceptive patterns can undermine your product. Lastly, we'll cover how seemingly small details—like progress trackers or positive reinforcement messages—can significantly boost user satisfaction and retention. This course provides a comprehensive guide to creating user-centered designs that are informed by psychological principles, helping you craft products that resonate with your audience.",
    level: CourseLevel.INTERMEDIATE,
    whatYouWillLearn: [
      'Understand core psychological principles — Learn key concepts like cognitive biases, decision-making processes, and emotional triggers',
      'Apply psychology to design — Use insights to create more engaging and user-friendly products',
      'Enhance user engagement — Design experiences that resonate with users on a deeper psychological level',
      'Build trust and credibility — Learn techniques to establish trust through design and communication',
    ],
    lessons: [
      {
        title: 'Introduction to User Psychology',
        description:
          'Explore the fundamentals of user psychology and its importance in design.',
      },
      {
        title: 'Cognitive Biases in Design',
        description:
          'Learn about common cognitive biases and how to mitigate their effects in your designs.',
      },
      {
        title: 'Emotional Design Principles',
        description:
          'Understand the role of emotions in user experience and how to design for them.',
      },
      {
        title: 'Building Trust with Users',
        description:
          'Discover strategies for establishing trust and credibility through design.',
      },
      {
        title: 'Decision-Making Processes',
        description:
          'Examine how users make decisions and how to influence those decisions through design.',
      },
      {
        title: 'Designing for User Memory',
        description:
          "Learn how to design interfaces that align with users' memory processes.",
      },
      {
        title: 'Motivation and Engagement',
        description:
          'Explore techniques for motivating users and enhancing engagement with your product.',
      },
      {
        title: 'Ethical Considerations in User Psychology',
        description:
          'Understand the ethical implications of applying psychological principles in design.',
      },
      {
        title: 'Case Studies in User Psychology',
        description:
          'Analyze real-world examples of user psychology applied in design.',
      },
      {
        title: 'Future Trends in User Psychology',
        description:
          'Explore emerging trends and future directions in the field of user psychology.',
      },
      {
        title: 'Practical Applications and Exercises',
        description:
          'Engage in hands-on activities to apply user psychology principles in your design work.',
      },
      {
        title: 'Review and Next Steps',
        description:
          'Summarize key learnings and plan how to integrate user psychology into your design practice.',
      },
    ],
    author: {
      name: 'Alesya Dzenga',
      avatar: '/courses/users/user-4.jpg',
      role: 'Team Lead',
      bio: 'Alesya is a seasoned UX professional with over 8 years of experience in the field. She has worked with a variety of clients, from startups to large enterprises, helping them create user-centered designs that drive business success. Alesya is passionate about understanding user behavior and leveraging psychological principles to enhance user experiences. She has a background in cognitive psychology and frequently incorporates research findings into her design process. As a team lead, Alesya enjoys mentoring junior designers and fostering a collaborative environment where creativity and innovation thrive.',
    },
  },
  {
    title: 'Typography',
    summary:
      'Learn typography fundamentals, from typeface and font selection to layout and spatial arrangement, to create captivating designs that communicate powerfully.',
    duration: 420,
    exp: 5500,
    cover: '/courses/course-cover-5.svg',
    level: CourseLevel.ADVANCED,
    description:
      "Typography is an essential aspect of UX design, used in branding, copywriting, and UX writing. In this Typography course, you'll learn the history, concepts, and best practices of working with typography in UX design. You'll start by understanding the fundamentals of typography, including the anatomy of letterforms, typefaces, point sizes, line lengths, line-spacing, and letter-spacing. We'll delve into the importance of typography in branding and how it conveys a brand's personality, values, and emotions. Next, you'll learn the technical aspects of working with typography in UX design, such as choosing the right font file format, ensuring the type renders correctly across different devices and platforms, and maintaining consistency across a product using type systems. Throughout the course, you'll also learn about designing with accessibility in mind, including how to ensure legibility for users with visual impairments and how to choose typefaces that are easy to read. By the end of the course, you'll have a thorough understanding of typography in UX design and be able to create visually appealing, effective, and memorable designs that communicate a brand's message and values to its audience.",
    whatYouWillLearn: [
      'Master typography fundamentals — Learn key concepts like type anatomy, hierarchy, and spacing',
      'Choose the right typefaces — Understand how to select fonts that align with brand identity and enhance readability',
      'Design for accessibility — Create typographic designs that are inclusive and easy to read for all users',
      'Implement typography in UX design — Apply best practices for using typography in digital products',
    ],
    lessons: [
      {
        title: 'Introduction to Typography',
        description:
          'Learn the basics of typography and its importance in design.',
      },
      {
        title: 'Anatomy of Type',
        description:
          'Understand the different parts of letterforms and their functions.',
      },
      {
        title: 'Type Classifications',
        description:
          'Explore various type classifications and their characteristics.',
      },
      {
        title: 'Choosing Typefaces',
        description:
          'Learn how to select appropriate typefaces for different design contexts.',
      },
      {
        title: 'Typography Hierarchy',
        description:
          'Understand how to create visual hierarchy using typography.',
      },
      {
        title: 'Spacing and Alignment',
        description:
          'Master the principles of spacing and alignment in typography.',
      },
      {
        title: 'Typography in Branding',
        description: 'Discover how typography contributes to brand identity.',
      },
      {
        title: 'Responsive Typography',
        description:
          'Learn techniques for designing typography that adapts to different screen sizes.',
      },
      {
        title: 'Accessibility in Typography',
        description:
          'Understand how to create typographic designs that are accessible to all users.',
      },
      {
        title: 'Typography Tools and Resources',
        description:
          'Explore tools and resources for working with typography in design.',
      },
      {
        title: 'Case Studies in Typography',
        description:
          'Analyze real-world examples of effective typography in design.',
      },
      {
        title: 'Practical Typography Exercises',
        description:
          'Engage in hands-on activities to apply typography principles in your design work.',
      },
      {
        title: 'Review and Next Steps',
        description:
          'Summarize key learnings and plan how to integrate typography into your design practice.',
      },
    ],
    author: {
      name: 'Marco Paganelli',
      avatar: '/courses/users/user-5.jpg',
      role: 'Senior Designer',
      bio: 'Marco is a Senior Designer with over 12 years of experience in graphic and UX design. He has a deep passion for typography and has worked on numerous projects that highlight the power of type in visual communication. Marco has collaborated with leading brands to create compelling designs that effectively convey their messages. He is also an advocate for accessibility in design and frequently incorporates inclusive practices into his work. Marco enjoys sharing his knowledge through workshops and mentoring aspiring designers.',
    },
  },
  {
    title: 'Mobile Design',
    summary:
      'Learn mobile UI/UX patterns, workflows, and platform-specific strategies to create exceptional, user-friendly mobile experiences across different devices.',
    cover: '/courses/course-cover-6.svg',
    exp: 8500,
    duration: 680,
    level: CourseLevel.INTERMEDIATE,
    whatYouWillLearn: [
      'Understand mobile design principles — Learn key concepts like responsive design, touch interactions, and mobile-first thinking',
      'Master platform-specific guidelines — Get familiar with iOS and Android design systems and best practices',
      'Optimize user flows for mobile — Design seamless navigation and interactions tailored for mobile users',
      'Create engaging mobile experiences — Use visual design, microinteractions, and performance optimization to enhance user satisfaction',
    ],
    lessons: [
      {
        title: 'Introduction to Mobile Design',
        description:
          'Explore the fundamentals of mobile design and its importance in user experience.',
      },
      {
        title: 'Mobile Design Principles',
        description:
          'Understand key principles such as responsive design, touch interactions, and mobile-first thinking.',
      },
      {
        title: 'Platform-Specific Guidelines',
        description:
          'Get familiar with iOS and Android design systems and their best practices.',
      },
      {
        title: 'User Flows for Mobile',
        description:
          'Learn how to design seamless navigation and interactions tailored for mobile users.',
      },
      {
        title: 'Visual Design for Mobile',
        description:
          'Discover techniques for creating visually appealing mobile interfaces.',
      },
      {
        title: 'Microinteractions in Mobile Design',
        description:
          'Understand the role of microinteractions in enhancing user experience on mobile devices.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Learn strategies for optimizing mobile app performance to ensure a smooth user experience.',
      },
      {
        title: 'Accessibility in Mobile Design',
        description:
          'Understand how to create mobile designs that are accessible to all users.',
      },
      {
        title: 'Mobile Design Tools and Resources',
        description:
          'Explore tools and resources for working with mobile design.',
      },
      {
        title: 'Case Studies in Mobile Design',
        description: 'Analyze real-world examples of effective mobile design.',
      },
      {
        title: 'Practical Mobile Design Exercises',
        description:
          'Engage in hands-on activities to apply mobile design principles in your work.',
      },
      {
        title: 'Review and Next Steps',
        description:
          'Summarize key learnings and plan how to integrate mobile design into your practice.',
      },
      {
        title: 'Final Project: Designing a Mobile App',
        description:
          'Apply all the concepts learned in the course to design a complete mobile app from scratch.',
      },
    ],
    description:
      "Mobile devices have become a ubiquitous part of our daily lives, with more than 85% of the world's population using them regularly. As a result, mobile design has become an increasingly important aspect of digital design, requiring designers to understand the unique characteristics and constraints of mobile platforms. In this comprehensive course on mobile design, you will learn the fundamental skills needed to excel as a mobile designer. The course begins with an introduction to mobile design principles and user interface guidelines for both iOS and Android operating systems. You will then dive into the specifics of designing for mobile devices, including mobile platform nuances, mobile accessibility, and designing for different screen sizes. Throughout the course, you will explore the essential components of mobile design, such as layouts, typography, colors, and icons. You will also learn about designing for touch, mobile app design patterns, and responsive design. Additionally, the course will cover mobile design deliverables, including wireframes, prototypes, and user testing. By the end of this course, you will have gained the knowledge and practical skills necessary to create visually compelling, user-friendly, and engaging mobile designs that meet the unique needs and preferences of users. Whether you're starting a career in mobile design or looking to enhance your existing skills, this course is perfect for you.",
    author: {
      name: 'Denis Jeliazkov',
      avatar: '/courses/users/user-6.jpg',
      role: 'Mobile Designer',
      bio: 'Denis is a Mobile Designer with over 9 years of experience in creating intuitive and engaging mobile applications. He has worked with a variety of clients, from startups to established companies, helping them design mobile experiences that resonate with users. Denis is passionate about staying up-to-date with the latest mobile design trends and technologies, and he frequently shares his knowledge through workshops and online courses. He believes that great mobile design is about more than just aesthetics; it’s about understanding user needs and creating solutions that enhance their lives.',
    },
  },
  {
    title: 'Common Design Patterns',
    summary:
      'Learn design patterns most valued in product development to create intuitive, visually compelling experiences that seamlessly blend form and function.',
    cover: '/courses/course-cover-7.svg',
    exp: 6000,
    duration: 360,
    level: CourseLevel.BEGINNER,
    whatYouWillLearn: [
      'Learn how to onboard users without scaring them off — Explore helpful techniques to make user interaction as painless and simple as possible, so you can retain users and help them stay loyal to your product.',
      'Discover ways to design engaging communication experiences — Find ways to facilitate engaging conversational experiences when designing emails, chat functionalities, comment fields, and support sections.',
      'Explore the best practices for designing data grouping and presentation interfaces — Learn how to display information in activity feeds and dashboards in a clear and concise manner and how to make large amounts of data comprehensible for users.',
      'Discover the most effective ways to get users to convert using your design — Find ways to encourage users to complete key actions, such as signing up, booking, subscribing, or purchasing, by using persuasive flows and interfaces.',
    ],
    lessons: [
      {
        title: 'Introduction to Design Patterns',
        description:
          'Learn the basics of design patterns and their importance in UX design.',
      },
      {
        title: 'Navigation Patterns',
        description:
          'Explore various navigation patterns and their applications in different contexts.',
      },
      {
        title: 'Form Design Patterns',
        description:
          'Understand best practices for designing effective and user-friendly forms.',
      },
      {
        title: 'Content Organization Patterns',
        description:
          'Learn how to structure and organize content for optimal user experience.',
      },
      {
        title: 'Interaction Patterns',
        description:
          'Discover common interaction patterns and how to implement them effectively.',
      },
      {
        title: 'Visual Design Patterns',
        description:
          'Explore visual design patterns that enhance aesthetics and usability.',
      },
      {
        title: 'Responsive Design Patterns',
        description:
          'Learn how to create design patterns that adapt to different screen sizes and devices.',
      },
    ],
    description:
      "Design patterns are widely used solutions to frequently occurring problems in a given context. Understanding these patterns is essential for designers to create effective and efficient user experiences. This course introduces various design patterns, starting with the most common ones, such as signup, and login pages. You'll learn elegant ways to ask for user permissions and gain best practices for creating high-converting landing pages and smooth onboarding experiences. The course covers patterns for collecting user information, including email collection, email design, chat and messaging, and commenting. You'll learn how to create effective pricing pages, shopping carts, checkout pages, and booking pages for e-commerce websites. Additionally, the course covers patterns for keeping user information and providing them with feedback and support, as well as creating effective empty pages, dashboards, filtering and sorting pages, and other essential building blocks. By the end of the course, you will be proficient in implementing these common design patterns and creating user-friendly and efficient products that increase engagement and retention rates. By the end of this course, you will have gained proficiency in implementing these common design patterns, which will enable you to create user-friendly and efficient products that increase engagement and retention rates. With this knowledge, you will be able to deliver superior user experiences that meet users' needs while achieving business objectives.",
    author: {
      name: 'Gene Kamenez',
      avatar: '/courses/users/user-7.jpg',
      role: 'CEO',
      bio: 'Gene is the CEO and co-founder of Uxcel, a platform dedicated to helping designers enhance their skills and advance their careers. With over 15 years of experience in the design industry, Gene has a deep understanding of the challenges designers face and is passionate about providing accessible, high-quality education to help them succeed. Under his leadership, Uxcel has grown into a thriving community of designers from around the world, all committed to continuous learning and professional development.',
    },
  },
  {
    title: 'Leadership Mastery',
    summary:
      'Learn essential leadership principles to guide cross-functional teams, shape vision, and build a strong organizational culture for sustained long-term success.',
    duration: 180,
    exp: 7550,
    cover: '/courses/course-cover-8.svg',
    level: CourseLevel.ADVANCED,
    whatYouWillLearn: [
      'Enhance leadership skills — Gain a deeper understanding of what makes a successful design leader, not just a manager, learning how to inspire and guide teams effectively.',
      'Learn to manage remote teams — Explore strategies for building and maintaining trust and a strong team culture, even when managing designers remotely.',
      'Grab conflict resolution techniques — Learn how to handle challenging situations and conflicts within your team, ensuring a positive and productive work environment.',
      'Explore strategic team management practices — Understand how to assess both team and project performance effectively and discover the nuances of recruiting top talent.',
    ],
    lessons: [
      {
        title: 'Introduction to Leadership',
        description:
          'Understanding the fundamentals of leadership and its importance in design.',
      },
      {
        title: 'Leadership Styles',
        description:
          'Exploring different leadership styles and their applications in various contexts.',
      },
      {
        title: 'Building and Leading Teams',
        description:
          'Learning how to build, manage, and inspire effective design teams.',
      },
      {
        title: 'Communication Skills for Leaders',
        description:
          'Developing essential communication skills to lead and influence others.',
      },
      {
        title: 'Conflict Resolution',
        description:
          'Understanding how to manage and resolve conflicts within teams.',
      },
      {
        title: 'Strategic Thinking and Decision Making',
        description:
          'Learning how to think strategically and make informed decisions as a leader.',
      },
      {
        title: 'Mentoring and Coaching',
        description:
          'Exploring techniques for mentoring and coaching team members for growth and development.',
      },
      {
        title: 'Leading Remote Teams',
        description:
          'Understanding the challenges and best practices for leading remote design teams.',
      },
    ],
    description:
      "When you hear the term 'leader,' you might imagine someone akin to a superhero — leading teams, inspiring action, and making significant impacts. And you wouldn't be far off the mark. A leader is passionate about the product they work on, champions user experience, mentors others, and is unafraid to take risks and voice opinions. But is a team leader the same as a team manager? Not exactly. While a team leader may not always hold a managerial role, a team manager lacking leadership qualities could face challenges. Leadership entails crucial traits such as strategic thinking, empathy, decisiveness, and the ability to inspire and motivate others. Managing teams, especially in the dynamic field of product development, requires adept communication skills, conflict-resolution abilities, and a knack for balancing friendliness with professional boundaries. In today’s digital age, leading remote teams has become a common scenario for many team managers. While the logistics of task assignments and video calls might be straightforward, fostering a strong team culture and maintaining trust and good relationships remotely continue to pose significant challenges. These topics are central to our Leadership Mastery course. As a lead overseeing teams, how do you ensure your team remains competent? How do you measure their success — and by extension, the project's success? What strategies do you employ if your team lacks expertise or capacity? In this course, we will explore the nuances of hiring new team members and discuss effective recruitment methods that can make a real difference. Join us to enhance your leadership skills and prepare to lead teams more effectively in any environment.",
    author: {
      name: 'Adham Dannaway',
      avatar: '/courses/users/user-8.jpg',
      role: 'Design Lead',
      bio: 'Adham is a Design Lead with over 10 years of experience in the design industry. He has a strong background in leading design teams and managing complex projects. Adham is passionate about mentoring and developing talent, and he enjoys sharing his knowledge through workshops and speaking engagements. He believes that great design leadership is about empowering teams to do their best work and creating an environment where creativity and innovation can thrive.',
    },
  },
  {
    title: 'Introduction to Product Management',
    summary:
      'Learn how to turn nascent ideas into successful products using proven product management frameworks, clear processes, practical strategies, and best practices.',
    cover: '/courses/course-cover-9.svg',
    exp: 3000,
    duration: 400,
    level: CourseLevel.BEGINNER,
    whatYouWillLearn: [
      'Understand the role of a product manager — Learn what product management entails, the key responsibilities of a product manager, and how they fit within a product team.',
      'Master product development frameworks — Explore popular frameworks like Agile, Scrum, and Lean Startup to manage product development effectively.',
      'Learn to conduct market research and user analysis — Discover techniques for understanding customer needs, market trends, and competitive landscapes to inform product decisions.',
      'Explore product lifecycle management — Understand the stages of a product lifecycle, from ideation to launch and beyond, and learn strategies for managing each phase successfully.',
    ],
    lessons: [
      {
        title: 'Introduction to Product Management',
        description:
          'Understanding the fundamentals of product management and its importance in product development.',
      },
      {
        title: 'Product Management Frameworks',
        description:
          'Exploring various product management frameworks and their applications in different contexts.',
      },
      {
        title: 'Market Research and User Analysis',
        description:
          'Learning techniques for conducting market research and analyzing user needs.',
      },
      {
        title: 'Product Lifecycle Management',
        description:
          'Understanding the stages of a product lifecycle and strategies for managing each phase.',
      },
      {
        title: 'Product Roadmapping',
        description:
          'Learning how to create and manage product roadmaps to align with business goals.',
      },
      {
        title: 'Stakeholder Management',
        description:
          'Developing skills for managing relationships with stakeholders and communicating effectively.',
      },
      {
        title: 'Metrics and KPIs',
        description:
          'Understanding key metrics and KPIs for measuring product success.',
      },
      {
        title: 'Go-to-Market Strategies',
        description:
          'Exploring strategies for launching products and entering new markets.',
      },
    ],
    description:
      "Product management turns ideas into solutions that users love and businesses value. It bridges the gap between what's technically possible and what the market needs, bringing clarity to the development process and uncovering hidden opportunities. Like conductors, product managers guide teams toward common goals while putting user needs first. At its heart, product management balances 3 key elements: business needs, technical possibilities, and user wants. This approach combines clear thinking with creative solutions to handle competing demands when resources are limited. From creating strong product visions to deciding which features to build first, product management offers tools to make good decisions when the path forward isn't clear. The practical tools of product management, like roadmaps, priority frameworks, and user stories, bring order to the product development process. These methods keep teams focused on the most important work while making sure new features fit with existing ones. When used well, they replace opinion-based arguments with clear approaches that get everyone working toward the same goals. What makes product management powerful is its ability to turn user feedback into clear plans for development. Through research, testing, and data review, product teams figure out what to build next, developers get precise directions, and company leaders see real business results. This changes vague requests into focused work that solves actual problems. From small startups to large companies, good product management forms the foundation of successful products. By using evidence instead of guesswork and connecting daily work to bigger goals, product management helps companies build products that truly work for users while meeting business needs in competitive markets.",
    author: {
      name: 'Ben Davies-Romano',
      avatar: '/courses/users/user-9.jpg',
      role: 'Content Designer',
      bio: "Product Manager turned UX Content Designer across EdTech, HealthTech, and FinTech. Originally with a language background, I started as a UX Writer (before that was a common term!). I became fascinated with how UX combines communication with psychology to bring value to folks through technology. By working closely with product teams, I learned what makes a great Product Manager, and decided to transition into product myself. Now, I've returned to UX, and use my experience in product to seamlessly blend UX thinking and strategy into the roadmaps and visions of the product teams I collaborate with. Reach out to me if you ever want to talk about getting into product management or content design, behavioural science, or anything and everything about languages.",
    },
  },
  {
    title: 'Apple Human Interface Guidelines',
    summary:
      'Learn Apple’s Human Interface Guidelines to design modern, high-performing apps, focusing on UI principles and best practices for creating effective interfaces.',
    cover: '/courses/course-cover-10.svg',
    exp: 6100,
    duration: 500,
    level: CourseLevel.INTERMEDIATE,
    whatYouWillLearn: [
      'Understand Apple’s design philosophy — Learn the core principles and values that underpin Apple’s Human Interface Guidelines, and how they influence app design.',
      'Master UI components and patterns — Explore the various UI elements and design patterns recommended by Apple, and how to use them effectively in your app designs.',
      'Learn platform-specific design considerations — Discover the unique features and capabilities of Apple’s platforms (iOS, macOS, watchOS, tvOS) and how to tailor your designs accordingly.',
      'Explore accessibility and usability best practices — Understand how to create inclusive designs that cater to a diverse range of users, ensuring your apps are usable by everyone.',
    ],
    lessons: [
      {
        title: 'Introduction to Apple HIG',
        description:
          'Learn the basics of Apple Human Interface Guidelines and their importance in app design.',
      },
      {
        title: 'Design Principles',
        description:
          'Explore the core design principles that guide Apple’s Human Interface Guidelines.',
      },
      {
        title: 'UI Components',
        description:
          'Understand the various UI components recommended by Apple and how to use them effectively.',
      },
      {
        title: 'Design Patterns',
        description:
          'Learn about common design patterns and their applications in Apple app design.',
      },
      {
        title: 'Platform-Specific Considerations',
        description:
          'Discover the unique features and capabilities of Apple’s platforms and how to tailor your designs accordingly.',
      },
      {
        title: 'Accessibility Best Practices',
        description:
          'Understand how to create inclusive designs that cater to a diverse range of users.',
      },
      {
        title: 'Usability Best Practices',
        description:
          'Learn strategies for enhancing the usability of your app designs.',
      },
      {
        title: 'Prototyping and Testing',
        description:
          'Explore techniques for prototyping and testing your app designs to ensure they meet user needs.',
      },
      {
        title: 'Case Studies',
        description:
          'Analyze real-world examples of effective app designs that follow Apple’s Human Interface Guidelines.',
      },
      {
        title: 'Practical Exercises',
        description:
          'Engage in hands-on activities to apply Apple HIG principles in your app design work.',
      },
      {
        title: 'Review and Next Steps',
        description:
          'Summarize key learnings and plan how to integrate Apple HIG into your design practice.',
      },
      {
        title: 'Final Project: Designing an Apple App',
        description:
          'Apply all the concepts learned in the course to design a complete app for an Apple platform from scratch.',
      },
      {
        title: 'Course Wrap-Up',
        description:
          'Review the course content and discuss next steps for applying Apple HIG in your design work.',
      },
      {
        title: 'Additional Resources',
        description:
          'Explore further reading and resources to deepen your understanding of Apple Human Interface Guidelines.',
      },
    ],
    description:
      "The Apple Human Interface Guidelines (HIG) represent the cornerstone of creating exceptional digital experiences across Apple's ecosystem. This comprehensive course empowers teams to master the fundamental principles, patterns, and best practices that make Apple's platforms instantly recognizable and intuitive to billions of users worldwide. In this course, you'll discover how to leverage Apple's design principles to create apps and interfaces that feel natural and engaging on iOS, iPadOS, and macOS. Learn the essential elements of Apple's visual language, from typography and color to layout and spacing, ensuring your interfaces maintain consistency with the platform while standing out for their quality and attention to detail. Through practical examples and in-depth exploration of Apple's interface components, you'll understand how to implement navigation patterns, create effective user interactions, and create experiences that seamlessly adapt across Apple devices. Whether you're working on a simple utility app or a complex productivity tool, this course provides the knowledge and insights needed to craft interfaces that truly belong on Apple platforms.",
    author: {
      name: 'Denis Jeliazkov',
      avatar: '/courses/users/user-10.jpg',
      role: 'Product Designer',
      bio: 'As a self-taught product designer born and raised in Bulgaria, I’ve spent the past ten years partnering with startups across FinTech, EdTech, Health, and Ride Sharing, blending insight with innovation to shape impactful user experiences. Along the way, I’ve collaborated with industry leaders like BMW, Panasonic, Ledger, and Toptal, just to name a few. Over these eight years crafting digital products that people love, I’ve learned a vital truth: exceptional design is about impact, not just aesthetics. My mission is to help 100,000 designers build fulfilling, sustainable careers by mastering both craft and business. I’m the author of Profit + Passion, a guide for designers to create long-term success, the creator of Design OS, a platform that’s helped over 20,000 designers land better clients, and a design advisor to startups that have collectively raised over $50M. I also speak and mentor, focusing on the intersection of design and business. My approach combines systems thinking with creative innovation, where every decision is driven by business impact. I prioritize ego-free collaboration and hold craft excellence as non-negotiable. This mindset has helped over 150 designers increase their rates by 3x or more, transform 45+ portfolios, generate over $10M in collective client revenue, and all without sacrificing creativity.',
    },
  },
]

export async function main() {
  for (const course of courses) {
    const { lessons, author, ...other } = course

    await prisma.course.create({
      data: {
        ...other,
        author: { create: author },
        lessons: { create: lessons },
      },
    })
  }
}

main()
