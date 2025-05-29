import "./LeftSidebar.css";
import Link from 'next/link';

const LeftSidebar = () => {
  return (
    <div className="Space">
      <div className="Logo">
        <h2>Logo</h2>
      </div>
      <div className="Links">
        <Link href="/home">Home</Link>
      </div>
       <div className="Links">
        <Link href="/explore">Explore</Link>
      </div>
      <div className="Links">
        <Link href="/notifications">Notifications</Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
