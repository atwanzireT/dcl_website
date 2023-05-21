import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/solid'
import Button from '@mui/material/Button'

function Header() {
    return (
        <>
            {/* Header Area Start */}
            <div className="header__area">
                <div className="header__area-topbar-area">
                    <div className="header__area-topbar custom-container">
                        <div className="header__area-topbar-left">
                            <div className="header__area-topbar-left-info md-mb-10">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <i className="flaticon-placeholder" />
                                            RUHARA ROAD, LUGAZI MBARARA
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:digitallighttech@gmail.com">
                                            <i className="flaticon-email" />
                                            digitallighttech@gmail.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__area-topbar-right">
                            {/* <div className="header__area-topbar-right-language">
                                <select name="select">
                                    <option value={1}>English</option>
                                    <option value={2}>Hindi</option>
                                    <option value={3}>Tamil</option>
                                </select>
                            </div> */}
                            <div className="header__area-topbar-right-social">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TopBar Area Start */}
                {/* Menu Bar Area Start */}
                <Button variant="contained">Hello World</Button>
                {/* Menu Bar Area Start */}
            </div>
            {/* Header Area End */}
        </>

    )
}

export default Header;