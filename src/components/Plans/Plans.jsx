import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { PlansData } from "../../data/PlansData";
const Plans = () => {
    return (
        <div className="Plans-container" id="plans">
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">WITH US</span>
            </div>
            {/* Plans Card */}
            <div className="plans">
                {PlansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="whiteTick" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more	&#8594; </span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
