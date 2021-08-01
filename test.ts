import { of } from 'rxjs';

of(1, 2, 3, 4).subscribe((x) => {
      console.log(`x: ${x}`);
      if (x === 2) {
          throw new Error('xxx');
      }
  });