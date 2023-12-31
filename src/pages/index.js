import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import successStories from "../data/successStories";

const FEATURES = [
  {
    title: <>🧩 Tailored Learning Strategies</>,
    description: (
      <>
        Discover learning techniques tailored to your unique style and needs,
        ensuring a more personalized and effective learning experience.
      </>
    ),
    link: "/#",
  },
  {
    title: <>😌 Comprehensive Content</>,
    description: (
      <>
        Delve into a wide range of topics from basic learning theories to
        advanced techniques, providing a one-stop-shop for all your learning
        needs.
      </>
    ),
    link: "/#",
  },
  {
    title: <>🤺 Practical and Actionable Tips</>,
    description: (
      <>
        Gain access to practical tips and exercises that you can immediately
        implement, transforming theory into real-world success.
      </>
    ),
    link: "/#",
  },
  {
    title: <>🧠 Boost Your Brainpower</>,
    description: (
      <>
        Enhance your cognitive abilities, including memory, focus, and critical
        thinking, crucial skills for lifelong success and personal growth.
      </>
    ),
    link: "/#",
  },
  {
    title: <>🧪 Grow with Challenges</>,
    description: (
      <>
        Learn how to adapt your learning process as you face new challenges and
        environments, keeping you resilient and versatile in a constantly
        changing world.
      </>
    ),
    link: "/#",
  },
  {
    title: <>📈 Ongoing Guidance</>,
    description: (
      <>
        Benefit from a guide that grows with you. Continuous updates and a
        supportive community ensure you're always equipped with the latest in
        learning science.
      </>
    ),
    link: "/#",
  },
];

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout>
      <HeroSection />
      <WhatIsThisSection />
      <HowToUseSection />
      <FeaturesSection />
      <PreFooterSection />
    </Layout>
  );
}

function Tweet({ url, handle, name, content, avatar, date }) {
  return (
    <div className={clsx("card", styles.tweet)}>
      <div className="card__header">
        <div className="avatar">
          <img alt={name} className="avatar__photo" src={avatar} />
          <div className="avatar__intro">
            <div className={styles.tweet}>
              <strong>{name}</strong>{" "}
              <span className={styles.tweetMeta}>
                @{handle} &middot;{" "}
                <a className={styles.tweetMeta} href={url} rel="noopener">
                  {date}
                </a>
              </span>
            </div>
            <div>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          alt={siteConfig.title}
          className={clsx(styles.heroBannerLogo, "margin-vert--md")}
          src={useBaseUrl("img/logo.png")}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {siteConfig.tagline} <br />
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--primary button--lg")}
            to="/intro"
          >
            Start reading now&nbsp;&nbsp;→
          </Link>
        </div>
        <p className="margin-top--md" style={{ fontSize: 16, fontWeight: 600 }}>
          Or check out our <a href="/blog">Blog articles</a>
        </p>
        <div className="margin-top--lg">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=learningtolearn-community&repo=handbook&type=star&count=true&size=large"
            width={170}
            height={30}
            title="GitHub Stars"
          />
        </div>
      </div>
    </header>
  );
}

