import "./Collapse.css";
import { useState } from "react";
import DescriptionCollapse from "../DescriptionCollapse/DescriptionCollapse";
import { Fade } from "../Fade/Fade";
import ArrowCollapse from "../ArrowCollapse/ArrowCollapse";
function Collapse({ id, title, description, equipements }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <article key={id} className="collapseBar">
      <div className="titleBanner">
        <p className="titleCollapse">{title}</p>
        <ArrowCollapse toggle={toggle} visible={open} />
      </div>

      <Fade visible={open}>
        <DescriptionCollapse
          description={description}
          equipements={equipements}
          id={id}
        />
      </Fade>
    </article>
  );
}

export default Collapse;
