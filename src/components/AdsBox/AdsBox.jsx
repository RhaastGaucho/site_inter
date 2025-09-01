import './AdsBox.css';

function AdsBox() {
  return (
    <div className="ads-box">
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-xxxxxxxxxxxx"   
        data-ad-slot="1234567890"             
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </div>
  );
}

export default AdsBox;