/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { detectScam } from './detection/scamDetection.js';
import { useState } from 'react';

export default function ScammerlyClient() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #1A1A1A;
          background: linear-gradient(135deg, #B8E0FF 0%, #FFE88A 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }





        /* Header */
        .header {
          position: relative;
          z-index: 10;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #1A1A1A;
          text-decoration: none;
        }

        .nav-button {
          background: #1A1A1A;
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }

        .nav-button:hover {
          background: #333;
          transform: translateY(-2px);
        }

        /* Main content */
        .main-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
          text-align: center;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #666;
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Primary CTA */
        .primary-cta {
          margin-bottom: 64px;
        }

        .download-button {
          background: #1A1A1A;
          color: white;
          padding: 20px 40px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(26, 26, 26, 0.15);
          cursor: pointer;
          border: none;
        }

        .download-button:hover {
          background: #333;
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(26, 26, 26, 0.2);
        }

        /* Testing section */
        .testing-section {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 48px;
          margin: 64px auto;
          max-width: 800px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .testing-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1A1A1A;
        }

        .testing-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 32px;
        }

        .input-group {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .url-input {
          flex: 1;
          min-width: 300px;
          padding: 16px 20px;
          border: 2px solid #B8E0FF;
          border-radius: 12px;
          font-size: 16px;
          background: white;
          transition: border-color 0.2s ease;
        }

        .url-input:focus {
          outline: none;
          border-color: #1A1A1A;
        }

        .url-input::placeholder {
          color: #999;
        }

        .test-button {
          background: #B8E0FF;
          color: #1A1A1A;
          border: 2px solid #1A1A1A;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .test-button:hover {
          background: #1A1A1A;
          color: white;
        }

        .upload-option {
          font-size: 14px;
          color: #666;
          margin-top: 16px;
        }

        .upload-link {
          color: #1A1A1A;
          text-decoration: underline;
          cursor: pointer;
        }

        .upload-link:hover {
          color: #333;
        }

        /* Platform support */
        .platform-support {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .platform-badge {
          background: rgba(26, 26, 26, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #1A1A1A;
        }

        /* Email signup */
        .email-signup {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(26, 26, 26, 0.1);
        }

        .email-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .email-form {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .email-input {
          padding: 12px 16px;
          border: 2px solid #B8E0FF;
          border-radius: 8px;
          font-size: 14px;
          min-width: 250px;
        }

        .email-input:focus {
          outline: none;
          border-color: #1A1A1A;
        }

        .email-button {
          background: #FFE88A;
          color: #1A1A1A;
          border: 2px solid #1A1A1A;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .email-button:hover {
          background: #1A1A1A;
          color: white;
        }

        /* Analysis results */
        .analysis-results {
          margin-top: 24px;
          padding: 24px;
          border-radius: 16px;
          text-align: left;
        }

        .result-safe {
          background: linear-gradient(135deg, #E8F5E8 0%, #F0F8F0 100%);
          border: 2px solid #4CAF50;
        }

        .result-low {
          background: linear-gradient(135deg, #E8F5E8 0%, #F0F8F0 100%);
          border: 2px solid #4CAF50;
        }

        .result-medium {
          background: linear-gradient(135deg, #FFF3E0 0%, #FFF8F0 100%);
          border: 2px solid #FF5722;
        }

        .result-high {
          background: linear-gradient(135deg, #FFEBEE 0%, #FFF5F5 100%);
          border: 2px solid #F44336;
        }

        .result-header {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .result-details {
          margin-bottom: 16px;
        }

        .detected-pattern {
          background: rgba(26, 26, 26, 0.05);
          padding: 8px 12px;
          border-radius: 8px;
          margin: 8px 0;
          font-size: 14px;
        }

        .pattern-type {
          font-weight: 600;
          color: #1A1A1A;
        }

        .pattern-confidence {
          color: #666;
          font-size: 12px;
        }

        .recommendations {
          margin-top: 16px;
        }

        .recommendations h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1A1A1A;
        }

        .recommendation {
          font-size: 13px;
          color: #555;
          margin: 4px 0;
          padding-left: 8px;
        }

        .analyzing-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid #E3F2FD;
          border-radius: 50%;
          border-top-color: #1A1A1A;
          animation: spin 1s ease-in-out infinite;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .test-button:disabled {
          background: #B8E0FF;
          color: #999;
          cursor: not-allowed;
        }

        .test-button:disabled:hover {
          background: #B8E0FF;
          color: #999;
          transform: none;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .header {
            padding: 16px 20px;
          }

          .main-content {
            padding: 40px 20px;
          }

          .testing-section {
            padding: 32px 24px;
            margin: 32px 20px;
          }

          .input-group {
            flex-direction: column;
          }

          .url-input {
            min-width: auto;
          }

          .platform-support {
            gap: 12px;
          }

          .email-form {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }


      `}</style>



      {/* Header */}
      <header className="header">
        <a href="#" className="logo">Scammerly</a>
        <button 
          className="nav-button"
          onClick={() => alert('Pro pricing page coming next!')}
        >
          Try Pro
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="hero-title">Do not Get Scammed.<br />Get Scammerly.</h1>
        <p className="hero-subtitle">
          Protect yourself from AI-powered scams, fake celebrity endorsements, and deepfake videos with real-time detection.
        </p>
        
        {/* Primary CTA */}
        <div className="primary-cta">
          <button 
            className="download-button"
            onClick={() => alert('Chrome extension download coming soon!')}
          >
            Get Protected
          </button>
        </div>

        {/* Testing Section */}
        <section className="testing-section">
          <h2 className="testing-title">AI Scams Are Everywhere. We will Spot Them First.</h2>
          <p className="testing-subtitle">Paste a suspicious link to test our detection technology</p>
          
          <div className="input-group">
            <input 
              type="text" 
              className="url-input" 
              placeholder="Paste YouTube, TikTok, Instagram Reel, or Facebook link..."
              id="url-input"
            />
            <button 
              className="test-button"
              disabled={isAnalyzing}
              onClick={async () => {
                const input = document.getElementById('url-input') as HTMLInputElement;
                const url = input?.value.trim();
                if (!url) {
                  alert('Please paste a URL to analyze');
                  return;
                }
                
                setIsAnalyzing(true);
                setAnalysisResult(null);
                
                try {
                  const result = await detectScam(url);
                  setAnalysisResult(result);
                } catch (error) {
                  setAnalysisResult({
                    success: false,
                    error: 'Analysis failed. Please try again.',
                    message: '❌ Analysis Error - Please check your connection and try again'
                  });
                } finally {
                  setIsAnalyzing(false);
                }
              }}
            >
              {isAnalyzing ? (
                <>
                  <span className="analyzing-spinner"></span>
                  Analyzing...
                </>
              ) : (
                'Analyze Link'
              )}
            </button>
          </div>

          {/* Analysis Results */}
          {analysisResult && (
            <div className={`analysis-results result-${analysisResult.riskLevel || 'low'}`}>
              <div className="result-header">
                {analysisResult.message}
              </div>
              
              {analysisResult.success && analysisResult.detectedPatterns && analysisResult.detectedPatterns.length > 0 && (
                <div className="result-details">
                  <strong>Deception Patterns Detected:</strong>
                  {analysisResult.detectedPatterns.map((pattern: any, index: number) => (
                    <div key={index} className="detected-pattern">
                      <div className="pattern-type">{pattern.category}: {pattern.type}</div>
                      <div style={{margin: '6px 0', fontSize: '13px', fontStyle: 'italic'}}>
                        Why this matters: {pattern.why}
                      </div>
                      <div>{pattern.explanation}</div>
                      <div className="pattern-confidence">{pattern.confidence}% confidence | +{pattern.riskScore} risk points</div>
                    </div>
                  ))}
                </div>
              )}

              {analysisResult.success && analysisResult.combinationWarning && (
                <div style={{
                  background: 'rgba(244, 67, 54, 0.1)',
                  border: '1px solid #F44336',
                  borderRadius: '8px',
                  padding: '12px',
                  margin: '12px 0',
                  fontSize: '14px'
                }}>
                  <strong style={{color: '#F44336'}}>⚠️ {analysisResult.combinationWarning.type}</strong>
                  <div style={{marginTop: '4px'}}>{analysisResult.combinationWarning.explanation}</div>
                </div>
              )}

              {analysisResult.success && analysisResult.educationalInsight && (
                <div style={{
                  background: 'rgba(26, 26, 26, 0.05)',
                  borderRadius: '8px',
                  padding: '12px',
                  margin: '12px 0',
                  fontSize: '14px',
                  borderLeft: '4px solid #1A1A1A'
                }}>
                  <strong>💡 Understanding Deception Patterns:</strong>
                  <div style={{marginTop: '4px'}}>{analysisResult.educationalInsight}</div>
                </div>
              )}

              {analysisResult.success && analysisResult.platform && (
                <div style={{fontSize: '14px', color: '#666', marginBottom: '12px'}}>
                  Platform: {analysisResult.platform.charAt(0).toUpperCase() + analysisResult.platform.slice(1)}
                </div>
              )}

              {analysisResult.success && analysisResult.recommendations && analysisResult.recommendations.length > 0 && (
                <div className="recommendations">
                  <h4>Safety Recommendations:</h4>
                  {analysisResult.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="recommendation">{rec}</div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          <div className="upload-option">
            or <span 
              className="upload-link"
              onClick={() => alert('File upload feature coming soon!')}
            >
              upload an audio/video file
            </span>
          </div>

          <div className="platform-support">
            <span className="platform-badge">YouTube</span>
            <span className="platform-badge">TikTok</span>
            <span className="platform-badge">Instagram</span>
            <span className="platform-badge">Facebook</span>
            <span className="platform-badge">Audio Files</span>
          </div>

          {/* Email Signup */}
          <div className="email-signup">
            <h3 className="email-title">Get early access to advanced features</h3>
            <form 
              className="email-form"
              onSubmit={(e) => {
                e.preventDefault();
                const emailInput = document.getElementById('email-input') as HTMLInputElement;
                const email = emailInput?.value;
                if (email) {
                  alert('Thanks for joining the waitlist! We will be in touch soon.');
                  emailInput.value = '';
                }
              }}
            >
              <input 
                type="email" 
                className="email-input" 
                placeholder="Enter your email"
                id="email-input"
              />
              <button type="submit" className="email-button">Join Waitlist</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}