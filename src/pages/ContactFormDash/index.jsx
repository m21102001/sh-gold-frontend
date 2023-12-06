import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";

const ContactFormDash = () => {
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState([])

  let fetchContactForm = {
    method: 'get',
    url: '/contact',
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request(fetchContactForm)
      .then((response) => {
        setContactForm(response.data);
        setLoading(false);
        console.log("contactForm", response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handelDelete = async (id) => {
    let config = {
      method: 'delete',
      url: `/contact/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(fetchContactForm).then((response) => {
          setContactForm(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const handelDeleteAll = async () => {
    let config = {
      method: 'delete',
      url: `/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(fetchContactForm).then((response) => {
          setContactForm(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />

      <div className="container text-center">
        <h1>Contact Form Dashboard</h1>
        <button onClick={() => handelDeleteAll()} type="button" className="btn btn-danger d-block m-3" style={{ padding: "7px 6rem" }}>حذف الكل</button>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الاسم بالكامل</th>
              <th scope="col">البريد الالكترونى</th>
              <th scope="col">اسم المؤسسه</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && contactForm?.document?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.company}</td>
                <td>
                  <Link
                    to={`/dash/details-contact-form/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">التفاصيل</button>
                  </Link>
                  <button onClick={() => handelDelete(item._id)} className="btn btn-outline-danger mx-2 px-4">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactFormDash
