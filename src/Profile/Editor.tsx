import * as db from "../Database";
import { useParams } from "react-router";
import {GiWarlockEye} from "react-icons/gi";

export default function ProfileEditor() {
    const { uid } = useParams();
    const user =
        db.users.find((user) => user.uid === uid);
    return (
        <div style={{height: "100vh"}}
             className="wd-bg-ebony">
            <div className="fs-4 p-2 wd-green-yellow wd-primary-font text-center">
                Shadow <GiWarlockEye className="fs-1 mb-4"/> Club
            </div>
            {
                user &&
                <div className="d-flex">
                    TODO: Editor
                </div>
            }
        </div>
    );
}