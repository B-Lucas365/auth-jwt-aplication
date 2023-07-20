import { Container, Content, Form } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn} = useContext(AuthContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>USER LOGIN</h1>
          <div className="login">
            <div className="input-container">
              <PersonIcon className="icon" />
              <input
                type="email"
                value={email}
                placeholder="Username"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="divider"></div>

            <div className="input-container">
              <LockIcon className="icon" />
              <input
                type="password"
                name="password"
                placeholder="***********"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="button-submit">
            <button type="submit">LOGIN</button>
          </div>
        </Form>
      </Content>
    </Container>
  );
};
