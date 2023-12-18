import { Fragment } from "react"
import "./PricePlannig.scss"
import { planning } from "@/db/data"
const PricePlannig = () => {
  return (
    <div className="container-fluid planing" style={{ background: "linear-gradient(90deg, var(--main-color) 0%, var(--darkblue-color) 100%)" }}>
      <div className="container p-5">
        <div className="row">
          {planning?.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-lg card-transmation">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">{item?.title}</h5>
                    <small>Individual</small>
                    <br /><br />
                    <span className="h2">{item?.price}</span>
                    <br /><br />
                  </div>
                  {/* <p className="card-text text-end fs-5">{item?.description}</p> */}
                </div>
                {item?.features.map((item, index) => (
                  <Fragment key={index}>
                    <div className="row text-end">
                      <div className="col-md-12 d-flex">
                        <p className="mb-0 fs-5">{item?.title}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </ Fragment>
                ))}
                <div className="card-body text-center">
                  <button className="" style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default PricePlannig