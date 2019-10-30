export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'organization',
        title: 'Organizations',
        icon: 'home',
        children: [
            {
                path: 'org-list',
                title: 'Org list'
            },
            {
                path: 'activities',
                title: 'Activities'
            },
            {
                path: 'delegations',
                title: 'Delegations'
            }
        ]
    },
    {
        path: 'projects',
        title: 'Projects',
        icon: 'pie-chart',
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
        path: 'banck-accounts',
        title: 'Bnak accounts',
        icon: 'tags'
    },
    {
        path: 'plan',
        title: 'Plan',
        icon: 'user'
    },
    {
        path: 'reports',
        title: 'Reports',
        icon: 'file-text-o',
        children: [
            {
                path: 'project-info',
                title: 'Project Information'
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
                path: 'six-months-report',
                title: 'Six months report'
            },
        ]
    },
    {
        path: 'self-assessments',
        title: 'Self assessments',
        icon: 'check',
        children: [
            {
                path: 'internal-assessments',
                title: 'Internal assessments',
                children:[
                    {
                        path: 'constitution',
                        title: 'Constitution'
                    },
                    {
                        path: 'in-mng-plan',
                        title: 'Internal management and plan'
                    },
                    {
                        path: 'finance-procurement',
                        title: 'Finance and procurement'
                    },
                    {
                        path: 'hr',
                        title: 'HR'
                    },
                    {
                        path: 'executory',
                        title: 'Executory'
                    }
                ]
            },
            {
                path: 'external-assessments',
                title: 'External assessments',
                children:[
                    {
                        path: 'constitution',
                        title: 'Constitution'
                    },
                    {
                        path: 'in-mng-plan',
                        title: 'Internal management and plan'
                    },
                    {
                        path: 'finance-procurement',
                        title: 'Finance and procurement'
                    },
                    {
                        path: 'hr',
                        title: 'HR'
                    },
                    {
                        path: 'executory',
                        title: 'Executory'
                    }
                ]
            }
        ]
    },
    {
        path: 'settings',
        title: 'Settings',
        icon: 'cog',
        children:[
            {
                path: 'lookups',
                title: 'lookups',
                children:[
                    {
                        path: 'provinces',
                        title: 'Provinces'
                    },
                    {
                        path: 'districts',
                        title: 'Districts'
                    },
                    {
                        path: 'sectors',
                        title: 'Sectores'
                    },
                    {
                        path: 'types',
                        title: 'Types'
                    }
                ]
            },
            {
                path: 'user-management',
                title: 'User management'
            }
        ]
    },
    {
        path: 'website',
        title: 'Website',
        icon: 'pencil'
    }

];
