import book from "../../assets/img/kenzbook.png"
import creative from "../../assets/img/creative.jpeg"
import app from "../../assets/img/app.jpeg"
import kinz from "../../assets/img/kinz.jpeg"
import { Link } from "react-router-dom"
import styles from './GoldCard.module.scss';
import axios, { api_key } from "@/api/axios"
import { useEffect, useState } from "react"
const GoldCard = () => {
  const card = [
    {
      title: 'Gold Card',
      description: `The gold card is the most popular and widely used type of membership in our club, which offers a wide range of benefits to its  `,
      id: 1,
      img: book
    },
    {
      title: 'Silver Card',
      description: `The gold card is the most popular and widely used type of membership in our club, which offers a wide range of benefits to its  `,
      id: 2,
      img: creative
    },
    {
      title: 'Silver Card',
      description: `The gold card is the most popular and widely used type of membership in our club, which offers a wide range of benefits to its  `,
      id: 3,
      img: app
    },
    {
      title: 'Silver Card',
      description: `The gold card is the most popular and widely used type of membership in our club, which offers a wide range of benefits to its  `,
      id: 4,
      img: kinz
    },
    {
      title: 'Silver Card',
      description: `The gold card is the most popular and widely used type of membership in our club, which offers a wide range of benefits to its  `,
      id: 5,
      img: kinz
    }
  ]
  const [loading, setLoading] = useState(false);
  const [goldPrice, setGoldPrice] = useState([])
  var myHeaders = new Headers();
  myHeaders.append("x-access-token", "goldapi-47gnrlpim79s5-io");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return (
    <>
      <div id="goldCart" className="Container">
        <h2 className="text-center fw-bold mb-5">Gold price</h2>
        <div className={styles['home-grid']}>
          {card.map((item, index) =>
            index < 4 ? (
              <div key={item.id} className={styles['gold-div']}>
                <div>
                  <img
                    src={item?.img}
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item?.description}</p>
                  <Link
                    to={`/gold-news/${item.id}`}
                    state={{ item: item }}
                  >
                    <button>Learn More</button>
                  </Link>
                </div>
              </div>
            ) : (
              ''
            )
          )}
        </div>
        <Link to="/goldPrice">
          <h4 className="fw-bold text-center">Show More coruses</h4>
          <hr />
        </Link>
      </div>
    </>
  )
}

export default GoldCard