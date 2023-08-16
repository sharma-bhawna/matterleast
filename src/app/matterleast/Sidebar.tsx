import "./Sidebar.css";

type SidebarProps = {
  workspace: string;
  channelNames: string[];
  profileNames: string[];
};

const Sidebar = ({ workspace }: SidebarProps) => (
  <aside className="sidebar">
    <span>{workspace}</span>
    <input placeholder={"search"} />
    <nav></nav>
  </aside>
);

export default Sidebar;
