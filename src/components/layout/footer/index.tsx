import FooterLinks from "./footer-links";
import Owner from "./owner";

export default function Footer() {
  return (
    <footer className="footer page-gutter">
      <Owner />
      <FooterLinks />
    </footer>
  );
}
