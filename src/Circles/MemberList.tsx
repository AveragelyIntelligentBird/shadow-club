import {useSelector} from "react-redux";
import { ImCross } from "react-icons/im";
import {Link} from "react-router-dom";
import React from "react";
import {FaPlus} from "react-icons/fa";
import AddPersonPopup from "./AddPersonPopup";
import * as circleClient from "./client";

export default function MemberList(
    {cid, members, setMembers}: { cid: any, members: any[], setMembers: (m : any) => void }
) {

    let user = useSelector((state: any) => state.accountReducer)["currentUser"];
    const isModerator = user && user.moderatorOf.includes(cid);

    const removePerson = async (person : any) =>  {
        if (!person) return;

        await circleClient.leaveCircle(cid, person._id);
        setMembers(members.filter((m) => m._id !== person._id));
    }

    return (
        <div className="col-11 col-lg-4 col-xxl-3">
            <div className="wd-default-card ms-3 p-3 border border-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="wd-primary-font fs-4">Members</div>
                    {isModerator && <button
                        data-bs-toggle="modal" data-bs-target="#wd-add-person-to-circle"
                        className="btn rounded-pill ms-1 btn-sm wd-btn-secondary"
                    >
                        Add New Person <FaPlus className="mb-1"/>
                    </button>}
                </div>

                {
                    members.map((member) => (
                        <div id="wd-following-card"
                             className="d-flex align-items-center wd-secondary-font fs-5 mb-2"
                        >
                            <img src={member.avatar}
                                 className="wd-other-user-pic"
                                 alt="User avatar"
                            />
                            <Link to={`/Profile/${member._id}`} className="wd-camb-blue ms-2">
                                    <span className="wd-color-on-hover">
                                        {member.username}
                                    </span>
                            </Link>
                            <div className="flex-fill"/>
                            <div className="wd-camb-blue float-end" >
                                {isModerator && (
                                    <ImCross className="wd-color-on-hover" onClick={() => removePerson(member)}/>
                                )}
                            </div>
                        </div>
                    ))
                }
                <AddPersonPopup cid={cid} members={members} setMembers={setMembers}/>
            </div>
        </div>

    )
};