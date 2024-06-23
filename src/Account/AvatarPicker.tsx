import React, {useState} from "react";

export default function AvatarPicker(
    {newProfile, setNewProfile }: { newProfile: any; setNewProfile: (profile: any) => void; }
) {
    const [avatarOpt, setAvatarOpt] = useState("1");

    const updateAvatar = (pfpId: string) => {
        setNewProfile({...newProfile, avatar: `/images/reptiloid-${pfpId}.png`});
        setAvatarOpt(pfpId);
    }

    return (
        <div className="d-flex flex-wrap mt-1">
            {Array.from("12345").map((pfpId: any) => (
                <div id="wd-pfp-card"
                     className="d-flex flex-column align-items-center wd-secondary-font fs-6 me-3"
                >
                    <img src={`/images/reptiloid-${pfpId}.png`}
                         className={`${avatarOpt === pfpId ? "wd-pfp-choice-pic-selected" : "wd-pfp-choice-pic"}`}
                         alt="Pfp option"
                         onClick={() => updateAvatar(pfpId)}
                    />
                </div>
            ))}
        </div>
    );
}