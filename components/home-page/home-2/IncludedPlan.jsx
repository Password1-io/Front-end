const cards = [
  {
    id: 1,
    icon: "/images/icon/unique_passwords.svg",
    title: "Unique Passwords",
    description:
      "Create a different strong password for each website you use.",
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/easy_setup.svg",
    title: "Easy Setup",
    description:
      "Link Password1 with your browser to quickly make and use secure passwords.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/better_security.svg",
    title: "Better Security",
    description: "Keep your accounts safe with a new password for each site, so one hack won’t affect your other accounts.",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/advanced_privacy.svg",
    title: "Advanced Privacy",
    description:
      "No matter where you use 1Password your password never leaves your device, so not even we know your password.",
    delayAnim: "100",
  },
  {
    id: 5,
    icon: "/images/icon/quick_passwords.svg",
    title: "Quick Passwords",
    description:
      "Instantly get secure and unique passwords whenever you need them.",
    delayAnim: "200",
  },
  {
    id: 6,
    icon: "/images/icon/works_everywhere.svg",
    title: "Works Everywhere",
    description:
      "Use Password1 on all your devices for consistent security, no matter where you are.",
    delayAnim: "300",
  },
];

const IncludedPlan = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img src={card.icon} alt="illustration" className="lazy-img" />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
            <p>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
