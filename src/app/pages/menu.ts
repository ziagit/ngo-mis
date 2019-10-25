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
        title: 'Plan',
        icon: 'user'
    },
    {
        path: 'profile',
        title: 'User Profile',
        icon: 'user'
    },
    {
        path: 'profile',
        title: 'Website',
        icon: 'buttons',
        children: [
            {
                path: 'grid',
                title: 'Test1'
            },
            {
                path: 'buttons',
                title: 'Test2'
            },
            {
                path: 'notification',
                title: 'Test3'
            }
        ]
    },
    {
        path: 'ui',
        title: 'Settings',
        icon: 'user',
    }
];
