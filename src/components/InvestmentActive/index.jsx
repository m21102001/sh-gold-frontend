import { useEffect, useState } from "react"
import axios from '@/api/axios'
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useAuth } from "@/context/Auth";

const InvestmentActive = () => {
  const [loading, setLoading] = useState(false)
  const [investment, setInvestment] = useState([])
  const { user } = useAuth();
  // console.log(user.role);
  useEffect(() => {
    setLoading(true)
    if (user.role == 'manager') {
      axios.get(`/invest/active`)
        .then((response) => {
          setInvestment(response.data)
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          console.log(error);
        });
    }
  }, [])

  const handelToggle = async (id) => {
    let config = {
      method: 'put',
      url: `/invest/activeToggle/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(`/invest/active`).then((response) => {
          setInvestment(response.data);
          setLoading(false);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handelDelete = async (id) => {
    let config = {
      method: 'delete',
      url: `/invest/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(`/invest/active`).then((response) => {
          setInvestment(response.data);
          setLoading(false);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  /////////////////////////////////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  const handelprev = () => {
    setPrev(count => count - 10)
    setNext(count => count - 10)
    if (prev <= 0) {
      setPrev(0);
      setNext(10)
    }
  }
  const handelNext = () => {
    setNext(count => count + 10);
    setPrev(count => count + 10)
    if (next < 10) {
      setPrev(0);
      setNext(10)

    }
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly">
        {!loading && investment?.invest?.map((item, index) => (
          index >= prev && index <= next ? (
            <Link
              // to={`/dash/details-investment/${item._id}`}
              // state={{ item: item }}
              key={index}
              className="card mb-5"
              style={{ width: "18rem" }}
            >
              <LazyLoadImage
                src={`${import.meta.env.VITE_IMAGE_URL}${item.images?.[0]}`}
                className="card-img-top"
                alt={item?.title}
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold "> {item?.title}</h5>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-around mt-3">
                    <Link
                      to={`/investment/inactive/details-investment/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-primary px-4">تفاصيل</button>
                    </Link>
                    <button onClick={() => handelToggle(item._id)} className="btn btn-success px-4">الغاء التفعيل</button>
                  </div>
                  <div className="d-flex justify-content-around mt-3">
                    <Link
                      to={`/investment/inactive/Update-investment/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-info px-4">تعديل</button>
                    </Link>
                    <button onClick={() => handelDelete(item._id)} className="btn btn-danger px-4">حذف</button>
                  </div>
                </div>
              </div>
            </Link>
          ) : null
        ))}
      </div>
      {user.role != 'manager' ? (
        <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
      ) : null
      }
      <div className="d-flex justify-content-around">
        <button className={`btn btn-outline-info ${next >= investment?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
        <h3 className="text-light"> {investment?.length}/ {prev} </h3>
        <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
      </div>
    </>

  )
}

export default InvestmentActive