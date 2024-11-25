import {
  EuiButton,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
interface IndexType {
  id: string;
  documents: number;
}

const data: IndexType[] = [
  {
    id: "search-ht38",
    documents: 42108,
  },
  {
    id: "search-32j3",
    documents: 58309,
  },
  {
    id: "search-439s",
    documents: 282,
  },
  {
    id: "search-32j3",
    documents: 58309,
  },
  {
    id: "search-439s",
    documents: 282,
  },
];

const IndexItem: React.FC<IndexType> = ({ id, documents }) => {
  return (
    <EuiFlexGroup alignItems="center" gutterSize="xs" style={{ width: "100%" }}>
      <EuiFlexItem grow={false}>
        <EuiIcon type="database" size="s" />
      </EuiFlexItem>
      <EuiFlexItem grow={true}>
        <EuiText size="s">{id}</EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiText size="xs" color="subdued">
          {documents}
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon size="xs" iconType="boxesVertical" color="text" />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export const RecentIndexes = () => {
  return (
    <EuiPanel hasBorder>
      <EuiFlexGroup direction="column">
        <EuiFlexItem>
          <EuiTitle size="xs">
            <h3 style={{ paddingLeft: ".5rem" }}>Recent Indexes</h3>
          </EuiTitle>
          <EuiSpacer size="xs" />
          <EuiListGroup style={{ padding: 0 }}>
            {data.map((index) => (
              <EuiListGroupItem
                key={index.id}
                label={<IndexItem id={index.id} documents={index.documents} />}
                onClick={() => console.log(index)}
              />
            ))}
          </EuiListGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton size="s" color="text" iconType="plusInCircle">
            New Index
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};
