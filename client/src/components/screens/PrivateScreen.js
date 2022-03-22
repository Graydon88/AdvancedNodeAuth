import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import ExemptJob from "../forms/ExemptJob";

export default function PrivateScreen({ history }) {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [form, setForm] = useState(1);
  
  /* const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [role, setRole] = useState(""); */
  

  function goNextForm() {
    if (form === 4) return;
    setForm((form) => form + 1);
  }

 
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
}

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    
    <div>
      {/* {privateData}<br/>
    <div>
      <progress max="4" value={form} />
    </div>
    <br/>
    {form === 1 && <FormOne />}
    {form === 2 && <FormTwo   />}
    {form === 3 && <FormThree />}
    {form === 4 && <FormFour />}

    <br/>
    {form !== 4 && <button onClick={goNextForm}>Go Next</button>}
    {form === 4 && <button type="submit">Submit</button>}
    <br /> */}
    
    <ExemptJob />
    <br />
    <button onClick={logoutHandler}>Logout</button>
    </div>

    
    
  );
};

function FormOne() {
  const [inputFields, setInputFields] = useState([
    { company: '', exempt: '' }
  ])
  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='company'
                placeholder='Company'
                value={input.company}
                onChange={(e) => setInputFields(e.target.value)}
              />
              <input
                name='exempt'
                placeholder='Exempt'
                value={input.exempt}
                onChange={(e) => setInputFields(e.target.value)}
              />
            </div>
          )
        })}
      </form>
    </div>
  );
}

function FormTwo() {
  const [inputFields, setInputFields] = useState([
    { status: '', gender: '' }
  ])
  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='status'
                placeholder='Status'
                value={input.status}
              />
              <input
                name='gender'
                placeholder='Gender'
                value={input.gender}
              />
            </div>
          )
        })}
      </form>
    </div>
  );
}


function FormThree() {
  return (
    <div>I am form 3</div>
  )
}

function FormFour() {
  return (
    <div>I am form 4</div>
  )
}


