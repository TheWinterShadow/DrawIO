/**
 * PreConfig.js — Self-hosted draw.io configuration
 * Loaded BEFORE app.min.js
 */

// Disable server-side export (forces client-side canvas PNG export)
window.EXPORT_URL = '/not-available';
window.PLANT_URL = '/not-available';

// Disable telemetry, notifications, and real-time sync
window.DRAWIO_LOG_URL = '';
window.NOTIFICATIONS_URL = null;
window.RT_WEBSOCKET_URL = null;
window.REALTIME_URL = null;

window.DRAWIO_CONFIG = {
    'enableCustomLibraries': true
};
