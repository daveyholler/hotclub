export type MetricProps = {
  description: string;
  icon: string;
  emptyStateCTALabel: string;
  emptyStateMessage: string;
  metrics: {
    value: string | React.ReactNode;
    title: string;
  }[];
};
