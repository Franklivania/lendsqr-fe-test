export interface PersonalInfo {
  phoneNumber: string;
  emailAddress: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

export interface Employment {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  relationship: string;
}

export interface Activities {
  organization: string;
  email: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

export interface User {
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