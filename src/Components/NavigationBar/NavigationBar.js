import React, { useContext } from 'react';
import './NavigationBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Context from '../../Store/Context';

export default function NavigationBar() {
    const { globale, actions } = useContext(Context);
    const loggedIn = (globale.token.length > 7) ? globale.token.length : (localStorage.getItem('userToken') || []).length;

    return (
        <div className="navigationBar" dir="ltr">
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <MenuIcon />
                </label>
                <label className="logo">Languague <span>Best</span></label>
                <ul>
                    {(loggedIn > 0) ?
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li onClick={() => {
                                actions({
                                    type: 'setToken',
                                    payload: {
                                        ...globale,
                                        token: "",
                                        email: ""
                                    }
                                });
                                localStorage.clear();
                            }}>
                                LogOut
                            </li>
                        </Link>
                        :
                        ""
                    }

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>

                            <HomeIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            الرئيسية

                        </li>
                    </Link>
                    <Link to="/profile" style={{
                        color: "#FFF"
                    }}>
                        <li>

                            <AccountBoxIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            حسابي

                        </li>
                    </Link>
                    <Link to="/levelsrfc" >
                        <li>

                            <AddRoadIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            التقدم

                        </li>
                    </Link>
                    <Link to="/form1" >
                        <li>

                            <BookIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            مدونتي

                        </li>
                    </Link>
                </ul>
            </nav>

        </div >
    )
}
