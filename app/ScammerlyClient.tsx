'use client';

export default function ScammerlyClient() {
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
          background: linear-gradient(135deg, #E3F2FD 0%, #FFF9E6 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Floating background blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          z-index: 0;
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          background: #E8F5F0;
          top: -100px;
          right: -50px;
          border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
        }

        .blob-2 {
          width: 200px;
          height: 200px;
          background: #FFF9E6;
          bottom: 100px;
          left: -50px;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        .blob-3 {
          width: 150px;
          height: 150px;
          background: #E8F5F0;
          top: 50%;
          right: 10%;
          border-radius: 50% 30% 70% 50% / 60% 70% 30% 40%;
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
          border: 2px solid #E3F2FD;
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
          background: #E8F5F0;
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
          border: 2px solid #E3F2FD;
          border-radius: 8px;
          font-size: 14px;
          min-width: 250px;
        }

        .email-input:focus {
          outline: none;
          border-color: #1A1A1A;
        }

        .email-button {
          background: #FFF9E6;
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

        .blob {
          animation: float 8s ease-in-out infinite;
        }

        .blob-2 {
          animation-delay: -2s;
        }

        .blob-3 {
          animation-delay: -4s;
        }
      `}</style>

      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

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
        <h1 className="hero-title">Don't Get Scammed.<br />Get Scammerly.</h1>
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
          <h2 className="testing-title">AI Scams Are Everywhere. We'll Spot Them First.</h2>
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
              onClick={() => {
                const input = document.getElementById('url-input') as HTMLInputElement;
                const url = input?.value.trim();
                if (url) {
                  alert('Analyzing: ' + url + '\n\nThis is a demo - real analysis coming soon!');
                } else {
                  alert('Please paste a URL to analyze');
                }
              }}
            >
              Analyze Link
            </button>
          </div>
          
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
                  alert('Thanks for joining the waitlist! We\'ll be in touch soon.');
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