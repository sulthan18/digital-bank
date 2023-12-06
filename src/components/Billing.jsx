import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="Billing" className="w-full h-full relative z-5" />

      {/* Gradient */}
      <div className="absolute z-3 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
      <div className="absolute z-0 w-1/2 h-1/2 -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily Control Your
        <br className="sm:block hidden" /> Billing & Invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Manage your billing and invoicing with ease. Our platform provides elite
        solutions for efficient management of financial transactions. Experience
        the convenience of streamlined processes and secure data handling.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="Download on the App Store"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="Get it on Google Play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
