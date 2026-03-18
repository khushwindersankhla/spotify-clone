import './Silder.css'
import dillagana from "../../image/Dil.jpg"
import music from "../../image/two.jpg"
import Maan from "../../image/Maan.jpg"
import Dop from "../../image/Dop.jpg"
import Pritam from "../../image/Pritam.jpg"
import Rahamn from "../../image/Rahamn.jpg"
import Arijit from "../../image/Arijit.jpg"
import Sachin from "../../image/Sachin.jpg"
import Sanam from "../../image/sanam.jpg"
import Finding from "../../image/Finding.jpg"
import Young from "../../image/Young.jpg"
import Raanjhan from "../../image/Raanjhan.jpg"
import Singh from "../../image/singh.jpg"
import Oneone from "../../image/one-two.jpg"
import onetwo from "../../image/Shreya.jpg"
import onethree from "../../image/Alka.jpg"

import { IoIosArrowBack } from "react-icons/io";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import { LuBlend } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FaOptinMonster, FaPlay } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react'




// function Silder() {
//     let index = 0;
//     let totalimages = 8;
//     let width = 135;
//  let slidermusic = document.ge
// function prev(){
//     if(index > 0){
//         index --;
//        slidermusic.style.transform =""

//     }

// }

// let one = document.getElementById("create")
// let two = document.getElementById("create-box")
// let three = document.getElementById("plus")


