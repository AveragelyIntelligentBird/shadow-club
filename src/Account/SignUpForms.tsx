import React from "react";
import AvatarPicker from "./AvatarPicker";

export default function SignUpForms(
    {newProfile, setNewProfile }: { newProfile: any; setNewProfile: (p: any) => void; }
) {
    return (
        <>
            <h4 className="wd-light-green wd-primary-font">Login Details</h4>
            <p className="wd-light-green">
                Mandatory fields to get you started! You will use these credentials to log in to your account.
            </p>
            <div className="col-12 col-xl-9">
                <label htmlFor="wd-name-signup" className="col-form-label">
                    Username
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-name-signup"
                        value={newProfile.username}
                        onChange={(e) =>
                            setNewProfile({...newProfile, username: e.target.value})
                        }
                    />
                </div>
                <label htmlFor="wd-password-signup" className="col-form-label">
                    Password
                </label>
                <div className="flex-fill">
                    <input
                        type="password"
                        className="form-control wd-input-field-format"
                        id="wd-password-signup"
                        value={newProfile.password}
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            password: e.target.value
                        })
                        }
                    />
                </div>
            </div>
            <div className="wd-hor-divider my-4"></div>
            <h4 className="wd-light-green wd-primary-font">Profile Details</h4>
            <p className="wd-light-green">
                Fill these in if you don't want your profile to look empty! You can always update them later. Also, pick
                an avatar!
            </p>
            <div className="col-12 col-xl-9">
                <label htmlFor="wd-bio-signup" className="col-form-label">
                    Bio
                </label>
                <textarea
                    id="wd-bio-signup" rows={4}
                    className="form-control wd-input-field-format"
                    value={newProfile.bio}
                    onChange={(e) =>
                        setNewProfile({
                            ...newProfile,
                            bio: e.target.value,
                        })
                    }
                />
                <label htmlFor="wd-mbti-input-signup" className="col-form-label">
                    MBTI Type
                </label>
                <div className="flex-fill">
                    <select
                        className="form-select wd-input-field-format"
                        id="wd-mbti-input-signup"
                        value={newProfile.MBTI}
                        onChange={(e) =>
                            setNewProfile({
                                ...newProfile,
                                MBTI: e.target.value,
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
                <label htmlFor="wd-star-sign-input-signup" className="col-form-label">
                    Star Sign
                </label>
                <div className="flex-fill">
                    <select
                        className="form-select wd-input-field-format"
                        id="wd-star-sign-input-signup"
                        value={newProfile.starSign}
                        onChange={(e) =>
                            setNewProfile({
                                ...newProfile,
                                starSign: e.target.value,
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
                </div>
                <label className="col-form-label">
                    Avatar
                </label>
                <AvatarPicker newProfile={newProfile} setNewProfile={setNewProfile}/>
            </div>
            <div className="wd-hor-divider my-4"></div>
            <h4 className="wd-light-green wd-primary-font">Sensitive Details</h4>
            <p className="wd-light-green">
                Don't want to fill in these details now? Don't you worry! Soon enough we will collect this data for you!
                :)
            </p>
            <div className="col-12 col-xl-9">
                <label htmlFor="wd-real-name-signup" className="col-form-label">
                    Real Name
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-real-name-signup"
                        value={newProfile.realName}
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            realName: e.target.value,
                        })
                        }
                    />
                </div>
                <label htmlFor="wd-email-signup" className="col-form-label">
                    Email Address
                </label>
                <div className="flex-fill">
                    <input
                        type="email"
                        className="form-control wd-input-field-format"
                        id="wd-email-signup"
                        value={newProfile.email}
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            email: e.target.value,
                        })
                        }
                    />
                </div>
                <label htmlFor="wd-address-signup" className="col-form-label">
                    Address
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-address-signup"
                        value={newProfile.address}
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            address: e.target.value,
                        })
                        }
                    />
                </div>
                <label htmlFor="wd-phone-signup" className="col-form-label">
                    Phone Number
                </label>
                <div className="flex-fill">
                    <input
                        type="text"
                        className="form-control wd-input-field-format"
                        id="wd-phone-signup"
                        value={newProfile.phone}
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            phone: e.target.value,
                        })
                        }
                    />
                </div>
                <label htmlFor="wd-bd-signup" className="col-form-label">
                    Birthday
                </label>
                <div className="flex-fill">
                    <input
                        type="date"
                        className="form-control wd-input-field-format"
                        id="wd-bd-signup"
                        value={newProfile.birthday}
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            birthday: e.target.value,
                        })
                        }
                    />
                </div>
            </div>
        </>
    );
}