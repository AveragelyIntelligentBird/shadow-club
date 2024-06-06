import { Link } from "react-router-dom";
import { useLocation, useParams} from "react-router";
import "./index.css"

export default function EditorNav() {
    const { uid } = useParams();
    const {pathname} = useLocation();
    const links = ["Profile", "Sensitive", "Login"];
    return (
        <div id="wd-profile-editor-navigation" className="list-group rounded-0 ps-0">
            {
                links.map((link) => (
                    <Link
                        key={`/Profile/${uid}/Edit/${link}`}
                        to={`/Profile/${uid}/Edit/${link}`}
                        className={`list-group-item border border-0 ${
                            pathname.includes(link) ? "active wd-green-yellow" : "wd-camb-blue"
                        }`}
                    >
                        {link}
                    </Link>
                ))
            }
        </div>
    );
}
