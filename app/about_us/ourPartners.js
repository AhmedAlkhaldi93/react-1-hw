import { OurPartner } from "@/components/our-partners/OurPartners";
import styles from "./page.module.css";

export const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <p>
        <br />We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.<br /><br /> 
      </p>
      <div className={styles.ourPartnerDiv}>
      <OurPartner
        name="Amazon"
        image= "amazon_logo.png"
      />
      <OurPartner
        name="alphabet"
        image= "alphabet-logo.png"
      />
      <OurPartner
        name="nyu"
        image= "nyu-logo.png"
      />
      <OurPartner
        name="CBC"
        image= "CBC_Logo_White.png"
      />
      <OurPartner
        name="Microsoft"
        image= "Microsoft-Logo-white.png"
      />
      <OurPartner
        name="samsung"
        image= "samsung-logo.png"
      />
      </div>
    </div>

  );
}

export default OurPartners;