import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../public/logo.svg";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";



const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated) {
        redirect("/sign-in");
    }

    return (
        <div className="root-layout">
            <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={50} height={50} />
                    <h2 className="text-primary-100">CrackWise</h2>
                </Link>

            </nav>
            {children}
        </div>
    );
};

export default RootLayout;
