import { CSSProperties } from "react";
import headerImg from "../../assets/header-bg.jpg";
import { Container } from "../globals";
import { Navbar } from "../molecules";

export function Header() {
  return (
    <header
      className="Header"
      style={{ backgroundImage: `url(${headerImg})` } as CSSProperties}
    >
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}
