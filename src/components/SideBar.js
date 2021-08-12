import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function SideBar() {
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
