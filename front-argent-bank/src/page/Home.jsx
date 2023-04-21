import { FeatureItem } from "../component/FeatureItem";
import { Banner } from "../component/layout/Banner";
import iconChat from "../asset/icon-chat.png";
import iconMoney from "../asset/icon-money.png";
import iconSecurity from "../asset/icon-security.png";
import "../styles/home.css"

export function Home() {
  return (
    <main>
      <Banner />
      <section className="features">
      <h2 className="sr-only">Features</h2>
        <FeatureItem
          picture={iconChat}
          title="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          picture={iconMoney}
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          picture={iconSecurity}
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}
