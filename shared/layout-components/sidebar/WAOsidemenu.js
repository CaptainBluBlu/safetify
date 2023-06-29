export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/components/dashboard`,
        icon: "fe fe-home",
        type: "link",
        active: false,
        selected: false,
        title: "Dashboard",
      },
      {
        path: `/components/settings/settings`,
        icon: "fe fe-settings",
        type: "link",
        active: false,
        selected: false,
        title: "Settings",
      },
      // Features for WAO
      // 1. Chat
      // 2. Add One Stop Crisis Center data
      // 3. Add Blog post
      // 4. View panic button data
      // create for emergency housing with home icon
      {
        path: `/components/housing/emergency-housing`,
        icon: "fe fe-home",
        type: "link",
        active: false,
        selected: false,
        title: "Emergency Housing",
      },
      //create for file report with file icon
      {
        path: `/components/report/file-report`,
        icon: "fe fe-file",
        type: "link",
        active: false,
        selected: false,
        title: "View Legal Report",
      },
      //create for chat with chat icon
      {
        path: `/components/chat`,
        icon: "fe fe-message-square",
        type: "link",
        active: false,
        selected: false,
        title: "View Chats",
      },
      //create for justice board with justice icon
      {
        path: `/components/justiceboard`,
        icon: "fe fe-clipboard",
        type: "link",
        active: false,
        selected: false,
        title: "Justice Board",
      },
      // create for support network with friends icon
      {
        path: `/components/supportnetwork`,
        icon: "fe fe-users",
        type: "link",
        active: false,
        selected: false,
        title: "Support Network",
      },
    ],
  },
];
