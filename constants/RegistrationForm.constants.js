export const steps = [
    {
        name: 'User Details',
        formSchema: {
            type: "object",
            required: [
                "firstName",
                "lastName",
                "email",
                "phoneNumber"
            ],
            properties: {
                firstName: {
                    type: "string",
                    title: "First Name",
                },
                middleName: {
                    type: "string",
                    title: "Middle Name",
                },
                lastName: {
                    type: "string",
                    title: "Last Name",
                },
                email: {
                    type: "string",
                    title: "Email",
                },
                phoneNumber: {
                    type: "string",
                    title: "Phone",
                }
            }
        },
        uiSchema: {
            "firstName": {
                "ui:gridSm": 4,
                "ui:gridXs": 12
            },
            "middleName": {
                "ui:gridSm": 4,
                "ui:gridXs": 12
            },
            "lastName": {
                "ui:gridSm": 4,
                "ui:gridXs": 12
            },
            "email": {
                "ui:gridSm": 6,
                "ui:gridXs": 12,
                "ui:options": {
                    "inputType": "email"
                }
            },
            "phoneNumber": {
                "ui:gridSm": 6,
                "ui:gridXs": 12,
                "ui:options": {
                    "inputType": "tel"
                }
            }
        }
    },
    {
        name: 'Address',
        formSchema: {
            type: "object",
            required: [
                "line1"
            ],
            properties: {
                line1: {
                    type: "string",
                    title: "Line 1",
                }
            }
        },
        uiSchema: {
            "line1": {
                "ui:gridSm": 12
            }
        }
    }
];