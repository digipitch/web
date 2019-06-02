import mock from './../mock';

const invoicesDB = {
    invoices: [
        {
            'id'      : '5725a6802d',
            'from'    : {
                'title'  : 'Digipitch Corporation',
                'address': '7805 E. 89th St. Indianapolis, IN 46256',
                'phone'  : '(800) 555-1212',
                'email'  : 'billing@digipitch.com',
                'website': 'digipitch.com'
            },
            'client'  : {
                'title'  : 'Paul Dayton',
                'address': '9301 Wood Street Indianapolis, IN 46256',
                'phone'  : '(317) 123-4567',
                'email'  : 'paul@digipitch.com'
            },
            'number'  : 'P9-0004',
            'date'    : 'Jul 19, 2019',
            'dueDate' : 'Aug 24, 2019',
            'services': [
                {
                    'id'       : '1',
                    'title'    : 'Prototype & Design',
                    'detail'   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, quam sed eleifend imperdiet.',
                    'unit'     : 'Hour',
                    'unitPrice': '12.00',
                    'quantity' : '240',
                    'total'    : '2880'
                },
                {
                    'id'       : '2',
                    'title'    : 'Coding',
                    'detail'   : 'Vestibulum ligula sem, rutrum et libero id, porta vehicula metus. Cras dapibus neque sit amet laoreet vestibulum.',
                    'unit'     : 'Hour',
                    'unitPrice': '10.50',
                    'quantity' : '350',
                    'total'    : '3675'
                },
                {
                    'id'       : '3',
                    'title'    : 'Testing',
                    'detail'   : 'Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.',
                    'unit'     : 'Hour',
                    'unitPrice': '4.00',
                    'quantity' : '50',
                    'total'    : '200'
                },
                {
                    'id'       : '4',
                    'title'    : 'Documentation & Training',
                    'detail'   : 'Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.',
                    'unit'     : 'Hour',
                    'unitPrice': '6.50',
                    'quantity' : '260',
                    'total'    : '1690'
                }
            ],
            'subtotal': '8445',
            'tax'     : '675.60',
            'discount': '120.60',
            'total'   : '9000'
        }
    ]
};

mock.onGet('/api/invoices/get-invoice').reply((config) => {
    const id = config.params.id;
    const response = invoicesDB.invoices.find((invoice) => invoice.id === id);
    return [200, response];
});
