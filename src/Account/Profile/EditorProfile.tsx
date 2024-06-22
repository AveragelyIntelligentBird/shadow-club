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
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-mbti-input"
                    value={profile.MBTI}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            MBTI: e.target.value,
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
                    value={profile.starSign}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            starSign: e.target.value,
                            hasChanged: true
                        })
                    }
                />
            </div>
        </div>
    );
}
