export default function EditorLogin(
    {profile, setProfile }: { profile: any; setProfile: (course: any) => void; }
) {
    return (
        <div id="login-data-editor"
             className="wd-camb-blue wd-secondary-font mb-3 col-8"
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
            <label htmlFor="wd-password" className="col-form-label">
                Password
            </label>
            <div className="flex-fill">
                <input
                    type="password"
                    className="form-control wd-input-field-format"
                    id="wd-password"
                    value={profile.password}
                    onChange={(e) => setProfile({
                        ...profile,
                        password: e.target.value,
                        hasChanged: true
                    })
                    }
                />
            </div>
        </div>
    );
}
