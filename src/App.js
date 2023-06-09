import "./App.css";
import { useState } from "react";
import Accordion from "./accordion";

function App() {
  const [list] = useState([
    {
      title: "Do I Have To Allow The Use Of Cookies?",
      text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      title: "How Do I Change My My Page Password?",
      text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      title: "What Is BankID?",
      text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      title: "Whose Birth Number Can I Use?",
      text: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      title: "When Do I Recieve A Password Ordered By Letter?",
      text: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
    },
  ]);

  return (
    <div className='App'>
      <h1 className="site-title">Questions</h1>
      {list.map((item) => {
        return <Accordion title={item.title} text={item.text} />;
      })}
    </div>
  );
}

export default App;
