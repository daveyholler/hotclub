import { EuiFlexGroup, EuiFlexItem, EuiText } from "@elastic/eui";

interface LanguageClientItemType {
  language: string;
  colored?: boolean;
  accentColor: string;
}

export const LanguageClientItem: React.FC<LanguageClientItemType> = ({
  accentColor,
  colored = false,
  language,
}) => {
  return (
    <EuiFlexGroup
      gutterSize="s"
      alignItems="center"
      style={{
        border: "1px solid #eaeaea",
        padding: ".5rem .5rem .5rem .75rem",
        borderRadius: "2px",
        boxShadow: `inset 6px 0 0 ${accentColor}`,
      }}
    >
      <EuiFlexItem grow={false}>
        <i
          style={{ fontSize: "1.25rem" }}
          className={`devicon-${language.toLowerCase()}-plain ${colored ? "colored" : ""
            }`}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText size="xs">{language}</EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
