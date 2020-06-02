import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { ProjectsComponent } from './main/projects/projects.component';

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
	{
		path: "contact",
		component: ContactComponent,
		pathMatch: "full"
	},
	{
		path: "projects",
		component: ProjectsComponent,
		pathMatch: "full"
	}
];

export const routingModule:ModuleWithProviders = 
			RouterModule.forRoot(routes);