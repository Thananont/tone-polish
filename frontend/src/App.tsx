import { useState } from "react";
import axios from "axios";
import "./App.css";

type Tone = "Professional" | "Empathetic" | "Concise";

interface PolishingRequest {
  originalText: string;
  tone: string;
}

interface PolishingResponse {
  polishedText: string;
}

const API_BASE_URL = "http://localhost:8080/api";

function App() {
  const [originalText, setOriginalText] = useState("");
  const [selectedTone, setSelectedTone] = useState<Tone>("Professional");
  const [polishedText, setPolishedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePolish = async () => {
    if (!originalText.trim()) {
      setError("Please enter some text to polish.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPolishedText("");

    try {
      const request: PolishingRequest = {
        originalText: originalText.trim(),
        tone: selectedTone,
      };

      const response = await axios.post<PolishingResponse>(
        `${API_BASE_URL}/polish`,
        request
      );

      setPolishedText(response.data.polishedText);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Failed to polish text. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="main-card">
        <div className="header">
          <h1>Tone Polish</h1>
          <p>Polish your text with AI-powered tone adjustment</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label htmlFor="original-text" className="form-label">
              Your Draft
            </label>
            <textarea
              id="original-text"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Enter your text here..."
              className="textarea"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Select Tone</label>
            <div className="radio-group">
              {(["Professional", "Empathetic", "Concise"] as Tone[]).map(
                (tone) => (
                  <label key={tone} className="radio-item">
                    <input
                      type="radio"
                      name="tone"
                      value={tone}
                      checked={selectedTone === tone}
                      onChange={(e) => setSelectedTone(e.target.value as Tone)}
                    />
                    <span>{tone}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <button
            onClick={handlePolish}
            disabled={isLoading || !originalText.trim()}
            className="btn"
          >
            {isLoading ? "Polishing..." : "Polish"}
          </button>

          {error && <div className="error-message">{error}</div>}

          {polishedText && (
            <div className="result-section">
              <div className="result-header">
                <label className="form-label">Polished Result</label>
              </div>
              <div className="result-box">
                <p className="result-text">{polishedText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
