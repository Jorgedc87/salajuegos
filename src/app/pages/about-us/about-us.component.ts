import { Component, OnInit } from '@angular/core';
import { Github } from 'src/app/models/github.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  githubPerson: Github = new Github('asd')

  constructor(
    private github: GithubService
    ) { }

  ngOnInit(): void {
    this.tomaDatosGithub();
  }

  tomaDatosGithub(): void{
    this.github.getDatos().subscribe(response => {
      this.githubPerson = new Github(response)
      console.log(response)
    })
  }

}
