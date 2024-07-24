import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto">header
                {/* logo */}
                <Link>
                    <h1>
                        Edwin<span>.</span>
                    </h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;