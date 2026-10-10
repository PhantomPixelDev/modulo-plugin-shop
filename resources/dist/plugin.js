import { Badge as e, Button as t, Card as n, CardContent as r, CardDescription as i, CardFooter as a, CardHeader as o, CardTitle as s, Checkbox as c, Dialog as l, DialogContent as u, DialogDescription as d, DialogFooter as f, DialogHeader as p, DialogTitle as m, EmptyState as h, Input as g, Label as _, MediaPickerDialog as v, SectionWrapper as y, Select as b, SelectContent as x, SelectItem as S, SelectTrigger as C, SelectValue as w, Switch as T, Table as E, TableBody as D, TableCell as O, TableContainer as ee, TableHead as k, TableHeader as te, TableRow as A, Tabs as j, TabsContent as M, TabsList as N, TabsTrigger as P, Textarea as F, useAcl as I, useAdminToast as ne } from "@modulo/ui";
import { Head as L, Link as R, router as z, usePage as B } from "@inertiajs/react";
import { createElement as V, forwardRef as H, useEffect as re, useMemo as ie, useState as U } from "react";
import { Fragment as W, jsx as G, jsxs as K } from "react/jsx-runtime";
//#region resources/js/can.ts
function q() {
	let { isAdmin: e, hasPermission: t } = I();
	return (n) => e() || t(n);
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils.js
var J = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ae = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), oe = (e) => {
	let t = ae(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Y = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), se = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, ce = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, le = H(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => V("svg", {
	ref: c,
	...ce,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: Y("lucide", i),
	...!a && !se(s) && { "aria-hidden": "true" },
	...s
}, [...o.map(([e, t]) => V(e, t)), ...Array.isArray(a) ? a : [a]])), X = (e, t) => {
	let n = H(({ className: n, ...r }, i) => V(le, {
		ref: i,
		iconNode: t,
		className: Y(`lucide-${J(oe(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = oe(e), n;
}, ue = X("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), de = X("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Z = X("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), Q = X("credit-card", [["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "2",
	key: "ynyp8z"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "10",
	y2: "10",
	key: "1b3vmo"
}]]), fe = X("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), pe = X("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), me = X("package", [
	["path", {
		d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
		key: "1a0edw"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["polyline", {
		points: "3.29 7 12 12 20.71 7",
		key: "ousv84"
	}],
	["path", {
		d: "m7.5 4.27 9 5.15",
		key: "1c824w"
	}]
]), he = X("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), ge = X("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]), _e = X("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), ve = X("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), ye = X("store", [
	["path", {
		d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",
		key: "slp6dd"
	}],
	["path", {
		d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
		key: "o0xfot"
	}],
	["path", {
		d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
		key: "wn3emo"
	}]
]), be = X("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), xe = X("truck", [
	["path", {
		d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
		key: "wrbu53"
	}],
	["path", {
		d: "M15 18H9",
		key: "1lyqi6"
	}],
	["path", {
		d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
		key: "lysw3i"
	}],
	["circle", {
		cx: "17",
		cy: "18",
		r: "2",
		key: "332jqn"
	}],
	["circle", {
		cx: "7",
		cy: "18",
		r: "2",
		key: "19iecd"
	}]
]), Se = X("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), $ = { shop: {
	products: {
		index: () => route("dashboard.admin.shop.products.index"),
		store: () => route("dashboard.admin.shop.products.store"),
		update: (e) => route("dashboard.admin.shop.products.update", { post: e }),
		destroy: (e) => route("dashboard.admin.shop.products.destroy", { post: e })
	},
	orders: {
		index: () => route("dashboard.admin.shop.orders.index"),
		show: (e) => route("dashboard.admin.shop.orders.show", { order: e }),
		update: (e) => route("dashboard.admin.shop.orders.update", { order: e }),
		destroy: (e) => route("dashboard.admin.shop.orders.destroy", { order: e }),
		refund: (e) => route("dashboard.admin.shop.orders.refund", { order: e }),
		notes: (e) => route("dashboard.admin.shop.orders.notes.store", { order: e })
	},
	payments: {
		index: () => route("dashboard.admin.shop.payments.index"),
		update: (e) => route("dashboard.admin.shop.payments.update", { gateway: e })
	},
	coupons: {
		index: () => route("dashboard.admin.shop.coupons.index"),
		store: () => route("dashboard.admin.shop.coupons.store"),
		update: (e) => route("dashboard.admin.shop.coupons.update", { coupon: e }),
		destroy: (e) => route("dashboard.admin.shop.coupons.destroy", { coupon: e })
	},
	settings: { index: () => route("dashboard.admin.shop.settings.index") }
} }, Ce = {
	code: "",
	description: "",
	type: "percent",
	amount: "10",
	min_subtotal: "",
	starts_at: "",
	expires_at: "",
	usage_limit: "",
	is_active: !0
}, we = (e) => e ? e.slice(0, 10) : "";
function Te(e) {
	return e.type === "percent" ? `${e.amount}% off` : e.type === "fixed" ? `${e.amount.toFixed(2)} off` : "Free shipping";
}
function Ee({ coupons: n, canManage: r }) {
	let { success: i, error: a } = ne(), [o, s] = U(!1), [c, v] = U(null), [y, j] = U(Ce), [M, N] = U({}), [P, F] = U(!1), I = n?.data ?? [], L = () => {
		v(null), j(Ce), N({}), s(!0);
	}, R = (e) => {
		v(e), j({
			code: e.code,
			description: e.description ?? "",
			type: e.type,
			amount: String(e.amount ?? ""),
			min_subtotal: e.min_subtotal === null ? "" : String(e.min_subtotal),
			starts_at: we(e.starts_at),
			expires_at: we(e.expires_at),
			usage_limit: e.usage_limit === null ? "" : String(e.usage_limit),
			is_active: e.is_active
		}), N({}), s(!0);
	}, B = () => {
		F(!0);
		let e = {
			code: y.code,
			description: y.description || null,
			type: y.type,
			amount: y.type === "free_shipping" ? 0 : Number(y.amount),
			min_subtotal: y.min_subtotal === "" ? null : Number(y.min_subtotal),
			starts_at: y.starts_at || null,
			expires_at: y.expires_at || null,
			usage_limit: y.usage_limit === "" ? null : Number(y.usage_limit),
			is_active: y.is_active
		}, t = {
			preserveScroll: !0,
			onSuccess: () => {
				i(c ? "Coupon updated" : "Coupon created"), s(!1);
			},
			onError: (e) => {
				N(e), a("Please check the coupon details");
			},
			onFinish: () => F(!1)
		};
		c ? z.put($.shop.coupons.update(c.id), e, t) : z.post($.shop.coupons.store(), e, t);
	}, V = (e) => {
		confirm(`Delete coupon ${e.code}? Orders that used it keep the code.`) && z.delete($.shop.coupons.destroy(e.id), {
			preserveScroll: !0,
			onSuccess: () => i("Coupon deleted"),
			onError: () => a("Could not delete the coupon")
		});
	}, H = (e) => M[e] ? /* @__PURE__ */ G("p", {
		className: "text-xs text-destructive",
		children: M[e]
	}) : null;
	return /* @__PURE__ */ K("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ G("div", {
				className: "flex justify-end",
				children: r && /* @__PURE__ */ K(t, {
					size: "sm",
					onClick: L,
					children: [/* @__PURE__ */ G(he, { className: "mr-2 h-4 w-4" }), "New coupon"]
				})
			}),
			I.length === 0 ? /* @__PURE__ */ G(h, {
				title: "No coupons yet",
				description: "Create a code customers can enter in their cart for a discount or free shipping."
			}) : /* @__PURE__ */ G(ee, { children: /* @__PURE__ */ K(E, { children: [/* @__PURE__ */ G(te, { children: /* @__PURE__ */ K(A, { children: [
				/* @__PURE__ */ G(k, { children: "Code" }),
				/* @__PURE__ */ G(k, { children: "Discount" }),
				/* @__PURE__ */ G(k, { children: "Used" }),
				/* @__PURE__ */ G(k, { children: "Valid" }),
				/* @__PURE__ */ G(k, { children: "Status" }),
				/* @__PURE__ */ G(k, {
					className: "text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ G(D, { children: I.map((n) => /* @__PURE__ */ K(A, { children: [
				/* @__PURE__ */ K(O, { children: [/* @__PURE__ */ G("div", {
					className: "font-mono font-medium",
					children: n.code
				}), n.description && /* @__PURE__ */ G("div", {
					className: "text-xs text-muted-foreground",
					children: n.description
				})] }),
				/* @__PURE__ */ K(O, { children: [Te(n), n.min_subtotal !== null && /* @__PURE__ */ K("div", {
					className: "text-xs text-muted-foreground",
					children: ["min. ", n.min_subtotal.toFixed(2)]
				})] }),
				/* @__PURE__ */ K(O, { children: [n.used_count, n.usage_limit !== null && ` / ${n.usage_limit}`] }),
				/* @__PURE__ */ K(O, {
					className: "text-sm text-muted-foreground",
					children: [
						we(n.starts_at) || "now",
						" → ",
						we(n.expires_at) || "no end"
					]
				}),
				/* @__PURE__ */ G(O, { children: /* @__PURE__ */ G(e, {
					variant: n.is_active ? "default" : "secondary",
					children: n.is_active ? "Active" : "Off"
				}) }),
				/* @__PURE__ */ G(O, {
					className: "space-x-2 text-right",
					children: r && /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ G(t, {
						variant: "outline",
						size: "sm",
						onClick: () => R(n),
						children: "Edit"
					}), /* @__PURE__ */ G(t, {
						variant: "ghost",
						size: "sm",
						className: "text-destructive",
						onClick: () => V(n),
						children: "Delete"
					})] })
				})
			] }, n.id)) })] }) }),
			/* @__PURE__ */ G(l, {
				open: o,
				onOpenChange: s,
				children: /* @__PURE__ */ K(u, { children: [
					/* @__PURE__ */ K(p, { children: [/* @__PURE__ */ G(m, { children: c ? `Edit ${c.code}` : "New coupon" }), /* @__PURE__ */ G(d, { children: "Codes are not case-sensitive for customers." })] }),
					/* @__PURE__ */ K("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ K("div", {
								className: "space-y-1 sm:col-span-2",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "coupon-code",
										children: "Code"
									}),
									/* @__PURE__ */ G(g, {
										id: "coupon-code",
										value: y.code,
										onChange: (e) => j({
											...y,
											code: e.target.value.toUpperCase()
										}),
										placeholder: "SUMMER10",
										className: "font-mono"
									}),
									H("code")
								]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1 sm:col-span-2",
								children: [/* @__PURE__ */ G(_, {
									htmlFor: "coupon-description",
									children: "Description (only shown to you)"
								}), /* @__PURE__ */ G(g, {
									id: "coupon-description",
									value: y.description,
									onChange: (e) => j({
										...y,
										description: e.target.value
									})
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ G(_, { children: "Type" }), /* @__PURE__ */ K(b, {
									value: y.type,
									onValueChange: (e) => j({
										...y,
										type: e
									}),
									children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, {}) }), /* @__PURE__ */ K(x, { children: [
										/* @__PURE__ */ G(S, {
											value: "percent",
											children: "Percentage off"
										}),
										/* @__PURE__ */ G(S, {
											value: "fixed",
											children: "Fixed amount off"
										}),
										/* @__PURE__ */ G(S, {
											value: "free_shipping",
											children: "Free shipping"
										})
									] })]
								})]
							}),
							y.type !== "free_shipping" && /* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "coupon-amount",
										children: y.type === "percent" ? "Percent" : "Amount"
									}),
									/* @__PURE__ */ G(g, {
										id: "coupon-amount",
										type: "number",
										min: 0,
										step: "0.01",
										value: y.amount,
										onChange: (e) => j({
											...y,
											amount: e.target.value
										})
									}),
									H("amount")
								]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ G(_, {
									htmlFor: "coupon-min",
									children: "Minimum order"
								}), /* @__PURE__ */ G(g, {
									id: "coupon-min",
									type: "number",
									min: 0,
									step: "0.01",
									value: y.min_subtotal,
									onChange: (e) => j({
										...y,
										min_subtotal: e.target.value
									}),
									placeholder: "none"
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ G(_, {
									htmlFor: "coupon-limit",
									children: "Usage limit"
								}), /* @__PURE__ */ G(g, {
									id: "coupon-limit",
									type: "number",
									min: 1,
									value: y.usage_limit,
									onChange: (e) => j({
										...y,
										usage_limit: e.target.value
									}),
									placeholder: "unlimited"
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ G(_, {
									htmlFor: "coupon-starts",
									children: "Starts"
								}), /* @__PURE__ */ G(g, {
									id: "coupon-starts",
									type: "date",
									value: y.starts_at,
									onChange: (e) => j({
										...y,
										starts_at: e.target.value
									})
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "coupon-expires",
										children: "Expires"
									}),
									/* @__PURE__ */ G(g, {
										id: "coupon-expires",
										type: "date",
										value: y.expires_at,
										onChange: (e) => j({
											...y,
											expires_at: e.target.value
										})
									}),
									H("expires_at")
								]
							}),
							/* @__PURE__ */ K("div", {
								className: "flex items-center justify-between sm:col-span-2",
								children: [/* @__PURE__ */ G(_, {
									htmlFor: "coupon-active",
									children: "Active"
								}), /* @__PURE__ */ G(T, {
									id: "coupon-active",
									checked: y.is_active,
									onCheckedChange: (e) => j({
										...y,
										is_active: e
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ K(f, { children: [/* @__PURE__ */ G(t, {
						variant: "outline",
						onClick: () => s(!1),
						children: "Cancel"
					}), /* @__PURE__ */ G(t, {
						onClick: B,
						disabled: P || y.code.trim() === "",
						children: P ? "Saving…" : "Save coupon"
					})] })
				] })
			})
		]
	});
}
//#endregion
//#region resources/js/screens/Coupons.tsx
function De({ shopCoupons: e }) {
	let t = q();
	return /* @__PURE__ */ K(y, {
		title: "Coupons",
		description: "Discount codes customers can enter in their cart.",
		children: [/* @__PURE__ */ G(L, { title: "Coupons" }), /* @__PURE__ */ G(Ee, {
			coupons: e,
			canManage: t("manage shop settings")
		})]
	});
}
//#endregion
//#region resources/js/components/ShopOrdersManager.tsx
function Oe({ orders: e, canView: n, canManage: r }) {
	let [i, a] = U(""), [o, s] = U("all"), c = ie(() => e?.data ?? [], [e]), l = (e, t = "USD") => `${{
		USD: "$",
		EUR: "€",
		GBP: "£",
		JPY: "¥"
	}[t] || "$"}${e.toFixed(2)}`, u = (e) => e ? new Date(e).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	}) : "—", d = (e) => {
		switch (e) {
			case "completed": return "bg-green-100 text-green-800";
			case "shipped": return "bg-purple-100 text-purple-800";
			case "processing": return "bg-blue-100 text-blue-800";
			case "pending": return "bg-yellow-100 text-yellow-800";
			case "cancelled": return "bg-red-100 text-red-800";
			case "refunded": return "bg-gray-100 text-gray-800";
			default: return "bg-gray-100 text-gray-800";
		}
	}, f = (e) => {
		switch (e) {
			case "paid": return "bg-green-100 text-green-800";
			case "pending": return "bg-yellow-100 text-yellow-800";
			case "failed": return "bg-red-100 text-red-800";
			case "refunded": return "bg-gray-100 text-gray-800";
			default: return "bg-gray-100 text-gray-800";
		}
	};
	return n ? /* @__PURE__ */ K("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ K("div", {
				className: "flex flex-col gap-4 sm:flex-row",
				children: [/* @__PURE__ */ K("form", {
					onSubmit: (e) => {
						e.preventDefault(), z.get(window.location.pathname, {
							search: i,
							status: o === "all" ? void 0 : o
						}, { preserveState: !0 });
					},
					className: "flex flex-1 gap-2",
					children: [/* @__PURE__ */ K("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ G(_e, { className: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ G(g, {
							placeholder: "Search by order number, email, or name...",
							value: i,
							onChange: (e) => a(e.target.value),
							className: "pl-9"
						})]
					}), /* @__PURE__ */ G(t, {
						type: "submit",
						variant: "secondary",
						children: "Search"
					})]
				}), /* @__PURE__ */ K(b, {
					value: o,
					onValueChange: (e) => {
						s(e), z.get(window.location.pathname, {
							search: i,
							status: e === "all" ? void 0 : e
						}, { preserveState: !0 });
					},
					children: [/* @__PURE__ */ G(C, {
						className: "w-[180px]",
						children: /* @__PURE__ */ G(w, { placeholder: "Filter by status" })
					}), /* @__PURE__ */ K(x, { children: [
						/* @__PURE__ */ G(S, {
							value: "all",
							children: "All Statuses"
						}),
						/* @__PURE__ */ G(S, {
							value: "pending",
							children: "Pending"
						}),
						/* @__PURE__ */ G(S, {
							value: "processing",
							children: "Processing"
						}),
						/* @__PURE__ */ G(S, {
							value: "shipped",
							children: "Shipped"
						}),
						/* @__PURE__ */ G(S, {
							value: "completed",
							children: "Completed"
						}),
						/* @__PURE__ */ G(S, {
							value: "cancelled",
							children: "Cancelled"
						}),
						/* @__PURE__ */ G(S, {
							value: "refunded",
							children: "Refunded"
						})
					] })]
				})]
			}),
			c.length === 0 ? /* @__PURE__ */ K("div", {
				className: "py-12 text-center",
				children: [/* @__PURE__ */ G(me, { className: "mx-auto mb-4 h-12 w-12 text-muted-foreground" }), /* @__PURE__ */ G("p", {
					className: "text-muted-foreground",
					children: "No orders found"
				})]
			}) : /* @__PURE__ */ G("div", {
				className: "overflow-hidden rounded-lg border",
				children: /* @__PURE__ */ K(E, { children: [/* @__PURE__ */ G(te, { children: /* @__PURE__ */ K(A, { children: [
					/* @__PURE__ */ G(k, { children: "Order" }),
					/* @__PURE__ */ G(k, { children: "Customer" }),
					/* @__PURE__ */ G(k, { children: "Status" }),
					/* @__PURE__ */ G(k, { children: "Payment" }),
					/* @__PURE__ */ G(k, { children: "Items" }),
					/* @__PURE__ */ G(k, {
						className: "text-right",
						children: "Total"
					}),
					/* @__PURE__ */ G(k, { children: "Date" }),
					/* @__PURE__ */ G(k, { className: "w-[80px]" })
				] }) }), /* @__PURE__ */ G(D, { children: c.map((e) => /* @__PURE__ */ K(A, { children: [
					/* @__PURE__ */ G(O, {
						className: "font-medium",
						children: e.order_number
					}),
					/* @__PURE__ */ G(O, { children: /* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G("p", {
						className: "font-medium",
						children: e.customer_name
					}), /* @__PURE__ */ G("p", {
						className: "text-sm text-muted-foreground",
						children: e.customer_email
					})] }) }),
					/* @__PURE__ */ G(O, { children: /* @__PURE__ */ G("span", {
						className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${d(e.status)}`,
						children: e.status_label
					}) }),
					/* @__PURE__ */ G(O, { children: /* @__PURE__ */ G("span", {
						className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${f(e.payment_status)}`,
						children: e.payment_status_label
					}) }),
					/* @__PURE__ */ G(O, { children: e.item_count }),
					/* @__PURE__ */ G(O, {
						className: "text-right font-medium",
						children: l(e.total, e.currency)
					}),
					/* @__PURE__ */ G(O, {
						className: "text-sm text-muted-foreground",
						children: u(e.created_at)
					}),
					/* @__PURE__ */ G(O, { children: /* @__PURE__ */ G(t, {
						variant: "ghost",
						size: "icon",
						onClick: () => z.visit(`/dashboard/admin/shop/orders/${e.id}`),
						children: /* @__PURE__ */ G(fe, { className: "h-4 w-4" })
					}) })
				] }, e.id)) })] })
			}),
			e && e.last_page > 1 && /* @__PURE__ */ K("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ K("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Showing ",
						(e.current_page - 1) * e.per_page + 1,
						" to ",
						Math.min(e.current_page * e.per_page, e.total),
						" ",
						"of ",
						e.total,
						" orders"
					]
				}), /* @__PURE__ */ K("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ G(t, {
						variant: "outline",
						size: "sm",
						disabled: e.current_page <= 1,
						onClick: () => z.get(window.location.pathname, { page: e.current_page - 1 }, { preserveState: !0 }),
						children: /* @__PURE__ */ G(ue, { className: "h-4 w-4" })
					}), /* @__PURE__ */ G(t, {
						variant: "outline",
						size: "sm",
						disabled: e.current_page >= e.last_page,
						onClick: () => z.get(window.location.pathname, { page: e.current_page + 1 }, { preserveState: !0 }),
						children: /* @__PURE__ */ G(de, { className: "h-4 w-4" })
					})]
				})]
			})
		]
	}) : /* @__PURE__ */ G("div", {
		className: "py-12 text-center text-muted-foreground",
		children: "You don't have permission to view orders."
	});
}
//#endregion
//#region resources/js/screens/Orders.tsx
function ke({ shopOrders: e }) {
	let t = q();
	return /* @__PURE__ */ K(y, {
		title: "Orders",
		description: "Track and manage customer orders.",
		children: [/* @__PURE__ */ G(L, { title: "Orders" }), /* @__PURE__ */ G(Oe, {
			orders: e,
			canView: t("view shop orders"),
			canManage: t("manage shop orders")
		})]
	});
}
//#endregion
//#region resources/js/components/ShopOrderView.tsx
var Ae = [
	["pending", "Pending"],
	["processing", "Processing"],
	["shipped", "Shipped"],
	["completed", "Completed"],
	["cancelled", "Cancelled"],
	["refunded", "Refunded"]
], je = [
	["pending", "Pending"],
	["paid", "Paid"],
	["failed", "Failed"],
	["refunded", "Refunded"]
], Me = (e) => e ? new Date(e).toLocaleString() : "";
function Ne({ order: l, canManage: u }) {
	let { success: d, error: f } = ne(), [p, m] = U(l?.status ?? "pending"), [h, v] = U(l?.payment_status ?? "pending"), [y, T] = U(l?.tracking_number ?? ""), [ee, j] = U(!1), [M, N] = U(""), [P, I] = U(!1), [L, R] = U(!1), B = (e, t = "USD") => {
		let n = typeof e == "number" ? e : 0;
		return `${{
			USD: "$",
			EUR: "€",
			GBP: "£",
			JPY: "¥"
		}[t] ?? t + " "}${n.toFixed(2)}`;
	}, V = (e) => e ? [
		e.address_1,
		e.address_2,
		`${e.city || ""}${e.state ? `, ${e.state}` : ""} ${e.postcode || ""}`.trim(),
		e.country
	].filter(Boolean).join(", ") : "—";
	if (!l) return /* @__PURE__ */ K(n, { children: [/* @__PURE__ */ K(o, { children: [/* @__PURE__ */ G(s, { children: "Order not found" }), /* @__PURE__ */ G(i, { children: "The requested order could not be loaded." })] }), /* @__PURE__ */ G(a, { children: /* @__PURE__ */ G(t, {
		variant: "outline",
		onClick: () => z.visit($.shop.orders.index()),
		children: "Back to Orders"
	}) })] });
	let H = p !== l.status || h !== l.payment_status || y !== (l.tracking_number ?? ""), re = () => {
		j(!0), z.put($.shop.orders.update(l.id), {
			status: p,
			payment_status: h,
			tracking_number: y || null
		}, {
			preserveScroll: !0,
			onError: (e) => f(Object.values(e)[0] ?? "Could not update the order"),
			onFinish: () => j(!1)
		});
	}, ie = () => {
		R(!0), z.post($.shop.orders.notes(l.id), {
			message: M,
			notify_customer: P
		}, {
			preserveScroll: !0,
			onSuccess: () => {
				N(""), I(!1);
			},
			onError: () => f("Could not add the note"),
			onFinish: () => R(!1)
		});
	}, q = () => {
		let e = l.refunds_online ? "The money is refunded at the payment provider." : "This only marks the order as refunded; send the money back yourself.";
		confirm(`Refund ${B(l.total, l.currency)} for order ${l.order_number}? ${e}`) && z.post($.shop.orders.refund(l.id), {}, {
			preserveScroll: !0,
			onSuccess: () => d("Refund recorded")
		});
	}, J = [...l.admin_note ? [{
		id: 0,
		type: "note",
		message: l.admin_note,
		customer_notified: !1,
		author: null,
		created_at: null
	}] : [], ...l.notes ?? []];
	return /* @__PURE__ */ K("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ K(n, { children: [
				/* @__PURE__ */ K(o, {
					className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ K("div", { children: [/* @__PURE__ */ K(s, { children: ["Order ", l.order_number] }), /* @__PURE__ */ K(i, { children: [
						"Placed by ",
						l.customer_name,
						" on ",
						Me(l.created_at)
					] })] }), /* @__PURE__ */ K("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							l.invoice_url && /* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								asChild: !0,
								children: /* @__PURE__ */ G("a", {
									href: l.invoice_url,
									target: "_blank",
									rel: "noopener",
									children: "Invoice"
								})
							}),
							/* @__PURE__ */ G(e, {
								variant: "outline",
								children: l.status_label
							}),
							/* @__PURE__ */ G(e, {
								variant: l.payment_status === "paid" ? "default" : "secondary",
								children: l.payment_status_label
							})
						]
					})]
				}),
				/* @__PURE__ */ K(r, {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ K("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ G(_, {
									htmlFor: "order-status",
									children: "Status"
								}),
								/* @__PURE__ */ K(b, {
									value: p,
									onValueChange: m,
									disabled: !u,
									children: [/* @__PURE__ */ G(C, {
										id: "order-status",
										children: /* @__PURE__ */ G(w, {})
									}), /* @__PURE__ */ G(x, { children: Ae.map(([e, t]) => /* @__PURE__ */ G(S, {
										value: e,
										children: t
									}, e)) })]
								}),
								/* @__PURE__ */ G("p", {
									className: "text-xs text-muted-foreground",
									children: "Shipped, completed and cancelled email the customer."
								})
							]
						}),
						/* @__PURE__ */ K("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ G(_, {
									htmlFor: "order-payment",
									children: "Payment"
								}),
								/* @__PURE__ */ K(b, {
									value: h,
									onValueChange: v,
									disabled: !u,
									children: [/* @__PURE__ */ G(C, {
										id: "order-payment",
										children: /* @__PURE__ */ G(w, {})
									}), /* @__PURE__ */ G(x, { children: je.map(([e, t]) => /* @__PURE__ */ G(S, {
										value: e,
										children: t
									}, e)) })]
								}),
								/* @__PURE__ */ G("p", {
									className: "text-xs text-muted-foreground",
									children: "Online payments update this by themselves."
								})
							]
						}),
						/* @__PURE__ */ K("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ G(_, {
								htmlFor: "order-tracking",
								children: "Tracking number"
							}), /* @__PURE__ */ G(g, {
								id: "order-tracking",
								value: y,
								onChange: (e) => T(e.target.value),
								disabled: !u
							})]
						})
					]
				}),
				u && /* @__PURE__ */ K(a, {
					className: "flex flex-wrap justify-between gap-2",
					children: [/* @__PURE__ */ G("div", { children: l.can_refund && /* @__PURE__ */ K(t, {
						variant: "destructive",
						onClick: q,
						children: ["Refund ", B(l.total, l.currency)]
					}) }), /* @__PURE__ */ G(t, {
						onClick: re,
						disabled: !H || ee,
						children: ee ? "Saving…" : "Save changes"
					})]
				})
			] }),
			/* @__PURE__ */ K("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ K(n, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ G(o, { children: /* @__PURE__ */ G(s, { children: "Items" }) }), /* @__PURE__ */ K(r, { children: [/* @__PURE__ */ K(E, { children: [/* @__PURE__ */ G(te, { children: /* @__PURE__ */ K(A, { children: [
						/* @__PURE__ */ G(k, { children: "Product" }),
						/* @__PURE__ */ G(k, { children: "SKU" }),
						/* @__PURE__ */ G(k, {
							className: "text-right",
							children: "Qty"
						}),
						/* @__PURE__ */ G(k, {
							className: "text-right",
							children: "Price"
						}),
						/* @__PURE__ */ G(k, {
							className: "text-right",
							children: "Subtotal"
						})
					] }) }), /* @__PURE__ */ G(D, { children: (l.items ?? []).map((e) => /* @__PURE__ */ K(A, { children: [
						/* @__PURE__ */ G(O, {
							className: "font-medium",
							children: e.product_name
						}),
						/* @__PURE__ */ G(O, {
							className: "text-muted-foreground",
							children: e.product_sku || "—"
						}),
						/* @__PURE__ */ G(O, {
							className: "text-right",
							children: e.quantity
						}),
						/* @__PURE__ */ G(O, {
							className: "text-right",
							children: B(e.price, l.currency)
						}),
						/* @__PURE__ */ G(O, {
							className: "text-right",
							children: B(e.subtotal, l.currency)
						})
					] }, e.id)) })] }), /* @__PURE__ */ K("dl", {
						className: "mt-4 ml-auto grid max-w-xs grid-cols-2 gap-x-6 gap-y-1 text-sm",
						children: [
							/* @__PURE__ */ G("dt", {
								className: "text-muted-foreground",
								children: "Subtotal"
							}),
							/* @__PURE__ */ G("dd", {
								className: "text-right",
								children: B(l.subtotal, l.currency)
							}),
							(l.discount ?? 0) > 0 && /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ K("dt", {
								className: "text-muted-foreground",
								children: ["Discount", l.coupon_code ? ` (${l.coupon_code})` : ""]
							}), /* @__PURE__ */ K("dd", {
								className: "text-right",
								children: ["-", B(l.discount, l.currency)]
							})] }),
							/* @__PURE__ */ K("dt", {
								className: "text-muted-foreground",
								children: ["Shipping", l.shipping_method ? ` (${l.shipping_method})` : ""]
							}),
							/* @__PURE__ */ G("dd", {
								className: "text-right",
								children: B(l.shipping, l.currency)
							}),
							/* @__PURE__ */ G("dt", {
								className: "text-muted-foreground",
								children: "Tax"
							}),
							/* @__PURE__ */ G("dd", {
								className: "text-right",
								children: B(l.tax, l.currency)
							}),
							/* @__PURE__ */ G("dt", {
								className: "font-medium",
								children: "Total"
							}),
							/* @__PURE__ */ G("dd", {
								className: "text-right font-semibold",
								children: B(l.total, l.currency)
							})
						]
					})] })]
				}), /* @__PURE__ */ K(n, { children: [/* @__PURE__ */ G(o, { children: /* @__PURE__ */ G(s, { children: "Customer" }) }), /* @__PURE__ */ K(r, {
					className: "space-y-4 text-sm",
					children: [
						/* @__PURE__ */ K("div", { children: [
							/* @__PURE__ */ G("div", {
								className: "font-medium",
								children: l.customer_name
							}),
							/* @__PURE__ */ G("a", {
								className: "text-muted-foreground underline",
								href: `mailto:${l.customer_email}`,
								children: l.customer_email
							}),
							l.customer_phone && /* @__PURE__ */ G("div", {
								className: "text-muted-foreground",
								children: l.customer_phone
							})
						] }),
						/* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G("div", {
							className: "text-muted-foreground",
							children: "Billing address"
						}), /* @__PURE__ */ G("div", { children: V(l.billing_address) })] }),
						/* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G("div", {
							className: "text-muted-foreground",
							children: "Shipping address"
						}), /* @__PURE__ */ G("div", { children: V(l.shipping_address) })] }),
						l.customer_note && /* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G("div", {
							className: "text-muted-foreground",
							children: "Customer note"
						}), /* @__PURE__ */ G("div", {
							className: "whitespace-pre-line",
							children: l.customer_note
						})] }),
						/* @__PURE__ */ K("div", { children: [
							/* @__PURE__ */ G("div", {
								className: "text-muted-foreground",
								children: "Payment method"
							}),
							/* @__PURE__ */ G("div", { children: l.payment_method ?? "—" }),
							l.transaction_id && /* @__PURE__ */ G("div", {
								className: "font-mono text-xs text-muted-foreground",
								children: l.transaction_id
							})
						] })
					]
				})] })]
			}),
			(l.payments?.length ?? 0) > 0 && /* @__PURE__ */ K(n, { children: [/* @__PURE__ */ K(o, { children: [/* @__PURE__ */ G(s, { children: "Payment attempts" }), /* @__PURE__ */ G(i, { children: "Every time the customer was sent to a payment provider." })] }), /* @__PURE__ */ G(r, { children: /* @__PURE__ */ K(E, { children: [/* @__PURE__ */ G(te, { children: /* @__PURE__ */ K(A, { children: [
				/* @__PURE__ */ G(k, { children: "When" }),
				/* @__PURE__ */ G(k, { children: "Provider" }),
				/* @__PURE__ */ G(k, { children: "Reference" }),
				/* @__PURE__ */ G(k, { children: "Status" }),
				/* @__PURE__ */ G(k, {
					className: "text-right",
					children: "Amount"
				})
			] }) }), /* @__PURE__ */ G(D, { children: l.payments.map((t) => /* @__PURE__ */ K(A, { children: [
				/* @__PURE__ */ G(O, { children: Me(t.created_at) }),
				/* @__PURE__ */ G(O, { children: t.gateway }),
				/* @__PURE__ */ G(O, {
					className: "font-mono text-xs",
					children: t.provider_ref
				}),
				/* @__PURE__ */ G(O, { children: /* @__PURE__ */ G(e, {
					variant: t.status === "paid" ? "default" : "secondary",
					children: t.status
				}) }),
				/* @__PURE__ */ G(O, {
					className: "text-right",
					children: B(t.amount, t.currency)
				})
			] }, t.id)) })] }) })] }),
			/* @__PURE__ */ K(n, { children: [/* @__PURE__ */ K(o, { children: [/* @__PURE__ */ G(s, { children: "History" }), /* @__PURE__ */ G(i, { children: "Notes from staff, status changes and payment events." })] }), /* @__PURE__ */ K(r, {
				className: "space-y-4",
				children: [
					J.length === 0 && /* @__PURE__ */ G("p", {
						className: "text-sm text-muted-foreground",
						children: "Nothing yet."
					}),
					/* @__PURE__ */ G("ol", {
						className: "space-y-3",
						children: J.map((e) => /* @__PURE__ */ K("li", {
							className: `rounded-md border p-3 text-sm ${e.type === "note" ? "bg-muted/40" : ""}`,
							children: [/* @__PURE__ */ G("div", {
								className: "whitespace-pre-line",
								children: e.message
							}), /* @__PURE__ */ K("div", {
								className: "mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground",
								children: [
									e.created_at && /* @__PURE__ */ G("span", { children: Me(e.created_at) }),
									e.author && /* @__PURE__ */ K("span", { children: ["by ", e.author] }),
									e.type !== "note" && /* @__PURE__ */ K("span", { children: ["· ", e.type] }),
									e.customer_notified && /* @__PURE__ */ G("span", { children: "· emailed to customer" })
								]
							})]
						}, `${e.id}-${e.created_at}`))
					}),
					u && /* @__PURE__ */ K("div", {
						className: "space-y-2 border-t pt-4",
						children: [
							/* @__PURE__ */ G(_, {
								htmlFor: "order-note",
								children: "Add a note"
							}),
							/* @__PURE__ */ G(F, {
								id: "order-note",
								rows: 3,
								value: M,
								onChange: (e) => N(e.target.value)
							}),
							/* @__PURE__ */ K("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ K("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ G(c, {
										checked: P,
										onCheckedChange: (e) => I(e === !0)
									}), "Email this note to the customer"]
								}), /* @__PURE__ */ G(t, {
									onClick: ie,
									disabled: L || M.trim() === "",
									children: L ? "Adding…" : "Add note"
								})]
							})
						]
					})
				]
			})] })
		]
	});
}
//#endregion
//#region resources/js/screens/OrderView.tsx
function Pe({ shopOrder: e }) {
	let n = q();
	return /* @__PURE__ */ K(y, {
		title: e ? `Order ${e.order_number}` : "Order",
		description: "View order information and update status.",
		actions: /* @__PURE__ */ G(t, {
			variant: "outline",
			size: "sm",
			asChild: !0,
			children: /* @__PURE__ */ G(R, {
				href: $.shop.orders.index(),
				children: "Back to orders"
			})
		}),
		children: [/* @__PURE__ */ G(L, { title: e ? `Order ${e.order_number}` : "Order" }), /* @__PURE__ */ G(Ne, {
			order: e,
			canManage: n("manage shop orders")
		})]
	});
}
//#endregion
//#region resources/js/components/ShopPaymentsManager.tsx
function Fe({ gateway: c, canManage: l }) {
	let { success: u, error: d } = ne(), [f, p] = U(c.enabled), [m, h] = U(() => Object.fromEntries(c.fields.map((e) => [e.key, e.type === "secret" ? "" : String(c.values[e.key] ?? "")]))), [v, y] = U([]), [E, D] = U(!1);
	return /* @__PURE__ */ K(n, { children: [
		/* @__PURE__ */ K(o, {
			className: "flex flex-row items-start justify-between gap-4 space-y-0",
			children: [/* @__PURE__ */ K("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ K(s, {
					className: "flex items-center gap-2",
					children: [c.label, c.online && /* @__PURE__ */ G(e, {
						variant: "outline",
						children: "Online"
					})]
				}), /* @__PURE__ */ K(i, { children: [
					c.enabled && c.configured && "Offered at checkout.",
					c.enabled && !c.configured && "Switched on, but not offered until its keys are filled in.",
					!c.enabled && "Not offered at checkout."
				] })]
			}), /* @__PURE__ */ G(T, {
				checked: f,
				onCheckedChange: p,
				disabled: !l,
				"aria-label": `Offer ${c.label}`
			})]
		}),
		c.fields.length > 0 && /* @__PURE__ */ K(r, {
			className: "grid gap-4 md:grid-cols-2",
			children: [c.fields.map((e) => {
				let n = `${c.id}-${e.key}`, r = e.type === "secret" && c.values[e.key] === !0 && !v.includes(e.key);
				return /* @__PURE__ */ K("div", {
					className: `space-y-1 ${e.type === "textarea" ? "md:col-span-2" : ""}`,
					children: [
						/* @__PURE__ */ G(_, {
							htmlFor: n,
							children: e.label
						}),
						e.type === "textarea" ? /* @__PURE__ */ G(F, {
							id: n,
							rows: 4,
							value: m[e.key],
							onChange: (t) => h({
								...m,
								[e.key]: t.target.value
							}),
							disabled: !l
						}) : e.type === "select" ? /* @__PURE__ */ K(b, {
							value: m[e.key] || void 0,
							onValueChange: (t) => h({
								...m,
								[e.key]: t
							}),
							disabled: !l,
							children: [/* @__PURE__ */ G(C, {
								id: n,
								children: /* @__PURE__ */ G(w, { placeholder: "Choose…" })
							}), /* @__PURE__ */ G(x, { children: Object.entries(e.options ?? {}).map(([e, t]) => /* @__PURE__ */ G(S, {
								value: e,
								children: t
							}, e)) })]
						}) : /* @__PURE__ */ K("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ G(g, {
								id: n,
								type: e.type === "secret" ? "password" : "text",
								autoComplete: "off",
								value: m[e.key],
								placeholder: r ? "•••••••• saved (type to replace)" : "",
								onChange: (t) => h({
									...m,
									[e.key]: t.target.value
								}),
								disabled: !l
							}), r && l && /* @__PURE__ */ G(t, {
								type: "button",
								variant: "ghost",
								size: "sm",
								onClick: () => y([...v, e.key]),
								children: "Remove"
							})]
						}),
						e.help && /* @__PURE__ */ G("p", {
							className: "text-xs text-muted-foreground",
							children: e.help
						})
					]
				}, e.key);
			}), c.webhook_url && /* @__PURE__ */ K("div", {
				className: "space-y-1 md:col-span-2",
				children: [/* @__PURE__ */ G(_, {
					htmlFor: `${c.id}-webhook`,
					children: "Webhook URL"
				}), /* @__PURE__ */ K("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ G(g, {
						id: `${c.id}-webhook`,
						readOnly: !0,
						value: c.webhook_url,
						className: "font-mono text-xs"
					}), /* @__PURE__ */ G(t, {
						type: "button",
						variant: "outline",
						size: "icon",
						onClick: async () => {
							if (c.webhook_url) try {
								await navigator.clipboard.writeText(c.webhook_url), u("Webhook URL copied");
							} catch {
								d("Copy failed; select the URL and copy it by hand");
							}
						},
						"aria-label": "Copy webhook URL",
						children: /* @__PURE__ */ G(Z, { className: "h-4 w-4" })
					})]
				})]
			})]
		}),
		l && /* @__PURE__ */ G(a, {
			className: "justify-end",
			children: /* @__PURE__ */ G(t, {
				onClick: () => {
					D(!0), z.put($.shop.payments.update(c.id), {
						enabled: f,
						values: m,
						forget: v
					}, {
						preserveScroll: !0,
						onSuccess: () => {
							h((e) => Object.fromEntries(Object.entries(e).map(([e, t]) => [e, c.fields.find((t) => t.key === e)?.type === "secret" ? "" : t]))), y([]);
						},
						onError: () => d(`Could not save ${c.label}`),
						onFinish: () => D(!1)
					});
				},
				disabled: E,
				children: E ? "Saving…" : `Save ${c.label}`
			})
		})
	] });
}
function Ie({ gateways: e, canManage: t }) {
	return /* @__PURE__ */ K("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ K("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"Keys are stored encrypted and never shown again after saving. Use test keys first (Stripe ",
				/* @__PURE__ */ G("code", { children: "sk_test_…" }),
				", PayPal sandbox, Mollie ",
				/* @__PURE__ */ G("code", { children: "test_…" }),
				") and place a test order before switching to live keys."
			]
		}), e.map((e) => /* @__PURE__ */ G(Fe, {
			gateway: e,
			canManage: t
		}, e.id))]
	});
}
//#endregion
//#region resources/js/screens/Payments.tsx
function Le({ shopGateways: e }) {
	let t = q();
	return /* @__PURE__ */ K(y, {
		title: "Payments",
		description: "Choose how customers can pay. Online methods send them to the provider's secure page.",
		children: [/* @__PURE__ */ G(L, { title: "Payments" }), /* @__PURE__ */ G(Ie, {
			gateways: e ?? [],
			canManage: t("manage shop settings")
		})]
	});
}
//#endregion
//#region resources/js/components/ProductDetailsFields.tsx
function Re({ label: e, terms: t, selected: n, onChange: r }) {
	return t.length === 0 ? /* @__PURE__ */ K("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ G(_, { children: e }), /* @__PURE__ */ G("p", {
			className: "text-xs text-muted-foreground",
			children: "None yet. Add them under the shop taxonomies."
		})]
	}) : /* @__PURE__ */ K("fieldset", {
		className: "space-y-2",
		children: [/* @__PURE__ */ G("legend", {
			className: "text-sm font-medium",
			children: e
		}), /* @__PURE__ */ G("div", {
			className: "flex flex-wrap gap-x-4 gap-y-2",
			children: t.map((e) => /* @__PURE__ */ K("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ G(c, {
					checked: n.includes(e.id),
					onCheckedChange: (t) => r(t === !0 ? [...n, e.id] : n.filter((t) => t !== e.id))
				}), e.name]
			}, e.id))
		})]
	});
}
function ze({ value: e, onChange: n, categories: r, tags: i, errors: a }) {
	let [o, s] = U(null), c = (e) => a[e] ? /* @__PURE__ */ G("p", {
		className: "text-xs text-destructive",
		children: a[e]
	}) : null, l = (t, r) => n({ variants: e.variants.map((e, n) => n === t ? {
		...e,
		...r
	} : e) });
	return /* @__PURE__ */ K("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ K("section", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					/* @__PURE__ */ K("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ G(_, {
								htmlFor: "pd-sale",
								children: "Sale price"
							}),
							/* @__PURE__ */ G(g, {
								id: "pd-sale",
								type: "number",
								min: 0,
								step: "0.01",
								value: e.sale_price,
								onChange: (e) => n({ sale_price: e.target.value })
							}),
							c("sale_price")
						]
					}),
					/* @__PURE__ */ K("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ G(_, {
							htmlFor: "pd-sale-from",
							children: "Sale from"
						}), /* @__PURE__ */ G(g, {
							id: "pd-sale-from",
							type: "date",
							value: e.sale_starts_at,
							onChange: (e) => n({ sale_starts_at: e.target.value })
						})]
					}),
					/* @__PURE__ */ K("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ G(_, {
								htmlFor: "pd-sale-to",
								children: "Sale until"
							}),
							/* @__PURE__ */ G(g, {
								id: "pd-sale-to",
								type: "date",
								value: e.sale_ends_at,
								onChange: (e) => n({ sale_ends_at: e.target.value })
							}),
							c("sale_ends_at")
						]
					}),
					/* @__PURE__ */ K("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ G(_, {
							htmlFor: "pd-weight",
							children: "Weight (kg)"
						}), /* @__PURE__ */ G(g, {
							id: "pd-weight",
							type: "number",
							min: 0,
							step: "0.001",
							value: e.weight,
							onChange: (e) => n({ weight: e.target.value })
						})]
					}),
					/* @__PURE__ */ G("p", {
						className: "text-xs text-muted-foreground md:col-span-4",
						children: "Leave the dates empty for a sale without a start or end."
					})
				]
			}),
			/* @__PURE__ */ K("section", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ G(_, { children: "Images" }),
					/* @__PURE__ */ K("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ G("div", {
								className: "space-y-1",
								children: e.featured_image ? /* @__PURE__ */ K("div", {
									className: "relative",
									children: [/* @__PURE__ */ G("img", {
										src: e.featured_image,
										alt: "",
										className: "h-24 w-24 rounded-md border object-cover"
									}), /* @__PURE__ */ G("button", {
										type: "button",
										onClick: () => n({ featured_image: "" }),
										className: "absolute -top-2 -right-2 rounded-full bg-background p-0.5 shadow",
										"aria-label": "Remove main image",
										children: /* @__PURE__ */ G(Se, { className: "h-4 w-4" })
									})]
								}) : /* @__PURE__ */ K(t, {
									type: "button",
									variant: "outline",
									className: "h-24 w-24 flex-col",
									onClick: () => s("featured"),
									children: [/* @__PURE__ */ G(pe, { className: "h-5 w-5" }), /* @__PURE__ */ G("span", {
										className: "text-xs",
										children: "Main image"
									})]
								})
							}),
							e.gallery.map((t, r) => /* @__PURE__ */ K("div", {
								className: "relative",
								children: [/* @__PURE__ */ G("img", {
									src: t,
									alt: "",
									className: "h-24 w-24 rounded-md border object-cover"
								}), /* @__PURE__ */ G("button", {
									type: "button",
									onClick: () => n({ gallery: e.gallery.filter((e, t) => t !== r) }),
									className: "absolute -top-2 -right-2 rounded-full bg-background p-0.5 shadow",
									"aria-label": "Remove image",
									children: /* @__PURE__ */ G(Se, { className: "h-4 w-4" })
								})]
							}, `${t}-${r}`)),
							/* @__PURE__ */ K(t, {
								type: "button",
								variant: "outline",
								className: "h-24 w-24 flex-col",
								onClick: () => s("gallery"),
								children: [/* @__PURE__ */ G(he, { className: "h-5 w-5" }), /* @__PURE__ */ G("span", {
									className: "text-xs",
									children: "Gallery"
								})]
							})
						]
					}),
					/* @__PURE__ */ G(v, {
						open: o !== null,
						onOpenChange: (e) => !e && s(null),
						onSelect: (t) => {
							o === "featured" && n({ featured_image: t.url }), o === "gallery" && n({ gallery: [...e.gallery, t.url] }), s(null);
						}
					})
				]
			}),
			/* @__PURE__ */ K("section", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ G(Re, {
					label: "Categories",
					terms: r,
					selected: e.categories,
					onChange: (e) => n({ categories: e })
				}), /* @__PURE__ */ G(Re, {
					label: "Tags",
					terms: i,
					selected: e.tags,
					onChange: (e) => n({ tags: e })
				})]
			}),
			/* @__PURE__ */ K("section", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G(_, { children: "Variations" }), /* @__PURE__ */ G("p", {
						className: "text-xs text-muted-foreground",
						children: "Sizes, colours… Customers must pick one. Empty price uses the product price; empty stock is not tracked."
					})] }),
					e.variants.map((r, i) => /* @__PURE__ */ K("div", {
						className: "grid grid-cols-[1fr_7rem_6rem_5rem_auto] items-end gap-2",
						children: [
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [i === 0 && /* @__PURE__ */ G(_, {
									className: "text-xs",
									children: "Option"
								}), /* @__PURE__ */ G(g, {
									value: r.name,
									placeholder: "Red / L",
									onChange: (e) => l(i, { name: e.target.value }),
									"aria-label": "Option name"
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [i === 0 && /* @__PURE__ */ G(_, {
									className: "text-xs",
									children: "SKU"
								}), /* @__PURE__ */ G(g, {
									value: r.sku,
									onChange: (e) => l(i, { sku: e.target.value }),
									"aria-label": "Option SKU"
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [i === 0 && /* @__PURE__ */ G(_, {
									className: "text-xs",
									children: "Price"
								}), /* @__PURE__ */ G(g, {
									type: "number",
									min: 0,
									step: "0.01",
									value: r.price,
									onChange: (e) => l(i, { price: e.target.value }),
									"aria-label": "Option price"
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "space-y-1",
								children: [i === 0 && /* @__PURE__ */ G(_, {
									className: "text-xs",
									children: "Stock"
								}), /* @__PURE__ */ G(g, {
									type: "number",
									min: 0,
									value: r.stock,
									onChange: (e) => l(i, { stock: e.target.value }),
									"aria-label": "Option stock"
								})]
							}),
							/* @__PURE__ */ G(t, {
								type: "button",
								variant: "ghost",
								size: "icon",
								onClick: () => n({ variants: e.variants.filter((e, t) => t !== i) }),
								"aria-label": `Remove ${r.name || "option"}`,
								children: /* @__PURE__ */ G(be, { className: "h-4 w-4" })
							})
						]
					}, r.id ?? `new-${i}`)),
					c("variants"),
					/* @__PURE__ */ K(t, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => n({ variants: [...e.variants, {
							name: "",
							sku: "",
							price: "",
							stock: ""
						}] }),
						children: [/* @__PURE__ */ G(he, { className: "mr-2 h-4 w-4" }), "Add variation"]
					})
				]
			})
		]
	});
}
function Be(e) {
	let t = (e) => e == null ? "" : String(e);
	return {
		sale_price: t(e?.sale_price),
		sale_starts_at: t(e?.sale_starts_at).slice(0, 10),
		sale_ends_at: t(e?.sale_ends_at).slice(0, 10),
		weight: t(e?.weight),
		featured_image: t(e?.featured_image),
		gallery: Array.isArray(e?.gallery) ? e.gallery.filter((e) => typeof e == "string") : [],
		categories: Array.isArray(e?.categories) ? e.categories : [],
		tags: Array.isArray(e?.tags) ? e.tags : [],
		variants: Array.isArray(e?.variants) ? e.variants.map((e) => ({
			id: typeof e.id == "string" ? e.id : void 0,
			name: t(e.name),
			sku: t(e.sku),
			price: t(e.price),
			stock: t(e.stock)
		})) : []
	};
}
function Ve(e) {
	let t = (e) => e.trim() === "" ? null : Number(e);
	return {
		sale_price: t(e.sale_price),
		sale_starts_at: e.sale_starts_at || null,
		sale_ends_at: e.sale_ends_at || null,
		weight: t(e.weight),
		featured_image: e.featured_image || null,
		gallery: e.gallery,
		categories: e.categories,
		tags: e.tags,
		variants: e.variants.filter((e) => e.name.trim() !== "").map((e) => ({
			id: e.id,
			name: e.name.trim(),
			sku: e.sku || null,
			price: t(e.price),
			stock: t(e.stock)
		}))
	};
}
//#endregion
//#region resources/js/components/ShopProductsManager.tsx
function He({ products: c, categories: h = [], tags: v = [], initialEdit: y = null, canView: T, canCreate: j, canEdit: M, canDelete: N }) {
	let { success: P, error: I } = ne(), L = B().props?.errors || {}, [R, V] = U(!1), [H, W] = U({}), [q, J] = U({
		sku: "",
		name: "",
		slug: "",
		description: "",
		price: "0",
		sale_price: "",
		currency: "USD",
		stock: "",
		status: "published",
		featured_image: ""
	}), ae = ie(() => c?.data ?? [], [c]), oe = j && q.name.trim().length > 0 && String(q.price).trim().length > 0, Y = ie(() => ({
		...L,
		...H
	}), [L, H]), [se, ce] = U(!1), [le, X] = U(Be(null)), [ue, de] = U(null), [Z, Q] = U({
		sku: "",
		name: "",
		slug: "",
		description: "",
		price: "0",
		sale_price: "",
		currency: "USD",
		stock: "",
		status: "published",
		featured_image: ""
	}), fe = (e) => {
		M && (de(e), Q({
			sku: e.sku ?? "",
			name: e.name ?? "",
			slug: e.slug ?? "",
			description: e.description ?? "",
			price: String(e.price ?? "0"),
			sale_price: e.sale_price ? String(e.sale_price) : "",
			currency: e.currency ?? "USD",
			stock: e.stock === null || e.stock === void 0 ? "" : String(e.stock),
			status: e.is_active ? "published" : "draft",
			featured_image: e.featured_image ?? ""
		}), X(Be(e)), W({}), ce(!0));
	};
	re(() => {
		y && fe(y);
	}, [y?.id]);
	let pe = (e) => {
		z.visit(`${$.shop.products.index()}?page=${e}`, { preserveScroll: !0 });
	}, me = () => {
		oe && (V(!0), W({}), z.post($.shop.products.store(), {
			sku: q.sku || null,
			name: q.name,
			slug: q.slug || null,
			description: q.description || null,
			price: Number(q.price),
			sale_price: q.sale_price === "" ? null : Number(q.sale_price),
			currency: q.currency || null,
			stock: q.stock === "" ? null : Number(q.stock),
			status: q.status,
			featured_image: q.featured_image || null
		}, {
			preserveScroll: !0,
			onSuccess: () => {
				P("Product created"), W({}), J((e) => ({
					...e,
					sku: "",
					name: "",
					slug: "",
					description: "",
					price: "0",
					sale_price: "",
					stock: "",
					status: "published",
					featured_image: ""
				}));
			},
			onError: (e) => {
				W(e), I("Failed to create product");
			},
			onFinish: () => V(!1)
		}));
	}, he = () => {
		ue && M && (V(!0), W({}), z.put($.shop.products.update(ue.id), {
			sku: Z.sku || null,
			name: Z.name,
			slug: Z.slug || null,
			description: Z.description || null,
			price: Number(Z.price),
			currency: Z.currency || null,
			stock: Z.stock === "" ? null : Number(Z.stock),
			status: Z.status,
			...Ve(le)
		}, {
			preserveScroll: !0,
			onSuccess: () => {
				P("Product updated"), ce(!1), de(null);
			},
			onError: (e) => {
				W(e), I("Failed to update product");
			},
			onFinish: () => V(!1)
		}));
	}, ge = (e) => {
		N && confirm(`Delete "${e.name}"? This cannot be undone.`) && z.delete($.shop.products.destroy(e.id), {
			preserveScroll: !0,
			onSuccess: () => P("Product deleted"),
			onError: () => I("Failed to delete product")
		});
	};
	return T ? /* @__PURE__ */ K("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ K(n, { children: [
				/* @__PURE__ */ K(o, {
					className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G(s, { children: "Products" }), /* @__PURE__ */ G(i, { children: "Manage your store catalog." })] }), /* @__PURE__ */ K("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.orders.index()),
								children: "Orders"
							}),
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.coupons.index()),
								children: "Coupons"
							}),
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.payments.index()),
								children: "Payments"
							}),
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.settings.index()),
								children: "Shop Settings"
							})
						]
					})]
				}),
				/* @__PURE__ */ G(r, { children: /* @__PURE__ */ K(ee, { children: [/* @__PURE__ */ K(E, {
					dense: !0,
					children: [/* @__PURE__ */ G(te, { children: /* @__PURE__ */ K(A, { children: [
						/* @__PURE__ */ G(k, { children: "Name" }),
						/* @__PURE__ */ G(k, { children: "Status" }),
						/* @__PURE__ */ G(k, {
							className: "text-right",
							children: "Price"
						}),
						/* @__PURE__ */ G(k, {
							className: "text-right",
							children: "Stock"
						})
					] }) }), /* @__PURE__ */ G(D, { children: ae.length === 0 ? /* @__PURE__ */ G(A, { children: /* @__PURE__ */ G(O, {
						colSpan: 4,
						className: "text-muted-foreground",
						children: "No products yet."
					}) }) : ae.map((n) => /* @__PURE__ */ K(A, { children: [
						/* @__PURE__ */ G(O, {
							className: "font-medium",
							children: /* @__PURE__ */ K("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ G("span", { children: n.name }), (M || N) && /* @__PURE__ */ K("div", {
									className: "flex items-center gap-2",
									children: [M && /* @__PURE__ */ G(t, {
										variant: "outline",
										size: "sm",
										className: "h-7 px-2",
										onClick: () => fe(n),
										children: "Edit"
									}), N && /* @__PURE__ */ G(t, {
										variant: "outline",
										size: "sm",
										className: "h-7 px-2 text-destructive hover:text-destructive",
										onClick: () => ge(n),
										children: "Delete"
									})]
								})]
							})
						}),
						/* @__PURE__ */ G(O, { children: /* @__PURE__ */ G(e, {
							variant: n.is_active ? "default" : "secondary",
							children: n.is_active ? "Published" : "Draft"
						}) }),
						/* @__PURE__ */ K(O, {
							className: "text-right",
							children: [
								n.currency,
								" ",
								Number(n.price).toFixed(2)
							]
						}),
						/* @__PURE__ */ G(O, {
							className: "text-right",
							children: n.stock ?? "—"
						})
					] }, n.id)) })]
				}), c ? /* @__PURE__ */ K("div", {
					className: "mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ K("div", { children: [
						"Page ",
						c.current_page,
						" of ",
						c.last_page,
						" • Total ",
						c.total
					] }), /* @__PURE__ */ K("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ G(t, {
							variant: "outline",
							size: "sm",
							className: "h-7",
							disabled: c.current_page <= 1,
							onClick: () => pe(c.current_page - 1),
							children: "Prev"
						}), /* @__PURE__ */ G(t, {
							variant: "outline",
							size: "sm",
							className: "h-7",
							disabled: c.current_page >= c.last_page,
							onClick: () => pe(c.current_page + 1),
							children: "Next"
						})]
					})]
				}) : null] }) }),
				/* @__PURE__ */ K(a, {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ K("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.orders.index()),
								children: "Orders"
							}),
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.coupons.index()),
								children: "Coupons"
							}),
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.payments.index()),
								children: "Payments"
							}),
							/* @__PURE__ */ G(t, {
								variant: "outline",
								size: "sm",
								onClick: () => z.visit($.shop.settings.index()),
								children: "Shop Settings"
							})
						]
					}), /* @__PURE__ */ G(t, {
						variant: "outline",
						size: "sm",
						onClick: () => z.visit($.shop.products.index()),
						children: "Refresh"
					})]
				})
			] }),
			/* @__PURE__ */ K(n, { children: [
				/* @__PURE__ */ K(o, { children: [/* @__PURE__ */ G(s, { children: "Create product" }), /* @__PURE__ */ G(i, { children: "Add a new product to your store." })] }),
				/* @__PURE__ */ K(r, {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ K("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ K("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "name",
										children: "Name"
									}),
									/* @__PURE__ */ G(g, {
										id: "name",
										value: q.name,
										onChange: (e) => J((t) => ({
											...t,
											name: e.target.value
										})),
										disabled: !j,
										placeholder: "T-Shirt"
									}),
									Y?.name ? /* @__PURE__ */ G("div", {
										className: "text-xs text-destructive",
										children: Y.name
									}) : null
								]
							}), /* @__PURE__ */ K("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "sku",
										children: "SKU"
									}),
									/* @__PURE__ */ G(g, {
										id: "sku",
										value: q.sku,
										onChange: (e) => J((t) => ({
											...t,
											sku: e.target.value
										})),
										disabled: !j,
										placeholder: "TSHIRT-001"
									}),
									Y?.sku ? /* @__PURE__ */ G("div", {
										className: "text-xs text-destructive",
										children: Y.sku
									}) : null
								]
							})]
						}),
						/* @__PURE__ */ K("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ K("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "slug",
										children: "Slug (optional)"
									}),
									/* @__PURE__ */ G(g, {
										id: "slug",
										value: q.slug,
										onChange: (e) => J((t) => ({
											...t,
											slug: e.target.value
										})),
										disabled: !j,
										placeholder: "t-shirt"
									}),
									Y?.slug ? /* @__PURE__ */ G("div", {
										className: "text-xs text-destructive",
										children: Y.slug
									}) : null
								]
							}), /* @__PURE__ */ K("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ G(_, {
											htmlFor: "price",
											children: "Price"
										}),
										/* @__PURE__ */ G(g, {
											id: "price",
											type: "number",
											value: q.price,
											onChange: (e) => J((t) => ({
												...t,
												price: e.target.value
											})),
											disabled: !j,
											min: 0,
											step: .01
										}),
										Y?.price ? /* @__PURE__ */ G("div", {
											className: "text-xs text-destructive",
											children: Y.price
										}) : null
									]
								}), /* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ G(_, {
											htmlFor: "currency",
											children: "Currency"
										}),
										/* @__PURE__ */ G(g, {
											id: "currency",
											value: q.currency,
											onChange: (e) => J((t) => ({
												...t,
												currency: e.target.value
											})),
											disabled: !j,
											placeholder: "USD"
										}),
										Y?.currency ? /* @__PURE__ */ G("div", {
											className: "text-xs text-destructive",
											children: Y.currency
										}) : null
									]
								})]
							})]
						}),
						/* @__PURE__ */ K("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ K("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "stock",
										children: "Stock (optional)"
									}),
									/* @__PURE__ */ G(g, {
										id: "stock",
										type: "number",
										value: q.stock,
										onChange: (e) => J((t) => ({
											...t,
											stock: e.target.value
										})),
										disabled: !j,
										min: 0
									}),
									Y?.stock ? /* @__PURE__ */ G("div", {
										className: "text-xs text-destructive",
										children: Y.stock
									}) : null
								]
							}), /* @__PURE__ */ K("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ G(_, {
									htmlFor: "status",
									children: "Status"
								}), /* @__PURE__ */ K(b, {
									value: q.status,
									onValueChange: (e) => J((t) => ({
										...t,
										status: e
									})),
									disabled: !j,
									children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, { placeholder: "Select status" }) }), /* @__PURE__ */ K(x, { children: [/* @__PURE__ */ G(S, {
										value: "published",
										children: "Published"
									}), /* @__PURE__ */ G(S, {
										value: "draft",
										children: "Draft"
									})] })]
								})]
							})]
						}),
						/* @__PURE__ */ K("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ G(_, {
									htmlFor: "description",
									children: "Description"
								}),
								/* @__PURE__ */ G(F, {
									id: "description",
									value: q.description,
									onChange: (e) => J((t) => ({
										...t,
										description: e.target.value
									})),
									disabled: !j,
									rows: 4
								}),
								Y?.description ? /* @__PURE__ */ G("div", {
									className: "text-xs text-destructive",
									children: Y.description
								}) : null
							]
						})
					]
				}),
				/* @__PURE__ */ G(a, {
					className: "justify-end",
					children: /* @__PURE__ */ G(t, {
						onClick: me,
						disabled: !oe || R,
						children: R ? "Creating…" : "Create product"
					})
				})
			] }),
			/* @__PURE__ */ G(l, {
				open: se,
				onOpenChange: ce,
				children: /* @__PURE__ */ K(u, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-3xl",
					children: [
						/* @__PURE__ */ K(p, { children: [/* @__PURE__ */ G(m, { children: "Edit product" }), /* @__PURE__ */ G(d, { children: "Update product details." })] }),
						/* @__PURE__ */ K("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ K("div", {
									className: "grid gap-4 md:grid-cols-2",
									children: [/* @__PURE__ */ K("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ G(_, {
												htmlFor: "edit-name",
												children: "Name"
											}),
											/* @__PURE__ */ G(g, {
												id: "edit-name",
												value: Z.name,
												onChange: (e) => Q((t) => ({
													...t,
													name: e.target.value
												}))
											}),
											Y?.name ? /* @__PURE__ */ G("div", {
												className: "text-xs text-destructive",
												children: Y.name
											}) : null
										]
									}), /* @__PURE__ */ K("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ G(_, {
												htmlFor: "edit-sku",
												children: "SKU"
											}),
											/* @__PURE__ */ G(g, {
												id: "edit-sku",
												value: Z.sku,
												onChange: (e) => Q((t) => ({
													...t,
													sku: e.target.value
												}))
											}),
											Y?.sku ? /* @__PURE__ */ G("div", {
												className: "text-xs text-destructive",
												children: Y.sku
											}) : null
										]
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "grid gap-4 md:grid-cols-2",
									children: [/* @__PURE__ */ K("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ G(_, {
												htmlFor: "edit-slug",
												children: "Slug"
											}),
											/* @__PURE__ */ G(g, {
												id: "edit-slug",
												value: Z.slug,
												onChange: (e) => Q((t) => ({
													...t,
													slug: e.target.value
												}))
											}),
											Y?.slug ? /* @__PURE__ */ G("div", {
												className: "text-xs text-destructive",
												children: Y.slug
											}) : null
										]
									}), /* @__PURE__ */ K("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ K("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ G(_, {
													htmlFor: "edit-price",
													children: "Price"
												}),
												/* @__PURE__ */ G(g, {
													id: "edit-price",
													type: "number",
													value: Z.price,
													onChange: (e) => Q((t) => ({
														...t,
														price: e.target.value
													})),
													min: 0,
													step: .01
												}),
												Y?.price ? /* @__PURE__ */ G("div", {
													className: "text-xs text-destructive",
													children: Y.price
												}) : null
											]
										}), /* @__PURE__ */ K("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ G(_, {
													htmlFor: "edit-currency",
													children: "Currency"
												}),
												/* @__PURE__ */ G(g, {
													id: "edit-currency",
													value: Z.currency,
													onChange: (e) => Q((t) => ({
														...t,
														currency: e.target.value
													}))
												}),
												Y?.currency ? /* @__PURE__ */ G("div", {
													className: "text-xs text-destructive",
													children: Y.currency
												}) : null
											]
										})]
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "grid gap-4 md:grid-cols-2",
									children: [/* @__PURE__ */ K("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ G(_, {
												htmlFor: "edit-stock",
												children: "Stock"
											}),
											/* @__PURE__ */ G(g, {
												id: "edit-stock",
												type: "number",
												value: Z.stock,
												onChange: (e) => Q((t) => ({
													...t,
													stock: e.target.value
												})),
												min: 0
											}),
											Y?.stock ? /* @__PURE__ */ G("div", {
												className: "text-xs text-destructive",
												children: Y.stock
											}) : null
										]
									}), /* @__PURE__ */ K("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ G(_, {
											htmlFor: "edit-status",
											children: "Status"
										}), /* @__PURE__ */ K(b, {
											value: Z.status,
											onValueChange: (e) => Q((t) => ({
												...t,
												status: e
											})),
											children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, { placeholder: "Select status" }) }), /* @__PURE__ */ K(x, { children: [/* @__PURE__ */ G(S, {
												value: "published",
												children: "Published"
											}), /* @__PURE__ */ G(S, {
												value: "draft",
												children: "Draft"
											})] })]
										})]
									})]
								}),
								/* @__PURE__ */ G(ze, {
									value: le,
									onChange: (e) => X((t) => ({
										...t,
										...e
									})),
									categories: h,
									tags: v,
									errors: Y
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ G(_, {
											htmlFor: "edit-description",
											children: "Description"
										}),
										/* @__PURE__ */ G(F, {
											id: "edit-description",
											value: Z.description,
											onChange: (e) => Q((t) => ({
												...t,
												description: e.target.value
											})),
											rows: 4
										}),
										Y?.description ? /* @__PURE__ */ G("div", {
											className: "text-xs text-destructive",
											children: Y.description
										}) : null
									]
								})
							]
						}),
						/* @__PURE__ */ K(f, { children: [/* @__PURE__ */ G(t, {
							variant: "outline",
							onClick: () => ce(!1),
							disabled: R,
							children: "Cancel"
						}), /* @__PURE__ */ G(t, {
							onClick: he,
							disabled: R || !M,
							children: R ? "Saving…" : "Save changes"
						})] })
					]
				})
			})
		]
	}) : /* @__PURE__ */ G(n, { children: /* @__PURE__ */ K(o, { children: [/* @__PURE__ */ G(s, { children: "Products" }), /* @__PURE__ */ G(i, { children: "You do not have permission to view shop products." })] }) });
}
//#endregion
//#region resources/js/screens/Products.tsx
function Ue({ shopProducts: e, productCategories: t, productTags: n, editProduct: r }) {
	let i = q();
	return /* @__PURE__ */ K(y, {
		title: "Products",
		description: "Manage your store products and inventory.",
		children: [/* @__PURE__ */ G(L, { title: "Products" }), /* @__PURE__ */ G(He, {
			products: e,
			categories: t ?? [],
			tags: n ?? [],
			initialEdit: r ?? null,
			canView: i("view shop products"),
			canCreate: i("create shop products"),
			canEdit: i("edit shop products"),
			canDelete: i("delete shop products")
		})]
	});
}
//#endregion
//#region resources/js/components/ShopSettingsForm.tsx
var We = [
	{
		value: "USD",
		label: "US Dollar ($)"
	},
	{
		value: "EUR",
		label: "Euro (€)"
	},
	{
		value: "GBP",
		label: "British Pound (£)"
	},
	{
		value: "CAD",
		label: "Canadian Dollar (C$)"
	},
	{
		value: "AUD",
		label: "Australian Dollar (A$)"
	},
	{
		value: "JPY",
		label: "Japanese Yen (¥)"
	},
	{
		value: "CHF",
		label: "Swiss Franc (CHF)"
	},
	{
		value: "CNY",
		label: "Chinese Yuan (¥)"
	},
	{
		value: "INR",
		label: "Indian Rupee (₹)"
	},
	{
		value: "BRL",
		label: "Brazilian Real (R$)"
	}
];
function Ge({ settings: e, canEdit: i, onSave: a }) {
	let [s, c] = U({
		store_name: e.store_name || "My Shop",
		currency: e.currency || "USD",
		currency_position: e.currency_position || "before",
		thousand_separator: e.thousand_separator || ",",
		decimal_separator: e.decimal_separator || ".",
		decimals: e.decimals ?? 2,
		products_per_page: e.products_per_page || 12,
		enable_reviews: e.enable_reviews ?? !1,
		enable_stock_management: e.enable_stock_management ?? !0,
		low_stock_threshold: e.low_stock_threshold || 5,
		out_of_stock_visibility: e.out_of_stock_visibility ?? !0,
		cart_page_id: e.cart_page_id || null,
		checkout_page_id: e.checkout_page_id || null,
		terms_page_id: e.terms_page_id || null,
		enable_checkout: e.enable_checkout ?? !0,
		invoice_details: e.invoice_details ?? "",
		tax_rate: e.tax_rate ?? 0,
		prices_include_tax: e.prices_include_tax ?? !1,
		shipping_methods: Array.isArray(e.shipping_methods) ? e.shipping_methods : []
	}), [l, u] = U(!1), d = (e, t) => {
		c((n) => ({
			...n,
			[e]: t
		}));
	}, f = (e, t) => {
		c((n) => ({
			...n,
			shipping_methods: n.shipping_methods.map((n, r) => r === e ? {
				...n,
				...t
			} : n)
		}));
	};
	return /* @__PURE__ */ K("form", {
		onSubmit: async (e) => {
			if (e.preventDefault(), i) {
				u(!0);
				try {
					await a({
						...s,
						tax_rate: Number(s.tax_rate) || 0,
						shipping_methods: s.shipping_methods.filter((e) => String(e.name).trim() !== "").map((e) => ({
							name: String(e.name).trim(),
							price: Number(e.price) || 0,
							free_over: e.free_over === "" || e.free_over === null ? null : Number(e.free_over)
						}))
					});
				} finally {
					u(!1);
				}
			}
		},
		className: "space-y-6",
		children: [/* @__PURE__ */ G(n, { children: /* @__PURE__ */ K(j, {
			defaultValue: "general",
			className: "w-full",
			children: [/* @__PURE__ */ G(o, {
				className: "pb-0",
				children: /* @__PURE__ */ K(N, {
					className: "h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0",
					children: [
						/* @__PURE__ */ K(P, {
							value: "general",
							className: "rounded-lg px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
							children: [/* @__PURE__ */ G(ye, { className: "mr-2 h-4 w-4" }), "General"]
						}),
						/* @__PURE__ */ K(P, {
							value: "currency",
							className: "rounded-lg px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
							children: [/* @__PURE__ */ G(Q, { className: "mr-2 h-4 w-4" }), "Currency"]
						}),
						/* @__PURE__ */ K(P, {
							value: "checkout",
							className: "rounded-lg px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
							children: [/* @__PURE__ */ G(xe, { className: "mr-2 h-4 w-4" }), "Tax & Shipping"]
						}),
						/* @__PURE__ */ K(P, {
							value: "inventory",
							className: "rounded-lg px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
							children: [/* @__PURE__ */ G(me, { className: "mr-2 h-4 w-4" }), "Inventory"]
						}),
						/* @__PURE__ */ K(P, {
							value: "pages",
							className: "rounded-lg px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
							children: [/* @__PURE__ */ G(ve, { className: "mr-2 h-4 w-4" }), "Pages"]
						})
					]
				})
			}), /* @__PURE__ */ K(r, {
				className: "pt-6",
				children: [
					/* @__PURE__ */ G(M, {
						value: "general",
						className: "mt-0 space-y-6",
						children: /* @__PURE__ */ K("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "store_name",
										children: "Store Name"
									}), /* @__PURE__ */ G(g, {
										id: "store_name",
										value: s.store_name,
										onChange: (e) => d("store_name", e.target.value),
										disabled: !i,
										placeholder: "My Shop"
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "products_per_page",
										children: "Products Per Page"
									}), /* @__PURE__ */ G(g, {
										id: "products_per_page",
										type: "number",
										min: 1,
										max: 100,
										value: s.products_per_page,
										onChange: (e) => d("products_per_page", parseInt(e.target.value) || 12),
										disabled: !i
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2 sm:col-span-2",
									children: [
										/* @__PURE__ */ G(_, {
											htmlFor: "invoice_details",
											children: "Invoice details"
										}),
										/* @__PURE__ */ G("textarea", {
											id: "invoice_details",
											rows: 3,
											value: s.invoice_details,
											onChange: (e) => d("invoice_details", e.target.value),
											disabled: !i,
											placeholder: "Company name\nStreet 1, 1234 AB City\nVAT NL123456789B01",
											className: "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs"
										}),
										/* @__PURE__ */ G("p", {
											className: "text-xs text-muted-foreground",
											children: "Printed at the top of every invoice: your address, company and VAT numbers."
										})
									]
								}),
								/* @__PURE__ */ K("div", {
									className: "flex items-center justify-between space-x-2 sm:col-span-2",
									children: [/* @__PURE__ */ K("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ G(_, {
											htmlFor: "enable_reviews",
											children: "Enable Product Reviews"
										}), /* @__PURE__ */ G("p", {
											className: "text-xs text-muted-foreground",
											children: "Allow customers to leave reviews on products"
										})]
									}), /* @__PURE__ */ G(T, {
										id: "enable_reviews",
										checked: s.enable_reviews,
										onCheckedChange: (e) => d("enable_reviews", e),
										disabled: !i
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ G(M, {
						value: "currency",
						className: "mt-0 space-y-6",
						children: /* @__PURE__ */ K("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "currency",
										children: "Currency"
									}), /* @__PURE__ */ K(b, {
										value: s.currency,
										onValueChange: (e) => d("currency", e),
										disabled: !i,
										children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, { placeholder: "Select currency" }) }), /* @__PURE__ */ G(x, { children: We.map((e) => /* @__PURE__ */ G(S, {
											value: e.value,
											children: e.label
										}, e.value)) })]
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "currency_position",
										children: "Currency Position"
									}), /* @__PURE__ */ K(b, {
										value: s.currency_position,
										onValueChange: (e) => d("currency_position", e),
										disabled: !i,
										children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, {}) }), /* @__PURE__ */ K(x, { children: [/* @__PURE__ */ G(S, {
											value: "before",
											children: "Before price ($99.99)"
										}), /* @__PURE__ */ G(S, {
											value: "after",
											children: "After price (99.99$)"
										})] })]
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "thousand_separator",
										children: "Thousand Separator"
									}), /* @__PURE__ */ K(b, {
										value: s.thousand_separator,
										onValueChange: (e) => d("thousand_separator", e),
										disabled: !i,
										children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, {}) }), /* @__PURE__ */ K(x, { children: [
											/* @__PURE__ */ G(S, {
												value: ",",
												children: "Comma (1,000)"
											}),
											/* @__PURE__ */ G(S, {
												value: ".",
												children: "Period (1.000)"
											}),
											/* @__PURE__ */ G(S, {
												value: " ",
												children: "Space (1 000)"
											})
										] })]
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "decimal_separator",
										children: "Decimal Separator"
									}), /* @__PURE__ */ K(b, {
										value: s.decimal_separator,
										onValueChange: (e) => d("decimal_separator", e),
										disabled: !i,
										children: [/* @__PURE__ */ G(C, { children: /* @__PURE__ */ G(w, {}) }), /* @__PURE__ */ K(x, { children: [/* @__PURE__ */ G(S, {
											value: ".",
											children: "Period (99.99)"
										}), /* @__PURE__ */ G(S, {
											value: ",",
											children: "Comma (99,99)"
										})] })]
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "decimals",
										children: "Number of Decimals"
									}), /* @__PURE__ */ G(g, {
										id: "decimals",
										type: "number",
										min: 0,
										max: 4,
										value: s.decimals,
										onChange: (e) => d("decimals", Number.isNaN(parseInt(e.target.value)) ? 2 : parseInt(e.target.value)),
										disabled: !i
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ K(M, {
						value: "checkout",
						className: "mt-0 space-y-6",
						children: [/* @__PURE__ */ K("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ K("div", {
									className: "flex items-center justify-between space-x-2 sm:col-span-2",
									children: [/* @__PURE__ */ K("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ G(_, {
											htmlFor: "enable_checkout",
											children: "Checkout open"
										}), /* @__PURE__ */ G("p", {
											className: "text-xs text-muted-foreground",
											children: "Switch off to keep the catalogue and cart but stop taking orders"
										})]
									}), /* @__PURE__ */ G(T, {
										id: "enable_checkout",
										checked: s.enable_checkout,
										onCheckedChange: (e) => d("enable_checkout", e),
										disabled: !i
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ G(_, {
											htmlFor: "tax_rate",
											children: "Tax rate (%)"
										}),
										/* @__PURE__ */ G(g, {
											id: "tax_rate",
											type: "number",
											min: 0,
											max: 100,
											step: "0.01",
											value: s.tax_rate,
											onChange: (e) => d("tax_rate", e.target.value),
											disabled: !i
										}),
										/* @__PURE__ */ G("p", {
											className: "text-xs text-muted-foreground",
											children: "Charged on products and shipping. 0 turns tax off."
										})
									]
								}),
								/* @__PURE__ */ K("div", {
									className: "flex items-center justify-between space-x-2",
									children: [/* @__PURE__ */ K("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ G(_, {
											htmlFor: "prices_include_tax",
											children: "Prices include tax"
										}), /* @__PURE__ */ G("p", {
											className: "text-xs text-muted-foreground",
											children: "On: the price you enter is what customers pay. Off: tax is added at checkout."
										})]
									}), /* @__PURE__ */ G(T, {
										id: "prices_include_tax",
										checked: s.prices_include_tax,
										onCheckedChange: (e) => d("prices_include_tax", e),
										disabled: !i
									})]
								})
							]
						}), /* @__PURE__ */ K("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ K("div", { children: [/* @__PURE__ */ G(_, { children: "Shipping methods" }), /* @__PURE__ */ G("p", {
									className: "text-xs text-muted-foreground",
									children: "Customers pick one at checkout. Leave \"Free over\" empty for no free-shipping threshold. No methods means no shipping charge."
								})] }),
								s.shipping_methods.map((e, n) => /* @__PURE__ */ K("div", {
									className: "grid grid-cols-[1fr_7rem_7rem_auto] items-end gap-2",
									children: [
										/* @__PURE__ */ K("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ G(_, {
												htmlFor: `sm-name-${n}`,
												className: "text-xs",
												children: "Name"
											}), /* @__PURE__ */ G(g, {
												id: `sm-name-${n}`,
												value: e.name,
												onChange: (e) => f(n, { name: e.target.value }),
												placeholder: "Standard",
												disabled: !i
											})]
										}),
										/* @__PURE__ */ K("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ G(_, {
												htmlFor: `sm-price-${n}`,
												className: "text-xs",
												children: "Price"
											}), /* @__PURE__ */ G(g, {
												id: `sm-price-${n}`,
												type: "number",
												min: 0,
												step: "0.01",
												value: e.price,
												onChange: (e) => f(n, { price: e.target.value }),
												disabled: !i
											})]
										}),
										/* @__PURE__ */ K("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ G(_, {
												htmlFor: `sm-free-${n}`,
												className: "text-xs",
												children: "Free over"
											}), /* @__PURE__ */ G(g, {
												id: `sm-free-${n}`,
												type: "number",
												min: 0,
												step: "0.01",
												value: e.free_over ?? "",
												onChange: (e) => f(n, { free_over: e.target.value }),
												disabled: !i
											})]
										}),
										/* @__PURE__ */ G(t, {
											type: "button",
											variant: "ghost",
											size: "icon",
											"aria-label": `Remove ${e.name || "shipping method"}`,
											onClick: () => c((e) => ({
												...e,
												shipping_methods: e.shipping_methods.filter((e, t) => t !== n)
											})),
											disabled: !i,
											children: /* @__PURE__ */ G(be, { className: "h-4 w-4" })
										})
									]
								}, n)),
								/* @__PURE__ */ K(t, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: () => c((e) => ({
										...e,
										shipping_methods: [...e.shipping_methods, {
											name: "",
											price: 0,
											free_over: null
										}]
									})),
									disabled: !i || s.shipping_methods.length >= 20,
									children: [/* @__PURE__ */ G(he, { className: "mr-2 h-4 w-4" }), "Add shipping method"]
								})
							]
						})]
					}),
					/* @__PURE__ */ G(M, {
						value: "inventory",
						className: "mt-0 space-y-6",
						children: /* @__PURE__ */ K("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ K("div", {
								className: "flex items-center justify-between space-x-2 sm:col-span-2",
								children: [/* @__PURE__ */ K("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "enable_stock_management",
										children: "Enable Stock Management"
									}), /* @__PURE__ */ G("p", {
										className: "text-xs text-muted-foreground",
										children: "Track inventory levels for products"
									})]
								}), /* @__PURE__ */ G(T, {
									id: "enable_stock_management",
									checked: s.enable_stock_management,
									onCheckedChange: (e) => d("enable_stock_management", e),
									disabled: !i
								})]
							}), s.enable_stock_management && /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ K("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ G(_, {
										htmlFor: "low_stock_threshold",
										children: "Low Stock Threshold"
									}),
									/* @__PURE__ */ G(g, {
										id: "low_stock_threshold",
										type: "number",
										min: 0,
										value: s.low_stock_threshold,
										onChange: (e) => d("low_stock_threshold", parseInt(e.target.value) || 5),
										disabled: !i
									}),
									/* @__PURE__ */ G("p", {
										className: "text-xs text-muted-foreground",
										children: "Alert when stock falls below this number"
									})
								]
							}), /* @__PURE__ */ K("div", {
								className: "flex items-center justify-between space-x-2",
								children: [/* @__PURE__ */ K("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "out_of_stock_visibility",
										children: "Show Out of Stock Products"
									}), /* @__PURE__ */ G("p", {
										className: "text-xs text-muted-foreground",
										children: "Display products even when out of stock"
									})]
								}), /* @__PURE__ */ G(T, {
									id: "out_of_stock_visibility",
									checked: s.out_of_stock_visibility,
									onCheckedChange: (e) => d("out_of_stock_visibility", e),
									disabled: !i
								})]
							})] })]
						})
					}),
					/* @__PURE__ */ G(M, {
						value: "pages",
						className: "mt-0 space-y-6",
						children: /* @__PURE__ */ K("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "cart_page_id",
										children: "Cart Page ID"
									}), /* @__PURE__ */ G(g, {
										id: "cart_page_id",
										type: "number",
										value: s.cart_page_id || "",
										onChange: (e) => d("cart_page_id", e.target.value ? parseInt(e.target.value) : null),
										disabled: !i,
										placeholder: "Leave empty for default"
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "checkout_page_id",
										children: "Checkout Page ID"
									}), /* @__PURE__ */ G(g, {
										id: "checkout_page_id",
										type: "number",
										value: s.checkout_page_id || "",
										onChange: (e) => d("checkout_page_id", e.target.value ? parseInt(e.target.value) : null),
										disabled: !i,
										placeholder: "Leave empty for default"
									})]
								}),
								/* @__PURE__ */ K("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ G(_, {
										htmlFor: "terms_page_id",
										children: "Terms & Conditions Page ID"
									}), /* @__PURE__ */ G(g, {
										id: "terms_page_id",
										type: "number",
										value: s.terms_page_id || "",
										onChange: (e) => d("terms_page_id", e.target.value ? parseInt(e.target.value) : null),
										disabled: !i,
										placeholder: "Leave empty for default"
									})]
								})
							]
						})
					})
				]
			})]
		}) }), i && /* @__PURE__ */ G("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ K(t, {
				type: "submit",
				disabled: l,
				children: [/* @__PURE__ */ G(ge, { className: "mr-2 h-4 w-4" }), l ? "Saving..." : "Save Settings"]
			})
		})]
	});
}
//#endregion
//#region resources/js/screens/Settings.tsx
function Ke({ shopSettings: e }) {
	let t = q(), n = ne();
	return /* @__PURE__ */ K(y, {
		title: "Shop settings",
		description: "Your store's name, currency, taxes, shipping and checkout.",
		children: [/* @__PURE__ */ G(L, { title: "Shop settings" }), /* @__PURE__ */ G(Ge, {
			settings: e || {},
			canEdit: t("manage shop settings"),
			onSave: (e) => z.put(route("dashboard.admin.shop.settings.update"), e, {
				preserveScroll: !0,
				onError: () => n.error("The shop settings could not be saved. Check the highlighted fields.")
			})
		})]
	});
}
if (window.Modulo.registerComponents("modulo-shop", {
	Products: Ue,
	Orders: ke,
	OrderView: Pe,
	Coupons: De,
	Payments: Le,
	Settings: Ke
}), !document.querySelector("link[data-modulo-plugin=\"modulo-shop\"]")) {
	let e = document.createElement("link");
	e.rel = "stylesheet", e.href = new URL("./plugin.css", "" + import.meta.url).href, e.dataset.moduloPlugin = "modulo-shop", document.head.appendChild(e);
}
//#endregion
