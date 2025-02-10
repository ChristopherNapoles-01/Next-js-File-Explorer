import Link from "next/link";
import { FC } from "react";


const Header : FC = () => {

    return (
        <Link href={"/"}>
            <div className="border-b-2 border-gray-500 p h-24 flex items-center">
                    <div className="ml-4">
                        <img src="/folder.png" alt="folder" className="w-16 h-16" />
                    </div>

                    <div className="ml-2 font-bold text-lg">
                        Traverser
                    </div>
            </div>
        </Link>
    );
}

export default Header;