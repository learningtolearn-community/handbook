import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Continuous Growth and Adaptation",
    image: require("@site/static/img/continuous-growth.png").default,
    description: (
      <>
        Whether you're a student, professional, or a curious mind, our handbook
        offers insights into staying adaptable, overcoming challenges, and
        continuously updating your skills in an ever-changing world.
      </>
    ),
  },
  {
    title: "Master Time Management",
    image: require("@site/static/img/master-time.png").default,
    description: (
      <>
        From prioritizing tasks to avoiding procrastination, the handbook
        provides practical tools and tips to help you efficiently balance
        learning with your daily life, ensuring consistent progress and
        satisfaction.
      </>
    ),
  },
  {
    title: "Adapt your learning",
    image: require("@site/static/img/adapt-learning.png").default,
    description: (
      <>
        Discover the power of effective learning strategies tailored to your
        personal style and needs, to unlock your full potential, making learning
        faster, more enjoyable, and deeply rewarding.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
