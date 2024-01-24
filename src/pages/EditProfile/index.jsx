import { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Navbar } from "@/layout";
import { ToastContainer, toast } from 'react-toastify';
import axios from "@/api/axios";
import { deleteCookie } from "cookies-next";
const EditProfile = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  function tosts() {

    toast.success("update successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }
  // Submit the form data to the server
  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.put('/users/updateMe', {
        name: fullName,
        email: email
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setIsPending(false)
          console.log(response);
          // deleteCookie('role')
          // deleteCookie('token')
          navigate("/")
          if (response.status == 200) {
            // tosts()
          }
          
        })
        
      } catch (err) {
        setIsPending(false);
        console.log('response', err.response);
      }
    }
    useCallback(handelSubmit,[])
    // useEffect(()=>{},[handelSubmit])
    
    return (
    <>
      {isPending && <div className="loading"></div>}
      <div className='login-page'>
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <h3 className='text-center pt-3 fs-2 fw-bold'>تغييرالبايانات الشخصيه</h3>
              <form className='pb-5 pt-2' onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-5 fw-bold"
                  >ادخل الاسم بالكامل </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-5 fw-bold"
                  > ادخل البريد الالكترونى*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <ToastContainer />
                  <button onClick={() => tosts()} >تغيير البيانات </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
