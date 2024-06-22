export default function EditorLogin(
    {profile, setProfile }: { profile: any; setProfile: (course: any) => void; }
) {
    return (
        <div id="login-data-editor"
             className="wd-camb-blue wd-secondary-font mb-3 col-8"
        >
            <label htmlFor="wd-email" className="col-form-label">
                Email Address
            </label>
            <div className="flex-fill">
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-email"
                    value={profile.sensitiveData.email}
                    onChange={(e) => setProfile({
                        ...profile,
                        sensitiveData: {...profile.sensitveData, email: e.target.value},
                        hasChanged: true
                    })
                    }
                />
            </div>
            <label htmlFor="wd-password" className="col-form-label">
                Password
            </label>
            <div className="flex-fill">
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-password"
                    value={profile.sensitiveData.password}
                    onChange={(e) => setProfile({
                        ...profile,
                        sensitiveData: {...profile.sensitveData, password: e.target.value},
                        hasChanged: true
                    })
                    }
                />
            </div>
        </div>
    );
}
