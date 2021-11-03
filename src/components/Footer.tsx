import Image from 'next/image'
type FooterProps = {
    children: String;
}
const Footer = ({children}:FooterProps) => (
    <>
      <a href='https://cafecito.app/cristianfonseca' className="flex justify-center" rel='noreferrer' target='_blank' ><Image src='https://cdn.cafecito.app/imgs/buttons/button_6.png' alt='Invitame un café en cafecito.app' width='192px' height='40px' quality={100}/></a>
      <footer className="px-10 py-8 mx-auto text-sm font-light tracking-wide text-center text-muted">
        {children}
      </footer>
    </>
  );
  
  export default Footer;
  