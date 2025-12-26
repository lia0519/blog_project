import { NavLink, useNavigate } from "react-router";
import { axiosInstance } from "../api/axiosInstance";
import { useAuthStore } from "../stores/useAuthStore";

export default function Header() {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const unsetAuth = useAuthStore((state) => state.unsetAuth);

    const handleLogout = async () => {
        try {
            const { status } = await axiosInstance.post("/logout");
            if (status === 200) {
                unsetAuth();
                navigate("/auth");
            } else {
                throw new Error("로그아웃에 실패했습니다.");
            }
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "로그아웃 중 오류가 발생하였습니다.";
            alert(message);
        }
    };

    return (
        <header className="page__header">
            <h1 className="page__logo">
                <NavLink to="/" className="page__logo-link">
                    JBNU
                </NavLink>
            </h1>
            <nav className="page__navigation">
                <ul className="page__nav-list">
                    <li className="page__nav-item">
                        <NavLink to="/write" className="page__nav-link">
                            글쓰기
                        </NavLink>
                    </li>
                    {user ? (
                        <li className="page__nav-item">
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="page__nav-link"
                            >
                                로그아웃
                            </button>
                        </li>
                    ) : (
                        <li className="page__nav-item">
                            <NavLink to="/auth" className="page__nav-link">
                                인증
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
