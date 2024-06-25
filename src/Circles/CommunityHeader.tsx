import { useEffect, useState } from "react";
import Banner from "./Banner";
import "./styles.css";
import { FaPlus, FaTimes, FaUnlockAlt, FaLock } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import * as client from "./client";
import * as profileClient from "../Account/client";
import { useSelector } from "react-redux";

type CommunityHeaderProps = {
    cid: string;
    name: string;
    description: string;
    bannerImage: string;
    visibility: boolean;
};

// The header component displays the circle banner image, name, and description.
// It also includes a button to join or leave the circle if the user is logged in.
// It should take in a circle id and use the client to fetch the circle data.
// It should use the state to determine if the user is a member of the circle.
export default function CommunityHeader({ cid, name, description, bannerImage, visibility}: CommunityHeaderProps) {
  let user = useSelector((state: any) => state.accountReducer)["currentUser"];
  const [joined, setJoined] = useState<boolean>(false);
  let { id } = useParams(); 
  const location = useLocation();

  const fetchJoined = async () => {
    user = user && await profileClient.findUserProfileById(user._id);
    const joined = user && user.memberOf.includes(cid);
    setJoined(joined);
  };

  useEffect(() => {
    fetchJoined();
  }, [user, cid]);
  // Should probably have a dependency array for useEffect
  const joinCircle = async () => {
    await client.joinCircle(cid, user._id);
    setJoined(true);
    // console.log("Joined circle");
  }
  const leaveCircle = async () => {
    await client.leaveCircle(cid, user._id);
    setJoined(false);
    // console.log("Left circle");
  }
    return (
        <div className="border community-header border-3">
            <Banner id={cid} image={bannerImage}/>
            <div className="pt-2">
                <h1 className="wd-green-yellow wd-primary-font">
                    <Link to={`/Circles/${cid}`} className="wd-green-yellow text-decoration-none">
                        {name}{"    "}
                    </Link>
                    {visibility ? (
                        <FaUnlockAlt className="mb-3 pb-2"/>
                    ) : (
                        <FaLock className="mb-3 pb-2"/>
                    )}
                    {user &&
                        (joined ? (
                            <button
                                type="button"
                                className="mb-3 btn rounded-pill btn-sm wd-btn-secondary"
                                onClick={() => leaveCircle()}
                            >
                                Leave <FaTimes className="pb-1"/>
                            </button>
                        ) : (visibility &&
                            <button
                                type="button"
                                className="mb-3 btn rounded-pill btn-sm wd-btn-secondary"
                                onClick={() => joinCircle()}
                            >
                                Join <FaPlus className="pb-1"/>
                            </button>
                        ))}
                    {/* If the user is anonymous, route  */}
                </h1>
            </div>
            <p className="wd-green-yellow wd-secondary-font">{description}</p>
            {id && user && (
                <Link to={`${location.pathname}/New`} className="text-decoration-none">
                    <button
                        type="button"
                        className="btn rounded-pill btn-sm wd-btn-secondary"
                    >
                        New Post <FaPlus className="mb-1"/>
                    </button>
                </Link>
            )}
        </div>
    );
}