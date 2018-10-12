import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../Components/plus.svg";
import styled from "styled-components";
import { GET_NOTES } from "../../queries";

const Header = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin-left: 10px;
  transform: scale(0.8);
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

const Notes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const NoteTitle = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

export default class NotesContainer extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Title>
            Nomad Notes
            <Link to={"/add"}>
              <Button>
                <Plus />
              </Button>
            </Link>
          </Title>
          <Subtitle>Taking notes while we learn.</Subtitle>
        </Header>
        <Query query={GET_NOTES}>
          {({ data }) =>
            data.notes
              ? data.notes.map(note => (
                  <Link to={`/edit/${note.id}`} key={note.id}>
                    <Note>{note.title}</Note>
                  </Link>
                ))
              : null
          }
        </Query>
      </>
    );
  }
}
