import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100vh;
  margin: auto;
  display: grid;
  align-self: center;
`;

export const Content = styled.div`
  width: 400px;
  margin: auto;
`;

export const Form = styled.form`
  h1 {
    font-weight: 100;
    text-align:  center;
  }

  .login {
    display: flex;
    flex-direction: column;
    background-color: var(--base-color);
    padding: 1rem 2rem;
    gap: 0.8rem;
    margin-top: 2rem;

    .input-container {
      display: flex;
      align-items: center;

      .icon {
        color: var(--text-color);
      }

      input {
        border: none;
        padding: 0.8rem;
        width: 100%;
        height: 100%;
        outline: none;
        color: var(--text-color);

        &::placeholder {
          color: #000;
        }
      }
    }
    .divider {
      height: 1.6px;
      width: 98%;
      margin: auto;
      background-color: var(--text-color);
    }
  }

  .button-submit {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: .5rem;
    justify-content: center;
    background-color: var(--button-color);
    height: 4rem;

    button{
        border: none;
        background: transparent;
        color: var(--base-color);
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
  }
`;
