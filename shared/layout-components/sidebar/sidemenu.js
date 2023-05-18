export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            { path: `/components/dashboard/dashboard`, icon: 'fe fe-home', type: 'link', active: false, selected: false, title: 'Dashboard' },
            { path: `/components/settings/settings`, icon: 'fe fe-settings', type: 'link', active: false, selected: false, title: 'Settings' },
            //create for blog postwith document icon
            { path: `/components/blog/blogpost`, icon: 'fe fe-list', type: 'link', active: false, selected: false, title: 'Blog Post' },
            // create for emergency housing with home icon
            { path: `/components/housing/emergency-housing`, icon: 'fe fe-home', type: 'link', active: false, selected: false, title: 'Emergency Housing' },
            //create for file report with file icon
            { path: `/components/report/file-report`, icon: 'fe fe-file', type: 'link', active: false, selected: false, title: 'File Report' },
            
        ]
    },
    {
        menutitle: "UI KIT",

        Items: [

            {
                title: 'Apps', icon: "fe fe-slack", type: 'sub', Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/components/apps/widgets`, type: 'link', active: false, selected: false, title: 'Widgets' }
                ]
            },
        ]
    },
   
]