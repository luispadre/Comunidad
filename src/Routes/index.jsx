import React, { memo, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./../Layout";

import { AuthContext } from "./../Context/Auth.Context";
import { LoadContext } from "./../Context/Load.Context";
import { NotificationContext } from "./../Context/Notification.Context";
import {Rutas} from './DataRoute'
const AuthValue = [];

export default function() {
  const { data: AuthInfo } = useContext(AuthContext);
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  const { data: Notification = [] } = useContext(NotificationContext);

  useEffect(() => {
    toast(<Msg data={Notification} />);
  }, [Notification]);
  return (
    <div>
      <Router>
        <Layout>
          <button
            className="btn btn-primary form"
            onClick={() => {
              changeLoad(!loading);
            }}
          >
            ChangeStatusLoad
          </button>
          {!loading ? (
            <>Loading...</>
          ) : (
            <Switch>
              {Rutas.map((item, i) => {
                
                return <RenderComponent key={i} AuthInfo={AuthInfo} component={item.component}/>;
              })}
            </Switch>
          )}
        </Layout>
      </Router>
    </div>
  );
}

const RenderComponent = props => {
  const { AuthInfo, component } = props;
  if (AuthInfo.token !== undefined) {
    return component
  }
  return <>NO as iniciado sesion</>;
};

const Msg = ({ data }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h4>{data.type}</h4>
          <div>
            <h5>{data.message}</h5>
          </div>
        </div>
        <div />
      </div>
      <h6>{data.owner}</h6>
    </div>
  );
};
