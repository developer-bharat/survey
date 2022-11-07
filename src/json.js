export const surveyJson = {
    "title": "Lovebuddy",
    "description": "Send your loved ones your secret desires",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Enter your name",
                    "isRequired": true,
                    "requiredErrorText": "Please enter your name",
                    "placeholder": "Jhon Doe"
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "Enter your email",
                    "isRequired": true,
                    "requiredErrorText": "Please enter your email",
                    "inputType": "email",
                    "autocomplete": "email",
                    "placeholder": "jhon.doe@gmail.com"
                },
                {
                    "type": "comment",
                    "name": "question3",
                    "title": "Enter your message",
                    "isRequired": true,
                    "requiredErrorText": "Please enter your secret message",
                    "placeholder": "Enter your secret message"
                }
            ]
        }
    ]
}

export default surveyJson;