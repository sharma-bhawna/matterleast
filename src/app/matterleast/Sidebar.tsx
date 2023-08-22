import "./Sidebar.css";

type SidebarProps = {
  workspace: string;
};

interface ChannelsProps {
  channels: string[];
};

const Channels = (channelsProps: ChannelsProps) => {
  return <section className="channels">
    <h4>CHANNELS</h4>
    <div>
      {...channelsProps.channels.map(channel => {
        return <p key={channel} className="channel-name">{channel}</p>;
      })}
    </div>
  </section>
}

const channels = [
  'Off-Topic',
  'Random',
  'Townhall',
  'General',
  'Sports',
  'Cricket',
];

const Sidebar = ({ workspace }: SidebarProps) => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <span className="workspace">{workspace}</span>
      <div className="plus">+</div>
      <span className="filter">Filter</span>
      <input placeholder={"search"} className="search" />
      <span className="threads">Threads</span>
    </div>
    <nav>
      <Channels channels={channels} />
    </nav>
  </aside>
);

export default Sidebar;
