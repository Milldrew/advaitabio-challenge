<h1>d3-plot library<h1>
<h2>Development</h2>
<p>The application in the project root is used for developing and debugging the library.</p>
<p>Hard links are used to so that the changes made in the application are reflected in the d3-plot library</p>
<h2>
Testing
</h2>
<p>Testing is currently beind done in the application at the root of the workspace.</p>
<p>To run the e2e/UI tests:</p>

```
// start test-app
ng serve app-for-d3-plot

npm run e2e two-way-plot-test.conf.js
```

<p>To run the UI tests for d3-plot lib:</p>

```
ng test d3-plot
```
