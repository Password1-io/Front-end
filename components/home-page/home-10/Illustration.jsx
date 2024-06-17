const Illustration = () => {
  const shapes = [
    { src: "/images/shape/8725591_check_icon.svg", className: "shapes shape-one" },
    { src: "/images/shape/8725611_cloud_lock_icon.svg", className: "shapes shape-two" },
    { src: "/images/shape/8725629_comment_lock_icon.svg", className: "shapes shape-three" },
    { src: "/images/shape/8726005_lock_access_icon.svg", className: "shapes shape-four" },
    { src: "/images/shape/8726020_lock_alt_icon.svg", className: "shapes shape-five" },
    { src: "/images/shape/8726155_key_skeleton_icon.svg", className: "shapes shape-six" },
    { src: "/images/shape/9042892_password_pass_icon.svg", className: "shapes shape-seven" },
  ];

  return (
    <div className="illustration-holder">
      <img
        src="/images/assets/ils_01.png"
        alt="illustration"
        className="lazy-img main-illustration w-100"
      />
      {shapes.map((shape, i) => (
        <img
          key={i}
          src={shape.src}
          alt="illustration"
          className={`lazy-img ${shape.className}`}
        />
      ))}
    </div>
  );
};

export default Illustration;
