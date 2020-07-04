import React, { useContext } from "react";
import { Context } from "../store";

const withContext = (WrappedObject) => {
  return (props) => {
    const [state, dispatch] = useContext(Context);
    return (
      <WrappedObject {...props} state={state.appState}>
        {props.children}
      </WrappedObject>
    );
  };
};

export default withContext;
