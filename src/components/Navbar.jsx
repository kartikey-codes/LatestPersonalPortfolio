import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import resumePdf from "/src/resume/Kartikey_Bhatnagar_Resume.pdf";
import music from "/src/music/music.mp3"; // Import your music file

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audio] = useState(new Audio(music)); // Use state for the audio element
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // State to track music playback

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // Trigger the download
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Kartikey_Bhatnagar_Resume.pdf"; // Set the desired file name
    link.click();
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='#'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`${
              active === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("Resume");
              handleResumeDownload(); // Trigger download when "Resume" is clicked
            }}
          >
            Resume
          </li>
          <li
            className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
            onClick={toggleMusic} // Toggle music when the button is clicked
          >
            {isMusicPlaying ? (
              // Use your animated music icon (GIF) with background removed
              <img
                src="/musicico/music.gif" // Provide the correct path
                alt="Music"
                style={{
                  background: "none",
                  width: "30px", // Adjust the width as needed
                  height: "30px", // Adjust the height as needed
                  filter: "invert(100%)", // Change icon color to white
                }}
              />
            ) : (
              // Use a different icon or text when music is paused
              <img
                src="/musicico/musicpause.png" // Provide the correct path
                alt="Music"
                style={{
                  background: "none",
                  width: "30px", // Adjust the width as needed
                  height: "30px", // Adjust the height as needed
                  
                }}
              />
            )}
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
                className={`${
                  active === "Resume" ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Resume");
                  handleResumeDownload(); // Trigger download when "Resume" is clicked
                }}
              >
                Resume
              </li>
              <li
                className='text-secondary hover.text-white text-[16px] font-medium cursor-pointer'
                onClick={toggleMusic} // Toggle music when the button is clicked
              >
                {isMusicPlaying ? (
                  // Use your animated music icon (GIF) with background removed
                  <img
                    src="/musicico/music.gif" // Provide the correct path
                    alt="Music"
                    style={{
                      background: "none",
                      width: "30px", // Adjust the width as needed
                      height: "30px", // Adjust the height as needed
                      filter: "invert(100%)", // Change icon color to white
                    }}
                  />
                ) : (
                  // Use a different icon or text when music is paused
                  <img
                    src="/musicico/musicpause.png" // Provide the correct path
                    alt="Music"
                    style={{
                      background: "none",
                      width: "30px", // Adjust the width as needed
                      height: "30px", // Adjust the height as needed
                      filter: "invert(100%)", // Change icon color to white
                    }}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
