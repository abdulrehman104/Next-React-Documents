import Link from "next/link";

const Navbar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contect", path: "/contect" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <>
      <div className="flex items-center justify-center pt-10 gap-10 ">
        {links.map((link, index) => (
          <Link href={link.path } key={index}>{link.title} </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
