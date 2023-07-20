import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 1240px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--text-color);
  padding: 0 1rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .notifications {
    display: flex;
    gap: 1rem;
    .icons {
      color: var(--button-color);
      font-size: 2rem;
      cursor: pointer;
    }
  }

  .divider {
    height: 30%;
    width: 2px;
    background-color: var(--button-color);
  }

  .profile {
    display: flex;
    align-items: center;
    p{
      font-size: 12px;
    }

    .user-icon {
      font-size: 2.5rem;
      color: var(--button-color);
    }
  }
`;
