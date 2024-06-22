import { Link } from "react-router-dom";
import { GiWarlockEye } from "react-icons/gi";

export default function Welcome() {
    return (
        <div className="flex-fill">
            <div style={{
                backgroundImage: "url(/images/welcome.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh"
            }} className="d-flex align-items-center justify-content-center">
                <div className="wd-welcome-font">
                    ALL IS GOOD
                </div>
            </div>
            <a href="https://www.freepik.com/free-vector/flat-design-spring-landscape-illustrated_12239767.htm"
               className="fixed-bottom text-black wd-bg-ebony text-center small">
                Image Source - Freepik
            </a>
            <div className="fixed-bottom">
                <Link to="/SignIn"
                      className="wd-bg-ebony float-end border border-1 border-black"
                      style={{width: "50px"}}>
                    <GiWarlockEye className="fs-2 wd-jet m-2"/>
                </Link>
            </div>
        </div>
    );
}