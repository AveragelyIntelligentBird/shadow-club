import {updateProfile} from "./ProfileReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

export default function EditorProfileData(
    {profile, setProfile }: { profile: any; setProfile: (course: any) => void; }
) {
    return (
        <div id="profile-data-editor" className="d-flex wd-camb-blue wd-secondary-font mb-3">
            <div id="profile-text-data-editor"
                 className="col-8"
            >
                <label htmlFor="wd-name" className="col-form-label">
                    Username
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-name"
                        value={profile.username}
                        onChange={(e) =>
                            setProfile({...profile, username: e.target.value, hasChanged: true})
                        }
                    />
                </div>
                <label htmlFor="wd-bio" className="col-form-label">
                    Bio
                </label>
                <textarea
                    id="wd-bio" rows={2}
                    className="form-control wd-input-field-format"
                    value={profile.profileData.bio}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            profileData: {...profile.profileData, bio: e.target.value},
                            hasChanged: true
                        })
                    }
                />
                <label htmlFor="wd-mbti-input" className="col-form-label">
                    MBTI
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-mbti-input"
                        value={profile.profileData.MBTI}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                profileData: {...profile.profileData, MBTI: e.target.value},
                                hasChanged: true
                            })
                        }
                    />
                </div>
                <label htmlFor="wd-star-sign-input" className="col-form-label">
                    Star Sign
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-star-sign-input"
                        value={profile.profileData.starSign}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                profileData: {...profile.profileData, starSign: e.target.value},
                                hasChanged: true
                            })
                        }
                    />
                </div>
            </div>
            <div id="profile-image-editor" className="col-4 d-flex flex-column ms-3">
                <label htmlFor="wd-avatar-path" className="col-form-label">
                    Profile Avatar Path
                </label>
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-avatar-path"
                    value={profile.profileData.avatar}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            profileData: {...profile.profileData, avatar: e.target.value},
                            hasChanged: true
                        })
                    }
                />
                <label className="col-form-label">
                    Preview
                </label>
                <img
                    src={profile.profileData.avatar}
                    alt="Profile"
                    className="wd-profile-pic-editor align-self-center"
                />
            </div>
        </div>
    );
}
