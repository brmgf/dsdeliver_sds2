import './style.css'
import { ReactComponent as Youtube} from './youtube.svg'
import { ReactComponent as Linkedin} from './linkedin.svg'
import { ReactComponent as Instagram} from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            <p>App desenvolvido durante a 2° ed do evento Semana DevSuperior</p>
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="new_"><Youtube /></a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="new_"><Linkedin /></a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="new_"><Instagram /></a>
            </div>
        </footer>
    )
}

export default Footer;