type FooterProps = {
    children: String;
}
const Footer = ({children}:FooterProps) => (
    <footer className="px-10 py-8 mx-auto text-sm font-light tracking-wide text-center text-muted">
      {children}
    </footer>
  );
  
  export default Footer;
  