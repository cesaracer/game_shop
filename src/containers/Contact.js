import React from 'react'

function Contact(){
    return(
        <div className="contact">
            <div id="message">
                <div style={{width: "100%", float: "left"}}>
                    <h3 style={{color: "dimgrey", marginLeft: "25%"}}>Contact Us</h3>
                </div>
                <div style={{width: "100%", float: "left"}}>
                    <img style={{width: "30px", float:"left", paddingTop: "20px", paddingRight: "20px"}} src="images/phone.svg"/>
                    <h4 style={{float:"left", color: "dimgrey"}}>(303)XXX-XXXX</h4>
                </div>
                <div style={{width: "100%", float: "left", marginBottom: "80px "}}>
                    <img style={{width: "30px", float:"left", paddingTop: "17px", paddingRight: "20px"}} src="images/mail.svg"/>
                    <h4 style={{float:"left", color: "dimgrey"}}>address@domain.extension</h4>
                </div>
                <div>
                    <table>
                        <tr>
                            <td style={{textAlign: "center", backgroundColor: "lightgrey"}} colspan="2">Hours</td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>8:00 am - 8:00pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>8:00 am - 8:00pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>8:00 am - 8:00pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>8:00 am - 8:00pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>8:00 am - 8:00pm</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="map">
                <img id="mapImg" src="images/map.png"/>
            </div>
        </div>
    )
}

export default Contact