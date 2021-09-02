import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//burda ben hangi module ile başlayayım diyor. bizde appmodule seçmişiz.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
