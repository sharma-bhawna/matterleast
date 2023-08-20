import "./Sidebar.css";

type SidebarProps = {
  workspace: string;
  channelNames: string[];
  profileNames: string[];
};

const Sidebar = ({ workspace }: SidebarProps) => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <span className="workspace">{workspace}</span>
      <div className="plus">+</div>
      <span className="filter">Filter</span>
      <input placeholder={"search"} className="search" />
      <span className="threads">Threads</span>
    </div>
    <nav></nav>
  </aside>
);

export default Sidebar;
