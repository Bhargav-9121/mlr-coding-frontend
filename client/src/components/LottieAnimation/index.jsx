import React from 'react';

const LottieAnimation = ({ src, width, height, loop = true, autoplay = true, speed = 1 ,onAnimationLoad}) => {
  // Ensure the script is loaded only once
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      script.async = true; // Load script asynchronously for better performance

      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }
  }, [scriptLoaded]); // Only load the script if not already loaded


  return (
    
    <div style={{ width, height }}>
      {scriptLoaded && <dotlottie-player // Render the player only after script loads
        src={src}
        background="transparent"
        speed={speed}
        loop={loop}
        autoplay={autoplay}
      />}
    </div>
    
  );
  
  
};

export default LottieAnimation;
