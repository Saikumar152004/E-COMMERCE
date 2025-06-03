import React,{useState, useEffect} from 'react'
import axios from "axios";

function Register() {

   const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ name: "", mobile: "", email:"", city: "", password:"" });
  const [id, setId] = useState(null);

     useEffect(() => {
    axios
      .get("http://localhost:3000/userData")
      .then((res) => setData(res.data));
  }, []);

    const formHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
// alert(JSON.stringify(data))
    if (id) {
      axios
        .put(`http://localhost:3000/userData/${id}`, formData)
        .then((response) => {
          setData(data.map((item) => (item.id === id ? response.data : item)));
        });
      setId(null);
      setFormData({ name: "", mobile: "", email:"", city: "", password:"" });
    } else {
      axios
        .post("http://localhost:3000/userData", formData)
        .then((response) => {
          setData([...data, response.data]);
          setFormData({ name: "", mobile: "", email:"", city: "", password:"" });
        });
    }
  };


  return (
   <div>
         <div className="row mt-5">
        <div className="col-md-4 card py-3 offset-md-4  ">
          <h2 className="text-center">User Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={formHandle}
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={formHandle}
                className="form-control"
                placeholder="Enter Mobile"
              />
            </div>
             <div className="form-group">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={formHandle}
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={formHandle}
                className="form-control"
                placeholder="Enter City"
              />
            </div>

             <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={formHandle}
                className="form-control"
                placeholder="Enter Password"
              />
            </div>

            <div className="text-center">
              <button className="btn btn-success"> Add User</button>
            </div>
          </form>
        </div>
      </div>
      </div>
  )
}

export default Register