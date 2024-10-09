import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return(
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link
                href="/"
                className="mb-2 cursor-pointer items-center gap-2"
                >
                    <div>
                        <Image 
                            src="/icons/logo-full-light.png"
                            width={200}
                            height={50}
                            alt="meteor logo"
                            className="sm:hidden xl:block max-xl:size-14"
                        />
                         <Image 
                            src="/icons/logo-svg.svg"
                            width={34}
                            height={34}
                            alt="meteor logo"
                            className="xl:hidden size-14"
                        />
                    </div>
            </Link>
        </nav>
    </section>
  )
};

export default Sidebar;
