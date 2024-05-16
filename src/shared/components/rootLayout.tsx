import { PageWrapper } from "./pageWrapper";

type RootLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};
