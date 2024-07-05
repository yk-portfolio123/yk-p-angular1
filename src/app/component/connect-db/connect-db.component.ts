import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-connect-db',
  templateUrl: './connect-db.component.html',
  styleUrls: ['./connect-db.component.scss']
})
export class ConnectDBComponent implements OnInit{
  constructor(private service:PostService,
    private router: Router,
    private auth: AuthService){}
  ngOnInit(): void {
    this.auth.isAuthenticated()
    .then((res) => {
      return this.router.navigate(['/login']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  public onClick() {
    this.service.createPost("222", "Send Message!")
      .subscribe(
        (data) => {
          console.log('Response from API:', data);
          // レスポンスを処理する必要がある場合はここで行う
        },
        (error) => {
          console.error('Error:', error);
          // エラーを処理する必要がある場合はここで行う
        }
      );
  }
}
