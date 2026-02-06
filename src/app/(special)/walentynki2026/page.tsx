"use client";

import { useState, useRef } from "react";

export default function ValentinePage() {
  const [revealed, setRevealed] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [runningAway, setRunningAway] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" }); // Initial position to right of Yes
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHeartClick = () => {
    setRevealed(true);
  };

  const handleNoInteraction = () => {
    setRunningAway(true);
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const padding = 50; // Keep away from edges
      const newTop = Math.random() * (containerRect.height - 100) + padding;
      const newLeft = Math.random() * (containerRect.width - 150) + padding;
      setNoPosition({ top: `${newTop}px`, left: `${newLeft}px` });
    }
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  if (yesClicked) {
    return (
      <main className="container">
         <h1 className="success-text">Wiedziałem! ❤️ Jesteś najlepsza!</h1>
         <div className="hearts-bg">
            {[...Array(20)].map((_, i) => (
                <i key={i} className="fa-solid fa-heart floating-heart" style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 30 + 10}px`
                }}></i>
            ))}
         </div>
         <style jsx>{`
            .container {
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
                overflow: hidden;
            }
            .success-text {
                font-size: 3rem;
                color: #e91e63;
                text-align: center;
                animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 10;
            }
            .hearts-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }
            .floating-heart {
                position: absolute;
                color: rgba(255, 255, 255, 0.6);
                bottom: -50px;
                animation: floatUp 4s linear infinite;
            }
            @keyframes popIn {
                0% { opacity: 0; transform: scale(0.5); }
                100% { opacity: 1; transform: scale(1); }
            }
            @keyframes floatUp {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-120vh); opacity: 0; }
            }
         `}</style>
      </main>
    );
  }

  return (
    <main className="container" ref={containerRef}>
      {!revealed ? (
        <div className="heart-wrapper" onClick={handleHeartClick}>
          <div className="heart"></div>
          <p className="click-me">Kliknij mnie!</p>
        </div>
      ) : (
        <div className="question-box">
          <h1>Zostaniesz mojom walentynkom Maru?</h1>
          <div className="buttons">
            <button className="btn yes-btn" onClick={handleYesClick}>TAK</button>
            <button 
                className="btn no-btn" 
                style={{ top: noPosition.top, left: noPosition.left, position: runningAway ? 'fixed' : 'static' }}
                onMouseEnter={handleNoInteraction}
                onClick={handleNoInteraction}
            >
                NIE
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffe6e6;
          overflow: hidden;
          position: relative;
          font-family: 'Arial', sans-serif;
        }
        
        /* Heart Animation */
        .heart-wrapper {
            position: relative;
            cursor: pointer;
            animation: heartbeat 1.5s infinite;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .heart {
          background-color: #ff3366;
          display: inline-block;
          height: 100px;
          margin: 0 10px;
          position: relative;
          transform: rotate(-45deg);
          width: 100px;
        }
        .heart:before,
        .heart:after {
          content: "";
          background-color: #ff3366;
          border-radius: 50%;
          height: 100px;
          position: absolute;
          width: 100px;
        }
        .heart:before {
          top: -50px;
          left: 0;
        }
        .heart:after {
          left: 50px;
          top: 0;
        }
        .click-me {
            margin-top: 60px;
            color: #ff3366;
            font-size: 1.2rem;
            font-weight: bold;
        }

        /* Question Box */
        .question-box {
            text-align: center;
            z-index: 10;
        }
        h1 {
            color: #d63384;
            font-size: 2.5rem;
            margin-bottom: 3rem;
        }
        .buttons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            /* Provide a relative context for static layout initially if needed, 
               but we switch 'NO' to fixed for absolute freedom */
        }
        .btn {
            font-size: 1.5rem;
            padding: 1rem 3rem;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: transform 0.2s;
            font-weight: bold;
        }
        .yes-btn {
            background-color: #4CAF50;
            color: white;
            box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
        }
        .yes-btn:hover {
            transform: scale(1.1);
        }
        .no-btn {
            background-color: #f44336;
            color: white;
            box-shadow: 0 5px 15px rgba(244, 67, 54, 0.4);
            /* Positioning logic handled inline */
             transition: top 0.2s ease, left 0.2s ease;
        }

        @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
