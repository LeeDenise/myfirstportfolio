import React, { useState } from "react"
import { useNavigate, Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import useSound from 'use-sound';
import boopSfx from './sounds/Windows_XP_Startup.mp3';
import springprojectpic from './images/springboot.png';
import mlprojectpic from './images/watermelon.png';
import mypicture from './images/denise.jpeg';
import './form-submission-handler.js'
/**
 * TODO add function to move window 
 */
export function Loading(props) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/signup')
    }

    setTimeout(() => {
        routeChange()
    }, 1000)

    return (
        <>
        <Jumbotron id="loading">

        </Jumbotron>
        </>
    );
}

export function Signup() {
    const [play] = useSound(
        boopSfx,
      { volume: 0.5 }
    );

    return (
        <>
        <Container id="signup">
            <Row id="user">

            <a
            href="#"
            title="Signin"
            role="button"
            onClick={() => {
                play();
                setTimeout(() => {
                    window.location.href="/home"
                }, 3500)
            }}>
                <span></span>Denise Lee
            </a>
            </Row>
        </Container>
        </>
    )
}

export function Home() {
    return (
        <>
        <Container>
            <div className="main_icons_container">
            <ul id="main_icons">
                <li id="my_computer">
                    <a
                    style={{textShadow: '0.5px 0.5px black'}}
                    href="/home/myprofile"
                    title="Shows Denise's profile"
                    ><span></span>Denise Lee</a
                    >
                </li>
                <li id="my_documents">
                    <a
                    href="/home/myprojects"
                    title="Show Denise's projects."
                    ><span></span>My Projects</a
                    >
                </li>
                <li id="contactme">
                    <a
                    href="/home/emailme"
                    title="Shows shortcuts to Web sites, network computers, and FTP sites."
                    ><span></span>Contact Me</a
                    >
                </li>
                {/* <li id="terminal">
                    <a href="/home/terminal" title="Contains the files and folders you have deleted."
                    ><span></span>Terminal</a
                    >
                </li> */}
                <li id="github">
                    <a href="https://github.com/LeeDenise" target="_blank" title="My GitHub" rel="noreferrer"
                    ><span></span>GitHub</a
                    >
                </li>
                <li id="linkedin">
                    <a href="https://www.linkedin.com/in/dohui-denise-lee/" target="_blank" title="My Linked In" rel="noreferrer"
                    ><span></span>Linked In</a
                    >
                </li>
                <li id="recycle_bin">
                    <a href="/home" title="Contains the files and folders you have deleted."
                    ><span></span>Recycle Bin</a
                    >
                </li>
            </ul>
            </div> {/* end of main_icons_container */}
            <Row id="desktop">
                <Outlet />
            </Row>
            <Row id="footer" className="taskbar">
                <h2 id="startbutton">
                    <a href="/home" title="Click here to begin"
                        ><span id="startbuttongraphic"></span></a
                    >
                </h2>
            </Row>
        </Container>
        </>
    );
}

export function Calculator(props) {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/home')
    }

    return (
        <div className="calculator">
            <div style={{ width: 300 }} className="window">
              <div className="title-bar">
                <div className="title-bar-text">Counter</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize" />
                  <button aria-label="Maximize" />
                  <button aria-label="Close" onClick={ routeChange }></button>
                </div>
              </div>
      
              <div className="window-body">
                <p style={{ textAlign: "center" }}>Current count: {count}</p>
                <div className="field-row" style={{ justifyContent: "center" }}>
                  <button onClick={() => setCount(count + 1)}>+</button>
                  <button onClick={() => setCount(count - 1)}>-</button>
                  <button onClick={() => setCount(0)}>0</button>
                </div>
              </div>
            </div>
        </div>
    );
}

{/* export function Terminal(props) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/home')
    }

    const stringToShow =
        'Microsoft&#10094;R&#10095; Windows DOS\n&#10094;C&#10095; Copyright Microsoft Corp 1990-2001.\nC:&#92;WINDOWS&#92;SYSTEM32> |'
    return (
        <div style={{ height: 500, backgroundColor: 'black' }} className="window">
        <div className="title-bar">
                <div className="title-bar-text">Command Prompt</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" onClick={ routeChange } />
                </div>
            </div>
            <div style={{ height: 300 }} className="window-body">
                <pre>{stringToShow}</pre>
            </div>
        </div>
    );
} */}