function Silder() {

    const [showBox, setShowBox] = useState(false);
    const [box, setBox] = useState(false);

    function hideshow() {
        setShowBox(!showBox);
    }
    function khus() {
        setBox(prev => !prev);
    }



    return (
        <>
            <div className="silder-man">
                <div className="silder-one">
                    <div className="library">
                        <h2 id='your'>Your Library</h2>
                        <div id="create" onClick={hideshow} style={{ cursor: "pointer" }}>
                            <FaPlus id='plus' style={{
                                marginLeft: "10", marginTop: "10", position: "absolute", transform: showBox ? "rotate(60deg)" : "rotate(0deg)",
                                transition: "0.3s"
                            }} />
                            <h4 id='cre'>create</h4></div>
                        {showBox && (<div id="create-box">
                            <div className="create-one">
                                <div className="khus"><BsMusicNoteBeamed id='beamed' /></div>
                                <h3 id='list'>Playlist</h3>
                                <p id='episodes'>Create a playlist with songs or episodes</p>
                            </div>
                            <div className="create-one">
                                <div className="khus"><LuBlend id='beamed' /></div>
                                <h3 id='list'>Blend</h3>
                                <p id='episodes'>Combine your frinds's tastes into</p>
                            </div>
                            <div className="create-one">
                                <div className="khus"><FaRegFolder id='beamed' /></div>
                                <h3 id='list'>Folder</h3>
                                <p id='episodes'>organize your playlist</p>
                            </div>
                        </div>)}
                    </div>
                    <div className="first-playlist">
                        <h2 id='first-playlist'>Create your first playlist</h2>
                        <p id='help'>It's easy, we'll help you</p>
                        <div className="btn" onClick={khus} style={{ cursor: "pointer" }}><button><b>Create playlit</b></button></div>
                        {box && (<div className="btn-box">
                            <h3 id='james'>Create a playlist</h3>
                            <p id='share'>Log in to create and share playlists.</p>
                            <div className="now">
                                <div id="not"><h3>Not now</h3></div>
                                <div className="log"><button><b>Log in</b></button></div>
                            </div>
                        </div>)}

                        <div className="find">
                            <h3 id='some'>Let's Find some podcasts to Follow </h3>
                            <p id='new'>We'll keep you updated on new episodes</p>
                            <button id='butt'><b>Browse podcasts</b></button>
                        </div>
                        <div className="legal-footer">
                            <p id='cookes'> Legal  saftey&Privacy  center   Privacy Policy   Cookies</p>
                            <p id='ads'>About Ads    Accessibility</p>
                            <p id='coo'>Cookies</p>
                            <button id='english'><b>English</b></button>
                        </div>
                    </div>

                </div>
                <div className="silder-two">
                    <div className="Silder-text"><h2 id='trading'>Trading Songs</h2></div>
                    <div className="silder-music" id='slider-music'>
                        <div className="pre"><IoIosArrowBack style={{ fontSize: "25", margin: "0.4vh" }} />
                        </div>
                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} />
                        </div><img src={dillagana} alt="" /><p id='dil'><b>Dil Lagana Mana Tha</b></p><p id='krish'>krish Modal,kishoreDevv sadaana...</p></div>
                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={music} alt="" /><p id='dil'><b>Wajah Bewajah</b></p><p id='krish'>Vishal Mishra,Shreyas Puranik,kumar</p></div>
                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Maan} alt="" /><p id='dil'><b>Maan Hawa(From"Assi")</b></p><p id='krish'>Rochak Kholi,Mohit </p></div>
                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Dop} alt="" /><p id='dil'><b>Dopamine</b></p><p id='krish'>Guru Randhawa,Gurjit Gill,Lavish Dhiman</p></div>

                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Maan} alt="" /><p id='dil'><b>Maan Hawa(From"Assi")</b></p><p id='krish'>Rochak Kholi,Mohit </p></div>
                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Dop} alt="" /><p id='dil'><b>Dopamine</b></p><p id='krish'>Guru Randhawa,Gurjit Gill,Lavish Dhiman</p></div>

                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Maan} alt="" /><p id='dil'><b>Maan Hawa(From"Assi")</b></p><p id='krish'>Rochak Kholi,Mohit </p></div>
                        <div className="silder-music-one"><div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Dop} alt="" /><p id='dil'><b>Dopamine</b></p><p id='krish'>Guru Randhawa,Gurjit Gill,Lavish Dhiman</p></div>
                        <div className="back"><IoIosArrowForward style={{ fontSize: "25", margin: "0.7vh" }} /></div>
                    </div>
                    <div className='popular'><h2>Popular artists</h2><p id='show'><b>Show all </b></p></div>
                    <div className='singer'>
                        <div className="singerlist"><div className="play"><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Pritam} alt="" /><p id='pree'><b>Pritam</b></p><p id='artist'>Artist</p></div>
                        <div className="singerlist"><div className="play"><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Rahamn} alt="" /><p id='pree'><b>Pritam</b></p><p id='artist'>Artist</p></div>
                        <div className="singerlist"><div className="play"><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Arijit} alt="" /><p id='pree'><b>Pritam</b></p><p id='artist'>Artist</p></div>
                        <div className="singerlist"><div className="play"><FaPlay style={{ fontSize: "25", margin: "19" }} /></div><img src={Sachin} alt="" /><p id='pree'><b>Pritam</b></p><p id='artist'>Artist</p></div>
                    </div>

                    <div className="popular-music"><h2>Popular albums and singles</h2></div>
                    <div className="popular-music-list">
                        <div className="music-list-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={Sanam} alt="" />
                            <p id='sanam'><b>Sanam Teri kasam</b></p>
                            <p id='Himesh'>Himesh Reshammiys,<br />Sameer Anjaan,</p>
                        </div>
                        <div className="music-list-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={Finding} alt="" />
                            <p id='sanam'><b>Finding</b></p>
                            <p id='Himesh'>Kushagra,Bharath,<br />Saaheal</p>
                        </div>
                        <div className="music-list-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={Young} alt="" />
                            <p id='sanam'><b>Yound G.O.A.T</b></p>
                            <p id='Himesh'>Cheema Y, Gur Sidhu</p>
                        </div>
                        <div className="music-list-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={Raanjhan} alt="" />
                            <p id='sanam'><b>Raanjhan </b></p>
                            <p id='Himesh'>sacht-Parampara,<br />Parampara Tandon..</p>
                        </div>

                    </div>


                    <div className="radio"><h2 id='radio'>Popular radio</h2>
                        <div className="radio-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={Singh} alt="" />
                            <p id='With'>With Sachin-Jigar,<br />Jeet Gannguli, Prita...</p>
                        </div>
                        <div className="radio-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={Oneone} alt="" />
                            <p id='With'>With Pritam,Ankit <br />Tiwari,Shaarib Toshi..</p>
                        </div>

                        <div className="radio-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={onetwo} alt="" />
                            <p id='With'>With A.R.Rahman,Atif <br />aslam, Ariit Singh a.. </p>
                        </div>
                        <div className="radio-one">
                            <div id='box'><FaPlay style={{ fontSize: "25", margin: "19" }} /></div>
                            <img src={onethree} alt="" />
                            <p id='With'>With Vinod Rathod, <br /> Kumar sanu, Jatin..</p>
                        </div>

                    </div>
                    <hr />
                    <div className="footer">
                        <div className="footer-one">
                            <h4 id='com'>Company</h4>
                            <p id='about'>About</p>
                            <p id='about'>Jobs</p>
                            <p id='about'>For the Record</p>

                        </div>
                        <div className="footer-one">
                            <h4 id='com'>Communities</h4>
                            <p id='about'>For Artists</p>
                            <p id='about'>Developers</p>
                            <p id='about'>Advertising</p>
                            <p id='about'>Investors</p>
                            <p id='about'>Vendors</p>
                        </div>
                        <div className="footer-one">
                            <h4 id='com'>Useful Links</h4>
                            <p id='about'>Suport</p>
                            <p id='about'>Free Mobile App</p>
                            <p id='about'>Popular by <br />country</p>
                            <p id='about'>Import your<br />Music</p>


                        </div>
                        <div className="footer-one">
                            <h4 id='com'>Spotify Plans</h4>
                            <p id='about'>Premium Lite</p>
                            <p id='about'>Premium<br />Standard</p>
                            <p id='about'>Premium<br />Platinum</p>
                            <p id='about'>Spotify free</p>
                        </div>
                        <div className="footer-two">
                            <div className="footer-icon"><IoLogoInstagram style={{ fontSize: "22", margin: "6.7" }} /></div>
                            <div className="footer-icon"><FaTwitter style={{ fontSize: "22", margin: "6.7" }} /></div>
                            <div className="footer-icon"><FaFacebook style={{ fontSize: "22", margin: "6.7" }} /></div>
                        </div>
                    </div><hr />
                    <div className="footer-three">© 2026 Spotify AB</div>
                </div>


            </div>


        </>
    )
}
export default Silder;