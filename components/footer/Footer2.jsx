const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Blog", url: "/" },
      { label: "Contact", url: "/" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "Github Organization", url: "https://github.com/Password1-io" },
      { label: "Password1 Project", url: "https://github.com/Password1-io/Front-end" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
      { label: "Common Credentials", url: "https://github.com/danielmiessler/SecLists/tree/master/Passwords/Common-Credentials" },
      { label: "OWASP Cheat Sheet", url: "https://cheatsheetseries.owasp.org/index.html" },
      { label: "CISA", url: "https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