export function MyProjects(props) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/home')
    }
    const [project, setProject] = useState('tab-1');    
    const [ariaSelected1, setAriaSelected1] = useState(null);
    const [ariaSelected2, setAriaSelected2] = useState(null);
    const [ariaSelected3, setAriaSelected3] = useState(null);

    function SwitchDisplay(props) {     
        
        setAriaSelected1('false')
        setAriaSelected2('false')
        setAriaSelected3('false')

        switch (project) {
            case 'tab-1':
                setAriaSelected1('true')
                return (
                    <article role="tabpanel" id="tab-1">
                    <a style={{color: "black"}} href="https://denise-springboot.herokuapp.com/" target="_blank" rel="noreferrer">
                        <h3>Spring Rehabilitation Center</h3>
                        <img style={{width: "100%"}} src={springprojectpic} alt="springboot project homepage"/>
                    </a>
                    <p>
                        Spring Rehabilitation Center is a web application for the hospital staff and the patients. Patients can make a booking with a therapist when they want. The admin user can manage the appoints and the information of patients and employees.
                    </p>
                    </article>
                );
                break;
            case 'tab-2':
                setAriaSelected2('true')
                return (
                    <article role="tabpanel" id="tab-2">
                        <a style={{color: "black"}} href="https://isthiskoreanwatermelon.netlify.app/" target="_blank" rel="noreferrer">
                            <h3>Machine Learning</h3>
                            <img style={{width: "100%"}} src={mlprojectpic} alt="korean watermelone recongnition site"/>
                        </a>
                        <p>
                            An image recognition website that can tell the fruit on the webcam is Korean watermelon or not. This project is made of Google Teachable Machine to recognize images.                        
                        </p>
                    </article>
                );
                break;
            case 'tab-3':
                setAriaSelected3('true')
                return (
                    <article role="tabpanel" id="tab-3">
                        <h3>Tab 3</h3>
                        <p>Lorem Ipsum Dolor Sit</p>
                    </article>
                );
                break;
            default:
                setAriaSelected1('true')
                return (
                    <article role="tabpanel" id="tab-1">
                    <h3>Tab Content</h3>
                    <p>
                        You create the tabs, you would use a <code>menu role="tablist"</code> element then for the tab titles you use a <code>button</code> with the <code>aria-controls</code> parameter set to match the relative <code>role="tabpanel"</code>'s element.
                    </p>
                    <p>
                    </p>
                    </article>
                );
                break;
        }
    }

    return (
        <div className="window" style={{width: '900px', height: '650px'}}>
        <div className="title-bar">
          <div className="title-bar-text">My Projects</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={ routeChange }/>
          </div>
        </div>
        <div className="window-body">
            <section className="tabs" style={{ maxWidth: '900px', maxHeight:'630px' }}>
                <menu role="tablist" aria-label="Sample Tabs">
                    <button role="tab" aria-selected= {ariaSelected1} aria-controls="tab-1" onClick={() => setProject('tab-1')}>Spring Rehabilitation Center</button>
                    <button role="tab" aria-selected= {ariaSelected2} aria-controls="tab-2" onClick={() => setProject('tab-2')}>Machine Learning</button>
                    <button role="tab" aria-selected= {ariaSelected3} aria-controls= "tab-3" onClick={() => setProject('tab-3')}>Job Searching</button>
                </menu>
                <SwitchDisplay value={ project } />
            </section>
        </div>
      </div>
    );
}

export function EmailMe(props) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/home')
    }

    return (
        <div className="window" style={{width: '400px', height:'650px'}}>
            <div className="title-bar">
                <div className="title-bar-text">Email Me</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" onClick = { routeChange } />
                </div>
            </div>
            <form className="gform" method="POST" action="https://script.google.com/macros/s/AKfycbxraU8ELTSaadN6YijAFcRrIfum6y28XAUTE_WBx5fZi3Inkld0o0uCeg/exec">
                <div className="window-body">
                    <div className="field-row-stacked" style={{width: '380px'}}>
                        <label htmlFor="text22"> Name</label>
                        <input name="name" id="text22" type="text" />
                    </div>
                    <div className="field-row-stacked" style={{width: '380px'}}>
                        <label htmlFor="text22"> Email</label>
                        <input name="email" id="text22" type="text" />
                    </div>
                    <div className="field-row-stacked" style={{width: '380px'}}>
                        <label htmlFor="text23">Subject</label>
                        <input name="subject" id="text23" type="text" />
                    </div>
                    <div className="field-row-stacked" style={{width: '380px'}}>
                        <label htmlFor="text24">Message</label>
                        <textarea name="message" id="text24" rows={32} defaultValue={""} />
                    </div>
                </div>
                <button type="submit" style={{marginRight: '10px', marginTop:'10px', float:'right'}}>Send</button>
            </form>

        </div>

    );
}

export function Myprofile (props) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/home')
    }

    return (
        <div className="window" style={{width: '400px'}}>
            <div className="title-bar">
            <div className="title-bar-text">Who am I?</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" onClick = { routeChange } />
            </div>
            </div>
            <div className="window-body">
                <h4 style={{textAlign: "center"}}>Hello world!</h4>
                <img style={{borderRadius: "50px", width: "50%", marginLeft: "auto", marginRight: "auto", display:"block"}} src={mypicture} alt="korean watermelone recongnition site"/>
                <p style={{fontSize: "small", textAlign: "center"}}> Hi! My name is <strong>Denise Lee</strong>. I'm a student in software development at Southern Alberta Institute of Technology. I'm a forwarding-looking person who has a responsibility and open to new ideas with various forms of input. I enjoy every step of the development from discussion and collaboration to coding.
                </p>
                <button style={{marginLeft: "auto", marginRight: "auto", display: "block"}}>
                   <a href="/home/emailme" style={{color: "black"}}>Contact me</a> 
                </button>
            </div>
      </div>
    );
}
