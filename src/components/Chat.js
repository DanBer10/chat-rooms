import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useRef, useEffect } from "react";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const chatRef = useRef();

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.key}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 20px;
  margin-top: 50px;
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 45px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid lightgray;
  background-color: #e0e4e8;
  position: fixed;
  width: 90%;
  max-height: 9px;
  height: 100%;
  margin-top: 15px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div`
  margin-bottom: 120px;
  margin-top: 80px;
`;
