// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // LOCAL 4000
  midtierurl: "http://localhost:4000",
  articleurl: "https://www.stackmi.com/academy/article/",
  eventurl: "https://www.stackmi.com/events/event/",
  defaulturl: "https://www.stackmi.com/",
  default_imageUrl: "https://www.stackmi.com/assets/images/stackmi_seo.png",
  my_imageUrl: "https://stackmi-storage.s3.ap-south-1.amazonaws.com/add_seo_image.png"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
