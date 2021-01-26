import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todo_api_url = "http://localhost:3000/api/";
  constructor(private httpClient: HttpClient) { }

  public getTodos(){
    return this.httpClient.get(this.todo_api_url+"todos/test");
  }
}
