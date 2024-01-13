import React from 'react'
import './Main.css'
import Choices from './Choices'

export default function Main() {
  return (
    <section>
        <div className="topBody">
            <div className="topBodymain">
                <div className="dreamVacationbox">
                    <div className="dreamImage">
                        <img src="./assets/main.jpg" alt="" />
                    </div>
                    <div className="textDream">
                        <div className="dreamTitle">
                            <h1>Enjoy Your Dream Vacation</h1>
                        </div>
                        <div className="dreamDiscription">
                            <p>Serenity meets the sea at pristine beaches, where golden sands meet azure waves. Enjoy the rhythmic symphony of crashing waves and relish the tranquil beauty of beach paradises worldwide.</p>
                        </div>
                        <div className="linkDream">
                            <a href="/">Workwick Hotesl & Resort</a>
                        </div>
                    </div>
                </div>
                
                {/* first body */}
                <div className="dropBoxmain">
                    <div className="dropBox">
                        <div className="facilities">
                            <div className="facilitiesTitle">
                                <div className="facTitle">
                                    <h3>Facilities</h3>
                                </div>
                                <div className="seemore">
                                    <a href="/">See More</a>
                                </div>
                            </div>
                            <div className="facilitiesIcons">
                                <div className="icons facicon swimming">
                                    <img src="./assets/swim.png" alt="swimming icon" />
                                    <h4>Swimming</h4>
                                </div>
                                <div className="icons facicon wifi">
                                    <img src="./assets/wifi.png" alt="wifi icon" />
                                    <h4>Wi-Fi</h4>
                                </div>
                                <div className="icons facicon ac">
                                        <img src="./assets/ac.png" alt="ac icon" />
                                    <h4>Ac</h4>
                                </div>
                                <div className="icons facicon dinner">
                                <img src="./assets/dinner.png" alt="dinner icon" />
                                    <h4>Dinner</h4>
                                </div>
                            </div>
                        </div>
                        <div className="hotels">
                            <div className="hotelsTitle">
                                <h4>Hotels For You</h4>
                                <p>5 Days 6 Nights</p>
                            </div>
                            <div className="hotelPrice">
                                <div className="priceIcon icons">
                                    <img src="./assets/check.png" alt="" />
                                </div>
                                <div className="price">
                                    <p>USD $506.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="resultsbox">
                            <div className="resultHead">
                                <div className="searchInput">
                                    <input type="search" placeholder='150 Requests' name="" id="" />
                                </div>
                                <div className="searchIcon icons">
                                    <img src="./assets/search.png" alt="" />
                                </div>
                            </div>
                            <div className="hotelIcons">
                                <div className="hotelImages">
                                    <img src="./assets/hol1.jpg" alt="" />
                                </div>
                                <div className="hotelImages">
                                    <img src="./assets/hol2.jpg" alt="" />
                                </div>
                                <div className="hotelImages">
                                    <img src="./assets/hol3.jpg" alt="" />
                                </div>
                                <div className="hotelImages">
                                    <img src="./assets/hol4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
                {/* second body */}
        <div className="secondBody">
            <div className="secondTitle">
                <h1>Entire city of choice</h1>
            </div>
            <div className="choicesBox">
                <Choices image={'./assets/hol4.jpg'} title={'MIRACLE RESORT'} id={"987732"} resort={"Turkey Resort"} price={'$400.00'} />
                <Choices image={'./assets/hol2.jpg'} title={'NAGARKOT RESORT'} id={"981232"} resort={"Larabal Resort"} price={'$900.00'}/>
                <Choices image={'./assets/hol3.jpg'} title={'NEPAL RESORT'} id={"928632"} resort={"Mountain Resort"} price={'$400.00'}/>
            </div>
            <div className="greenBox">
            </div>
        </div>

        {/* third Body */}
        <div className="suprise">
            <div className="supriseleft">
                <div className="leftTitle">
                    <h3>Resort Suprises</h3>
                    <p>This resorts porvides the best quality food and hospilatity in best lest price.</p>
                </div>
            
                <div className="surpiseIcons">
                    <div className="suprisebox">
                        <div className="supicons">
                            <img src="./assets/swim2.png" alt="" />
                        </div>
                        <div className="suptitle">
                            <h4>Infinity Pool</h4>
                        </div>
                    </div>
                    <div className="suprisebox">
                        <div className="supicons">
                            <img src="./assets/bath.png" alt="" />
                        </div>
                        <div className="suptitle">
                            <h4>The Beach</h4>
                        </div>
                    </div>
                    <div className="suprisebox">
                        <div className="supicons">
                            <img src="./assets/island.png" alt="" />
                        </div>
                        <div className="suptitle">
                            <h4>Beach Suprises</h4>
                        </div>
                    </div>
                    <div className="suprisebox">
                        <div className="supicons">
                            <img src="./assets/sun.png" alt="" />
                        </div>
                        <div className="suptitle">
                            <h4>Beach Activities</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightBoxss">
                <div className="supriseRight">
                    <div className="supriseRightBox">
                        <div className="largeImg">
                            <img src="./assets/main2.jpg" alt="" />
                        </div>
                        <div className="smallImage">
                            <div className="smallImageBox">
                                <div className="supiconsss">
                                    <img src="./assets/hol1.jpg" alt="" />
                                </div>
                                <div className="supiconsss">
                                    <img src="./assets/main2.jpg" alt="" />
                                </div>
                                <div className="supiconsss">
                                    <img src="./assets/hol3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="greenBoxes"></div>
                </div>
            </div>
        </div>
    </section>
  )
}
