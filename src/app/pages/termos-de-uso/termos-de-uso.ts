import { Component, OnInit } from '@angular/core';
import { Footer } from "../../components/footer/footer/footer";
import { HeaderAlt } from "../../components/header/header-alt/header-alt";

@Component({
  selector: 'app-termos-de-uso',
  imports: [Footer, HeaderAlt],
  templateUrl: './termos-de-uso.html',
  styleUrl: './termos-de-uso.css',
  standalone: true,
})
export class TermosDeUso implements OnInit {
  public appearsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-ap');
        entry.target.classList.remove('hidden-ap');
      }
      else {
        entry.target.classList.add('hidden-ap');
        entry.target.classList.remove('show-ap');
      }
    });
  });

  public appearsElements!: NodeListOf<Element>;

  ngOnInit() {
    this.appearsElements = document.querySelectorAll('.hidden-ap');
    this.appearsElements.forEach((el) => {
      this.appearsObserver.observe(el);
    });
  }
}