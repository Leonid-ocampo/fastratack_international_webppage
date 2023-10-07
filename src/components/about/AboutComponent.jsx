import React from "react";
import "../about/AboutComponent.css";
import balcon from "../../assets/balcon.jpg";

function AboutComponent() {
  return (
    <section className="section-white">
          <div className="team-item">
            <div className="team-info-primero">
              <h2> Who is FTLI</h2>
              <p>
                We are a team of linguists and language instructors who will
                help you grow communication skills in your target language. We
                shared your interests and learning goals. We want you to SPEAK
                the chosen language confidently, fast and effectively.
              </p>
            </div>

            <div className="team-info-segunda">
              <h2> Goal</h2>
              <p>
                Our goal is to meet our students and support their learning and
                growing journey. Fasttrack-Languages is inspired by the{" "}
                <strong>Montessori method</strong> and the Communicative
                Approach to find effective learning strategies and help our
                students develop language skills in all its forms.
              </p>
            </div>

            <div className="team-info-tercera">
              <h2> Projection</h2>
              <p>
                In 3 years, the vision is to be the language school that can
                grant visas to students from other countries and positions
                itself as a generational academy for the community students
              </p>
            </div>
        </div>
      
    </section>
  );
}

export default AboutComponent;
