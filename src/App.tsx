import { useContext, useState } from "react";
import { RootLayout } from "./shared/components";
import { Outlet, useLocation } from "react-router-dom";

import "@elastic/eui/dist/eui_theme_light.css";
import "./index.scss";
import { EuiProvider } from "@elastic/eui";
import { HomeView } from "./views";
import { HotClubProvider, HotClubContext } from "./utils/hotclubProvider";

const App = () => {
  return (
    <HotClubProvider>
      <EuiProvider colorMode="light">
        <AppInner />
      </EuiProvider>
    </HotClubProvider>
  );
};

const AppInner = () => {
  const location = useLocation();
  const {
    toggleRootShouldRenderEmptyState,
    rootShouldRenderEmptyState,
    mode,
    toggleMode,
  } = useContext(HotClubContext);

  return (
    <div>
      <div
        style={{
          padding: ".5rem 1rem",
          background:
            "linear-gradient(153deg, rgba(165,158,200,1) 0%, rgba(145,98,210,1) 100%)",
          color: "black",
          fontWeight: 700,
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          borderRadius: ".75rem",
          border: "4px solid #FFF",
        }}
      >
        Controls{": "}
        <button
          className="hotClubButton"
          onClick={() => console.log("clicked")}
          // onClick={() =>
          //   toggleMode(mode === "serverless" ? "stack" : "serverless")
          // }
        >
          {mode === "serverless" ? "View stack" : "View serverless"}
        </button>
        <button
          className="hotClubButton"
          onClick={toggleRootShouldRenderEmptyState}
        >
          Toggle Global Empty State: {rootShouldRenderEmptyState ? "On" : "Off"}
        </button>
      </div>
      <RootLayout>
        {location.pathname === "/" ? <HomeView /> : <Outlet />}
      </RootLayout>
    </div>
  );
};

export default App;
