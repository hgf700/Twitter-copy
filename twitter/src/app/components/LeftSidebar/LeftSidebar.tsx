import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="Space">
      <div className="Logo">
        <h2>Logo</h2>
      </div>
      <div className="Home">
        <button>Home</button>
      </div>
       <div className="Explore">
        <button>Explore</button>
      </div>
    </div>
  );
};

export default LeftSidebar;
