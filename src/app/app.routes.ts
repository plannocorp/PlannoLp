import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Component } from '@angular/core';
import { Pdp } from './pages/pdp/pdp';
import { TermosDeUso } from './pages/termos-de-uso/termos-de-uso';
import { Planos } from './pages/planos/planos';

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'politicas-de-privacidade', component: Pdp },
    { path: 'termos-de-uso', component: TermosDeUso },
    { path: 'planos', component: Planos },
    { path: '**', redirectTo: '' } // Redireciona qualquer rota não encontrada para a página principal
];
