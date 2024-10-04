import React,{useRef} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFile ,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
const Register = () => {
   
    
  return (
    <MDBContainer fluid className='p-4'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

      <h1 className="my-5 display-3 fw-bold ls-tight text-emerald-400 px-3">
          The best way <br />
          <span className="text-zinc-200">to communicate with friends</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet, itaque accusantium odio, soluta, corrupti aliquam
          quibusdam tempora at cupiditate quis eum maiores libero
          veritatis? Dicta facilis sint aliquid ipsum atque?
        </p>

      </MDBCol>

      <MDBCol md='6'>

        <MDBCard className='my-5'>
          <MDBCardBody className='p-5'>

            <MDBRow>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
              </MDBCol>

            
            </MDBRow>

            <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password'/>
            <div className="flex items-center justify-center w-full mb-4 bg-emerald-500 dark:hover:bg-emerald-600">
    <label  className="flex flex-col items-center justify-center w-full h-10 border-2 border-zinc-100 border-dashed rounded-lg cursor-pointer  ">
        <div className="flex flex-col items-center justify-center pt-1 pb-1 bg-emerald-60">
        <i className="fas fa-cloud-arrow-up text-yellow-100"></i>
           
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

        

           

            <button className='w-100 mb-4 bg-zinc-100 p-2 dark:hover:bg-zinc-200 hover:scale-95 transition  duration-100 ease-in-out' size='md'>sign up</button>

            <div className="text-center">
            <p>already have account? <a href="/login" className='text-emerald-400 hover:text-emerald-500'>Login</a></p>


              <p>or sign up with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'red' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color:'gray' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>


  )
}

export default Register