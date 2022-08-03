import {
  Codesandbox,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from "react-feather";

export default function Socials({}) {
  return (
    <>
      <div className="social__links">
        <div className="social__links__entries">
          <a
            href="https://github.com/ahmadhaqofficial"
            title="github"
            className="social__links__entries__link"
          >
            <GitHub size={20} color="currentColor" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100037264952877"
            title="facebook"
            className="social__links__entries__link"
          >
            <Facebook size={20} color="currentColor" />
          </a>
          <a
            href="https://www.instagram.com/ahmadbutt8096/?hl=en"
            title="instagram"
            className="social__links__entries__link"
          >
            <Instagram size={20} color="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-haq-a78134244/"
            title="linkedin"
            className="social__links__entries__link"
          >
            <Linkedin size={20} color="currentColor" />
          </a>
          {/* <a
            href="https://codesandbox.io/u/MehfoozurRehman"
            title="codesandbox"
            className="social__links__entries__link"
          >
            <Codesandbox size={20} color="currentColor" />
          </a> */}
        </div>
        <div className="social__links__line"></div>
      </div>
      <div className="social__email">
        <a href="mailto:ahmadhaq61@gmial.com" className="social__email__text">
          ahmadhaq61@gmial.com
        </a>
        <div className="social__links__line"></div>
      </div>
    </>
  );
}
