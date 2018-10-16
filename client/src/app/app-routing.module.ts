
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {UserComponent} from "./user/user.component";
import {AuthGuardService} from "./auth/core/auth-guard.service";
import {AnonymousGuardService} from "./auth/core/anonymous-guard.service";
import {WorldMapComponent} from "./world-map/world-map.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {PlanComponent} from "./plan/plan.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AnonymousGuardService]},
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuardService]},
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuardService]},
  { path: 'world-map', component: WorldMapComponent, canActivate: [AuthGuardService]},
  { path: 'achievements', component: AchievementsComponent, canActivate: [AuthGuardService]},
  { path: 'plan', component: PlanComponent, canActivate: [AuthGuardService]},
  { path: 'user', component: UserComponent,  canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
