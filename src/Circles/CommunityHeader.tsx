import React, { ReactElement } from "react";
import Banner from "./Banner";
import "./styles.css";
import { FaPlus, FaTimes } from "react-icons/fa";

// CommunityHeader component should take the image address, community name, and community description as props
type CommunityHeaderProps = {
    id: string;
    name: string;
    description: string;
    bannerImage: string;
    member?: boolean;
};

export default function CommunityHeader({ id, name, description, bannerImage, member }: CommunityHeaderProps): ReactElement {
    return (
        <div className="border community-header border-3">
            <Banner id={id} image={bannerImage}/>
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
        </div>
    );
}