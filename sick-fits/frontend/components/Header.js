import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.h1``;

const Header = () => (
  <div>
    <div className="bar">
      <Logo>
        <Link href="">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      <p>Cart</p>
    </div>
  </div>
);

export default Header;