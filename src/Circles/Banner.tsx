import React, { ReactElement } from "react";
import "./styles.css";
import { Link, useParams } from "react-router-dom";

type BannerProps = {
    id: string;
    image: string;
}
// A component that displays a banner image that spans the width of the screen
// takes an image url and height as props
export default function Banner({ id, image }: BannerProps): ReactElement {
    return (
        <div>
            <Link to={`/Cabal/Circles/${id}`} className="text-decoration-none" >
                <img src={image} alt="Community Banner" className="banner"/>
            </Link>
        </div>
    );
}
