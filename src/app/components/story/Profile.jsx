import React from "react";
import Image from "next/image";

function Profile() {
    return (
        <div className="flex justify-center items-center">
            <div className="avatar">
                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-96 h-96">
                    <Image
                        src="/Yen.jpg"
                        alt="profile pic"
                        className="rounded-full"
                        width={384}
                        height={384}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
