export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'editor',
        title: 'Organizations',
        icon: 'pencil',
        children: [
            {
                path: 'grid',
                title: 'Assessment'
            },
            {
                path: 'Employees',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Equipments'
            },
            {
                path: 'Vehicles',
                title: 'Tabs'
            }
        ]
    },
    {
        path: 'icon',
        title: 'Projects',
        icon: 'diamond',
        children: [
            {
                path: 'grid',
                title: 'Reports'
            },
            {
                path: 'buttons',
                title: 'Un-reports'
            },
            {
                path: 'notification',
                title: 'Informations'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            }
        ]
    },
    {
        path: 'profile',
        title: 'User Profile',
        icon: 'user'
    },
    {
        path: 'ui',
        title: 'Settings',
        icon: 'settings',
    }
];
