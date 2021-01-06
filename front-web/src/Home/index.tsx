import './style.css'
import {ReactComponent as MainImage} from './home.svg'

function Home() {
    return (
      <div className="home-container">
          <div className="home-content">
              <div className="home-actions">
                    <h1 className="home-title">Faça o seu pedido <br />que entregamos para você!</h1>
                    <h3 className="home-subtitle">Escolha seu pedido que em poucos minutos <br />levaremos na sua porta</h3>
                    <a className="home-btn-order" href="#">FAZER PEDIDO</a>
                </div>
            <div className="home-img">
                <MainImage />
            </div>
          </div>
      </div>
    )
}

export default Home;