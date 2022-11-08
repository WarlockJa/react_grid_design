
import { faYoutube, faTwitter, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar() {
  return (
    <nav id="topbar">
        <div id="nav-logo" className="nav-section">
            <a href="#">
                <FontAwesomeIcon icon={faDumpsterFire} />
            </a>
        </div>
        <div id="nav-links" className="nav-section">
            <a href="#">WORK</a>
            <a href="#">HOME</a>
        </div>
        <div id="nav-socials" className="nav-section">
            <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faCodepen} />
            </a>
        </div>
        <div id="nav-about" className="nav-section">
            <a href="#">CONTACT US</a>
        </div>
    </nav>
  )
}
