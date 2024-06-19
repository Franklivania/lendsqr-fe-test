import briefcase from "../../../public/icons/briefcase.svg";
import chartBar from "../../../public/icons/chart-bar.svg";
import clipboardList from "../../../public/icons/clipboard-list.svg";
import coinsSolid from "../../../public/icons/coins-solid.svg";
import galaxy from "../../../public/icons/galaxy.svg";
import handshakeRegular from "../../../public/icons/handshake-regular.svg";
import home from "../../../public/icons/home.svg";
import loan from "../../../public/icons/loan.svg";
import loveColumn from "../../../public/icons/love-column.svg";
import piggyBank from "../../../public/icons/piggy-bank.svg";
import sack from "../../../public/icons/sack.svg";
import scroll from "../../../public/icons/scroll.svg";
import slidersH from "../../../public/icons/sliders-h.svg";
import transactions from "../../../public/icons/transactions.svg";
import userCheck from "../../../public/icons/user-check.svg";
import userCog from "../../../public/icons/user-cog.svg";
import userFriends from "../../../public/icons/user-friends.svg";
import userX from "../../../public/icons/user-x.svg";
import usersThree from "../../../public/icons/users-three.svg";
import badgePercent from "../../../public/icons/badge-percent.svg";

export const sideItems = {
  dashboard: [
    {
      link: "users",
      icon: userFriends,
      title: "Users"
    },
    {
      link: "guarantors",
      icon: usersThree,
      title: "Guarantors"
    },
    {
      link: "loans",
      icon: sack,
      title: "Loans"
    },
    {
      link: "decision-models",
      icon: handshakeRegular,
      title: "Decision Models"
    },
    {
      link: "savings",
      icon: piggyBank,
      title: "Savings"
    },
    {
      link: "loan-requests",
      icon: loan,
      title: "Loan Requests"
    },
    {
      link: "whitelist",
      icon: userCheck,
      title: "Whitelist"
    },
    {
      link: "karma",
      icon: userX,
      title: "Karma"
    },
  ],
  businesses: [
    {
      icon: briefcase,
      title: "Organization",
    },
    {
      icon: loan,
      title: "Loan Products",
    },
    {
      icon: loveColumn,
      title: "Savings Products",
    },
    {
      icon: coinsSolid,
      title: "Fees and Charges",
    },
    {
      icon: transactions,
      title: "Transactions",
    },
    {
      icon: galaxy,
      title: "Services",
    },
    {
      icon: userCog,
      title: "Service Account",
    },
    {
      icon: scroll,
      title: "Settlements",
    },
    {
      icon: chartBar,
      title: "Report",
    },
  ],
  settings: [
    {
      icon: slidersH,
      title: "Preferences",
    },
    {
      icon: badgePercent,
      title: "Fees and Pricing",
    },
    {
      icon: clipboardList,
      title: "Audit Logs",
    },
  ]
}