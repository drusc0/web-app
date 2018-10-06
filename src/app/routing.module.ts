import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';

const routes:Routes = [
	{
		path: "",
		redirectTo: "about",
		pathMatch: "full"
  },
  {
		path: "about",
    component: AboutComponent,
  },
// 	{
//     path: "resume",
//     component: ResumeComponent,
//     pathMatch: "full"
// 	},
// 	{
//     path: "activities",
//     component: ActivitiesComponent,
//     pathMatch: "full"
// 	},
// 	{
//     path: "activity/:id",
//     component: ActivityComponent,
//     pathMatch: "full"
// 	},
	{
    path: "contact",
    component: ContactComponent,
    pathMatch: "full"
	},
// 	{
//     path: "projects",
//     component: ProjectsComponent,
//     pathMatch: "full"
// 	},
// 	{
//     path: "project/:id",
//     component: ProjectComponent,
//     pathMatch: "full"
// 	}
];

export const routingModule:ModuleWithProviders = 
			RouterModule.forRoot(routes);