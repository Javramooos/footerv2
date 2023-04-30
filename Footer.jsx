import React from 'react'
import './Footer.css'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="container-fluid text-center text-md-start">
        <section className="footer-container">
          <section className="footer-links">
            <h6 className="Titulo">Enlaces</h6>
            <p><a href="#!" className="text-reset">Destinos</a></p>
            <p><a href="#!" className="text-reset">Noticias</a></p>
            <p><a href="#!" className="text-reset">¿Quiénes somos?</a></p>
          </section>

          <section className="footer-links">
            <h6 className="Titulo">Servicios</h6>
            <p><a href="#!" className="text-reset">Reservas</a></p>
            <p><a href="#!" className="text-reset">Transporte</a></p>
            <p><a href="#!" className="text-reset">Ofertas</a></p>
          </section>

          <section className="footer-links">
            <h6 className="Titulo">Contáctenos</h6>
            <p><i className="fas fa-home me-3"></i> Bogotá, Colombia</p>
            <p><i className="fas fa-envelope me-3"></i> info@viaje.com</p>
            <p><i className="fas fa-phone me-3"></i> + 57 234 56788</p>
          </section>
        </section>
      </section>

      <section className='footer-derechos'>
        <section className='iconos-redes'>
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </section>
        <section>
          © 2023
          <a className="text-reset fw-bold" href="#"> Turismo.com</a>
        </section>
      </section>
    </footer>
  )
}

export default Footer;

    