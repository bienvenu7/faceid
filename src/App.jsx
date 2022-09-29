import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [user, setUser] = useState({})

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        }, 
      });

      setUser(`ID: ${response.facialId},
      Date: ${response.timestamp},
      Gender: ${response.details.gender},
      Age Approximation: ${response.details.age}`)

      alert('you signed in');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      setUser(`ID: ${response.facialId},
          PayLoad: ${response.payload}
          `)
          alert('you logged in');    
    } catch (error) {
      console.log(error);
    }
  };
  
  let faceio;
  useEffect(() => {
      faceio = new faceIO("fioaea09");
  }, []);

  console.log(user)
  
  return (
    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </section>
  )
}

export default App
