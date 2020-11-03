import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
    return (
        <>
            <div class="row bgCustomDark nav justify-content-center">
                <div class="text-center nav-item nav-link nav-fill">
                    <Link to="/" >Home</Link>
                </div>
            </div>
        </>
    )
}
