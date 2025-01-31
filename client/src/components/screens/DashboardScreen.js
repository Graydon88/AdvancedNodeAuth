import { useState, useEffect } from "react";
import axios from "axios";

const DashboardScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

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
        {privateData}<br/>
    <span color="primary"> This is the dashboard</span>
    <button onClick={logoutHandler}>Logout</button>
    </div>
    
  );
};

export default DashboardScreen;
