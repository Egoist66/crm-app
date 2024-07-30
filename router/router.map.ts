type NavMenuProps = {
    name: string;
    url: string;
    icon: string
}

export const menuData: NavMenuProps[] = [

    {
      name: 'Home',
      url: '/',
      icon: 'radix-icons:dashboard'
    },
    {
        name: 'Products',
        icon: 'ep:goods',
        url: '/products'
    },

    {
        name: 'Payments',
        icon: 'ph:contactless-payment',
        url: '/payments'
    },

    {
        name: 'Orders',
        icon: 'fluent:receipt-28-regular',
        url: '/orders'
    },
    {
        name: 'Customers',
        icon: 'mingcute:group-line',
        url: '/customers'
    },

    {
        name: 'Feedback',
        icon: 'fluent:person-feedback-48-regular',
        url: '/feedback'
    },

    {
        name: 'Settings',
        icon: 'fluent:settings-48-regular',
        url: '/settings'
    },

    {
        name: 'Help Center',
        icon: 'radix-icons:question-mark',
        url: '/help'
    },
    
]