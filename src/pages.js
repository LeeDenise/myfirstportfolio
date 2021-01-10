import React, { useState } from "react"
import {useNavigate, Outlet} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


/**
 * TODO add account login page to show my name
 * TODO add function to move window 
 * TODO add loading sound
 */
export function Loading() {
    return (
        <>
        <Jumbotron id="loading">


        </Jumbotron>
        </>
    );
}

export function Signup() {
    return (
        <>
        <Container id="signup">
            
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
                    href="/home"
                    title="Shows the disk drives and hardware connected to this computer."
                    ><span></span>Denise's Computer</a
                    >
                </li>
                <li id="my_documents">
                    <a
                    href="/home/myprojects"
                    title="Contains letters, reports, and other documents and files."
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
                <li id="recycle_bin">
                    <a href="#" title="Contains the files and folders you have deleted."
                    ><span></span>Recycle Bin</a
                    >
                </li>
                <li id="terminal">
                    <a href="/home/terminal" title="Contains the files and folders you have deleted."
                    ><span></span>Terminal</a
                    >
                </li>
                <li id="github">
                    <a href="https://github.com/LeeDenise" target="_blank" title="My GitHub"
                    ><span></span>GitHub</a
                    >
                </li>
                <li id="linkedin">
                    <a href="https://www.linkedin.com/in/dohui-denise-lee/" target="_blank" title="My Linked In"
                    ><span></span>Linked In</a
                    >
                </li>
            </ul>
            </div> {/* end of main_icons_container */}
            <Row id="desktop">
                <Outlet />
            </Row>
            {/* <Row id="footer" className="title-bar">
                <div id= "startbuttoncontainer" className="title-bar-controls">
                    <button id="startbutton"><img src="./images/start_button.png" /></button>
                </div>
            </Row> */}
            <Row id="footer" className="taskbar">
                {/* <div id="start"> */}
                    <h2 id="startbutton">
                        <a href="#" title="Click here to begin"
                            ><span id="startbuttongraphic"></span></a
                        >
                    </h2>
                {/* </div> */}

                {/* <ul id="quicklaunch">
                    <li id="quick_desktop">
                        <a href="#" title="Show Desktop"><span></span>Show Desktop</a>
                    </li>
                    <li id="quick_firefox">
                        <a href="http://www.mozilla.org/products/firefox/" title="Firefox"
                        ><span></span>Firefox</a
                        >
                    </li>
                </ul> */}
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

export function Terminal(props) {
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
}

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
                    <article role="tabpanel" hiddenId="tab-1">
                    <h3>Tab Content</h3>
                    <p>
                        You create the tabs, you would use a <code>menu role="tablist"</code> element then for the tab titles you use a <code>button</code> with the <code>aria-controls</code> parameter set to match the relative <code>role="tabpanel"</code>'s element.
                    </p>
                    <p>
                        Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role" target="_blank">MDN Web docs - ARIA: tab role</a>
                    </p>
                    </article>
                );
                break;
            case 'tab-2':
                setAriaSelected2('true')
                return (
                    <article role="tabpanel" hiddenId="tab-2">
                        <h3>More...</h3>
                        <p>This tab contains a GroupBox</p>
                    </article>
                );
                break;
            case 'tab-3':
                setAriaSelected3('true')
                return (
                    <article role="tabpanel" hiddenId="tab-3">
                        <h3>Tab 3</h3>
                        <p>Lorem Ipsum Dolor Sit</p>
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
                    <button role="tab" aria-selected= {ariaSelected1} aria-controls="tab-1" onClick={() => setProject('tab-1')}>Tab A</button>
                    <button role="tab" aria-selected= {ariaSelected2} aria-controls="tab-2" onClick={() => setProject('tab-2')}>Tab B</button>
                    <button role="tab" aria-selected= {ariaSelected3} aria-controls= "tab-3" onClick={() => setProject('tab-3')}>Tab C</button>
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
            <div className="window-body">
                <div className="field-row-stacked" style={{width: '380px'}}>
                    <label htmlFor="text22"> Name</label>
                    <input id="text22" type="text" />
                </div>
                <div className="field-row-stacked" style={{width: '380px'}}>
                    <label htmlFor="text22"> Email</label>
                    <input id="text22" type="text" />
                </div>
                <div className="field-row-stacked" style={{width: '380px'}}>
                    <label htmlFor="text23">Subject</label>
                    <input id="text23" type="text" />
                </div>
                <div className="field-row-stacked" style={{width: '380px'}}>
                    <label htmlFor="text24">Additional notes</label>
                    <textarea id="text24" rows={32} defaultValue={""} />
                </div>
            </div>
            <button style={{marginRight: '10px', marginTop:'10px', float:'right'}}>Send</button>
        </div>
    );
}
