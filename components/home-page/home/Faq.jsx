const Faq = () => {
  const faqData = [
    {
      question: "Why is it risky to use the same password for all my accounts?",
      answer:
        "Using the same password for all your accounts is very risky. If one website gets hacked, the hacker can access all your other accounts with the same password. This puts all your personal information at risk.",
    },
    {
      question: "What happens if a website I use gets hacked?",
      answer:
        "If a website you use gets hacked and you use the same password everywhere, hackers can access all your other accounts. With Password1, even if one website is hacked, your other accounts remain safe because they all have different, strong passwords.",
    },
    {
      question: "How does Password1 help with password security?",
      answer:
        "Password1 helps by generating a different, strong password for each website you use. You only need to remember your single seed password, and Password1 takes care of the rest, ensuring each website has its own unique password.",
    },
    {
      question: "What if I forget the different passwords for my accounts?",
      answer:
        "With Password1, you don't need to remember all those different passwords. You only need to remember your seed password, and Password1 will generate the unique passwords for each website every time you need them.",
    },
    {
      question: "How does Password1 generate secure passwords?",
      answer:
        "Password1 combines your seed password with the website information to create a unique, strong password for each site. This ensures each password is different and secure.",
    },
    {
      question: "Can hackers guess my passwords if they know my seed password?",
      answer:
        "No, even if someone knows your seed password, they still can't guess the passwords for other websites because the unique password is generated using both the seed password and the specific website information.",
    },
    {
      question: "Is Password1 difficult to use?",
      answer:
        "Not at all! Password1 is designed to be easy for everyone to use, no matter your age or tech skills. It integrates with your browser or password manager to automatically generate and fill in passwords for you.",
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
