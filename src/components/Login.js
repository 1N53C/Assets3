import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import './Login.css'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Senden der POST-Anfrage zur Anmeldung
    fetch('http://localhost:8000/accounts/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => {
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
         return response.text();  // Ersetze response.json() durch response.text()
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

 return (
     <form onSubmit={handleSubmit}>
       <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Log in to your account</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' value={username} onChange={e => setUsername(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' value={password} onChange={e => setPassword(e.target.value)}/>

          <MDBBtn type="submit" className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
     </form>
  );
}

export default Login;
