import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #264653;

  .board {
    display: flex;
    width: 170px;

    flex-wrap: wrap;
    margin: 10px;

    .cell {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #fff;
      margin: 2px;
      cursor: pointer;
      border-radius: 5px;
      color: #fff;

      box-shadow: 1px 1px 5px 1px #000;
    }

    .cell.O {
      background-color: #2a9d8f;
    }
    .cell.X {
      background-color: #e78f51;
    }
  }
  .board.gameOver {
    opacity: 0.3;
  }
`;
