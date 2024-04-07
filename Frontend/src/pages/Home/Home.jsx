import React from "react";
import img from "../../assets/img1.png";
import img2 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="main">
        <div className="page1 h-screen">
          <div className="left">
            <img src={img} alt="logo" className="patch" />
            <span className="text1">Welcome to</span>
            <span className="text2">SeaGreen</span>
            <span className="text3">
              Dedicated to detect & combating marine
            </span>
            <span className="text4">plastic pollution.</span>
            <div className="discover">
              <a href="/">Discover</a>
            </div>
            <img src={img2} alt="patch2" className="patch2" />
            <div className="button_start">
              <button className="button center">Let's Start</button>
            </div>
          </div>
        </div>

        <div className="page2 h-screen">
          <p>Real Time between Year vs Marine plastic pollution</p>
          <iframe
            title="hackskill"
            src="https://app.powerbi.com/view?r=eyJrIjoiYmQ0OThlNzAtNTQ5OS00MzQ2LWExY2UtOGFhZGZkNDI1YTdkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            frameborder="10"
            allowFullScreen="true"
            // inputMode="full-width"
            width={500}
          ></iframe>
        </div>
        <div className="page3 h-screen flex items-center justify-center">
          <div className="page3m">
            <p>
              <h1>The Ecological Impact of Marine Plastic Pollution</h1>
              Marine plastic pollution has a profound and detrimental impact on
              ecosystems around the world. This pervasive issue threatens marine
              life, habitats, and the overall health of our oceans. Here's a
              detailed look at the ecosystem impacts of marine plastic
              pollution:
              <ul className="homeul mt-3 mb-3">
                <li>Direct Harm to Marine Life</li>
                <li>Chemical Contamination</li>
                <li>Habitat Destruction</li>
                <li>Transport of Invasive Species</li>
                <li>Microplastics Contamination</li>
                <li>Disruption of Carbon Sequestration</li>
                <li>Economic and Social Impact</li>
              </ul>
              Marine plastic pollution is a complex environmental challenge that
              requires urgent action at local, national, and global levels.
              Mitigating its impact on ecosystems involves reducing plastic
              waste at its source, implementing effective waste management
              strategies, and promoting sustainable alternatives to single-use
              plastics. By addressing this issue comprehensively, we can protect
              marine ecosystems and secure the health and well-being of present
              and future generations.
            </p>
            <img src={img4} alt="turtle image" className="patch4" />
          </div>
        </div>
        <div className="page4 h-screen flex items-center justify-center">
          <div className="page3m">
            <img src={img4} alt="turtle image" className="patch4" />
            <p>
              <h1>Take Action Against Marine Plastic Pollution</h1>
              Marine plastic pollution is a global crisis that demands action
              from individuals, communities, and governments worldwide. Every
              small effort counts towards mitigating this environmental threat
              and safeguarding our oceans for future generations. Here are some
              meaningful ways you can take action against marine plastic
              pollution:
              <ul className="homeul mt-3 mb-3">
                <li>Reduce Single-Use Plastics.</li>
                <li>Participate in Beach Cleanups</li>
                <li>Dispose of Waste Properly</li>
                <li>Support Plastic-Free Initiatives</li>
                <li>Educate Others</li>
                <li>Choose Sustainable Products:</li>
                <li>Reduce Microplastic Pollution</li>
                <li>Support Ocean Conservation Organizations</li>
                <li>Engage with Your Community</li>
              </ul>
              Remember, every action, no matter how small, contributes to the
              collective effort to address marine plastic pollution. By taking
              proactive steps and inspiring others to join in, we can make a
              meaningful impact in preserving the health and integrity of our
              oceans. Together, let's strive towards a cleaner, healthier future
              for our planet and all its inhabitants.
            </p>
          </div>
        </div>
        <div className="page5 h-screen">
          
        </div>
      </div>
    </>
  );
}

export default Home;
