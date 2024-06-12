import React, { ReactElement } from "react";
import Banner from "./Banner";
import "./styles.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";

// CommunityHeader component should take the image address, community name, and community description as props
type CommunityHeaderProps = {
    cid: string;
    name: string;
    description: string;
    bannerImage: string;
    member?: boolean;
};

export default function CommunityHeader({ cid, name, description, bannerImage, member }: CommunityHeaderProps): ReactElement {
    let { id } = useParams(); 
    const location = useLocation();
    console.log(id);
    return (
        <div className="border community-header border-3">
            <Banner id={cid} image={bannerImage}/>
            <div className="pt-2">
                <h1 className="wd-green-yellow wd-primary-font">
                    {name + "   "}
                    {member ? (
                        <button type="button" className="btn rounded-pill btn-sm wd-btn-secondary">Leave <FaTimes/></button>
                    ) : (
                        <button type="button" className="btn rounded-pill btn-sm wd-btn-secondary">Join <FaPlus/></button>
                    )}
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