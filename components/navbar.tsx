import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";

// stops navbar from being cashed (allows testing admin site during development)
export const revalidate = 0;

const NavBar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div
                    className="
                flex 
                items-center 
                relative 
                h-16 
                px-4 
                sm:px-6 
                lg:px-8"
                >
                    <Link
                        href="/"
                        className="
                    flex
                    ml-4
                    lg:ml-0
                    gap-x-2"
                    >
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavBarActions />
                </div>
            </Container>
        </div>
    );
}

export default NavBar;