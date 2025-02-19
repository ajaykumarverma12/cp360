interface FundType {
  label: string;
  value: string;
}

export const fundTypeOption: FundType[] = [
  { label: "Mutual Fund", value: "Mutual Fund" },
  { label: "Private Equity", value: "Private Equity" },
];

export const fundCodeOption: FundType[] = [
  { label: "Mutual Fund", value: "Mutual Fund" },
];

export const FunctionalCurrency: FundType[] = [
  { label: "USD", value: "USD" },
  { label: "INR", value: "INR" },
];

export const ComplexityOption: FundType[] = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];
export const FinalApprovalOption: FundType[] = [
  { label: "Job Created", value: "Job Created" },
  { label: "PBC Uploaded", value: "PBC Uploaded" },
  { label: "Pending at preparer", value: "Pending at prepare" },
  { label: "Pending at Reviewer", value: "Pending at Reviewer" },
  { label: "Pending at Final Approver", value: "Pending at Final Approver" },
  { label: "Approved", value: "Approved" },
  { label: "On Hold", value: "On Hold" },
];
