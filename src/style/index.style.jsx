import styled from "styled-components";

export const TodoList = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TodoForms = styled.div`
  padding-bottom:1em;
`;

export const Apps = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  background-color: #efefef;
`;

export const WraperDiv = styled.div`
  max-width:100%;
`;

export const Box = styled.div`
  width: 650px;
  height: 50px;
  background-color: #fff;
  margin: 5px
`;

export const Grid = styled.div`
  align-items:center;
  justify-content:center;
  display:flex;
  margin: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
`;

export const Subtitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 5px;
`;

export const Category = styled.p`
  font-size: 0.8em;
  color: #888;
`;

export const Input = styled.input`
  border: 0;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  border-radius: 0;

  &[type="text"] {
    padding: .7rem 1rem !important;
    border-radius: 5px
  }
`;

export const BtnRemove = styled.button`
  background-color: #333974;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
  background:#a94442;

  &:hover {
    opacity: 1;
  }
`;
export const Button = styled.button`
  background-color: #333974;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;


  &:hover {
    opacity: 1;
  }
`;

export const Form = styled.form`
  position: relative;
`;



