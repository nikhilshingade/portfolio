import React, { useState } from 'react'
import './App.css'
import logo from './niklogo.png'
import profimage from './Profphoto.png'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';
import css from './css.png'
import html from './html.jpg'
import js from './js.png'
import mui from './mui.png'
import ts from './ts.jpg'
import react from './react.png'
import weather from './weather.png'
import { FiExternalLink } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import flipcart from './flipcart.png'
import pro from './fetch pro.png'
import res1 from './res1.png'

const Homepage = () => {
  const [num,numSet] = useState("#home")
  const [sub,submit] = useState(false)
  const [name,setname] = useState()
  const [last,setlast] = useState()
  const [mob,setmob] = useState()
  const [email,setemail] = useState()
  const [message,setmessage] = useState()
  

const handleSubmit = (e) => {
  e.preventDefault();
  if (!name || !last || !mob || !email || !message) {
    alert("Please fill all the fields!");
    return;
  }
  const templateParams = {
    name: name,
    last: last,
    mob: mob,
    email: email,
    message: message,
  }

  emailjs.send('service_m7jq3uf', 'template_fdo8ujv', templateParams, 'd3TnTLHeLM4g_7GTu')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message Sent Successfully!');
      submit(true); 
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send message, please try again.');
    })
};

  
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img className='logoimg' src={logo} alt="logo"/>
        </div>
        <div className="welcome">Welcome to My Portfolio!</div>
        <div className="sections">
          <ul className='ul'>
            <li className='li'><a onClick={()=>numSet("#home")} style={{color:num==="#home"?"white":"#f7e1a0"}} href="#home">Home</a></li>
            <li className='li'><a onClick={()=>numSet("#about")} style={{color:num==="#about"?"white":"#f7e1a0"}} href="#about">About</a></li>
            <li className='li'><a onClick={()=>numSet("#project")} style={{color:num==="#project"?"white":"#f7e1a0"}} href="#project">Projects</a></li>
            <li className='li'><a onClick={()=>numSet("#contacts")} style={{color:num==="#contacts"?"white":"#f7e1a0"}} href="#contacts">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='section'>

        <div className="home" id='home'>
          <div className='intro'>
            <h2 className='itsme'>Hello It's Me</h2>
            <h1 className='naame'>Nikhil Shingade</h1>
            <h2>And I'am a <span className='position'>React Developer</span></h2>
            <h5 className='introduction'>I'm a React Developer with hands-on experience in building responsive and user-friendly web applications using React.js, JavaScript, TypeScript, and Material-UI. I specialize in clean UI design, seamless API integration, and efficient state management. With strong frontend skills, I enjoy transforming ideas into interactive and impactful digital experiences.</h5>
            <div className='icons'>
              <a href="https://www.linkedin.com/in/nikhil-shingade-32b659235/" target="_blank" rel="noreferrer">
                <FaLinkedin className='iconstyle' style={{color: "#0077B5"}}/>
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer">
                <FaTwitter className='iconstyle' style={{color: "#1DA1F2"}} />
              </a>
              <a href="https://github.com/nikhilshingade" target="_blank" rel="noreferrer">
                <FaGithub className='iconstyle' style={{color: "#ffffff"}} />
              </a>
              <a href="https://facebook.com/your-profile" target="_blank" rel="noreferrer">
                <FaFacebook className='iconstyle' style={{color: "#1877F2"}} />
              </a>
          </div>

          </div>
          <div class="imgdiv">
           <img className='profimg' src={profimage} alt="profimg"/>
          </div>
        </div>

        <div className="about" id='about'>
          <h1 className='aboutn'>About Me</h1>
          <div class="abouth">
            <div className='intro1'>
              <div class="coldiv">
                <h2 className='itsme'>Frontend Developer</h2>
                <h5 style={{color:"white",margin:"5px 20px"}}> I am an innovative and detail-oriented front-end developer, specializing in React, JavaScript, TypeScript, and Single
 Page Applications (SPA). Skilled in building dynamic, responsive web applications, I specialize in translating UI/UX
 designs into functional, user-friendly interfaces. I focus on writing scalable, maintainable code and stay up-to-date with
 industry trends to deliver exceptional user experiences.</h5>              
                <h2 className='itsme' style={{margin:"10px 0px"}}>Skills</h2>
              </div>
              <div className='skills'>
                <div className='skillcard'>
                  <img className='skillimg' src={js} alt="js"/>
                  <h4 className='lang'>Javascript</h4>
                </div>
                <div className='skillcard'>
                  <img className='skillimg' src={react} alt="js"/>
                  <h4 className='lang'>React</h4>
                </div>
                <div className='skillcard'>
                  <img className='skillimg' src={ts} alt="js"/>
                  <h4 className='lang'>Typescript</h4>
                </div>
                <div className='skillcard'>
                  <img className='skillimg' src={html} alt="js"/>
                  <h4 className='lang'>HTML</h4>
                </div>
                <div className='skillcard'>
                  <img className='skillimg' src={css} alt="js"/>
                  <h4 className='lang'>CSS</h4>
                </div>
                <div className='skillcard'>
                  <img className='skillimg' src={mui} alt="js"/>
                  <h4 className='lang'>Material UI</h4>
                </div>
              </div>
            </div>
        </div>
        </div>
        
        <div className="projects" id='project'>
          <h1 className='aboutn'>My Projects</h1>
          <div className='projectscards'>
              <div className="procards">
                <img className='weatherimg' src={res1} alt='weather img' />
                <div className='prodetails'>
                    <h6 className='proseq'>Project 1</h6>
                    <h3 className='proName'>ShopHub E-Commerce</h3>
                    <h6 className='proinfo'>Developed a full-stack e-commerce platform using React and ASP.NET Core Web API. Implemented authentication, product management, shopping cart, order processing, admin dashboard, and responsive UI with seamless REST API integration.</h6>
                </div>
                <div className='bottominfo' >
                    <a href="https://react-dotnet-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <h6 className="withicon">Visit</h6>
                    </a>
                    <a href="https://github.com/nikhilshingade/react-dotnet-ecommerce" target="_blank" rel="noopener noreferrer">
                      <div className='withicon'>
                          <h6>Git</h6>
                          <FiExternalLink className='openlink' />
                      </div>
                    </a>
                </div>
              </div>
              <div className="procards">
                <img className='weatherimg' src={weather} alt='weather img' />
                <div className='prodetails'>
                    <h6 className='proseq'>Project 2</h6>
                    <h3 className='proName'>Weather App</h3>
                    <h6 className='proinfo'>This project fetches real-time weather data city-wise using the OpenWeather API. Users can enter a city name to get current temperature, weather conditions, humidity, wind speed, and more. It provides a clean and responsive UI for a smooth user experience.</h6>
                </div>
                <div className='bottominfo'>
                    <a href="https://nikhilshingade131.github.io/weather-api-app/" target="_blank" rel="noopener noreferrer">
                      <h6 className="withicon">Visit</h6>
                    </a>
                    <a href="https://github.com/nikhilshingade131/weather-api-app.git" target="_blank" rel="noopener noreferrer">
                      <div className='withicon'>
                          <h6>Git</h6>
                          <FiExternalLink className='openlink' />
                      </div>
                    </a>
                </div>
              </div>
              <div className="procards">
                <img className='weatherimg' src={flipcart} alt='weather img' />
                <div className='prodetails'>
                    <h6 className='proseq'>Project 3</h6>
                    <h3 className='proName'>Flipcart clone</h3>
                    <h6 className='proinfo'>This e-commerce app replicates core Flipkart features. It fetches product data from an API and displays it neatly. The app uses React Router for navigation and TypeScript for type safety, offering a smooth, responsive experience across product, detail, and cart pages.</h6>
                </div>
                <div className='bottominfo' >
                    <a href="https://nikhilshingade131.github.io/flipcart/" target="_blank" rel="noopener noreferrer">
                      <h6 className="withicon">Visit</h6>
                    </a>
                    <a href="https://github.com/nikhilshingade131/flipcart.git" target="_blank" rel="noopener noreferrer">
                      <div className='withicon'>
                          <h6>Git</h6>
                          <FiExternalLink className='openlink' />
                      </div>
                    </a>
                </div>
              </div>
              <div className="procards">
                <img className='weatherimg' src={pro} alt='weather img' />
                <div className='prodetails'>
                    <h6 className='proseq'>Project 4</h6>
                    <h3 className='proName'>QuickMart</h3>
                    <h6 className='proinfo'>This single-page e-commerce app fetches product data using an API, implements routing with React Router, and features fully responsive design. User login is tested with Postman, ensuring secure access, smooth navigation, and efficient state management for better performance.<br></br>Login ID: emilys & Password: emilyspass</h6>
                </div>
                <div className='bottominfo' >
                    <a href="https://nikhilshingade131.github.io/product-fetching/" target="_blank" rel="noopener noreferrer">
                      <h6 className="withicon">Visit</h6>
                    </a>
                    <a href="https://github.com/nikhilshingade131/product-fetching.git" target="_blank" rel="noopener noreferrer">
                      <div className='withicon'>
                          <h6>Git</h6>
                          <FiExternalLink className='openlink' />
                      </div>
                    </a>
                </div>
              </div>
              
          </div>
        </div>

        <div className="contact">            
            <h1 className='aboutn' id='contacts'>Contact <span className='position' style={{fontSize:"35px"}}>Me!</span></h1>
            {sub && <div className="submitted">
                <h2 className='responce'>Submitted successfully....!</h2>
            </div>}
            {!sub && <div className="contactdetails">
                <div className="firstlast">
                    <input value={name} onChange={(e)=>setname(e.target.value)} className='inp' type="text" name="" id="" placeholder='FirstName'/>
                    <input value={last} onChange={(e)=>setlast(e.target.value)} className='inp' type="text" name="kkk" id="" placeholder='LastName'/>
                </div>
                <div className="firstlast">
                    <input value={mob} onChange={(e)=>setmob(e.target.value)} className='inp' type="number" name="" id="" placeholder='Mob.Number'/>
                    <input value={email} onChange={(e)=>setemail(e.target.value)} className='inp' type="email" name="kkk" id="" placeholder='Email Address'/>
                </div>
                <textarea value={message} onChange={(e)=>setmessage(e.target.value)} className='textarea' name="" id="" placeholder='Enter your message here...'></textarea>
                <div className='btn2'>
                    <h5 onClick={handleSubmit} className='btnsubmit'>Submit</h5>
                </div>
            </div>}
          
        </div>

      </div>  
    </div>
  )
}

export default Homepage

