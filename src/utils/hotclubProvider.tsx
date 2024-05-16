import { createContext, useState, useContext } from "react";

interface HotClubContextType {
  hotClub: string;
  setHotClub: (value: string) => void;
  rootShouldRenderEmptyState: boolean;
  toggleRootShouldRenderEmptyState: () => void;
  mode: "serverless" | "stack" | string;
  toggleMode?: (mode: "serverless" | "stack") => void;
}

const defaultHotClubContext = {
  hotClub: "Hot Club",
  setHotClub: () => {},
  rootShouldRenderEmptyState: false,
  toggleRootShouldRenderEmptyState: () => {},
  mode: "stack",
  toggleMode: () => {},
};

export const HotClubContext = createContext<HotClubContextType>(
  defaultHotClubContext,
);

export const HotClubProvider = ({ children }: any) => {
  const [hotClub, setHotClub] = useState("Hot Club");
  const [rootShouldRenderEmptyState, setRootShouldRenderEmptyState] =
    useState(false);
  const [mode, setMode] = useState<"serverless" | "stack">("stack");

  console.log("Hot Club Provider", HotClubContext);

  const toggleRootShouldRenderEmptyState = () => {
    console.log("Toggling root empty state");
    setRootShouldRenderEmptyState((prev) => !prev);
  };

  const toggleMode = (mode: "serverless" | "stack") => {
    setMode(mode);
  };

  return (
    <HotClubContext.Provider
      value={{
        hotClub,
        setHotClub,
        rootShouldRenderEmptyState,
        toggleRootShouldRenderEmptyState,
        mode,
        toggleMode,
      }}
    >
      {children}
    </HotClubContext.Provider>
  );
};
