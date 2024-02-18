import { POST } from "./HttpsService"

const sendRequestPath = 'send-submit'

export const MailService = {
    sendRequest: (data) => (
        POST({
            path: sendRequestPath,
            body: data
        })
    )
}