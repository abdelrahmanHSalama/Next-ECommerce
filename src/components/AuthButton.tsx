"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex gap-2 items-center">
                <p>Hello, {session.user?.name} 👋</p>
                <button
                    className="p-2 border-2 border-black hover:text-white hover:bg-black transition duration-250 cursor-pointer"
                    onClick={() => signOut}
                >
                    Signout
                </button>
            </div>
        );
    }

    return (
        <button
            className="p-2 border-2 border-black hover:text-white hover:bg-black transition duration-250 cursor-pointer"
            onClick={() => signIn("google")}
        >
            Sign In with Google
        </button>
    );
};

export default AuthButton;
