import React from 'react'
import './App.css'
import icon from './images/icon_76pt@2x.png'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light static-top black">
        <a className="navbar-brand" href="https://google.com">
          <img src={icon} className="kab-icon d-inline-block align-top" alt="KAB Logo" />
        </a>
        <p className="logo-text">VEB KÜHLAUTOMAT</p>

        <a className="btn btn-outline-light btn-sm" href="/login">
          Log Out
        </a>
      </nav>

      <header className="masthead text-white text-center">
        <div className="container profile-welcome mt-5">
          <h1 className="display-4">Willkommen, Gerda Mustermann</h1>
          <hr className="my-4" /><p className="lead">
            Account Nr.: 0233422094
            <br />
            Firmenname: VE Werft Stralsund BT Beschaffung Prohn
            <br />
            Eintrittsdatum: 23.03.1987
          </p>
          <a className="btn btn-outline-dark btn-sm mb-5" href="#/edit-profile" role="button">
            Profil bearbeiten
          </a>
          
        </div>
        <div className="jumbotron marine m-2" style={{padding: '20px'}}>
          <p>
            Der VEB Kühlautomat hat seinen Homepageauftritt geändert. Die grundlegenden Funktionen haben sich nicht
            geändert. Besuchen Sie unser Tutorial um die wichtigsten Änderungen zu entdecken.
          </p>
          <a className="btn btn-light btn-sm" href="#/edit-profile" role="button">
            Mehr erfahren
          </a>
        </div>
      </header>

      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img1"
              style={{ height: '100px', margin: '20px 0' }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3 style={{margin: '0 20px'}}>Laufende Aufträge</h3>
              <div className="lead mb-0" style={{margin: '0 20px'}}>
              <a className="btn btn-outline-dark btn-sm mt-3" href="#/edit-profile" role="button">
            Details anzeigen
          </a>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img2"
              style={{ height: '100px', margin: '20px 0' }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3 style={{margin: '0 20px'}}>Neuer Auftrag</h3>
              <div className="lead mb-0" style={{margin: '0 20px'}}>
              <a className="btn btn-outline-dark btn-sm mt-3" href="#/edit-profile" role="button">
            Erstellen
          </a>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img3"
              style={{ height: '100px', margin: '20px 0' }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h3 style={{margin: '0 20px'}}>Kontakt</h3>
              <div className="lead mb-5" style={{margin: '0 20px'}}>
              <a className="btn btn-outline-dark btn-sm mt-3 mr-3" href="#/edit-profile" role="button">
            FAQ ansehen
          </a>
          <a className="btn btn-outline-dark btn-sm mt-3" href="#/edit-profile" role="button">
            Neues Ticket
          </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

   

      <footer className="footer  marine">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2 mt-4">
                <li className="list-inline-item">
                  <a href="/ueberuns" style={{ color: 'white' }}>
                    Über Uns
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="contact" style={{ color: 'white' }}>
                    Kontakt
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="tocs" style={{ color: 'white' }}>
                    Geschäftsbedingungen
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="dataprivacy" style={{ color: 'white' }}>
                    Datenschutz
                  </a>
                </li>
              </ul>
              <p className="small mb-4 mb-lg-0">
                &copy; VEB Kühlautomat Berlin, Segelfliegerdamm 34-45, Berlin 1034, DDR
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
