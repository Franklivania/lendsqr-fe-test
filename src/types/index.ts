export type PersonalInfo = {
  phoneNumber: string;
  emailAddress: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

export type Employment = {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

export type Socials = {
  twitter: string;
  facebook: string;
  instagram: string;
}

export type Guarantor = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  relationship: string;
}

export type Activities = {
  organization: string;
  email: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

export type User = {
  fullName: string;
  userTier: "1" | "2" | "3";
  userId: string;
  amountInBank: string;
  personalInfo: PersonalInfo;
  employment: Employment;
  socials: Socials;
  guarantor: Guarantor;
  activities: Activities;
}