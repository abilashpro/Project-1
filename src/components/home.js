import { useEffect } from 'react'
import {IMAGES} from '../constants/imageconstants'
import initializeThemeSwitcher from '../script.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay,faGear,faGem,faIdCard,faPiggyBank, faPlane,faNewspaper,faStar,faArrowRight,faIdBadge, faPenFancy, faPhone, faEnvelopeOpen, faSun} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faLinkedin, faTelegram, faTwitter, faXbox } from '@fortawesome/free-brands-svg-icons'
function Home () {
    useEffect(() => {
      const themeSwitch = document.getElementById('theme-switch');
      const savedTheme = localStorage.getItem('theme');
      const isDarkTheme = savedTheme === 'dark';

      document.body.classList.toggle('dark-theme', isDarkTheme);

      if (!themeSwitch) {
        return undefined;
      }

      themeSwitch.checked = isDarkTheme;

      const changeTheme = () => {
        const nextTheme = themeSwitch.checked ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', nextTheme === 'dark');
        localStorage.setItem('theme', nextTheme);
      };

      themeSwitch.addEventListener('change', changeTheme);
      const cleanupColorSwitcher = initializeThemeSwitcher();

      return () => {
        themeSwitch.removeEventListener('change', changeTheme);
        cleanupColorSwitcher();
      };
    }, []);

    function such(){
        document.querySelector('.hamburger').classList.toggle('open')
        document.querySelector('.navigation').classList.toggle('active')
      }
    return (
      <div>
         <div class="color-switcher">
        <div class="switcher-btn" >
            <i><FontAwesomeIcon icon={faGear} /></i>
        </div>
        <h3>select color</h3>
        <div class="theme-buttons-container">
            <span class="theme-buttons" data-color="#dc143c" style={{background: "#dc143c"}}></span>
            <span class="theme-buttons" data-color="#66cdaa" style={{background:"#66cdaa"}}></span>
            <span class="theme-buttons" data-color="#c71585" style={{background:"#c71585 "}}></span>
            <span class="theme-buttons" data-color="#48d1cc" style={{background:"#48d1cc"}}></span>
            <span class="theme-buttons" data-color="#7b68ee" style={{background: "#7b68ee"}}></span>
            <span class="theme-buttons" data-color="#1e90ff" style={{background: "#1e90ff"}}></span>
            <span class="theme-buttons" data-color="#daa520" style={{background:"#daa520"}}></span>
            <span class="theme-buttons" data-color="#ffd700" style={{background:"#ffd700"}}></span>
            <span class="theme-buttons" data-color="#ffa07a" style={{background:"#ffa07a"}}></span>
        </div>
    </div>
    {/*nav-bar*/}
       <section>
        <div class="nav-bar">
            <div class="nav-box">
                <div class="logo-txt">DORSIN</div>
                <div class="nav-1">
                <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Features">Features</a></li>
        <li><a href="#Pricing">Pricing</a></li>
        <li><a href="#Team">Team</a></li>
        <li><a href="#Blog">Blog</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
                </div>
                <div class="nav-btn">
                <div class="nav-btn1">Try it Free
                </div>
                </div>
            </div>
        </div>
       </section>
       <div class="ham1">
      <div class="ham2">
      <div class="logo-txt1">DORSIN</div>
    <div class="navigation">
        <button class="hamburger" onClick={such}>
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
        </button>
        <nav>
            <ul>
            <li>Home</li>
        <li>Services</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Contact</li>
            </ul>
        </nav>
    </div>
    </div>
    </div>
       {/*First-page*/}
       <section id="home" class="bg-img">
        <img class="img1" width="100%" src={IMAGES.FIRSTIMGONE} alt=''/>
       <div class="first-page"></div>
        <div class="first-box">
      <div class="first-box1">
        <h1 class="first-txt">We help startups launch their products</h1>
        <p class="first-para">Etiam sed.Interdum consequat proin vestibulum class at.</p>
       <div class="first-btn"><FontAwesomeIcon icon={faCirclePlay} />
       </div>
      </div>
      </div>
      <div class="first-slide"></div>
      </section>
      {/*second-page*/}
      <div id="Services" class="second-page">
        <div class="second-pag2">
          <div class="second-box1">
            <div class="sec-txt1">OUR SERVICES</div>
            <div class="sec-line1"></div>
            <p class="sec-para">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
          </div>
          <div class="second-box2">
            <div class="sec-con1">
              <div class="sec-font1">
              <div class="sec-bag1">
              <div class="sec-icon1"><FontAwesomeIcon icon={faGem} /></div>
              </div></div>
              <div class="sec-tit1">Digital Design</div>
            <p class="sec-para2">Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
            <div class="sec-con2">
              <div class="sec-font2">
              <div class="sec-bag2">
              <div class="sec-icon2"><FontAwesomeIcon icon={faIdCard} /></div>
              </div></div>
              <div class="sec-tit2">Unlimited Colors</div>
            <p class="sec-para3">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
            <div class="sec-con3">
              <div class="sec-font3">
              <div class="sec-bag3">
              <div class="sec-icon3"><FontAwesomeIcon icon={faPiggyBank} /></div>
              </div></div>
              <div class="sec-tit3">Strategy Solutions</div>
            <p class="sec-para4">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>
          </div>
          <div class="second-box3">
            <div class="sec-con4">
              <div class="sec-font12">
              <div class="sec-bag12">
              <div class="sec-icon1"><FontAwesomeIcon icon={faStar} /></div>
              </div></div>
              <div class="sec-tit12">Awesome Support</div>
            <p class="sec-para22">It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
            </div>
            <div class="sec-con5">
              <div class="sec-font23">
              <div class="sec-bag23">
              <div class="sec-icon23"><FontAwesomeIcon icon={faNewspaper} /></div>
              </div></div>
              <div class="sec-tit23">Truly Multipurpose</div>
            <p class="sec-para33">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
            <div class="sec-con6">
              <div class="sec-font34">
              <div class="sec-bag34">
              <div class="sec-icon34"><FontAwesomeIcon icon={faPlane} /></div>
              </div></div>
              <div class="sec-tit34">Easy to customize</div>
            <p class="sec-para44">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
            </div>
          </div>

        </div>
      </div>
      {/*third-page*/}
      <div id='Features' class="third-page">
        <div class="third-page1">
          <div class="third-box1">
            <div class="third-txt1">
              A digital web design studio creating <br></br>modern & engaging online <br></br>experiences
            </div>
            <div class="third-para1">
            Separated they live in Bookmarksgrove right at the coast of the <br></br>Semantics, a large language ocean. A small river named Duden<br></br> flows by their place and supplies it with the necessary regelialia.
            </div>
            <div class="third-ul">
              <ul>
                <li>We put a lot of effort in design.</li>
                <li>The most important ingredient of successful website.</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                <li>Submit Your Organization.</li>
              </ul>
            </div>
            <div class="third-btn">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        <div class="third-box2">
          <img width="100%" src={IMAGES.THIRDIMG} alt=''></img>
        </div>
        </div>
      </div>
      {/*fourth-page*/}
      <div class="fourth-page">
        <img width="500" height="400px" class="fourth-img" src={IMAGES.FOURTHIMG} alt=''></img>
          <div class="fourth-bg"></div>
          <div class="fourth-page1">
            <div class="fourth-tit1">
            Build your dream website today
            </div>
            <p class="fourth-para">But nothing the copy said could convince her and so it didn’t take long until a few <br></br>insidious Copy Writers ambushed her.</p>
        <div class="fourth-btn">
        <div class="fourth-btn1">view plan & pricing</div>
        </div>
        </div>
      </div>
      {/*fiveth-page*/}
      <div id="Pricing" class="fiveth-page">
        <div class="fiveth-pag2">
          <div class="fifth-box1">
            <div class="fifth-txt1">OUR PRICING</div>
            <div class="fifth-line1"></div>
            <p class="fifth-para">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out<br></br> with amazing options.</p>
          </div>
          <div class="fifth-box2">
            <div class="fifth-con1">
              <div class="fifth-txt2">ECONOMY</div>
              <div class="fifth-doller">$9.90</div>
              <div class="fifth-bills">BILLLING PER MONTH</div>
              <div class="fifth-line2"></div>
              <div class="fifth-sm1">
                <div class="fifth-sm-txt1">Bandwidth: 
                <b class="fifth-sm-pa"> 1GB</b>
                </div>
                <div class="fifth-sm-txt1">Onlinespace:  
                <b class="fifth-sm-pa"> 50MB</b>
                </div>
                <div class="fifth-sm-txt1">Support:
                <b class="fifth-sm-pa"> No</b>
                </div>
                <div class="fifth-sm-txt1">
                <b class="fifth-sm-pa">1 </b>Domain
                </div>
                <div class="fifth-sm-txt1">
                <b class="fifth-sm-pa">No </b>Hidden Fees
                </div>
              </div>
              <div class="fifth-btn1">Join Now</div>
             </div>
             <div class="fifth-con2">
              <div class="fifth-txt3">DELUXE</div>
              <div class="fifth-doller1">$19.90</div>
              <div class="fifth-bills1">BILLLING PER MONTH</div>
              <div class="fifth-line3"></div>
              <div class="fifth-sm2">
                <div class="fifth-sm-txt2">Bandwidth: 
                <b class="fifth-sm-pa1"> 10GB</b>
                </div>
                <div class="fifth-sm-txt2">Onlinespace:  
                <b class="fifth-sm-pa1"> 500MB</b>
                </div>
                <div class="fifth-sm-txt2">Support:
                <b class="fifth-sm-pa1"> Yes</b>
                </div>
                <div class="fifth-sm-txt2">
                <b class="fifth-sm-pa1">1 </b>Domain
                </div>
                <div class="fifth-sm-txt2">
                <b class="fifth-sm-pa1">No </b>Hidden Fees
                </div>
              </div>
              <div class="fifth-btn2">Join Now</div>
             </div>
             <div class="fifth-con3">
              <div class="fifth-txt4">ULTIMATE</div>
              <div class="fifth-doller2">$29.90</div>
              <div class="fifth-bills2">BILLLING PER MONTH</div>
              <div class="fifth-line4"></div>
              <div class="fifth-sm3">
                <div class="fifth-sm-txt3">Bandwidth: 
                <b class="fifth-sm-pa2"> 100GB</b>
                </div>
                <div class="fifth-sm-txt3">Onlinespace:  
                <b class="fifth-sm-pa2"> 2GB</b>
                </div>
                <div class="fifth-sm-txt3">Support:
                <b class="fifth-sm-pa2"> Yes</b>
                </div>
                <div class="fifth-sm-txt3">
                <b class="fifth-sm-pa2">Unlimited </b>Domain
                </div>
                <div class="fifth-sm-txt3">
                <b class="fifth-sm-pa2">No </b>Hidden Fees
                </div>
              </div>
              <div class="fifth-btn3">Join Now</div>
             </div>
          </div>

        </div>
      </div>
      {/*sixth-page*/}
      <div id='Team' class="sixth-page">
        <div class="sixth-page1">
        <div class="sixth-box1">
            <div class="sixth-txt1">BEHIND THE PEOPLE</div>
            <div class="sixth-line1"></div>
            <p class="sixth-para">It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div class="sixth-box2">
            <div class="sixth-con1">
              <img class="sixth-img1" src={IMAGES.SIXTHIMGONE} alt=''></img>
              <div class="sixth-text1">Frank Johnson</div>
              <p class="sixth-p1">CEO</p>
              <div class="sixth-line2"></div>

            </div>
            <div class="sixth-con2">
              <img class="sixth-img2" src={IMAGES.SIXTHIMGTwo} alt=''></img>
              <div class="sixth-text2">Elaine Stclair</div>
              <p class="sixth-p2">DESIGNER</p>
              <div class="sixth-line3"></div>

            </div>
            <div class="sixth-con3">
              <img class="sixth-img3" src={IMAGES.SIXTHIMGThree} alt=''></img>
              <div class="sixth-text3">Elaine Stclair</div>
              <p class="sixth-p3">DESIGNER</p>
              <div class="sixth-line4"></div>

            </div>
            <div class="sixth-con4">
              <img class="sixth-img4" src={IMAGES.SIXTHIMGFour} alt=''></img>
              <div class="sixth-text4">Elaine Stclair</div>
              <p class="sixth-p4">DESIGNER</p>
              <div class="sixth-line5"></div>

            </div>
          </div>
        </div>
      </div>
      {/*seven-page*/}
      <div class="seventh-page">
        <div class="seventh-page1">
        <div class="seventh-box1">
            <div class="seventh-txt1">WORK PROCESS</div>
            <div class="seventh-line1"></div>
            <p class="seventh-para">In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web<br></br> copy before the Proin vitae ipsum vel ex finibus semper design starts.</p>
          </div>
          <div class="seventh-box2">
            <div class="seventh-con1">
              <div class="seventh-cn1">
              <div class="seventh-font1">
              <FontAwesomeIcon icon={faPenFancy} />
              </div>
              <div class="seventh-text1">Tell us what you need</div>
              <div class="seventh-para1">The Big Oxmox advised her not to do so.</div>
              </div>
            </div>
            <div class="seventh-con2">
              <div class="seventh-cn2">
              <div class="seventh-font2">
              <FontAwesomeIcon icon={faIdCard} />
              </div>
              <div class="seventh-text2">Get free quotes</div>
              <div class="seventh-para2">Little Blind Text didn’t listen.</div>
              </div>
            </div>
            <div class="seventh-con3">
              <div class="seventh-cn3">
              <div class="seventh-font3">
              <FontAwesomeIcon icon={faIdBadge} />
              </div>
              <div class="seventh-text3">Deliver high quality product</div>
              <div class="seventh-para3">When she reached the first hills.</div>
              </div>
            </div>
          </div>
          <div class="seventh-box3">
            <dic class="seventh-btn">Get Started <FontAwesomeIcon icon={faArrowRight}/></dic>
          </div>
        </div>
      </div>
      {/*eighth-page8*/}
      <div class="eighth-page">
        <div class="eighth-page1">
        <div class="eighth-box1">
            <div class="eighth-txt1">WHAT THEY'VE SAID</div>
            <div class="eighth-line1"></div>
            <p class="eighth-para">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli.</p>
          </div>
          <div class="eighth-box2">
            <div class="eighth-con1">
           <div class="eighth-cn1">
            <img class="eighth-img1" src={IMAGES.EIGHTHIMGONE}alt=''></img>
            <div class="eighth-cb1">
            <div class="eighth-pa-1">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.” </div>
           </div>
           <div class="eighth-text2">Ruben Reed -
           <b class="eighth-na1"> Charleston</b>
           </div>
           </div>
            </div>
            <div class="eighth-con2">
           <div class="eighth-cn2">
            <img class="eighth-img2" src={IMAGES.EIGHTHIMGTWO}alt=''></img>
            <div class="eighth-cb2">
            <div class="eighth-pa-2">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.” </div>
           </div>
           <div class="eighth-text3">Michael P. Howlett -
           <b class="eighth-na2"> Worcester</b>
           </div>
           </div>
            </div>
            <div class="eighth-con3">
           <div class="eighth-cn3">
            <img class="eighth-img3" src={IMAGES.EIGHTHIMGTHREE}alt=''></img>
            <div class="eighth-cb3">
            <div class="eighth-pa-3">“I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.”  </div>
           </div>
           <div class="eighth-text4">Theresa D. Sinclair -
           <b class="eighth-na3"> Lynchburg</b>
           </div>
           </div>
            </div>
          </div>
        </div>
      </div>
      {/*ninth-page*/}
      <div class="ninth-page">
        <img width="500" height="400px" class="ninth-img" src={IMAGES.NINTHIMGONE} alt=''></img>
          <div class="ninth-bg"></div>
          <div class="ninth-page1">
            <div class="ninth-tit1">
            Let's Get Started
            </div>
            <div class="ninth-line1"></div>
            <p class="ninth-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div class="ninth-btn">
        <div class="ninth-btn1">Get Started <FontAwesomeIcon icon={faArrowRight}/></div>
        </div>
        </div>
      </div>
      {/*tenth-page*/}
      <div id='Blog' class="tenth-page">
        <div class="tenth-page1">
        <div class="tenth-box1">
            <div class="tenth-txt1">BLOG</div>
            <div class="tenth-line1"></div>
            <p class="tenth-para">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</p>
          </div>
          <div class="tenth-box2">
            <div class="tenth-con1">
              <img class="tenth-img1" src={IMAGES.TENTHIMGONE}alt=''></img>
              <div class="tenth-cn1">
                <div class="tenth-tit1">
                UI & UX Design
                </div>
                <div class="tenth-pa1">Doing a cross country road trip </div>
                <div class="tenth-para2">She packed her seven versalia, put her initial into the belt and made herself on the way..</div>
                <div class="tenth-btn1">Read More <FontAwesomeIcon icon={faArrowRight}/></div>
              </div>
            </div>
            <div class="tenth-con2">
              <img class="tenth-img2" src={IMAGES.TENTHIMGTWO}alt=''></img>
              <div class="tenth-cn2">
                <div class="tenth-tit2">
                Digital Marketing
                </div>
                <div class="tenth-pa2">New exhibition at our Museum </div>
                <div class="tenth-para3">Pityful a rethoric question ran over her cheek, then she continued her way.</div>
                <div class="tenth-btn2">Read More <FontAwesomeIcon icon={faArrowRight}/></div>
              </div>
            </div>
            <div class="tenth-con3">
              <img class="tenth-img3" src={IMAGES.TENTHIMGTHREE}alt=''></img>
              <div class="tenth-cn3">
                <div class="tenth-tit3">
                Travelling
                </div>
                <div class="tenth-pa3">Why are so many people..</div>
                <div class="tenth-para4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
                <div class="tenth-btn3">Read More <FontAwesomeIcon icon={faArrowRight}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*eleventh-page*/}
      <div id='Contact' class="eleventh-page">
        <div class="eleventh-page1">
        <div class="eleventh-box1">
            <div class="eleventh-txt1">Get In Touch</div>
            <div class="eleventh-line1"></div>
            <p class="eleventh-para">We thrive when coming up with innovative ideas but also understand that a smart concept should be<br></br> supported with faucibus sapien odio measurable results.</p>
          </div>
          <div class="eleventh-box2">
            <div class="eleth-con1">
              <div class="eleth-cn1">
                <div class="eleth-text2">Office Address 1:</div>
                <div class="eleth-para1">4461 Cedar Street Moro, AR 72368</div>
              </div>
              <div class="eleth-cn2">
                <div class="eleth-text3">Office Address 1:</div>
                <div class="eleth-para2">2467 Swick Hill Street<br></br>New Orleans, LA 70171</div>
              </div>
              <div class="eleth-cn3">
                <div class="eleth-text4">Working Hours:</div>
                <div class="eleth-para3">9:00AM To 6:00PM</div>
              </div>
            </div>
            <div class="eleth-con2">
              <div class="eleth-sub1">
                <div class="eleth-nc1">
                  <input id='name' class="eleth-name" type='text' placeholder='Your name*'></input>
                </div>
                <div class="eleth-nc2">
                  <input id='email' class="eleth-email" type='email' placeholder='Your email*'></input>
                  </div>
              </div>
              <div class="eleth-sub2">
                <div class="eleth-nc3">
                  <input id='subject' class="eleth-subject" type='text' placeholder='Your Subject..'></input>
                </div>
              </div>
              <div class="eleth-sub3">
                <div class="eleth-nc4">
                  <textarea id='message' class="eleth-message" type='text' placeholder='Your Message...'></textarea>
                </div>
              </div>
              <div class="eleth-btn">
                <div class="eleth-btn1">
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*twevlth-page*/}
      <div class="twelth-page">
        <div class="twelth-page1">
         <div class="twelth-con">
          <div class="twelth-box1">
            <ul class="twelth-cn1">
              <li class="twelth-fl1">
                <a class="twelth-an1" href='https://www.facebook.com/' >
                <i class="twelth-font1"><FontAwesomeIcon icon={faFacebook}/></i></a>
              </li>
              <li class="twelth-fl2">
                <a class="twelth-an2" href='https://www.facebook.com/' >
                <i class="twelth-font2"><FontAwesomeIcon icon={faTwitter}/></i></a>
              </li>
              <li class="twelth-fl3">
                <a class="twelth-an3" href='https://www.facebook.com/' >
                <i class="twelth-font3"><FontAwesomeIcon icon={faLinkedin}/></i></a>
              </li>
              <li class="twelth-fl4">
                <a class="twelth-an4" href='https://www.facebook.com/' >
                <i class="twelth-font4"><FontAwesomeIcon icon={faGoogle}/></i></a>
              </li>
              <li class="twelth-fl5">
                <a class="twelth-an5" href='https://www.facebook.com/' >
                <i class="twelth-font5"><FontAwesomeIcon icon={faXbox}/></i></a>
              </li>
              
            </ul>
          </div>
          <div class="twelth-box2">
            <div class="twelth-con2">
              <i class="twelth-no1"><FontAwesomeIcon icon={faPhone}/></i>
              <i class="twelth-num1"> +91 123 4556 789</i>
            </div>
          </div>
          <div class="twelth-box3">
            <div class="twelth-con3">
              <i class="twelth-no2"><FontAwesomeIcon icon={faEnvelopeOpen}/></i>
              <i class="twelth-num2"> +91 123 4556 789</i>
            </div>
          </div>
         </div>
        </div>
      </div>
      {/*thirteen-page*/}
      <div class="thirteen-page">
        <div class="thirteen-page1">
          <div class="thirteen-box1">
            <div class="thirteen-con1">
              <div class="thirteen-tit1">
              DORSIN
              </div>
              <div class="thirteen-para1">
                <ul class="thirteen-ul1">
                  <li>Home</li>
                  <li>About us</li>
                  <li>careers</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div class="thirteen-con2">
              <div class="thirteen-tit2">
              Information
              </div>
              <div class="thirteen-para2">
                <ul class="thirteen-ul2">
                  <li>Terms & Condition</li>
                  <li>About us</li>
                  <li>Jobs</li>
                  <li>Bookmarks</li>
                </ul>
              </div>
            </div>
            <div class="thirteen-con3">
              <div class="thirteen-tit3">
              Support
              </div>
              <div class="thirteen-para3">
                <ul class="thirteen-ul3">
                  <li>FAQ</li>
                  <li>Contact</li>
                  <li>Disscusion</li>
                </ul>
              </div>
            </div>
            <div class="thirteen-con4">
              <div class="thirteen-tit4">
              Subscribe
              </div>
              <div class="thirteen-para4">
                <ul class="thirteen-ul4">
                  <li>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</li>
                </ul>
              </div>
              <div class="thirteen-nc2">
                  <input id='email' class="thirteen-email" type='email' placeholder='Email'></input>
                  <a class="thirteen-font1" href='email'><FontAwesomeIcon icon={faTelegram}/></a>
                  </div>
            </div>
          </div>
        </div>
      </div>
      {/*fourteen-page*/}
      <div class="fourteen-page">
        <div class="fourteen-page1">
          <div class="fourteen-box1">
            <div class="fourteen-txt1">
            2024 © Dorsin - Themesbrand
            </div>
            <img class="fourteen-img1" src={IMAGES.FOURTEENIMG} alt=''></img>
          </div>
        </div>
      </div>
      <div class="container">
      <div class="container1">
        <input type="checkbox" id="theme-switch"></input>
        <label class="sun1" for="theme-switch"><FontAwesomeIcon icon={faSun}/></label>
    </div>
    </div>
      </div>
    );
  }
  
  export default Home;
  