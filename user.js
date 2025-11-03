// Get rid of normandy
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);

// Some tweaks
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.containers.enabled", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.enable", false);
user_pref("extensions.ml.enabled", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.urlbar.wikipedia.featureGate", false);
user_pref("browser.urlbar.amp.featureGate", false);
user_pref("app.shield.optoutstudies.enabled", true);

// Pretend this is Chrome running on Windows
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.3");

// Extra stuff for myself
user_pref("dom.ipc.processCount", 3);
user_pref("general.smoothScroll", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("layers.acceleration.disabled", false);
user_pref("sidebar.visibility", "hide-sidebar");
