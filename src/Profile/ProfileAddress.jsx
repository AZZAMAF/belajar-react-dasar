import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function ProfileAdddress(){
    const profile = useContext(ProfileContext)
    return(
        <>
            <h2>Profile Address</h2>
            <p>Alamat {profile}</p>
        </>
    )
}