import { Time } from "@angular/common"

export class User {
    bookdate?:Date
    booktime?:Time
    name?:String
    person?:number
    phoneNumber?:String
    constructor(bookdate?:Date,booktime?:Time,name?:String,person?:number,phoneNumber?:String)
    {
        this.bookdate = bookdate
        this.booktime = booktime
        this.name = name
        this.person = person
        this.phoneNumber = phoneNumber
    }

}
