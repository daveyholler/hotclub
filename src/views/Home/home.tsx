import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useNavigate } from "react-router-dom";

import { RecentIndexes } from "./RecentIndexes";
import { ConnectionDetails } from "./ConnectionDetails";
import { AddData } from "./AddData";
import { EmbeddedConsole } from "./EmbeddedConsole";

const GetStartedPanel = ({
  heading,
  description,
  slug,
}: {
  heading: string;
  description: string;
  slug: string;
}) => {
  const navigate = useNavigate();
  return (
    <EuiPanel hasBorder>
      <EuiTitle size="s">
        <h4>{heading}</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s" color="subdued">
        {description}
      </EuiText>
      <EuiSpacer size="m" />
      <EuiButton style={{ width: "100%" }} onClick={() => navigate(`${slug}`)}>
        Start
      </EuiButton>
    </EuiPanel>
  );
};

export const HomeView = () => {
  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: '1280px', margin: 'auto' }}>
      <EuiFlexItem>
        <EuiTitle size="l">
          <h1>Welcome to Search</h1>
        </EuiTitle>
        <EuiText color={"subdued"}>
          <p>Let's jump back in</p>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup direction="row">
          <EuiFlexItem>
            <RecentIndexes />
          </EuiFlexItem>
          <EuiFlexItem>
            <ConnectionDetails />
          </EuiFlexItem>
          <EuiFlexItem>
            <AddData />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EmbeddedConsole />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlexGroup>
  );
};
