import { useState } from "react";
import Profile from "./Profile";
import ProfileAdddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileFrom from "./ProfileForm";

export default function ProfileApp(){

    const [name, setName] = useState('azzam')

    return(
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileFrom name={name} setName={setName}/>
                <Profile/>
                <ProfileAdddress/>
            </ProfileContext.Provider>
        </>
    )
}
