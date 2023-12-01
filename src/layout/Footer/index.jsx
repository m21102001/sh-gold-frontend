import './footer.module.scss';
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start tex-light "  >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="https://github.com/m21102001" className="me-4 text-reset">
            <FaFacebook />
          </a>
          <a href="https://github.com/m21102001" className="me-4 text-reset">
            <FaXTwitter />
          </a>
          <a href="https://github.com/m21102001" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="https://github.com/m21102001" className="me-4 text-reset">
            <FaInstagram />
          </a>
        </div>
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="tex-light text-center " >
        <div className="container p-4 pb-0">
          <section className="mb-4 d-flex justify-content-center">
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #3b5998" }}
              href="https://github.com/m21102001"
              role="button"
            ><FaFacebook /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #55acee" }}
              href="https://github.com/m21102001"
              role="button"
            ><FaXTwitter /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #dd4b39" }}
              href="https://github.com/m21102001"
              role="button"
            ><FaGoogle /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #ac2bac" }}
              href="https://github.com/m21102001"
              role="button"
            ><FaInstagram /></a>
          </section>
        </div>

        <div className=" copyRight text-center p-3" style={{ backgroundColor: "rgb(133 133 133 / 5%)" }}>
          © 2023 Copyright:
          <a className="love" href="https://github.com/m21102001"> make by Love</a>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;