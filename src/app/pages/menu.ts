export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'lookup',
        title: 'Lookup',
        icon: 'user',
        children:[
            {
                path: 'budget-type',
                title: 'Budget type'
            },
            {
                path: 'province',
                title: 'Province'
            },
            {
                path: 'destrict',
                title: 'Destrict'
            }
        ]
    },
    {
        path: 'organization',
        title: 'Organizations',
        icon: 'pencil',
        children: [
            {
                path: 'org-list',
                title: 'Org list'
            },
            {
                path: 'assessments',
                title: 'Assessments'
            },
            {
                path: 'employees',
                title: 'Employees'
            },
            {
                path: 'equipments',
                title: 'Equipments'
            },
            {
                path: 'vehicles',
                title: 'Vehicles'
            }
        ]
    },
    {
        path: 'project',
        title: 'Projects',
        icon: 'pencil',
        children: [
            {
                path: 'project-list',
                title: 'Project list'
            },
            {
                path: 'employees',
                title: 'Employees'
            },
            {
                path: 'equipments',
                title: 'Equipments'
            },
            {
                path: 'vehicles',
                title: 'Vehicles'
            }
        ]
    },
    {
        path: 'projects',
        title: 'Projects',
        icon: 'diamond',
        children: [
            {
                path: 'reports',
                title: 'Reports'
            },
            {
                path: 'activities',
                title: 'Activities'
            },
            {
                path: 'in-activities',
                title: 'In Activities'
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
        path: 'users',
        title: 'Users',
        icon: 'user',
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
        title: 'UI Element',
        icon: 'paint-brush',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            }
        ]
    }

];
