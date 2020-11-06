export class Message{
    _id;
    full_name;
    mail;
    subject;
    message;

    constructor(full_name?,subject?,mail?,message?){
        this.full_name = full_name;
        this.subject = subject;
        this.mail = mail;
        this.message = message;
    }
}