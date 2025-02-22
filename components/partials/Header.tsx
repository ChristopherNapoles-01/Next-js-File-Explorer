'use client'
import Link from "next/link";
import { FC } from "react";
import initializeDrive from "@/hooks/GoogleApiHooks/initializeDrive";

const Header : FC = () => {
    return (
        <div className="border-b-2 border-gray-500 p h-24 flex justify-between">
            <Link href={"/"} onClick={() => localStorage.removeItem('currentFolder')}>
                <div className="flex items-center mt-4">
                    <div className="ml-4">
                        <img src="/folder.png" alt="folder" className="w-16 h-16" />
                    </div>

                    <div className="ml-2 font-bold text-lg">
                        Traverser
                    </div>
                </div>
            </Link>
            <div className="flex items-center m-4">
                Test
            </div>
        </div>
    );
}

export default Header;