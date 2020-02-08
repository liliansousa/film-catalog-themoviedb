import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FormatFields {

    public formatStringDate(date: string) {

        return date;
    }
}