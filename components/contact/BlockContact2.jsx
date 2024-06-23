import Image from "next/image";

const BlockContact2 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_161.svg",
      title: "Home Base",
      content: (
        <>
          Proudly built in Los Angeles, California
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "We're Here To Help",
      content: (
        <>
          Send us an email! <br />
          <a href="mailto:contact@password1.io" className="call">
            contact@password1.io
          </a>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_163.svg",
      title: "See Our Code",
      content: (
        <>
          <a href="https://github.com/Password1-io/Front-end" className="webaddress">
            Check out the Github repository!
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div className="address-block-three d-flex mb-70 lg-mb-40" key={index}>
          <div className="icon">
            <Image width={30} height={30} src={block.icon} alt="icon" />
          </div>
          <div className="text">
            <h5 className="title">{block.title}</h5>
            <p>{block.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact2;
