import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { BsFillTerminalFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const getIcon = (comp: string) => {
  switch (comp.toLowerCase()) {
    case "facebook":
      return <FaFacebookF />;
    case "twitter":
      return <FaXTwitter />;
    case "github":
      return <FaGithub />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedinIn />;
    case "buy me a coffee":
      return <CiCoffeeCup />;
    case "version control":
      return <VscSettings />;
    case "back-end development":
      return <BsFillTerminalFill />;
    case "front-end development":
      return <CgWebsite />;
  }
};

export default getIcon;
