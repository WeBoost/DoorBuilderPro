import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
