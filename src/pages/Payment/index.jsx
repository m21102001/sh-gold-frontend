import { Footer, Navbar } from '@/layout'

const index = () => {
  return (
    <div>
      <Navbar />
      <form onSubmit={''} className='container'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default index
