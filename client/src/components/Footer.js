import React from 'react'
import "./footer.css";

const Footer = () => {
return (
    <footer className='footer-Section'>

        {/* left part Starts*/}
        <div className='leftside'>
                 <h4>Group Project</h4>
                 <h5>Project Supervisor :- </h5>
                 <p>Dr. Rashi Agrawal</p>
        </div>
            {/* center part Ends*/}
            
         {/* center part Starts*/}
    <div className='center-Section' style={{ width: "100%", borderLeft: ["none", "1px solid white"], borderRight: ["none", "1px solid black"] }}>
        <div style={{textAlign:"center", textTransform:"uppercase"}}>
            Decentralized File System Using BlockChain
        </div>
        <p>©2023-24</p>
    </div>
        {/* center part ends*/}

                {/* right part start*/}

        <div className='rightside'>
        <h5>Submitted From :-</h5>
        <p>Dipesh Mate</p>
        <p>Vishvajeet Rana</p>
        <p>Himanshu Kumar</p>
        <p>Avaneesh</p>
                {/* right part ends*/}
    </div>

    </footer>

    )
}

export default Footer