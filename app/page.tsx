import Image from 'next/image';
import Link from 'next/link';
import JobExperience from './components/JobExperience';
import BackToTopButton from './components/BackToTopButton';

export default function HomePage() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-tighter">Hi, I'm Chris Bailey</h1>
        <div className="relative h-20 w-20 ml-4">
          <Link href="https://www.linkedin.com/in/chris-bailey-dev" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Profile picture of Chris Bailey"
              src='/images/avatar.jpg'
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 h-10 w-10">
            <Image
              alt="Canadian flag"
              src='/images/canadian-flag.png'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert mt-8">
        When I was growing up, I dreamed of becoming a physicist. After my first year of university physics, I had my first taste of coding, and it was love at first sight!
      </p>
      <p className="prose prose-neutral dark:prose-invert mt-8">
        I thoroughly enjoy every aspect of software development, which is why I am a full-stack developer. I get to play with the front-end, the back-end, and thanks to cloud computing, I'm also able to build the systems that run the application.
      </p>
      <div className="relative w-full my-8" style={{ height: 'auto' }}>
        <Image
          alt="A focused software developer working on a computer in a dimly lit room, with a glowing light bulb symbolizing ideas and innovation. The screen shows various code and software elements, representing the depth of software development."
          src='/images/fullstack.jpg'
          width={672}
          height={336}
          className="rounded-lg"
          sizes="(max-width: 672px) 100vw, 672px"
        />
      </div>
      <p className="prose prose-neutral dark:prose-invert mt-8">
        There is so much depth in the field of computers and I've worked on both the hardware and software sides. In any area of computers, you can continuously learn and never run out of those wonderful 'aha' moments that are so invigorating for the brain.
      </p>
      <p className="prose prose-neutral dark:prose-invert mt-8">
        Currently, I'm working as a <strong>senior full-stack software developer</strong> at <a href="https://rldatix.com" target="_blank" rel="noopener noreferrer">RLDatix</a>. The application I work on is focused on patient safety in hospital settings, and due to some difficult personal experiences with healthcare, I am extremely motivated by our mission which is <strong>safer patient care</strong>.
      </p>
      <div className="mt-16">
        <h2 id="work" className="text-2xl font-medium tracking-tight mb-4">Work Experience</h2>
        <div className="relative w-full my-8" style={{ height: 'auto' }}>
          <Image
            alt="A detailed schematic of a microservices system, showing various interconnected services and databases, with a central cloud infrastructure."
            src='/images/cloud-infrastructure.jpg'
            width={672}
            height={336}
            className="rounded-lg"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>

        <JobExperience
          logoSrc="/images/rldatix-logo.jpg"
          title="Senior Software Developer"
          company="RLDatix"
          startDate="July 2019"
          endDate="Present"
          description={[
            "I'm currently working as a Senior Full-Stack Developer at RLDatix, where I focus on enhancing patient safety through the development of robust, scalable solutions for a SaaS-based Policy Document Management System.",
            "What I enjoy so much about this position is working with every single part of the stack from the front-end and back-end all the way to the AWS infrastructure.",
          ]}
          achievements={[
            "Developed custom CI/CD pipeline for one-click deployments, transforming bi-weekly releases into continuous deployments, resulting in faster releases, quicker bug fixes, and 99%+ uptime.",
            "Led a one-week transition from a third-party library to an open-source solution, including investigation, design, coding, testing, and deployment, saving over $20K annually in licensing fees.",
            "Achieved an 800% reduction in AWS OpenSearch costs by leading a strategy involving infrastructure optimization and precise usage monitoring, cutting annual expenses from $19,500 to $2,500.",
            "Cut AWS EC2 monthly spending by 500% through strategic consolidations and performance optimizations."
          ]}
          technologies="Java, Spring, Python, Vue.js, React.js, AWS (Lambda, EC2, S3, RDS, SQS), Docker, OpenSearch, and many more..."
        />

        <JobExperience
          logoSrc="/images/policymedical-logo.jpg"
          title="Software Developer"
          company="PolicyMedical Inc."
          startDate="August 2016"
          endDate="July 2019"
          description={[
            "As a Software Developer at PolicyMedical Inc., I developed and deployed robust SaaS-based policy management solutions for over 3,000 healthcare organizations using AWS services.",
            "I particularly enjoyed leading the design and launch of new features and systems, and collaborating with cross-functional teams to drive continuous improvement."
          ]}
          achievements={[
            "Led the design and launch of a Digital Signature Management System, integrating signatures and metadata into PDFs using lazy-loading and caching to enhance responsiveness and functionality.",
            "Enhanced the generation speed of watermarked PDF documents by more than 2000% by implementing an effective caching strategy that dramatically improved system performance."
          ]}
          technologies="Java, Spring, JavaScript, AWS (EC2, S3, RDS, CloudWatch), Grails, Solr, GitHub, Linux, Groovy, Jenkins"
        />

        <JobExperience
          logoSrc="/images/freelance-logo.jpg"
          title="IT Consultant (Freelance)"
          company=""
          startDate="June 2007"
          endDate="August 2016"
          description={[
            "As an IT Consultant, I provided comprehensive services to small businesses, delivering expertise in areas such as software and hardware installation, security, data backup, web presence, email marketing, and digital marketing.",
            "Additionally, I offered technical services and training to individuals, enabling them to stay connected to their loved ones in a rapidly changing digital landscape."
          ]}
          achievements={[]}
          technologies=""
        />

        <JobExperience
          logoSrc="/images/government-of-canada-logo.jpg"
          title="Software Developer for Government of Canada"
          startDate="April 2006"
          endDate="June 2007"
          description={[
            "As a Software Developer for the Government of Canada, I designed, developed, tested, and maintained software solutions that met the rigorous standards of the Canadian Federal Government.",
          ]}
          achievements={[
            "Led the development of an Inventory Tracking System, completing the project in 50% of the estimated time allotted without prior API experience, enabling the support teams to scan, assign, and track IT resources."
          ]}
          technologies=".NET Framework, JavaScript, SQL, HTML, CSS, VB.NET, Tomcat, Microsoft SQL Server, UML"
        />

        <JobExperience
          logoSrc="/images/government-of-canada-logo.jpg"
          title="QA Analyst for Government of Canada"
          startDate="April 2005"
          endDate="April 2006"
          description={[
            "Responsible for designing and executing test plans, identifying defects, and providing feedback to various development teams in order to ensure a stable and reliable production environment.",
          ]}
          achievements={[
            "Engineered a custom solution to an 'unresolvable' issue with a $100,000.00 network virtualization system."
          ]}
          technologies="Shunra Network Virtualization System, Test Case Design & Implementation"
        />

        <JobExperience
          logoSrc="/images/government-of-canada-logo.jpg"
          title="Unix System Administrator for Government of Canada"
          startDate="November 2002"
          endDate="April 2005"
          description={[
            "As a Unix System Administrator, I led a team responsible for the installation, configuration, and maintenance of on-site Unix servers.",
            "My duties included troubleshooting system issues, enforcing security, creating and maintaining documentation, and collaborating with internal stakeholders to ensure the stability of each application utilizing the servers."
          ]}
          achievements={[
            "Coded scripts that could proactively detect and resolve reoccurring issues before they became tickets, allowing the team to stay focused on high-level tasks."
          ]}
          technologies="Unix, System Administration, Bash Shell Scripting, Perl"
        />
      </div>

      <div className="mt-16">
        <h2 id="projects" className="text-2xl font-medium tracking-tight mb-4">Projects</h2>
        <div className="mb-12">
          <h3 className="text-xl font-semibold">Spring Microservices Bookstore Demo</h3>
          <div className="relative w-full my-8" style={{ height: 'auto' }}>
            <div className="relative w-full my-8" style={{ height: 'auto' }}>
              <Image
                alt="Diagram of the Spring Microservices Bookstore showcasing a microservices architecture with various services and technologies like Docker, Kafka, Resilience4J, and PostgreSQL."
                src='/images/spring-boot-microservices-diagram.jpg'
                width={672}
                height={336}
                className="rounded-lg"
                sizes="(max-width: 672px) 100vw, 672px"
              />
            </div>
          </div>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            The Spring Microservices Bookstore Demo is a dynamic educational tool designed to showcase a robust microservices architecture using the Spring ecosystem and Docker.
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            It provides developers with a practical example of implementing microservices in real-world scenarios, focusing on principles like dynamic service discovery, centralized configuration, resilience, and message-driven architecture.
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            <strong>Technologies:</strong> Spring Boot, Spring Cloud, Spring WebFlux, Docker, Java, Kotlin, Apache Kafka, Spring Cloud Gateway, Spring Cloud Netflix Eureka, Google JIB, GraphQL, Lombok, Mockito, Testcontainers, Resilience4J, OpenFeign, PostgreSQL, MongoDB, Spring Web, Spring Data JPA, Apache ZooKeeper, Docker Compose, Zipkin, Prometheus, Grafana, Next.js, React.js, Tailwind CSS
          </p>
          <Link href="https://github.com/chris-bailey/spring-microservices-bookstore-demo" className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Link>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold">New Age Piano Website on Next.js 14</h3>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            As a new age pianist and composer, I released a CD and a website to go alongside it a number of years ago. Initially crafted in HTML/CSS, my piano website underwent a transformation to Next.js 14 so that I could play with the newest version of the framework.
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            Next.js is a powerful React framework that provides built-in support for server-side rendering (SSR), static site generation (SSG), and more.
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            <strong>Technologies:</strong> Next.js, React.js, TypeScript, JavaScript, Vercel, SASS, Node.js, HTML, CSS
          </p>
          <Link href="https://github.com/chris-bailey/cbpiano-website-next" className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 mr-4" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Link>
          <Link href="https://chrisbaileypiano.com" className="inline-block mt-4 px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700" target="_blank" rel="noopener noreferrer">
            Live on Vercel
          </Link>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold">Lorem Ipsum Generator</h3>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            I couldn't find a simple and easy-to-use Lorem Ipsum generator, so I coded one and shared it at <a href="https://loremipsumexpert.com" target="_blank" rel="noopener noreferrer">loremipsumexpert.com</a>. The code is actually quite complex, but the front-end UI should feel intuitive and simple.
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            This tool was my first project using PHP. It is hosted on WordPress, running on a Hostinger VPS, with traffic handled by Apache NGINX.
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            If you find a bug, I'll buy you a coffee!
          </p>
          <p className="prose prose-neutral dark:prose-invert mt-4">
            <strong>Technologies:</strong> PHP, WordPress, Hostinger, VPS, Apache NGINX, Ubuntu
          </p>
          <Link href="https://loremipsumexpert.com" className="inline-block mt-4 px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700" target="_blank" rel="noopener noreferrer">
            Live Website
          </Link>
        </div>
      </div>


      <div className="mt-16">
        <h2 id="skills" className="text-2xl font-medium tracking-tight mb-4">Skills</h2>
        <div className="relative w-full my-8" style={{ height: 'auto' }}>
          <Image
            alt="Illustration of a developer's laptop surrounded by various technical skill icons viewed from the top."
            src='/images/skills.jpg'
            width={672}
            height={336}
            className="rounded-lg"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>
        <p className="prose prose-neutral dark:prose-invert mt-4 mb-8">
          The skillset of a full stack developer is like an iceberg. I could easily double the size of the list below depending on the scope, but that would lead to a big wall of text.
        </p>
        <p className="prose prose-neutral dark:prose-invert mt-4 mb-8">
          If I've left something out that is low-level like shell scripting, RESTful web services, or XML, just assume that I've worked with it.
        </p>
        {/* Programming Languages Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Java:</strong> Robust, object-oriented</div>
            <div><strong>Python:</strong> High-level, readable</div>
            <div><strong>JavaScript:</strong> Node.js made it fullstack</div>
            <div><strong>PHP:</strong> Server-side web scripting</div>
            <div><strong>SQL:</strong> Communicate with databases</div>
            <div><strong>HQL:</strong> Hibernate query language</div>
            <div><strong>Kotlin:</strong> Modern, concise JVM language</div>
            <div><strong>Groovy:</strong> Like Kotlin, but not popular</div>
            <div><strong>VB.NET:</strong> .NET framework language</div>
            <div><strong>Bash:</strong> Unix/Linux shell scripting</div>
          </div>
        </div>

        {/* Frameworks & Libraries Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Spring Framework:</strong> Java web framework</div>
            <div><strong>Django:</strong> High-level Python web framework</div>
            <div><strong>Next.js:</strong> React framework for SSR</div>
            <div><strong>Nuxt.js:</strong> Vue.js framework for SSR</div>
            <div><strong>Node.js:</strong> JavaScript runtime environment</div>
            <div><strong>Grails:</strong> Groovy-based Java framework</div>
            <div><strong>Lombok:</strong> Java library for boilerplate code</div>
            <div><strong>Maven/Gradle:</strong> Build tools</div>
            <div><strong>REST:</strong> CRUD operations through an API</div>
            <div><strong>GraphQL:</strong> Data query language for APIs</div>
          </div>
        </div>

        {/* Front-end Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Front-End Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>React.js:</strong> popular JavaScript library</div>
            <div><strong>Vue.js:</strong> another JavaScript library</div>
            <div><strong>TypeScript:</strong> Typed superset of JavaScript</div>
            <div><strong>TailwindCSS:</strong> Utility-first CSS framework</div>
            <div><strong>SASS:</strong> CSS preprocessor</div>
            <div><strong>Thymeleaf:</strong> Java template engine</div>
            <div><strong>HTML:</strong> Standard markup language for web</div>
            <div><strong>CSS:</strong> Style sheet language</div>
            <div><strong>Bootstrap:</strong> older CSS framework</div>
            <div><strong>jQuery:</strong> older JavaScript library</div>
          </div>
        </div>

        {/* Microservices Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Microservices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Spring Boot:</strong> Java projects instantly</div>
            <div><strong>Spring Cloud:</strong> Tools for distributed systems</div>
            <div><strong>Spring Cloud Gateway:</strong> API gateway</div>
            <div><strong>Spring Netflix Eureka:</strong> Service registry</div>
            <div><strong>Spring Web:</strong> Web framework for Java</div>
            <div><strong>Spring Data JPA:</strong> JPA data access</div>
            <div><strong>Spring Webflux:</strong> Reactive web framework</div>
            <div><strong>Apache Kafka:</strong> Distributed streaming</div>
            <div><strong>Apache ZooKeeper:</strong> Coordination service</div>
            <div><strong>AWS SQS:</strong> Message queuing like Kafka</div>
            <div><strong>AWS Lambda:</strong> Serverless compute service</div>
            <div><strong>Resilience4J:</strong> Fault tolerance library</div>
            <div><strong>OpenFeign:</strong> Declarative REST client</div>
            <div><strong>Docker Compose:</strong> Simplified deployment</div>
            <div><strong>Zipkin:</strong> Distributed tracing system</div>
            <div><strong>Prometheus:</strong> Monitoring and alerting</div>
            <div><strong>Grafana:</strong> Analytics and monitoring</div>
            <div><strong>Google JIB:</strong> Java container image builder</div>
          </div>
        </div>

        {/* DevOps Tools Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">DevOps Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Docker:</strong> Containerization platform</div>
            <div><strong>Jenkins:</strong> Continuous integration server</div>
            <div><strong>Artifactory:</strong> Artifact repository manager</div>
            <div><strong>Terraform:</strong> Infrastructure as code</div>
            <div><strong>GitHub:</strong> Source code management</div>
          </div>
        </div>

        {/* Deployment & Hosting Platforms Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Deployment & Hosting Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Amazon Web Services:</strong> Cloud services</div>
            <div><strong>Microsoft Azure:</strong> MS Cloud services</div>
            <div><strong>Vercel:</strong> Frontend cloud platform</div>
            <div><strong>Hostinger:</strong> Web hosting provider</div>
            <div><strong>Heroku:</strong> Cloud application platform</div>
          </div>
        </div>

        {/* Infrastructure & Cloud Services Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Infrastructure & Cloud Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Amazon CloudWatch:</strong> Monitoring</div>
            <div><strong>AWS S3:</strong> Scalable storage in the cloud</div>
            <div><strong>AWS EC2:</strong> Scalable virtual servers</div>
            <div><strong>AWS RDS:</strong> Managed relational DB service</div>
            <div><strong>Apache Nginx:</strong> Performant web server</div>
          </div>
        </div>

        {/* Databases Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Databases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>MySQL:</strong> Open-source relational database</div>
            <div><strong>PostgreSQL:</strong> Advanced open-source db</div>
            <div><strong>MS SQL Server:</strong> Relational database server</div>
            <div><strong>NoSQL:</strong> Non-relational database system</div>
            <div><strong>MongoDB:</strong> Document-oriented NoSQL</div>
            <div><strong>DynamoDB:</strong> Managed NoSQL service</div>
          </div>
        </div>

        {/* Search Technologies Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Search Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>OpenSearch:</strong> AWS's search engine</div>
            <div><strong>Elasticsearch:</strong> Older AWS search engine</div>
            <div><strong>Solr:</strong> Enterprise search platform</div>
          </div>
        </div>

        {/* Testing Frameworks Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Testing Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>JUnit:</strong> Unit testing for Java</div>
            <div><strong>Mockito:</strong> Mocking framework for Java</div>
            <div><strong>Testcontainers:</strong> Container-based testing</div>
            <div><strong>Selenium:</strong> Browser automation tool</div>
          </div>
        </div>

        {/* Methodologies & Design Principles Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Methodologies & Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Agile Methodologies:</strong> Rapid prototyping</div>
            <div><strong>Design Patterns:</strong> GoF & microservices</div>
            <div><strong>Design Principles:</strong> SOLID, DRY, KISS</div>
            <div><strong>UML:</strong> Unified Modeling Language</div>
            <div><strong>Open-Source Development:</strong> Collaboration</div>
            <div><strong>TDD:</strong> Test-driven development</div>
          </div>
        </div>

        {/* IDEs Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">IDEs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>IntelliJ IDEA:</strong> Powerful IDE</div>
            <div><strong>Visual Studio Code:</strong> Lightweight free IDE</div>
            <div><strong>Eclipse/STS:</strong> Spring Tool Suite</div>
          </div>
        </div>

        {/* Operating Systems Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Operating Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Windows:</strong> Microsoft's OS</div>
            <div><strong>Ubuntu Desktop:</strong> Like Windows, but free</div>
            <div><strong>Linux:</strong> Popular open-source OS</div>
            <div><strong>Unix:</strong> Open-source OS</div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16">
        <h2 id="contact" className="text-2xl font-medium tracking-tight mb-4">Contact</h2>
        <p className="prose prose-neutral dark:prose-invert mb-4">
          Feel free to reach out to me: <strong>chris.bailey.developer</strong> 'AT' <strong>gmail.com</strong>.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          Please replace the 'AT' above with the @ character.
        </p>
        <p className="prose prose-neutral dark:prose-invert mb-10">
          This is my <em>incredibly advanced</em> anti-spam technique!
        </p>
        <BackToTopButton />
      </div>

    </section >
  );
}
