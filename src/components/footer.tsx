import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const topFunction = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-row justify-between items-center px-6 py-6 border-t border-foreground/20 font-pixel-square">
      <div className="flex flex-col text-sm">
        <div className="">© 2026 issues_?!</div>
        <div>All rights reserved</div>
      </div>

      <button
        onClick={topFunction}
        className="text-3xl font-pixel-square hover:text-lime-500"
      >
        issues_?!
      </button>

      <div className="flex gap-3 items-center">
        <a href="/contact" className="font-pixel-square hover:text-lime-500">
          Contact
        </a>
        <a
          href="https://github.com/philbuii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub
            className="text-foreground hover:text-lime-500"
            size={35}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/phhb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-foreground hover:text-lime-500"
            size={35}
          />
        </a>
      </div>
    </div>
  );
}
