import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

export default function UnauthenticatedLayout() {
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [navigate, user]);

    if (user) {
        return null;
    }

    return <Outlet />;
}
