import { Link } from "react-router-dom";
import { useLocation, useParams} from "react-router";
import "./index.css"

export default function EditorNav() {
    const { uid, profileId } = useParams();
    const {pathname} = useLocation();
    const links = ["Profile", "Sensitive", "Account"];
    return (
        <div id="wd-profile-editor-navigation">
            {
                links.map((link) => (
                    <div className="mb-2">
                        <Link
                            key={`/${uid}/Profile/${profileId}/Edit/${link}`}
                            to={`/${uid}/Profile/${profileId}/Edit/${link}`}
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
        </div>
    );
}
