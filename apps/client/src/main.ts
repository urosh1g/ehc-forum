import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../src/core/app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
