import {GiHoodedFigure} from "react-icons/gi";

export default function NotFound(
    {subject}: { subject: any; })
{
    return (
        <div id={`${subject.toLowerCase()}-not-found`}
             className="d-flex justify-content-center">
            <div className="d-flex col-6 rounded-2 align-items-center justify-content-center p-4
                wd-bg-jet wd-camb-blue wd-primary-font"
            >
                <GiHoodedFigure className="fs-1 me-3"/>
                <div className="fs-3 me-3">
                    {subject} not found
                </div>
                <GiHoodedFigure className="fs-1"/>
            </div>
        </div>
    );
}