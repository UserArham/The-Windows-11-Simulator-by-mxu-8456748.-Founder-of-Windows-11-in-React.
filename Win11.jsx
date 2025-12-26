import React, { useState } from "react";

const Win11Iframe = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={styles.desktop}>
      {!loaded && (
        <div style={styles.boot}>
          <div style={styles.spinner} />
          <div style={styles.bootText}>Starting Windows</div>
        </div>
      )}

      <div
        style={{
          ...styles.window,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.97)"
        }}
      >
        <iframe
          src="https://win11.blueedge.me"
          title="Windows 11 React"
          onLoad={() => setLoaded(true)}
          style={styles.iframe}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default Win11Iframe;
