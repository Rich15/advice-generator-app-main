import styled from "styled-components";

export const Spinner = styled.div`
  margin: 2% auto;
  width: 50px;
  height: 50px;
  border: 5px solid hsl(0, 0%, 80%);
  border-top: 5px solid hsl(0, 0%, 70%);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
