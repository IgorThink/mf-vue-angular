declare module "remote_app/HelloWorld";
declare module "remote_app/VueModule";
// declare module "home/Footer";
type Scope = unknown;
type Factory = () => any;

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope, plugin: Scope };