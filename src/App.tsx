import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Read from "./pages/Read";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route element={<UnauthenticatedLayout />}>
                        <Route path="/auth" element={<Auth />} />
                    </Route>
                    <Route element={<AuthenticatedLayout />}>
                        <Route path="/write" element={<Write />} />
                    </Route>
                    <Route path="/read/:id" element={<Read />} />
                </Route>
            </Routes>
        </>
    );
}
