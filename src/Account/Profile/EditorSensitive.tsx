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
                    value={profile.sensitiveData.realName}
                    onChange={(e) => setProfile({
                        ...profile,
                        sensitiveData: {...profile.sensitveData, realName: e.target.value},
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
                    value={profile.sensitiveData.address}
                    onChange={(e) => setProfile({
                        ...profile,
                        sensitiveData: {...profile.sensitveData, address: e.target.value},
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
                    value={profile.sensitiveData.phone}
                    onChange={(e) => setProfile({
                        ...profile,
                        sensitiveData: {...profile.sensitveData, phone: e.target.value},
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
                    type="text"
                    className="form-control wd-input-field-format"
                    id="wd-real-name"
                    value={profile.sensitiveData.birthday}
                    onChange={(e) => setProfile({
                        ...profile,
                        sensitiveData: {...profile.sensitveData, birthday: e.target.value},
                        hasChanged: true
                    })
                    }
                />
            </div>
        </div>
    );
}
