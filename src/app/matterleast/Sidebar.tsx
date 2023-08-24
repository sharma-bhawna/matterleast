import "./Sidebar.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

type SidebarProps = {
  workspace: string;
};

interface ChannelsProps {
  title: string;
  channels: string[];
}

const Channels = (channelsProps: ChannelsProps) => {
  return (
    <section className="channels">
      <h5>{channelsProps.title}</h5>
      <div>
        {...channelsProps.channels.map((channel) => {
          return <ChannelName key={channel}>{channel}</ChannelName>;
        })}
      </div>
    </section>
  );
};

const ChannelName = styled.p`
  font-size: 14px;
  color: rgb(127, 133, 144);
  margin: 0;
  padding: 5px 20px;
  cursor: pointer;
`;

const dms = ["Aftab", "Suman", "Tilak Puli", "Sapana", "Rishabh", "Arnob"];

const Sidebar = ({ workspace }: SidebarProps) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch("/api/channels")
      .then((res) => res.json())
      .then((channels) => setChannels(channels));
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="workspace">{workspace}</span>
        <div className="plus">+</div>
        <span className="filter">Filter</span>
        <input placeholder={"search"} className="search" />
        <span className="threads">Threads</span>
      </div>
      <nav className="nav">
        <Channels title="CHANNELS" channels={channels} />
        <Channels title="DIRECT MESSAGES" channels={dms} />
      </nav>
    </aside>
  );
};

export default Sidebar;
