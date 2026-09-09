const Contact = () => {
  return (
    <section id="contact">
      <div>
        <form action="" className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" />
            </div>
          </div>
          <div>
            <p>Address Information</p>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" />
            <div className="flex">
              <div className="flex flex-col">
                <label htmlFor="city">City</label>
                <input id="city" type="text" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state">State</label>
                <input id="state" type="text" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="zip">ZIP</label>
                <input id="zip" type="text" />
              </div>
            </div>
          </div>
        </form>
      </div >
    </section >
  )
}

export default Contact