import {
  EuiButton, EuiButtonEmpty,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTitle,
} from "@elastic/eui";
import { LanguageClientItem } from "../../shared/components/languageClientItem";

const buttons = [
  {
    label: "Upload a file",
    iconType: "exportAction",
  },
  {
    label: "Setup an integration",
    iconType: "magnet",
  },
  {
    label: "Crawl a website",
    iconType: "globe",
  },
];

const clients = [
  {
    language: "Python",
    colored: false,
    accentColor: "#3274B7",
  },
  {
    language: "JavaScript",
    colored: false,
    accentColor: "#f7df1e",
  },
  {
    language: "Ruby",
    colored: false,
    accentColor: "#cc342d",
  },
  {
    language: 'Rust',
    colored: false,
    accentColor: '#E4763C',
  },
];

export const AddData = () => {
  return (
    <EuiPanel hasBorder>
      <EuiFlexGroup direction="column" gutterSize="s">
        <EuiFlexItem>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h3>Add Data</h3>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        {buttons.map((button) => (
          <EuiFlexItem key={button.label}>
            <EuiButton
              className="listButton"
              color="text"
              size="s"
              iconType={button.iconType}
            >
              {button.label}
            </EuiButton>
          </EuiFlexItem>
        ))}
        <EuiFlexItem style={{ paddingTop: ".5rem" }}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h4>Usa a language client</h4>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty size="xs" iconType="popout" iconSide="right">View all</EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexGrid columns={2} gutterSize="s">
          {clients.map((client) => (
              <LanguageClientItem
                  language={client.language}
                  colored={client.colored}
                  accentColor={client.accentColor}
              />
          ))}
        </EuiFlexGrid>
      </EuiFlexGroup>
    </EuiPanel>
  );
};
