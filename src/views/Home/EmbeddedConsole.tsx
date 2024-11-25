import Editor, { useMonaco, loader } from '@monaco-editor/react';
import { samplePythonCode } from "./sampleCode";
import { EuiButtonEmpty, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiTitle} from "@elastic/eui";

export const EmbeddedConsole = () => {
  return (
    <EuiPanel hasBorder>
      <EuiFlexGroup direction="column" gutterSize={"m"}>
        <EuiFlexItem >
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size="s"><h3>Dev Tools</h3></EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty size={"s"}>Launch Dev Tools</EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem>
          <Editor height="600px" defaultLanguage="python" defaultValue={samplePythonCode} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  )
}