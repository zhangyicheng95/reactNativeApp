export const bottomTabs = {
    id: 'BOTTOM_TABS_LAYOUT',
    children: [
        {
            stack: {
                id: 'HOME_TAB',
                children: [
                    {
                        component: {
                            id: 'HOME_PAGE',
                            name: 'HomePage'
                        }
                    }
                ],
                options: {
                    bottomTab: {
                        icon: require('./home.png')
                    }
                }
            }
        },
        {
            stack: {
                id: 'SETTING_TAB',
                children: [
                    {
                        component: {
                            id: 'SETTING_PAGE',
                            name: 'SettingsPage'
                        }
                    }
                ],
                options: {
                    bottomTab: {
                        icon: require('./setting.png')
                    }
                }
            }
        }
    ]
};