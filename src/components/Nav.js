import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="https://drive.google.com/file/d/1GYKAnjhW7y5erEOU7YGJwTFdCL4rggo2/view?usp=drive_link"
            target={"_blank"}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
