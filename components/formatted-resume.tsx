import { Card } from "@/components/ui/card"

export default function FormattedResume() {
  return (
    <Card className="bg-white text-black p-8 max-h-[80vh] overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">ROHAN AJAY</h1>
          <p>Chicago, IL | 765-430-4207 | ajayrohan0509@gmail.com | linkedin.com/in/rohanajay</p>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 mb-2">PROFILE</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Skills:</strong> Statistical Analysis, Generative AI, Software Development, Machine Learning, Data
              Visualization, Optimization, AI/ML model deployment, Cloud Data Engineering, Agile Methodology, Business
              Intelligence, Stakeholder Communication
            </li>
            <li>
              <strong>Tools:</strong> Java, Python, Springboot, Alteryx, PostgreSQL, Tableau, GCP, Snowflake, AWS,
              Azure, JIRA
            </li>
            <li>
              <strong>Certifications:</strong> Nvidia Certified Associate – Generative AI and LLMs, AWS Cloud
              Practitioner, Tableau Desktop Specialist, Microsoft Certified AZ900 – Azure Fundamentals, AI900 – Azure AI
              Fundamentals, Alteryx Designer Core
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 mb-2">EDUCATION</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="font-bold">Purdue University, Daniels School of Business</div>
              <div>West Lafayette, IN</div>
            </div>
            <div className="flex justify-between">
              <div className="italic">Master of Science in Business Analytics and Information Management</div>
              <div>August 2024 – July 2025</div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="font-bold">PES University, School of Engineering</div>
              <div>Bengaluru, India</div>
            </div>
            <div className="flex justify-between">
              <div className="italic">Bachelor of Technology in Electronics and Communications Engineering</div>
              <div>August 2017 – August 2021</div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 mb-2">PROFESSIONAL EXPERIENCE</h2>

          {/* Care.com */}
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="font-bold">Care.com</div>
              <div>Chicago, IL (Remote)</div>
            </div>
            <div className="flex justify-between">
              <div className="italic">Software Engineering Intern – Applied Artificial Intelligence</div>
              <div>May 2025 - Present</div>
            </div>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                Collaborated with system architects to refine and extend the modular-monolithic Java Spring Boot
                architecture for Care Family Profiles, integrating Kafka event streams with Go adapters to improve
                service coordination and data propagation across modules
              </li>
              <li>
                Designed and implemented Model Context Protocol (MCP) based tooling and versioned CRUD RESTful APIs in
                Java and Go for PostgreSQL, ensuring robust data modeling, referential integrity and high throughput
                across core application services
              </li>
              <li>
                Engineered AI-driven development workflows with Cursor by crafting prompts, experimenting with multiple
                LLMs, and documenting system designs (ERDs, API specifications, AI-augmented pipelines) for full-stack
                code generation
              </li>
              <li>
                Established scalable AI evaluation frameworks that combine automated test generation, continuous
                integration hooks and human in the loop review processes to validate code quality, verify
                model-generated outputs and accelerate deployment cycles
              </li>
            </ul>
          </div>

          {/* Krenicki Center */}
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="font-bold">Krenicki Center for Business Analytics and Machine Learning</div>
              <div>West Lafayette, IN</div>
            </div>
            <div className="flex justify-between">
              <div className="italic">Student Data Scientist and AI Engineer</div>
              <div>October 2024 – May 2025</div>
            </div>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                Developed machine learning models using random forest and LSTM to detect and predict phantom inventory
                for a national retailer, improving stockout forecasting and operational accuracy through advanced
                data-driven techniques.
              </li>
              <li>
                Developed and deployed agentic AI solutions using Prediction Guard's secure LLM APIs to automate B2B
                sales pipelines, achieving significant reductions in sales cycle time and operational costs while
                increasing outreach and lead qualification efficiency.
              </li>
              <li>
                Designed and implemented a risk benchmarking framework for LLMs at Prediction Guard, systematically
                evaluating model robustness and prompt sensitivity under adversarial scenarios to guide enterprise
                security and reliability improvements.
              </li>
              <li>
                Led the development and deployment of AI-driven solutions for the Supreme Court of Indiana, including
                NLP-based sentiment analysis of judge surveys, workflow automation pilots, and a comprehensive
                evaluation of AI tools for synthetic media detection.
              </li>
            </ul>
          </div>

          {/* Goldman Sachs */}
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="font-bold">Goldman Sachs</div>
              <div>Bengaluru, India</div>
            </div>
            <div className="flex justify-between">
              <div className="italic">
                Senior Data Analyst, Corporate Treasury Division – CTO Business Intelligence and Data Solutions
              </div>
              <div>January 2021 – June 2024</div>
            </div>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                Optimized and fine-tuned machine learning models for fraud detection on Actimize and sanctions screening
                on Fircosoft, enhancing model accuracy and operational efficiency.
              </li>
              <li>
                Implemented Machine Learning and BI initiatives for KRI tracking and automation, enabling GS vs. client
                fail rate analysis, resulting in 3 FTE efficiency savings and $450,000 annual net gain
              </li>
              <li>
                Experience leading Agile product teams, participating in sprint planning, daily stand-ups, and iterative
                delivery cycles.
              </li>
              <li>
                Led and trained a team of 16 embedded BI professionals across Corporate Treasury Operations,
                facilitating self-sufficiency in BI tools and contributing to over 20 BI projects
              </li>
              <li>
                Executed migration of legacy Sybase IQ databases to AWS cloud, ensuring seamless data delivery and
                providing Compliance, Sanctions and Fraud teams with a centralized, efficient database equipped with
                visualization tools like AWS Quicksight
              </li>
              <li>
                Leveraged Alteryx and ETL pipelines to automate reporting, while managing the Treasury PostgreSQL
                database and building Tableau dashboards to track capacity, productivity, and team performance driving
                efficiency gains equivalent to 5 FTEs.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 mb-2">
            LEADERSHIP ACTIVITIES, AFFILIATIONS, HONORS
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>TechPoint MIRA Awards 2025 Finalist – for innovation and higher education</li>
            <li>
              Best student paper award at the MWDSI paper conference – Automation of B2B Sales pipelines using Agentic
              AI
            </li>
            <li>
              A lifetime member of Beta Gamma Sigma which recognizes and honors the top 20% of graduate students from
              around the world in business schools accredited by The Association to Advance Collegiate Schools of
              Business
            </li>
            <li>
              Passionate musician with Trinity Grade 3 certification in Plectrum Guitar and Led a community of 200 plus
              musicians as student head of the Music Club of PES University
            </li>
            <li>
              Active volunteer at Aikya, Akshaya Patra Foundation – a non-profit organization fighting hunger by feeding
              2.2M students daily
            </li>
          </ul>
        </section>
      </div>
    </Card>
  )
}
