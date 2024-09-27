import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skills: any;

constructor(private http:HttpClient){}

ngOnInit(): void {
  this.getSkills();
}

getSkills(){
   this.http.get('assets/skills.json').subscribe((skills)=>{
    this.skills = skills;
   })
}
}
