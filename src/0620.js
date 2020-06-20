// 1. Define route components.
// These can be imported from other files
import { comp062002 } from "./062002";
import { comp062004 } from "./062004";

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/062002", component: comp062002 },
  { path: "/062004", component: comp062004 },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const dgiApp = new Vue({
  router,
}).$mount("#dgi-app");
