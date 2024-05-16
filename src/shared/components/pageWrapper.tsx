import React from "react";
import { EuiHeader, EuiPageTemplate, EuiHeaderLogo } from "@elastic/eui";

import { useContext } from "react";
import { SideNav } from "./sideNav";
import { ServerlessSideNav } from "./serverlessSideNav";
import { HotClubContext } from "../../utils/hotclubProvider";

interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: PageWrapperProps) => {
  const { mode } = useContext(HotClubContext);
  return (
    <>
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [<EuiHeaderLogo key="elastic">Elastic</EuiHeaderLogo>],
          },
        ]}
      />
      <EuiHeader />
      <EuiPageTemplate restrictWidth={false} panelled={true}>
        <EuiPageTemplate.Sidebar sticky>
          {mode === "serverless" ? <ServerlessSideNav /> : <SideNav />}
        </EuiPageTemplate.Sidebar>
        <div style={{ padding: "2rem" }}>{children}</div>
      </EuiPageTemplate>
    </>
  );
};
