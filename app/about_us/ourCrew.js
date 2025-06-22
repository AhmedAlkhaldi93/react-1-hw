import { CrewMember } from "@/components/our-crew/OurCrew";

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <h3>Description</h3>
      <p>
        <br />Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.
      </p>
      <CrewMember
        name="Captain Sarah Vega"
        description="A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration."
        image="image-anousheh-ansari.png"
      />

      <CrewMember
        name="Dr. Leo Redding"
        description="Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating."
        image="image-douglas-hurley.png"
      />

      <CrewMember
        name="Chief Engineer Hana Lee"
        description="With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands."
        image="image-mark-shuttleworth.png"
      />

      <CrewMember
        name="Mission Specialist Alex Santos"
        description="As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers."
        image="image-victor-glover.png"
      />

      <CrewMember
        name="Crew Member Maya Patel"
        description="Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience."
        image="mayaPate.jpg"
      />

    </div>
  );
}

export default OurCrew;