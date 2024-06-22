export default function EditorSensitive(
    {profile, setProfile }: { profile: any; setProfile: (course: any) => void; }
) {
    return (
        <div id="sensitive-data-editor"
             className="wd-camb-blue wd-secondary-font mb-3 col-8"
        >
            <label htmlFor="wd-real-name" className="col-form-label">
                Real Name
            </label>
            <div className="flex-fill">
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-real-name"
                    value={profile.realName}
                    onChange={(e) => setProfile({
                        ...profile,
                        realName: e.target.value,
                        hasChanged: true
                    })
                    }
                />
            </div>
            <label htmlFor="wd-email" className="col-form-label">
                Email Address
            </label>
            <div className="flex-fill">
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-email"
                    value={profile.email}
                    onChange={(e) => setProfile({
                        ...profile,
                        email: e.target.value,
                        hasChanged: true
                    })
                    }
                />
            </div>
            <label htmlFor="wd-address" className="col-form-label">
                Address
            </label>
            <div className="flex-fill">
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-address"
                    value={profile.address}
                    onChange={(e) => setProfile({
                        ...profile,
                        address: e.target.value,
                        hasChanged: true
                    })
                    }
                />
            </div>
            <label htmlFor="wd-phone" className="col-form-label">
                Phone Number
            </label>
            <div className="flex-fill">
                <input
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({
                        ...profile,
                        phone: e.target.value,
                        hasChanged: true
                    })
                    }
                />
            </div>
            <label htmlFor="wd-real-name" className="col-form-label">
                Birthday
            </label>
            <div className="flex-fill">
                <input
                    type="date"
                    className="form-control wd-input-field-format"
                    id="wd-bd"
                    value={profile.birthday}
                    onChange={(e) => setProfile({
                        ...profile,
                        birthday: e.target.value,
                        hasChanged: true
                    })
                    }
                />
            </div>
        </div>
    );
}
