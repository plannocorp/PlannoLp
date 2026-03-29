import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Component } from '@angular/core';
import { Pdp } from './pages/pdp/pdp';
import { TermosDeUso } from './pages/termos-de-uso/termos-de-uso';
import { Planos } from './pages/planos/planos';

export const routes: Routes = [
    { 
        path: '', 
        component: Main,
        title: 'Planno | Home'
    },

    { 
        path: 'politicas-de-privacidade', 
        component: Pdp,
        title: 'Planno | Políticas de Privacidade'
    },

    { 
        path: 'termos-de-uso', 
        component: TermosDeUso,
        title: 'Planno | Termos de Uso'
    },

    { 
        path: 'planos', 
        component: Planos,
        title: 'Planno | Planos'
    },

    { 
        path: '**', 
        redirectTo: '' 
    } // Redireciona qualquer rota não encontrada para a página principal
];
