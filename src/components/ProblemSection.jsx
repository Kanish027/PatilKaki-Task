import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180 text-gray-400" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const ProblemSection = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen((prevOpen) => (prevOpen === value ? prevOpen : value));
  };

  return (
    <div className="my-20">
      <h1
        className="text-center font-bold mb-20"
        style={{ fontSize: "34.5714px" }}
      >
        Things your spreadsheet wishes it could do
      </h1>
      <div className="flex justify-between gap-10 items-center">
        <div className="max-w-xl ps-10">
          <div className="flex flex-col">
            <Accordion
              className="flex flex-col gap-3"
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(1)}
              >
                <span className={open === 1 ? "text-style-gradient" : ""}>
                  Accurate Demand Forecasting
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  Dynamically predict future demand across all channels, with
                  high accuracy and lowest granularity. Crest takes into account
                  what traditional forecasts don't: trends, real-time market
                  signals, promotional activities, and even logistics
                  disruptions.
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 1 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp"
                  alt=""
                />
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col gap-3"
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(2)}
              >
                <span className={open === 2 ? "text-style-gradient" : ""}>
                  HELIX: Workflow Automation
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  Build and automate custom S&OP workflows to enhance
                  productivity and streamline your processes. Crest helps you
                  get a bird's eye view of your supply chain, and help you do
                  things a spreadsheet never can.
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 2 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="/path/to/your-image1.png"
                  alt="Advanced Analytics"
                />
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col gap-3"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(3)}
              >
                <span className={open === 3 ? "text-style-gradient" : ""}>
                  Automated Purchase Planning
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  Never miss an order, and know exactly how much to order, when,
                  and from whom. This is made possible with constant inventory
                  tracking and automated PO generation. What's more, Crest
                  improves with every planning cycle as the data set gets
                  richer.
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 3 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="/path/to/your-image1.png"
                  alt="Advanced Analytics"
                />
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col gap-3"
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(4)}
              >
                <span className={open === 4 ? "text-style-gradient" : ""}>
                  Automated Distribution Planning
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  Faster replenishment cycles mean more working capital for you.
                  Granular warehouse and store-level insights help you optimally
                  allocate materials and inventory. Say goodbye to stock-outs
                  and excess inventory.
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 4 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="/path/to/your-image1.png"
                  alt="Advanced Analytics"
                />
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col gap-3"
              open={open === 5}
              icon={<Icon id={5} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(5)}
              >
                <span className={open === 5 ? "text-style-gradient" : ""}>
                  Easy Integration
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  From all online store solutions to cloud ERPs, Crest
                  integrates seamlessly with your current tech and ops stack.
                  What's more? Connecting them to Crest will give you actionable
                  insights.
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 5 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="/path/to/your-image1.png"
                  alt="Advanced Analytics"
                />
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col gap-3"
              open={open === 6}
              icon={<Icon id={6} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(6)}
              >
                <span className={open === 6 ? "text-style-gradient" : ""}>
                  Custom Dashboards
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  Create customised dashboards to identify important trends,
                  patterns, and insights. Tailor them to match the unique
                  requirements of your team, empowering them to extract data in
                  a user-friendly format that can be easily comprehended.
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 6 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="/path/to/your-image1.png"
                  alt="Advanced Analytics"
                />
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col gap-3"
              open={open === 7}
              icon={<Icon id={7} open={open} />}
            >
              <AccordionHeader
                className="text-2xl border-none font-medium"
                onClick={() => handleOpen(7)}
              >
                <span className={open === 7 ? "text-style-gradient" : ""}>
                  Consensus Planning
                </span>
              </AccordionHeader>
              <AccordionBody>
                <span style={{ lineHeight: "25px" }}>
                  Get inputs from all major stakeholders for the forecast
                  numbers with a multi-level approval process. Compare &
                  visualise the impact of the numbers on major KPIs in real time
                  and take informed decisions with Scenario Planning
                </span>
              </AccordionBody>
              <AccordionBody className="mb-5">
                <span className={open === 7 ? "text-style-gradient" : ""}>
                  Learn more
                </span>
              </AccordionBody>
              <AccordionBody className="md:hidden">
                <img
                  width="100%"
                  height="auto"
                  src="/path/to/your-image1.png"
                  alt="Advanced Analytics"
                />
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="hidden md:block">
          {(open === 1 && (
            <>
              <img
                width="100%"
                height="auto"
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp"
                alt="Advanced Analytics"
              />
            </>
          )) ||
            (open === 2 && (
              <>
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-1080.webp"
                  alt="Real-time Collaboration"
                />
              </>
            )) ||
            (open === 3 && (
              <>
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-1080.webp"
                  alt="Automated Reports"
                />
              </>
            )) ||
            (open === 4 && (
              <>
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-1080.webp"
                  alt="Automated Reports"
                />
              </>
            )) ||
            (open === 5 && (
              <>
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%20type-2.webp"
                  alt="Automated Reports"
                />
              </>
            )) ||
            (open === 6 && (
              <>
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-1080.webp"
                  alt="Automated Reports"
                />
              </>
            )) ||
            (open === 7 && (
              <>
                <img
                  width="100%"
                  height="auto"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-1080.png"
                  alt="Automated Reports"
                />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
