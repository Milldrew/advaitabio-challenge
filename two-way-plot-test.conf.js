// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--no-sandbox"],
    },
  },
  directConnect: true,
  baseUrl: "http://localhost:4200",

  framework: "jasmine",
  specs: ["./e2e/two-way-plot.e2e-spec.ts"],
  onPrepare: () => {
    require("ts-node").register({
      project: "e2e",
    });
  },
  useAllAngular2AppRoots: true,
};
