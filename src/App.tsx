import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import AppRoutes from "./routes";

const App: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };
        checkUser();
    }, []);

    return <AppRoutes user={user} />;
};

export default App;