function WhatIsThisSection() {
  return (
    <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2 className="text--center margin-bottom--lg">
              <span className="badge badge--primary">What is this?</span>
            </h2>
            <h3
              className={clsx(
                "text--center",
                "margin-bottom--lg",
                styles.sectionTitle
              )}
            >
              "Learning to Learn" is a transformative approach that goes beyond
              traditional learning methods
            </h3>
            <p className={clsx("margin-bottom--lg", styles.sectionTagline)}>
              It's about understanding <strong>how your brain works</strong>,
              discovering the most effective strategies for absorbing
              information, and adapting these methods to suit your personal
              needs and goals. <br />
              <br />
              This handbook is your guide through this journey, offering
              insights into cognitive processes, practical tips for enhancing
              memory and understanding, and strategies to keep you motivated and
              engaged. <br />
              <br />
              Whether you're a{" "}
              <strong>student, professional, or a curious mind</strong>,
              mastering the art of learning to learn is about opening doors to
              endless possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoraSection() {
  // Because the SSR and client output can differ and hydration doesn't patch attribute differences,
  // we'll render this on the browser only.
  return (
    <BrowserOnly>
      {() => (
        <div className={clsx("padding-vert--lg", styles.sectionSponsor)}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="margin-vert--lg text--center">
                  <div>
                    <h2 className={styles.sectionSponsorTitle}>
                      <strong>
                        Get paid more. Receive risk-free salary negotiation
                        advice from Rora. You pay nothing unless your offer is
                        increased.
                      </strong>
                    </h2>
                    <div className="margin-vert--lg">
                      <a
                        className="button button--secondary button--lg"
                        href="https://www.teamrora.com/?utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_homepage"
                        rel="noopener"
                        target="_blank"
                        onClick={() => {
                          window.gtag("event", "rora.homepage.click");
                        }}
                      >
                        Get risk-free negotiation advice&nbsp;&nbsp;→
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
}

function HowToUseStep({ index, title, ctaLink, contents }) {
  return (
    <div className={clsx("card", styles.howToUseStep)}>
      <div className="card__header">
        <div className="margin-bottom--sm">
          <small className={styles.howToUseStepLabel}>STEP {index}</small>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <ul>
          {contents.map((content, i) => (
            <li key={i}>{content}</li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        <Link className="button button--primary button--block" to={ctaLink}>
          Read now →
        </Link>
      </div>
    </div>
  );
}

function HowToUseSection() {
  return (
    <div className={clsx("padding-vert--xl", styles.sectionAlt2)}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2 className="text--center margin-bottom--lg">
              <span className="badge badge--primary">
                How to Use This Handbook
              </span>
            </h2>
            <h3
              className={clsx(
                "text--center",
                "margin-bottom--lg",
                styles.sectionTitle
              )}
            >
              Maximize Your Learning Journey
            </h3>
            <p
              className={clsx(
                "text--center",
                "margin-bottom--lg",
                styles.sectionTagline
              )}
            >
              Discover the path to effective learning with four easy steps.
              Start mastering the art of learning and unlock your potential
              today!
            </p>
          </div>
        </div>
        <div className={clsx("row", styles.featuresRow)}>
          <div
            className={clsx("col", "col--3", styles.featuresRowItemContainer)}
          >
            <HowToUseStep
              index={1}
              title={<>Assess Your Learning Style</>}
              contents={[
                <>Take the self-assessment quiz</>,
                <>Reflect on your past learning experiences</>,
                <>Identify your preferred learning mediums</>,
                <>Understand your unique learning challenges</>,
              ]}
              ctaLink="/intro"
            />
          </div>
          <div
            className={clsx("col", "col--3", styles.featuresRowItemContainer)}
          >
            <HowToUseStep
              index={2}
              title={<> Define Your Objectives</>}
              contents={[
                <>Write down your short-term and long-term goals</>,
                <>Create a realistic and achievable plan</>,
                <>Prioritize your learning targets</>,
                <>Break down goals into actionable steps</>,
              ]}
              ctaLink="/intro"
            />
          </div>
          <div
            className={clsx("col", "col--3", styles.featuresRowItemContainer)}
          >
            <HowToUseStep
              index={3}
              title={<>Dive Into Learning</>}
              contents={[
                <>Start with the handbook's foundational concepts</>,
                <>Apply techniques to real-world scenarios</>,
                <>Use interactive exercises to reinforce learning</>,
              ]}
              ctaLink="/intro"
            />
          </div>
          <div
            className={clsx("col", "col--3", styles.featuresRowItemContainer)}
          >
            <HowToUseStep
              index={4}
              title={<>Evaluate and Improve"</>}
              contents={[
                <>Keep a learning journal to track progress</>,
                <>Reflect on what techniques work best for you</>,
                <>Celebrate your successes and learn from challenges</>,
              ]}
              ctaLink="/intro"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2 className="text--center margin-bottom--lg">
              <span className="badge badge--primary">Why this guide</span>
            </h2>
            <h3
              className={clsx(
                "text--center",
                "margin-vert--lg",
                styles.sectionTitle
              )}
            >
              Embrace the Art of Learning
            </h3>
            <div className={clsx("row", styles.featuresRow)}>
              {FEATURES.map(({ title, description, link }, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "col",
                    "col--4",
                    styles.featuresRowItemContainer
                  )}
                >
                  <div className={clsx("card", styles.featuresRowItem)}>
                    <h3 className={styles.featuresRowItemTitle}>{title}</h3>
                    <p className={styles.featuresRowItemDescription}>
                      {description}
                    </p>
                    {link && (
                      <Link className={styles.featuresRowItemLink} to={link}>
                        <strong>Read now →</strong>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreFooterSection() {
  return (
    <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h2>Take the next step</h2>
          </div>
          <div className="col col--8">
            <p className={clsx(styles.sectionTagline)}>
              Ready to transform the way you learn? Dive into the handbook now
              and begin your journey towards mastering the art of learning.{" "}
              <br />
              <br />
              With every page, you'll be one step closer to unlocking your full
              potential. Don't wait!
            </p>
            <Link
              className={clsx("button button--primary button--lg")}
              to="/intro"
            >
              Start reading now&nbsp;&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
