import { useState } from "react";

function ThemeInput({ onSubmit }) {
    const [theme, setTheme] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (theme.trim() === "") {
            setError("Please enter a theme");
            return;
        }

        onSubmit(theme);
    }
    
    return <div className="theme-input-container">
        <h2>Generate Your Adventure</h2>
        <p>Enter a theme for interactive story</p>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input 
                    type="text" 
                    value={theme} 
                    onChange={(e) => setTheme(e.target.value)} 
                    placeholder="Enter a theme (e.g., 'Pirate Adventure', 'Space Odyssey', 'Underwater Kingdom')"
                />
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="generate-btn">Generate Story</button>
        </form>
    </div>
}

export default ThemeInput;