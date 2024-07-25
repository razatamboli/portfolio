import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsArr = [{
    name : "HTML",
  },
  {
    name : "CSS",
  },
  {
    name : "JavaScript",
  },
  {
    name : "BootStrap",
  },
  {
    name : "TypeScript",
  },
  {
    name : "Angular",
  },
  {
    name : "Material UI",
  },
  {
    name : "Sass",
  },
  {
    name : "Flex",
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
