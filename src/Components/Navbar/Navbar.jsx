import React from "react";
import "./navbar.css";
import logo from "./logo.png"
import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const openLink = (url) => {
    window.open(url);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div id="nav-menu" className="navbar">
      <div className="wrapper">
        <div className="wrapperLeft">
          <Link
            to="home"
            smooth={true}
            offset={-100}
            duration={500}

          >
            <img id="logo"
              src={logo}
              alt="icon"
            />
          </Link>
        </div>
        <div className="wrapperRight">
          <div>
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="skills"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              to="experience"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link experience"
            >
              Experience
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link projects"
            >
              Projects
            </Link>
          </div>


          <div>
            <Link
              to="contact"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
//
              href="https://drive.google.com/uc?id=1VKRDeBEd3fPzapen5JUZ-ie-OGWaZBGY&export=download"
              className="nav-link resume"
              id="resume-link-1"
            >
              <div
                onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1VKRDeBEd3fPzapen5JUZ-ie-OGWaZBGY/view?usp=sharing_link"



                    // "https://drive.google.com/file/d/1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH/view?usp=share_link"
                  )
                }
                className="navbar-resume"
                id="resume-button-1"
              >
                Resume <HiDownload />
              </div>
            </a>
          </div>
        </div>
        <div className="responce">
          <MenuRoundedIcon onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody marginTop={"30px"}>
                <div className="drawerbody">
                  <div>
                    <Link
                      to="home"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="about"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="skills"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Skills
                    </Link>
                  </div>
                  <div>
                     <Link
                    to="experience"
                    smooth={true}
                    offset={-79}
                    duration={500}
                    className="nav-link experience"
                  >
                    Experience
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="projects"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Projects
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </div>
                  
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
