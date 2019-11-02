export let MENU_ITEM = [
    {
        path: 'index',
        title: 'داشبورد',
        icon: 'dashboard'
    },
    {
        path: 'organization',
        title: 'موسسات',
        icon: 'home',
        children: [
            {
                path: 'org-list',
                title: 'لست موسسات'
            },
            {
                path: 'activities',
                title: 'فعالیت ها'
            },
            {
                path: 'delegations',
                title: 'هيت ها'
            }
        ]
    },
    {
        path: 'projects',
        title: 'پروژه ها',
        icon: 'pie-chart',
        children: [
            {
                path: 'project-list',
                title: 'لست پروژه ها'
            },
            {
                path: 'employees',
                title: 'کارمندان'
            },
            {
                path: 'equipments',
                title: 'وسایل'
            },
            {
                path: 'vehicles',
                title: 'وسایل نقلیه'
            }
        ]
    },
    {
        path: 'banck-accounts',
        title: 'حساب بانکی',
        icon: 'tags'
    },
    {
        path: 'plan',
        title: 'پلان',
        icon: 'list-alt'
    },
    {
        path: 'self-assessments',
        title: 'خود ارزیابی',
        icon: 'check',
        children: [
            {
                path: 'internal-self-assessment',
                title: 'خود ارزیابی داخلی',
            },
            {
                path: 'external-self-assessment',
                title: 'خود ارزیابی خارجی',
            }
        ]
    },
    {
        path: 'reports',
        title: 'راپورها',
        icon: 'file-text-o',
        children: [
            {
                path: 'project-info',
                title: 'معلومات عمومی پروژه'
            },
            {
                path: 'employees',
                title: 'کارمندان'
            },
            {
                path: 'equipments',
                title: 'وسایل'
            },
            {
                path: 'six-months-report',
                title: 'راپور شش ماهه'
            },
        ]
    },
    {
        path: 'settings',
        title: 'تنظیمات',
        icon: 'cog',
        children:[
            {
                path: 'lookups',
                title: 'معلومات ثابت'
            },
            {
                path: 'types',
                title: 'انواع معلومات ثابت'
            },
            {
                path: 'users-management',
                title: 'حساب کاربر'
            },
        ]
    },
    {
        path: 'website',
        title: 'ویب سایت',
        icon: 'internet-explorer',
        children:[
            {
                path: 'home',
                title: 'خانه'
            },
            {
                path: 'about-us',
                title: 'درباره ما'
            },
            {
                path: 'org-registeration',
                title: 'ثبت موسسه'
            },
            {
                path: 'org-list',
                title: 'لست موسسه'
            },
            {
                path: 'news',
                title: 'رسانه ها'
            },
            {
                path: 'org-laws',
                title: 'قانون موسسات'
            },
            {
                path: 'jobs',
                title: 'کاریابی'
            },
            {
                path: 'contact-us',
                title: 'تماس'
            }
        ]
    }

];
