import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
        else navigate("/dashboard");
    };

    const handleOAuthLogin = async (provider: "google" | "facebook") => {
        const { error } = await supabase.auth.signInWithOAuth({ provider });
        if (error) console.error("OAuth Login Error:", error.message);
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => handleOAuthLogin("google")}>Login with Google</button>
            <button onClick={() => handleOAuthLogin("facebook")}>Login with Facebook</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
