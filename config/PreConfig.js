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
    'enableCustomLibraries': true,
    'defaultEdgeStyle': {'curved': '1'},
    'ui': 'dark',
    'darkColor': '#282A36',
    'customCss': [
        /* ── Dracula palette on dark-mode CSS custom properties ── */
        ':root, .geEditor {',
        '  --ge-dark-panel-color: #282A36 !important;',
        '  --dark-toolbar-color: #21222C !important;',
        '  --dark-color: #282A36 !important;',
        '  --dark-border-color: #44475A !important;',
        '  --dark-text-color: #F8F8F2 !important;',
        '  --dark-accent-color: #BD93F9 !important;',
        '  --dark-accent-text-color: #F8F8F2 !important;',
        '}',

        /* ── Global background & text ── */
        '.geEditor, body.geDarkMode {',
        '  background-color: #282A36 !important;',
        '  color: #F8F8F2 !important;',
        '}',

        /* ── Menubar ── */
        '.geMenubarContainer {',
        '  background-color: #21222C !important;',
        '  border-bottom: 1px solid #44475A !important;',
        '  color: #F8F8F2 !important;',
        '}',
        '.geMenubarContainer .geItem {',
        '  color: #F8F8F2 !important;',
        '}',
        '.geMenubarContainer .geItem:hover {',
        '  background-color: #44475A !important;',
        '}',

        /* ── Toolbar ── */
        '.geToolbarContainer {',
        '  background-color: #21222C !important;',
        '  border-bottom: 1px solid #44475A !important;',
        '}',

        /* ── Left sidebar (shapes panel) ── */
        '.geSidebarContainer {',
        '  background-color: #282A36 !important;',
        '  border-right: 1px solid #44475A !important;',
        '}',
        '.geSidebar {',
        '  background-color: #282A36 !important;',
        '}',

        /* ── Canvas area ── */
        '.geDiagramContainer {',
        '  background-color: #282A36 !important;',
        '}',

        /* ── Tabs bar ── */
        '.geTabContainer {',
        '  background-color: #21222C !important;',
        '  border-top: 1px solid #44475A !important;',
        '}',

        /* ── Right panel (format sidebar) ── */
        '.geFormatContainer {',
        '  background-color: #282A36 !important;',
        '  border-left: 1px solid #44475A !important;',
        '}',
        '.geFormatTitle, .geTitle {',
        '  background-color: #21222C !important;',
        '  color: #F8F8F2 !important;',
        '  border-color: #44475A !important;',
        '}',

        /* ── Dialogs & windows ── */
        '.geDialog {',
        '  background-color: #282A36 !important;',
        '  color: #F8F8F2 !important;',
        '  border: 1px solid #44475A !important;',
        '}',
        '.mxWindow {',
        '  background-color: #282A36 !important;',
        '  color: #F8F8F2 !important;',
        '  border: 1px solid #44475A !important;',
        '}',
        '.mxWindowTitle {',
        '  background-color: #21222C !important;',
        '  color: #F8F8F2 !important;',
        '}',

        /* ── Popups / context menus ── */
        '.mxPopupMenu {',
        '  background-color: #282A36 !important;',
        '  color: #F8F8F2 !important;',
        '  border: 1px solid #44475A !important;',
        '}',
        '.mxPopupMenu td {',
        '  color: #F8F8F2 !important;',
        '}',
        '.mxPopupMenu td:hover, .mxPopupMenu tr:hover td {',
        '  background-color: #44475A !important;',
        '}',

        /* ── Buttons ── */
        '.geBtn {',
        '  background-color: #44475A !important;',
        '  color: #F8F8F2 !important;',
        '  border: 1px solid #6272A4 !important;',
        '}',
        '.geBtn:hover {',
        '  background-color: #6272A4 !important;',
        '}',
        '.gePrimaryBtn {',
        '  background-color: #BD93F9 !important;',
        '  color: #282A36 !important;',
        '  border: 1px solid #BD93F9 !important;',
        '}',
        '.gePrimaryBtn:hover {',
        '  background-color: #FF79C6 !important;',
        '  border-color: #FF79C6 !important;',
        '}',

        /* ── Scrollbars (Webkit) ── */
        '::-webkit-scrollbar { width: 8px; height: 8px; }',
        '::-webkit-scrollbar-track { background: #21222C; }',
        '::-webkit-scrollbar-thumb { background: #44475A; border-radius: 4px; }',
        '::-webkit-scrollbar-thumb:hover { background: #6272A4; }',

        /* ── Selection / highlight accent ── */
        '::selection { background: #44475A; color: #F8F8F2; }',

        /* ── Links ── */
        'a { color: #8BE9FD !important; }',
        'a:hover { color: #BD93F9 !important; }',

        /* ── Inputs & textareas inside dialogs ── */
        '.geDialog input, .geDialog textarea, .geDialog select,',
        '.mxWindow input, .mxWindow textarea, .mxWindow select {',
        '  background-color: #21222C !important;',
        '  color: #F8F8F2 !important;',
        '  border: 1px solid #6272A4 !important;',
        '}',
    ].join('\n')
};
