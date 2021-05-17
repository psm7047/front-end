import { Link } from "react-router-dom";

function AppMenu() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link to="/" className="nav-link text-warning">Home</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch01ComponentDeclaration</h6>
        <Link to="/ch01/comA" className="nav-link text-warning">ComA 함수형 컴포넌트</Link>
        <Link to="/ch01/comB" className="nav-link text-warning">ComA 클래스형 컴포넌트</Link>
      </li>
    </ul>
  );
} 

export default AppMenu;