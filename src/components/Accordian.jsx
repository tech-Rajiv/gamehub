import React, { useState } from "react";

function Accordion() {
  const faqData = [
    {
      question: "How many games will be here?",
      answer:
        "3 games are currently ready and fully functional. many more will be live soon. Patience is a virtue (especially in development).",
    },
    {
      question: "Is this a real money game?",
      answer:
        "Nope. This is a 100% client-side experience. Nothing is stored, no data is collected, and no real money is involved. Just pure joy... or mild frustration, depending on your luck.",
    },
    {
      question: "Want to talk as a dev or share ideas?",
      answer: (
        <span>
          
          Sure, reach out:
          <ul className="list-disc ml-5 mt-2 text-left">
            <li>
              Email:{" "}
              <a
                href="mailto:999rajivmishra@email.com"
                className="text-blue-700 underline ml-2"
              >
              999rajivmishra@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/tech-rajiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline ml-2"
              >
                github.com/tech-rajiv
              </a>
            </li>
          
          </ul>
        </span>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-2 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">FAQs</h2>
      {faqData.map((item, index) => (
        <div key={index} className="bg-gray-900 rounded-md py-5 px-5 mb-3">
          <div
            className="cursor-pointer font-medium"
            onClick={() => toggle(index)}
          >
            {item.question}
          </div>
          {openIndex === index && (
            <div className="mt-2 text-gray-500 text-sm">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
