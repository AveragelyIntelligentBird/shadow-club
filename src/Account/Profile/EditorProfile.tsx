import React from "react";
import AvatarPicker from "../AvatarPicker";

export default function EditorProfileData(
    {profile, setProfile }: { profile: any; setProfile: (course: any) => void; }
) {
    return (
        <div id="profile-data-editor" className="col-9 wd-camb-blue wd-secondary-font mb-3">
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
                id="wd-bio" rows={4}
                className="form-control wd-input-field-format"
                value={profile.bio}
                onChange={(e) =>
                    setProfile({
                        ...profile,
                        bio: e.target.value,
                        hasChanged: true
                    })
                }
            />
            <label htmlFor="wd-mbti-input" className="col-form-label">
                MBTI
            </label>
            <div className="flex-fill">
                <select
                    className="form-select wd-input-field-format"
                    id="wd-mbti-input"
                    value={profile.MBTI}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            MBTI: e.target.value,
                            hasChanged: true
                        })
                    }
                >
                    <option value="ENTJ">ENTJ</option>
                    <option value="INTJ">INTJ</option>
                    <option value="ENTP">ENTP</option>
                    <option value="INTP">INTP</option>
                    <option value="ENFJ">ENFJ</option>
                    <option value="INFJ">INFJ</option>
                    <option value="ENFP">ENFP</option>
                    <option value="INFP">INFP</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="ISTJ">ISTJ</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ESFP">ESFP</option>
                    <option value="ISFP">ISFP</option>
                </select>
            </div>
            <label htmlFor="wd-star-sign-input" className="col-form-label">
                Star Sign
            </label>
            <div className="flex-fill">
                <select
                    className="form-select wd-input-field-format"
                    id="wd-star-sign-input"
                    value={profile.starSign}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            starSign: e.target.value,
                            hasChanged: true
                        })}
                >
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                </select>
                <label className="col-form-label">
                    Avatar
                </label>
                <AvatarPicker newProfile={profile} setNewProfile={setProfile}/>
            </div>
        </div>
    );
}
