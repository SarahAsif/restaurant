import React from "react";
import Curve from "../image/curve.png";
import user1 from "../image/user1.png";
import user2 from "../image/user2.png";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
const Testimonial = () => {
  const testimonials = [
    {
      name: "Natasha Malik",
      img: user1,
      country: "California",
      feedback:
        "Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few mr at discretion reasonable. Age out full gate bed day lose.",
    },
    {
      name: "AR Shakir",
      img: user2,
      country: "Arizona",
      feedback:
        "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.",
    },
  ];
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div>
      <div className="flex flex-col space-y-20">
        <div>
          <div className="flex flex-col font-bold items-center text-center mt-8 ">
            <div className="App uppercase">Testimonial</div>
            <div className="text-red-600 font-bold text-4xl font-serif flex items-center text-center">
              <div>What They Saying</div>
            </div>
            <img src={Curve} className="text-left items-start" />
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-row justify-around",
            mobileWidth && "flex-col p-4"
          )}
        >
          {testimonials.map((id) => (
            <div className="flex flex-row  gap-5">
              <div>
                <img src={id.img} />
              </div>

              <div classname="text-left items-center  flex flex-row">
                <div className="flex flex-col space-y-2 justify-around items-left text-left max-w-md">
                  <div className="font-semibold">{id.name}</div>
                  <div>{id.country}</div>
                  <div>stars</div>
                  <div>{id.feedback}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
