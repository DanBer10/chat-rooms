import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOptions from "./SideBarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function SideBar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SidebarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Daniel Bernhardt
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
      <SideBarOptions Icon={InboxIcon} title="Mentions & reactions" />
      <SideBarOptions Icon={DraftsIcon} title="Saved items" />
      <SideBarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOptions Icon={AppsIcon} title="Apps" />
      <SideBarOptions Icon={FileCopyIcon} title="File Browser" />
      <SideBarOptions Icon={ExpandLessIcon} title="Show less" />
      <SideBarOptions Icon={ExpandMoreIcon} title="Show More" />
      <hr />
      <SideBarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOptions Icon={AddIcon} addChannelOption title="Add channel" />
      {/* // Lägger till namn från firebase databasen. Från addChannel funktionen i
      SideBar.js */}
      {channels?.docs.map((doc) => {
        return (
          <SideBarOptions key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--chat-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  height: 100vh;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    border-radius: 999px;
    padding: 8px;
    color: #49274b;
    background-color: white;
    font-size: 18px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;

    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
