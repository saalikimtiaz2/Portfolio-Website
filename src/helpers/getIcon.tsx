import { BsFillTerminalFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { CiCoffeeCup } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";

const getIcon = (comp: string) => {
  switch (comp.toLowerCase()) {
    case "facebook":
      return <FaFacebookF aria-hidden />;
    case "twitter":
      return <FaXTwitter aria-hidden />;
    case "github":
      return <FaGithub aria-hidden />;
    case "instagram":
      return <FaInstagram aria-hidden />;
    case "linkedin":
      return <FaLinkedinIn aria-hidden />;
    case "buy me a coffee":
      return <CiCoffeeCup aria-hidden />;
    case "version control":
      return <VscSettings aria-hidden />;
    case "back-end development":
      return <BsFillTerminalFill aria-hidden />;
    case "front-end development":
      return <CgWebsite aria-hidden />;
    default:
      return null;
  }
};

export default getIcon;
