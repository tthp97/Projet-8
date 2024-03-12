export default function ArrowCollapse({ visible, toggle }) {
  let returnClassAngleDown = "fa-solid fa-angle-down";
  if (!visible) {
    returnClassAngleDown += " reverse";
  }
  return <i onClick={toggle} className={returnClassAngleDown}></i>;
}
