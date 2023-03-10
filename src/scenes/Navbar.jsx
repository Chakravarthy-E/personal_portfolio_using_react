import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMeidaQuery from "../hooks/useMediaQuery";
import { MenuIcon, CloseIcon } from "../assets";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href = {`#${lowerCasePage}`}
      onClick = {()=> setSelectedPage(lowerCasePage)}
    >
    {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage,selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAbovesSmallScreens = useMeidaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
      <AnchorLink onClick = {()=>setSelectedPage("home")} href="#home">
      <h4 className={`font-pacifico text-2xl hover:text-red text-cream font-bold`}>Chakri</h4>
      </AnchorLink>

        {/**Desktop nav */}
        {isAbovesSmallScreens ? (
          <div className="flex justify-between gap-16 font-opansans text-sm font-semibold">
          <Link
          page = "Home"
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />

          <Link
          page = "Skills"
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
          <Link
          page = "Projects"
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
          <Link
          page = "Contact"
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
          </div>
        ) : (
          <button className="rounded-md p-2 hover:bg-red" onClick={()=> setIsMenuToggled(!isMenuToggled)}>
           <img alt="menu-icon" src={MenuIcon} />
          </button>
        )}
        {/**mobile */}
        {!isAbovesSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-skyblue w-[300px]">
                {/**close button */}
                <div className="flex justify-end p-12 ">
                <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <img src={CloseIcon} alt="close icon" className="rounded-sm hover:bg-red" />
                </button>
                </div>
                {/**Menu items */}
                <div className="flex flex-col gap-10 ml-[33%] text-1xl text-white">
                <Link
                page = "Home"
                selectedPage = {selectedPage}
                setSelectedPage = {setSelectedPage}
                />
                <Link
                page = "Skills"
                selectedPage = {selectedPage}
                setSelectedPage = {setSelectedPage}
                />
                <Link
                page = "Projects"
                selectedPage = {selectedPage}
                setSelectedPage = {setSelectedPage}
                />
                <Link
                page = "Contact"
                selectedPage = {selectedPage}
                setSelectedPage = {setSelectedPage}
                />
                </div>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;