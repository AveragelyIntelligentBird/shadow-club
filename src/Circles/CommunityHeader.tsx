import React, { ReactElement } from "react";
import Banner from "./Banner";
import "./styles.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import * as client from "./client";
import { useSelector } from "react-redux";

type CommunityHeaderProps = {
    cid: string;
    name: string;
    description: string;
    bannerImage: string;
};

// The header component displays the circle banner image, name, and description.
// It also includes a button to join or leave the circle if the user is logged in.
// It should take in a circle id and use the client to fetch the circle data.
// It should use the state to determine if the user is a member of the circle.
export default function CommunityHeader({ cid, name, description, bannerImage }: CommunityHeaderProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // If the path encodes a specific community, display a button to create a new post
  let { id } = useParams(); 
  const location = useLocation();
  return (
    <div className="border community-header border-3">
      <Banner id={cid} image={bannerImage} />
      <div className="pt-2">
        <h1 className="wd-green-yellow wd-primary-font">
            {name + "   "}
            {currentUser.role !== "anonymous" &&
                (currentUser?.circles.includes(cid) ? (
                    <button type="button" className="btn rounded-pill btn-sm wd-btn-secondary">Leave <FaTimes/></button>
                ) : (
                    <button type="button" className="btn rounded-pill btn-sm wd-btn-secondary">Join <FaPlus/></button>
                ))}
        </h1>
      </div>
      <p className="wd-green-yellow wd-secondary-font">{description}</p>
        {id &&
        <Link to={`${location.pathname}/New`} className="text-decoration-none" >
            <button type="button" className="btn rounded-pill btn-sm wd-btn-secondary">Post</button> 
        </Link>
        }
    </div>
  );
}