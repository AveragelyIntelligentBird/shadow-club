import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../index.css"

export default function EditorNav() {
    const {pathname} = useLocation();
    const links = ["Profile", "Sensitive", "Account"];
    return (
        <div id="wd-profile-editor-navigation">
            {
                links.map((link) => (
                    <div className="mb-2">
                        <Link
                            key={`/Profile/u/Edit/${link}`}
                            to={`/Profile/u/Edit/${link}`}
                            className={`text-decoration-none fs-5 ${
                                pathname.includes(`/Edit/${link}`)
                                    ? "wd-green-yellow wd-green-yellow-bot-border"
                                    : "wd-camb-blue"
                            }`}
                        >
                            {link}
                        </Link>
                    </div>
                ))
            }
            <div className="mb-2">
                <Link
                    key={`/BecomeElite`}
                    to={`/BecomeElite`}
                    className={`text-decoration-none fs-5 wd-camb-blue`}
                >
                    Elite Status
                </Link>
            </div>
        </div>
    );
}
