import React, { useEffect } from "react";

function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6851649371418424"
      data-ad-slot="3871179557"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default Adsense;
