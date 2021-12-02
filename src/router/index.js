import { createRouter, createWebHashHistory } from "vue-router";
import GeneralConfig from "../views/GeneralConfig.vue";

const routes = [
	{
		path: "/",
		redirect: "/GeneralConfig",
	},
	{
		path: "/GeneralConfig",
		name: "GeneralConfig",
		meta: {
			heading: "Allgemeine Einstellungen",
		},
		component: GeneralConfig,
	},
	{
		path: "/OptionalComponents",
		name: "OptionalComponents",
		meta: {
			heading: "Optionale Komponenten",
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "OptionalComponents" */
				"../views/OptionalComponents.vue"
			),
	},
	{
		path: "/GeneralChargeConfig",
		name: "GeneralChargeConfig",
		meta: {
			heading: "Übergreifende Einstellungen der Lademodi",
		},
		component: () =>
			import(
				/* webpackChunkName: "GeneralChargeConfig" */
				"../views/GeneralChargeConfig.vue"
			),
	},
	{
		path: "/InstantChargeConfig",
		name: "InstantChargeConfig",
		meta: {
			heading: "Einstellungen Sofortladen",
		},
		component: () =>
			import(
				/* webpackChunkName: "InstantChargeConfig" */
				"../views/InstantChargeConfig.vue"
			),
	},
	{
		path: "/PVChargeConfig",
		name: "PVChargeConfig",
		meta: {
			heading: "Einstellungen PV-laden",
		},
		component: () =>
			import(
				/* webpackChunkName: "PVChargeConfig" */
				"../views/PVChargeConfig.vue"
			),
	},
	{
		path: "/TimeChargeConfig",
		name: "TimeChargeConfig",
		meta: {
			heading: "Einstellungen Zeitladen",
		},
		component: () =>
			import(
				/* webpackChunkName: "TimeChargeConfig" */
				"../views/TimeChargeConfig.vue"
			),
	},
	{
		path: "/ScheduledChargeConfig",
		name: "ScheduledChargeConfig",
		meta: {
			heading: "Einstellungen Zielladen",
		},
		component: () =>
			import(
				/* webpackChunkName: "ScheduledChargeConfig" */
				"../views/ScheduledChargeConfig.vue"
			),
	},
	{
		path: "/StandbyChargeConfig",
		name: "StandbyChargeConfig",
		meta: {
			heading: "Einstellungen Standby",
		},
		component: () =>
			import(
				/* webpackChunkName: "StandbyChargeConfig" */
				"../views/StandbyChargeConfig.vue"
			),
	},
	{
		path: "/ChargepointInstallation",
		name: "ChargepointInstallation",
		meta: {
			heading: "Ladepunkt Installation",
		},
		component: () =>
			import(
				/* webpackChunkName: "ChargepointInstallation" */
				"../views/ChargepointInstallation.vue"
			),
	},
	{
		path: "/HardwareInstallation",
		name: "HardwareInstallation",
		meta: {
			heading: "Hardware Installation",
		},
		component: () =>
			import(
				/* webpackChunkName: "HardwareInstallation" */
				"../views/HardwareInstallation.vue"
			),
	},
	{
		path: "/LoadManagementConfiguration",
		name: "LoadManagementConfiguration",
		meta: {
			heading: "Konfiguration Lastmanagement",
		},
		component: () =>
			import(
				/* webpackChunkName: "LoadManagementConfiguration" */
				"../views/LoadManagementConfig.vue"
			),
	},
	{
		path: "/VehicleConfiguration",
		name: "VehicleConfiguration",
		meta: {
			heading: "Fahrzeugkonfiguration",
		},
		component: () =>
			import(
				/* webpackChunkName: "VehicleConfiguration" */
				"../views/VehicleConfig.vue"
			),
	},
	{
		path: "/System/Support",
		name: "Support",
		meta: {
			heading: "Support",
		},
		component: () =>
			import(
				/* webpackChunkName: "Support" */
				"../views/Support.vue"
			),
	},
	{
		path: "/System/DebugConfiguration",
		name: "Debugging",
		meta: {
			heading: "Fehlersuche",
		},
		component: () =>
			import(
				/* webpackChunkName: "DebugConfig" */
				"../views/DebugConfig.vue"
			),
	},
	{
		path: "/System/Dataprotection",
		name: "Dataprotection",
		meta: {
			heading: "Datenschutzerklärung",
		},
		component: () =>
			import(
				/* webpackChunkName: "Dataprotection" */
				"../views/Dataprotection.vue"
			),
	},
];
/* examples for development only start here */
if (process.env.NODE_ENV !== "production") {
	routes.push({
		path: "/testing-store",
		name: "VUEX Store",
		meta: {
			heading: "Testseite VUEX Store",
		},
		component: () =>
			import(
				/* webpackChunkName: "testingStore" */
				"../views/TestingStore.vue"
			),
	});
}

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.afterEach((to) => {
	// change page (or tab) title
	if (to.meta.heading) {
		document.title = "openWB | " + to.meta.heading;
	} else {
		document.title = "openWB";
	}
});

export default router;
