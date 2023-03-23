import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from "react"

import useMessage from "../Hooks/useMessage";
import { UserContext } from "../App";
import { SignOutContext } from "../App";

export default function Navbar() {

  const {  setMessage, removeMessage } = useMessage();


  const user = useContext(UserContext)
  const signOut = useContext(SignOutContext)
  console.log(user)

  const updateMessage = () => { 
    setMessage(null)
  };


  return (
    <nav className="nav">
      <a href="https://abstractpicnic.com/" className="SiteTitle">
        Home{" "}
      </a>
      <ul>
        <CustomLink onClick={updateMessage} to="/materials">
          Materials
        </CustomLink>
        <CustomLink
          onClick={updateMessage}
           to={user.username ? `${user.username}/your-materials` : `/materials`}
        >
          My Materials
        </CustomLink>
        <CustomLink onClick={updateMessage} to="/newMaterial">
          New Material
        </CustomLink>
        <CustomLink onClick={signOut} to="/">
          Sign out
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
