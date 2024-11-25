import {
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiText,
  EuiTitle,
} from "@elastic/eui";

interface DetailListItemType {
  title: string;
  description: string;
  coloredBadge?: boolean;
  button?: React.ReactNode;
}

const DetailListItem: React.FC<DetailListItemType> = ({
  title,
  coloredBadge = false,
  description,
  button,
}) => {
  return (
    <EuiFlexItem>
      <EuiFlexGroup alignItems="center" direction="row" gutterSize="xs">
        <EuiFlexItem>
          <EuiText size="s">
            <h5>{title}:</h5>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiBadge color={coloredBadge ? "accent" : "default"}>
            {description}
          </EuiBadge>
        </EuiFlexItem>
        {!!button && button}
      </EuiFlexGroup>
    </EuiFlexItem>
  );
};

export const ConnectionDetails = () => {
  return (
    <EuiPanel hasBorder>
      <EuiFlexGroup
        direction="column"
        justifyContent="spaceBetween"
        style={{ height: "100%" }}
      >
        <EuiFlexItem grow={false}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h3>Connect</h3>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty size="xs" iconType="copy">
                Copy endpoint
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup
            style={{ marginTop: "1rem" }}
            direction="column"
            gutterSize="s"
          >
            <DetailListItem
              title="Project ID"
              description="hot-club-of-nutrition-df2e43"
              button={<EuiButtonIcon iconType="copy" color="text" size="xs" />}
            />
            <DetailListItem
              title="Region"
              description="🇺🇸 AWS: US(Virginia)"
              button={<EuiButtonIcon iconType="copy" color="text" size="xs" />}
            />
            <DetailListItem
              title="Active API Keys"
              description="8"
              coloredBadge
              button={<EuiButtonIcon iconType="eye" color="text" size="xs" />}
            />
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton color="text" iconType="plusInCircle" size="s">
            New API Key
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};
