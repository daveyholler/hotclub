import { EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";

export const InferenceEndpoints = () => {
  return (
    <div>
      <EuiTitle size="l">
        <h1>Inferenced Endpoints</h1>
      </EuiTitle>
      <EuiSpacer />
      <EuiText>
        <p>This is a list of inferenced endpoints.</p>
      </EuiText>
    </div>
  );
};
