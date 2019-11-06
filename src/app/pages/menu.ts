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
                path: 'public-info',
                title: 'معلومات عمومی'
            },
            {
                path: 'keypersons',
                title: 'افراد کلیدی'
            },
            {
                path: 'address',
                title: 'آدرس'
            },
            {
                path: 'delegations',
                title: 'هيت ها'
            },
            {
                path: 'banck-accounts',
                title: 'حساب بانکی',
            },
            {
                path: 'assessments',
                title: ' ارزیابی موسسه',
            },
            {
                path: 'activities',
                title: 'عدم فعالیت موسسه'
            },
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
                title: 'تجهیزات'
            },
            {
                path: 'vehicles',
                title: 'وسایل نقلیه'
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
                title: 'تجهیزات'
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
                title: 'صفحه اصلی'
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
                path: 'biography',
                title: 'بیوگرافی',
            },
            {
                path: 'contact-us',
                title: 'تماس'
            }
        ]
    }

];
