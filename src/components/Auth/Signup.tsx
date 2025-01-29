import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSignup = async () => {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) setError(error.message);
        else navigate("/dashboard");
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Signup;
