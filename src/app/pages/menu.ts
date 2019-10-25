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
                path: 'grid',
                title: 'Employees'
            },
            {
                path: 'notification',
                title: 'Equipments'
            },
            {
                path: 'grid',
                title: 'Vehicles'
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
