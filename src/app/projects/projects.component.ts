import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projects:any[]=[];

constructor( private http:HttpClient , private router:Router){}
ngOnInit(): void {
  // this.getProjects();

  this.http.get<any[]>('assets/projects.json').subscribe(data=>{
    this.projects = data
  });
}

openLink(url:string){
  if(url){
    window.open(url,'_blank')
  }
}

// getProjects(){
//   this.http.get('assets/projects.json').subscribe((projects)=>{
//     this.projects = projects
//   })
// }


}
