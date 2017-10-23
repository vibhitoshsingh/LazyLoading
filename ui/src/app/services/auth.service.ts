import{Injectable} from '@angular/core'

@Injectable()
export class AuthService {
    contentHeaders() {
        let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        return header;
    }
}
