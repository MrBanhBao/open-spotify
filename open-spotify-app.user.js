// ==UserScript==
// @name         Open Spotify App
// @version      1.0
// @match        *://open.spotify.com/*
// ==/UserScript==
if (window.location.pathname === '/redirect') return;
window.location.href = `spotify://${window.location.pathname.slice(1)}${
	window.location.search
}${window.location.hash}`;