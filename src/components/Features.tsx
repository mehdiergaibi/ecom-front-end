import { FiPhoneCall } from "react-icons/fi";
import {
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
  LiaShippingFastSolid,
} from "react-icons/lia";
import FeaturesCard from "./FeaturesCard";

const data = [
  {
    title: "Free and Fast Shipping",
    icon: <LiaShippingFastSolid />,
    desc: "Experience the convenience of our free and lightning-fast shipping service.",
  },
  {
    title: "Best Prices",
    icon: <LiaMoneyBillWaveSolid />,
    desc: "Shop with confidence knowing you're getting the best prices on high-quality products.",
  },
  {
    title: "Free Curbside Pickup",
    icon: <LiaGiftSolid />,
    desc: "Skip the wait and pick up your purchases safely and hassle-free right from your vehicle.",
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
    desc: "Our dedicated team is here for you 24/7, ready to assist with any questions or concerns you may have.",
  },
];

function Features() {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((feature) => (
          <FeaturesCard
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            desc={feature.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
