# Angular Integration Test

Test a group of components working together.

```ts
# counter.component.ts
export class CounterComponent implements OnInit {
  @Input() count: number = -1; // Counter value

  ngOnInit() {
    this.increment();
  }

  increment() {
    this.count++;
  }
}
```

```ts
# app.component.html
<app-counter [count]="value"></app-counter>
```

```ts
export class AppComponent {
  value: number = 1;
}
```
