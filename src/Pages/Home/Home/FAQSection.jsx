import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    q: "What is your return policy?",
    a: "You can return any item within 30 days.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship worldwide with standard charges.",
  },
  {
    q: "How can I track my order?",
    a: "Use your order ID to track in dashboard.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <div className="flex items-center gap-2">
              <FaQuestionCircle className="text-primary text-xl" />
              <h3 className="font-semibold">{faq.q}</h3>
            </div>
            {activeIndex === i && <p className="mt-2 text-gray-600">{faq.a}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
