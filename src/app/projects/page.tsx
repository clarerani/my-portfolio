export default function Projects() {
  return (
    <section className="main-bg min-h-screen text-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        {/* ORBIT / GENESIS / VANTAGE */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold">
            Loan Processing Platform
          </h3>

          <p className="mt-4 text-gray-600">
            Large-scale mortgage workflow automation platform used for underwriting,
            approvals, reporting, intelligent alerts, and document generation.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Built modular React components for underwriting and approval workflows</li>
            <li>Integrated microservices for data extraction and third-party integrations</li>
            <li>Implemented intelligent alerts and role-based dashboards</li>
            <li>Optimized performance</li>
            <li>Collaborated across cross-functional teams in an agile environment</li>
          </ul>

          <p className="mt-4 text-gray-500">
            Impact: Improved workflow efficiency and reduced manual review cycles.
          </p>
        </section>


        {/* CMHC WEBSITE */}
        <section className="mb-16">
<h3 className="text-2xl font-semibold">
     Application Portal
  </h3>

  <p className="mt-4 text-gray-600">
    Multi-step government application portal designed to collect structured
    housing-related information from the public based on predefined eligibility
    and policy criteria.
  </p>

  <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
    <li>Led migration of legacy JavaScript application to a modern React-based architecture</li>
    <li>Built a 7-step dynamic form workflow with validation, conditional rendering, and state persistence</li>
    <li>Implemented business-rul
e driven data capture aligned with government policy requirements</li>
    <li>Ensured WCAG-compliant accessibility standards for public-facing usability</li>
    <li>Optimized performance and improved maintainability through modular component design</li>
  </ul>

  <p className="mt-4 text-gray-500">
    Impact: Modernized legacy workflow into scalable React architecture to improve maintainability and long-term extensibility.
  </p>
        </section>


        {/* INTERNAL TOOL – WINGS */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold">
            WINGS – Internal Employee Operations Tool
          </h3>

          <p className="mt-4 text-gray-600">
            Internal enterprise tool supporting multiple roles including Admin,
            Managers, and Operational Staff for workflow tracking.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Designed role-based dashboards with secure authentication</li>
            <li>Integrated REST APIs for real-time operational data</li>

          </ul>

          <p className="mt-4 text-gray-500">
            Impact: Increased operational transparency and reduced manual processing.
          </p>
        </section>


        {/* IoT HVAC */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold">
            HVAC Intelligence Portal – IoT Monitoring System
          </h3>

          <p className="mt-4 text-gray-600">
            IoT-based portal for monitoring HVAC operational issues for contractors
            and field engineers.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Built multi-role system: Super Admin, Contractors, Field Engineers, Customers</li>
            <li>Integrated sensor data visualization dashboards</li>
            <li>Implemented issue detection and alert notifications</li>
            <li>Developed secure RESTful service integrations</li>
          </ul>

          <p className="mt-4 text-gray-500">
            Impact: Enabled predictive maintenance and reduced system downtime.
          </p>
        </section>


        {/* Temperature Monitoring */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold">
            Temperature Monitoring Application – Schools & Offices
          </h3>

          <p className="mt-4 text-gray-600">
            Monitoring solution for tracking temperature logs and health compliance
            across institutions.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Developed web interface for reporting and analytics</li>
            <li>Integrated device data via APIs</li>
            <li>Implemented role-based reporting views</li>
            <li>Ensured secure data handling</li>
          </ul>
        </section>


        {/* Food Ordering */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold">
            Multi-Vendor Food Ordering Platform
          </h3>

          <p className="mt-4 text-gray-600">
            Cross-platform food ordering system with web-based vendor management.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Developed vendor/admin web portal</li>
            <li>Integrated payment gateway services</li>
            <li>Built dynamic menu management modules</li>
            <li>Handled order tracking and real-time updates</li>
            <li>Hosted the platform using Firebase and supported data capture pipelines within GCP</li>
          </ul>
        </section>


        {/* Supply Chain */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold">
            Supply Chain & Allocation Management System
          </h3>

          <p className="mt-4 text-gray-600">
            Government-grade system managing allocation of food grains
            across statewide distribution networks.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Developed monitoring dashboards and allocation tracking</li>
            <li>Built web services for E-POS and inspectors</li>
            <li>Integrated payment gateway services</li>
            <li>Ensured scalability across high user volume</li>
          </ul>

          <p className="mt-4 text-gray-500">
            Impact: Supported statewide public distribution operations.
          </p>
        </section>

      </div>
    </section>
  );
}