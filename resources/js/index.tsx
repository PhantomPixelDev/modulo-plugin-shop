// The shop's admin screens. The core loads this bundle the first time one of
// them is visited (Inertia page "Plugins/modulo-shop/<Screen>").
import '../css/plugin.css';
import Coupons from './screens/Coupons';
import Orders from './screens/Orders';
import OrderView from './screens/OrderView';
import Payments from './screens/Payments';
import Products from './screens/Products';
import Settings from './screens/Settings';

window.Modulo!.registerComponents('modulo-shop', {
    Products,
    Orders,
    OrderView,
    Coupons,
    Payments,
    Settings,
});

// A library build doesn't inject its CSS: link the stylesheet built next to this file
if (!document.querySelector('link[data-modulo-plugin="modulo-shop"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./plugin.css', import.meta.url).href;
    link.dataset.moduloPlugin = 'modulo-shop';
    document.head.appendChild(link);
}
