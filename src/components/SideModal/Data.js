import HomeIcon from "@material-ui/icons/Home";
import RadioIcon from "@material-ui/icons/Radio";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleIcon from "@material-ui/icons/People";
import HelpIcon from "@material-ui/icons/Help";
// import TouchAppIcon from "@material-ui/icons/TouchApp";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
// import FlareIcon from "@material-ui/icons/Flare";
import LinkIcon from "@material-ui/icons/Link";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import * as RiIcons from "react-icons/ri";

export const SideModalObjOne = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "home",
    subNav: [
      {
        title: "Introduction",
      },
      { title: "History" },
      { title: "Aims and Objectives" },
      { title: "Structure" },
    ],
  },
  {
    title: "Broadcasting",
    icon: <RssFeedIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "broadcasting",
  },
  {
    title: "Radio Program",
    icon: <RadioIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "radioProgram",
  },
  {
    title: "Sponsors",
    icon: <PeopleIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "sponsors",
  },
  {
    title: "Community Announcements",
    icon: <AnnouncementIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "communityAnnouncements",
  },
  {
    title: "Overseas Citizen of India (OCI) Cardholder",
    icon: <PermContactCalendarIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "overseasCitizenOfIndiaCardholder",
  },
  {
    title: "Hindi For Kids In Australia",
    icon: <InsertEmoticonIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "hindiForKidsInAustralia",
  },
  {
    title: "Indian Support Centre",
    icon: <HelpIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "indianSupportCentre",
  },
  {
    title: "Australian Council Of Hindu Clergy",
    icon: <AccountBalanceIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "australianCouncilOfHinduClergy",
  },
  // {
  //   title: "Darpan Ekal Vidyalaya",
  //   icon: <FlareIcon />,
  //   link: "/",
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   placeHolder: "darpanEkalVidyalaya",
  // },
  // {
  //   title: "Teaching Hindi in NSW",
  //   icon: <TouchAppIcon />,
  //   link: "/",
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   placeHolder: "teachingHindiInNsw",
  // },

  {
    title: "Administration",
    icon: <DashboardIcon />,
    link: "/",
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    placeHolder: "administration",
  },
];

export const SideModalObjTwo = {
  title: "Useful Links",
  icon: <LinkIcon />,
  link: "/",
  // iconOpened: <RiIcons.RiArrowUpSFill />,
  // iconClosed: <RiIcons.RiArrowDownSFill />,
  placeHolder: "usefulLinks",
};
