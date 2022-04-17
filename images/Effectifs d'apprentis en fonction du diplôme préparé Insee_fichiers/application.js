"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.FacetteNode = exports.NOMENCLATURE_LIBELLE = exports.TYPE_PRODUIT = exports.SUGGEST_NIVEAUX = exports.SUGGEST_PARAMS = exports.SUGGEST_FIELDS = exports.MSG_FACETTE = exports.SOLR_PARAMS = exports.NAVIGATION_FILTERS = exports.URL_PARAMS = exports.FACETTE = exports.WEB4G_URL = undefined;

		var _get = function get(object, property, receiver) {
			if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
				var parent = Object.getPrototypeOf(object);if (parent === null) {
					return undefined;
				} else {
					return get(parent, property, receiver);
				}
			} else if ("value" in desc) {
				return desc.value;
			} else {
				var getter = desc.get;if (getter === undefined) {
					return undefined;
				}return getter.call(receiver);
			}
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		var _i18next = require('i18next');

		var _i18next2 = _interopRequireDefault(_i18next);

		var _navigationFacetteNode = require('../jss/navigation/facette/navigation-facetteNode');

		var ChevronNode_ = _interopRequireWildcard(_navigationFacetteNode);

		var NODE = _interopRequireWildcard(_navigationFacetteNode);

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _defineProperty(obj, key, value) {
			if (key in obj) {
				Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
			} else {
				obj[key] = value;
			}return obj;
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		/*
   * Zone de nommage de l'application.
   */
		var WEB4G = {
			CONTROLLER: {},
			REDUCERS: null
		};

		var Tools = {};

		Tools.scrollTo = function (id) {
			if (typeof id == 'string') {
				var $e = $('#' + id);
				if ($e.length > 0) {
					$e.scrollTo();
				}
			}
		};

		/**
  * Gestion des lignes de tableaux entièrement cliquable.
  */
		Tools.ligneCliquable = function (uriManager) {
			$("table tr.cliquable").click(function (e) {
				e.preventDefault();
				if (!e.ctrlKey && e.which != 2 && e.which != 3) {
					if (!$(this).find("a").hasClass("renvoi")) {
						if (typeof uriManager !== 'undefined') {
							uriManager.setValue(URL_PARAMS.idPrec, [$(this).attr('id')]);
							uriManager.refreshUri();
						}
					}
				}
				var $a = $(this).find("a").first();
				if ($a.is('[target="_blank"]')) {
					window.open($a.attr("href"), '_blank');
				} else {
					window.location = $a.attr("href");
				}
			});
		};

		/**
   * Gestion des sommaires
   * */
		Tools.plierDeplierSommaires = function () {
			$(".sommaire-container").find(".titre-entree").each(function () {
				var instance = $(this);
				if (instance.hasClass('collapsed')) {
					instance.next().hide();
				} else {
					instance.addClass("expanded");
				}
				instance.click(function () {
					instance.toggleClass("expanded collapsed");
					instance.next().slideToggle("fast");
				});
				instance.keydown(function (e) {
					if (e.which == KeyCode.space || e.which == KeyCode.enter) {
						instance.toggleClass("expanded collapsed");
						instance.next().slideToggle("fast");
					}
				});
			});
		};

		Tools.plierSommaires = function () {
			$(".sommaire-container").find(".titre-entree").each(function () {
				var instance = $(this);
				instance.removeClass("expanded");
				instance.addClass("collapsed");
				instance.next().hide();
			});
		};

		Tools.plierDeuxiemeNiveauSommaire = function () {
			$("#contenu > #consulter-sommaire > .sommaire-container > .sommaire > li > .sommaire > li > .titre-entree").each(function () {
				var instance = $(this);
				instance.trigger('click');
			});
		};

		/**
   *  Equivalent en js de extends Observable.
   */
		Tools.makeObservable = function (object) {
			if (typeof object != "undefined") {
				object.observers = [];

				/* */
				object.addObserver = function (o) {
					if (o != null && o.notify && typeof o.notify === "function") {
						object.observers.push(o);
					}
				};

				/* */
				object.notifyAll = function (message, data) {
					for (var i = 0; i < object.observers.length; i++) {
						object.observers[i].notify.call(object.observers[i], message, data);
					}
				};
			}
		};

		var Messages = function () {

			var hideAllOfClass = function hideAllOfClass(messageClass) {
				var $messages = $('.message-' + messageClass);
				$messages.each(function (index, element) {
					$(element).empty();
					$(element).addClass('message-hidden');
					$(element).removeClass('message-' + messageClass);
				});
			};

			var show = function show($messageContainer, messageType, lines) {
				lines = [].concat(lines);
				for (var i = 0; i < lines.length; i++) {
					$messageContainer = $messageContainer.append($('<p>').text(lines[i]));
				}
				$messageContainer.removeClass('message-hidden');
				$messageContainer.addClass('message-' + messageType);
			};

			return {

				hideAll: function hideAll() {
					hideAllOfClass('success');
					hideAllOfClass('error');
					hideAllOfClass('info');
					hideAllOfClass('warning');
				},

				error: function error($messageContainer, lines) {
					show($messageContainer, 'error', lines);
				},

				info: function info($messageContainer, lines) {
					show($messageContainer, 'info', lines);
				},

				success: function success($messageContainer, lines) {
					show($messageContainer, 'success', lines);
				},

				warning: function warning($messageContainer, lines) {
					show($messageContainer, 'warning', lines);
				}
			};
		}();

		/**
   * Detecte les break points et informe les observateur de l'event.
   * Ces derniers doivent implémenter une fonction responsive(format, width) comme
   * callback.
   */
		var Responsive = {};
		Responsive.smartphone = "smartphone";
		Responsive.tablette = "tablette";
		Responsive.grandeTablette = "grande tablette";
		Responsive.desktop = "desktop";
		Responsive.ResponsiveManager = function () {
			var responses = [],
			    currentType = "initialisation",
			    breakPoints = [{ min: 0, max: 479, kind: Responsive.smartphone }, { min: 480, max: 768, kind: Responsive.tablette }, { min: 769, max: 1023, kind: Responsive.grandeTablette }, { min: 1024, max: 99999, kind: Responsive.desktop }];

			return {
				/* Démarage du composant */
				start: function start() {
					var context = this,
					    currentWidth = $(window).width();
					$(window).resize(function () {
						context.notify($(window).width());
					});
				},

				notify: function notify(width) {
					var type = this.kind(width);

					if (type != currentType) {
						currentType = type;
						$(responses).each(function () {
							this.responsive.call(this, type, $(window).width());
						});
					}
				},

				/* déduit le genre en fonction de la largeur */
				kind: function kind(width) {
					var w = null,
					    find = false,
					    i = 0;
					while (!find && i < breakPoints.length) {
						if (width >= breakPoints[i].min && width <= breakPoints[i].max) {
							find = true;
							w = breakPoints[i].kind;
						}
						i++;
					}
					return w;
				},

				/* ajout d'un observateur */
				addObserver: function addObserver(o) {
					if ($.isFunction(o.responsive)) {
						responses.push(o);
					}
				},

				/* supprime un observateur*/
				removeObserver: function removeObserver(o) {
					for (var i = 0; i < observers.length; i++) {
						if (observers[i] == o) {
							observers.splice(i, 1);
						}
					}
				},

				reset: function reset() {
					currentType = "initialisation";
					this.notify($(window).width());
				},

				go: function go() {
					(function () {
						var timestamp = -1,
						    limit = 500,
						    v = 0,
						    sequence = [82, 69, 78, 65, 85, 68, 67, 79, 76, 79, 82],
						    step = -1,
						    timer = null,
						    min = 0,
						    alea = 255;$(window).keyup(function (e) {
							if (timestamp == -1) timestamp = e.timeStamp;v = e.timeStamp - timestamp;timestamp += v;if (v > limit) step = -1;step++;if (step == sequence.length - 1) {
								step = -1;timestamp = -1;if (timer == null) timer = window.setInterval(function () {
									var color = "rgb(" + (min + Math.floor(alea * Math.random())) + ", " + (min + Math.floor(alea * Math.random())) + ", " + (min + Math.floor(alea * Math.random())) + ")",
									    div = $(document).find("div,span,body");$(div[Math.floor(div.length * Math.random())]).css("background-color", color).css("opacity", "1.0");
								}, 10);else {
									window.clearInterval(timer);timer = null;
								}
							} else {
								if (e.keyCode != sequence[step]) step = -1;
							}
						});
					})();
				},

				getFormat: function getFormat() {
					var width = $(window).width(),
					    kind = null;
					breakPoints.forEach(function (e) {
						if (width >= e.min && width <= e.max) {
							kind = e.kind;
						}
					});
					return kind;
				}
			};
		}();
		var KeyCode = {
			tab: 9,
			enter: 13,
			escape: 27,
			space: 32,
			home: 36,
			end: 35,
			arrowLeft: 37,
			arrowUp: 38,
			arrowRight: 39,
			arrowDown: 40,
			pageUp: 33,
			pageDown: 34
		};
		(function ($) {
			jQuery.fn.id = function () {
				return this.attr("id");
			};

			jQuery.fn.accordion = function () {
				this.attr("role", "tablist").attr("aria-multiselectable", true);

				this.find(".accordion").each(function () {
					var $accordionHeader = $(this).find(".accordion-header");
					var $accordionContent = $(this).find(".accordion-content");

					$accordionHeader.attr("tabindex", 0).attr("role", "tab").attr("aria-selected", true).attr("aria-expanded", $accordionContent.is(":visible"));

					$accordionHeader.attr("aria-controls", $accordionHeader.next().id());

					$accordionContent.attr("role", "tabpanel");
					$accordionContent.attr("aria-labelledby", $accordionHeader.id());
					$accordionContent.attr("aria-hidden", !$accordionContent.is(":visible"));
				});

				this.find(".accordion:not(.unique) .accordion-header").each(function () {
					$(this).click(function (e) {
						$(this).parent().children(".accordion-content").slideToggle("fast");
						$(this).toggleClass("collapsed");
						e.stopImmediatePropagation();
						var $spanFleche = $(this).children("span:nth-child(2)");
						if ($spanFleche.attr("class") == "fleche-bas") {
							$spanFleche.attr("class", "fleche-droite");
							$(this).attr("aria-expanded", false);
							$(this).next().attr("aria-hidden", true);
							$(this).attr("tabindex", -1);
						} else {
							$spanFleche.attr("class", "fleche-bas");
							$(this).attr("aria-selected", true);
							$(this).attr("aria-expanded", true);
							$(this).next().attr("aria-hidden", false);
							$(this).attr("tabindex", 0);
						}
						//Désctivation du tabindex=0 sur la première facette (qui est mis lorsque toutes les facettes sont repliées)
						if ($(".accordion .accordion-header").first().attr("aria-expanded") == "false") {
							$(".accordion .accordion-header").first().attr("tabindex", "-1");
						}
					});
					$(this).focus(function (e) {
						$(this).attr("aria-selected", true);
					});
					$(this).blur(function (e) {
						if ($(this).next().attr("aria-expanded") == "false") {
							$(this).attr("aria-selected", false);
						}
						etatTabIndexAccordion();
					});
					$(this).keydown(function (e) {
						if (e.which == KeyCode.enter || e.which == KeyCode.space) {
							$(this).click();
							e.stopImmediatePropagation();
						}
						if (e.which == KeyCode.home) {
							$(".accordion:first .accordion-header").focus();
						}
						if (e.which == KeyCode.end) {
							$(".accordion:last .accordion-header").focus();
						}
						if (e.which == KeyCode.arrowLeft || e.which == KeyCode.arrowUp) {
							e.preventDefault();
							var $prev = $(this).parent().prevAll(".accordion").first().find(".accordion-header");
							if ($prev.length > 0) {
								$prev.focus();
							} else {
								$(".accordion:last .accordion-header").focus();
							}
						}
						if (e.which == KeyCode.arrowRight || e.which == KeyCode.arrowDown) {
							e.preventDefault();
							var $next = $(this).parent().nextAll(".accordion").first().find(".accordion-header");
							if ($next.length > 0) {
								$next.focus();
							} else {
								$(".accordion:first .accordion-header").focus();
							}
						}
					});
				});
				this.find(".accordion-content").each(function () {
					$(this).keydown(function (e) {
						if (e.ctrlKey) {
							if (e.which == KeyCode.arrowUp) {
								e.preventDefault();
								$(this).prev().focus();
							}
						}
					});
				});
				return this;
			};

			/**
    * Si toutes les facettes sont refermées, on met un tabindex=0 à la première facette.
    */
			function etatTabIndexAccordion() {
				var nbFacetteOuvertes = 0;
				$(".accordion .accordion-header").each(function () {
					if ($(this).attr("tabindex") == 0) {
						nbFacetteOuvertes++;
					}
				});
				if (nbFacetteOuvertes == 0) {
					$(".accordion .accordion-header").first().attr("tabindex", "0");
				}
			}

			jQuery.fn.combobox = function (param) {
				var $select = null;
				if (param === undefined) {
					$select = this.selectric();
				} else {
					$select = this.selectric(param);
				}

				var $selectricWrapper = this.parent().parent();
				var $selectric = $selectricWrapper.find(".selectric");

				$selectricWrapper.find(".selectricItems .selectricScroll ul").attr("role", "listbox");
				$selectricWrapper.find(".selectricItems .selectricScroll ul li").attr("role", "option").attr("tabindex", 0);
				$selectricWrapper.find(".selectricInput").attr("tabindex", -1);
				$selectric.attr("aria-readonly", true).attr("tabindex", 0);
				$selectricWrapper.find(".selectric .button").attr("tabindex", -1).attr("data-i18n", "[title]header.recherche.rubrique-title").i18n();

				this.on("selectric-init", function () {
					$selectricWrapper.attr("aria-expanded", false);
				});

				this.on("selectric-open", function () {
					$selectricWrapper.attr("aria-expanded", true);
					$selectric.focus();
				});

				this.on("selectric-close", function (event, element, selectric) {
					$selectricWrapper.attr("aria-expanded", false);
					$selectric.focus();
				});

				this.bind("refreshed", function () {
					$selectricWrapper.find(".selectricItems .selectricScroll ul").attr("role", "listbox");
					$selectricWrapper.find(".selectricItems .selectricScroll ul li").attr("role", "option").attr("tabindex", 0);
					$selectricWrapper.find(".selectricInput").attr("tabindex", -1);
				});

				$selectricWrapper.keydown(function (e) {
					if (e.altKey) {
						if (e.which == KeyCode.arrowDown) {
							$select.selectric("open");
							$selectric.focus();
						} else if (e.which == KeyCode.arrowUp) {
							$select.selectric("close");
							$selectric.focus();
						}
					} else {
						var $current = $selectricWrapper.find(".selectricItems .selectricScroll ul li.selected");
						if (e.which == KeyCode.enter) {
							$current.click();
							$selectric.focus();
						}
						if (e.which == KeyCode.escape) {
							$select.selectric("close");
							$selectric.focus();
						} else if (e.which == KeyCode.arrowDown) {
							$current.removeClass("selected");
							var $next = $current.next();
							if ($next.length > 0) {
								$next.focus();
								$next.addClass("selected");
							} else {
								var $next = $selectricWrapper.find(".selectricItems .selectricScroll ul li:first");
								$next.focus();
								$next.addClass("selected");
							}
							e.preventDefault();
							e.stopImmediatePropagation();
						} else if (e.which == KeyCode.arrowUp) {
							$current.removeClass("selected");
							var $prev = $current.prev();
							if ($prev.length > 0) {
								$prev.focus();
								$prev.addClass("selected");
							} else {
								var $prev = $selectricWrapper.find(".selectricItems .selectricScroll ul li:last");
								$prev.focus();
								$prev.addClass("selected");
							}
							e.preventDefault();
							e.stopImmediatePropagation();
						}
					}
				});

				return this;
			};

			jQuery.fn.autocompleter = function (param) {
				var $select = null;
				if (param === undefined) {
					$select = this.autocomplete();
				} else {
					$select = this.autocomplete(param);
				}
				this.parent().attr("role", "combobox").attr("aria-autocomplete", "list");
				this.attr("role", "textbox");
				return this;
			};

			jQuery.fn.tabpanel = function () {
				this.attr("role", "tablist");
				this.find(".onglet").each(function () {
					$(this).attr("role", "tab");
					$(this).attr("tabindex", $(this).hasClass("courant") ? 0 : -1);
					$(this).attr("aria-selected", $(this).hasClass("courant"));

					var $lien = $(this).find("a");
					var idPanel = $lien.attr("href").replace("#", "");

					$(this).attr("aria-controls", idPanel);
					$lien.attr("tabindex", -1);

					$("#" + idPanel).keydown(function (e) {
						if (e.altKey && e.which == KeyCode.arrowUp) {
							$(".onglets a[href='#" + idPanel + "']").parent().parent().focus();
						}
					});

					$(this).keydown(function (e) {
						if (e.which == KeyCode.arrowRight || e.which == KeyCode.arrowDown) {
							var $next = $(this).next();
							if ($next.length == 0) {
								$next = $(this).parent().find("li:first");
							}
							$next.focus();
							$next.click();
							e.preventDefault();
							e.stopImmediatePropagation();
						} else if (e.which == KeyCode.arrowLeft || e.which == KeyCode.arrowUp) {
							var $prev = $(this).prev();
							if ($prev.length == 0) {
								$prev = $(this).parent().find("li:last");
							}
							$prev.focus();
							$prev.click();
							e.preventDefault();
							e.stopImmediatePropagation();
						}
					});
				});
				return this;
			};

			/**
    *
    */
			jQuery.fn.checkbox = function () {
				if (!$(this).parent().is("li")) {
					$(this).attr("role", "tree");
				} else {
					this.attr("role", "group");
				}

				this.children("li").each(function () {
					var $data = $(this).data();
					if (typeof $data.$checkbox != "undefined") {
						var idCheckbox = "checkbox-" + $(this).attr("id");
						$data.$checkbox.attr("role", "checkbox").attr("aria-checked", false).attr("id", idCheckbox);
						$(this).attr("aria-controls", idCheckbox);
						if (typeof $data.$children != "undefined") {
							$(this).attr("aria-expanded", false);
						}
					} else {
						$(this).attr("aria-expanded", false);
					}

					$(this).attr("tabindex", 0).attr("role", "treeitem");

					$(this).keydown(function (e) {
						if (e.which == KeyCode.space) {
							$(this).click();
							$(this).focus();
							e.stopImmediatePropagation();
							e.preventDefault();
						}
					});
				});

				var $parent = this.parent("li");
				if ($parent.length > 0) {
					this.attr("aria-labelledby", $parent.id());
				} else {
					this.attr("aria-labelledby", this.closest(".facette").find("h3").id());
				}

				return this;
			};

			jQuery.fn.menuBar = function () {
				$(this).find("ul").attr("role", "menu");
				$(this).find("li").attr("role", "menuitem");

				$(this).find(".menu").keydown(function (e) {
					if (e.which == KeyCode.tab) {
						if (e.shiftKey) {
							$(this).find(":focusable:first").focus();
							e.stopImmediatePropagation();
						} else {
							$(this).find(":focusable:last").focus();
							e.stopImmediatePropagation();
						}
						setTimeout(function () {
							$(".lien").removeClass("hover");
							$(".menu-actif").addClass("fleche");
						}, 1);
					}
				});

				$(this).find(".menu-deroulant li").keydown(function (e) {
					if (e.which == KeyCode.arrowDown || e.which == 98) {
						var fille = $(this).find("ul > li:first");
						var focused;
						if (fille.length > 0) {
							focused = fille.find(".lien:first");
						} else {
							var next = $(this).next("li:first");
							if (next.length > 0) {
								focused = next.find(".lien:first");
							} else {
								var selection = $(this);
								var focus = $(this);
								do {
									selection = selection.parent().parent();
									focus = selection.next("li:first");
								} while (focus.length == 0 && !selection.hasClass("menu-deroulant"));
								if (focus.length == 0) {
									focused = selection.find("li:first > .lien");
								} else {
									focused = focus.find(".lien:first");
								}
							}
						}
						focused.focus();
						$(this).closest(".menu-deroulant").css("display", "block");
						focused.focus();
						e.stopImmediatePropagation();
						e.preventDefault();
					} else if (e.which == KeyCode.arrowUp || e.which == 104) {
						var prev = $(this).prev("li:first");
						var focused;
						if (prev.length > 0) {
							var fillePrev = prev.find("ul > li:last");
							if (fillePrev.length > 0) {
								focused = fillePrev.find(".lien:first");
							} else {
								focused = prev.find(".lien:first");
							}
						} else {
							var parent = $(this).parent().parent();
							var lien = parent.children(".lien:first");
							if (lien.length > 0) {
								focused = lien;
							} else {
								focused = parent.find(".lien:last");
							}
						}
						focused.focus();
						$(this).closest(".menu-deroulant").css("display", "block");
						focused.focus();
						e.stopImmediatePropagation();
						e.preventDefault();
					}
				});

				$(this).find(".menu > li").keydown(function (e) {
					if (e.which == KeyCode.space || e.which == KeyCode.arrowDown || e.which == 98) {
						var menuDeroulant = $(this).find(".menu-deroulant");
						if (menuDeroulant.is(":visible") && e.which == KeyCode.space) {
							menuDeroulant.css("display", "");
						} else {
							$(".menu-deroulant").css("display", "");
							menuDeroulant.css("display", "block");
							var liLien = menuDeroulant.find("li:first > .lien");
							// On perd le focus
							liLien.focus();
							menuDeroulant.css("display", "block");
							// On gagne le focus
							liLien.focus();
						}
						e.stopImmediatePropagation();
						e.preventDefault();
					} else if (e.which == KeyCode.enter) {
						$(".menu-deroulant").css("display", "");
						window.location.href = $(this).find(".lien").attr("href");
						e.stopImmediatePropagation();
						e.preventDefault();
					} else if (e.which == KeyCode.arrowLeft || e.which == 100) {
						var derouler = false;
						var menuDeroulant = $(this).find(".menu-deroulant");
						if (menuDeroulant.css("display") == "block") {
							menuDeroulant.css("display", "");
							derouler = true;
						}
						var prev = $(this).prev("li");
						if (prev.length > 0) {
							var lien = prev.children(".lien");
							lien.focus();
						} else {
							var last = $(this).parent().children("li:last");
							while (last.css("visibility") == "hidden") {
								last = last.prev();
							}
							last.children(".lien").focus();
						}
						if (derouler) {
							menuDeroulant = prev.find(".menu-deroulant");
							menuDeroulant.css("display", "block");
							var liLien = menuDeroulant.find("li:first > .lien");
							// On perd le focus
							liLien.focus();
							menuDeroulant.css("display", "block");
							// On gagne le focus
							liLien.focus();
						}
					} else if (e.which == KeyCode.arrowRight || e.which == 102) {
						var derouler = false;
						var menuDeroulant = $(this).find(".menu-deroulant");
						if (menuDeroulant.css("display") == "block") {
							menuDeroulant.css("display", "");
							derouler = true;
						}
						var next = $(this).next("li");
						if (next.length > 0 && next.css("visibility") != "hidden") {
							next.children(".lien").focus();
						} else {
							$(this).parent().children("li:first").children(".lien").focus();
						}
						if (derouler) {
							menuDeroulant = next.find(".menu-deroulant");
							menuDeroulant.css("display", "block");
							var liLien = menuDeroulant.find("li:first > .lien");
							// On perd le focus
							liLien.focus();
							menuDeroulant.css("display", "block");
							// On gagne le focus
							liLien.focus();
						}
					} else if (e.which == KeyCode.escape) {
						$(this).find(".menu-deroulant").css("display", "");
						$(this).find(".lien").focus();
					}
				});

				$(this).find(".menu-deroulant .lien").keydown(function (e) {
					if (e.which == KeyCode.space || e.which == KeyCode.enter) {
						$(this).closest(".menu-deroulant").css("display", "");
						window.location.href = $(this).attr("href");
						e.stopImmediatePropagation();
						e.preventDefault();
					}
				});
			};

			jQuery.fn.checkboxes = function () {
				var $root = this.children("ul");
				var id = this.id();
				ajouterCheckbox($root, id);
			};

			jQuery.fn.dialog = function () {
				this.attr("role", "dialog");
				var $titre = this.find(".titre");
				$titre.attr("tabindex", 0).attr("role", "document");
				var $message = this.find(".message");
				$message.attr("tabindex", 0).attr("role", "document");

				var $firstTabbableElement = this.find(":tabbable").first();
				var $lastTabbableElement = this.find(":tabbable").last();

				this.attr("aria-labelledby", $titre.id());
				$lastTabbableElement.keydown(function (e) {
					if (!e.shiftKey && e.which == KeyCode.tab) {
						$firstTabbableElement.focus();
						e.preventDefault();
					}
				});
				$firstTabbableElement.keydown(function (e) {
					if (e.shiftKey && e.which == KeyCode.tab) {
						$lastTabbableElement.focus();
						e.preventDefault();
					}
				});
				$firstTabbableElement.focus();
			};

			var indexIdLi = 1;
			function ajouterCheckbox($ul, idRacine) {
				$ul.children("li").each(function () {
					$(this).attr("id", idRacine + "-" + indexIdLi++);
					var $son = $(this).children("ul");
					if ($son.length > 0) {
						ajouterCheckbox($son, idRacine);
					}
				});
				$ul.checkbox();
			}

			/* */
			jQuery.fn.scrollbar = function (param) {
				if (param === undefined) {
					this.mCustomScrollbar();
				} else {
					var paramEx = $.extend({
						callbacks: {
							onScroll: function onScroll() {
								$(this).find(".mCSB_scrollTools").attr("aria-valuenow", this.mcs.topPct);
							}
						}
					}, param);
					this.mCustomScrollbar(paramEx);
				}

				this.find(".mCSB_scrollTools").attr("aria-controls", this.id()).attr("role", "scrollbar").attr("aria-orientation", "vertical").attr("aria-valuemax", "100").attr("aria-valuenow", "0").attr("aria-valuemin", "0");

				return this;
			};

			/*
    * RMES tooltip
    */
			jQuery.fn.rmesTooltip = function () {
				if (this.data().ref) {
					var tmp = ("/" + this.data().ref).split("/"),
					    uri = tmp.length > 0 ? tmp[tmp.length - 1] : "vide";
					uri = uri.toString().startsWith("c") ? uri : "c" + uri;
					var court = this.data().court ? "/court" : "";
					this.click(function (e) {
						e.preventDefault();
					});
					var itself = this;
					this.qtip({
						position: {
							my: "top center",
							at: "bottom center",
							target: this,
							viewport: $(".contenu"),
							adjust: {
								resize: true,
								method: "shift none"
							}
						},
						hide: {
							event: "null",
							fixed: true
						},
						show: {
							event: "click",
							effect: false
						},
						events: {
							show: function show() {
								// Quand on clique dans le tooltip
								$(itself.qtip("api").elements.tooltip).click(function () {
									return false;
								});
								// Quand on clique hors du tooltip
								$(document).one("click", function () {
									itself.qtip("hide");
								});
							}
						},
						style: { classes: "qtip-web4g qtip-shadow qtip-rounded" },
						content: {
							text: "Chargement...",
							ajax: {
								url: contextPath + "/" + langue + "/metadonnees/get/definitions/" + uri + court,
								type: "GET",
								success: function success(data, status) {
									this.set("content.text", data.chapoHtml);
									this.set("content.title", "Définition");
									this.set("content.button", "Fermer");
								}
							}
						}
					});
				}

				return this;
			};

			jQuery.fn.adhocTooltip = function () {
				this.click(function (e) {
					e.preventDefault();
				});
				var href = this.attr("href");
				this.attr("href", "#");
				if (href != "#") {
					href = href.replace(/^#+/i, "");

					var $div = $("#" + href),
					    $concept = $div.find(".concept"),
					    title = $concept.text().isEmpty() ? "Définition" : $concept.text();
					var itself = this;
					this.qtip({
						position: {
							my: "top center",
							at: "bottom center",
							target: this,
							viewport: $(".contenu"),
							adjust: {
								resize: true,
								method: "shift none"
							}
						},
						hide: {
							event: "null",
							fixed: true
						},
						show: {
							event: "click",
							effect: false
						},
						events: {
							show: function show() {
								// Quand on clique dans le tooltip
								$(itself.qtip("api").elements.tooltip).click(function (elem) {
									if (elem.target.tagName.toLowerCase() !== "a") {
										return false;
									}
								});
								// Quand on clique hors du tooltip
								$(document).one("click", function () {
									itself.qtip("hide");
								});
							}
						},
						style: { classes: "qtip-web4g qtip-shadow qtip-rounded" },
						content: {
							title: title,
							button: "Fermer",
							text: function text() {
								return $div.clone();
							}
						}
					});
				}

				return this;
			};

			jQuery.fn.infobulleTooltip = function () {
				this.click(function (e) {
					e.preventDefault();
				});
				var href = this.attr("href");
				this.attr("href", "#");
				if (href != "#") {
					href = href.replace(/^#+/i, "");

					var $div = $("#" + href),
					    $titre = $div.find("h2"),
					    title = $titre.text().isEmpty() ? langue == "fr" ? "Note" : "Notes" : $titre.text();
					var itself = this;
					this.qtip({
						position: {
							my: "top center",
							at: "bottom center",
							target: this,
							viewport: $(".contenu"),
							adjust: {
								resize: true,
								method: "shift none"
							}
						},
						hide: {
							event: "null", //event : "mouseleave",
							fixed: true
						},
						show: {
							event: "click", //event: "mouseover",
							effect: false
						},
						events: {
							show: function show() {
								// Quand on clique dans le tooltip
								$(itself.qtip("api").elements.tooltip).click(function () {
									//								return false;
								});
								// Quand on clique hors du tooltip
								$(document).one("click", function () {
									itself.qtip("hide");
								});
							}
						},
						style: {
							classes: "qtip-web4g qtip-shadow qtip-rounded qtip-infobulles"
						},
						content: {
							title: title,
							button: "Fermer",
							text: function text() {
								return $div.clone();
							}
						}
					});
				}

				return this;
			};

			jQuery.fn.siren = function () {
				var ajusterIdentifiantEntreprise = function ajusterIdentifiantEntreprise(event) {
					$(this).val($(this).val().separerNombres(3, 9));
				};

				this.keyup(ajusterIdentifiantEntreprise);

				this.change(ajusterIdentifiantEntreprise);
			};

			/**
    *
    */
			jQuery.fn.radioGroupe = function (params) {
				params = $.extend({ callback: function callback() {} }, params);
				var ctx = this,
				    $radio = $(this).find("li"),
				    i = 0,
				    max = $radio.length;
				this.actual = null;

				$radio.each(function () {
					var $this = $(this),
					    $img = $this.find("img"),
					    $label = $this.find(".radio-label"),
					    value = $this.attr("data-value"),
					    index = i,
					    click = function click() {
						if (value !== ctx.actual) {
							ctx.actual = value;
							$radio.each(function () {
								var $imgEx = $(this).find("img");
								$imgEx.attr("alt", "Non coché : ");
								$imgEx.attr("src", contextPath + "/static/img/radio-unchecked.svg");
								$(this).attr("aria-checked", "false");
								$(this).attr("tabindex", -1);
							});
							$img.attr("alt", "Coché : ");
							$img.attr("src", contextPath + "/static/img/radio-checked.svg");
							$this.attr("tabindex", 0);
							$this.attr("aria-checked", "true");
							params.callback.call(this, value);
							$this.focus();
						}
					};

					if ($img.is("[alt='Coché : ']")) {
						ctx.actual = value;
						$this.attr("aria-checked", "true");
					} else {
						$this.attr("aria-checked", "false");
					}

					$img.click(click);
					$this.click(click);
					$this.keydown(function (e) {
						if (e.keyCode == KeyCode.arrowUp || e.keyCode == KeyCode.arrowLeft) {
							if (index > 0) {
								$radio[index - 1].click();
							} else {
								$radio[max - 1].click();
							}
							e.preventDefault();
						} else if (e.keyCode == KeyCode.arrowDown || e.keyCode == KeyCode.arrowRight) {
							if (index <= max - 2) {
								$radio[index + 1].click();
							} else {
								$radio[0].click();
							}
							e.preventDefault();
						}
					});
					i++;
				});

				this.setValue = function (ref) {
					$radio.each(function () {
						var $img = $(this).find("img"),
						    value = $(this).attr("data-value");

						if (value == ref) {
							$img.attr("alt", "Coché : ");
							$img.attr("src", contextPath + "/static/img/radio-checked.svg");
							$(this).attr("aria-checked", "true");
							ctx.actual = ref;
						} else {
							$img.attr("alt", "Non coché : ");
							$img.attr("src", contextPath + "/static/img/radio-unchecked.svg");
							$(this).attr("aria-checked", "false");
						}
					});
				};

				this.getValue = function () {
					return ctx.actual;
				};

				return this;
			};

			/**
    * Composant de saisie de texte.
    */
			jQuery.fn.zoneSaisie = function (params) {
				var message = function message(lg, size) {
					if (typeof lg != "undefined" && lg == "fr") {
						$div.text(fr.replace("$0", size.toLocaleString()).replace("$1", params.maxlength.toLocaleString()).replace("$2", size > 1 ? "s" : ""));
					} else {
						$div.text(en.replace("$0", size.toLocaleString()).replace("$1", params.maxlength.toLocaleString()).replace("$2", size > 1 ? "s" : ""));
					}
				};

				if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) == "object") {
					params = $.extend({
						maxlength: 2000,
						id: "id-textarea",
						clazz: "champ-formulaire",
						rows: 4
					}, params);

					var $textarea = $("<textarea>", {
						class: params.clazz,
						rows: params.rows,
						maxlength: params.maxlength
					});
					var $div = $("<div>", { class: "text-email" });

					var fr = "$0 caractère$2 sur $1 caractères autorisés.",
					    en = "$0 character$2 on $1 characters allowed.";
					message(langue, 0);

					$textarea.bind("input propertychange", function () {
						var l = $(this).val().length;
						message(langue, l);
					});

					this.append($textarea);
					this.append($div);

					$textarea.attr("id", params.id);
					$textarea.attr("required", "required");
					$div.attr("aria-live", "polite");
				} else if (typeof params == "string") {
					if (params == "value") {
						return this.find("textarea").val();
					} else if (params == "effacer") {
						this.find("textarea").val("");
						message(langue, 0);
					}
				}
			};

			/**
    *
    */
			jQuery.fn.courriel = function (params) {
				if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) == "object") {
					params = $.extend({
						id: "id-textarea",
						clazz: "champ-formulaire",
						maxlength: 100,
						tabindex: 0
					}, params);

					var $input = $("<input>", {
						type: "email",
						class: params.clazz,
						role: "textbox",
						//				'autocomplete' : 'off',
						maxlength: params.maxlength,
						tabindex: params.tabindex,
						required: "required",
						title: "Votre adresse électronique"
					});
					if (langue.toLowerCase() == "fr") {
						$input.attr("placeholder", "Votre adresse électronique");
					} else {
						$input.attr("placeholder", "Your email");
					}

					this.append($input);
					$input.attr("id", params.id);
					//			$input.attr('autocomplete', 'on');
				} else if (typeof params == "string") {
					if (params == "isValid") {
						var reg = new RegExp("^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$", "i");
						var val = this.find("input").val();
						if (!String.isBlank(val) && reg.test(val)) {
							return true;
						} else {
							return false;
						}
					} else if (params == "value") {
						return this.find("input").val();
					} else if (params == "effacer") {
						this.find("input").val("");
					}
				}
			};

			/**
    *
    */
			jQuery.fn.courrielEx = function (params) {
				if (typeof params == "undefined") {} else if (typeof params == "string") {
					if (params == "isValid") {
						var reg = new RegExp("^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$", "i");
						var val = this.val();
						if (!String.isBlank(val) && reg.test(val)) {
							return true;
						} else {
							return false;
						}
					} else if (params == "value") {
						return this.val();
					} else if (params == "effacer") {
						this.val("");
					}
				}
			};

			/**
    *
    */
			jQuery.fn.courrielPlaceHolder = function (langue) {
				if (langue.toLowerCase() == "fr") {
					this.attr("placeholder", "Votre adresse électronique");
				} else {
					this.attr("placeholder", "Your email");
				}
			};

			jQuery.fn.scrollTo = function () {
				$("html, body").animate({ scrollTop: this.offset().top }, 750);
			};
		})(jQuery);

		var Toggle = function Toggle() {};
		Toggle.features = {};
		Toggle.first = true;
		Toggle.start = function () {
			if (typeof features != "undefined") {
				for (var k in features) {
					var us = k.replace('feature.', '');
					Toggle.features[us] = $.parseJSON(features[k]);
				}
			};
		};
		Toggle.on = function (us) {
			if (Toggle.first) {
				Toggle.first = false;
				Toggle.start();
			}
			return us in Toggle.features && Toggle.features[us];
		};
		Toggle.off = function (us) {
			if (Toggle.first) {
				Toggle.first = false;
				Toggle.start();
			}
			return us in Toggle.features && !Toggle.features[us];
		};
		var WEB4G_URL = exports.WEB4G_URL = {},
		    FACETTE = exports.FACETTE = {},
		    URL_PARAMS = exports.URL_PARAMS = {},
		    NAVIGATION_FILTERS = exports.NAVIGATION_FILTERS = {},
		    SOLR_PARAMS = exports.SOLR_PARAMS = {},
		    MSG_FACETTE = exports.MSG_FACETTE = {},
		    SUGGEST_FIELDS = exports.SUGGEST_FIELDS = {},
		    SUGGEST_PARAMS = exports.SUGGEST_PARAMS = {},
		    SUGGEST_NIVEAUX = exports.SUGGEST_NIVEAUX = {};

		WEB4G_URL.statistiques = '/statistiques';
		WEB4G_URL.ddlSelection = '/statistiques/zones';
		WEB4G_URL.metadonnees = '/metadonnees';
		WEB4G_URL.definition = '/metadonnees/definition/';
		WEB4G_URL.information = '/information';
		WEB4G_URL.recherche = '/recherche';
		WEB4G_URL.rechercheStatistiques = '/recherche/recherche-statistiques';
		WEB4G_URL.rechercheMetadonnees = '/recherche/recherche-metadonnees';
		WEB4G_URL.rechercheServices = '/recherche/recherche-services';
		WEB4G_URL.rechercheInsee = '/recherche/recherche-insee';
		WEB4G_URL.rechercheCog = '/recherche/recherche-geographique';
		WEB4G_URL.consultationCalendrier = '/agenda-diffusion';
		WEB4G_URL.source = '/metadonnees/source/';

		FACETTE.themeIdFacet = { id: 'themeIdFacet' };
		FACETTE.categorieIdFacet = { id: 'categorieIdFacet' };
		FACETTE.familleIdFacet = { id: 'familleIdFacet' };
		FACETTE.geographieNiveauFacet = { id: 'geographieNiveauFacet' };
		FACETTE.geographieCodeFacet = { id: 'geographieCodeFacet' };
		FACETTE.facetteCollectionIdFacet = { id: 'facetteCollectionIdFacet' };
		FACETTE.facetteActualiteSSMIdFacet = { id: 'facetteActualiteSSMIdFacet' };
		FACETTE.facetteRubrique = { id: 'facetteRubrique' };
		FACETTE.facetteConjonctureIdFacet = { id: 'facetteConjonctureIdFacet' };
		FACETTE.facetteTypeIndicateur = { id: 'facetteTypeIndicateurId' };
		FACETTE.facetteServiceDiffuseur = { id: 'facetteServiceDiffuseurId' };
		FACETTE.facetteModifications = { id: 'facetteModifications' };
		FACETTE.facetteDepartements = { id: 'facetteDepartements' };
		FACETTE.facetteRegions = { id: 'facetteRegions' };
		FACETTE.facetteDebut = { id: 'facetteDebut' };
		FACETTE.facetteFin = { id: 'facetteFin' };
		FACETTE.typeProduit = { id: 'typeProduit' };

		URL_PARAMS.separator = '+';
		URL_PARAMS.q = 'q';
		URL_PARAMS.start = 'debut';
		URL_PARAMS.rows = 'taille';
		URL_PARAMS.geographie = 'geo';
		URL_PARAMS.sommaire = 'sommaire';
		URL_PARAMS.separatorGeoraphie = '-';
		URL_PARAMS.separator = '+';
		URL_PARAMS.idFacetteDepliee = 'idfacette';
		URL_PARAMS.rubriques = 'rubrique';
		URL_PARAMS.familleId = 'familleId';
		URL_PARAMS.idPrec = 'idprec';
		URL_PARAMS.niveau = 'niveau';
		URL_PARAMS.champRecherche = 'champRecherche';
		URL_PARAMS[FACETTE.themeIdFacet.id] = 'theme';
		URL_PARAMS[FACETTE.categorieIdFacet.id] = 'categorie';
		URL_PARAMS[FACETTE.familleIdFacet.id] = 'famille';
		URL_PARAMS[FACETTE.geographieNiveauFacet.id] = 'nivgeo';
		URL_PARAMS[FACETTE.geographieCodeFacet.id] = 'codegeo';
		URL_PARAMS[FACETTE.facetteCollectionIdFacet.id] = 'collection';
		URL_PARAMS[FACETTE.facetteActualiteSSMIdFacet.id] = 'actualite-ssm';
		URL_PARAMS[FACETTE.facetteConjonctureIdFacet.id] = 'conjoncture';
		URL_PARAMS[FACETTE.facetteModifications.id] = 'modification';
		URL_PARAMS[FACETTE.facetteTypeIndicateur.id] = 'type-indicateur';
		URL_PARAMS[FACETTE.facetteServiceDiffuseur.id] = 'service-diffuseur';
		URL_PARAMS[FACETTE.facetteDepartements.id] = 'departement';
		URL_PARAMS[FACETTE.facetteDebut.id] = 'p-debut';
		URL_PARAMS[FACETTE.facetteFin.id] = 'p-fin';
		URL_PARAMS[FACETTE.typeProduit.id] = 'metadonnees';
		URL_PARAMS[FACETTE.facetteRegions.id] = 'region';

		NAVIGATION_FILTERS[FACETTE.themeIdFacet.id] = { field: 'themeId', tag: 'tagThemeId' };
		NAVIGATION_FILTERS[FACETTE.facetteConjonctureIdFacet.id] = { field: 'facetteConjonctureId', tag: 'tagFacetteConjonctureId' };
		NAVIGATION_FILTERS[FACETTE.facetteActualiteSSMIdFacet.id] = { field: 'facetteActualiteSSMId', tag: 'tagFacetteActualiteSSMId' };
		NAVIGATION_FILTERS[FACETTE.geographieNiveauFacet.id] = { field: 'niveauGeo', tag: 'tagNiveauGeo' };
		NAVIGATION_FILTERS[FACETTE.geographieCodeFacet.id] = { field: 'codeGeo', tag: 'tagCodeGeo' };
		NAVIGATION_FILTERS[FACETTE.categorieIdFacet.id] = { field: 'categorieId', tag: 'tagCategorieId' };
		NAVIGATION_FILTERS[FACETTE.familleIdFacet.id] = { field: 'familleId', tag: 'tagFamilleId' };
		NAVIGATION_FILTERS[FACETTE.facetteCollectionIdFacet.id] = { field: 'facetteCollectionId', tag: 'tagFacetteCollectionId' };
		NAVIGATION_FILTERS['RUBRIQUE'] = { field: 'rubrique', tag: 'tagRubrique' };
		NAVIGATION_FILTERS[URL_PARAMS.familleId] = { field: 'familleId' };
		NAVIGATION_FILTERS['DIFFUSION'] = { field: 'diffusion' };
		NAVIGATION_FILTERS[FACETTE.facetteTypeIndicateur.id] = { field: 'facetteTypeIndicateurId', tag: 'tagFacetteTypeIndicateurId' };
		NAVIGATION_FILTERS[FACETTE.facetteServiceDiffuseur.id] = { field: 'facetteServiceDiffuseurId', tag: 'tagFacetteServiceDiffuseurId' };
		NAVIGATION_FILTERS[FACETTE.facetteModifications.id] = { field: 'historique_codeModification', tag: 'tagHistorique_codeModification' };
		NAVIGATION_FILTERS[FACETTE.facetteDepartements.id] = { field: 'historique_codeDepartement', tag: 'tagHistorique_codeDepartement' };
		NAVIGATION_FILTERS[FACETTE.facetteDebut.id] = { field: 'historique_dateEffet', quote: false };
		NAVIGATION_FILTERS[FACETTE.facetteFin.id] = { field: 'historique_dateEffet', quote: false };
		NAVIGATION_FILTERS[FACETTE.typeProduit.id] = { field: 'typeProduit', quote: false, tag: 'tagTypeProduit' };
		NAVIGATION_FILTERS[FACETTE.facetteRegions.id] = { field: 'codeGeo', tag: 'tagCodeGeo' };

		SOLR_PARAMS.defaultQuery = '*:*';
		SOLR_PARAMS.defaultSortField = { field: 'dateDiffusion', order: 'desc' };
		SOLR_PARAMS.naturalOrder = { field: 'score', order: 'desc' };
		SOLR_PARAMS.defaultRows = 10;
		SOLR_PARAMS.defaultStart = 0;
		SOLR_PARAMS.defaultIdFacetteDepliee = 0;

		MSG_FACETTE.click = 404; //{ li : [], facette : string }
		MSG_FACETTE.reset = 405;
		MSG_FACETTE.post = 406; // {}
		MSG_FACETTE.addFilter = 407; //{ value : string,  facette : string}
		MSG_FACETTE.removeFilter = 408; //{ value : string,  facette : string}
		MSG_FACETTE.cleanFilter = 409; //{ facette : string}
		MSG_FACETTE.addCritere = 410; //{ critere }
		MSG_FACETTE.addFacetQuery = 411; // { query : string }
		MSG_FACETTE.removeFacetQuery = 412; // { query : string }
		MSG_FACETTE.refreshUrlParam = 413; // { key : string, value : [] }

		exports.SUGGEST_PARAMS = SUGGEST_PARAMS = { size: 25 };
		exports.SUGGEST_FIELDS = SUGGEST_FIELDS = {
			suggestRegion: { name: 'suggestRegion', niveau: 'REG', isCode: false },
			suggestCodeRegion: { name: 'suggestCodeRegion', niveau: 'REG', isCode: true },
			suggestDepartement: { name: 'suggestDepartement', niveau: 'DEP', isCode: false },
			suggestCodeDepartement: { name: 'suggestCodeDepartement', niveau: 'DEP', isCode: true },
			suggestEPCI: { name: 'suggestEPCI', niveau: 'EPCI', isCode: false },
			suggestCodeEPCI: { name: 'suggestCodeEPCI', niveau: 'EPCI', isCode: true },
			suggestArrondissement: { name: 'suggestArrondissement', niveau: 'ARR', isCode: false },
			suggestCodeArrondissement: { name: 'suggestCodeArrondissement', niveau: 'ARR', isCode: true },
			suggestCommune: { name: 'suggestCommune', niveau: 'COM', isCode: false },
			suggestCodeCommune: { name: 'suggestCodeCommune', niveau: 'COM', isCode: true },
			suggestAireUrbaine: { name: 'suggestAireUrbaine', niveau: 'AU2010', isCode: false },
			suggestCodeAireUrbaine: { name: 'suggestCodeAireUrbaine', niveau: 'AU2010', isCode: true },
			suggestUniteUrbaine: { name: 'suggestUniteUrbaine', niveau: 'UU2010', isCode: false },
			suggestCodeUniteUrbaine: { name: 'suggestCodeUniteUrbaine', niveau: 'UU2010', isCode: true },
			suggestUniteUrbaine2020: { name: 'suggestUniteUrbaine2020', niveau: 'UU2020', isCode: false },
			suggestCodeUniteUrbaine2020: { name: 'suggestCodeUniteUrbaine2020', niveau: 'UU2020', isCode: true },
			suggestZoneEmploi: { name: 'suggestZoneEmploi', niveau: 'ZE2010', isCode: false },
			suggestCodeZoneEmploi: { name: 'suggestCodeZoneEmploi', niveau: 'ZE2010', isCode: true },
			suggestZoneEmploi2020: { name: 'suggestZoneEmploi2020', niveau: 'ZE2020', isCode: false },
			suggestCodeZoneEmploi2020: { name: 'suggestCodeZoneEmploi2020', niveau: 'ZE2020', isCode: true },
			suggestAireAttractionVille2020: { name: 'suggestAireAttractionVille2020', niveau: 'AAV2020', isCode: false },
			suggestCodeAireAttractionVille2020: { name: 'suggestCodeAireAttractionVille2020', niveau: 'AAV2020', isCode: true },
			suggestCollOutreMer: { name: 'suggestCollOutreMer', niveau: 'COLLECTIVITE_OUTRE_MER', isCode: false },
			suggestCodeCollOutreMer: { name: 'suggestCodeCollOutreMer', niveau: 'COLLECTIVITE_OUTRE_MER', isCode: true },
			suggestDivers: { name: 'suggestDivers' },
			suggestContenantCommune: { name: 'suggestContenantCommune' }
		};

		/* Champ de recherche par défaut du suggester */
		SUGGEST_FIELDS.liste = [SUGGEST_FIELDS.suggestRegion.name, SUGGEST_FIELDS.suggestCodeRegion.name, SUGGEST_FIELDS.suggestDepartement.name, SUGGEST_FIELDS.suggestCodeDepartement.name, SUGGEST_FIELDS.suggestEPCI.name, SUGGEST_FIELDS.suggestCodeEPCI.name, SUGGEST_FIELDS.suggestCommune.name, SUGGEST_FIELDS.suggestAireUrbaine.name, SUGGEST_FIELDS.suggestAireAttractionVille2020.name, SUGGEST_FIELDS.suggestUniteUrbaine.name, SUGGEST_FIELDS.suggestUniteUrbaine2020.name, SUGGEST_FIELDS.suggestZoneEmploi.name, SUGGEST_FIELDS.suggestZoneEmploi2020.name, SUGGEST_FIELDS.suggestCodeCommune.name, SUGGEST_FIELDS.suggestDivers.name, SUGGEST_FIELDS.suggestArrondissement.name, SUGGEST_FIELDS.suggestCodeArrondissement.name, SUGGEST_FIELDS.suggestCodeAireUrbaine.name, SUGGEST_FIELDS.suggestCodeAireAttractionVille2020.name, SUGGEST_FIELDS.suggestCodeUniteUrbaine.name, SUGGEST_FIELDS.suggestCodeUniteUrbaine2020.name, SUGGEST_FIELDS.suggestCodeZoneEmploi.name, SUGGEST_FIELDS.suggestCodeZoneEmploi2020.name, SUGGEST_FIELDS.suggestCodeCollOutreMer.name, SUGGEST_FIELDS.suggestCollOutreMer.name];
		/* Traitement des niveaux par le suggester */
		exports.SUGGEST_NIVEAUX = SUGGEST_NIVEAUX = {
			COM: {
				isSuggestion: true,
				isContenantCommune: false,
				fields: [SUGGEST_FIELDS.suggestCommune.name, SUGGEST_FIELDS.suggestCodeCommune.name]
			},
			DEP: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestDepartement.name, SUGGEST_FIELDS.suggestCodeDepartement.name]
			},
			REG: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestRegion.name, SUGGEST_FIELDS.suggestCodeRegion.name]
			},
			EPCI: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestEPCI.name, SUGGEST_FIELDS.suggestCodeEPCI.name]
			},
			ARR: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestArrondissement.name, SUGGEST_FIELDS.suggestCodeArrondissement.name]
			},
			AU2010: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestAireUrbaine.name, SUGGEST_FIELDS.suggestCodeAireUrbaine.name]
			},
			AAV2020: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestAireAttractionVille2020.name, SUGGEST_FIELDS.suggestCodeAireAttractionVille2020.name]
			},
			UU2010: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestUniteUrbaine.name, SUGGEST_FIELDS.suggestCodeUniteUrbaine.name]
			},
			UU2020: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestUniteUrbaine2020.name, SUGGEST_FIELDS.suggestCodeUniteUrbaine2020.name]
			},
			ZE2010: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestZoneEmploi.name, SUGGEST_FIELDS.suggestCodeZoneEmploi.name]
			},
			ZE2020: {
				isSuggestion: true,
				isContenantCommune: true,
				fields: [SUGGEST_FIELDS.suggestZoneEmploi2020.name, SUGGEST_FIELDS.suggestCodeZoneEmploi2020.name]
			},
			COLLECTIVITE_OUTRE_MER: {
				isSuggestion: true,
				isContenantCommune: false,
				fields: [SUGGEST_FIELDS.suggestCollOutreMer.name, SUGGEST_FIELDS.suggestCodeCollOutreMer.name]
			},
			TOUTES_COMMUNE: {
				isSuggestion: false,
				isContenantCommune: false
			},
			BASSIN_VIE: {
				isSuggestion: true,
				isContenantCommune: true
			},
			METRO: { isSuggestion: false },
			FE: { isSuggestion: false },
			INTER: { isSuggestion: false },
			COMPRD: { isSuggestion: false },
			ICQ: { isSuggestion: false },
			FRANCE: { isSuggestion: false }
		};
		var TYPE_PRODUIT = exports.TYPE_PRODUIT = {
			statistiques: 'statistiques',
			methodes: 'methodes',
			definition: 'definition',
			nomenclatures: 'nomenclatures',
			nafr2: 'nafr2',
			services: 'services',
			linsee: 'l\'insee',
			cpfr21: 'cpfr21',
			coicop2016: 'coicop2016',
			pcs2003: 'pcs2003',
			pcsese2003: 'pcsese2003',
			pcsese2017: 'pcsese2017',
			cog: 'cog',
			communiquesDePresse: 'communiquesDePresse',
			actualiteSSM: 'actualiteSSM',
			calendrier: 'calendrier',
			source: 'source',
			serieBdm: 'serieBdm',
			familleBdm: 'familleBdm',
			metadonnees: 'metadonnees'
		};
		var NOMENCLATURE_LIBELLE = exports.NOMENCLATURE_LIBELLE = {
			cog: 'Code Officiel Géographique'
		};

		var Web4gMenu = function () {
			return {
				start: function start() {
					var hoverObject = $(".deroulement, .menu > li > .lien, .menu-deroulant");

					$(".menu .menu-deroulant").hover(function () {
						var lien = $(this).prev(".lien");
						lien.addClass("hover");
						clearTimeout(lien.data("timeoutId"));
						$(".menu-actif").removeClass("fleche");
					}, function () {
						$(this).prev(".lien").removeClass("hover");
						$(".menu-actif").addClass("fleche");
					});

					$(".menu > li > .lien").hover(function () {
						clearTimeout($(this).data("timeoutId"));
						$(".menu-actif").removeClass("fleche");
					}, function () {
						$(".menu-actif").addClass("fleche");
					});

					hoverObject.hover(function () {
						clearTimeout($(this).data("timeoutId"));
						$(this).addClass("hover");
						$(this).parent().children(".menu-deroulant").addClass("hover");
					}, function () {
						var $context = $(this);
						var timeoutId = setTimeout(function () {
							var deroulement = $context.next(".menu-deroulant");
							if (deroulement.length == 0) {
								deroulement = $context;
								if ($context.hasClass("menu-deroulant")) {
									$context = $context.prev(".lien");
								}
							}
							$context.removeClass("hover");
							deroulement.removeClass("hover");
						}, 40);
						if ($context.hasClass("menu-deroulant")) {
							$context.prev(".lien").data("timeoutId", timeoutId);
						} else {
							$context.data("timeoutId", timeoutId);
						}
					});

					var menuSelectionne = null;

					var liens = $(".lien");
					liens.focus(function () {
						$(this).addClass("hover");
						$(".menu-actif").removeClass("fleche");
						$(this).closest(".menu-deroulant").prev().addClass("hover");
					});

					liens.focusout(function () {
						$(this).removeClass("hover");
						$(".menu-actif").addClass("fleche");
						var menu = $(this).closest(".menu-deroulant");
						menu.prev().removeClass("hover");
						if (menu.length == 0) {
							menu = $(this).next(".menu-deroulant");
						}
						if (menu.css("display") == "block") {
							menuSelectionne = menu;
							menuSelectionne.css("display", "");
						}
					});

					// Cette partie concerne le menu hamburger
					var parcours = [];
					var footer = false;
					var menuFooter = $("#afficher-menu-footer-mobile");
					var fondTransparent = $("#fond-transparent-body");
					var body = $("body");

					$("#afficher-menu").click(function (e) {
						afficherMenu($(this), false);
						e.preventDefault();
					});

					menuFooter.click(function (e) {
						afficherMenu($(this), true);
						e.preventDefault();
					});

					$(".deroulement").click(function (e) {
						if ($(this).hasClass("deroulement-clicked")) {
							init();
							parcours.pop();
							if (parcours.length > 0) {
								derouler(parcours.pop());
							} else {
								var ulBase = $("#menu > ul");
								ulBase.addClass("menu-clicked");
								ulBase.addClass("position-menu");
							}
						} else {
							derouler($(this));
						}
						$(this).removeClass("hover");
						e.preventDefault();
					});

					var afficherMenu = function afficherMenu(parent, booleanFooter) {
						if (parent.hasClass("hamburger-clicked")) {
							fermerHamburger(parent);
						} else {
							parent.addClass("hamburger-clicked");
							parent.parent().css("z-index", "201");
							parent.css("z-index", "201");
							var menu = $("#menu");
							var ul = menu.children("ul");
							menu.attr("aria-hidden", false);
							ul.addClass("menu-clicked");
							ul.addClass("position-menu");
							$(".menu-clicked").removeClass("menu");
							var fond = $(".fond-transparent-off");
							fond.addClass("fond-transparent-on");
							fond.removeClass("fond-transparent-off");
							if (booleanFooter) {
								footer = true;
								ul.css("top", parent.offset().top - parseInt(ul.css("height")) - 18);
							}
							fondTransparent.css("height", parseInt(body.css("height")));
						}
					};

					var changerLogo = function changerLogo(smartphone) {
						var logo = $("#logo");
						if (smartphone) {
							logo.find("img").attr("src", logo.find("#lien-logo-responsive").text());
						} else {
							logo.find("img").attr("src", logo.find("#lien-logo").text());
						}
					};

					var fermerHamburger = function fermerHamburger(hamburger) {
						footer = false;
						hamburger.removeClass("hamburger-clicked");
						hamburger.parent().css("z-index", "");
						hamburger.css("z-index", "");
						var menu = $("#menu");
						var ul = menu.children("ul");
						menu.attr("aria-hidden", true);
						ul.css("top", "");
						ul.addClass("menu");
						parcours = [];
						init();
						var fondTransparent = $(".fond-transparent-on");
						fondTransparent.addClass("fond-transparent-off");
						fondTransparent.removeClass("fond-transparent-on");
					};

					var initClicked = function initClicked() {
						$(".menu-clicked").removeClass("menu-clicked");
						$(".deroulement-clicked").removeClass("deroulement-clicked");
						$(".position-menu").removeClass("position-menu");
					};

					var init = function init() {
						initClicked();
						$(".li-clicked").css("top", "");
						$(".li-clicked").removeClass("li-clicked");
						$(".menu-deroulant").css("display", "");
						$("#menu li").css("display", "");
						var deroulement = $(".deroulement");
						deroulement.css("display", "");
						deroulement.text("");
					};

					var derouler = function derouler(deroulement) {
						$(".deroulement-clicked").css("display", "none");
						initClicked();

						var parent = deroulement.parent();
						parcours.push(deroulement);

						var str = "< Menu";
						parcours.forEach(function (etape) {
							str += " < " + etape.next().text();
						});
						deroulement.text(str);

						deroulement.parent().parent().children().each(function () {
							if (!$(this).is(parent)) {
								$(this).css("display", "none");
							}
						});
						deroulement.addClass("deroulement-clicked");
						parent.addClass("li-clicked");
						parent.addClass("position-menu");
						var sousMenu = $(".deroulement-clicked + a + .menu-deroulant > ul");
						var sousMenu2 = $(".deroulement-clicked + a + ul");
						var menuDeroulant = $(".deroulement-clicked + a + .menu-deroulant");
						sousMenu.addClass("menu-clicked");
						sousMenu2.addClass("menu-clicked");
						menuDeroulant.css("display", "");
						if (footer) {
							parent.css("top", menuFooter.offset().top - parseInt(parent.css("height")) - 18);
						}
					};

					var loupe = new Loupe({
						$lienLoupe: $("#afficher-recherche"),
						$searchbar: $("#searchbar-header"),
						$searchbarConteneur: $("#recherche-header")
					});

					Responsive.ResponsiveManager.addObserver({
						responsive: function responsive(format, width) {
							$("#menu").attr("aria-hidden", true);
							if (format == Responsive.desktop) {
								$("#menu").attr("aria-hidden", false);
								changerLogo(false);
								var hamburger = $("#afficher-menu");
								if (hamburger.hasClass("hamburger-clicked")) {
									fermerHamburger(hamburger);
								}
								var recherche = $("#afficher-recherche");
								if (recherche.hasClass("loupe-clicked")) {
									loupe.fermerRecherche();
								}
							} else if (format == Responsive.grandeTablette) {
								var recherche = $("#afficher-recherche");
								if (recherche.hasClass("loupe-clicked")) {
									loupe.fermerRecherche();
								}
								changerLogo(false);
								if (footer) {
									fermerHamburger(menuFooter);
								}
							} else {
								changerLogo(true);
								if (footer) {
									fermerHamburger(menuFooter);
								}
							}
						}
					});
				}
			};
		}();

		var assiociationUnicodeExposant = {
			"0": "&#8304;",
			"1": "&#185;",
			"2": "&#178;",
			"3": "&#179;",
			"4": "&#8308;",
			"5": "&#8309;",
			"6": "&#8310;",
			"7": "&#8311;",
			"8": "&#8312;",
			"9": "&#8313;",
			"e": "&#7497;",
			"r": "&#691;",
			"m": "&#7504;",
			"è": "&#7497;"
		};

		var superify = function superify(input) {
			if (!input) {
				return input;
			}
			var n = input.indexOf("<sup>");
			if (n == -1) {
				return input;
			} else {
				n += 5;
			}
			var output = [];
			var n2 = input.indexOf("</sup>");
			var subString = input.substring(n, n2);

			for (var i = 0; i < subString.length; i++) {
				var current = subString[i];
				if (assiociationUnicodeExposant[current]) {
					output.push(assiociationUnicodeExposant[current]);
				} else {
					output.push(current);
				}
			}
			return superify(input.replace("<sup>" + subString + "</sup>", output.join('')));
		};

		/* ************************** */

		var ResponsiveTableEx = function () {
			function ResponsiveTableEx($table) {
				_classCallCheck(this, ResponsiveTableEx);

				this.$table = $table;

				if (this.isResponsive()) {
					this.$container = $("<div>", { "class": "responsive-table-container" });
					this.$table.after(this.$container);
					this.$table.remove();
					this.$container.append(this.$table);
					this.$table.hide();

					this.$row = [];

					// la nouvelle table
					this.$newTable = $("<table>", { "class": "responsive-table-container" });
					this.$newTable.addClass(this.$table.attr("class"));
					this.$newTable.append($("<caption>").text(this.$table.find("caption").text()));
					this.$selector = $("<select>", { "id": "choix-onglet-en-tete-tableau", "class": "column-select", "data-i18n": "[title]choix-onglet.en-tete-tableau", "title": "Sélection d’une colonne du tableau" }).change(function (context) {
						return function () {
							context.changeColumn($(this).find(":selected").val());
						};
					}(this));
					// Duplication de la table.
					// Partie thead
					var $thead = $("<thead>"),
					    indexSelector = 0,
					    $originalRows = this.$table.find("thead tr");
					for (var i = 0; i < $originalRows.length; i++) {
						var $tr = null,
						    $current = $($originalRows[i]),
						    $ref = $current.find(":first-child").first();

						if (i == 0) {
							$tr = $("<tr>");
							// ligne d'en tête
							var th = $current.find("th"),
							    $th1 = $("<th>"),
							    $th2 = $("<th>" /*, { "colspan" : th.length - 1 }*/);
							$th1.html($ref.html());
							if ($ref.get()[0] !== undefined) {
								this.mapAttributes($th1, $ref.get()[0].attributes);
							}
							$tr.append($th1).append($th2);
							for (var o = 1; o < th.length; o++) {
								this.$selector.append($("<option>").val(++indexSelector).html(superify($(th[o]).html())));
							}

							$th2.append(this.$selector);
						} else {
							$tr = $current.clone();
						}

						this.$row[this.$row.length] = $tr;
						$thead.append($tr);
					}
					// Partie tbody
					var $tbody = $("<tbody>"),
					    indexSelector = 0,
					    $originalRows = this.$table.find("tbody tr");
					for (var i = 0; i < $originalRows.length; i++) {
						var $tr = null,
						    $current = $($originalRows[i]),
						    $ref = $current.find(":first-child").first();
						if (i == 0 && !$thead.has("tr").length) {
							$tr = $("<tr>");
							// ligne d'en tête
							var th = $current.find("th"),
							    $th1 = $("<th>"),
							    $th2 = $("<th>" /*, { "colspan" : th.length - 1 }*/);
							$th1.html($ref.html());
							if ($ref.get()[0] !== undefined) {
								this.mapAttributes($th1, $ref.get()[0].attributes);
							}
							$tr.append($th1).append($th2);
							for (var o = 1; o < th.length; o++) {
								this.$selector.append($("<option>").val(++indexSelector).html(superify($(th[o]).html())));
							}

							$th2.append(this.$selector);
						} else {
							$tr = $current.clone();
						}
						this.$row[this.$row.length] = $tr;
						$tbody.append($tr);
					}

					this.$newTable.append($thead).append($tbody);
					this.$container.append(this.$newTable);
					var selectorLength = this.$selector.find("option").length;
					this.changeColumn(selectorLength == 0 ? 1 : selectorLength);
					this.$selector.find("option:last").attr("selected", "selected");

					ResponsiveTableEx.tables[ResponsiveTableEx.tables.length] = this;
					Responsive.ResponsiveManager.addObserver(this);
				}
			}

			_createClass(ResponsiveTableEx, [{
				key: 'mapAttributes',
				value: function mapAttributes($cible, attributes) {
					$cible.removeAttr();
					$(attributes).each(function () {
						$cible.attr(this.name, this.value);
					});
				}
			}, {
				key: 'changeColumn',
				value: function changeColumn(index) {
					for (var i = 1; i < this.$row.length; i++) {
						var $current = this.$row[i],
						    td = $current.children();
						for (var j = 1; j < td.length; j++) {
							if (j != 0 && j != index) {
								$(td[j]).hide();
								$(td[j]).width('0%');
							} else {
								$(td[j]).show();
								$(td[j]).width('60%');
							}
						}
					}
				}
			}, {
				key: 'isResponsive',
				value: function isResponsive() {
					var is = true;

					// colspan
					var colspan = this.$table.find("[colspan]");
					if (colspan.length != 0) {
						for (var i = 0; i < colspan.length; i++) {
							if ($(colspan[i]).attr("colspan") != "1") {
								is = false;
							}
						} //
					}
					// pas de titre
					if (this.$table.find("th").length < 1) {
						is = false;
					}

					return is;
				}
			}, {
				key: 'toggleOn',
				value: function toggleOn() {
					this.$table.hide();
					this.$newTable.show();
				}
			}, {
				key: 'toggleOff',
				value: function toggleOff() {
					this.$table.show();
					this.$newTable.hide();
				}
			}, {
				key: 'responsive',
				value: function responsive(format, largeur) {
					if (format == Responsive.smartphone) {
						this.toggleOn();
					} else {
						this.toggleOff();
					}
				}
			}]);

			return ResponsiveTableEx;
		}();

		ResponsiveTableEx.tables = [];

		var SwiperContainerBandeauCommunication = function () {
			function SwiperContainerBandeauCommunication(selector) {
				_classCallCheck(this, SwiperContainerBandeauCommunication);

				this.selector = selector;
				this.swiperOn = false;
			}

			_createClass(SwiperContainerBandeauCommunication, [{
				key: 'responsive',
				value: function responsive(format, largeur) {
					this.destroySwiper();
					this.createSwiper(1);
				}
			}, {
				key: 'destroySwiper',
				value: function destroySwiper() {
					if (this.swiper != null && this.swiper.detachEvents && this.swiperOn) {
						this.swiper.detachEvents();
						this.swiper.destroy(true, true);
						this.swiperOn = false;
					}
				}
			}, {
				key: 'createSwiper',
				value: function createSwiper(slidesPerView) {
					this.swiper = new Swiper(this.selector, {
						slidesPerView: slidesPerView,
						watchSlidesProgress: true,
						watchSlidesVisibility: true,
						keyboardControl: true,
						nextButton: '#swiper-bandeau-button-next',
						prevButton: '#swiper-bandeau-button-prev',
						pagination: '.swiper-pagination',
						paginationClickable: true,
						loop: true,
						autoplay: 5000,
						autoplayDisableOnInteraction: false
					});
					this.swiperOn = true;
					if ($("#a-la-une .swiper-slide").length == 1) {
						$('#a-la-une .fleche-bandeau').addClass("hide");
						$('#a-la-une .swiper-pagination').addClass("hide");
					}
				}
			}]);

			return SwiperContainerBandeauCommunication;
		}();

		var SwiperContainerGraphiques = function () {
			function SwiperContainerGraphiques(selector) {
				_classCallCheck(this, SwiperContainerGraphiques);

				this.selector = selector;
				this.swiperOn = false;
			}

			_createClass(SwiperContainerGraphiques, [{
				key: 'responsive',
				value: function responsive(format, largeur) {

					if (format == Responsive.tablette || format == Responsive.smartphone) {
						this.smartphone();
					} else if (format == Responsive.grandeTablette) {
						this.tablette();
					} else {
						this.desktop();
					}
				}
			}, {
				key: 'smartphone',
				value: function smartphone() {
					this.destroySwiper();
					this.createSwiper(1);
				}
			}, {
				key: 'tablette',
				value: function tablette() {
					this.destroySwiper();
					this.createSwiper(2);
				}
			}, {
				key: 'desktop',
				value: function desktop() {
					this.destroySwiper();
					this.createSwiper(3);
				}
			}, {
				key: 'destroySwiper',
				value: function destroySwiper() {
					if (this.swiper != null && this.swiper.detachEvents && this.swiperOn) {
						this.swiper.detachEvents();
						this.swiper.destroy(true, true);
						this.swiperOn = false;
					}
				}
			}, {
				key: 'handleTabIndex',
				value: function handleTabIndex($container) {
					var $liensVisibles = $container.find('.swiper-slide.swiper-slide-visible .graphique-lien');
					$liensVisibles.each(function (index, element) {
						var $lien = $(element);
						$lien.attr('tabindex', '0');
					});

					var $liensInvisibles = $container.find('.swiper-slide:not(.swiper-slide-visible) .graphique-lien');
					$liensInvisibles.each(function (index, element) {
						var $lien = $(element);
						$lien.attr('tabindex', '-1');
					});
				}
			}, {
				key: 'createSwiper',
				value: function createSwiper(slidesPerView) {
					var $container = $('#indicateurs-cles'),
					    ctx = this;
					this.swiper = new Swiper(this.selector, {
						slidesPerView: slidesPerView,
						watchSlidesProgress: true,
						watchSlidesVisibility: true,
						keyboardControl: true,
						loop: false,
						nextButton: '#swiper-graphiques-button-next',
						prevButton: '#swiper-graphiques-button-prev',
						onInit: function onInit(swiper) {
							ctx.handleTabIndex($container);
						},
						onSlideChangeEnd: function onSlideChangeEnd(swiper) {
							ctx.handleTabIndex($container);
						}
					});
					this.swiperOn = true;
					$('.fleche-graphique').show();
				}
			}]);

			return SwiperContainerGraphiques;
		}();

		var SwiperContainerIndicateurs = function () {
			function SwiperContainerIndicateurs(selector) {
				_classCallCheck(this, SwiperContainerIndicateurs);

				this.selector = selector;
				this.swiperOn = false;
			}

			_createClass(SwiperContainerIndicateurs, [{
				key: 'responsive',
				value: function responsive(format, largeur) {

					if (format == Responsive.smartphone) {
						this.toggleOn();
					} else {
						this.toggleOff();
					}
				}
			}, {
				key: 'toggleOn',
				value: function toggleOn() {
					this.swiperOn = true;
					$(".fleche-indicateur").show();
					this.swiper = new Swiper(this.selector, {
						slidesPerView: 2,
						keyboardControl: true,
						loop: true,
						nextButton: "#swiper-indicateurs-button-next",
						prevButton: "#swiper-indicateurs-button-prev"
					});
				}
			}, {
				key: 'toggleOff',
				value: function toggleOff() {
					$(".fleche-indicateur").hide();
					if (this.swiper != null && this.swiper.detachEvents && this.swiperOn) {
						this.swiper.detachEvents();
						this.swiper.destroy(true, true);
						this.swiperOn = false;
					}
				}
			}]);

			return SwiperContainerIndicateurs;
		}();
		/**
   * Gére la création et le rafraichissement du dom des docs.
   */

		var DocumentsView = function DocumentsView($target) {
			var _this = this;

			this.$target = $target;
			this.render = function (documents, query, uriManager) {
				var ctx = this;
				this.$target.empty();
				if (documents.length == 0) {
					this.$target.append($('<div>', { class: 'message', 'data-i18n': 'echos.infos.aucun-resultat' }).text('Aucun document ne correspond à vos critères de recherche.').i18n());
				} else {
					$(documents).each(function () {
						if ('type' in this && this.type != null && (this.type.toLowerCase() == TYPE_PRODUIT.statistiques || this.type.toLowerCase() == TYPE_PRODUIT.linsee || this.type.toLowerCase() == TYPE_PRODUIT.services || this.type.toLowerCase() == TYPE_PRODUIT.methodes || this.type.toLowerCase() == TYPE_PRODUIT.cog || this.type.toLowerCase() == TYPE_PRODUIT.source || this.type == TYPE_PRODUIT.communiquesDePresse || this.type == TYPE_PRODUIT.actualiteSSM || this.type == TYPE_PRODUIT.metadonnees)) {
							ctx.$target.append(ctx.renderProduit(this, query));
						} else if ('typeProduit' in this && this.typeProduit == TYPE_PRODUIT.definition) {
							ctx.$target.append(ctx.renderDefinition(this));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.nafr2) {
							ctx.$target.append(ctx.renderNomenclature(this, TYPE_PRODUIT.nafr2));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.cpfr21) {
							ctx.$target.append(ctx.renderNomenclature(this, TYPE_PRODUIT.cpfr21));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.coicop2016) {
							ctx.$target.append(ctx.renderNomenclature(this, TYPE_PRODUIT.coicop2016));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.pcs2003) {
							ctx.$target.append(ctx.renderNomenclature(this, TYPE_PRODUIT.pcs2003));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.pcsese2003) {
							ctx.$target.append(ctx.renderNomenclature(this, TYPE_PRODUIT.pcsese2003));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.pcsese2017) {
							ctx.$target.append(ctx.renderNomenclature(this, TYPE_PRODUIT.pcsese2017));
						} else if ('typeProduit' in this && this.typeProduit != null && this.typeProduit == TYPE_PRODUIT.cog) {
							ctx.$target.append(ctx.renderFicheCOG(this));
						} else if ('typeProduit' in this && this.typeProduit == TYPE_PRODUIT.calendrier) {
							ctx.$target.append(ctx.renderCalendrier(this));
						} else if ('typeProduit' in this && this.typeProduit == TYPE_PRODUIT.source) {
							ctx.$target.append(ctx.renderSource(this));
						} else if ('typeProduit' in this && this.typeProduit == TYPE_PRODUIT.serieBdm) {
							ctx.$target.append(ctx.renderSerieBdm(this));
						} else if ('typeProduit' in this && this.typeProduit == TYPE_PRODUIT.familleBdm) {
							ctx.$target.append(ctx.renderFamilleBdm(this));
						} else {
							console.log('Render doc, type inconnu ', this);
						}
					});
					Tools.ligneCliquable(uriManager);
				}
			};

			// prépare les paramètre géo de l'url : reflète la stratégie d'url, ainsi que le fonctionnement de la facette géo.
			this.makeGeoParam = function () {
				var geo = $.urlParam(URL_PARAMS.geographie);
				this.ddlAffichage = geo != null && geo.split(URL_PARAMS.separator).length == 1 && geo !== 'FRANCE-1';
				return geo == null ? null : URL_PARAMS.geographie + '=' + geo;
			};

			this.isFamilleDdl = function (familleId) {
				if (parseInt(familleId) == DocumentsView.idFamilleChiffreCleDDL || parseInt(familleId) == DocumentsView.idFamillePopulationsLegales || parseInt(familleId) == DocumentsView.idFamilleResumeStatistique || parseInt(familleId) == DocumentsView.idFamilleCD_DDL || parseInt(familleId) == DocumentsView.idFamilleCDI_DDL || parseInt(familleId) == DocumentsView.idFamilleDossierComplet) {
					return true;
				}
				return false;
			};

			this.isProduitLienExterne = function (familleId, familleidParent) {
				if (parseInt(familleidParent) == DocumentsView.idFamilleGroupeBdm || parseInt(familleidParent) == DocumentsView.idFamilleEpsilon || parseInt(familleidParent) == DocumentsView.idFamilleActualitesSSM || parseInt(familleId) == DocumentsView.idFamilleGroupeBdm || parseInt(familleId) == DocumentsView.idFamilleAlisse || parseInt(familleId) == DocumentsView.idFamilleEpsilon || parseInt(familleId) == DocumentsView.idFamilleCartesInteractives || parseInt(familleId) == DocumentsView.idFamilleTbef || parseInt(familleidParent) == DocumentsView.idFamillePublicationsExternesSSM || parseInt(familleidParent) == DocumentsView.idFamillePublicationsExternesHorsSSM) {
					return true;
				}
				return false;
			};

			this.isAfficherIconeLienExterne = function (familleId, familleidParent) {
				if (parseInt(familleidParent) == DocumentsView.idFamilleEpsilon || parseInt(familleId) == DocumentsView.idFamilleEpsilon || parseInt(familleidParent) == DocumentsView.idFamilleActualitesSSM || parseInt(familleId) == DocumentsView.idFamilleCartesInteractives || parseInt(familleidParent) == DocumentsView.idFamillePublicationsExternesSSM || parseInt(familleidParent) == DocumentsView.idFamillePublicationsExternesHorsSSM) {
					return true;
				}
				return false;
			};

			this.isFamilleInformation = function (familleId) {
				if (parseInt(familleId) == DocumentsView.idFamilleDMQ || parseInt(familleId) == DocumentsView.idFamilleServices || parseInt(familleId) == DocumentsView.idFamilleLettreInformation || parseInt(familleId) == DocumentsView.idFamilleLettreInformationRegionale || parseInt(familleId) == DocumentsView.idFamilleInseeStatPublique) {
					return true;
				}
				return false;
			};

			this.isFamilleCommuniquesDePresse = function (familleId) {
				if (parseInt(familleId) == DocumentsView.idFamilleCommuniquesDePresse) {
					return true;
				}
				return false;
			};

			this.hasNumeroDansEtiquette = function (familleId, familleidParent) {
				if ($.inArray(parseInt(familleidParent), DocumentsView.idsFamillePourNumeroEtiquettes) != -1 || $.inArray(parseInt(familleId), DocumentsView.idsFamillePourNumeroEtiquettes) != -1) {
					return true;
				}
				return false;
			};

			this.makeParams = function (geo, idSommaire, query) {
				var params = '';
				if (!String.isBlank(geo)) params += geo;
				if (!String.isBlank(idSommaire)) params += (String.isBlank(params) ? '' : '&') + URL_PARAMS.sommaire + '=' + idSommaire;
				if (!String.isBlank(query)) params += (String.isBlank(params) ? '' : '&') + query;
				return String.isBlank(params) ? '' : '?' + params;
			};

			var hrefDdl = function hrefDdl(ddlAffichage, href, produit, geo, query) {
				if (ddlAffichage) {
					href = contextPath + '/' + langue + WEB4G_URL.statistiques + '/' + produit.id;
				} else {
					href = contextPath + '/' + langue + WEB4G_URL.ddlSelection + '/' + produit.id;
				}
				var params = _this.makeParams(geo, produit.idProduitSommaireParent, query);
				href += params;
				return href;
			};

			/*  */
			this.renderProduit = function (produit, query) {
				var geo = this.makeGeoParam(),
				    ddl = this.isFamilleDdl(produit.famille.id),
				    communiquesDePresse = this.isFamilleCommuniquesDePresse(produit.famille.idParent),
				    information = this.isFamilleInformation(produit.famille.id) || this.isFamilleInformation(produit.famille.idParent),
				    ctx = this,
				    href = contextPath + '/' + langue + WEB4G_URL.statistiques + '/' + produit.id;

				produit.famille = produit.famille == null ? DocumentsView.FamilleNull : produit.famille;

				var idSommaire;
				if (parseInt(produit.famille.idParent) == DocumentsView.idFamilleEntreeSommaire && produit.idProduitSommaireParent != null) {
					idSommaire = produit.idProduitSommaireParent;
				}

				if (idSommaire) {
					if (ddl) {
						href = hrefDdl(ctx.ddlAffichage, href, produit, geo, query);
					} else {
						var params = this.makeParams(null, produit.idProduitSommaireParent, query);
						href += params;
					}
				} else if (ddl) {
					href = hrefDdl(ctx.ddlAffichage, href, produit, geo, query);
				} else if (information || communiquesDePresse) {
					href = contextPath + '/' + langue + WEB4G_URL.information + '/' + produit.id;
				} else if (this.isProduitLienExterne(produit.famille.id, produit.famille.idParent)) {
					href = produit.urlBdm;
					if (produit.famille.id === DocumentsView.idFamilleAlisse) {
						href = contextPath + '/' + langue + '/' + href;
					}
					if (produit.famille.id === DocumentsView.idFamilleCartesInteractives) {
						href = $('#lien-geoclip').text() + produit.urlBdm;
						if (geo === null) {
							href += '&view=map2';
						} else if (geo.includes('DEP-') && (produit.libelleGeographique.toLowerCase().includes('départements') || produit.libelleGeographique.toLowerCase().includes('departments'))) {
							//var dep = geo.match(/DEP\-(.*?)(\+|$)/g)[0].replace(/(DEP\-|\+)/g, '');
							//href += '&view=map2&selcodgeo=' + dep;
							href += '&view=map2';
						} else if (geo.includes('REG-')) {
							//var reg = geo.match(/REG\-(.*?)(\+|$)/g)[0].replace(/(REG\-|\+)/g, '');
							//href += '&view=map3&selcodgeo=' + reg;
							href += '&view=map3';
						} else if (geo.includes('ARR-')) {
							var arr = geo.match(/ARR\-(.*?)(\+|$)/g)[0].replace(/(ARR\-|\+)/g, '');
							href += '&view=map5&selcodgeo=' + arr;
						} else if (geo.includes('EPCI-')) {
							var epci = geo.match(/EPCI\-(.*?)(\+|$)/g)[0].replace(/(EPCI\-|\+)/g, '');
							href += '&view=map4&selcodgeo=' + epci;
						} else if (geo.includes('COM-')) {
							var com = geo.match(/COM\-(.*?)(\+|$)/g)[0].replace(/(COM\-|\+)/g, '');
							href += '&view=map1&selcodgeo=' + com;
						} else if (geo.includes('TOUTES_COMMUNE-1')) {
							href += '&view=map1';
						} else if (geo.includes('COMPRD-1')) {
							if (produit.libelleGeographique.toLowerCase().includes('départements') || produit.libelleGeographique.toLowerCase().includes('departments')) {
								href += '&view=map2';
							} else {
								href += '&view=map3';
							}
						}
					}
				}

				var numero = null;
				if (this.hasNumeroDansEtiquette(produit.famille.id, produit.famille.idParent)) {
					numero = produit.numero;
				}
				var $container = DocumentViewDom.getDom({
					id: produit.id,
					libelleGeographique: produit.libelleGeographique,
					titre: produit.titre,
					sousTitre: produit.sousTitre,
					url: href,
					dateDiffusion: produit.dateDiffusion,
					typeDocument: produit.famille.categorie.libelleFr,
					typeDocumentId: produit.famille.categorie.id,
					numero: numero,
					libelleTypeDocumentFr: !String.isBlank(produit.collection) ? produit.collection : produit.famille.categorie.libelleFr,
					renderType: this.isAfficherIconeLienExterne(produit.famille.id, produit.famille.idParent) ? 'lien-externe' : ''
				});

				return $container;
			};

			/*  */
			this.renderDocument = function (data) {
				return DocumentViewDom.getDom(data);
			};

			this.renderNomenclature = function (doc, nomenclature) {
				var filAriane = DocumentViewDom.getFilNomenclature(doc, NOMENCLATURE_LIBELLE[doc.typeProduit]);
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: doc.libelle,
					sousTitre: filAriane,
					url: contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + nomenclature + doc.idRmes,
					dateDiffusion: doc.dateModification,
					typeDocument: 'nomenclatures',
					libelleTypeDocumentFr: 'Nomenclatures',
					libelleTypeDocumentEn: 'Classifications'
				});
			};

			/* */
			this.renderDefinition = function (doc) {
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: doc.titre,
					dateDiffusion: doc.dateModification,
					url: contextPath + '/' + langue + WEB4G_URL.definition + doc.uri,
					typeDocument: doc.typeProduit,
					libelleTypeDocumentFr: 'Définitions',
					libelleTypeDocumentEn: 'Definitions'
				});
			};

			/* */
			this.renderSource = function (doc) {
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: doc.titreListe,
					dateDiffusion: doc.dateDernierMaj,
					url: contextPath + '/' + langue + WEB4G_URL.source + doc.id,
					typeDocument: doc.typeProduit,
					libelleTypeDocumentFr: 'Sources',
					libelleTypeDocumentEn: 'Sources'
				});
			};

			/* */
			this.renderFicheCOG = function (doc) {
				var filAriane = DocumentViewDom.getFilNomenclature(doc, NOMENCLATURE_LIBELLE[doc.typeProduit]);
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: 'Géographie administrative et d\'étude' + ' &ndash; ' + doc.touteZone.niveau.libelle + ' : ' + doc.touteZone.libelle + ' (' + doc.touteZone.code + ')',
					sousTitre: typeof doc.libelleActive != 'undefined' ? doc.libelleActive : 'état inconnu',
					url: contextPath + '/' + langue + doc.pathname,
					typeDocument: 'nomenclatures',
					libelleTypeDocumentFr: 'Géographie',
					libelleTypeDocumentEn: 'Geography',
					dateDiffusion: doc.dateDiffusion
				});
			};

			/* */
			this.getCodeUrl = function (niveau) {
				for (var k in ZoneProvider.getInstance().local) {
					var touteZone = ZoneProvider.getInstance().local[k];
					if (niveau.endsWith(touteZone.niveau.code)) {
						return '&' + URL_PARAMS.geographieCodeFacet + '=' + touteZone.code;
					}
				}
				return 'undefined';
			};

			/* */
			this.renderCalendrier = function (doc) {
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: langue == 'fr' ? doc.famille.facetteConjoncture ? doc.famille.facetteConjoncture.libelleFr : "" + ' &ndash; ' + doc.periodeReference : doc.famille.facetteConjoncture.libelleEn + ' &ndash; ' + doc.periodeReferenceEn,
					dateDiffusion: doc.embargo,
					url: '#',
					typeDocument: 'Publications',
					typeDocumentId: TYPE_PRODUIT.calendrier,
					libelleTypeDocumentFr: 'Publications',
					libelleTypeDocumentEn: 'Publications',
					chevron: false,
					renderType: 'calendrier'
				});
			};

			this.renderSerieBdm = function (doc) {
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: doc.titre,
					sousTitre: (doc.sousTitre ? doc.sousTitre + ' &ndash; ' : '') + (langue.toUpperCase() == 'EN' ? 'Identifier ' : 'Identifiant ') + doc.idBank,
					dateDiffusion: doc.dateDiffusion,
					url: contextPath + '/' + langue + '/statistiques/serie/' + doc.idBank,
					typeDocument: 'Publications',
					typeDocumentId: doc.familleBdm.categorie.id,
					libelleTypeDocumentFr: doc.familleBdm.categorie.libelleFr,
					libelleTypeDocumentEn: doc.familleBdm.categorie.libelleFr,
					chevron: true
				});
			};

			this.renderFamilleBdm = function (doc) {
				return DocumentViewDom.getDom({
					id: doc.id,
					titre: doc.titre,
					sousTitre: doc.sousTitre,
					dateDiffusion: doc.dateDiffusion,
					url: contextPath + '/' + langue + '/statistiques/series/' + doc.id,
					typeDocument: 'Publications',
					typeDocumentId: doc.categorie.id,
					libelleTypeDocumentFr: doc.categorie.libelleFr,
					libelleTypeDocumentEn: doc.categorie.libelleFr,
					chevron: true
				});
			};

			/* */
			this.clean = function () {
				this.$target.empty();
			};
		};
		DocumentsView.idFamilleDMQ = 1256;
		DocumentsView.idFamilleServices = 1000;
		DocumentsView.idFamilleInseeStatPublique = 1001;
		DocumentsView.idFamilleLettreInformation = 1262;
		DocumentsView.idFamilleLettreInformationRegionale = 1282;
		DocumentsView.idFamilleChiffreCleDDL = 37;
		DocumentsView.idFamillePopulationsLegales = 38;
		DocumentsView.idFamilleCD_DDL = 405;
		DocumentsView.idFamilleCDI_DDL = 501;
		DocumentsView.idFamilleDossierComplet = 1012;
		DocumentsView.idFamilleGroupeBdm = 900;
		DocumentsView.idFamilleAlisse = 1006;
		DocumentsView.idFamilleEpsilon = 1007;
		DocumentsView.idFamilleActualitesSSM = 1311;
		DocumentsView.idFamilleCartesInteractives = 1371;
		DocumentsView.idFamilleTbef = 1383;
		DocumentsView.idFamillePublicationsExternesSSM = 1255;
		DocumentsView.idFamillePublicationsExternesHorsSSM = 1376;
		DocumentsView.idFamilleEntreeSommaire = 10;
		DocumentsView.idFamilleResumeStatistique = 406;
		DocumentsView.idFamilleCommuniquesDePresse = 1253;
		DocumentsView.idsFamillePourNumeroEtiquettes = [1, 5, 50, 51, 55, 57, 58, 64, 230, 270, 300];
		DocumentsView.FamilleNull = { id: 0, libelle: 'famille inconnue', categorie: { id: 0, libelleFr: 'categorie inconnue' } };

		DocumentsView.makeParams = function (geo, idSommaire, query) {
			var params = '';
			if (!String.isBlank(geo)) params += geo;
			if (!String.isBlank(idSommaire)) params += (String.isBlank(params) ? '' : '&') + URL_PARAMS.sommaire + '=' + idSommaire;
			if (!String.isBlank(query)) params += (String.isBlank(params) ? '' : '&') + query;
			return String.isBlank(params) ? '' : '?' + params;
		};

		/**
   * Spécial pour la page de recherche DDL.
   */
		var DocumentsDdlView = function DocumentsDdlView($target) {
			this.$target = $target;

			/* */
			this.render = function (documents) {
				var ctx = this;
				this.$target.empty();
				if (documents.length > 0) {
					$('#echos .message').hide();
					$(documents).each(function () {
						var href = contextPath + '/' + langue + WEB4G_URL.statistiques + '/' + this.id;
						var paramGeo = URL_PARAMS.geographie + '=' + this.niveauGeo + URL_PARAMS.separatorGeoraphie;
						paramGeo += this.code ? this.code.replace(new RegExp('^' + this.niveauGeo), '') : '1';
						var params = DocumentsView.makeParams(paramGeo, this.idSommaire, '');
						href += params;

						var $container = DocumentViewDom.getDom({
							id: this.id + '_' + this.niveauGeo + '_' + this.code,
							libelleGeographique: this.libelleZone,
							titre: this.titre,
							sousTitre: this.sousTitre,
							url: href,
							dateDiffusion: this.dateDiffusion,
							typeDocument: this.famille.categorie.libelleFr,
							typeDocumentId: this.famille.categorie.id,
							libelleTypeDocumentFr: this.famille.categorie.libelleFr
						});
						ctx.$target.append($container);
					});
					Tools.ligneCliquable();
				}
			};
		};

		var HistoriqueCommuneView = function ($) {

			return function ($target) {
				var ctx = this;
				this.$target = $target;

				/* */
				this.render = function (solrData) {
					this.$target.empty();
					$(solrData.documents).each(function () {
						var $container = DocumentViewDom.getDom({
							id: this.id,
							titre: this.libelle,
							sousTitre: 'Commune : ' + this.libelleCommune + ' &ndash; ' + this.codeCommune,
							url: '#',
							libelleDateDiffusion: 'Date d\'effet : ',
							dateDiffusion: this.effet,
							libelleTypeDocumentFr: '',
							chevron: false
						});
						ctx.$target.append($container);
					});
				};
			};
		}(jQuery);
		var Loupe = function Loupe(params) {
			var ctx = this;

			params = $.extend({ $lienLoupe: null, $searchbar: null, $searchbarConteneur: null, $niveaux: null }, params);

			this.$lienLoupe = params.$lienLoupe;
			this.$searchbar = params.$searchbar;
			this.$searchbarConteneur = params.$searchbarConteneur;
			this.$niveaux = params.$niveaux || null;

			this.$lienLoupe.click(function (e) {
				if ($(this).hasClass("loupe-clicked")) {
					ctx.fermerRecherche();
				} else {
					$(this).addClass("loupe-clicked");
					ctx.$searchbarConteneur.addClass("recherche-clicked");
					ctx.$searchbarConteneur.removeClass("recherche");
					ctx.$searchbar.children("input").focus();
					if (ctx.$niveaux) {
						ctx.$niveaux.selectric({ disableOnMobile: false, nativeOnMobile: false });
					}
				}
				e.preventDefault();
			});

			this.$searchbar.on("rechercher", function (e) {
				ctx.fermerRecherche();
			});

			this.isOpen = function () {
				return ctx.$lienLoupe.hasClass("loupe-clicked");
			};

			this.fermerRecherche = function () {
				ctx.$lienLoupe.removeClass("loupe-clicked");
				ctx.$searchbarConteneur.addClass("recherche");
				ctx.$searchbarConteneur.removeClass("recherche-clicked");
			};
		};

		/**
   * 
   */
		var NavigateurView = function NavigateurView(params) {
			var ctx = this;
			Tools.makeObservable(this);
			this.params = $.extend({ $target: null, sortOptions: [] }, params);

			this.$sortBy = $("<select>", { "class": "combo-box", "title": "Choix du tri" });
			this.sortActions = {};
			this.params.sortOptions.forEach(function (e) {
				if ('value' in e && 'libelle' in e && 'action' in e) {
					ctx.$sortBy.append($("<option data-i18n='" + e.i18n + "'>").val(e.value).text(e.libelle));
					ctx.sortActions[e.value] = e.action;
				}
			});
			this.$sortBy.i18n();

			this.$target = this.params.$target;
			this.$showPage = $("<select>", { "class": "combo-box", "title": "Choix de la page à consulter" });
			this.$showBy = $("<select>", { "class": "combo-box", "title": "Choix du nombre d’échos par page" }).append($("<option>").val(10).html("<span data-i18n='echos.infos.afficher-par'>Afficher par</span> 10")).append($("<option>").val(20).html("<span data-i18n='echos.infos.afficher-par'>Afficher par</span> 20")).append($("<option>").val(50).html("<span data-i18n='echos.infos.afficher-par'>Afficher par</span> 50")).append($("<option>").val(100).html("<span data-i18n='echos.infos.afficher-par'>Afficher par</span> 100")).i18n();
			this.$echoTri = $("<span>", { "class": "echos-tri" }).append(this.$sortBy);
			var $echoPagination = $("<span>", { "class": "echos-pagination" }).append(this.$showBy);
			var $echoPage = $("<span>", { "class": "echos-pagination" }).append(this.$showPage);

			this.$target.append(this.$echoTri).append($echoPagination).append($echoPage);

			this.$display = $(".horizontal-select input");
			this.$showBy.combobox();
			this.$showPage.combobox();
			this.$sortBy.combobox();

			/* */
			this.getController = function () {
				return SolrController.getInstance();
			};

			// Events.
			this.$showBy.change(function (e) {
				var rows = parseInt($(this).val());
				ctx.getController().changeRows(rows);
				e.stopImmediatePropagation();
				e.preventDefault();
			});

			this.$showPage.change(function (e) {
				var start = parseInt($(this).val());
				ctx.getController().changePage(start);
				e.stopImmediatePropagation();
				e.preventDefault();
			});

			this.$sortBy.change(function (e) {
				var value = $(this).val();
				if (value in ctx.sortActions) {
					if (typeof ctx.sortActions[value] == 'function') {
						ctx.sortActions[value].call(this, value);
					}
				}
				e.stopImmediatePropagation();
				e.preventDefault();
			});

			// raffraichissement de l'affichage.
			this.render = function (start, rows, numFounds, sortField) {
				this.calculPage(start, rows, numFounds);

				if (numFounds > 0) {
					this.$showBy.prop('disabled', false);
					this.$target.show();
				} else {
					this.$showBy.prop('disabled', true);
					this.$target.hide();
				}
				this.$showBy.val(rows);
				this.$showBy.selectric('refresh');
				this.$showBy.trigger('refreshed');
				var libelleShowBy = this.$showBy.find("option[value=" + rows + "]").text();
				this.$showBy.parent().parent().find(".label").text(libelleShowBy);
				this.$sortBy.val(sortField);
				this.$sortBy.selectric('refresh');
			};

			this.calculPage = function (start, rows, numFounds) {
				var pages = {};
				this.$showPage.empty();
				pages[1] = 0;

				if (numFounds > 0) {

					var last = parseInt(numFounds / rows) + (numFounds % rows == 0 ? 0 : 1);
					pages[last] = parseInt((last - 1) * rows);

					var cour = parseInt(start / rows) + 1;
					pages[cour] = rows * (cour - 1);

					var precprec = Math.max(1, cour - 2);
					pages[precprec] = rows * (precprec - 1);

					var prec = Math.max(1, cour - 1);
					pages[prec] = rows * (prec - 1);

					var suiv = Math.min(last, cour + 1);
					pages[suiv] = rows * (suiv - 1);

					var suivsuiv = Math.min(last, cour + 2);
					pages[suivsuiv] = rows * (suivsuiv - 1);

					for (var k in pages) {
						this.$showPage.append($("<option>").val(pages[k]).html(rows * (k - 1) + 1 + " <span data-i18n='echos.infos.a'>à</span> " + Math.min(rows * k, numFounds) + " / " + numFounds));
					}
					this.$showPage.i18n();
					this.$showPage.val(pages[cour]);
					this.$showPage.prop('disabled', false);
				} else {
					this.$showPage.append($("<option>").val(-1).text('0 à 0/0'));
					this.$showPage.prop('disabled', true);
				}
				this.$showPage.selectric('refresh');
				this.$showPage.trigger('refreshed');
			};

			/* */
			this.notify = function (msg, data) {
				if (data.request == SOLR_PARAMS.defaultQuery) {
					this.$echoTri.hide();
					this.$sortBy.val(SOLR_PARAMS.defaultSortField.field);
					ctx.getController().changeSortField(SOLR_PARAMS.defaultSortField.field);
				} else {
					if (!this.$echoTri.is(":visible")) {
						ctx.getController().changeSortField(SOLR_PARAMS.naturalOrder.field);
						this.$sortBy.val(SOLR_PARAMS.naturalOrder.field);
						this.$sortBy.selectric('refresh');
						this.$echoTri.show();
					}
				}
			};

			/* */
			this.reloadBookmark_ = function (param, values) {
				if (param == URL_PARAMS.q) {
					if (values[0] == SOLR_PARAMS.defaultQuery) {
						this.$sortBy.val(SOLR_PARAMS.defaultSortField.field);
						this.$sortBy.selectric('refresh');
						this.$echoTri.hide();
					} else {
						this.$sortBy.val(SOLR_PARAMS.naturalOrder.field);
						this.$sortBy.selectric('refresh');
						this.$echoTri.show();
					}
				}
			};
		};

		/**
   * 
   */
		var NumFoundView = function NumFoundView($target, $sticky) {
			this.$target = $target;
			this.$container = $("<h3>", { "class": "resultats" });
			this.$comptage = $("<span>", { "class": "resultats-nombre" });
			this.$resultats = $("<span>", { "class": "resultats-nombre" });
			this.$sticky = $sticky;

			this.$deRecherche = $("<span>", { "class": "resultats-texte", "data-i18n": "echos.infos.de-recherche" }).text(" de recherche").i18n();
			this.$pour = $("<span>", { "class": "resultats-texte", "data-i18n": "echos.infos.pour" }).text(" pour ").i18n();
			this.$terms = $("<span>", { "class": "resultats-requete" });

			this.$point = $("<span>", { "class": "resultats-texte" }).text(".");

			this.$container.append(this.$comptage);
			this.$container.append(this.$resultats);
			this.$container.append(this.$deRecherche);
			this.$container.append(this.$pour);
			this.$container.append(this.$terms);
			this.$container.append(this.$point);

			this.$target.append(this.$container);

			this.render = function (numFound, termsQuery) {
				var toInt = parseInt(numFound);
				if (toInt > 1) {
					this.$container.show();
					this.$resultats.attr("data-i18n", "echos.infos.resultats").text(" résultats").i18n();
					this.$pour.hide();
					this.$terms.hide();
					if (termsQuery.trim() == SOLR_PARAMS.defaultQuery) {
						this.$comptage.text(toInt);
					} else {
						this.$comptage.text(toInt);
						this.$terms.text(String.fromCharCode(171, 160) + termsQuery + String.fromCharCode(160, 187)).show();
						this.$pour.show();
					}
					this.$sticky.text(toInt + " résultats");
				} else if (toInt == 1) {
					this.$container.show();
					this.$resultats.attr("data-i18n", "echos.infos.resultat").text(" résultat").i18n();
					this.$pour.hide();
					this.$terms.hide();
					if (termsQuery.trim() == SOLR_PARAMS.defaultQuery) {
						this.$comptage.text(toInt);
					} else {
						this.$comptage.text(toInt);
						this.$terms.text(String.fromCharCode(171, 160) + termsQuery + String.fromCharCode(160, 187)).show();
						this.$pour.show();
					}
					this.$sticky.text("1 seul résultat");
				} else {
					this.$container.hide();
					this.$sticky.text("Aucun résultat");
				}
			};
		};

		var FilArianeView = function () {

			var rubriques = {},
			    $target;
			var $filInitial = $('<div>', { 'class': 'container' }).append($('<ul>', { 'class': 'fil-ariane' }).append($('<li>').append($('<a>', { href: contextPath + '/' + langue + '/accueil' }).text('Accueil'))).append($('<li>').append($('<a>', { href: contextPath + '/' + langue + '/statistiques' }).text('Statistiques et études'))).append($('<li>').text('Résultats de la recherche')));
			var renderRubrique = function renderRubrique(rubrique) {
				var $fil = null;
				if (rubrique.code in rubriques) {
					$fil = rubriques[rubrique.code];
				} else {
					$fil = $('<div>', { 'class': 'container' });
					$ul = $('<ul>', { 'class': 'fil-ariane' });
					$(rubrique.filAriane).each(function () {
						$ul.append($('<li>').append($('<a>', { href: contextPath + '/' + langue + this.pathname }).text(this.libelleFr)));
					});
					$ul.append($('<li>').text('Résultats de la recherche'));
					$fil.append($ul);

					rubriques[rubrique.code] = $fil;
				}

				$target.append($fil);
			};

			return function ($cible) {
				$target = $cible;

				/* */
				this.render = function (isMoteur, rubrique) {
					$target.empty();
					if (isMoteur) {
						renderRubrique(rubrique);
					} else {
						$target.append($filInitial);
					}
				};
			};
		}();
		/* NB : Ce code semble ne jamais être appelé (pas sûr à 100%...). Se référer plutôt à nomenclature-arbre.js.*/
		var NomenclatureTree = function ($) {
			var solrParams = {
				q: '*:*',
				start: 0,
				rows: 100,
				filters: [],
				sortFields: [{ field: 'nomenclature_code', order: 'asc' }]
			};

			return function () {
				var ctx = this;
				this.pathname = contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + $('#nomenclature').text();
				this.navigationHistorique = new NavigationHistorique();
				var nbrHistoriqueEnvoye = 0;

				ctx.navigationHistorique.ajouterEvent(function () {
					$('#wait').attr('class', 'wait-on');
					nbrHistoriqueEnvoye++;
					var numero = nbrHistoriqueEnvoye;
					var code = ctx.navigationHistorique.getSegmentUrl(-1);
					var indent = $('li.indent');
					while (indent.length > 0) {
						ctx.closeNoeud(indent.data());
						indent = $('li.indent');
					}
					var niveau = ctx.navigationHistorique.getSegmentUrl(-2);
					$.getJSON(ctx.urlFiche + '/' + niveau + '/' + code + '/codes-parents').done(function (fiches) {
						if (numero == nbrHistoriqueEnvoye) {
							fiches.forEach(function (fiche) {
								$('#' + fiche.split('.').join('\\.')).trigger('click', [true, true]);
							});
							$('#' + code.split('.').join('\\.')).trigger('click', [true, false]);
							$('#wait').attr('class', 'wait-off');
						}
					}).fail(function () {
						console.log(arguments);
						$('#wait').attr('class', 'wait-off');
					});
				});

				/* */
				this.start = function () {
					this.$racine = $('<ul>', { class: 'arbre-racine', role: 'tree', 'aria-labelledby': this.titre });
					this.$treeTarget.append(this.$racine);
					this.consulterNomenclature(this.$racine, null, 0, null, this.callback);
					Responsive.ResponsiveManager.addObserver(this);
				};

				/* */
				this.consulterNomenclature = function ($ul, $liParent, index, codeParent, callback) {
					solrParams.filters = [{ field: 'typeProduit', value: this.nomenclatureName }, { field: 'nomenclature_type', value: this.nomenclatureNiveau[index] }];

					if (codeParent != null) {
						solrParams.filters.push({ field: 'nomenclature_parentsCode', value: codeParent });
					}

					$('#wait').attr('class', 'wait-on');
					$.ajax({
						url: this.urlNomenclature,
						type: 'POST',
						data: JSON.stringify(solrParams),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: function success(data) {
							callback.call(ctx, data, $ul, $liParent, index, codeParent);
						},
						error: function error(data) {
							ctx.$wait.attr('class', 'wait-off');
							console.log('error');
						}
					});
				};

				/* */
				this.callback = function (data, $ul, $liParent, index, codeParent) {
					this.$wait.attr('class', 'wait-off');
					this.creerNoeuds($ul, $liParent, data.documents, index, this.callback);

					if (this.first) {
						this.first = false;
						this.reload();
					}
				};

				/* */
				this.creerNoeuds = function ($ul, $liParent, documents, index, callback) {
					var freres = [],
					    $prevA = null;

					$(documents).each(function () {
						var $li = $('<li>', { class: 'arbre-feuille', role: 'treeitem', 'aria-expanded': false, 'aria-hidden': false }),
						    $a = $('<a>', { class: 'lien', href: '#', tabindex: '-1' }).append($('<span>', { class: 'code' }).text(this.code)).append($('<span>', { class: 'libelle' }).text(this.libelle)),
						    $enfants = $('<ul>', { role: 'group' });
						$li.append($a).append($enfants);
						$ul.append($li);

						freres.push($li.get()[0]);

						var data = {
							$rootContainer: ctx.$treeTarget,
							$a: $a,
							visible: false,
							$enfants: $enfants,
							loaded: false,
							$container: $li,
							$parent: $liParent,
							freres: freres,
							index: index,
							niveau: this.niveau,
							code: this.code
						};
						$.data($li.get()[0], data);

						if ($prevA != null) {
							$prevA.data().$next = $a;
						} else {
							$prevA = $liParent == null ? null : $liParent.data().$a;
						}
						$.data($a.get()[0], { $liParent: $liParent, $enfants: $enfants, $next: null, $prev: $prevA });
						$prevA = $a;

						$a.addClass('collapsed');

						$li.attr('id', this.code);
						$li.click(function (e, backNavigateur, sansChargerFiche) {
							var $data = $(this).data();
							$data.$a.focus();
							if (sansChargerFiche !== true) {
								ctx.afficherFiche($data.niveau, $data.code);
							}
							if (ctx.$aActif != null) {
								ctx.$aActif.attr('tabindex', '-1');
								ctx.$aActif.toggleClass('fiche-active');
							}
							ctx.$aActif = $data.$a;
							$data.$a.toggleClass('fiche-active');
							$data.$a.attr('tabindex', '0');
							if ($data.index < ctx.nomenclatureNiveau.length - 1) {
								if ($data.visible) {
									ctx.closeNoeud($data);
								} else {
									ctx.openNoeud($data);
								}

								if (!$data.loaded) {
									$data.loaded = true;
									ctx.consulterNomenclature($enfants, $li, index + 1, $data.code, callback);
								}
							}
							if (backNavigateur !== true) {
								ctx.navigationHistorique.ajouterHistorique(ctx.pathname + '/' + $data.niveau + '/' + $data.code);
							}
							e.preventDefault();
							e.stopImmediatePropagation();
						});
						// navigation au clavier.
						$a.keydown(function (e) {
							var $data = $(this).data();
							if (e.which === KeyCode.arrowDown) {
								if ($(this).hasClass('expanded')) {
									$data.$enfants.children('li').first().data().$a.focus();
								} else {
									if ($data.$next != null) $data.$next.focus();
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.arrowUp) {
								if ($(this).hasClass('expanded')) {} else {
									if ($data.$prev != null) {
										$data.$prev.focus();
									}
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.enter) {
								$(this).click();
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.arrowLeft) {
								if ($(this).hasClass('expanded')) {
									$(this).click();
								} else {
									if ($data.$liParent != null) {
										$data.$liParent.data().$a.focus();
									}
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.arrowRight) {
								if ($(this).hasClass('expanded')) {
									$data.$enfants.children('li').first().data().$a.focus();
								} else {
									$(this).click();
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							}
						});
					});
				};

				/* */
				this.openNoeud = function ($data) {
					$data.visible = true;
					$data.$enfants.show();
					if ($data.$parent != null) {
						var $dataParent = $data.$parent.data();
						$data.$parent.toggleClass('indent');
						$dataParent.$a.hide();
						$dataParent.$container.attr('aria-hidden', true).attr('aria-expanded', false);
					} else {
						$data.$rootContainer.toggleClass('indent');
					}
					$($data.freres).hide().attr('aria-hidden', true).attr('aria-expanded', false);
					$data.$container.show().attr('aria-hidden', false).attr('aria-expanded', true);
					$data.$a.toggleClass('collapsed');
					$data.$a.toggleClass('expanded');
					$data.$container.toggleClass('indent');
				};

				/* */
				this.closeNoeud = function ($data) {
					$data.visible = false;
					$data.$enfants.hide();

					if ($data.$parent != null) {
						var $dataParent = $data.$parent.data();
						$dataParent.$container.attr('aria-hidden', false);
						$dataParent.$container.attr('aria-expanded', true);
						$data.$parent.toggleClass('indent');
						$dataParent.$a.show();
						$dataParent.$a.css('display', '');
					} else {
						$data.$rootContainer.toggleClass('indent');
					}
					$($data.freres).show().attr('aria-hidden', false);
					$data.$enfants.children('li').attr('aria-hidden', true);
					$data.$container.attr('aria-expanded', false);
					$data.$a.toggleClass('collapsed');
					$data.$a.toggleClass('expanded');
					$data.$container.toggleClass('indent');
				};

				/* */
				this.afficherFiche = function (niveau, code) {
					if (code in this.fiches) {
						this.$ficheTarget.empty();
						this.$ficheTarget.html(this.fiches[code].main);
					} else {
						$.getJSON(this.urlFiche + '/' + niveau + '/' + code).done(function (fiche) {
							ctx.fiches[code] = fiche;
							ctx.$ficheTarget.empty();
							ctx.$ficheTarget.html(fiche.main);
						}).fail(function () {
							console.log(arguments);
						});
					}
				};

				/* */
				this.reload = function () {
					var codes = [];
					this.$racine.hide();
					$('#fiche-parents').find('option').each(function () {
						codes.push($(this).text());
					});

					this.reloadStep(codes, this.$racine, 0);
				};

				/* */
				this.reloadStep = function (codes, $ul, index) {
					if (codes.length > 1) {
						var code = codes.splice(0, 1)[0],
						    $li = $ul.children('li');
						$li.each(function () {
							var $data = $(this).data(),
							    $liCourant = $(this);
							if ($data.code == code) {
								var callback = function callback(data, $ulNew, $liParent, index, codeParent) {
									ctx.$wait.attr('class', 'wait-off');
									ctx.creerNoeuds($ulNew, $liCourant, data.documents, index, ctx.callback);
									ctx.openNoeud($liCourant.data());
									$liCourant.data().loaded = true;
									ctx.reloadStep(codes, $ulNew, index);
								};
								ctx.consulterNomenclature($(this).children('ul'), index == 0 ? null : $ul.parent(), index + 1, code, callback);
							}
						});
					} else {
						ctx.$racine.show();
						$ul.children('li').each(function () {
							var $data = $(this).data();
							if ($data.code == codes[0]) {
								ctx.$aActif = $data.$a;
								$data.$a.toggleClass('fiche-active');
								$data.$a.attr('tabindex', '0');
								$data.$a.focus();
								ctx.$aActif = $data.$a;
							}
						});
					}
				};

				/* */
				this.responsive = function (format, width) {
					if (format == Responsive.desktop || format == Responsive.grandeTablette) {
						var menu = $('#afficher-arbre');
						if (menu.hasClass('hamburger-clicked')) {
							fermerMenuArbre(menu);
						}
						if (ctx.loupe.isOpen()) {
							ctx.loupe.fermerRecherche();
						}
					}
				};

				/* Configuration script */
				this.nomenclatureName = $('#nomenclature').text();
				this.titre = $('.titre-principal').first().text();
				var nomenclatureNiveau = [];
				$('#nomenclature-niveaux').find('option').each(function () {
					nomenclatureNiveau.push($(this).text());
				});
				this.nomenclatureNiveau = nomenclatureNiveau;
				this.urlNomenclature = encodeURI(contextPath + '/' + langue + '/metadonnees/' + this.nomenclatureName + '/consultation');
				this.urlFiche = encodeURI(contextPath + '/' + langue + '/metadonnees/ajax/' + this.nomenclatureName);
				this.$treeTarget = $('.arbre-rubriques').find('.container');
				this.$ficheTarget = $('.fiche').find('.container');
				/*  Attributs internes */
				this.first = true;
				this.$aActif;
				this.$aPrev;
				this.fiches = {};
				this.$wait = $('#wait').attr('class', 'wait-off');
				this.loupe = new Loupe({
					$lienLoupe: $('#afficher-recherche-nomenclature'),
					$searchbar: $('#searchbar-nomenclature'),
					$searchbarConteneur: $("#recherche-nomenclature"),
					$niveaux: $('#niveaux-nomeclature select')
				});

				var fermerMenuArbre = function fermerMenuArbre(menu) {
					menu.removeClass('hamburger-clicked');
					menu.parent().css('z-index', '');
					var arbre = $('.arbre-rubriques-clicked');
					arbre.addClass('arbre-rubriques');
					arbre.removeClass('arbre-rubriques-clicked');
					var fond = $('.fond-transparent-on');
					fond.addClass('fond-transparent-off');
					fond.removeClass('fond-transparent-on');
				};

				$('#afficher-arbre').click(function (e) {
					if ($(this).hasClass('hamburger-clicked')) {
						fermerMenuArbre($(this));
					} else {
						$(this).addClass('hamburger-clicked');
						$(this).parent().css('z-index', '201');
						var arbre = $('.arbre-rubriques');
						arbre.addClass('arbre-rubriques-clicked');
						arbre.removeClass('arbre-rubriques');
						var fond = $('.fond-transparent-off');
						fond.addClass('fond-transparent-on');
						fond.removeClass('fond-transparent-off');
					}
					e.preventDefault();
				});
			};
		}(jQuery);

		var NomenclatureTree = function ($) {
			var solrParams = {
				q: '*:*',
				start: 0,
				rows: 100,
				filters: [],
				sortFields: [{ field: 'nomenclature_code', order: 'asc' }]
			};

			return function () {
				var ctx = this;
				this.pathname = contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + $('#nomenclature').text();
				this.navigationHistorique = new NavigationHistorique();
				this.timeNomenclature = parseInt($('#date-publication-long').text());
				var nbrHistoriqueEnvoye = 0;

				ctx.navigationHistorique.ajouterEvent(function () {
					//console.log('navigationHistorique : ajouterEvent');
					$('#wait').attr('class', 'wait-on');
					nbrHistoriqueEnvoye++;
					var numero = nbrHistoriqueEnvoye;
					var code = ctx.navigationHistorique.getSegmentUrl(-1);
					var indent = $('li.indent');
					while (indent.length > 0) {
						ctx.closeNoeud(indent.data());
						indent = $('li.indent');
					}
					var niveau = ctx.navigationHistorique.getSegmentUrl(-2);
					$.getJSON(ctx.urlFiche + '/' + niveau + '/' + code + '/codes-parents').done(function (fiches) {
						if (numero == nbrHistoriqueEnvoye) {
							fiches.forEach(function (fiche) {
								$('#' + fiche.split('.').join('\\.')).trigger('click', [true, true]);
							});
							$('#' + code.split('.').join('\\.')).trigger('click', [true, false]);
							$('#wait').attr('class', 'wait-off');
						}
					}).fail(function () {
						console.log("error", arguments);
						$('#wait').attr('class', 'wait-off');
					});
				});

				/* */
				this.start = function () {
					//console.log('start');
					this.$racine = $('<ul>', { class: 'arbre-racine', role: 'tree', 'aria-labelledby': this.titre });
					this.$treeTarget.append(this.$racine);
					this.consulterNomenclature(this.$racine, null, 0, null, this.callback);
					Responsive.ResponsiveManager.addObserver(this);
				};

				/* */
				this.consulterNomenclature = function ($ul, $liParent, index, codeParent, callback) {
					//console.log('consulterNomenclature');
					solrParams.filters = [{ field: 'typeProduit', value: this.nomenclatureName }, { field: 'nomenclature_type', value: this.nomenclatureNiveau[index] }];
					if (codeParent != null) {
						solrParams.filters.push({ field: 'nomenclature_parentsCode', value: codeParent });
					}

					$('#wait').attr('class', 'wait-on');
					$.ajax({
						url: this.urlNomenclature,
						type: 'POST',
						data: JSON.stringify(solrParams),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: function success(data) {
							callback.call(ctx, data, $ul, $liParent, index, codeParent);
							var timeFiche = Date.parse($('#date-publication-fiche-long').text());
							if (timeFiche != ctx.timeNomenclature) {
								$('#avertissement').show();
							}
						},
						error: function error(data) {
							ctx.$wait.attr('class', 'wait-off');
							console.log('error');
						}
					});
				};

				/* */
				this.callback = function (data, $ul, $liParent, index, codeParent) {
					//console.log('callback');
					this.$wait.attr('class', 'wait-off');
					this.creerNoeuds($ul, $liParent, data.documents, index, this.callback);

					if (this.first) {
						this.first = false;
						this.reload();
					}
					setGetParameter("champRecherche", this.valeurParamChampRecherche);
				};

				/* */
				this.creerNoeuds = function ($ul, $liParent, documents, index, callback) {
					//console.log('creerNoeuds');
					var freres = [],
					    $prevA = null;

					$(documents).each(function () {
						var $li = $('<li>', { class: 'arbre-feuille', role: 'treeitem', 'aria-expanded': false, 'aria-hidden': false }),
						    $a = $('<a>', { class: 'lien', href: '#', tabindex: '-1' }).append($('<span>', { class: 'code' }).text(this.code)).append($('<span>', { class: 'libelle' }).text(this.libelle)),
						    $enfants = $('<ul>', { role: 'group' });
						$li.append($a).append($enfants);
						$ul.append($li);

						freres.push($li.get()[0]);

						var data = {
							$rootContainer: ctx.$treeTarget,
							$a: $a,
							visible: false,
							$enfants: $enfants,
							loaded: false,
							$container: $li,
							$parent: $liParent,
							freres: freres,
							index: index,
							niveau: this.niveau,
							code: this.code
						};
						$.data($li.get()[0], data);

						if ($prevA != null) {
							$prevA.data().$next = $a;
						} else {
							$prevA = $liParent == null ? null : $liParent.data().$a;
						}
						$.data($a.get()[0], { $liParent: $liParent, $enfants: $enfants, $next: null, $prev: $prevA });
						$prevA = $a;

						$a.addClass('collapsed');

						$li.attr('id', this.code);
						$li.click(function (e, backNavigateur, sansChargerFiche) {
							var $data = $(this).data();
							$data.$a.focus();
							if (sansChargerFiche !== true) {
								ctx.afficherFiche($data.niveau, $data.code);
							}
							if (ctx.$aActif != null) {
								ctx.$aActif.attr('tabindex', '-1');
								ctx.$aActif.toggleClass('fiche-active');
							}
							ctx.$aActif = $data.$a;
							$data.$a.toggleClass('fiche-active');
							$data.$a.attr('tabindex', '0');
							if ($data.index < ctx.nomenclatureNiveau.length - 1) {
								if ($data.visible) {
									ctx.closeNoeud($data);
								} else {
									ctx.openNoeud($data);
								}

								if (!$data.loaded) {
									$data.loaded = true;
									ctx.consulterNomenclature($enfants, $li, index + 1, $data.code, callback);
								}
							}
							if (backNavigateur !== true) {
								ctx.navigationHistorique.ajouterHistorique(ctx.pathname + '/' + $data.niveau + '/' + $data.code);
							}
							setGetParameter("champRecherche", ctx.valeurParamChampRecherche);
							e.preventDefault();
							e.stopImmediatePropagation();
						});
						// navigation au clavier.
						$a.keydown(function (e) {
							var $data = $(this).data();
							if (e.which === KeyCode.arrowDown) {
								if ($(this).hasClass('expanded')) {
									$data.$enfants.children('li').first().data().$a.focus();
								} else {
									if ($data.$next != null) $data.$next.focus();
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.arrowUp) {
								if ($(this).hasClass('expanded')) {} else {
									if ($data.$prev != null) {
										$data.$prev.focus();
									}
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.enter) {
								$(this).click();
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.arrowLeft) {
								if ($(this).hasClass('expanded')) {
									$(this).click();
								} else {
									if ($data.$liParent != null) {
										$data.$liParent.data().$a.focus();
									}
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							} else if (e.which == KeyCode.arrowRight) {
								if ($(this).hasClass('expanded')) {
									$data.$enfants.children('li').first().data().$a.focus();
								} else {
									$(this).click();
								}
								e.preventDefault();
								e.stopImmediatePropagation();
							}
						});
					});
				};

				/* */
				this.gererAffichageChampRecherche = function (valeurParamChampRecherche) {
					//console.log('gererAffichageChampRecherche');
					if (valeurParamChampRecherche == 'true') {
						$('#recherche-nomenclature').removeClass('hidden');
					} else {
						$('#recherche-nomenclature').addClass('hidden');
					}
				};

				/* */
				this.openNoeud = function ($data) {
					//console.log('openNoeud');
					$data.visible = true;
					$data.$enfants.show();
					if ($data.$parent != null) {
						var $dataParent = $data.$parent.data();
						$data.$parent.toggleClass('indent');
						$dataParent.$a.hide();
						$dataParent.$container.attr('aria-hidden', true).attr('aria-expanded', false);
					} else {
						$data.$rootContainer.toggleClass('indent');
					}
					$($data.freres).hide().attr('aria-hidden', true).attr('aria-expanded', false);
					$data.$container.show().attr('aria-hidden', false).attr('aria-expanded', true);
					$data.$a.toggleClass('collapsed');
					$data.$a.toggleClass('expanded');
					$data.$container.toggleClass('indent');
				};

				/* */
				this.closeNoeud = function ($data) {
					//console.log('closeNoeud');
					$data.visible = false;
					$data.$enfants.hide();

					if ($data.$parent != null) {
						var $dataParent = $data.$parent.data();
						$dataParent.$container.attr('aria-hidden', false);
						$dataParent.$container.attr('aria-expanded', true);
						$data.$parent.toggleClass('indent');
						$dataParent.$a.show();
						$dataParent.$a.css('display', '');
					} else {
						$data.$rootContainer.toggleClass('indent');
					}
					$($data.freres).show().attr('aria-hidden', false);
					$data.$enfants.children('li').attr('aria-hidden', true);
					$data.$container.attr('aria-expanded', false);
					$data.$a.toggleClass('collapsed');
					$data.$a.toggleClass('expanded');
					$data.$container.toggleClass('indent');
				};

				/* */
				this.afficherFiche = function (niveau, code) {
					if (code in this.fiches) {
						//console.log('afficherFiche : code in this.fiches');
						this.$ficheTarget.empty();
						this.$ficheTarget.html(this.fiches[code].main);
						this.$ficheTarget.i18n();
						var title = $('<div/>').html(this.fiches[code].head.title + ' | Insee').text();
						var metaDescription = $('<div/>').html(this.fiches[code].head.metaDescription).text();
						document.title = title;
						$('meta[name=\'description\']').attr('content', metaDescription);
						setGetParameter("champRecherche", ctx.valeurParamChampRecherche);

						var timeFiche = Date.parse($('#date-publication-fiche-long').text());
						if (timeFiche != ctx.timeNomenclature) {
							$('#avertissement').show();
						}
					} else {
						//console.log('afficherFiche : code not in this.fiches');
						$.getJSON(this.urlFiche + '/' + niveau + '/' + code + '?champRecherche=' + ctx.valeurParamChampRecherche).done(function (fiche) {
							ctx.fiches[code] = fiche;
							ctx.$ficheTarget.empty();
							ctx.$ficheTarget.html(fiche.main);
							ctx.$ficheTarget.i18n();
							var title = $('<div/>').html(fiche.head.title + ' | Insee').text();
							document.title = title;
							var metaDescription = $('<div/>').html(fiche.head.metaDescription).text();
							$('meta[name=\'description\']').attr('content', metaDescription);
							setGetParameter("champRecherche", ctx.valeurParamChampRecherche);

							var timeFiche = Date.parse($('#date-publication-fiche-long').text());
							if (timeFiche != ctx.timeNomenclature) {
								$('#avertissement').show();
							}
						}).fail(function () {
							console.log(arguments);
						});
					}
				};

				/* */
				this.reload = function () {
					//console.log('reload');
					var codes = [];
					this.$racine.hide();
					$('#fiche-parents').find('option').each(function () {
						codes.push($(this).text());
					});

					this.reloadStep(codes, this.$racine, 0);
				};

				/* */
				this.reloadStep = function (codes, $ul, index) {
					//console.log('reloadStep');
					if (codes.length > 1) {
						var code = codes.splice(0, 1)[0],
						    $li = $ul.children('li');
						$li.each(function () {
							var $data = $(this).data(),
							    $liCourant = $(this);
							if ($data.code == code) {
								var callback = function callback(data, $ulNew, $liParent, index, codeParent) {
									ctx.$wait.attr('class', 'wait-off');
									ctx.creerNoeuds($ulNew, $liCourant, data.documents, index, ctx.callback);
									ctx.openNoeud($liCourant.data());
									$liCourant.data().loaded = true;
									ctx.reloadStep(codes, $ulNew, index);
								};
								ctx.consulterNomenclature($(this).children('ul'), index == 0 ? null : $ul.parent(), index + 1, code, callback);
							}
						});
					} else {
						ctx.$racine.show();
						$ul.children('li').each(function () {
							var $data = $(this).data();
							if ($data.code == codes[0]) {
								ctx.$aActif = $data.$a;
								$data.$a.toggleClass('fiche-active');
								$data.$a.attr('tabindex', '0');
								$data.$a.focus();
								ctx.$aActif = $data.$a;
							}
						});
					}
				};

				/* */
				this.responsive = function (format, width) {
					//console.log('responsive');
					if (format == Responsive.desktop || format == Responsive.grandeTablette) {
						var menu = $('#afficher-arbre');
						if (menu.hasClass('hamburger-clicked')) {
							fermerMenuArbre(menu);
						}
						if (ctx.loupe.isOpen()) {
							ctx.loupe.fermerRecherche();
						}
					}
				};

				/* Configuration script */
				this.nomenclatureName = $('#nomenclature').text();
				this.titre = $('.titre-principal').first().text();
				var nomenclatureNiveau = [];
				$('#nomenclature-niveaux').find('option').each(function () {
					nomenclatureNiveau.push($(this).text());
				});
				this.nomenclatureNiveau = nomenclatureNiveau;
				this.urlNomenclature = encodeURI(contextPath + '/' + langue + '/metadonnees/' + this.nomenclatureName + '/consultation');
				this.urlFiche = encodeURI(contextPath + '/' + langue + '/metadonnees/ajax/' + this.nomenclatureName);
				this.$treeTarget = $('.arbre-rubriques').find('.container');
				this.$ficheTarget = $('.fiche').find('.container');
				this.valeurParamChampRecherche = new URL(window.location.href).searchParams.get('champRecherche');
				if (this.valeurParamChampRecherche != 'true') {
					this.valeurParamChampRecherche = 'false';
					setGetParameter('champRecherche', this.valeurParamChampRecherche);
				}
				this.gererAffichageChampRecherche(this.valeurParamChampRecherche);
				/*  Attributs internes */
				this.first = true;
				this.$aActif;
				this.$aPrev;
				this.fiches = {};
				this.$wait = $('#wait').attr('class', 'wait-off');
				this.loupe = new Loupe({
					$lienLoupe: $('#afficher-recherche-nomenclature'),
					$searchbar: $('#searchbar-nomenclature'),
					$searchbarConteneur: $("#recherche-nomenclature"),
					$niveaux: $('#niveaux-nomeclature select')
				});

				var fermerMenuArbre = function fermerMenuArbre(menu) {
					menu.removeClass('hamburger-clicked');
					menu.parent().css('z-index', '');
					var arbre = $('.arbre-rubriques-clicked');
					arbre.addClass('arbre-rubriques');
					arbre.removeClass('arbre-rubriques-clicked');
					var fond = $('.fond-transparent-on');
					fond.addClass('fond-transparent-off');
					fond.removeClass('fond-transparent-on');
				};

				$('#afficher-arbre').click(function (e) {
					if ($(this).hasClass('hamburger-clicked')) {
						fermerMenuArbre($(this));
					} else {
						$(this).addClass('hamburger-clicked');
						$(this).parent().css('z-index', '201');
						var arbre = $('.arbre-rubriques');
						arbre.addClass('arbre-rubriques-clicked');
						arbre.removeClass('arbre-rubriques');
						var fond = $('.fond-transparent-off');
						fond.addClass('fond-transparent-on');
						fond.removeClass('fond-transparent-off');
					}
					e.preventDefault();
				});
			};
		}(jQuery);

		/* */
		var NomenclatureFicheController = function ($) {
			return function () {
				var ctx = this;
				CommonControllerFactory.prepareControllerStandard(this);

				this.tree = new NomenclatureTree();
				this.nomenclatureName = $('#nomenclature').text();
				this.tree.start();

				this.uriManager = new UriManager(window.location.origin + window.location.pathname, document.title);
				var searchbarHeader = new SearchbarView($('#searchbar-header'), this.uriManager, 'moteur-recherche');
				searchbarHeader.addObserver(this);
				this.searchbar = new SearchbarView($('#searchbar-nomenclature'), this.uriManager, 'moteur-naf');
				this.uriManager.manage(URL_PARAMS.q, this.searchbar, URL_PARAMS.q);
				this.searchbar.addObserver(this);

				/* */
				this.notify = function (message, params) {
					//console.log('notify');
					if (message == 'rechercher' && params.id == 'moteur-recherche') {
						this.redirection();
					} else if (message == 'rechercher' && params.id == 'moteur-naf') {
						var params = this.uriManager.getBookmarkParam(URL_PARAMS.q);
						window.location = contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + this.nomenclatureName + '?' + params;
					}
				};

				/* */
				this.reloadBookmark_ = function (name, values) {};
			};
		}(jQuery);

		var RubriqueView = function ($) {
			return function ($target) {
				var ctx = this;
				this.$target = $target;
				this.urlRacine = contextPath + '/' + langue + '/metadonnees/';
				this.loupe = new Loupe({
					$lienLoupe: $('#afficher-recherche-nomenclature'),
					$searchbar: $('#searchbar-nomenclature'),
					$searchbarConteneur: $("#recherche-nomenclature"),
					$niveaux: $('#niveaux-nomeclature select')
				});

				this.responsive = function (format, width) {
					if (format == Responsive.desktop || format == Responsive.grandeTablette) {
						if (ctx.loupe.isOpen()) {
							ctx.loupe.fermerRecherche();
						}
					}
				};

				Responsive.ResponsiveManager.addObserver(this);

				/* */
				this.render = function (solrData, nomenclature, params) {
					params != undefined ? params : '';
					var nomNomenclature = $('#nomenclatureTitre').text();
					this.$target.empty();
					$(solrData.documents).each(function () {
						var filAriane = DocumentViewDom.getFilNomenclature(this, nomNomenclature),
						    $container = DocumentViewDom.getDom({
							id: this.id,
							titre: this.libelle,
							sousTitre: filAriane,
							url: ctx.urlRacine + nomenclature + this.idRmes + params,
							dateDiffusion: this.dateModification,
							typeDocument: 'nomenclatures',
							libelleTypeDocumentFr: 'Nomenclatures',
							libelleTypeDocumentEn: 'Classifications'
						});
						ctx.$target.append($container);
						Tools.ligneCliquable();
					});
				};
			};
		}(jQuery);

		/**
   * Fonctionnement générique de la searchbar.
   */
		var SearchbarView = function () {
			function SearchbarView($target, uriManager, id, searchOnBlank) {
				_classCallCheck(this, SearchbarView);

				this.$target = $target;
				this.$input = $target.find('input');
				this.$button = $target.find('.searchbar-icon');
				this.uriManager = uriManager;
				this.starTerms = $target.find('#start-terms').text();
				this.isNavigation = false;
				this.searchOnBlank = searchOnBlank;
				this.id = id;
				var context = this;

				if (typeof this.uriManager == 'undefined') {
					this.uriManager = new UriManager(window.location.origin + window.location.pathname, document.title);
				}

				if (this.starTerms != SOLR_PARAMS.defaultQuery) {
					var values = this.starTerms.split(' ');
					var s = '';
					for (var i = 0; i < values.length; i++) {
						s += values[i] + ' ';
					}
					this.$input.val(s.trim().replace(/\"/g, ''));
				}
				this.$input.click(function (e) {
					var datai18n = $(this).attr('data-i18n');
					if (datai18n.includes('barre-recherche-title') && !datai18n.includes('barre-recherche-title-explication')) {
						$(this).attr('data-i18n', datai18n.replace(/barre-recherche-title/g, 'barre-recherche-title-explication'));
						switch (langue) {
							default:
							case 'fr':
								$(this).attr('title', '« + » pour rendre obligatoire certains mots. Exemple : population +Lille\r\n« - » permet d’exclure certains mots. Exemple : population -active.');
								break;
							case 'en':
								$(this).attr('title', '« + » to make some words mandatory. Example: population +Lille\r\n« - » to exclude some words. Example: labour -force.');
								break;
						}
					}
				});
				this.$input.keydown(function (e) {
					if (e.which == KeyCode.enter) {
						context.submit();
					}
				});
				this.$button.click(function (e) {
					context.submit();
					e.preventDefault();
					e.stopImmediatePropagation();
				});
				this.$button.keydown(function (e) {
					if (e.which == KeyCode.enter) {
						context.submit();
						e.preventDefault();
						e.stopImmediatePropagation();
					}
				});
				Tools.makeObservable(this);
				Responsive.ResponsiveManager.addObserver(this);
			}

			_createClass(SearchbarView, [{
				key: 'submit',
				value: function submit() {
					var request = this.$input.val();
					if (!String.isBlank(request)) {
						this.uriManager.setValue(URL_PARAMS.q, request.trim().split(/\b\s+(?!$)/));
						this.onChange(request);
					} else if (this.searchOnBlank) {
						this.uriManager.setValue(URL_PARAMS.q, null);
						this.onChange(request);
					}
				}
			}, {
				key: 'onChange',
				value: function onChange(request) {
					var ctx = this;
					ctx.notifyAll('rechercher', { request: ctx.getRequest(), id: ctx.id });
					ctx.$target.trigger('rechercher');
				}
			}, {
				key: 'responsive',
				value: function responsive(format, largeur) {
					if (format == Responsive.smartphone) {
						// unbind click et replace
					} else {
							// unbind click et replace
						}

					var context = this;
					this.$button.click(function (e) {
						context.submit();
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					this.$button.keydown(function (e) {
						if (e.which == KeyCode.enter) {
							context.submit();
							e.preventDefault();
							e.stopImmediatePropagation();
						}
					});
				}
			}, {
				key: 'getRequest',
				value: function getRequest() {
					var request = this.$input.val();
					if (!String.isBlank(request.trim())) {
						return request.trim();
					} else {
						return SOLR_PARAMS.defaultQuery;
					}
				}
			}, {
				key: 'reloadBookmark_',
				value: function reloadBookmark_(name, values) {
					if (name == URL_PARAMS.q) {
						var q = '';
						for (var i = 0; i < values.length; i++) {
							q += values[i] + ' ';
						}
						this.$input.val(q);
					}
				}
			}]);

			return SearchbarView;
		}();

		function activerOnglet($li) {
			$li.addClass("courant");
			$li.attr("aria-selected", true).attr("tabindex", 0);
			$li.find("a").wrap("<strong>");
		}
		function desactiverOnglet($li) {
			$li.removeClass("courant");
			$li.attr("aria-selected", false).attr("tabindex", -1);
			$li.find("strong a").unwrap();
		}
		function activerElement($panneau) {
			$panneau.addClass('courant');
			if ($panneau.attr('id') == 'consulter-sommaire') {
				$panneau.addClass('clearfix');
			}
		}
		function desactiverElement($panneauADesactiver) {
			$panneauADesactiver.removeClass('courant');
			if ($panneauADesactiver.attr('id') == 'consulter-sommaire') {
				$panneauADesactiver.removeClass('clearfix');
			}
		}
		function activerDesactiverOnglet($li) {
			$li.siblings().andSelf().each(function (index, element) {
				desactiverOnglet($(element));
				desactiverElement($($(element).find('a').attr('href')));
			});
			activerOnglet($li);
			activerElement($($li.find('a').attr('href')));
		}
		function activerDesactiverSelect(idSelected) {
			var $selectSelectionne = $('.select-onglets select option[value=' + idSelected + ']');
			$selectSelectionne.siblings().each(function (index, element) {
				$("#" + $(element).val()).removeClass("courant");
			});
			$selectSelectionne.attr('selected', 'selected');
			$selectSelectionne.parent().val(idSelected);
		}

		function ouvrirOngletParent($element) {
			var $panneau = null;
			// Cas où l'élément est hidden
			if ($element.hasClass("hidden")) {
				$element.removeClass("hidden");
			}
			// Cas où l'élément est lui-même un panneau :  on l'affiche avant d'ouvrir ses parents
			if ($element.hasClass("panneau")) {
				clickOnglet($element.attr("id"), false);
			}
			// Cas où l'ancre est un panneau (ex:#documentation-sommaire) Cumulatif
			var $hrefElement = $($element.attr("href"));
			if ($hrefElement.hasClass("panneau")) {
				$panneau = $hrefElement;
			} else if ($element.hasClass("renvoi")) {
				$panneau = $hrefElement.parent().closest(".panneau");
			} else {
				$panneau = $element.parent().closest(".panneau");
			}
			if ($panneau.length > 0) {
				var href = "#" + $panneau.attr("id");
				ouvrirOngletParent($(href));
				clickOnglet(href, false);
			}
		}

		function clickOnglet(idPanneau, addHistory) {
			var idPanneauOk = idPanneau.replace('#', '');
			var $li = $("a[href='#" + idPanneauOk + "'] ").parents("li.onglet");
			activerDesactiverOnglet($li);
			activerDesactiverSelect(idPanneauOk);
			var url = window.location.origin + window.location.pathname + window.location.search + '#' + idPanneauOk;
			var navigationHistorique = new NavigationHistorique();
			if (addHistory) {
				if (idPanneau.includes("figure")) {
					//si c'est un graphique tableau on modifie l'url sans rajouter un historique
					navigationHistorique.modifierHistorique(url);
				} else {
					navigationHistorique.ajouterHistorique(url);
				}
			}
		}

		function ouvrirOngletConsulter() {
			var $consulter = $('#consulter');
			if ($consulter.length > 0 && !$consulter.is(":visible")) {
				ouvrirOngletParent($('#consulter'));
			}
			var $onglet1 = $('#onglet-1');
			if ($onglet1.length > 0 && !$onglet1.is(":visible")) {
				ouvrirOngletParent($('#onglet-1'));
			}
		}

		function allerVersAncreByIdAncre(idAncre) {
			if (idAncre != "") {
				boutonRadio(idAncre);
				var $ancre = $(idAncre);
				if ($ancre.is(":visible")) {
					if ($ancre.offset().top !== 0) {
						scrollToAncre($ancre, idAncre);
					}
				} else if ($ancre.length > 0 && typeof $ancre.offset != 'undefined') {
					ouvrirOngletParent($ancre);
					scrollToAncre($ancre, idAncre);
				}
			}
		}

		function scrollToAncre($ancre, idAncre) {
			var ouOnEst = window.pageYOffset || document.documentElement.scrollTop;
			var whereToScrollTop = $ancre.offset().top - ouOnEst - 50 - 80 * idAncre.includes("radio");
			window.scrollBy({
				top: whereToScrollTop,
				left: 100,
				behavior: 'smooth'
			});
			// autres possibilités sui ont l'air de pas marcher tout le temps
			//$('html,body').animate({scrollTop:whereToScrollTop}, '50');
			//$(document).scrollTop($ancre.offset().top - 50 - 80*(idAncre.includes("radio")));
			//location.hash = idAncre; 
		}

		function calculerSelectSvg(select) {
			select.each(function () {
				var liste = [];
				var listeContinuation = [];
				var i = 0;
				var parent;
				$(this).closest("figure").prev("figure").find("table tr th[scope='col']").each(function () {
					var newParent = $(this).parent();
					if (!newParent.is(parent)) {
						i = 0;
						parent = newParent;
					}

					while (listeContinuation[i] == false) {
						i++;
					}

					var colspan = $(this).attr("colspan");
					if (colspan == undefined) {
						colspan = 1;
					}
					var rowspan = $(this).attr("rowspan");

					for (var j = 0; j < colspan; j++) {
						var existant = "";
						if (i < liste.length) {
							existant = liste[i] + " - ";
						}

						if ($(this).text() != "") {
							liste[i] = existant + $(this).text();
						}

						if (rowspan == undefined) {
							listeContinuation[i] = true;
						} else {
							listeContinuation[i] = false;
						}
						i++;
					}
				});
				var size = liste.length;
				var value = 1;
				var defaultOption = $(this).attr("defaultOption");
				for (i = 0; i < size; i++) {
					if (liste[i] != undefined) {
						if (value != defaultOption) {
							$(this).append("<option value='" + value + "'>" + liste[i] + "</option>");
						} else {
							$(this).append("<option selected='selected' value='" + value + "'>" + liste[i] + "</option>");
						}
						value++;
					}
				}
			});
		}

		function versPageProduit() {
			return window.location.href.indexOf("/statistiques/") > 0 || window.location.href.indexOf("/information/") > 0 || window.location.href.indexOf("/cog/") > 0 || window.location.href.indexOf("/definition/") > 0 || window.location.href.indexOf("/source/") > 0;
		}

		function depuisNavigationMulticritere() {
			return document.referrer.indexOf("debut=") > 0;
		}

		function afficherBoutonRetour() {
			return depuisNavigationMulticritere() && versPageProduit();
		}

		function vueContenuSeul() {
			$(".sommaire-gauche").animate({
				width: '0%'
			}, 300);
			$(".sommaire-droite").animate({
				width: '100%'
			}, 300, 'swing', function () {
				$(".ouverture-contenu").hide();
				$(".ouverture-sommaire").fadeIn('300');
			});
			$(".telechargement").fadeIn('100');
			$(".sommaire-droite").removeClass('hidden');
			$(".sommaire-gauche").addClass('hidden');
			$(".sommaire-gauche").removeClass('no-print');
			$(".fermeture").hide();
			$(".details-gauche").toggleClass('contenu-seul contenu-mixte');
			$(".donnees-telechargeables").toggleClass('contenu-seul contenu-mixte');
		}

		function vueSommaireSeul() {
			$(".sommaire-gauche").animate({
				width: '100%'
			}, 300);
			$(".sommaire-droite").animate({
				width: '0%'
			}, 300, 'swing', function () {
				$(".ouverture-contenu").fadeIn('300');
				$(".ouverture-sommaire").hide();
			});
			$(".telechargement").hide();
			$(".sommaire-droite").addClass('hidden');
			$(".sommaire-gauche").removeClass('hidden');
			$(".sommaire-gauche").removeClass('no-print');
			$(".fermeture").hide();
			$(".details-gauche").toggleClass('contenu-seul contenu-mixte');
			$(".donnees-telechargeables").toggleClass('contenu-seul contenu-mixte');
		}

		function vueDouble() {
			$(".sommaire-gauche").animate({
				width: '33%'
			}, 300);
			$(".sommaire-droite").animate({
				width: '67%'
			}, 300, 'swing', function () {
				$(".fermeture").fadeIn('300').css('display', 'table');
			});
			$(".telechargement").fadeIn('100');
			$(".ouverture-contenu").hide();
			$(".ouverture-sommaire").hide();
			$(".sommaire-droite").removeClass('hidden');
			$(".sommaire-gauche").removeClass('hidden');
			$(".sommaire-gauche").addClass('no-print');
			$(".details-gauche").toggleClass('contenu-seul contenu-mixte');
			$(".donnees-telechargeables").toggleClass('contenu-seul contenu-mixte');
		}

		function resetSommaireButtons() {
			$(".fermeture-gauche").unbind("click");
			$(".fermeture-droite").unbind("click");
			$(".ouverture-contenu").unbind("click");
			$(".ouverture-sommaire").unbind("click");
		}

		function actionAffinerRecherche() {
			activerOnglet($(".titre-page .boutons-bascule .affiner-recherche"));
			desactiverOnglet($(".titre-page .boutons-bascule .afficher-resultat"));
			$(".accordion-container").show();
			$(".contenu .facettes .criteres").hide();
			$("#echos").hide();
			$(".sticky-left").show();
		}

		function actionAfficherResultat() {
			activerOnglet($(".titre-page .boutons-bascule .afficher-resultat"));
			desactiverOnglet($(".titre-page .boutons-bascule .affiner-recherche"));
			$(".accordion-container").hide();
			$(".contenu .facettes .criteres").show();
			$("#echos").show();
			$(".sticky-left").hide();
		}

		function mettreAjourPage() {
			if ($(".titre-page .boutons-bascule .affiner-recherche").hasClass("courant")) {
				$(".titre-page .boutons-bascule .affiner-recherche").click();
			} else {
				$(".titre-page .boutons-bascule .afficher-resultat").click();
			}
		}

		function replierFacettes() {
			$(".accordion:not(.unique) .accordion-header").each(function (index, element) {
				$(element).parent().children(".accordion-content").hide();
				$(this).children("span:nth-child(2)").attr("class", "fleche-droite");
			});
			$('#tab-facette-conjoncture').click();
		}

		function setGetParameter(paramName, paramValue) {
			var url = window.location.href;
			var hash = location.hash;
			url = url.replace(hash, '');
			if (url.indexOf(paramName + "=") >= 0) {
				var prefix = url.substring(0, url.indexOf(paramName));
				var suffix = url.substring(url.indexOf(paramName));
				suffix = suffix.substring(suffix.indexOf("=") + 1);
				suffix = suffix.indexOf("&") >= 0 ? suffix.substring(suffix.indexOf("&")) : "";
				url = prefix + paramName + "=" + paramValue + suffix;
			} else {
				if (url.indexOf("?") < 0) url += "?" + paramName + "=" + paramValue;else url += "&" + paramName + "=" + paramValue;
			}
			window.history.replaceState(null, null, url + hash);
		}

		/* Boutons radios */
		function afficherGraphEnfant() {
			$('.graph-parent svg').each(function (indexSvgParent, svgParent) {
				var idParent = $(svgParent).attr('id'); // G_Fcontinent_radio1
				var $surfaces = $('[class^=' + idParent + '_surface]');
				$surfaces.click(function () {
					afficheEnfant(idParent, $(this).attr('id-graph-enfant'));
				});
			});
		}

		function afficheEnfant(idParent, idGraphEnfant) {
			var prefixIdParent = idParent.split('_')[1]; // G_Fcontinent_radio1 => Fcontinent
			masqueEnfant(prefixIdParent);
			var idAAfficher = '#' + idGraphEnfant; //#Afrique
			if (idParent.split('_')[idParent.split('_').length - 1].match('^radio')) {
				idAAfficher += '_' + idParent.split('_')[idParent.split('_').length - 1];
			}
			$(idAAfficher).removeClass('hidden');

			scrollToAncre($(idAAfficher), idAAfficher);
		}

		// idParent = G_prefixIdParent_radioN
		function masqueEnfant(prefixIdParent) {
			$('[data-id-graph-parent^=' + prefixIdParent + ']:not(.hidden)').each(function (index, elementGraphEnfant) {
				$(elementGraphEnfant).addClass('hidden');
			});
		}

		//idParent = G_prefixIdParent_radioN
		// on peut remplacer par du css 
		/*input:checked + label {
  	font-weight: bold;
  }*/
		function labelEnGras() {
			$('.div_radio_graphique input[type=radio]').each(function (indexRadio, elementRadio) {
				if ($(elementRadio).is(':checked')) {
					$("label[for='" + $(elementRadio).attr('id') + "']").addClass('gras');
				} else {
					$("label[for='" + $(elementRadio).attr('id') + "']").removeClass('gras');
				}
			});
		}

		function toggleBoutonRadio($radioClique) {
			var prefixGraphParentIdOk = $radioClique.attr('name').replace('_', '');
			// on stocke les ids des enfants qui étaient affichés et on les masque
			var idsEnfantsAffiches = new Array();
			$('[data-id-graph-parent^=' + prefixGraphParentIdOk + ']:not(.hidden)').each(function (index, element) {
				idsEnfantsAffiches.push($(element).attr('id'));
				$(element).addClass('hidden');
			});

			$('#' + prefixGraphParentIdOk + '_div_radio_graphique input[type=radio]').each(function (indexRadio, elementRadio) {
				var graphParentId = $(elementRadio).attr('id').replace('radio_', '');
				// On change le graph parent
				if ($(elementRadio).is(':checked')) {
					$('#' + graphParentId).removeClass('hidden');
					$.each(idsEnfantsAffiches, function (indexEnfant, elementEnfant) {
						var length = elementEnfant.split('_').length;
						var modaliteRadio = elementEnfant.split('_')[length - 1];
						var idGraphEnfantSansModaliteRadio = elementEnfant.replace('_' + modaliteRadio, ''); //Europe_id					
						$('#' + idGraphEnfantSansModaliteRadio + '_' + $(elementRadio).attr('value')).removeClass('hidden');
					});

					//Gestion des paragraphes liés
					var blocClassToShow = $("label[for='" + $(elementRadio).attr('id') + "']").text().replace(new RegExp(/[^A-Za-z0-9_]+/gi), '_');
					$('.' + blocClassToShow).removeClass('hidden');
				} else {
					$('#' + graphParentId).addClass('hidden');

					//Gestion des paragraphes liés
					var blocClassToHide = $("label[for='" + $(elementRadio).attr('id') + "']").text().replace(new RegExp(/[^A-Za-z0-9_]+/gi), '_');
					$('.' + blocClassToHide).addClass('hidden');
				}
			});
			labelEnGras();
		}

		function boutonRadio(idAncre) {
			if (idAncre.includes("radio")) {
				// de la forme #radio_figureX_radioY ou #figure-figureX_radioY ou figure1_radio2
				var split = idAncre.replace("radio_", "").replace("G_", "").split('-');
				var idAncreSimple = split.length === 1 ? split[0] : split[1]; //figureX_radioY
				// on cherche à trouver le bouton radio qui correspond au graphique
				var radioAAfficher = $(idAncre).parents('[data-id-graph-parent]').attr('data-id-graph-parent') // si c'est un graphique enfant
				|| $(idAncre).parents('[data-id-graph-parent]').attr('id') // si c'est un graphique parent
				|| $(idAncreSimple + '[data-id-graph-parent]').attr('data-id-graph-parent') // si c'est un graphique enfant mais sur forme chelou
				|| idAncreSimple.replace("#", ""); // si c'est déjà mis sous bonne forme
				var $radioACliquerOk = $('#radio_' + radioAAfficher);
				if ($radioACliquerOk) {
					//si il faut afficher un graphique avec bouton radio
					$radioACliquerOk.prop("checked", true);
					toggleBoutonRadio($radioACliquerOk);
					/*afficher le graphique enfant : ne marche pas, j'en ai marre
     let $grapheEnfant = $("G_"+$radioACliquerOk.attr('id'))
     console.log("boutonRadio après toggleBoutonRadio", $radioACliquerOk.is(':checked'), $('#'+ radioAAfficher).is(':visible'),$(idAncre).is(':visible'), 
     	{$grapheEnfant} , $grapheEnfant.attr('id'),$grapheEnfant.is(':visible'))
     if(!$(idAncre).is(':visible')){ // si il faut afficher un graphique enfant
     	console.log($radioACliquerOk.attr('id'),idAncreSimple.split('_')[0])
     	$(idAncre).removeClass('hidden');
      			scrollToAncre( $(idAncre),idAncre);
     }
     console.log("boutonRadio après toggleBoutonRadio", $radioACliquerOk.is(':checked'), $('#'+ radioAAfficher).is(':visible'),$(idAncre).is(':visible'))*/
				}
			}
		}

		/**
   * 
   */
		var TableDdl = function ($) {
			var ctx = this,
			    columns = {};

			var chargerDdl = function chargerDdl(idProduit, niveau, code) {
				var url = contextPath + "/" + langue + "/ddl/table/" + idProduit + "/" + niveau + "/" + code;
				return $.getJSON(url);
			};

			return function () {

				/* */
				var insertColumn = function insertColumn(data) {

					var $new = $(data.html).find("ligne"),
					    $cible = $(".tableau-produit").find("tr"),
					    key = data.niveau + data.code;
					columns[key] = new Array();
					if ($new.length == $cible.length) {
						for (var i = 0; i < $new.length; i++) {
							var $row = $($cible[i]),
							    first = $row.children().first();
							if ($(first).is("[colspan]")) {
								var nb = parseInt($(first).attr("colspan")) + 1;
								$row.find("td").each(function () {
									$(this).attr("colspan", nb);
								});
							} else {
								var $type;
								if ($(first).is("[scope=col]")) {
									$type = $("<th>", { scope: "col" });
									$type.text(data.libelle + ' (' + data.code + ')');
								} else {
									$type = $("<td>", { "class": "nombre" });
									$type.text($($new[i]).children().last().text());
								}
								$($cible[i]).append($type);
								columns[key].push($type);
							}
						}
					}
				};

				/* */
				this.removeColumn = function (zone) {
					var key = zone.niveau.code + zone.code;
					$(columns[key]).each(function () {
						$(this).remove();
					});
					delete columns[key];
					$(".tableau-produit").find("[colspan]").each(function () {
						var v = parseInt($(this).attr("colspan"));
						$(this).attr("colspan", v - 1);
					});
				};

				/* */
				this.chargerTables = function (idProduit, zones) {
					var deferreds = new Array();
					$(zones).each(function () {
						deferreds.push(chargerDdl(idProduit, this.niveau.code, this.code));
					});

					$("#wait").attr("class", "wait-on");
					$.when.apply(this, deferreds).then(function () {
						if (deferreds.length == 1) {
							insertColumn.call(ctx, arguments[0]);
						} else {
							for (var k in arguments) {
								insertColumn.call(ctx, arguments[k][0]);
							}
						}
						$("#wait").attr("class", "wait-off");
					}).fail(function () {
						// TODO
						$("#wait").attr("class", "wait-off");
					});
				};
			};
		}(jQuery);

		/**
   * Classe encapsulant la génération dom des facettes.
   *
   * Pour les listes :
   * Pour chaque <li> des éléments dom sont mémorisés dans $.data :
   * $a : le lien contenant le libellé
   * $checkbox : l'image de la checkbox (optionnel, selon le niveau dans l'arbre)
   * $children : le $ul contenant les enfants (optionnel, si li a des enfants)
   * $chevron : $span contenant le chevron (optionnel, juste li de niveau 0)
   *
   *
   * Pour la facette géo :
   *
   *
   */
		function DomGenerator() {
			this.$li;
			this.$span;
			this.$a;

			this.$compteur;
			this.$chevron;

			this.$check;
			this.$checkbox;
			this.$check;
			this.$ul;

			this.$data = {};
		}

		/* */
		DomGenerator.prototype.makeCommun = function (id, titre, index) {
			this.$li = $("<li>", {
				"class": "branche"
			});
			this.$span = $("<div>", {
				"class": "contenu-branche"
			});
			this.$a = $("<a>", {
				"class": "libelle",
				"href": "#",
				"tabindex": -1
			}).html(titre);
			this.$compteur = $("<span>", {
				"class": "facette-nombre"
			});
			this.$data = {
				$a: this.$a,
				$compteur: this.$compteur,
				level: index,
				id: id,
				libelle: titre
			};

			switch (index) {
				case 1:
					this.$li.addClass("indentation-10px");
					break;
				case 2:
					this.$li.addClass("indentation-20px");
					break;
			}

			this.$li.append(this.$span);
			this.$li.attr("data-active", false);
			this.$li.attr("data-level", index);
			this.$li.attr("data-id", id);
			this.$a.attr("id", "lien-" + id);
			this.$li.hide();
		};

		/**
   *
   */
		DomGenerator.prototype.getRootNode = function (id, titre, index, hasChildren) {
			this.makeCommun(id, titre, index);

			this.$chevron = $("<span>", { "class": "arbre-chevron-ferme" });

			this.$span.append(this.$a);
			this.$a.append(this.$compteur);
			this.$a.attr("class", "libelle-chevron-ferme");

			this.$data.$chevron = this.$chevron;

			if (hasChildren) {
				this.$ul = $("<ul>", { "role": "group" });

				this.$li.append(this.$ul);
				this.$data.$children = this.$ul;
			}

			return this.$li;
		};

		/**
   *
   */
		DomGenerator.prototype.getNode = function (id, titre, index, hasChildren, isChevron) {
			isChevron = typeof isChevron !== 'undefined' ? isChevron : false;
			this.makeCommun(id, titre, index);

			if (isChevron) {
				this.$chevron = $("<span>", { "class": "arbre-chevron-ferme" });
				this.$span.append(this.$chevron);
				this.$data.$chevron = this.$chevron;
			}

			this.$checkbox = $("<img>", {
				"src": contextPath + "/static/img/checkbox-unchecked.svg",
				"class": "checkbox-unchecked",
				"alt": "Non coché : "
			});

			this.$linkContainer = $("<span>", { "class": "facette-groupe" });
			this.$linkContainer.append(this.$checkbox);
			this.$span.append(this.$linkContainer.append($("<span>", { "class": "facette-libelle" }).append(this.$a).append(this.$compteur)));

			this.$data.$checkbox = this.$checkbox;

			if (hasChildren) {
				this.$ul = $("<ul>", { "role": "group" });

				this.$li.append(this.$ul);
				this.$data.$children = this.$ul;
			}

			return this.$li;
		};

		/**
   * Génére un select pour la facette de type SelectFacette.
   * @param data
   */
		DomGenerator.prototype.getSelect = function (niveaux, def, facet) {
			// [NULL] est tester dans le code js.
			var $select = $("<select>", { "class": "", "title": "Choix du niveau géographique" }).append($("<option>", { "data-i18n": "facettes.niveau-geo.tous-niveaux" }).val("[NULL]").text("Tous les niveaux géographiques").i18n());
			$(niveaux).each(function () {
				if (facet && facet.data[this[def.id]]) {
					var count = parseInt(facet.data[this[def.id]]);
					if (count > 0) {
						var $option = $("<option>");
						$option.val(this[def.id]);
						$option.text(this[def.title] + " (" + count + ")");
						$option.attr("data-libelle", this[def.title]);

						$select.append($option);
					}
				}
			});

			return $select;
		};

		/**
   * Génére un select
   */
		DomGenerator.prototype.getSelectEx = function (data, def, title, texte) {
			var $select = $("<select>", { "class": "", "title": title }).append($("<option>").val("[NULL]").text(texte));
			$(data).each(function () {
				var $option = $("<option>");
				$option.val(this[def.id]);
				$option.text(this[def.title]);
				$option.attr("data-libelle", this[def.title]);
				$select.append($option);
			});

			return $select;
		};

		/**
   * <option /> pour selectric.
   * @param itemData
   * @param facet
   * @returns
   */
		DomGenerator.prototype.getSelectNode = function (itemData, facet, libelle) {
			// Pour le tunnage css : .selectric-customOptions .selectricItems
			var $p = $("<p>");
			if (itemData.value != "[NULL]") {
				var $span = $("<div>", { "class": "contenu-branche" });
				var $a = $("<a>", {
					"class": "libelle",
					href: "#",
					tabindex: -1
				}).text(libelle == null ? itemData.text : libelle);
				var $compteur = $("<span>", { "class": "facette-nombre" });
				$compteur.text("(" + facet.data[itemData.value] + ")");

				$span.append($a);
				$span.append($compteur);
				$p.append($span);
			} else {
				$p.append($("<div>", {
					"class": "contenu-branche",
					"data-i18n": "facettes.niveau-geo.tous-niveaux"
				}).text("Tous les niveaux géographiques").i18n());
			}

			return $p.html();
		};

		/**
   * Dom des options des autocompleters jquery-ui.
   * @param libelle
   * @param count
   * @returns
   */
		DomGenerator.prototype.getSuggesterOption = function (niveau, libelle, code, count, prefix) {
			this.$li = $("<li>", {
				"class": "branche",
				"role": "checkbox",
				"tabindex": 0,
				"aria-checked": "false",
				"aria-controls": "echos",
				"data-value": libelle
			});
			this.$span = $("<div>", { "class": "completer-option" }).append($("<span>").text(niveau + " – "));
			this.$a = $("<a>", {
				"class": "libelle",
				href: "#",
				tabindex: -1
			});

			var prefixClean = prefix.toLowerCase().stripAccent().replace(/-/g, ' ');
			var libelleClean = libelle.toLowerCase().stripAccent().replace(/-/g, ' ');
			var index = libelleClean.indexOf(prefixClean);
			if (index > 0) {
				this.$a.append($("<span>").text(libelle.substring(0, index)));
			}

			this.$a.append($("<span>").text(libelle.substring(index, index + prefix.length)).addClass("completer-prefix")).append($("<span>").text(libelle.substring(index + prefix.length, libelle.length)));
			if (code != null) {
				this.$a.append($("<span>", { "class": "code" }).text("(" + code + ")"));
			}
			if (count != -1) {
				this.$compteur = $("<span>", { "class": "facette-nombre" }).text("(" + count + ")");
			}
			this.$span.append(this.$a);
			this.$span.append(this.$compteur);
			this.$li.append(this.$span);

			return this.$li;
		};

		/**
   * Dom du container d'options des autocompleter jquery-ui
   */
		DomGenerator.prototype.getSuggesterBody = function (ul, items, autocompleter) {
			var $ul = $(ul);
			$ul.attr("role", "group").addClass("completer-body");
			$.each(items, function (index, item) {
				autocompleter._renderItemData(ul, item);
			});
			$(ul).find("li:odd").addClass("odd");
		};

		/* ******************************************** */
		var DocumentViewDom = function DocumentViewDom() {};
		DocumentViewDom.getDom = function (data) {
			var data = $.extend({
				id: 'undefined',
				libelleGeographique: '',
				titre: 'Titre inconnu !',
				sousTitre: '',
				url: '',
				dateDiffusion: '',
				libelleDateDiffusion: '',
				typeDocument: 'indéfini',
				typeDocumentId: 'indéfini',
				numero: null,
				libelleTypeDocumentFr: 'indéfini',
				libelleTypeDocumentEn: data.libelleTypeDocumentFr,
				chevron: true,
				renderType: '',
				uriManager: null
			}, data);
			var $container = $("<tr>", { "class": "cliquable" }),
			    zoneDate = !String.isBlank(data.libelleGeographique) ? data.libelleGeographique + '&nbsp;&ndash;&nbsp;' : '',
			    $echoTitre = data.renderType == "lien-externe" ? $("<div>", { "class": "echo-titre lien-externe" }).html(data.titre) : $("<div>", { "class": "echo-titre" }).html(data.titre),
			    $a = data.renderType == "lien-externe" ? $("<a>", {
				"class": "echo-lien renvoi",
				"target": "_blank",
				"href": data.url,
				"tabindex": -1,
				"title": "lien externe (nouvelle fenêtre)"
			}) : $("<a>", { "class": "echo-lien", "href": data.url, "tabindex": -1 });

			$a.click(function (e) {
				e.preventDefault();
			});

			if (data.id != 'undefined') {
				$container.attr('id', data.id);
			}

			var numero = "";
			if (data.numero != null && data.numero != "") {
				numero = " - N° " + data.numero;
			}

			zoneDate += data.libelleDateDiffusion;
			var dateFormatee = $.datepicker.formatDate('dd/mm/yy', new Date(data.dateDiffusion));
			var libelleTypeDocument;
			switch (langue) {
				default:
				case 'fr':
					libelleTypeDocument = data.libelleTypeDocumentFr;
					break;
				case 'en':
					libelleTypeDocument = data.libelleTypeDocumentEn;
					break;
			}
			zoneDate += String.isBlank(data.dateDiffusion) ? '' : dateFormatee;
			var categorie = data.typeDocumentId == 'indéfini' ? data.typeDocument : data.typeDocumentId;

			if (data.renderType == "calendrier") {
				$container = $("<tr>");
				var $div = $("<div>", { "class": "echo-lien", "tabindex": -1 });
				var embargo = new Date(data.dateDiffusion);
				var heureEmbargo = embargo.toLocaleTimeString("fr-FR").substring(0, 5);
				if (langue == 'fr') {
					heureEmbargo = heureEmbargo.split(':').join('h');
				}
				var $dateCalendrier = $("<span>");
				$dateCalendrier.append(dateFormatee);
				var $separateurCalendrier = $("<span>");
				$separateurCalendrier.append(" - ");
				var $heureCalendrier = $("<span>");
				$heureCalendrier.append(heureEmbargo);

				$echoTitre = $("<div>", { "class": "echo-titre-calendrier" }).append(data.titre);

				$container.append($("<td>", { "class": data.chevron ? "echo echo-chevron" : "echo" }).append($div.append($("<div>", { "class": "echo-bloc", "tabindex": 0 }).append($("<div>", { "class": "echo-texte" }).append($echoTitre).append($("<div>", { "class": "echo-infos" }).append($("<span>", { "class": DocumentViewDom.echoClass(categorie) + " echo-categorie-calendrier" }).text(libelleTypeDocument)).append(String.isBlank($dateCalendrier) ? '' : $("<span>", { "class": "echo-date" }).append($dateCalendrier).append($separateurCalendrier).append($heureCalendrier)))))));
			} else {
				$container.append($("<td>", { "class": data.chevron ? "echo echo-chevron" : "echo" }).append($a.append($("<div>", { "class": "echo-bloc", "tabindex": 0 }).append($("<div>", { "class": "echo-texte" }).append($echoTitre).append(String.isBlank(data.sousTitre) ? '' : $("<div>", { "class": "echo-sous-titre" }).html(data.sousTitre)).append($("<div>", { "class": "echo-infos" }).append($("<span>", { "class": DocumentViewDom.echoClass(categorie) }).text(libelleTypeDocument + numero)).append(String.isBlank(zoneDate) ? '' : $("<span>", { "class": "echo-date" }).html(zoneDate)))))));
			}

			$(".echo-bloc").keydown(function (e) {
				if (e.which == KeyCode.enter) {
					$(this).click();
					e.preventDefault();
				}
			});

			return $container;
		};

		DocumentViewDom.echoClass = function (libelleFamille) {
			//console.log(libelleFamille)
			switch (libelleFamille) {
				case TYPE_PRODUIT.serieBdm:
				case TYPE_PRODUIT.familleBdm:
					return "echo-bdm";
				case 3:
					return "echo-categorie-bdd";
				case 7:
				case 19:
					return "echo-categorie-ci";
				case 5:
					return "echo-categorie-cd";
				case TYPE_PRODUIT.calendrier:
				case 2:
				case 12:
					return "echo-categorie-pub-grand-public";
				case 13:
					return "echo-categorie-pub-expert";
				case 4:
					return "echo-categorie-cc";
				case "Vue d'ensemble":
					return "echo-categorie-ve";
				case 23:
					return "echo-categorie-courrier-des-stats";
				case 10:
					return "echo-series-chronologiques";
				case 14:
				case 15:
				case 16:
				case 17:
				case TYPE_PRODUIT.definition:
				case TYPE_PRODUIT.source:
				case TYPE_PRODUIT.nomenclatures:
					return "echo-methodes";
				case 9:
				case 18:
					return "echo-insee";
				case 8:
				case 11:
					return "echo-communiques-presse";
				case 20:
					return "echo-services";
				default:
					console.error("Ajouter le cas [" + libelleFamille + "] au switch de la fonction echoClass du fichier navigation-dom.js");
					return "";
			}
		};

		DocumentViewDom.getFilNomenclature = function (doc, libelle) {
			if ('codeParents' in doc && 'code' in doc) {
				var filAriane = "<span class=\"echos-sous-titre-nomenclature\">" + libelle + ' &ndash;' + "</span><ol class=\"fil-ariane\">";
				$(doc.codeParents).each(function () {
					filAriane += "<li>" + this.value + "</li>";
				});
				filAriane += "<li>" + doc.code + "</li></ol>";

				return filAriane;
			} else return '';
		};

		var Filters = function ($) {

			return function () {
				this.filters = NAVIGATION_FILTERS;

				/**
     * Renvoie la liste des filtres contenant des valeurs.
     */
				this.getFilters = function (listExclusion) {
					var f = new Array();
					if (typeof listExclusion === 'undefined') listExclusion = new Array();

					for (var k in this.filters) {
						if ($.inArray(k, listExclusion) == -1) {
							if (this.filters[k].value || this.filters[k].values) {
								f[f.length] = this.filters[k];
							}
						}
					}
					return f;
				};

				/**
     * retourne les valeurs de filtre d'un champ.
     */
				this.getFiltersValues = function (name) {
					var values = [];
					if (name in this.filters) {
						if (this.filters[name].value) {
							values.push(this.filters[name].value);
						}
						if (this.filters[name].values) {
							for (var i = 0; i < this.filters[name].values.length; i++) {
								values.push(this.filters[name].values[i]);
							}
						}
					}
					return values;
				};

				/**
     * Ajoute une valeur à un filtre.
     */
				this.addFilterValue = function (name, value) {
					if (this.filters[name]) {
						if (!this.filters[name].values) {
							this.filters[name].values = new Array();
						}
						if ($.inArray(value, this.filters[name].values) == -1) {
							this.filters[name].values.push(value);
						}
					}
				};

				/**
     * Supprime une valeur d'un filtre.
     */
				this.removeFilterValue = function (name, value) {
					if (this.filters[name]) {
						if (this.filters[name].values) {
							var index = $.inArray(value, this.filters[name].values);
							if (index != -1) {
								this.filters[name].values.splice(index, 1);
							}
							if (this.filters[name].values.length == 0) {
								delete this.filters[name].values;
							}
						}
					}
				};

				/**
     * supprime les valeurs contenues dans un filtre.
     */
				this.removeValues = function (name) {
					if (this.filters[name]) {
						if (this.filters[name].values) {
							delete this.filters[name].values;
						}
					}
				};

				/**
     * retire toute les valeurs de tous les filtres.
     */
				this.removeAllValues = function () {
					for (var k in this.filters) {
						if (this.filters[k].values) {
							delete this.filters[k].values;
						}
					}
				};

				/**
     * Ajoute un filtre.
     */
				this.addFilter = function (name) {
					// TODO
				};

				/**
     * RSetire un filtre.
     */
				this.removeFilter = function (name) {
					// TODO
				};

				/**
     * 
     */
				this.setFilterValues = function (name, values) {
					if (this.filters[name] && values.length > 0) {
						this.filters[name].values = values;
					}
				};

				this.reloadBookmark_ = function (key, values) {
					if (values.length > 0) {
						this.setFilterValues(key, values);
					}
				};
			};
		}(jQuery);
		var NavigationHistorique = function NavigationHistorique() {
			var ctx = this;
			var titrePage = $(document).attr('title');

			this.ajouterEvent = function (fonction) {
				window.onpopstate = function (event) {
					if (typeof event.state !== 'undefined') {
						fonction();
					}
				};
			};

			this.ajouterHistorique = function (href) {
				History.pushState({}, document.title, href);
			};

			this.modifierHistorique = function (href, state) {
				History.replaceState(state || { state: 'treeEvent' }, document.title, href);
			};

			this.getAncre = function () {
				var parts = window.location.hash.split("#");
				return parts[parts.length - 1];
			};

			this.getSegmentUrl = function (index) {
				var parts = window.location.pathname.split("/");
				if (index < 0) {
					index += parts.length;
				}
				return parts[index];
			};

			this.getUrlParam = function (name) {
				var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
				if (results == null) {
					return null;
				}
				return results[1];
			};

			this.addUrlParam = function (href, name, valeur) {
				var lastC = href.slice(-1);
				var url;
				if (href.indexOf(name + "=") != -1) {
					var regexp = new RegExp("(" + name + "=)[^\&]+");
					url = href.replace(regexp, '$1' + valeur);
				} else if (lastC == "?" || lastC == "&") {
					url = href + name + "=" + valeur;
				} else {
					var separator = href.indexOf('?') !== -1 ? "&" : "?";
					url = href + separator + name + "=" + valeur;
				}
				return url;
			};

			this.removeUrlParam = function (url, name) {
				return url.replace(new RegExp('&?' + name + '=([^&]$|[^&]*)&?'), "");
			};
		};

		function Critere() {
			this.$container; // le container dom du critère.
			this.dom; // l'élément dom à l'origine du critère.
			this.action; // l'action de libération du critère : un simple clique sur dom dans la plupart des cas.
			this.libelle; // le libelle affiché qui sert aussi de key pour référencer le critère.
			this.closable;
		}

		var MesCriteres = function () {
			function MesCriteres($target) {
				_classCallCheck(this, MesCriteres);

				this.$target = $target;
				this.criteres = {};
			}

			_createClass(MesCriteres, [{
				key: 'addCritere',
				value: function addCritere(params) {
					params = $.extend({ dom: null, libelle: "", libelleEn: params.libelle, action: function action() {}, first: false, closable: true }, params);

					var critere = new Critere();
					//	if (typeof(indentationClass)==='undefined') indentationClass = null;
					critere.dom = params.dom;
					critere.libelle = params.libelle;
					critere.action = params.action;
					critere.closable = params.closable;
					critere.$container = $("<div>", { "class": "critere" });
					critere.$spacer = $("<div>", { "class": "espace-critere", "tabindex": -1 });

					var libCritere;
					switch (langue) {
						default:
						case 'fr':
							libCritere = params.libelle;
							break;
						case 'en':
							libCritere = params.libelleEn;
							break;
					}

					var $libelle = $("<div>", { "class": "libelle" }).html(libCritere);
					var $lienPlus = $("<div>", { "class": "critere-croix", "tabindex": 0 }).append($("<a>", { "class": "lien-croix", "href": params.libelle, "tabindex": -1 }));
					if (!critere.closable) {
						$lienPlus.attr("class", "critere-croix-inactive");
						$lienPlus.attr("tabindex", -1);
					}

					$lienPlus.keydown(function (e) {
						if (e.which == KeyCode.enter) {
							var $prevs = $(this).prevAll(":focusable");
							$(this).click();
							if ($prevs.length > 0) {
								$prevs.first().focus();
							} else {
								$(".accordion-header").first().focus();
							}
							e.preventDefault();
						}
					});

					critere.$container.append($libelle);
					critere.$container.append($lienPlus);
					this.$target.append(critere.$container).append(critere.$spacer);

					this.criteres[params.libelle] = critere;

					if (params.first) {
						critere.$container.before($("<div>", { "class": "critere-marge" }));
					}

					$lienPlus.click(function (e) {
						if (critere && critere.action && critere.dom) {
							critere.action(critere.dom);
						}

						e.preventDefault();
						e.stopImmediatePropagation();
					});
				}
			}, {
				key: 'cleanAll',
				value: function cleanAll() {
					this.$target.empty();
				}
			}]);

			return MesCriteres;
		}();

		var Search = function () {
			function Search(url) {
				_classCallCheck(this, Search);

				this.url = url;
				this.rows = SOLR_PARAMS.defaultRows;
				this.start = SOLR_PARAMS.defaultStart;
				this.idFacetteDepliee = SOLR_PARAMS.defaultIdFacetteDepliee;
				this.q = SOLR_PARAMS.defaultQuery;
				this.defType = SOLR_PARAMS.defaultDefType;
				this.sortFields = [SOLR_PARAMS.defaultSortField];
				this.numFounds = 0;
				this.facetsQuery = new Array();
				this.pathname = '/' + langue + WEB4G_URL.statistiques;
				this.rootUrl = contextPath + this.pathname + '?';
			}

			/**
    * Déclenche l'appel au serveur.
    */

			_createClass(Search, [{
				key: 'post',
				value: function post(callback) {
					var params = {
						// objet js au format de l'objet java
						q: this.q,
						defType: this.defType,
						start: this.start,
						sortFields: this.sortFields,
						filters: this.getFilters(),
						rows: this.rows,
						facetsQuery: new Array()
					};

					$(this.facetsQuery).each(function () {
						params.facetsQuery[params.facetsQuery.length] = { query: this };
					});

					$.ajax({
						url: encodeURI(this.url + '?q=' + this.q),
						type: 'POST',
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: callback,
						error: function error(data) {
							console.log('error');
							// TODO mieux que ça !
						}
					});
				}
			}, {
				key: 'getFilters',
				value: function getFilters() {
					return this.getController().getFiltres().getFilters();
				}
			}, {
				key: 'getController',
				value: function getController() {
					return SolrController.getInstance();
				}
			}, {
				key: 'setPathname',
				value: function setPathname(pathname) {
					this.pathname = pathname;
				}
			}, {
				key: 'reloadBookmark_',
				value: function reloadBookmark_(key, values) {
					if (values.length > 0) {
						switch (key) {
							case URL_PARAMS.q:
								var q = '';
								var _iteratorNormalCompletion = true;
								var _didIteratorError = false;
								var _iteratorError = undefined;

								try {
									for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var value = _step.value;

										q += value + ' ';
									}
								} catch (err) {
									_didIteratorError = true;
									_iteratorError = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion && _iterator.return) {
											_iterator.return();
										}
									} finally {
										if (_didIteratorError) {
											throw _iteratorError;
										}
									}
								}

								this.q = q;
								break;
							case URL_PARAMS.start:
								this.start = values[0];
								break;
							case URL_PARAMS.rows:
								this.rows = values[0];
								break;
						}
					}
				}
			}]);

			return Search;
		}();

		/**
   *
   */

		var UriManager = function () {
			function UriManager(url, title, i18n) {
				_classCallCheck(this, UriManager);

				this.observers = {};
				this.pathname = url;
				this.init();
				this.separator = URL_PARAMS.separator;
				this.title = title;
				this.i18n = i18n;
			}

			_createClass(UriManager, [{
				key: 'i18n',
				value: function i18n() {
					if (this.i18n != null && this.i18n != 'undefined') {
						$('title').attr('data-i18n', this.i18n).i18n();
					}
				}
			}, {
				key: 'init',
				value: function init() {
					this.observers = {};
					for (var key in UriManager.components) {
						this.values[key] = [];
					}
				}
			}, {
				key: 'manage',
				value: function manage(key, object, params, defaultValue) {
					if (!(key in this.observers)) {
						this.observers[key] = {
							observer: [object],
							value: null,
							param: params
						};
					} else {
						this.observers[key].observer.push(object);
					}

					if (defaultValue != undefined && this.getParamValues(key).length == 0) {
						this.setValue(key, defaultValue);
					}
				}
			}, {
				key: 'setValue',
				value: function setValue(key, value) {
					if (key in this.observers) {
						if ($.isArray(value) && value.length == 0) {
							value = null;
						}
						this.observers[key].value = value;
					}
				}
			}, {
				key: 'removeAll',
				value: function removeAll() {
					for (var k in this.observers) {
						this.observers[k].value = null;
					}
				}
			}, {
				key: 'refreshUri',
				value: function refreshUri() {
					var url = this.pathname;
					var params = '';
					var listeParams = $.urlParamsList();
					var anchor = window.location.hash;
					for (var k in this.observers) {
						if (this.observers[k].value != null) {
							if (!params.isEmpty()) {
								params += '&';
							}
							params += this.getBookmarkParam(k);
						}
						delete listeParams[this.observers[k].param];
					}
					if (!params.isEmpty() > 0) {
						url += '?';
						url += params;
					}

					// rajout des paramètre ad hoc.
					var length = Object.keys(listeParams).length,
					    index = 0;
					if (length > 0) {
						if (params.isEmpty()) url += '?';else url += '&';
						for (var k in listeParams) {
							url += k;
							url += '=';
							url += listeParams[k];

							if (index < length - 1) url += '&';
							index++;
						}
					}
					if (anchor !== '') {
						url += anchor;
					}
					if (url !== window.location) {
						History.replaceState({ state: 'treeEvent' }, this.title, url);
					}
				}
			}, {
				key: 'reload',
				value: function reload() {
					var ctx = this;
					for (var k in this.observers) {
						var contenu = $.urlParam(this.observers[k].param);
						if (contenu != null) {
							//
							var split = contenu.split(this.separator);
							// rechargement
							var tableau = split.length > 1 ? split : [contenu];
							this.observers[k].value = [];
							for (var i = 0; i < tableau.length; i++) {
								this.observers[k].value.push(decodeURIComponent(tableau[i]));
							}

							$(this.observers[k].observer).each(function () {
								if (typeof this.reloadBookmark_ == 'function') {
									this.reloadBookmark_.call(this, k, ctx.observers[k].value);
								}
							});
						}
					}
				}
			}, {
				key: 'getBookmarkParam',
				value: function getBookmarkParam(k) {
					var params = '';
					if (k in this.observers && this.observers[k].value != null) {
						if (Array.isArray(this.observers[k].value)) {
							params += this.observers[k].param;
							params += '=';
							for (var i = 0; i < this.observers[k].value.length; i++) {
								params += encodeURIComponent(this.observers[k].value[i]);
								if (i < this.observers[k].value.length - 1) {
									params += this.separator;
								}
							}
						} else {
							params += this.observers[k].param;
							params += '=';
							params += encodeURIComponent(this.observers[k].value);
						}
					}

					return params;
				}
			}, {
				key: 'getBookmarkParams',
				value: function getBookmarkParams(params) {
					var href = '',
					    ctx = this,
					    first = true;

					if ($.isArray(params)) {
						params.forEach(function (e) {
							var param = ctx.getBookmarkParam(e);
							if (!String.isBlank(param)) {
								if (first) {
									first = false;
								} else {
									href += '&';
								}
								href += param;
							}
						});
					}

					return href;
				}
			}, {
				key: 'setPathname',
				value: function setPathname(pathname) {
					this.pathname = pathname;
				}
			}, {
				key: 'setTitle',
				value: function setTitle(title) {
					this.title = title;
				}
			}, {
				key: 'getValues',
				value: function getValues(k) {
					var values = null;
					if (k in this.observers && this.observers[k].value != null) {
						values = this.observers[k].value;
					}

					return values;
				}
			}, {
				key: 'getParamValues',
				value: function getParamValues(name) {
					var value = $.urlParam(name),
					    values = [];
					if (value != null) {
						var split = value.split(UriManager.separator);
						values = split.length > 1 ? split : [value];
					}
					return values;
				}
			}]);

			return UriManager;
		}();

		UriManager.separator = '+';

		/* 
   * Fournit des TouteZones web4g selon params = { niveau : 'code', codes : ['code, code, ... ] }
   * Permet de recupérer des libellé propre pour affichage, à partir des codes figurant dans les url.
   */

		var ZoneProvider = function () {
			function ZoneProvider() {
				_classCallCheck(this, ZoneProvider);

				this.cache = [];
				this.local = {
					FE: { code: "1", niveau: { code: "FE", libelle: "France" }, libelle: "France", libelleEn: "France" },
					METRO: { code: "1", niveau: { code: "METRO", libelle: "France métropolitaine" }, libelle: "France métropolitaine", libelleEn: "France métropolitaine" },
					FRANCE: { code: "1", niveau: { code: "FRANCE" }, libelle: "France", libelleEn: "France" },
					INTER: { code: "1", niveau: { code: "INTER", libelle: "International" }, libelle: "International", libelleEn: "International" },
					ICQ: { code: "1", niveau: { code: "ICQ" }, libelle: "Iris, Carreaux, Quartiers", libelleEn: "Sub municipal : IRIS, Squares, District" },
					COMPRD: { code: "1", niveau: { code: "COMPRD" }, libelle: "Toutes les régions ou tous les départements", libelleEn: "All regions and departments" },
					TOUTES_COMMUNE: { code: "1", niveau: { code: "TOUTES_COMMUNE" }, libelle: "Toutes les communes", libelleEn: "All municipalities" }
				};
			}

			_createClass(ZoneProvider, [{
				key: 'getLibelle',
				value: function getLibelle(zone, langue) {
					console.log(zone);
					switch (langue) {
						default:
						case 'fr':
							return zone.libelleFr;
						case 'en':
							return zone.libelleEn;
					}
				}
			}, {
				key: 'get',
				value: function get(niveau, codes, callback, _error) {
					var params = { niveau: niveau, codes: codes };

					if (typeof this.local[niveau] != "undefined") {
						callback.call(this, [this.local[niveau]]);
					} else {
						$.ajax({
							url: encodeURI(contextPath + "/" + langue + "/solr/zones"),
							type: "POST",
							data: JSON.stringify(params),
							contentType: 'application/json; charset=utf-8',
							dataType: 'json',
							async: false,
							success: function success(data) {
								if ($.isFunction(callback)) {
									callback.call(this, data);
								}
							},
							error: function error(data) {
								if ($.isFunction(_error)) {
									_error.call(this, data);
								}
							}
						});
					}
				}
			}, {
				key: 'tncc',
				value: function tncc(code) {
					var article;
					switch (code) {
						case "2":
							article = "Le ";break;
						case "3":
							article = "La ";break;
						case "4":
							article = "Les ";break;
						case "5":
							article = "L'";break;
						case "6":
							article = "Aux ";break;
						case "7":
							article = "Las ";break;
						case "8":
							article = "Los ";break;
						default:
							article = "";
					}
					return article;
				}
			}, {
				key: 'deferred',
				value: function deferred(params) {
					return $.ajax({
						url: encodeURI(contextPath + "/" + langue + "/solr/zones"),
						type: "POST",
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json'
					});
				}
			}, {
				key: 'deferreds',
				value: function deferreds(params, callback, error) {
					var when = new Array();

					for (var i = 0; i < params.length; i++) {
						if (params[i].niveau && params[i].codes) {
							when.push(this.deferred(params[i]));
						}
					}

					$.when.apply(this, when).then(function () {
						var response = [];
						if (when.length == 1) {
							for (var j = 0; j < arguments[0].length; j++) {
								response.push(arguments[0][j]);
							}
						} else {
							for (var i = 0; i < arguments.length; i++) {
								for (var j = 0; j < arguments[i][0].length; j++) {
									response.push(arguments[i][0][j]);
								}
							}
						}
						callback.call(this, response);
					}).fail(function () {});
				}
			}, {
				key: 'isZoneNiveau',
				value: function isZoneNiveau(code) {
					return code in this.local;
				}
			}, {
				key: 'enrichirZones',
				value: function enrichirZones(params) {
					var paramsEx = $.extend({ zones: [], success: function success() {}, fail: function fail() {} }, params);
					$.ajax({
						url: encodeURI(contextPath + "/" + langue + "/solr/zones/liste"),
						type: "POST",
						data: JSON.stringify(paramsEx.zones),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json'
					}).then(function () {
						paramsEx.success.call(this, arguments[0]);
					}).fail(function () {
						paramsEx.fail.call(this, arguments);
					});
				}
			}], [{
				key: 'getInstance',
				value: function getInstance() {
					return ZoneProvider.instance;
				}
			}]);

			return ZoneProvider;
		}();

		ZoneProvider.instance = new ZoneProvider();

		var SuggesterCOG = function SuggesterCOG(params) {
			var ctx = this;
			Tools.makeObservable(this);
			this.params = $.extend({
				niveaux: [],
				pathnameCOG: contextPath + '/' + langue + '/metadonnees/geographie-administrative/cog/suggestion'
			}, params);

			this.mapNiveaux = {};
			this.params.niveaux.forEach(function (n) {
				ctx.mapNiveaux[n.code] = n;
			});

			this.niveauCourant = '[NULL]';
			this.filters = [];

			/* */
			this.createSuggester = function () {
				this.$searchbar.autocompleter({
					create: function create() {
						$(this).data('ui-autocomplete')._renderMenu = function (ul, items) {
							ctx.dom.getSuggesterBody(ul, items, this);
						};
						$(this).data('ui-autocomplete')._renderItem = function (ul, item) {
							return ctx.options[item.value].$li.data('item.autocomplete', item).appendTo(ul);
						};
					},

					select: function select(event, ui) {
						event.preventDefault();
						event.stopImmediatePropagation();
						ctx.$searchbar.val('');
						if (ctx.isContenantCommune(ctx.niveauCourant) && ctx.contenant) {
							ctx.selectOptionCommuneContenant(ctx.options[ui.item.value]);
						} else {
							ctx.selectOption(ctx.options[ui.item.value]);
						}

						return false;
					},

					source: function source(request, response) {
						if (!String.isBlank(request.term)) {
							ctx.$wait.attr('class', 'waiting-on');
							ctx.request = request.term.trim();

							var sortFields = [];
							if (!$.isNumeric(ctx.request)) {
								sortFields = [{ field: 'geographie_nccenr_s', order: 'asc' }];
							}
							var ajaxParams = {};
							if (ctx.isContenantCommune(ctx.niveauCourant) && ctx.contenant) {
								ajaxParams = JSON.stringify({
									q: ctx.request,
									filters: [{ field: 'geographie_codeNiveau', values: ['COM'] }, { field: 'geographie_active', values: [true] }, { field: 'geographie_niveauxContenant_ss', values: [ctx.niveauCourant] }],
									sortFields: sortFields
								});
							} else {
								ajaxParams = JSON.stringify({ q: ctx.request, filters: ctx.filters, sortFields: sortFields });
							}

							$.ajax({
								url: encodeURI(ctx.params.pathnameCOG),
								type: 'POST',
								data: ajaxParams,
								contentType: 'application/json; charset=utf-8',
								dataType: 'json'
							}).done(function (suggestions) {
								ctx.$wait.attr('class', 'waiting-off');
								ctx.changeSuggester(suggestions, response);
							}).fail(function () {
								console.log(arguments);
								ctx.$wait.attr('class', 'waiting-off');
							});
						}
					},

					minLength: 1
				});
			};

			this.isContenantCommune = function (codeNiveau) {
				return codeNiveau in SUGGEST_NIVEAUX && SUGGEST_NIVEAUX[codeNiveau].isContenantCommune;
			};

			/* */
			this.createSelectNiveaux = function () {
				if (typeof this.$select != 'undefined') {
					this.$select.selectric('destroy').remove();
				}
				this.$select = $('<select>').append($('<option>', { value: '[NULL]', 'data-i18n': 'facettes.niveau-geo.tous-niveaux' }).text('Tous les niveaux géographiques')).i18n().val(this.niveauCourant).change(function (e) {
					ctx.changeNiveau($(this).val());
				});
				this.params.niveaux.sort(function (a, b) {
					return a.ordre == b.ordre ? 0 : a.ordre < b.ordre ? -1 : 1;
				});
				this.params.niveaux.forEach(function (n) {
					if (n.principal && n.fo) {
						var libelleLangue;
						switch (langue) {
							default:
							case 'fr':
								libelleLangue = n.libelle;
								break;
							case 'en':
								libelleLangue = n.libelleEn;
								break;
						}
						var $option = $('<option>', { value: n.code }).text(libelleLangue);
						ctx.$select.append($option);
					}
				});
				this.$containerNiveaux.append(this.$select);
				this.$select.combobox();
			};

			/* */
			this.changeContenant = function (type) {
				if (type == 'contenant') {
					this.contenant = true;
				} else {
					this.contenant = false;
				}
			};

			/* */
			this.getNiveauCourant = function () {
				return this.niveauCourant;
			};

			/* */

			this.changeNiveau = function (niveau) {
				this.niveauCourant = niveau;
				if (niveau == '[NULL]') {
					this.filters = [];
				} else {
					this.filters = [{ field: 'geographie_codeNiveau', values: [niveau] }];
				}

				if (ctx.isContenantCommune(niveau)) {
					this.$contenant.show();
				} else {
					this.$contenant.hide();
				}
			};

			/* */
			this.selectOption = function (option) {
				this.notifyAll('selectOption', option);
			};

			/* */
			this.selectOptionCommuneContenant = function (option) {
				this.notifyAll('selectOptionCommuneContenant', option);
			};

			/* */
			this.ajouterSelection = function (ficheCOG) {
				console.log(ficheCOG);
				var domGenerator = new DomGenerator(),
				    zone = ficheCOG.touteZone,
				    libelle = '<span class=\'libelle-geo\'>' + zone.niveau.libelle + '</span> : ' + zone.libelle,
				    $li = domGenerator.getNode(zone.niveau.code + zone.code, zone.niveau.libelle + ' : ' + zone.libelle, 0, false).show(),
				    ckn = new CheckboxNode($li),
				    key = ficheCOG.id;
				domGenerator.$data.$li = $li;
				$.data($li.get()[0], domGenerator.$data);
				ckn.toggleOn();
				this.$selections.append($li);
				$li.click(function (e) {
					ctx.supprimerSelection(ficheCOG);
					e.preventDefault();
				});
				this.$liSelections[ficheCOG.id] = { $li: $li };
			};

			/* */
			this.supprimerSelection = function (ficheCOG) {
				this.$liSelections[ficheCOG.id].$li.remove();
				delete this.$liSelections[ficheCOG.id];
				this.notifyAll('removeOption', ficheCOG);
			};

			/* */
			this.pulseSelection = function (ficheCOG) {
				if (ficheCOG.id in this.$liSelections) {
					this.$liSelections[ficheCOG.id].$li.effect('bounce', { easing: 'easeInCubic' });
				}
			};

			/* */
			this.changeSuggester = function (suggestions, response) {
				var tuples = new Array();
				this.options = {};
				this.doublons = {};

				if (!String.isBlank(suggestions.query)) {
					suggestions.documents.forEach(function (e) {
						var key = e.touteZone.niveau.code + e.touteZone.code + e.touteZone.libelle;
						if (!(key in ctx.options)) {
							tuples.push({ label: e.touteZone.libelle, value: key });
							ctx.options[key] = {};
							ctx.options[key].libelle = e.touteZone.libelle;
							ctx.options[key].value = e;
							ctx.options[key].$li = ctx.dom.getSuggesterOption(e.touteZone.niveau.code, e.touteZone.libelle, e.touteZone.code, -1, ctx.request);
						}
					});
				}
				response(tuples);
			};

			/* */
			this.reset = function () {
				for (var k in this.$liSelections) {
					this.$liSelections[k].$li.remove();
				}
				this.notifyAll('suggester-reset', {});
			};

			/* Attributs */
			this.$searchbar = $('#geo-searchbar');
			this.$wait = $('#geo-waiting');
			this.$contenant = $('#geo-contenant');
			this.$containerNiveaux = $('#geo-niveau');
			this.$contenant.radioGroupe({
				callback: function callback(who) {
					ctx.changeContenant(ctx.$contenant.getValue());
				}
			});
			$('#geographie').parent().find('.raz').click(function () {
				ctx.reset();
			});
			this.$selections = $('<ul>', {
				class: 'arbre-facette',
				role: 'group'
			});
			$('#geo-selections').append(this.$selections);
			this.$liSelections = {};
			this.$contenant.hide();
			this.contenant = false;
			this.dom = new DomGenerator();

			this.createSelectNiveaux();
			this.createSuggester();
		};

		var SuggesterGeographie = function () {

			var params = {};

			return function (params) {
				params = $.extend({ debug: false, idProduit: "-1", showSelection: false, limiteSelections: 3, exclusions: [], diffusion: false }, params);
				/* attributs */
				var ctx = this;
				Tools.makeObservable(this);
				this.idProduit = params.idProduit;
				this.document = {};
				this.showSelection = params.showSelection;
				this.exclusions = params.exclusions;
				this.provider = new ZoneProvider();
				this.limiteSelections = params.limiteSelections;
				this.diffusion = params.diffusion;
				this.observers = [];
				this.options = {};
				this.doublons = {};
				this.niveaux;
				this.niveauCourant = "[NULL]";
				this.suggestionsContenant = {};
				this.nbSelections = 0;
				this.niveauxFrance = [];

				this.dom = new DomGenerator();
				this.$searchbar = $("#geo-searchbar");
				this.$wait = $("#geo-waiting");
				this.$selections = $("<ul>", {
					"class": "arbre-facette",
					"role": "group"
				});
				this.$liSelections = {};
				if (this.exclusions.length > 0) {
					$(this.exclusions).each(function () {
						ctx.excludeZone(this);
					});
				}
				$("#geo-selections").append(this.$selections);

				this.$contenant = $("#geo-contenant");
				this.$contenant.radioGroupe({
					callback: function callback(who) {
						ctx.typeRecherche = ctx.$contenant.getValue();
						ctx.initialiseSuggester(ctx.$select.val());
						ctx.notifyAll("typeRecherche", { value: ctx.typeRecherche });
					}
				});
				this.$contenant.hide();
				this.typeRecherche = this.$contenant.getValue();

				/* méthodes */

				/* */
				this.start = function (niveaux) {
					this.$searchbar.autocompleter({
						create: function create() {
							$(this).data("ui-autocomplete")._renderMenu = function (ul, items) {
								ctx.dom.getSuggesterBody(ul, items, this);
							};
							$(this).data("ui-autocomplete")._renderItem = function (ul, item) {
								return ctx.options[item.value].$li.data("item.autocomplete", item).appendTo(ul);
							};
						},

						select: function select(event, ui) {
							event.preventDefault();
							event.stopImmediatePropagation();
							ctx.selectNiveau("[NULL]");
							ctx.$searchbar.val("");
							ctx.selectOption(ctx.options[ui.item.value]);

							return false;
						},

						minLength: 1
					});

					var callback = function callback(niveaux) {
						ctx.niveaux = {};
						$(niveaux).each(function () {
							ctx.niveaux[this.code] = this;
							ctx.niveaux[this.code].count = 0;
						});
						ctx.refreshSelect();
					};
					if (typeof niveaux == "undefined") {
						$.getJSON(contextPath + "/" + langue + "/solr/niveauxGeographiques").done(function (data) {
							callback.call(this, data);
						}).fail(function () {
							console.log(arguments);
						});
					} else {
						callback.call(this, niveaux);
					}
					this.initialiseSuggester("[NULL]");
				};

				/* fonctionnement par défaut pour la page intermédiaire et le résumé stat : permet de valider les niveaux */
				this.search = function (callback) {
					// validation des choix fait en page précédante.
					var paramGeo = $.urlParam(URL_PARAMS.geographie),
					    queries = [];
					paramGeo = paramGeo == null ? [] : paramGeo.split(URL_PARAMS.separator);
					$(paramGeo).each(function () {
						queries.push({ query: "codeGeo:" + this.split('-').join('') });
					});

					var filters = [];
					filters.push({ field: "id", value: this.idProduit });
					if (this.diffusion) {
						filters.push({ field: "diffusion", value: true });
					}
					params = { // objet js au format de l'objet java
						q: "*:*",
						start: 0,
						filters: filters,
						facetsQuery: queries,
						rows: 1
					};

					$.ajax({
						url: encodeURI(contextPath + "/" + langue + "/solr/consultation"),
						type: "POST",
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: function success(response) {
							ctx.paramsCount = {};
							for (var k in response.facetsQuery) {
								var id = k.split(':')[1];
								ctx.paramsCount[id] = response.facetsQuery[k];
							}
							ctx.document = response.documents[0];
							callback.call(ctx, response);
							ctx.notifyAll("refresh", {});
						},
						error: function error(data) {
							if (params.debug) {
								console.err("Impossible de charger les niveaux géographiques.");
							}
						}
					});
				};

				/* */
				this.createSelect = function (niveaux) {
					if (typeof this.$select != "undefined") {
						this.$select.selectric('destroy').remove();
					}
					this.$select = $("<select>").append($("<option>", { value: "[NULL]", "data-i18n": "facettes.niveau-geo.tous-niveaux" }).text("Tous les niveaux géographiques")).i18n().val(this.niveauCourant).change(function (e) {
						ctx.changeNiveau();
					});
					niveaux.sort(function (a, b) {
						return a.ordre == b.ordre ? 0 : a.ordre < b.ordre ? -1 : 1;
					});
					$(niveaux).each(function () {
						if (this.principal && this.fo) {
							var libelleLangue;
							switch (langue) {
								default:
								case 'fr':
									libelleLangue = this.libelle;
									break;
								case 'en':
									libelleLangue = this.libelleEn;
									break;
							}
							var $option = $("<option>", { value: this.code }).text(libelleLangue);
							ctx.$select.append($option);
							$option.attr("data-count", this.count);
						}
					});
					$("#geo-niveau").append(this.$select);
					this.selectNiveau(this.niveauCourant);

					this.$select.combobox({
						optionsItemBuilder: function optionsItemBuilder(itemData, option) {
							var libelle = itemData.text,
							    comptage = "(" + $(option).attr("data-count") + ")";
							var $a = $("<a>", { "class": "libelle" }).text(libelle);
							if (itemData.value == "[NULL]") {
								comptage = "";
								$a.text("Tous les niveaux géographiques");
								$a.attr("data-i18n", "facettes.niveau-geo.tous-niveaux");
								$a.i18n();
							}

							return $("<p>").append($("<div>", { "class": "contenu-branche" }).append($a).append($("<span>", { "class": "facette-nombre" }).text(comptage))).html();
						}
					});
				};

				/* fonction qui rafraichit les option du select avec un retour solr */
				this.refreshSelect = function (response) {
					var callback = function callback(solrResponse) {
						var niveaux = new Array();
						ctx.niveauxFrance = [];
						for (var i = 0; i < solrResponse.facetsField.length; i++) {
							if (solrResponse.facetsField[i].name == "niveauGeo") {
								for (var code in solrResponse.facetsField[i].data) {
									if (this.niveaux[code]) {
										this.niveaux[code].count = solrResponse.facetsField[i].data[code];
										if (this.niveaux[code].count != 0) {
											niveaux.push(this.niveaux[code]);
											if (code === 'METRO') {
												ctx.niveauxFrance.push(this.niveaux[code]);
											} else if (code === 'FE') {
												this.niveaux[code].libelle = 'France';
												this.niveaux[code].libelleEn = 'France';
												ctx.niveauxFrance.push(this.niveaux[code]);
											}
										}
									}
								}
							}
						}
						this.createSelect(this.filterNiveaux(niveaux));
					};

					if (typeof response == "undefined") {
						this.search(callback);
					} else {
						callback.call(this, response);
					}
				};

				/* */
				this.filterNiveaux = function (niveaux) {
					var controllerMame = $('#controller-name').text();
					var filtered = [];
					niveaux.forEach(function (e) {
						if (e.code !== 'FE' && e.code !== 'METRO') {
							filtered.push(e);
						}
					});
					// if(controllerMame === 'DdlController' || controllerMame === 'ComparaisonController'){
					// 	var isFE = false, isMETRO;
					// 	niveaux.forEach(function(e) {
					// 		if(e.code === 'FE' && e.count > 0){
					// 			isFE = true;
					// 		} else if(e.code === 'METRO' && e.count > 0){
					// 			isMETRO = true;
					// 		}
					// 	});
					// filtered = 	niveaux.filter(function (e) {
					// 		if(e.code === 'FE'){
					// 			return false;
					// 		} else if(e.code === 'FRANCE') {
					// 			return isFE;
					// 		} else if(e.code === 'METRO'){
					// 			return isMETRO && !isFE;
					// 		} else {
					// 			return true;
					// 		}
					// 	});
					// } else {
					// 	filtered = niveaux.filter(function(e){
					// 		return e.code !== 'FE' && e.code !== 'METRO';
					// 	});
					// }

					return filtered;
				};

				/* */
				this.refreshSelection = function (facetQuery) {
					for (var k in facetQuery) {
						var tmp = k.split(":"),
						    count = parseInt(facetQuery[k]),
						    selection = this.$liSelections[tmp[1]];

						if (count > 0 && selection != null) {
							selection.$compteur.empty();
							selection.$compteur.append("(" + count + ")");
						}
					}
				};

				/* */
				this.initialiseSuggester = function (niveau) {
					if (niveau in SUGGEST_NIVEAUX) {
						if (SUGGEST_NIVEAUX[niveau].isSuggestion) {
							if (this.typeRecherche == "contenant") {
								this.suggerer([SUGGEST_FIELDS.suggestContenantCommune.name], [SUGGEST_NIVEAUX[niveau].fields[0]]);
							} else if (this.typeRecherche == "nom") {
								this.suggerer(SUGGEST_NIVEAUX[niveau].fields);
							}

							if (SUGGEST_NIVEAUX[niveau].isContenantCommune) {
								this.$contenant.show();
							} else {
								this.$contenant.hide();
							}
							this.$searchbar.prop("disabled", false);
						} else {
							this.selectNiveau("[NULL]");
						}
					} else if (niveau == "[NULL]") {
						this.suggerer(SUGGEST_FIELDS.liste);
						this.$searchbar.prop("disabled", false);
						this.$contenant.hide();
					} else {
						if (console) {
							console.log("niveau inconnu pour le suggester géographique : " + niveau);
						}
					}
				};

				/* */
				this.suggerer = function (fields, fieldsPrincipaux) {
					this.$searchbar.autocomplete({
						source: function source(request, response) {
							if (!request.term.isEmpty()) {
								ctx.$wait.attr("class", "waiting-on");
								var params = ctx.getSuggestParams();

								/*Si on a une deuxième liste de fields, c'est pour filtrer lorsqu'on utilise contenantCommune*/
								if (fieldsPrincipaux !== undefined) {
									var index = 0;
									while (index < fieldsPrincipaux.length) {
										var field = fieldsPrincipaux[index];
										var values = ["*"];
										var filter = { field: field, values: values };
										params.filters.push(filter);
										index++;
									}
								}
								console.log(params.filters);
								params.prefix = request.term;
								params.fields = fields;

								$.ajax({
									url: encodeURI(contextPath + "/" + langue + "/solr/suggestion"),
									type: "POST",
									data: JSON.stringify(params),
									contentType: 'application/json; charset=utf-8',
									dataType: 'json'
								}).done(function (suggestions) {
									ctx.$wait.attr("class", "waiting-off");
									ctx.changeSuggester(suggestions, response);
								}).fail(function () {
									console.log(arguments);
									ctx.$wait.attr("class", "waiting-off");
								});
							}
						}
					});
				};

				/* */
				this.getSuggestParams = function () {
					return { // objet js au format de l'objet java
						q: SOLR_PARAMS.defaultQuery,
						filters: [{ field: "id", value: this.idProduit }]
					};
				};

				/* */
				this.checkSuggestionSimple = function (facet, field) {
					var tuples = [];
					for (var d in facet.data) {
						var sub = d.split("!"),
						    value = sub[2] + " (" + sub[1] + ")",
						    niv = typeof field.niveau != "undefined" ? field.niveau : sub[1];

						tuples.push({ label: sub[0], value: value });
						this.options[value] = { field: facet.name, value: sub[1], count: facet.data[d], libelle: sub[2] };
						this.options[value].$li = this.dom.getSuggesterOption(niv, sub[2], sub[1], facet.data[d], facet.prefix);
						this.options[value].niveau = niv;
						this.options[value].doublon = false;
					}

					return tuples;
				};

				/* */
				this.checkSuggestionContenant = function (facet) {
					var tuples = [];
					for (var d in facet.data) {
						var sub = d.split('!'),
						    value = sub[2] + " (" + sub[1] + ")",
						    prefix = sub[0].trim(),
						    key = sub[1] + sub[2];

						var data = this.suggestionsContenant[key] === undefined ? {} : this.suggestionsContenant[key];

						for (var i = 1; i < sub.length; i += 2) {
							var tmp = sub[i].split('-');
							if (!(tmp[0] in data)) {
								data[tmp[0]] = { code: tmp[1], libelle: sub[i + 1] };
							}
						}
						this.suggestionsContenant[key] = data;

						if (this.niveauCourant in data) {
							if (key in this.options) {
								this.options[key].libelle = data[this.niveauCourant].libelle;
								this.options[key].count = facet.data[d] + this.options[key].count;
								this.options[key].value = data[this.niveauCourant].code;
								this.options[key].$li = this.dom.getSuggesterOption("COM", data.COM.libelle, data.COM.code, facet.data[d], facet.prefix);
							} else {
								tuples.push({ label: sub[0].trim(), value: key });
								this.options[key] = { field: facet.name, value: data[this.niveauCourant].code, count: facet.data[d], libelle: data[this.niveauCourant].libelle };
								this.options[key].$li = this.dom.getSuggesterOption("COM", data.COM.libelle, data.COM.code, facet.data[d], facet.prefix);
								this.options[key].niveau = this.niveauCourant;
							}
						}
					}

					return tuples;
				};

				/* */
				this.changeSuggester = function (suggestions, response) {
					var tuples = new Array(),
					    prefix = suggestions.prefix;
					this.options = {};
					this.doublons = {};

					for (var k in SUGGEST_FIELDS) {
						if (SUGGEST_FIELDS[k].name in suggestions.facets) {
							var facet = suggestions.facets[SUGGEST_FIELDS[k].name],
							    prop = [];
							facet.prefix = prefix;
							if (SUGGEST_FIELDS[k].name == SUGGEST_FIELDS.suggestContenantCommune.name) {
								prop = this.checkSuggestionContenant(facet);
							} else {
								prop = this.checkSuggestionSimple(facet, SUGGEST_FIELDS[k]);
							}

							$(prop).each(function () {
								tuples.push(this);
							});
						}
					}
					tuples = tuples.sort(function (a, b) {
						var value = 0;
						if (a.label < b.label) value = -1;else if (a.label > b.label) value = 1;
						return value;
					}).slice(0, SUGGEST_PARAMS.size);
					response(tuples);
				};

				this.selectOption = function (suggestion) {
					if (suggestion != null) {
						var zone = { code: suggestion.value, niveau: { code: suggestion.niveau }, libelle: suggestion.libelle };
						this.renseignerLibelleNiveau(suggestion.niveau, zone.niveau);
						if (this.provider.isZoneNiveau(zone.niveau.code)) {
							zone = this.provider.local[zone.niveau.code];
							zone.isZoneNiveau = true;
						}
						if (!this.isSelection(zone)) {
							this.afficherSelection(zone);
							this.notifyAll("suggestiongeo", zone);
						} else {
							this.$liSelections[zone.niveau.code + zone.code].$li.effect("bounce", { easing: "easeInCubic" });
						}
					}
				};

				/* */
				this.afficherSelection = function (zone) {
					if (this.showSelection) {
						var libelleGeo;
						var zoneLibelle;
						var niveauLibelle;
						switch (langue) {
							default:
							case 'fr':
								zoneLibelle = zone.libelle;
								niveauLibelle = zone.niveau.libelle;
								break;
							case 'en':
								zoneLibelle = zone.libelleEn;
								niveauLibelle = zone.niveau.libelleEn;
								break;
						}
						if (this.provider.isZoneNiveau(zone.niveau.code)) {
							var libelleDuNiveau = zone.isZoneNiveau != undefined ? zoneLibelle : niveauLibelle;
							libelleGeo = libelleDuNiveau;
						} else {
							libelleGeo = '<span class=\'libelle-geo\'>' + niveauLibelle + '</span> : ' + zone.libelle;
						}
						var domGenerator = new DomGenerator(),
						    libelle = libelleGeo,
						    $li = domGenerator.getNode(zone.niveau.code + zone.code, libelle, 0, false).show(),
						    ckn = new CheckboxNode($li),
						    key = zone.niveau.code + zone.code;
						domGenerator.$data.$li = $li;
						$.data($li.get()[0], domGenerator.$data);
						ckn.toggleOn();
						this.$selections.append($li);
						$li.click(function (e) {
							e.preventDefault();
							e.stopImmediatePropagation();
							$(this).remove();
							ctx.supprimerSelection(zone);
							ctx.initialiseSuggester("[NULL]");
							ctx.notifyAll("selection", zone);
						});
						this.$liSelections[key] = $.extend(domGenerator.$data, { dom: $li });
						this.nbSelections++;
					}
				};

				/* */
				this.supprimerSelection = function (zone) {
					if (this.showSelection && this.isSelection(zone)) {
						this.$liSelections[zone.niveau.code + zone.code].dom.remove();
						delete this.$liSelections[zone.niveau.code + zone.code];
						this.nbSelections--;
					}
				};

				/* */
				this.isSelection = function (zone) {
					return this.showSelection && zone.niveau.code + zone.code in this.$liSelections;
				};

				/* */
				this.selectNiveau = function (niveau) {
					this.$select.val(niveau);
					this.niveauCourant = niveau;
					//			this.$select.selectric('refresh');
					this.initialiseSuggester(niveau);
				};

				/* */
				this.changeNiveau = function () {
					var niveau = this.$select.val();
					this.niveauCourant = this.$select.val();
					this.initialiseSuggester(niveau);
					if (this.provider.isZoneNiveau(niveau)) {
						var zone = this.provider.local[niveau];
						zone.isZoneNiveau = true;
						if (!this.isSelection(zone)) {
							this.afficherSelection(zone);
							this.notifyAll("nivgeo", zone);
						}
					} else {
						this.notifyAll("nivgeo", niveau);
					}
				};

				/* */
				this.reloadBookmark_ = function (name, values) {},

				/* */
				this.disabled = function (state) {
					this.$searchbar.prop("disabled", state);
					if (this.$select) {
						this.$select.prop("disabled", state);
						//				this.$select.selectric('refresh');
					}
				};

				/* */
				this.excludeZone = function (zone) {
					if (zone.niveau.code && zone.code) {
						this.$liSelections[zone.niveau.code + zone.code] = { dom: null };
					}
				};

				/* */
				this.reset = function () {
					for (var k in this.$liSelections) {
						$(this.$liSelections[k].dom).remove();
					};
					this.$liSelections = {};
					this.selectNiveau("[NULL]");
				};

				/* */
				this.getLibelleNiveau = function (code) {
					var value = null;
					if (code in this.niveaux) {
						value = this.niveaux[code].libelle;
					}
					return value;
				};

				this.renseignerLibelleNiveau = function (code, niveau) {
					if (code in this.niveaux) {
						niveau.libelle = this.niveaux[code].libelle;
						niveau.libelleEn = this.niveaux[code].libelleEn;
					}
				};

				this.getNiveauxFrance = function () {
					return this.niveauxFrance;
				};
			};
		}();

		var CheckboxNode = function (_NODE$FacetteNode) {
			_inherits(CheckboxNode, _NODE$FacetteNode);

			function CheckboxNode($li) {
				_classCallCheck(this, CheckboxNode);

				var _this2 = _possibleConstructorReturn(this, (CheckboxNode.__proto__ || Object.getPrototypeOf(CheckboxNode)).call(this));

				_this2.$li = $li;
				return _this2;
			}

			_createClass(CheckboxNode, [{
				key: 'toggleOn',
				value: function toggleOn() {
					var $data = this.$li.data();
					$data.$checkbox.attr("class", "checkbox-checked");
					$data.$checkbox.attr("src", contextPath + "/static/img/checkbox-checked.svg");
					$data.$checkbox.attr("alt", "Coché : ");
					$data.$checkbox.attr("aria-checked", true);
					this.$li.attr("data-active", true);
					if (typeof $data.$children != "undefined") {
						this.$li.attr("aria-expanded", true);
						$data.$children.show();
					}
				}
			}, {
				key: 'toggleOff',
				value: function toggleOff() {
					var $data = this.$li.data();
					$data.$checkbox.attr("class", "checkbox-unchecked");
					$data.$checkbox.attr("src", contextPath + "/static/img/checkbox-unchecked.svg");
					$data.$checkbox.attr("alt", "Non coché : ");
					$data.$checkbox.attr("aria-checked", false);
					this.$li.attr("data-active", false).attr("aria-expanded", false);
					if (typeof $data.$children != "undefined") {
						this.$li.attr("aria-expanded", false);
						$data.$children.hide();
					}
				}
			}, {
				key: 'isActive',
				value: function isActive() {
					return this.$li.is("[data-active=true]");
				}
			}, {
				key: 'setActive',
				value: function setActive(state) {
					this.$data.$a.attr("aria-checked", state);
					this.$li.attr("data-active", state);
				}
			}]);

			return CheckboxNode;
		}(NODE.FacetteNode);

		var ChevronNode = function (_NODE$FacetteNode2) {
			_inherits(ChevronNode, _NODE$FacetteNode2);

			function ChevronNode($li) {
				_classCallCheck(this, ChevronNode);

				var _this3 = _possibleConstructorReturn(this, (ChevronNode.__proto__ || Object.getPrototypeOf(ChevronNode)).call(this));

				_this3.$li = $li;
				_this3.$data = $li.data();
				return _this3;
			}

			_createClass(ChevronNode, [{
				key: 'toggleOn',
				value: function toggleOn() {
					this.$li.attr("data-active", true).attr("aria-expanded", true);
					this.$data.$a.attr("class", "libelle-chevron-ouvert");
					if (this.$data.$children) {
						this.$data.$children.show();
					}
				}
			}, {
				key: 'toggleOff',
				value: function toggleOff() {
					this.$li.attr("data-active", false).attr("aria-expanded", false);
					this.$data.$a.attr("class", "libelle-chevron-ferme");
					if (this.$data.$children) {
						this.$data.$children.hide();
					}
				}
			}, {
				key: 'isActive',
				value: function isActive() {
					return this.$li.is("[data-active=true]");
				}
			}, {
				key: 'setActive',
				value: function setActive(state) {
					this.$li.attr("data-active", state);
				}
			}]);

			return ChevronNode;
		}(NODE.FacetteNode);
		/**
   * Classe abstraite pour les facettes.
   */

		var Facette = function () {
			function Facette($target, facetName) {
				_classCallCheck(this, Facette);

				this.$target = $target;
				this.facetName = facetName;
				this.repost = false;
				this.criteresActif = new Array();
				this.observers = [];
				this.excludeEmpty = true; // masquage des comptage à zéro.
				this.$ulRoot = $("<ul>", {
					"class": "arbre-facette"
				});
			}

			_createClass(Facette, [{
				key: 'initialise',
				value: function initialise(data, def) {
					if (def && def.title && def.id) {
						this.titleField = def.title;
						this.idField = def.id;
						if (def.children) {
							this.childrenField = def.children;
						}
						if (data != null) {
							this.makeNode(data, this.$ulRoot, 0);
						}
					}
					this.$target.append(this.$ulRoot);
					this.$ulRoot.find("ul").hide();
				}
			}, {
				key: 'render',
				value: function render(json) {
					this.repost = false;
					var roots = this.$ulRoot.children("li");
					this.criteresActif = new Array();
					for (var i = 0; i < roots.length; i++) {
						this.checkNode(roots[i], json.data);
					}
					// Mise à jour du bloc mes critères.
					for (var i = 0; i < this.criteresActif.length; i++) {
						var li = this.criteresActif[i],
						    idc = "critere-indentation-0em";
						if (this.indentionCritere && $.isFunction(this.indentionCritere)) {
							idc = this.indentionCritere.call(this, li);
						}
						this.notifyAll(MSG_FACETTE.addCritere, {
							dom: li,
							libelle: $(li).data().libelle,
							action: function action(li) {
								$(li).click();
							},
							first: this.isFirstCritere(i)
						});
					}

					if (this.repost) {
						this.notifyAll(MSG_FACETTE.post, {});
					}
					this.$ulRoot.trigger("liste:refresh");
				}
			}, {
				key: 'reset',
				value: function reset() {
					var ctx = this;
					this.$ulRoot.find("li").each(function () {
						var $li = $(this),
						    $data = $li.data();
						$li.hide();
						ctx.toggleOff($li);
						if ($data.$children) {
							$data.$children.hide();
						}
					});
					this.notifyAll(MSG_FACETTE.cleanFilter, { facette: this.facetName });
				}
			}, {
				key: 'addObserver',
				value: function addObserver(observer) {
					this.observers.push(observer);
				}
			}, {
				key: 'notifyAll',
				value: function notifyAll(message, data, reloadBookmark) {
					$(this.observers).each(function () {
						if (this.notify && $.isFunction(this.notify)) {
							this.notify.call(this, message, data, reloadBookmark);
						}
					});
				}
			}, {
				key: 'activeValue',
				value: function activeValue(value) {}
			}, {
				key: 'val',
				value: function val() {}
			}, {
				key: 'refreshAccessibilite',
				value: function refreshAccessibilite() {
					this.$target.find("li").attr("tabindex", "-1");
					this.$target.find("li:visible").first().attr("tabindex", "0");
				}
			}, {
				key: 'reloadBookmark_',
				value: function reloadBookmark_(key, values) {
					if (values != null && values.length > 0) {
						for (var i = 0; i < values.length; i++) {
							var $li = this.$ulRoot.find("[data-id=" + values[i] + "]").first();

							this.reloadBookMarkStep($li);
							this.notifyAll(MSG_FACETTE.click, { li: [$li.get()[0]], facette: this.facetName }, true);
							this.notifyAll(MSG_FACETTE.addFilter, { facette: this.facetName, value: this.getFilterValue($li), updateUrl: false, reloadBookmark: true });
						}
					}
				}
			}, {
				key: 'makeNode',

				/* */
				value: function makeNode(nodes, $ul, index) {
					for (var i = 0; i < nodes.length; i++) {
						var node = nodes[i],
						    hasChildren = false;
						if (this.childrenField) {
							hasChildren = node[this.childrenField].length > 0;
						}
						var $li = this.appendNode(node, $ul, index);
						if (hasChildren) {
							this.makeNode(node[this.childrenField], $li.data().$children, index + 1);
						}
					}
				}
			}, {
				key: 'checkFilter',

				/* */
				value: function checkFilter(li) {
					var $li = $(li);
					var allActive = 0;
					var cdt = $li.parent().children("li");
					for (var i = 0; i < cdt.length; i++) {
						var $data = $(cdt[i]).data();
						if ($data.node.isActive()) {
							allActive++;
						}
					}
					var checked = $li.data().node.isActive();
					var root = parseInt($li.attr("data-level")) == 0;
					var firstChecked = allActive == 0;
					var lastChecked = allActive == 1;

					if ($li.clickOnChechbox) {
						checked = !checked;
					}

					if (root && !checked) {
						this.rootUnchecked(li);
					} else if (root && checked) {
						this.rootChecked(li);
					} else if (!root && !checked && firstChecked) {
						this.leafUncheckedFirst(li);
					} else if (!root && !checked && !firstChecked) {
						this.leafUncheckedNotFirst(li);
					} else if (!root && checked && lastChecked) {
						this.leafCheckedLast(li);
					} else if (!root && checked && !lastChecked) {
						this.leafCheckedNotlast(li);
					}
				}
			}, {
				key: 'rootUnchecked',

				/* */
				value: function rootUnchecked(li) {
					var $li = $(li);
					var $data = $li.data();
					this.toggleOn($li);
					this.notifyAll(MSG_FACETTE.addFilter, { facette: this.facetName, value: this.getFilterValue($li) });
				}
			}, {
				key: 'rootChecked',

				/* */
				value: function rootChecked(li) {
					var $li = $(li);
					var $data = $li.data();
					this.toggleOff($li);
					this.notifyAll(MSG_FACETTE.removeFilter, { facette: this.facetName, value: this.getFilterValue($li) });
					// nettoyage des enfants.
					this.cleanChildren($data);
				}
			}, {
				key: 'leafUncheckedFirst',

				/* */
				value: function leafUncheckedFirst(li) {
					var $li = $(li);
					var $data = $li.data();
					this.toggleOn($li);
					this.notifyAll(MSG_FACETTE.removeFilter, { facette: this.facetName, value: this.getFilterValue($li.parent().parent()) });
					this.notifyAll(MSG_FACETTE.addFilter, { facette: this.facetName, value: this.getFilterValue($li) });
				}
			}, {
				key: 'leafUncheckedNotFirst',

				/* */
				value: function leafUncheckedNotFirst(li) {
					var $li = $(li);
					var $data = $li.data();
					this.toggleOn($li);
					this.notifyAll(MSG_FACETTE.addFilter, { facette: this.facetName, value: this.getFilterValue($li) });
				}
			}, {
				key: 'leafCheckedLast',

				/* */
				value: function leafCheckedLast(li) {
					var $li = $(li);
					var $data = $li.data();
					this.toggleOff($li);
					this.notifyAll(MSG_FACETTE.addFilter, { facette: this.facetName, value: this.getFilterValue($li.parent().parent()) });
					this.notifyAll(MSG_FACETTE.removeFilter, { facette: this.facetName, value: this.getFilterValue($li) });
					// nettoyage des enfants.
					this.cleanChildren($data);
				}
			}, {
				key: 'leafCheckedNotlast',

				/* */
				value: function leafCheckedNotlast(li) {
					var $li = $(li);
					var $data = $li.data();
					this.toggleOff($li);
					this.notifyAll(MSG_FACETTE.removeFilter, { facette: this.facetName, value: this.getFilterValue($li) });
					// nettoyage des enfants.
					this.cleanChildren($data);
				}
			}, {
				key: 'toggleOn',

				/* */
				value: function toggleOn($li) {
					$li.data().node.toggleOn();
				}
			}, {
				key: 'toggleOff',

				/* */
				value: function toggleOff($li) {
					$li.data().node.toggleOff();
				}
			}, {
				key: 'cleanChildren',

				/* */
				value: function cleanChildren($data) {
					var ctx = this;
					if ($data.$children) {
						$data.$children.find("li").each(function () {
							ctx.notifyAll(MSG_FACETTE.removeFilter, { facette: ctx.facetName, value: ctx.getFilterValue($(this)) });
							ctx.toggleOff($(this));
						});
					}
				}
			}, {
				key: 'checkNode',

				/* */
				value: function checkNode(li, facet) {
					var $data = $.data(li);
					var $li = $(li);
					var id = $li.attr("data-id");
					var checked = $data.node.isActive();
					if (checked) {
						this.criteresActif[this.criteresActif.length] = li;
					}
					// comptage de la facette.
					$data.$compteur.text("(-)");
					$data.count = 0;
					for (var k in facet) {
						if (k == id) {
							if (facet[k] != 0) {
								$data.$compteur.text("(" + facet[k] + ")");
								$data.count = facet[k];
							}
						}
					}
					// condition d'affichage du noeud.
					if (!this.isVisible($li) && this.excludeEmpty) {
						$li.hide();
					} else {
						$li.show();
					}
					// un critére à effacer --> repost
					if (checked && $data.count == 0 && this.excludeEmpty) {
						this.checkFilter(li);
						this.notifyAll(MSG_FACETTE.click, { li: [li], facette: this.facetName });
						this.repost = true;
					}
					// reccursion.
					if ($data.$children != null && $data.$children.length != 0) {
						var children = $data.$children.children("li");
						for (var i = 0; i < children.length; i++) {
							this.checkNode(children[i], facet);
						}
					}
				}
			}, {
				key: 'reloadBookMarkStep',

				/* */
				value: function reloadBookMarkStep($li) {
					var $data = $li.data();
					var level = $data.level;
					if (level != 0 && !$li.parent().parent().data().node.isActive()) {
						this.reloadBookMarkStep($li.parent().parent());
					}
					var parent = $li.parent().parent();
					if ($data.$children) {
						$data.$children.show();
					}
					this.toggleOn($li);
				}
			}, {
				key: 'isVisible',

				/* */
				value: function isVisible($li) {
					return true;
				}
			}, {
				key: 'appendNode',

				/* */
				value: function appendNode(node, $ul, index) {
					if ($ul == null) {
						$ul = this.$ulRoot;
					}

					var hasChildren = false,
					    $li,
					    ctx = this;
					if (this.childrenField) {
						hasChildren = node[this.childrenField].length > 0;
					}

					if (this.createLi && this.createLi instanceof Function) {
						$li = this.createLi(node, $ul, index, hasChildren);
					} else {
						var domGenerator = new DomGenerator();
						$li = domGenerator.getNode(node[this.idField], node[this.titleField], index, hasChildren);
						$.data($li.get()[0], domGenerator.$data);
					}
					$li.click(function (e) {
						ctx.checkFilter(this);
						ctx.notifyAll(MSG_FACETTE.click, { li: [this], facette: ctx.facetName });
						ctx.notifyAll(MSG_FACETTE.post, {});

						e.preventDefault();
						e.stopImmediatePropagation();
					});

					$li.hide();
					$ul.append($li);

					return $li;
				}
			}, {
				key: 'removeAllNodes',

				/* */
				value: function removeAllNodes() {
					this.reset();
					this.notifyAll(MSG_FACETTE.reset, { li: this.$ulRoot.find("li"), facette: this.facetName });
					this.$ulRoot.empty();
				}
			}, {
				key: 'isFirstCritere',

				/**
     * Comportement permettant de sucharger
     * @param i
     * @returns {Boolean}
     */
				value: function isFirstCritere(index) {
					return index == 0;
				}
			}, {
				key: 'getFilterValue',

				/**
     * renvoie les valeurs de filtre pour un li.
     * @param $li
     * @returns
     */
				value: function getFilterValue($li) {
					var $data = $li.data();

					return typeof $data.id != "undefined" ? $data.id : null;
				}
			}]);

			return Facette;
		}();

		/**
   * Facette spécifique au traitement de la collection.
   * /!\ : le type CollectionFacet est générique, il sert aussi pour la facette conjoncture.
   */

		var CollectionFacet = function () {
			function CollectionFacet(params) {
				_classCallCheck(this, CollectionFacet);

				Tools.makeObservable(this);
				this.$containerFacetteCollection = params.$containerFacetteCollection;
				this.$searchBar = params.$searchBar;
				this.$choix = params.$choix;
				this.$facetteListe = params.$facetteListe;
				this.facetteId = params.facetteId;
				this.beanDefinition = params.beanDefinition;
			}

			_createClass(CollectionFacet, [{
				key: 'initialise',
				value: function initialise(collections) {
					// Facette collection
					this.facetteCollection = new FacetteSimple(this.$containerFacetteCollection, this.facetteId);
					this.facetteCollection.initialise(collections, this.beanDefinition);
					this.facetteCollection.addObserver(this);
					this.$containerFacetteCollection.checkboxes();

					// searchbar
					this.$searchBar.listeChooser({ $ul: this.facetteCollection.$ulRoot, visible: function visible(li) {
							var data = $(li).data();
							return data.count > 0 && !data.node.isActive();
						} });

					this.$facetteListe.scrollbar({
						axis: "y",
						theme: "web4g",
						scrollInertia: 0,
						keyboard: { enable: false, scrollType: "stepped" }
					});
				}
			}, {
				key: 'render',
				value: function render(facetteCollectionId) {
					this.refreshChoix(facetteCollectionId);
					this.facetteCollection.render(facetteCollectionId);
					this.$searchBar.listeChooser('refresh');
				}
			}, {
				key: 'reset',
				value: function reset() {
					this.facetteCollection.reset();
					this.$choix.find("ul").empty();
					this.$searchBar.val("");
					this.$searchBar.listeChooser('refresh');
				}
			}, {
				key: 'notify',
				value: function notify(message, data) {
					var ctx = this;
					if (data.facette == this.facetteId) {
						$(data.li).each(function () {
							var $dom = $(this);
							if ($dom.data().node.isActive()) {
								ctx.appendChoix(this);
							} else {
								ctx.removeChoix(this);
							}
						});
					}
					this.notifyAll(message, data);
				}
			}, {
				key: 'appendChoix',
				value: function appendChoix(li) {
					var clone = $(li).clone();
					clone.click(function (e) {
						li.click();
						$(this).remove();
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					clone.show();
					clone.attr("tabindex", "0");
					this.$choix.find("ul").append(clone);
					clone.focus();
				}
			}, {
				key: 'removeChoix',
				value: function removeChoix(li) {
					var id = $(li).data().id;
					this.$choix.find("ul").find("[data-id=" + id + "]").remove();
				}
			}, {
				key: 'refreshChoix',
				value: function refreshChoix(facet) {
					this.$choix.find("li").each(function () {
						var data = $(this).data();
						if (data.id in facet.data) {
							$(this).find(".facette-nombre").text("(" + facet.data[data.id] + ")");
						}
					});
				}
			}, {
				key: 'reloadBookmark_',
				value: function reloadBookmark_(key, values) {
					this.facetteCollection.reloadBookmark_(key, values);
				}
			}]);

			return CollectionFacet;
		}();

		/**
   * Facette spécifique au traitement de la géographie.
   */

		var GeographieFacetteEx = function () {
			function GeographieFacetteEx($target, facetName) {
				_classCallCheck(this, GeographieFacetteEx);

				var ctx = this;
				Tools.makeObservable(this);
				this.suggester = new SuggesterGeographie({ debug: true, showSelection: true, limiteSelections: 3, diffusion: true });
				this.suggester.addObserver(this);
				this.facetNiveauGeo = {};
				this.facetQuery = {};
				this.niveauCourant;
				this.zones = {};
				this.provider = new ZoneProvider();
				this.typeRecherche = "contenant";

				this.suggester.search = function (callback) {
					callback.call(ctx.suggester, { facetsField: [ctx.facetNiveauGeo] });
				};

				this.suggester.getSuggestParams = function () {
					return ctx.getRequestParams();
				};
			}

			_createClass(GeographieFacetteEx, [{
				key: 'getRequestParams',
				value: function getRequestParams() {
					return { q: null, filters: [] };
				}
			}, {
				key: 'initialise',
				value: function initialise(data, def) {
					this.suggester.start(data);
				}
			}, {
				key: 'render',
				value: function render(facetNiveauGeo, facetQuery) {
					var first = true;
					this.facetNiveauGeo = facetNiveauGeo;
					this.facetQuery = facetQuery;
					this.suggester.refreshSelect({ facetsField: [facetNiveauGeo] });
					this.suggester.refreshSelection(facetQuery);

					for (var k in this.zones) {
						this.addCritereZone(this.zones[k], first);
						first = false;
					}
				}
			}, {
				key: 'reset',
				value: function reset() {
					this.resetNiveau();
					this.resetSelection();
				}
			}, {
				key: 'notify',
				value: function notify(message, data) {
					if (message == "nivgeo") {
						if (data.code) {
							this.ajouterSelection(data);
							this.notifyAll(MSG_FACETTE.post, {});
							this.refreshUrl();
						}
					} else if (message == "suggestiongeo") {
						this.ajouterSelection(data);
						this.notifyAll(MSG_FACETTE.post, {});
						this.refreshUrl();
					} else if (message == "selection") {
						this.supprimerSelection(data);
						this.notifyAll(MSG_FACETTE.post, {});
						this.refreshUrl();
					} else if (message == "typeRecherche") {
						this.typeRecherche = data.value;
					}
				}
			}, {
				key: 'reloadBookmark_',
				value: function reloadBookmark_(key, values) {
					var ctx = this;
					if (key == FACETTE.geographieCodeFacet.id) {
						var selections = [],
						    success = function success(zones) {
							var first = true;
							$(zones).each(function () {
								ctx.zones[this.niveau.code + this.code + this.libelle] = this;
								ctx.suggester.afficherSelection(this);
								ctx.addCritereZone(this, first);
								first = false;
							});
						},
						    fail = function fail() {
							console.log("error", arguments);
						};

						for (var i = 0; i < values.length; i++) {
							var tmp = values[i].split(URL_PARAMS.separatorGeoraphie);
							selections.push({ code: tmp[1], niveau: { code: tmp[0] } });

							this.notifyAll(MSG_FACETTE.addFacetQuery, { query: "codeGeo:" + tmp[0] + tmp[1] });
							this.notifyAll(MSG_FACETTE.addFilter, { facette: FACETTE.geographieCodeFacet.id, value: tmp[0] + tmp[1], updateUrl: false, reloadBookmark: true });
						}
						this.provider.enrichirZones({ zones: selections, success: success, fail: fail });
					} else if (key == FACETTE.geographieNiveauFacet.id) {
						this.notifyAll(MSG_FACETTE.refreshUrlParam, { key: FACETTE.geographieNiveauFacet.id, value: [] });
						if (values[0] == "REG" || values[0] == "DEP" || values[0] == "COM") {
							this.suggester.niveauCourant = values[0];
						}
					}
				}
			}, {
				key: 'ajouterNiveau',
				value: function ajouterNiveau(niveau) {
					console.log(niveau);
					this.niveauCourant = niveau;
					this.notifyAll(MSG_FACETTE.addFilter, { facette: FACETTE.geographieNiveauFacet.id, value: niveau, updateUrl: false });
				}
			}, {
				key: 'ajouterSelection',
				value: function ajouterSelection(zone) {
					var code = zone.niveau.code + zone.code,
					    key = code + zone.libelle;
					this.zones[key] = zone;
					this.notifyAll(MSG_FACETTE.addFacetQuery, { query: "codeGeo:" + code });
					this.notifyAll(MSG_FACETTE.addFilter, { facette: FACETTE.geographieCodeFacet.id, value: code, updateUrl: false });
				}
			}, {
				key: 'supprimerSelection',
				value: function supprimerSelection(zone) {
					var code = zone.niveau.code + zone.code,
					    key = code + zone.libelle;
					delete this.zones[key];
					this.suggester.supprimerSelection(zone);
					this.notifyAll(MSG_FACETTE.removeFacetQuery, { query: "codeGeo:" + code });
					this.notifyAll(MSG_FACETTE.removeFilter, { facette: FACETTE.geographieCodeFacet.id, value: code, updateUrl: false });
				}
			}, {
				key: 'resetNiveau',
				value: function resetNiveau() {
					this.niveauCourant = null;
					this.notifyAll(MSG_FACETTE.cleanFilter, { facette: FACETTE.geographieNiveauFacet.id, updateUrl: false });
					this.suggester.selectNiveau("[NULL]");
				}
			}, {
				key: 'resetSelection',
				value: function resetSelection() {
					for (var k in this.zones) {
						this.suggester.supprimerSelection(this.zones[k]);
					}
					this.zones = {};
					//	SolrController.getInstance().removeAllFacetQuery();
					this.notifyAll(MSG_FACETTE.cleanFilter, { facette: FACETTE.geographieCodeFacet.id });
				}
			}, {
				key: 'addCritereZone',
				value: function addCritereZone(zone, first) {
					var ctx = this;
					var libelleEn = zone.isZoneNiveau != undefined ? zone.libelleEn : zone.niveau.libelleEn;
					this.notifyAll(MSG_FACETTE.addCritere, {
						dom: ctx,
						libelle: this.provider.isZoneNiveau(zone.niveau.code) ? zone.libelle : '<span class=\'libelle-geo\'>' + zone.niveau.libelle + '</span> : ' + zone.libelle,
						libelleEn: this.provider.isZoneNiveau(zone.niveau.code) ? libelleEn : '<span class=\'libelle-geo\'>' + zone.niveau.libelleEn + '</span> : ' + zone.libelle,
						action: function action() {
							ctx.notify("selection", zone);
							ctx.notifyAll(MSG_FACETTE.post, {});
						},
						first: first
					});
				}
			}, {
				key: 'refreshUrl',
				value: function refreshUrl() {
					var urlParameters = new Array();
					for (var k in this.zones) {
						urlParameters.push(this.zones[k].niveau.code + URL_PARAMS.separatorGeoraphie + this.zones[k].code);
					}
					this.notifyAll(MSG_FACETTE.refreshUrlParam, { key: FACETTE.geographieCodeFacet.id, value: urlParameters });
				}
			}]);

			return GeographieFacetteEx;
		}();

		var FacetteNode = exports.FacetteNode = function () {
			function FacetteNode() {
				_classCallCheck(this, FacetteNode);
			}

			_createClass(FacetteNode, [{
				key: 'toggleOn',
				value: function toggleOn() {}
			}, {
				key: 'toggleOff',
				value: function toggleOff() {}
			}, {
				key: 'isActive',
				value: function isActive() {}
			}]);

			return FacetteNode;
		}();

		var FacettePeriode = function () {
			function FacettePeriode(params) {
				_classCallCheck(this, FacettePeriode);

				Tools.makeObservable(this);
				this.facetteId = params.facetteId;
				this.facetName = params.facetteId;
				this.$container = params.$container;
				this.libelleCritere = params.libelleCritere;
				this.debut = params.debut;
				this.facette;
				this.$select;
				this.index = null;
			}

			_createClass(FacettePeriode, [{
				key: 'initialise',
				value: function initialise() {
					this.facette = new FacetteSimple(this.$container, this.facetteId);
					this.facette.addObserver(this);
				}
			}, {
				key: 'render',
				value: function render(json, beanDefinition) {
					var dg = new DomGenerator(),
					    ctx = this;
					if (this.$select) {
						this.$select.selectric('destroy');
						this.$select.remove();
					}
					this.$select = dg.getSelectEx(json, beanDefinition, "Choisir une année", "Choisir une année");
					this.$container.append(this.$select);
					this.$select.combobox();
					this.$select.change(function (e) {
						ctx.checkFilter();
						ctx.notifyAll(this);
						ctx.getController().post();
						e.preventDefault();
						e.stopImmediatePropagation();
					});
				}
			}, {
				key: 'actuCritere',
				value: function actuCritere() {
					var ctx = this;
					if (this.index !== null) {
						ctx.addCritere();
					}
				}
			}, {
				key: 'reset',
				value: function reset() {
					this.index = null;
					this.$select.val('[NULL]');
					this.$select.selectric('refresh');
					this.notifyAll(MSG_FACETTE.cleanFilter, {
						facette: this.facetName
					});
				}
			}, {
				key: 'getController',
				value: function getController() {
					return SolrController.getInstance();
				}
			}, {
				key: 'activeValue',
				value: function activeValue(value) {
					this.reset();
					this.$select.val(value);
					this.checkFilter();
				}
			}, {
				key: 'val',
				value: function val() {
					return this.$select.val();
				}
			}, {
				key: 'getFilterValue',
				value: function getFilterValue() {
					if (this.debut) {
						return "[" + this.index + "-01-01T00:00:00Z TO *]";
					} else {
						return "[* TO " + this.index + "-01-01T00:00:00Z]";
					}
				}
			}, {
				key: 'reloadBookmark_',
				value: function reloadBookmark_(key, value) {
					var ctx = this;
					if ($.isArray(value) && value.length === 1) {
						// uniquement les nombres
						this.index = value[0].replace(/\D/g, '');
						this.$select.val(this.index);
						this.$select.selectric('refresh');
						ctx.checkFilter();
					}
				}
			}, {
				key: 'checkFilter',
				value: function checkFilter() {
					this.index = this.$select.val();

					this.getController().removeValues(this.facetteId);
					if (this.index != "[NULL]") {
						this.getController().addFilterValue(this.facetteId, this.getFilterValue(), false);
						this.getController().setUrlValue(this.facetteId, this.index);
					} else {
						this.index = null;
					}
				}
			}, {
				key: 'addCritere',
				value: function addCritere() {
					var ctx = this;
					this.index = this.$select.val();
					if (this.index != "[NULL]") {
						this.notifyAll(MSG_FACETTE.addCritere, {
							dom: ctx,
							libelle: ctx.libelleCritere + this.index,
							action: function action() {
								ctx.reset();
								ctx.notifyAll(MSG_FACETTE.post, {});
							}
						});
					}
				}
			}]);

			return FacettePeriode;
		}();

		var RubriqueFacetteEx = function () {

			return function (params) {
				var ctx = this;
				Tools.makeObservable(this);
				params = $.extend({
					$targetFacette: null,
					beanDef: { id: '', title: '' },
					rubriques: []
				}, params);

				this.$targetFacette = params.$targetFacette;
				this.beanDef = params.beanDef;
				this.rubriques = params.rubriques;
				this.facetteId = "facetteRubriques";
				this.facetteRubriques;

				/* */
				this.render = function (solr) {
					this.facetteRubriques.render(solr);
				};

				/* */
				this.start = function () {
					// facette
					this.facetteRubriques = new FacetteSpeciale(this.$targetFacette, this.facetteId);
					this.facetteRubriques.initialise(this.rubriques, this.beanDef);
					this.facetteRubriques.addObserver(this);
				};

				this.reset = function () {
					this.facetteRubriques.reset();
				};

				/* */
				this.notify = function (message, data) {
					this.notifyAll(message, data);
				};

				/* */
				this.reloadBookmark_ = function (key, values) {};
			};
		}();

		var FacetteSimple = function (_Facette) {
			_inherits(FacetteSimple, _Facette);

			/* */
			function FacetteSimple($target, facetName) {
				_classCallCheck(this, FacetteSimple);

				var _this4 = _possibleConstructorReturn(this, (FacetteSimple.__proto__ || Object.getPrototypeOf(FacetteSimple)).call(this, $target, facetName));

				_this4.$target = $target;
				_this4.facetName = facetName;
				return _this4;
			}

			_createClass(FacetteSimple, [{
				key: 'isVisible',

				/* */
				value: function isVisible($li) {
					var $data = $li.data();
					if ($data.count != 0) {
						return true;
					} else if ($data.count == 0) {
						return false;
					}
				}
			}, {
				key: 'createLi',

				/* */
				value: function createLi(node, $ul, index, hasChildren) {
					var domGenerator = new DomGenerator();
					var $li = domGenerator.getNode(node[this.idField], node[this.titleField], index, hasChildren);
					domGenerator.$data.node = new CheckboxNode($li);
					$.data($li.get()[0], domGenerator.$data);

					return $li;
				}
			}]);

			return FacetteSimple;
		}(Facette);

		var FacetteSpeciale = function (_Facette2) {
			_inherits(FacetteSpeciale, _Facette2);

			function FacetteSpeciale($target, facetName) {
				_classCallCheck(this, FacetteSpeciale);

				var _this5 = _possibleConstructorReturn(this, (FacetteSpeciale.__proto__ || Object.getPrototypeOf(FacetteSpeciale)).call(this, $target, facetName));

				_this5.$target = $target;
				_this5.facetName = facetName;
				_this5.rootIdActive = -1;
				_this5.rootActive = false;
				return _this5;
			}

			_createClass(FacetteSpeciale, [{
				key: 'isVisible',

				/* */
				value: function isVisible($li) {
					var $data = $li.data();
					if ($data.count != 0 && ($data.level != 0 || $data.id == this.rootIdActive || $data.level == 0 && !this.rootActive)) {
						return true;
					} else {
						return false;
					}
				}
			}, {
				key: 'createLi',

				/* */
				value: function createLi(node, $ul, index, hasChildren) {
					var domGenerator = new DomGenerator();
					var $li;

					if (index == 0) {
						$li = domGenerator.getRootNode(node[this.idField], node[this.titleField], index, hasChildren);
						domGenerator.$data.node = new ChevronNode($li);
					} else {
						$li = domGenerator.getNode(node[this.idField], node[this.titleField], index, hasChildren);
						domGenerator.$data.node = new CheckboxNode($li);
					}
					$.data($li.get()[0], domGenerator.$data);
					$.data($li.get()[0], domGenerator.$data);

					return $li;
				}
			}, {
				key: 'reset',

				/* */
				value: function reset() {
					_get(FacetteSpeciale.prototype.__proto__ || Object.getPrototypeOf(FacetteSpeciale.prototype), 'reset', this).call(this);
					this.rootIdActive = -1;
					this.rootActive = false;
				}
			}, {
				key: 'rootUnchecked',

				/* */
				value: function rootUnchecked(li) {
					_get(FacetteSpeciale.prototype.__proto__ || Object.getPrototypeOf(FacetteSpeciale.prototype), 'rootUnchecked', this).call(this, li);
					var id = $(li).data().id;
					this.rootIdActive = id;
					this.rootActive = true;
				}
			}, {
				key: 'rootChecked',

				/* */
				value: function rootChecked(li) {
					_get(FacetteSpeciale.prototype.__proto__ || Object.getPrototypeOf(FacetteSpeciale.prototype), 'rootChecked', this).call(this, li);
					this.rootIdActive = -1;
					this.rootActive = false;
				}
			}, {
				key: 'reloadBookMarkStep',

				/* */
				value: function reloadBookMarkStep(li) {
					_get(FacetteSpeciale.prototype.__proto__ || Object.getPrototypeOf(FacetteSpeciale.prototype), 'reloadBookMarkStep', this).call(this, li);
					var $li = $(li);
					if ($li.data().level == 0) {
						this.rootIdActive = $li.data().id;
						this.rootActive = true;
					}
				}
			}]);

			return FacetteSpeciale;
		}(Facette);

		WEB4G.CONTROLLER.HistoriqueCommuneController = function (params) {

			params = $.extend({
				title: langue == 'en' ? "Municipalities history | Insee" : "Historique communes | Insee",
				pathname: contextPath + "/" + langue + '/metadonnees/historique-commune',
				isNavigation: true
			}, params);

			var ctx = this;
			CommonControllerFactory.prepareController(this);
			CommonControllerFactory.prepareFacetController(this);

			this.sortField = { field: "historique_dateEffet", order: "desc" };
			this.$documents = $("#documents");
			this.$numFound = $("#nombre-resultats");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$modifications = $("#modifications");
			this.$mesCriteres = $("#mes-criteres");
			this.$periodeDebut = $("#periode-debut");
			this.$periodeFin = $("#periode-fin");
			this.search;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.modificationsView;
			this.departementsView;
			this.periodeDebutView;
			this.periodeFinView;
			this.uriManager = new UriManager(params.pathname, params.title);
			this.filters = new Filters();
			this.mesCriteres;

			/**
    * Démarage du service.
    */
			this.start = function () {
				// chargement synchrone des nomenclatures...
				$("#wait").attr("class", "wait-on");
				$.when($.getJSON(params.pathname + "/departements"), $.getJSON(params.pathname + "/modifications"), $.getJSON(params.pathname + "/periodesDebut"), $.getJSON(params.pathname + "/periodesFin"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques")).done(function (departements, modifications, periodesDebut, periodesFin, rubriques) {
					ctx.launch(departements[0], modifications[0], periodesDebut[0], periodesFin[0], rubriques[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			this.launch = function (jsonDepartements, jsonModifications, jsonPeriodesDebut, jsonPeriodesFin, jsonRubriques) {
				var sortAction = function sortAction(value) {
					ctx.sortField = { field: "historique_dateEffet", order: value };
					ctx.post();
				};
				var sortOptions = [{ value: "asc", libelle: 'Trier par date croissante', action: sortAction, i18n: "echos.infos.trier-date-croissante" }, { value: "desc", libelle: 'Trier par date décroissante', action: sortAction, i18n: "echos.infos.trier-date-decroissante" }];

				this.search = new Search(params.pathname);
				this.search.getController = function () {
					return ctx;
				};
				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewUp.getController = function () {
					return ctx;
				};
				this.navigateurViewUp.$echoTri.show();
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.navigateurViewDown.getController = function () {
					return ctx;
				};
				this.navigateurViewDown.$echoTri.show();

				this.modificationsView = new FacetteSimple(this.$modifications, FACETTE.facetteModifications.id);
				this.modificationsView.initialise(jsonModifications, { id: "key", title: "value" });
				this.modificationsView.addObserver(this);

				this.departementsView = new CollectionFacet({
					$containerFacetteCollection: $("#departements-liste-content"),
					$searchBar: $("#departements-filtre"),
					$choix: $("#departements-choix"),
					$facetteListe: $("#departements-liste"),
					facetteId: FACETTE.facetteDepartements.id,
					beanDefinition: { id: "key", title: "value" }
				});
				this.departementsView.initialise(jsonDepartements, { id: "key", title: "value" });
				this.departementsView.addObserver(this);

				this.periodeDebutView = new FacettePeriode({ $container: this.$periodeDebut, facetteId: FACETTE.facetteDebut.id, libelleCritere: "Début de la période : ", debut: true });
				this.periodeDebutView.getController = function () {
					return ctx;
				};
				this.periodeDebutView.initialise();
				this.periodeDebutView.render(jsonPeriodesDebut, { id: "key", title: "value" });
				this.periodeDebutView.addObserver(this);

				this.periodeFinView = new FacettePeriode({ $container: this.$periodeFin, facetteId: FACETTE.facetteFin.id, libelleCritere: "Fin de la période : ", debut: false });
				this.periodeFinView.getController = function () {
					return ctx;
				};
				this.periodeFinView.initialise();
				this.periodeFinView.render(jsonPeriodesFin, { id: "key", title: "value" });
				this.periodeFinView.addObserver(this);

				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.documentsView = new HistoriqueCommuneView(this.$documents);

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);
				this.searchbarView.isNavigation = this.isNavigation;
				this.mesCriteres = new MesCriteres(this.$mesCriteres);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);

				this.uriManager.manage(FACETTE.facetteModifications.id, this.modificationsView, URL_PARAMS.facetteModifications);
				this.uriManager.manage(FACETTE.facetteDepartements.id, this.departementsView, URL_PARAMS.facetteDepartements);
				this.uriManager.manage(FACETTE.facetteDebut.id, this.periodeDebutView, URL_PARAMS.facetteDebut);
				this.uriManager.manage(FACETTE.facetteFin.id, this.periodeFinView, URL_PARAMS.facetteFin);
				this.uriManager.reload();

				this.post();
				this.initReset();
				Responsive.ResponsiveManager.reset();
			};

			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");
				this.mesCriteres.cleanAll();
				this.numfound.render(json.numFounds, SOLR_PARAMS.defaultQuery);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField.order);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField.order);
				this.documentsView.render(json, this.uriManager.getBookmarkParam(URL_PARAMS.q));

				// gestion des facets.
				$(json.facetsField).each(function () {
					if (this.name == "historique_codeModification") {
						ctx.modificationsView.render(this);
					} else if (this.name == "historique_codeDepartement") {
						ctx.departementsView.render(this);
					}
				});

				ctx.periodeDebutView.actuCritere();
				ctx.periodeFinView.actuCritere();
			};

			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.search.sortFields = [this.sortField];
				this.uriManager.refreshUri();
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback(json);
				});
			};

			this.reset = function () {
				this.search.start = 0;
				this.departementsView.reset();
				this.modificationsView.reset();
				this.periodeDebutView.reset();
				this.periodeFinView.reset();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			this.getFiltres = function () {
				return this.filters;
			};

			this.getFacetFilters = function (facetName) {
				return this.filters.getFiltersValues(facetName);
			};

			/* */
			this.notify = function (message, data) {
				if (message == "rechercher") {
					this.redirection();
				} else if (message == MSG_FACETTE.post) {
					this.post();
				} else if (message == MSG_FACETTE.addFilter) {
					this.addFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.removeFilter) {
					this.removeFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.cleanFilter) {
					this.removeValues(data.facette, data.updateUrl);
				} else if (message == MSG_FACETTE.addCritere) {
					this.addCritere(data);
				} else if (message == MSG_FACETTE.addFacetQuery) {
					this.addFacetQuery(data.query);
				} else if (message == MSG_FACETTE.removeFacetQuery) {
					this.removeFacetQuery(data.query);
				} else if (message == MSG_FACETTE.refreshUrlParam) {
					this.setUrlValue(data.key, data.value);
				}
			};

			/* */
			this.redirection = function () {
				this.reset();
				this.post();
			};

			/**
    * Ajoute une facette de type query à la requête.
    */
			this.addFacetQuery = function (query) {
				if ($.inArray(query, this.search.facetsQuery) == -1) {
					this.search.facetsQuery[this.search.facetsQuery.length] = query;
				}
			};

			/**
    * Retire une facette de type query de la requête.
    */
			this.removeFacetQuery = function (query) {
				var index = $.inArray(query, this.search.facetsQuery);
				if (index != -1) {
					this.search.facetsQuery.splice(index, 1);
				}
			};

			this.removeAllFacetQuery = function (query) {
				this.search.facetsQuery = [];
			};

			/**
    * Nettoie l'ensemble des valeurs de tout les filtres.
    */
			this.removeAllValues = function () {
				this.search.start = 0;
				this.filters.removeAllValues();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Permet d'affecter un ensemble de valeur à un élément de l'url.
    */
			this.setUrlValue = function (key, value) {
				if ($.isArray(value)) {
					this.uriManager.setValue(key, value);
				} else {
					this.uriManager.setValue(key, [value]);
				}
				//		this.uriManager.refreshUri(); // faut pas sinon on perds les paramètres 
			};

			this.initReset = function () {
				$("#bouton-raz-modifications").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.modificationsView.reset();
					ctx.post();
				});

				$("#bouton-raz-departements").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.departementsView.reset();
					ctx.post();
				});

				$("#bouton-raz-periode-debut").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.periodeDebutView.reset();
					ctx.post();
				});

				$("#bouton-raz-periode-fin").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.periodeFinView.reset();
					ctx.post();
				});

				$("#bouton-raz-criteres").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.removeAllValues();
					ctx.reset();
					ctx.post();
				});
			};
		};

		WEB4G.CONTROLLER.ComparaisonController = function ($) {
			return function () {
				var ctx = this;
				CommonControllerFactory.prepareControllerStandard(this);

				/* */
				this.start = function () {
					this.suggester = new SuggesterGeographie({ debug: true, idProduit: this.idProduit, showSelection: true, limiteSelections: 8 });
					this.suggesterId = "suggestionGeographique";

					this.uriManager = new UriManager(contextPath + "/" + langue + WEB4G_URL.statistiques + "/" + this.idProduit, $("head title").text());
					this.uriManager.manage(this.suggesterId, ctx, URL_PARAMS.geographie);

					this.suggester.addObserver(ctx);
					this.suggester.start();

					this.searchbar = new SearchbarView($("#searchbar-header"), this.uriManager);
					this.searchbar.addObserver(this);

					this.uriManager.manage(URL_PARAMS.q, this.searchbar, URL_PARAMS.q);
					this.uriManager.reload();
					$(".bouton-raz, #bouton-raz-geographie").click(function () {
						ctx.reset();
					});
				};

				/* */
				this.notify = function (source, value) {
					if (source == "nivgeo") {
						if (typeof value.code != "undefined") {
							// si "METRO" "INTER" "FE"
							this.ajouterZone(value, true);
							this.tableDdl.chargerTables(this.idProduit, [value]);
						}
					} else if (source == "suggestiongeo") {
						this.ajouterZone(value, true);
						this.tableDdl.chargerTables(this.idProduit, [value]);
					} else if (source == "selection") {
						this.retirerZone(value);
					} else if (source == "rechercher") {
						this.redirection();
					}
				};

				/* */
				this.ajouterZone = function (zone, isComparaison) {
					var key = zone.libelle + zone.code;
					if (!(key in this.choix)) {
						if (isComparaison) {
							this.choix[key] = zone;
						}
						this.refreshUrl();
						this.refreshLienExport();
						this.refreshModeImpression();
					}
				};

				/* */
				this.retirerZone = function (zone) {
					var key = zone.libelle + zone.code;
					this.tableDdl.removeColumn(zone);
					delete this.choix[key];
					this.refreshUrl();
					this.refreshLienExport();
					this.refreshModeImpression();
				};

				/* */
				this.refreshUrl = function () {
					if (this.zoneInitiale != null) {
						var urlParameters = new Array();
						urlParameters.push(this.zoneInitiale.niveau.code + URL_PARAMS.separatorGeoraphie + this.zoneInitiale.code);
						for (var k in this.choix) {
							urlParameters.push(this.choix[k].niveau.code + URL_PARAMS.separatorGeoraphie + this.choix[k].code);
						}
						this.uriManager.setValue(this.suggesterId, urlParameters);
						this.uriManager.refreshUri();
					}
				};

				this.refreshLienExport = function () {
					if (this.zoneInitiale != null) {
						var urlInitiale = $(".donnees-telechargeables a").attr("href");
						var urlLien = urlInitiale.substring(0, urlInitiale.indexOf("=") + 1);

						urlLien += this.zoneInitiale.niveau.code + URL_PARAMS.separatorGeoraphie + this.zoneInitiale.code;
						for (var k in this.choix) {
							urlLien += "+" + this.choix[k].niveau.code + URL_PARAMS.separatorGeoraphie + this.choix[k].code;
						}

						$(".donnees-telechargeables a").attr("href", urlLien);
					}
				};

				this.refreshModeImpression = function () {
					var nbZone = Object.keys(this.choix).length;
					var libelleZone = $(".titre-page.chiffre-cle .titre .titre-principal .sous-titre.div-in-h").text();
					console.log("nbZone " + nbZone + libelleZone);
					if (nbZone === 0) {
						$(".titre-page.chiffre-cle .titre .titre-principal .sous-titre.div-in-h").removeClass("no-impression");
						if ($("head title").text().indexOf(libelleZone) === 0) {
							$("head title").text($("head title").text().replace("| Insee", libelleZone + " | Insee"));
						}
					} else {
						$(".titre-page.chiffre-cle .titre .titre-principal .sous-titre.div-in-h").addClass("no-impression");
						$("head title").text($("head title").text().replace(" − " + libelleZone, ""));
					}
				};

				/* */
				this.reloadBookmark_ = function (name, values) {
					var comparaisons = new Array(),
					    success = function success(zones) {
						var first = true;
						ctx.zoneInitiale = zones[0];
						$(zones).each(function () {
							ctx.ajouterZone(this, !first);
							if (!first) ctx.suggester.afficherSelection(this);else ctx.suggester.excludeZone(this);
							first = false;
						});

						ctx.tableDdl.chargerTables(ctx.idProduit, zones.slice(1));
					},
					    fail = function fail() {
						console.log("error", arguments);
					};

					for (var i = 0; i < values.length; i++) {
						var tmp = values[i].split(URL_PARAMS.separatorGeoraphie);
						comparaisons.push({ niveau: tmp[0], codes: [tmp[1]] });
					}
					this.provider.deferreds(comparaisons, success, fail);
				};

				/* */
				this.reset = function () {
					for (var k in this.choix) {
						this.retirerZone(this.choix[k]);
					}
					this.suggester.reset();
					this.choix = {};
					this.refreshUrl();
				};

				// constructeur
				this.choix = {};
				this.provider = new ZoneProvider();
				this.tableDdl = new TableDdl();
				this.idProduit = $("#idProduit").text();
			};
		}(jQuery);

		/**
   * Controller de la page de recherhce dans la consultation des agenda des indicateurs.
   */
		WEB4G.CONTROLLER.ConsultationCalendrierController = function () {
			CommonControllerFactory.prepareController(this);
			CommonControllerFactory.prepareFacetController(this);

			var ctx = this;

			this.documentsView;
			this.numfound;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.searchbarView;
			this.conjonctureView;
			this.typeIndicateurView;
			this.serviceDiffuseurView;
			this.pathname = WEB4G_URL.consultationCalendrier;
			this.sortField = [{ field: 'dateEmbargo_dt', order: 'asc' }];
			this.filters = new Filters();

			this.uriManager = new UriManager(window.location.pathname, 'Insee | Agenda de diffusion des principaux indicateurs conjoncturels');

			this.$documents = $("#documents");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$numFound = $("#nombre-resultats");
			this.$typeIndicateur = $("#type-indicateur");
			this.$conjoncture = $("#conjoncture");
			this.$serviceDiffuseur = $("#service-diffuseur");

			// si page dynamique : déplacement du dom.
			$('#contenu-calendrier').detach().appendTo($('.contenu').first());
			$('#consulter').remove();
			$('.boutons-bascule').detach().appendTo($('.titre-page').first());

			/* */
			this.launch = function (types, rubriques, conjonctures, typeIndicateurs, serviceDiffuseurs) {

				this.search = new Search(contextPath + "/" + langue + this.pathname);
				this.search.getFilters = function () {
					var filters = ctx.filters.getFilters();
					return filters;
				};
				this.documentsView = new DocumentsView(this.$documents);
				var sortAction = function sortAction(value) {
					ctx.sortField = [{ field: 'dateEmbargo_dt', order: value }];
					ctx.post();
				};
				var sortOptions = [{ value: 'asc', libelle: 'Trier par date croissante', action: sortAction, i18n: "echos.infos.trier-date-croissante" }, { value: 'desc', libelle: 'Trier par date décroissante', action: sortAction, i18n: "echos.infos.trier-date-decroissante" }];

				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewUp.getController = function () {
					return ctx;
				};
				this.navigateurViewUp.$echoTri.show();
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.navigateurViewDown.getController = function () {
					return ctx;
				};
				this.navigateurViewDown.$echoTri.show();
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));

				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbarView.getController = function () {
					return ctx;
				};

				this.mesCriteres = new MesCriteres($("#mes-criteres"));

				this.conjonctureView = new CollectionFacet({
					$containerFacetteCollection: $("#conjoncture-liste-content"),
					$searchBar: $("#conjoncture-filtre"),
					$choix: $("#conjoncture-choix"),
					$facetteListe: $("#conjoncture-liste"),
					facetteId: FACETTE.facetteConjonctureIdFacet.id,
					beanDefinition: { id: "id", title: langue == 'fr' ? "libelleFr" : "libelleEn" }
				});
				this.conjonctureView.initialise(conjonctures);
				this.conjonctureView.addObserver(this);

				this.typeIndicateurView = new FacetteSimple($("#type-indicateur"), FACETTE.facetteTypeIndicateur.id);
				this.typeIndicateurView.initialise(typeIndicateurs, { id: "key", title: "value" });
				this.typeIndicateurView.addObserver(this);

				this.serviceDiffuseurView = new FacetteSimple($("#service-diffuseur"), FACETTE.facetteServiceDiffuseur.id);
				this.serviceDiffuseurView.initialise(serviceDiffuseurs, { id: "key", title: "value" });
				this.serviceDiffuseurView.addObserver(this);

				var getController = function getController() {
					return ctx;
				};
				this.navigateurViewUp.getController = getController;
				this.navigateurViewDown.getController = getController;

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);

				this.uriManager.manage(FACETTE.facetteConjonctureIdFacet.id, this.conjonctureView, URL_PARAMS.facetteConjonctureIdFacet);
				this.uriManager.manage(FACETTE.facetteServiceDiffuseur.id, this.serviceDiffuseurView, URL_PARAMS.facetteServiceDiffuseurId);
				this.uriManager.manage(FACETTE.facetteTypeIndicateur.id, this.typeIndicateurView, URL_PARAMS.facetteTypeIndicateurId);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);
				this.uriManager.reload();

				// launch
				this.post();
				this.initReset();
				Responsive.ResponsiveManager.reset();
			};

			/* */
			this.start = function () {
				$("#wait").attr("class", "wait-on");
				$.when($.getJSON(contextPath + "/" + langue + "/solr/types"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques"), $.getJSON(contextPath + "/" + langue + "/solr/conjonctures"), $.getJSON(contextPath + "/" + langue + "/ajax/type-indicateurs"), $.getJSON(contextPath + "/" + langue + "/ajax/service-diffuseurs")).done(function (types, rubriques, conjonctures, typeIndicateurs, serviceDiffuseurs) {
					ctx.launch(types[0], rubriques[0], conjonctures[0], typeIndicateurs[0], serviceDiffuseurs[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			/* */
			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.uriManager.refreshUri();
				this.search.sortFields = this.sortField;
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback.call(ctx, json);
				});
			};

			/* */
			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");
				this.mesCriteres.cleanAll();
				this.numfound.render(json.numFounds, this.getQuery().replace(/\"/g, ''));
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField[0].order);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField[0].order);
				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q));

				$(json.facetsField).each(function () {
					if (this.name == "facetteConjonctureId") {
						ctx.conjonctureView.render(this);
					}
					if (this.name == "facetteTypeIndicateurId") {
						ctx.typeIndicateurView.render(this);
					}
					if (this.name == "facetteServiceDiffuseurId") {
						ctx.serviceDiffuseurView.render(this);
					}
				});
			};

			/* */
			this.notify = function (message, params) {
				if (message == "rechercher") {
					this.setQuery(params.request);
					this.redirection();
				} else if (message == MSG_FACETTE.post) {
					this.post();
				} else if (message == MSG_FACETTE.addFilter) {
					this.addFilterValue(params.facette, params.value, params.updateUrl);
				} else if (message == MSG_FACETTE.removeFilter) {
					this.removeFilterValue(params.facette, params.value, params.updateUrl);
				} else if (message == MSG_FACETTE.addCritere) {
					this.addCritere(params);
				} else if (message == MSG_FACETTE.cleanFilter) {
					this.removeValues(params.facette, params.updateUrl);
				}
			};

			/* */
			this.reset = function () {
				this.search.start = 0;
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/* */
			this.initReset = function () {
				$("#bouton-raz-conjoncture, #bouton-raz-criteres").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.conjonctureView.reset();
					ctx.typeIndicateurView.reset();
					ctx.serviceDiffuseurView.reset();
					ctx.post();
				});
			};
		};
		/**
   * Controller de la page de sommaire des définitions
   */
		WEB4G.CONTROLLER.DefinitionsController = function ($) {

			var navigationHistorique = new NavigationHistorique();

			var update = function update() {
				var ancre = navigationHistorique.getAncre();
				if (ancre != "") {
					window.location.hash = ancre;
				}
			};

			return function () {

				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				update();

				navigationHistorique.ajouterEvent(function () {
					update();
				});
			};
		}(jQuery);
		var CommonControllerFactory = function CommonControllerFactory(controller) {

			var context = controller;

			/* */
			this.getQuery = function () {
				var search = typeof context.internal == "undefined" ? context.search : context.internal.search;
				return search.q;
			};

			/* */
			this.post = function () {};

			/* */
			this.changeRows = function (rows) {
				var ctx = typeof context.internal == "undefined" ? context : context.internal;
				ctx.search.start = 0;
				ctx.search.rows = rows;
				ctx.uriManager.setValue(URL_PARAMS.rows, rows);
				ctx.uriManager.setValue(URL_PARAMS.start, 0);
				context.post();
			};

			/* */
			this.changePage = function (start) {
				var ctx = typeof context.internal == "undefined" ? context : context.internal;
				ctx.search.start = start;
				ctx.uriManager.setValue(URL_PARAMS.start, start);
				context.post();
			};

			/* */
			this.changeSortField = function (sortField) {
				var ctx = typeof context.internal == "undefined" ? context : context.internal;
				ctx.sortField = sortField;
			};

			/* */
			this.getQuery = function () {
				var ctx = typeof context.internal == "undefined" ? context : context.internal;
				return ctx.search.q;
			};

			/* */
			this.setQuery = function (query) {
				var ctx = typeof context.internal == "undefined" ? context : context.internal;
				ctx.isSearchEvent = true;
				context.search.q = query;
				if (query != SOLR_PARAMS.defaultQuery) {
					context.uriManager.setValue(URL_PARAMS.q, query.trim().split(/\b\s+(?!$)/));
				} else {
					context.uriManager.setValue(URL_PARAMS.q, []);
				}
			};

			/* */
			this.redirection = function () {
				var ctx = typeof context.internal == "undefined" ? context : context.internal;
				context.redirect(WEB4G_URL.recherche);
			};

			/* */
			this.redirect = function (pathname) {
				var uriManager = typeof context.internal == "undefined" ? context.uriManager : context.internal.uriManager;
				var href = contextPath + '/' + langue + pathname,
				    params = uriManager.getBookmarkParams([URL_PARAMS.q, URL_PARAMS.rows]);
				if (!String.isBlank(params)) {
					href += '?';
					href += params;
				}

				window.location = href;
			};

			/* */
			this.reset = function () {};

			/* */
			this.notify = function (message, params) {};

			/* */
			this.notifyStandard = function (message, params) {
				if (message == 'rechercher') {
					this.redirection();
				}
			};

			/* */
			this.checkModeNavigation = function () {};

			/* */
			this.start = function () {};

			/* */
			this.reloadBookmark_ = function (param, values) {
				if (param == URL_PARAMS.q) {
					if (values[0] == SOLR_PARAMS.defaultQuery) {
						context.sortField = SOLR_PARAMS.defaultSortField.field;
					} else {
						context.sortField = SOLR_PARAMS.naturalOrder.field;
					}
				}
			};

			/* */
			this.surveillerAncre = function () {
				var hash = window.location.hash;
				if (!String.isBlank(hash)) {
					allerVersAncreByIdAncre(hash);
				} else {
					ouvrirOngletConsulter();
				}
			};

			/* */
			this.ajouterProperty = function (name, func) {
				var context = controller;
				if (typeof controller[name] == "undefined") {
					controller[name] = func;
				}
			};

			/**
    * Ajoute une valeur à un filtre.
    */
			this.addFilterValue = function (name, value, updateUrl) {
				context.search.start = 0;
				if ($.isArray(value)) {
					value.forEach(function (e) {
						context.filters.addFilterValue(name, e);
					});
				} else {
					context.filters.addFilterValue(name, value);
				}
				context.uriManager.setValue(URL_PARAMS.start, 0);
				if (typeof updateUrl == "undefined" || updateUrl) {
					context.uriManager.setValue(name, context.filters.getFiltersValues(name));
				}
			};

			/**
    * Supprime une valeur de filtre de la recherche.
    */
			this.removeFilterValue = function (name, value, updateUrl) {
				context.search.start = 0;
				if ($.isArray(value)) {
					value.forEach(function (e) {
						context.filters.removeFilterValue(name, e);
					});
				} else {
					context.filters.removeFilterValue(name, value);
				}
				if (typeof updateUrl == "undefined" || updateUrl) {
					context.uriManager.setValue(name, context.filters.getFiltersValues(name));
				}
				context.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Ajoute un critére au bloc mes critères.
    */
			this.addCritere = function (params) {
				context.mesCriteres.addCritere(params);
			};

			/**
    * Nettoie l'ensemble des valeurs d'un filtre.
    */
			this.removeValues = function (name, updateUrl) {
				if (name && name != "null") {
					context.filters.removeValues(name);
					if (typeof updateUrl == "undefined" || updateUrl) {
						context.uriManager.setValue(name, null);
					}
				}
			};

			/* */
			this.initControllerStandard = function () {
				context.internal = {};
				context.internal.uriManager = new UriManager(window.location.origin + window.location.pathname, document.title);
				context.internal.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);

				context.internal.searchbar = new SearchbarView($("#searchbar-header"), context.internal.uriManager);
				context.internal.searchbar.addObserver(context);

				context.internal.navigationHistorique = new NavigationHistorique();
				context.internal.navigationHistorique.ajouterEvent(function () {
					return context.surveillerAncre();
				});

				context.internal.uriManager.reload();

				context.surveillerAncre();
			};
		};

		CommonControllerFactory.prepareControllerStandard = function (controller) {
			var factory = new CommonControllerFactory(controller);

			factory.ajouterProperty("search", null);
			factory.ajouterProperty("uriManager", null);
			factory.ajouterProperty("navigationHistorique", null);
			factory.ajouterProperty("sortField", null);

			factory.ajouterProperty("getQuery", factory.getQuery);
			factory.ajouterProperty("redirection", factory.redirection);
			factory.ajouterProperty("post", factory.post);
			factory.ajouterProperty("notify", factory.notifyStandard);
			factory.ajouterProperty("redirect", factory.redirect);
			factory.ajouterProperty("start", factory.start);
			factory.ajouterProperty("surveillerAncre", factory.surveillerAncre);
			factory.ajouterProperty("initController", factory.initControllerStandard);
		};

		CommonControllerFactory.prepareController = function (controller) {
			var factory = new CommonControllerFactory(controller);

			factory.ajouterProperty("search", null);
			factory.ajouterProperty("uriManager", null);
			factory.ajouterProperty("sortField", null);

			factory.ajouterProperty("post", factory.post);
			factory.ajouterProperty("changeRows", factory.changeRows);
			factory.ajouterProperty("changePage", factory.changePage);
			factory.ajouterProperty("changeSortField", factory.changeSortField);
			factory.ajouterProperty("getQuery", factory.getQuery);
			factory.ajouterProperty("setQuery", factory.setQuery);
			factory.ajouterProperty("reset", factory.reset);
			factory.ajouterProperty("notify", factory.notify);
			factory.ajouterProperty("redirect", factory.redirect);
			factory.ajouterProperty("start", factory.start);
			factory.ajouterProperty("reloadBookmark_", factory.reloadBookmark_);
			factory.ajouterProperty("redirection", factory.redirection);
			factory.ajouterProperty("surveillerAncre", factory.surveillerAncre);
		};

		CommonControllerFactory.prepareFacetController = function (controller) {
			var factory = new CommonControllerFactory(controller);

			factory.ajouterProperty("addFilterValue", factory.addFilterValue);
			factory.ajouterProperty("removeFilterValue", factory.removeFilterValue);
			factory.ajouterProperty("addCritere", factory.addCritere);
			factory.ajouterProperty("removeValues", factory.removeValues);
		};

		/**
   * Controller de la page de d'affichage des fiche et de l'arbre de nomenclature (nafr2, cpfr21).
   */
		WEB4G.CONTROLLER.NomenclatureFicheController = function ($) {
			return function () {
				var ctx = this;
				CommonControllerFactory.prepareControllerStandard(this);

				this.selectNiveaux = $('#niveaux-nomeclature select');
				this.selectNiveaux.combobox();
				this.tree = new NomenclatureTree();
				this.nomenclatureName = $('#nomenclature').text();
				this.tree.start();

				this.uriManager = new UriManager(window.location.origin + window.location.pathname, document.title);
				var searchbarHeader = new SearchbarView($('#searchbar-header'), this.uriManager, 'moteur-recherche');
				searchbarHeader.addObserver(this);
				this.searchbar = new SearchbarView($('#searchbar-nomenclature'), this.uriManager, 'moteur-naf');
				this.uriManager.manage(URL_PARAMS.q, this.searchbar, URL_PARAMS.q);
				this.searchbar.addObserver(this);

				/* */
				this.notify = function (message, params) {
					if (message == 'rechercher' && params.id == 'moteur-recherche') {
						this.redirection();
					} else if (message == 'rechercher' && params.id == 'moteur-naf') {
						var params = this.uriManager.getBookmarkParam(URL_PARAMS.q);
						if (this.selectNiveaux.val()) {
							params += '&' + URL_PARAMS.niveau + '=' + this.selectNiveaux.val();
						}
						window.location = contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + this.nomenclatureName + '?' + params;
					}
				};

				/* */
				this.reloadBookmark_ = function (name, values) {};
			};
		}(jQuery);

		//var React = require('react');
		//var React = require('react-dom');
		//var Hello = require('../jsx/document.jsx');

		WEB4G.CONTROLLER.ControllerRechercheCOG = function (params) {
			var ctx = this;
			CommonControllerFactory.prepareController(this);

			params = $.extend({
				showSelection: false,
				limiteSelections: 3,
				title: langue == 'en' ? 'Search for a geographical area | Insee' : 'Rechercher sur une zone géographique | Insee'
			}, params);
			/* attributs */
			this.$wait = $('#geo-waiting');
			this.$documents = $('#documents');
			this.$navUp = $('#navigateur-up');
			this.$navDown = $('#navigateur-down');
			this.$numFound = $('#nombre-resultats');
			this.options = {};
			this.documents = {};
			this.documentsView = new DocumentsView();
			this.title = params.title;

			/* */
			this.start = function () {
				$.getJSON(contextPath + '/' + langue + '/metadonnees/geographie-administrative/cog/referentiel-niveaux').done(function (data) {
					ctx.launch(data);
				}).fail(function () {
					if (console) console.log(arguments);
				});
			};

			/* */
			this.launch = function (niveaux) {
				this.uriManager = new UriManager(window.location.origin + window.location.pathname, this.title);

				this.searchbarView = new SearchbarView($('#searchbar-header'), this.uriManager);
				this.searchbarView.getController = function () {
					return ctx;
				};

				this.searchbarView.addObserver(this);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.geographie, this, URL_PARAMS.geographie);
				this.uriManager.manage(URL_PARAMS.start, this.searchbarView, URL_PARAMS.start, 0);
				this.uriManager.reload();

				this.suggesterCOG = new SuggesterCOG({ niveaux: niveaux });
				this.suggesterCOG.addObserver(this);
				this.post();
			};

			/* */
			this.post = function () {
				$('#wait').attr('class', 'wait-on');
				this.uriManager.refreshUri();
				this.callback({
					documents: []
				});
			};

			/* */
			this.callback = function (json) {
				$('#wait').attr('class', 'wait-off');

				var domDoc = [];
				json.documents.forEach(function (doc) {
					if (!(doc.id in ctx.documents)) {
						var filAriane = DocumentViewDom.getFilNomenclature(doc, NOMENCLATURE_LIBELLE[doc.typeProduit]);
						var $fiche = ctx.documentsView.renderFicheCOG(doc);
						ctx.$documents.append($fiche);
						ctx.documents[doc.id] = { $li: $fiche, fiche: doc };
						ctx.suggesterCOG.ajouterSelection(doc);
					} else {
						ctx.suggesterCOG.pulseSelection(doc);
					}
				});
				Tools.ligneCliquable();
				//		ReactDOM.render(<SolrDocuments list={domDoc} />,document.getElementById('documents'));
				this.refreshUrl();
			};

			/* */
			this.notify = function (message, params) {
				if (message == 'rechercher') {
					this.redirection();
				} else if (message == 'selectOption') {
					this.chercherFicheCOG(params.value.touteZone);
				} else if (message == 'selectOptionCommuneContenant') {
					this.chercherFicheCommuneContenant(params.value.touteZone);
				} else if (message == 'removeOption') {
					if (params.id in this.documents) {
						this.documents[params.id].$li.remove();
						delete this.documents[params.id];
						this.refreshUrl();
					}
				} else if (message == 'suggester-reset') {
					this.reset();
				}
			};

			/* */
			this.refreshUrl = function () {
				var values = [];
				for (var k in this.documents) {
					var value = this.documents[k].fiche.touteZone.niveau.code + URL_PARAMS.separatorGeoraphie + this.documents[k].fiche.touteZone.code;
					if ($.inArray(value, values) == -1) {
						values.push(value);
					}
				}
				this.uriManager.setValue(URL_PARAMS.geographie, values);
				this.uriManager.refreshUri();
			};

			/* */
			this.chercherFicheCOG = function (zone) {
				ctx.$wait.attr('class', 'waiting-on');
				var callback = function callback(responses) {
					ctx.callback(responses);
				};

				this.ajaxFiche({
					data: JSON.stringify({ q: '*:*', filters: [{ field: 'geographie_codeNiveau', value: zone.niveau.code }, { field: 'geographie_code', value: zone.code }] })
				});
			};

			/* */
			this.chercherFicheCommuneContenant = function (zone) {
				//
				ctx.$wait.attr('class', 'waiting-on');
				var callback = function callback(responses) {
					ctx.callback(responses);
				};

				this.ajaxFiche({
					data: JSON.stringify({
						q: '*:*',
						filters: [{ field: 'geographie_codeNiveau', value: ctx.suggesterCOG.getNiveauCourant() }, { field: 'geographie_communesContenues_sss', value: 'COM-' + zone.code }]
					})
				});
			};

			/* */
			this.ajaxFiche = function (params) {
				params = $.extend({
					url: encodeURI(contextPath + '/' + langue + '/metadonnees/geographie-administrative/cog/consultation'),
					type: 'POST',
					data: {},
					contentType: 'application/json; charset=utf-8',
					dataType: 'json'
				}, params);

				var callback = function callback(responses) {
					ctx.callback(responses);
				};

				$.ajax(params).done(function (response) {
					ctx.$wait.attr('class', 'waiting-off');
					callback.call(ctx, response);
				}).fail(function () {
					console.log(arguments);
					ctx.$wait.attr('class', 'waiting-off');
				});
			};

			/* */
			this.reloadBookmark_ = function (key, values) {
				if (key == URL_PARAMS.geographie) {
					values.forEach(function (e) {
						var tmp = e.split(URL_PARAMS.separatorGeoraphie);
						ctx.chercherFicheCOG({ code: tmp[1], niveau: { code: tmp[0] } });
					});
				}
			};

			/* */
			this.reset = function () {
				for (var k in this.documents) {
					this.documents[k].$li.remove();
					delete this.documents[k];
				}
				this.refreshUrl();
			};

			/* */
			this.getQuery = function () {
				return '';
			};
		};

		WEB4G.CONTROLLER.DdlController = function ($) {

			return function () {
				var ctx = this;
				CommonControllerFactory.prepareControllerStandard(this);

				/* */
				this.start = function () {
					this.suggester = new SuggesterGeographie({ debug: true, idProduit: this.idProduit, showSelection: true, limiteSelections: 20 });
					this.uriManager = new UriManager(contextPath + "/" + langue + WEB4G_URL.ddlSelection + "/" + this.idProduit, $(".titre-principal span").text() + " | Insee");
					this.uriManager.manage(URL_PARAMS.geographie, this, URL_PARAMS.geographie);
					this.uriManager.manage(URL_PARAMS.geographieNiveauFacet, this, URL_PARAMS.geographieNiveauFacet);
					this.uriManager.manage(URL_PARAMS.geographieCodeFacet, this, URL_PARAMS.geographieCodeFacet);

					this.suggester.addObserver(this);
					this.suggester.start();

					this.searchbar = new SearchbarView($("#searchbar-header"), this.uriManager);
					this.uriManager.manage(URL_PARAMS.start, this.searchbar, URL_PARAMS.start, 0);
					this.searchbar.addObserver(this);
					this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
					this.uriManager.manage(URL_PARAMS.q, this.searchbar, URL_PARAMS.q);

					$(".bouton-raz, #bouton-raz-geographie").click(function () {
						ctx.reset();
					});
				};

				/* */
				this.reloadBookmark_ = function (name, values) {
					if (name == URL_PARAMS.geographie) {
						var zones = [],
						    zoneCount = this.suggester.paramsCount;

						for (var i = 0; i < values.length; i++) {
							var tmp = values[i].split("-"),
							    idZone = tmp[0] + tmp[1],
							    count = idZone in zoneCount ? zoneCount[idZone] : 0;
							if (count > 0) {
								zones.push({ code: tmp[1], niveau: { code: tmp[0] } });
							}
						}
						this.reloadZones(zones);
					} else if (name == URL_PARAMS.geographieNiveauFacet) {
						this.paramNiveau = values[0];
					} else if (name == URL_PARAMS.geographieCodeFacet) {
						var zones = [],
						    r = new RegExp("^" + this.paramNiveau);
						$(values).each(function () {
							zones.push({ code: this.replace(r, ''), niveau: { code: ctx.paramNiveau } });
						});
						this.reloadZones(zones);
					} else if (name == URL_PARAMS.q) {
						this.query = values;
						this.loadQuery();
					}
				};

				/* */
				this.reloadZones = function (zones) {
					this.provider.enrichirZones({
						zones: zones,
						success: function success(data) {
							$(data).each(function () {
								if (!ctx.isSelection(this)) {
									ctx.ajouterZone(this);
									ctx.suggester.afficherSelection(this);
								}
							});
							ctx.refreshUrl();
							ctx.render();
						},
						fail: function fail() {}
					});
				};

				/* */
				this.notify = function (source, value) {
					if (source == "nivgeo") {
						if (typeof value.code != "undefined") {
							this.ajouterZone(value);
						}
						this.refreshUrl();
						this.render();
					} else if (source == "suggestiongeo") {
						this.ajouterZone(value);
						this.refreshUrl();
						this.render();
					} else if (source == "selection") {
						this.supprimerZone(value);
						this.refreshUrl();
						this.render();
					} else if (source == "refresh") {
						this.urlDirect = contextPath + "/" + langue + WEB4G_URL.statistiques + "/" + this.suggester.document.id;
						this.uriManager.reload();
					} else if (source == 'rechercher') {
						this.redirection();
					}
				};

				/* */
				this.refreshUrl = function () {
					// ecrasement des vieux bookmark
					this.uriManager.setValue(URL_PARAMS.geographieNiveauFacet, null);
					this.uriManager.setValue(URL_PARAMS.geographieCodeFacet, null);
					// nouveau params
					var params = [],
					    first = true;
					for (var k in this.selections) {
						if (this.selections[k].zone.niveau.code === 'FE' || this.selections[k].zone.niveau.code === 'METRO') {
							if (first) {
								first = false;
								params.push('FRANCE-1');
							}
						} else {
							params.push(this.selections[k].zone.niveau.code + "-" + this.selections[k].zone.code);
						}
					}
					this.uriManager.setValue(URL_PARAMS.geographie, params);
					this.uriManager.refreshUri();
				};

				this.getKey = function (zone) {
					return zone.code + zone.niveau.code + zone.libelle;
				};

				/* */
				this.ajouterZone = function (zone) {
					if (zone.niveau.code === 'FRANCE') {
						var key = this.getKey(zone);
						if (!(key in ctx.selections)) {
							this.suggester.getNiveauxFrance().forEach(function (e) {
								ctx.selections[e.code] = { zone: { id: e.code, code: '1', niveau: e, libelle: e.libelle } };
							});
						}
					} else {
						var key = this.getKey(zone);
						if (!(key in this.selections)) {
							this.selections[key] = { zone: zone };
						}
					}
				};

				/* */
				this.isSelection = function (zone) {
					var key = zone.id;
					return key in this.selections;
				};

				/* */
				this.supprimerZone = function (zone) {
					// var key = zone.niveau.code + zone.code + zone.libelle;
					if (zone.niveau.code === 'FRANCE') {
						if (typeof this.selections['FE'] !== 'undefined') {
							delete this.selections['FE'];
						}
						if (typeof this.selections['METRO'] !== 'undefined') {
							delete this.selections['METRO'];
						}
					} else {
						var key = this.getKey(zone);
						if (key in this.selections) {
							delete this.selections[key];
						}
					}
				};

				/* */
				this.reset = function () {
					this.selections = {};
					this.suggester.reset();
					this.refreshUrl();
					this.render();
				};

				/* */
				this.render = function () {
					var documents = new Array();
					for (var k in this.selections) {
						var zone = this.selections[k].zone;
						var idSommaire;
						if (parseInt(this.suggester.document.famille.idParent) == DocumentsView.idFamilleEntreeSommaire && this.suggester.document.idProduitSommaireParent != null) {
							idSommaire = this.suggester.document.idProduitSommaireParent;
						}
						var libelleGeo = this.provider.isZoneNiveau(this.selections[k].zone.niveau.code) ? '<span class=\'libelle-geo\'>' + zone.libelle + '</span>' : '<span class=\'libelle-geo\'>' + (langue == 'en' ? zone.niveau.libelleEn : zone.niveau.libelle) + ' : ' + zone.libelle + ' (' + zone.code + ')' + '</span>',
						    doc = {
							id: this.idProduit,
							titre: this.suggester.document.titre + "&#8239;&ndash;&#8239;" + libelleGeo,
							famille: { id: this.suggester.document.famille.id, categorie: {
									id: this.suggester.document.famille.categorie.id,
									libelleFr: this.suggester.document.famille.categorie.libelleFr,
									libelleEn: this.suggester.document.famille.categorie.libelleEn
								} },
							dateDiffusion: this.suggester.document.dateDiffusion,
							code: zone.code,
							niveauGeo: zone.niveau.code,
							libelleZone: zone.libelle,
							idSommaire: idSommaire
						};
						documents.push(doc);
					}
					this.documentsView.render(documents);
				};

				/* */
				this.loadQuery = function () {
					this.$wait.attr("class", "wait-on");
					var params = {
						q: '',
						defType: SOLR_PARAMS.defaultDefType,
						start: 0,
						filters: [{ field: 'geographie_idProduitDdl', value: this.suggester.idProduit }]
					},
					    limite = 20,
					    callback = function callback(data) {
						var zones = [];
						$(data.documents).each(function () {
							if (zones.length < limite) {
								zones.push(this.touteZone);
							}
						});
						ctx.reloadZones(zones);
						ctx.$wait.attr("class", "wait-off");
					};
					$(this.query).each(function () {
						params.q += this + " ";
					});

					if (!String.isBlank(params.q)) {
						$.ajax({
							url: this.urlGeo,
							type: "POST",
							data: JSON.stringify(params),
							contentType: 'application/json; charset=utf-8',
							dataType: 'json',
							success: callback,
							error: function error(data) {
								console.log(data);
								console.log("error", arguments);
								ctx.$wait.hide();
							}
						});
					}
				};

				/* attributs */
				this.selections = {};
				this.$wait = $("#wait");
				this.documentsView = new DocumentsDdlView($("#documents"));
				this.suggesterId = "geographie";
				this.idProduit = $("#id").text();
				this.provider = new ZoneProvider();
				this.urlGeo = encodeURI(contextPath + "/" + langue + "/solr/consultation/geo");
				this.urlDirect;
			};
		}(jQuery);

		/**
   * Controller de la page de recherhce dans la rubrique métadonnées.
   */
		WEB4G.CONTROLLER.MetadonnesController = function () {
			CommonControllerFactory.prepareController(this);
			CommonControllerFactory.prepareFacetController(this);
			var params = {
				filter: 'metadonnees',
				pathname: WEB4G_URL.rechercheMetadonnees,
				title: langue == 'en' ? "Search | Insee" : "Rechercher | Insee"
			};
			var ctx = this,
			    startApplication = true;

			this.documentsView;
			this.numfound;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.searchbarView;
			this.filArianeView;

			this.filter = params.filter;
			this.pathname = params.pathname;
			this.title = params.title;
			this.isSearchEvent = false;
			this.filters = new Filters();

			this.sortField = SOLR_PARAMS.naturalOrder.field;

			this.uriManager = new UriManager(contextPath + "/" + langue + this.pathname, this.title);
			this.rubriqueActive;

			this.$documents = $("#documents");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$numFound = $("#nombre-resultats");
			this.$filRecherche = $("#fil-recherche");

			this.filHref = this.$filRecherche.attr('href').split('[?]')[0];
			document.title = params.title;

			/* */
			this.launch = function (types, rubriques) {
				var libelleLangue;
				switch (langue) {
					default:
					case 'fr':
						libelleLangue = "libelleFr";
						types.forEach(function (e) {
							NOMENCLATURE_LIBELLE[e.code] = e.libelleFr;
						});
						break;
					case 'en':
						libelleLangue = "libelleEn";
						types.forEach(function (e) {
							NOMENCLATURE_LIBELLE[e.code] = e.libelleEn;
						});
						break;
				}
				this.search = new Search(contextPath + "/" + langue + "/solr/consultation");
				this.search.getFilters = function () {
					var filters = ctx.filters.getFilters();
					filters.push({ 'field': 'rubrique', 'value': ctx.filter });
					return filters;
				};
				this.documentsView = new DocumentsView(this.$documents);
				var sortAction = function sortAction(value) {
					ctx.changeSortField(value);
					ctx.post();
				};
				var sortOptions = [{ value: SOLR_PARAMS.naturalOrder.field, libelle: 'Trier par pertinence', action: sortAction, i18n: "echos.infos.trier-pertinence" }, { value: SOLR_PARAMS.defaultSortField.field, libelle: 'Trier par date', action: sortAction, i18n: "echos.infos.trier-date" }];

				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbarView.getController = function () {
					return ctx;
				};
				this.metadonneesView = new FacetteSimple($('#metadonnees'), FACETTE.typeProduit.id);
				this.metadonneesView.initialise(types, { id: "code", title: libelleLangue });
				this.metadonneesView.addObserver(this);
				this.mesCriteres = new MesCriteres($("#mes-criteres"));

				var getController = function getController() {
					return ctx;
				};
				this.navigateurViewUp.getController = getController;
				this.navigateurViewDown.getController = getController;

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.idPrec, this, URL_PARAMS.idPrec);
				this.uriManager.manage(FACETTE.typeProduit.id, this.metadonneesView, URL_PARAMS.typeProduit);
				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);
				this.uriManager.reload();

				// launch
				this.post();
				this.initReset();
				Responsive.ResponsiveManager.reset();
			};

			/* */
			this.start = function () {
				$("#wait").attr("class", "wait-on");
				$.when($.getJSON(contextPath + "/" + langue + "/solr/types"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques")).done(function (types, rubriques) {
					ctx.launch(types[0], rubriques[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			/* */
			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.uriManager.refreshUri();
				if (this.sortField == SOLR_PARAMS.naturalOrder.field) {
					this.search.sortFields = [SOLR_PARAMS.naturalOrder];
				} else {
					this.search.sortFields = [SOLR_PARAMS.defaultSortField];
				}
				var query = this.uriManager.getBookmarkParam(URL_PARAMS.q);
				this.$filRecherche.attr('href', this.filHref + '?' + query);
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback.call(ctx, json);
				});
			};

			/* */
			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");
				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q), this.uriManager);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.numfound.render(json.numFounds, this.getQuery().replace(/\"/g, ''));
				this.mesCriteres.cleanAll();

				Tools.scrollTo(this.idPrec);
				this.idPrec = null;
				this.uriManager.setValue(URL_PARAMS.idPrec, []);

				$(json.facetsField).each(function () {
					if (this.name == "typeProduit") {
						ctx.metadonneesView.render(this);
					}
				});
			};

			/* */
			this.notify = function (message, params) {
				if (message == "rechercher") {
					this.search.q = params.request;
					this.redirection();
				} else if (message == MSG_FACETTE.post) {
					this.post();
				} else if (message == MSG_FACETTE.addFilter) {
					this.addFilterValue(params.facette, params.value, params.updateUrl);
				} else if (message == MSG_FACETTE.removeFilter) {
					this.removeFilterValue(params.facette, params.value, params.updateUrl);
				} else if (message == MSG_FACETTE.addCritere) {
					this.addCritere(params);
				} else if (message == MSG_FACETTE.cleanFilter) {
					this.removeValues(params.facette, params.updateUrl);
				}
			};

			/* */
			this.reset = function () {
				this.search.start = 0;
				this.metadonneesView.reset();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/* */
			this.redirection = function () {
				this.redirect(WEB4G_URL.recherche);
			};

			/* */
			this.initReset = function () {
				$("#bouton-raz-metadonnees").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.metadonneesView.reset();
					ctx.post();
				});

				$(".facettes .criteres .titre-mes-criteres .bouton-raz").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.reset();
					ctx.post();
				});
			};

			this.reloadBookmark_ = function (param, values) {
				if (param == URL_PARAMS.idPrec) {
					this.idPrec = values[0];
				}
			};
		};

		WEB4G.CONTROLLER.NomenclatureController = function ($) {
			var solrParams = {
				q: '*:*',
				start: 0,
				rows: 100,
				facetsQuery: [],
				filters: []
			};

			return function () {
				var ctx = this;
				CommonControllerFactory.prepareControllerStandard(this);

				/* */
				this.start = function () {
					//console.log('start');
					this.uriManager.reload();
					this.search();
				};

				/* */
				this.search = function () {
					//console.log('search');
					$.ajax({
						url: this.urlConsultation,
						type: 'POST',
						data: JSON.stringify(solrParams),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: function success(data) {
							ctx.$wait.attr('class', 'waiting-off');
							ctx.callback(data);
						},
						error: function error(data) {
							ctx.$wait.attr('class', 'waiting-off');
							console.log('error');
						}
					});
				};

				/* */
				this.callback = function (solrData) {
					//console.log('callback');
					var valeurParamChampRecherche = new URL(window.location.href).searchParams.get('champRecherche');
					if (valeurParamChampRecherche != undefined || valeurParamChampRecherche != 'undefined') {
						this.rubriqueView.render(solrData, this.nomenclature, '?champRecherche=' + valeurParamChampRecherche);
					} else {
						this.rubriqueView.render(solrData, this.nomenclature);
					}
				};

				/* */
				this.reloadBookmark_ = function (name, values) {
					//console.log('reloadBookmark_');
					if (name == URL_PARAMS.q) {
						var q = '';
						for (var i = 0; i < values.length; i++) {
							q += decodeURIComponent(values[i] + ' ');
						}
						solrParams.q = q;
					} else if (name == URL_PARAMS.niveau) {
						solrParams.filters = [{ field: 'nomenclature_type', values: [values[0]] }];
					}
				};

				/* */
				this.gererAffichageEchos = function (valeurParamQ) {
					//console.log('gererAffichageEchos');
					if (valeurParamQ == undefined || valeurParamQ === '') {
						$('#documents').addClass('hidden');
					} else {
						$('#documents').removeClass('hidden');
					}
				};

				/* */
				this.gererAffichageChampRecherche = function (valeurParamChampRecherche) {
					//console.log('gererAffichageChampRecherche');
					if (valeurParamChampRecherche == 'false') {
						$('#recherche-nomenclature').addClass('hidden');
					} else {
						$('#recherche-nomenclature').removeClass('hidden');
					}
				};

				/* Constructeur */
				this.nomenclatureTitre = $('#nomenclatureTitre').text();
				this.rubriqueView = new RubriqueView($('#rubriques #documents'));
				this.$wait = $('#nomenclature-waiting').attr('class', 'waiting-off');
				this.nomenclature = $('#nomenclature').text();
				this.urlConsultation = encodeURI(contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + this.nomenclature + '/consultation');

				this.uriManager = new UriManager(contextPath + '/' + langue + WEB4G_URL.metadonnees + '/' + this.nomenclature, this.nomenclatureTitre);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.niveau, this, URL_PARAMS.niveau);

				this.searchbar = new SearchbarView($('#searchbar-nomenclature'), this.uriManager, 'naf', true);
				this.uriManager.manage(URL_PARAMS.q, this.searchbar, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.champRecherche, this.searchbar, URL_PARAMS.champRecherche);
				this.uriManager.manage(URL_PARAMS.niveau, this.searchbar, URL_PARAMS.niveau);
				this.searchbarHeader = new SearchbarView($('#searchbar-header'), this.uriManager, 'moteur');
				this.searchbarHeader.addObserver(this);
				this.searchbar.addObserver(this);

				var valeurParamQ = this.uriManager.getParamValues('q')[0];
				this.gererAffichageEchos(valeurParamQ);

				var valeurParamChampRecherche = this.uriManager.getParamValues('champRecherche')[0];
				if (valeurParamChampRecherche == undefined) {
					valeurParamChampRecherche = setGetParameter('champRecherche', 'true');
				}
				this.gererAffichageChampRecherche(valeurParamChampRecherche);

				this.selectNiveaux = $('#niveaux-nomeclature select');
				this.selectNiveaux.combobox();
				var niveau = this.uriManager.getParamValues('niveau');
				if (niveau.length > 0) {
					this.selectNiveaux.val(niveau[0]);
					this.selectNiveaux.selectric('refresh');
				}
				this.selectNiveaux.change(function (e) {
					if ($(this).val()) {
						ctx.uriManager.setValue(URL_PARAMS.niveau, $(this).val());
						solrParams.filters = [{ field: 'nomenclature_type', values: [$(this).val()] }];
					} else {
						ctx.uriManager.setValue(URL_PARAMS.niveau, null);
						solrParams.filters = [];
					}
					ctx.searchbar.submit();
					e.stopImmediatePropagation();
					e.preventDefault();
				});

				/* */
				this.notify = function (message, params) {
					//console.log('notify');
					if (message == 'rechercher' && params.id == 'moteur') {
						this.redirection();
					} else if (message == 'rechercher' && params.id == 'naf') {
						this.$wait.attr('class', 'waiting-on');
						this.uriManager.refreshUri();

						var valeurParamQ = this.uriManager.getParamValues('q')[0];
						ctx.gererAffichageEchos(valeurParamQ);

						var valeurParamChampRecherche = this.uriManager.getParamValues('champRecherche')[0];
						ctx.gererAffichageChampRecherche(valeurParamChampRecherche);

						solrParams.q = params.request;
						this.search();
					}
				};
			};
		}(jQuery);

		/**
   * Controller mixte utilisé pour la page de recherche dans l'insee et services.
   */
		WEB4G.CONTROLLER.RubriqueController = function (params) {
			CommonControllerFactory.prepareController(this);
			params = $.extend({
				filter: null,
				pathname: null,
				title: langue == 'en' ? "Search | Insee" : "Rechercher | Insee"
			}, params);
			var ctx = this,
			    startApplication = true;

			this.documentsView;
			this.numfound;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.searchbarView;
			this.filArianeView;

			this.filter = params.filter;
			this.pathname = params.pathname;
			this.title = params.title;
			this.isSearchEvent = false;

			this.sortField = SOLR_PARAMS.naturalOrder.field;

			this.uriManager = new UriManager(contextPath + "/" + langue + this.pathname, this.title);
			this.rubriqueActive;

			this.$documents = $("#documents");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$numFound = $("#nombre-resultats");
			this.$filRecherche = $("#fil-recherche");

			this.filHref = this.$filRecherche.attr('href').split('[?]')[0];
			document.title = params.title;

			this.start = function () {
				this.search = new Search(contextPath + "/" + langue + "/solr/consultation");
				this.search.getFilters = function () {
					return [{ 'field': 'rubrique', 'value': ctx.filter }];
				};
				this.documentsView = new DocumentsView(this.$documents);
				var sortAction = function sortAction(value) {
					ctx.changeSortField(value);
					ctx.post();
				};
				var sortOptions = [{ value: SOLR_PARAMS.naturalOrder.field, libelle: 'Trier par pertinence', action: sortAction, i18n: "echos.infos.trier-pertinence" }, { value: SOLR_PARAMS.defaultSortField.field, libelle: 'Trier par date', action: sortAction, i18n: "echos.infos.trier-date" }];

				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbarView.getController = function () {
					return ctx;
				};

				var getController = function getController() {
					return ctx;
				};
				this.navigateurViewUp.getController = getController;
				this.navigateurViewDown.getController = getController;

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.idPrec, this, URL_PARAMS.idPrec);
				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);
				this.uriManager.reload();

				this.post();
				Responsive.ResponsiveManager.reset();
			};

			/* */
			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.uriManager.refreshUri();
				if (this.sortField == SOLR_PARAMS.naturalOrder.field) {
					this.search.sortFields = [SOLR_PARAMS.naturalOrder];
				} else {
					this.search.sortFields = [SOLR_PARAMS.defaultSortField];
				}
				var query = this.uriManager.getBookmarkParam(URL_PARAMS.q);
				this.$filRecherche.attr('href', this.filHref + '?' + query);
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback.call(ctx, json);
				});
			};

			/* */
			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");
				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q), this.uriManager);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.numfound.render(json.numFounds, this.getQuery().replace(/\"/g, ''));

				Tools.scrollTo(this.idPrec);
				this.idPrec = null;
				this.uriManager.setValue(URL_PARAMS.idPrec, []);
			};

			/* */
			this.notify = function (message, params) {
				if (message == "rechercher") {
					this.search.q = params.request;
					this.redirection();
				}
			};

			/* */
			this.redirection = function () {
				this.redirect(WEB4G_URL.recherche);
			};

			/* */
			this.reloadBookmark_ = function (param, values) {
				if (param == URL_PARAMS.idPrec) {
					this.idPrec = values[0];
				}
			};
		};

		/**
  * controller commun à la page de recherche dans la rubrique stat et la page dite de navigation.
  */
		WEB4G.CONTROLLER.SolrControllerEx = function (params) {
			var ctx = this;
			CommonControllerFactory.prepareController(this);

			params = $.extend({
				pathname: contextPath + "/" + langue + WEB4G_URL.rechercheStatistiques,
				isNavigation: true
			}, params);

			this.isNavigation = params.isNavigation == 'true';
			if (this.isNavigation) {
				this.title = langue == 'en' ? "Statistics and studies | Insee" : "Statistiques et études | Insee";
			} else {
				this.title = langue == 'en' ? "Search | Insee" : "Recherche | Insee";
			}

			this.documentsView;
			this.numfound;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.themesView;
			this.categoriesView;
			this.geographieView;
			this.collectionView;
			this.conjonctureView;
			this.searchbarView;
			this.mesCriteres;
			this.search;
			this.filters = new Filters();
			this.uriManager = new UriManager(params.pathname, this.title);
			this.sortField = SOLR_PARAMS.defaultSortField.field;

			this.$documents = $("#documents");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$numFound = $("#nombre-resultats");
			this.$themes = $("#themes");
			this.$categories = $("#categories");
			this.$geographie = $("#geographie");
			this.$mesCriteres = $("#mes-criteres");
			this.$filRecherche = $("#fil-recherche");
			if (this.$filRecherche.length > 0) {
				this.filHref = this.$filRecherche.attr('href').split('[?]')[0];
			}
			this.isModeMoteur = false;
			this.rubriqueActive;
			this.conjonctureActive = false;

			/**
    * Démarage du service.
    */
			this.start = function () {
				// chargement synchrone des nomenclatures...
				$("#wait").attr("class", "wait-on");
				$.when($.getJSON(contextPath + "/" + langue + "/solr/themes"), $.getJSON(contextPath + "/" + langue + "/solr/categories"), $.getJSON(contextPath + "/" + langue + "/solr/niveauxGeographiques"), $.getJSON(contextPath + "/" + langue + "/solr/collections"), $.getJSON(contextPath + "/" + langue + "/solr/conjonctures"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques")).done(function (themes, categories, niveauxGeographiques, collections, conjonctures, rubriques) {
					ctx.launch(themes[0], categories[0], niveauxGeographiques[0], collections[0], conjonctures[0], rubriques[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			/* invoqué au dernier retour ajax de reférentiel, pour finaliser le démarrage */
			this.launch = function (jsonTheme, jsonCategorie, jsonNiveauxGeographiques, collections, conjonctures, rubriques) {
				var ctx = this;
				var libelleLangue;
				switch (langue) {
					default:
					case 'fr':
						libelleLangue = "libelleFr";
						break;
					case 'en':
						libelleLangue = "libelleEn";
						break;
				}

				this.search = new Search(contextPath + "/" + langue + "/solr/consultation");
				this.search.getController = function () {
					return ctx;
				};
				var sortAction = function sortAction(value) {
					ctx.changeSortField(value);
					ctx.post();
				};
				var sortOptions = [{ value: SOLR_PARAMS.naturalOrder.field, libelle: 'Trier par pertinence', action: sortAction, i18n: "echos.infos.trier-pertinence" }, { value: SOLR_PARAMS.defaultSortField.field, libelle: 'Trier par date', action: sortAction, i18n: "echos.infos.trier-date" }];
				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewUp.getController = function () {
					return ctx;
				};
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.navigateurViewDown.getController = function () {
					return ctx;
				};
				this.documentsView = new DocumentsView(this.$documents);
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));

				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbarView.submit = function () {
					var request = this.$input.val();
					if (!String.isBlank(request)) {
						this.uriManager.setValue(URL_PARAMS.q, request.trim().split(/\b\s+(?!$)/));
						this.onChange(request);
					}
				};

				this.themesView = new FacetteSpeciale(this.$themes, FACETTE.themeIdFacet.id);
				this.themesView.initialise(jsonTheme, { id: "id", title: libelleLangue, children: "sousTheme" });
				this.themesView.addObserver(this);
				this.categoriesView = new FacetteSimple(this.$categories, FACETTE.categorieIdFacet.id);
				this.categoriesView.initialise(jsonCategorie, { id: "id", title: libelleLangue, children: "sousCategorie" });
				this.categoriesView.addObserver(this);
				this.geographieView = new GeographieFacetteEx(this.$geographie, FACETTE.geographieNiveauFacet.id);
				this.geographieView.getRequestParams = function () {
					return {
						q: ctx.getQuery(),
						filters: ctx.getFilters([FACETTE.geographieCodeFacet.id])
					};
				};
				this.geographieView.initialise(jsonNiveauxGeographiques, { id: "code", title: "libelle" });
				this.geographieView.addObserver(this);
				this.collectionView = new CollectionFacet({
					$containerFacetteCollection: $("#collection-liste-content"),
					$searchBar: $("#collection-filtre"),
					$choix: $("#collection-choix"),
					$facetteListe: $("#collection-liste"),
					facetteId: FACETTE.facetteCollectionIdFacet.id,
					beanDefinition: { id: "id", title: libelleLangue }
				});
				this.collectionView.initialise(collections, { id: "code", title: libelleLangue });
				this.collectionView.addObserver(this);
				this.conjonctureView = new CollectionFacet({
					$containerFacetteCollection: $("#conjoncture-liste-content"),
					$searchBar: $("#conjoncture-filtre"),
					$choix: $("#conjoncture-choix"),
					$facetteListe: $("#conjoncture-liste"),
					facetteId: FACETTE.facetteConjonctureIdFacet.id,
					beanDefinition: { id: "id", title: libelleLangue }
				});
				this.conjonctureView.initialise(conjonctures, { id: "code", title: libelleLangue });
				this.conjonctureView.addObserver(this);

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);
				this.searchbarView.isNavigation = this.isNavigation;
				this.mesCriteres = new MesCriteres(this.$mesCriteres);

				this.$themes.checkboxes();
				this.$categories.checkboxes();
				Responsive.ResponsiveManager.addObserver(this);

				//  thémes et facette conjoncture à synchroniser.
				var ctx = this;
				$("#tabpanel-facette-conjoncture").parent().hide();
				this.themesView.addObserver({
					notify: function notify(code, data) {
						if (code == MSG_FACETTE.click) {
							var data = $(data.li).data();
							if (data.id == 30 && data.node.isActive()) {
								$("#tabpanel-facette-conjoncture").parent().show();
								ctx.conjonctureActive = true;
							} else if ((data.id == 30 || data.id == 27) && !data.node.isActive()) {
								$("#tabpanel-facette-conjoncture").parent().hide();
								ctx.conjonctureView.reset();
								ctx.conjonctureActive = false;
							}
						}
					}
				});

				// Gestion de l'url.
				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start);
				this.uriManager.manage(URL_PARAMS.rubriques, this.rubriquesView, URL_PARAMS.rubriques);
				this.uriManager.manage(URL_PARAMS.idPrec, this, URL_PARAMS.idPrec);

				this.uriManager.manage(FACETTE.themeIdFacet.id, this.themesView, URL_PARAMS.themeIdFacet);
				this.uriManager.manage(FACETTE.categorieIdFacet.id, this.categoriesView, URL_PARAMS.categorieIdFacet);
				this.uriManager.manage(FACETTE.geographieCodeFacet.id, this.geographieView, URL_PARAMS.geographie);
				this.uriManager.manage(FACETTE.geographieNiveauFacet.id, this.geographieView, URL_PARAMS.geographieNiveauFacet);
				this.uriManager.manage(FACETTE.facetteCollectionIdFacet.id, this.collectionView, URL_PARAMS.facetteCollectionIdFacet);
				this.uriManager.manage(FACETTE.facetteConjonctureIdFacet.id, this.conjonctureView, URL_PARAMS.facetteConjonctureIdFacet);
				this.uriManager.reload();

				this.post();
				this.initReset();
				Responsive.ResponsiveManager.reset();
			};

			/**
    * Lancement de la requête ajax de consultation.
    */
			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.uriManager.refreshUri();

				// filtre systématique pour recherche stat et nav.
				if (this.isNavigation) {
					this.filters.addFilterValue("DIFFUSION", true);
				}

				this.filters.addFilterValue("RUBRIQUE", 'statistiques');

				if (this.sortField == SOLR_PARAMS.naturalOrder.field) {
					this.search.sortFields = [SOLR_PARAMS.naturalOrder];
				} else {
					this.search.sortFields = [SOLR_PARAMS.defaultSortField];
				}

				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback(json);
				});
			};

			/**
    * Ajoute une valeur à un filtre.
    */
			this.addFilterValue = function (name, value, updateUrl, reloadBookmark) {
				var ctx = this;
				if ($.isArray(value)) {
					value.forEach(function (e) {
						ctx.filters.addFilterValue(name, e);
					});
				} else {
					this.filters.addFilterValue(name, value);
				}
				if (typeof reloadBookmark == 'undefined' || reloadBookmark != true) {
					this.search.start = 0;
					this.uriManager.setValue(URL_PARAMS.start, 0);
				}
				if (typeof updateUrl == "undefined" || updateUrl) {
					this.uriManager.setValue(name, this.filters.getFiltersValues(name));
				}
			};

			/**
    * Supprime une valeur de filtre de la recherche.
    */
			this.removeFilterValue = function (name, value, updateUrl) {
				var ctx = this;
				this.search.start = 0;
				if ($.isArray(value)) {
					value.forEach(function (e) {
						ctx.filters.removeFilterValue(name, e);
					});
				} else {
					this.filters.removeFilterValue(name, value);
				}
				if (typeof updateUrl == "undefined" || updateUrl) {
					this.uriManager.setValue(name, this.filters.getFiltersValues(name));
				}
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Nettoie l'ensemble des valeurs de tout les filtres.
    */
			this.removeAllValues = function () {
				this.search.start = 0;
				this.filters.removeAllValues();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Nettoie l'ensemble des valeurs d'un filtre.
    */
			this.removeValues = function (name, updateUrl) {
				if (name && name != "null") {
					this.filters.removeValues(name);
					if (typeof updateUrl == "undefined" || updateUrl) {
						this.uriManager.setValue(name, null);
					}
				}
			};

			/**
    * Permet d'affecter un ensemble de valeur à un élément de l'url.
    */
			this.setUrlValue = function (key, value) {
				if ($.isArray(value)) {
					this.uriManager.setValue(key, value);
				} else {
					this.uriManager.setValue(key, [value]);
				}
				this.uriManager.refreshUri();
			};

			/**
    * réinitialise la page.
    */
			this.reset = function () {
				this.search.start = 0;
				this.themesView.reset();
				this.categoriesView.reset();
				this.geographieView.reset();
				this.collectionView.reset();
				this.conjonctureView.reset();
				$("#tabpanel-facette-conjoncture").parent().hide();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Renvoie l'ensemble des filtres de la page.
    */
			this.getFilters = function (exclusions) {
				return this.filters.getFilters(exclusions);
			};

			this.getFacetFilters = function (facetName) {
				return this.filters.getFiltersValues(facetName);
			};

			/* */
			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");
				var query = this.uriManager.getBookmarkParam(URL_PARAMS.q);
				this.mesCriteres.cleanAll();

				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q), this.uriManager);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.numfound.render(json.numFounds, this.getQuery().replace(/\"/g, ''));
				if (this.$filRecherche.length > 0) {
					this.$filRecherche.attr('href', this.filHref + '?' + query);
				}

				Tools.scrollTo(this.idPrec);
				this.idPrec = null;
				this.uriManager.setValue(URL_PARAMS.idPrec, []);
				// gestion des facets.
				$(json.facetsField).each(function () {
					if (this.name == "themeId") {
						ctx.themesView.render(this);
					} else if (this.name == "categorieId") {
						ctx.categoriesView.render(this);
					} else if (this.name == "niveauGeo") {
						ctx.geographieView.render(this, json.facetsQuery);
					} else if (this.name == "facetteConjonctureId") {
						ctx.conjonctureView.render(this);
					} else if (this.name == "facetteCollectionId") {
						ctx.collectionView.render(this);
					} else if (this.name == "rubrique") {
						if (ctx.facetteRubriquesView != null) ctx.facetteRubriquesView.render(this);
					}
				});
			};

			/**
    *
    */
			this.getBookmarkParam = function (filterName) {
				var params = this.uriManager.getBookmarkParam(filterName);
				if (params.length > 0) {
					return params;
				} else {
					return null;
				}
			};

			/**
    * Ajoute une facette de type query à la requête.
    */
			this.addFacetQuery = function (query) {
				if ($.inArray(query, this.search.facetsQuery) == -1) {
					this.search.facetsQuery[this.search.facetsQuery.length] = query;
				}
			};

			/**
    * Retire une facette de type query de la requête.
    */
			this.removeFacetQuery = function (query) {
				var index = $.inArray(query, this.search.facetsQuery);
				if (index != -1) {
					this.search.facetsQuery.splice(index, 1);
				}
			};

			this.removeAllFacetQuery = function (query) {
				this.search.facetsQuery = [];
			};

			/**
    *
    */
			this.firstPage = function () {
				this.search.start = SOLR_PARAMS.defaultStart;
				this.uriManager.setValue(URL_PARAMS.start, SOLR_PARAMS.defaultStart);
			};

			/**
    *
    */
			this.addCritere = function (params) {
				this.mesCriteres.addCritere(params);
			};

			this.removeCritere = function () {};

			this.getFiltres = function () {
				return this.filters;
			};

			this.responsive = function (format, width) {
				if (this.conjonctureActive) {
					$("#tabpanel-facette-conjoncture").parent().show();
				} else {
					$("#tabpanel-facette-conjoncture").parent().hide();
				}
			};

			this.reloadBookmark_ = function (param, values) {
				if (param == URL_PARAMS.q) {
					if (values[0] == SOLR_PARAMS.defaultQuery) {
						this.sortField = SOLR_PARAMS.defaultSortField.field;
					} else {
						this.sortField = SOLR_PARAMS.naturalOrder.field;
					}
				} else if (param == URL_PARAMS.idPrec) {
					this.idPrec = values[0];
				}
			};

			/* */
			this.notify = function (message, data) {
				if (message == MSG_FACETTE.post) {
					this.post();
				} else if (message == MSG_FACETTE.addFilter) {
					this.addFilterValue(data.facette, data.value, data.updateUrl, data.reloadBookmark);
				} else if (message == MSG_FACETTE.removeFilter) {
					this.removeFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.cleanFilter) {
					this.removeValues(data.facette, data.updateUrl);
				} else if (message == MSG_FACETTE.addCritere) {
					this.addCritere(data);
				} else if (message == MSG_FACETTE.addFacetQuery) {
					this.addFacetQuery(data.query);
				} else if (message == MSG_FACETTE.removeFacetQuery) {
					this.removeFacetQuery(data.query);
				} else if (message == MSG_FACETTE.refreshUrlParam) {
					this.setUrlValue(data.key, data.value);
				} else if (message == 'rechercher') {
					this.search.q = data.request;
					this.redirection();
				}
			};

			/* */
			this.redirection = function () {
				this.redirect(WEB4G_URL.recherche);
			};

			/* */
			this.initReset = function () {
				$("#bouton-raz-themes").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.themesView.reset();
					ctx.conjonctureView.reset();
					$("#tabpanel-facette-conjoncture").parent().hide();
					ctx.post();
				});

				$("#bouton-raz-categories").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.categoriesView.reset();
					ctx.post();
				});

				$("#bouton-raz-geographie").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.geographieView.reset();
					ctx.post();
				});

				$("#bouton-raz-collection").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.collectionView.reset();
					ctx.post();
				});

				$("#bouton-raz-conjoncture").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.conjonctureView.reset();
					ctx.post();
				});

				$(".facettes .criteres .titre-mes-criteres .bouton-raz").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.removeAllValues();
					ctx.reset();
					ctx.post();
				});
			};
		};

		WEB4G.CONTROLLER.ToutLeSiteController = function () {
			var ctx = this;
			CommonControllerFactory.prepareController(this);

			this.documentsView;
			this.numfound;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.facetteRubriquesView;
			this.searchbarView;
			this.filArianeView;

			this.sortField = SOLR_PARAMS.naturalOrder.field;
			this.uriManager = new UriManager(contextPath + "/" + langue + WEB4G_URL.recherche, langue == 'en' ? "The whole website | Insee" : "Tout le site | Insee");

			this.$documents = $("#documents");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$numFound = $("#nombre-resultats");
			this.$facetteRubriques = $("#facette-rubriques");

			/* */
			this.start = function () {
				$.when($.getJSON(contextPath + "/" + langue + "/solr/types"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques")).done(function (types, rubriques) {
					ctx.launch(types[0], rubriques[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			/* */
			this.launch = function (types, rubriques) {
				var libelleLangue;
				switch (langue) {
					default:
					case 'fr':
						libelleLangue = "libelleFr";
						types.forEach(function (e) {
							NOMENCLATURE_LIBELLE[e.code] = e.libelleFr;
						});
						break;
					case 'en':
						libelleLangue = "libelleEn";
						types.forEach(function (e) {
							NOMENCLATURE_LIBELLE[e.code] = e.libelleEn;
						});
						break;
				}

				this.search = new Search(contextPath + "/" + langue + "/solr/consultation");
				this.search.getFilters = function () {
					return [];
				};
				this.documentsView = new DocumentsView(this.$documents);
				var sortAction = function sortAction(value) {
					ctx.changeSortField(value);
					ctx.post();
				};
				var sortOptions = [{ value: SOLR_PARAMS.naturalOrder.field, libelle: 'Trier par pertinence', action: sortAction, i18n: "echos.infos.trier-pertinence" }, { value: SOLR_PARAMS.defaultSortField.field, libelle: 'Trier par date', action: sortAction, i18n: "echos.infos.trier-date" }];
				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbarView.getController = function () {
					return ctx;
				};

				var getController = function getController() {
					return ctx;
				};
				this.navigateurViewUp.getController = getController;
				this.navigateurViewDown.getController = getController;

				this.facetteRubriquesView = new RubriqueFacetteEx({ $targetFacette: this.$facetteRubriques, beanDef: { id: "code", title: libelleLangue }, rubriques: rubriques });
				this.facetteRubriquesView.addObserver(this);

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);

				Responsive.ResponsiveManager.addObserver(this);

				this.facetteRubriquesView.start();

				this.uriManager.manage(URL_PARAMS.idPrec, this, URL_PARAMS.idPrec);
				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);
				this.uriManager.manage(URL_PARAMS.rubriques, this.rubriquesView, URL_PARAMS.rubriques);
				this.uriManager.reload();

				this.post();
				Responsive.ResponsiveManager.reset();
			};

			/* */
			this.post = function () {
				$("#wait").attr("class", "wait-on");

				this.uriManager.refreshUri();
				if (this.sortField == SOLR_PARAMS.naturalOrder.field) {
					this.search.sortFields = [SOLR_PARAMS.naturalOrder];
				} else {
					this.search.sortFields = [SOLR_PARAMS.defaultSortField];
				}
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback.call(ctx, json);
				});
			};

			/* */
			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");

				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q), this.uriManager);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField);
				this.numfound.render(json.numFounds, this.getQuery().replace(/\"/g, ''));

				Tools.scrollTo(this.idPrec);
				this.idPrec = null;
				this.uriManager.setValue(URL_PARAMS.idPrec, []);

				json.facetsField.forEach(function (e) {
					if (e.name == "rubrique") {
						ctx.facetteRubriquesView.render(e);
					}
				});
			};

			/* */
			this.notify = function (message, params) {
				if (message == MSG_FACETTE.click) {
					this.redirection($(params.li).data().id);
				} else if (message == "rechercher") {
					this.search.q = params.request;
					this.redirection();
				}
			};

			/* */
			this.redirection = function (rubrique) {
				if (rubrique == 'statistiques') {
					this.redirect(WEB4G_URL.rechercheStatistiques);
				} else if (rubrique == 'l\'insee') {
					this.redirect(WEB4G_URL.rechercheInsee);
				} else if (rubrique == 'metadonnees') {
					this.redirect(WEB4G_URL.rechercheMetadonnees);
				} else if (rubrique == 'services') {
					this.redirect(WEB4G_URL.rechercheServices);
				} else {
					this.post();
				}
				//			this.redirect(WEB4G_URL.recherche);
			};

			this.reloadBookmark_ = function (param, values) {
				if (param == URL_PARAMS.idPrec) {
					this.idPrec = values[0];
				}
			};
		};

		/**
   * Controller de la page des sources (séries, opération et indicateurs)
   */
		WEB4G.CONTROLLER.SourceController = function () {

			CommonControllerFactory.prepareController(this);
			var ctx = this;

			this.documentsView;
			this.numfound;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.typeSource;
			this.source;
			this.pathname = encodeURI(contextPath + "/" + langue + "/solr/consultation");
			this.sortField = [{ field: 'dateDiffusion', order: 'desc' }];
			this.filters = new Filters();

			this.uriManager = new UriManager(window.location.pathname, document.title);

			this.$produitsSource = document.getElementById('produits-source');

			/* */
			this.start = function () {
				if (this.$produitsSource) {
					this.$produitsListe = document.getElementById('produits-liste');
					this.isNotSommaire = this.$produitsSource.nodeName !== 'H1';
					this.$documents = $("#documents");
					this.$navUp = $("#navigateur-up");
					this.$navDown = $("#navigateur-down");
					this.$numFound = $("#nombre-resultats");

					if (this.isNotSommaire) {
						this.$produitsSource.addEventListener("keydown", function (_ref) {
							var code = _ref.code;

							if (code === "Enter" || code === "Space") {
								toggleProduitsSource(ctx);
							}
						});
						this.$produitsSource.addEventListener("click", function () {
							return toggleProduitsSource(ctx);
						});
					}

					this.results = new RegExp(/\/.*\/source\/(\w+)\/(\w\d{4})\/?.*/gm).exec(window.location.pathname);

					if (this.results !== null) {
						this.typeSource = this.results[1];
						this.source = this.results[2];
						ctx.launch(this.typeSource, this.source);
					}
					if (this.isNotSommaire) {
						this.$produitsSource.classList.add("collapsed");
					} else {
						this.$produitsListe.classList.remove('hidden');
					}
					this.$produitsSource.after(this.$produitsListe);
				}
				this.surveillerAncre();
			};

			var toggleProduitsSource = function toggleProduitsSource(ctx) {
				ctx.$produitsSource.classList.toggle('collapsed');
				ctx.$produitsSource.classList.toggle('expanded');
				ctx.$produitsListe.classList.toggle('hidden');
			};

			/* */
			this.launch = function (typeSource, source) {
				this.search = new Search(this.pathname);
				this.search.getFilters = function () {
					return ctx.filters.getFilters();
				};

				this.search.post = function (callback) {
					var filters = this.getFilters();

					filters.push({ field: typeSource, values: [source] });
					//filters.push({ field: 'produitSerie', values: [2013129] })

					var params = { // objet js au format de l'objet java
						q: this.q,
						defType: this.defType,
						start: this.start,
						sortFields: this.sortFields,
						filters: filters,
						rows: this.rows
					};

					$.ajax({
						url: encodeURI(this.url),
						type: "POST",
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: callback,
						error: function error(data) {
							console.log("error", data);
						}
					});
				};

				this.search.getController = function () {
					return ctx;
				};

				var sortAction = function sortAction(value) {
					ctx.sortField = [{ field: 'dateDiffusion', order: value }];
					ctx.post();
				};
				var sortOptions = [{ value: 'asc', libelle: 'Trier par date croissante', action: sortAction, i18n: "echos.infos.trier-date-croissante" }, { value: 'desc', libelle: 'Trier par date décroissante', action: sortAction, i18n: "echos.infos.trier-date-decroissante" }];

				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewUp.getController = function () {
					return ctx;
				};
				this.navigateurViewUp.$echoTri.show();
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.navigateurViewDown.getController = function () {
					return ctx;
				};
				this.navigateurViewDown.$echoTri.show();
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.documentsView = new DocumentsView(this.$documents);
				//this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbar = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.searchbar.addObserver(this);

				this.uriManager.manage(URL_PARAMS.q, this.searchbar, URL_PARAMS.q);
				this.uriManager.reload();

				var getController = function getController() {
					return ctx;
				};

				this.navigateurViewUp.getController = getController;
				this.navigateurViewDown.getController = getController;

				Responsive.ResponsiveManager.addObserver(this);

				//this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);

				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start); //TODO enlever le 0?
				//this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0); //TODO enlever le 0?
				this.uriManager.reload();

				// launch
				this.post();
				Responsive.ResponsiveManager.reset();
			};

			/* */
			this.post = function () {
				$("#source-waiting").attr("class", "wait-on");
				this.uriManager.refreshUri();
				this.search.sortFields = this.sortField;
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback.call(ctx, json);
				});
			};

			/* */
			this.callback = function (json) {
				$("#source-waiting").attr("class", "wait-off");
				if (json.numFounds === 0) {
					if (this.typeSource === 'operation') {
						var $li = $(".fil-ariane li:last").prev("li");
						$("#rubriques").html('\n\t\t\t\t<div class="bloc paragraphes">\n\t            \t<p class="paragraphe" ><span data-i18n="sources.produits.zero-operation">Pas de produits associ\xE9s. Voir les</span>\n\t\t\t\t\t\t<a href="' + $li.find('a').attr('href') + '#produits-liste">\n\t\t\t\t\t\t\t<span data-i18n=\'sources.produits.zero-operation-lien\'>les produits associ\xE9s \xE0</span> \xAB ' + $li.text() + ' \xBB</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>').i18n();
					} else {
						$("#rubriques").html('\n\t\t\t\t<div class="bloc paragraphes">\n\t            \t<p class="paragraphe" data-i18n="sources.produits.zero">Pas de produits associ\xE9s.</p>\n\t\t\t\t</div>').i18n();
					}
				} else {
					this.numfound.render(json.numFounds, this.getQuery().replace(/\"/g, ''));
					this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField[0].order);
					this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField[0].order);
					this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q));
				}
			};

			this.notify = function (message, data) {
				if (message == "rechercher") {
					this.redirection();
				} else {
					console.log("erreur");
				}
			};
		};
		/**
   * Controller de la page de sommaire des définitions
   */
		WEB4G.CONTROLLER.SourcesController = function ($) {

			var navigationHistorique = new NavigationHistorique();

			var update = function update() {
				var ancre = navigationHistorique.getAncre();
				if (ancre != "") {
					window.location.hash = ancre;
				}
			};

			return function () {

				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				update();

				navigationHistorique.ajouterEvent(function () {
					update();
				});
			};
		}(jQuery);
		WEB4G.CONTROLLER.ControllerInscriptionColloqueComptaNat = function () {
			return function () {
				var ctx = this;
				var $nom = $("#champ-nom");
				var $prenom = $("#champ-prenom");
				var $mail = $("#champ-mail");
				var $fonction = $("#champ-fonction");
				var $organisation = $("#champ-organisation");
				var $pays = $("#champ-pays");

				/* */
				this.valider = function () {
					$('.message-error').hide();

					var ctxValider = this;
					var mail = $('#mail').courrielEx('value');
					var mailConfirm = $('#mail-confirm').courrielEx('value');
					var nom = $nom.val();
					var prenom = $prenom.val();
					var fonction = $fonction.val();
					var organisation = $organisation.val();
					var pays = $pays.val();

					var valide = this.controllerContactCommun.valider();

					valide = ctx.verifierChampVide(nom, $("#erreur-nom"), valide);
					valide = ctx.verifierChampVide(prenom, $("#erreur-prenom"), valide);
					valide = ctx.verifierChampVide(mail, $("#erreur-mail"), valide);
					valide = ctx.verifierChampVide(mailConfirm, $("#erreur-mail-confirm"), valide);
					valide = ctx.verifierChampVide(fonction, $("#erreur-fonction"), valide);
					valide = ctx.verifierChampVide(organisation, $("#erreur-organisation"), valide);
					valide = ctx.verifierChampVide(pays, $("#erreur-pays"), valide);
					if ($('input[name="champ-participation-session"]:checked').length <= 0) {
						valide = false;
						$("#erreur-participation-sessions").show();
					}

					if (valide) {
						var sessions = {
							1: $('#participation-session-1').is(":checked"),
							2: $('#participation-session-2').is(":checked"),
							3: $('#participation-session-3').is(":checked"),
							4: $('#participation-session-4').is(":checked"),
							5: $('#participation-session-5').is(":checked"),
							6: $('#participation-session-6').is(":checked")
						};
						var formulaire = SecuredBeanFactory.securedBean({
							nom: nom,
							prenom: prenom,
							email: mail,
							fonction: fonction,
							organisation: organisation,
							pays: pays,
							sessions: sessions
						});
						this.controllerContactCommun.post_contact(formulaire, '/information/inscription-colloque-acn');
						this.controllerContactCommun.redirigerVersPageParente();
					}
				};

				/* */
				this.verifierChampVide = function (valeurChamp, $erreur, valide) {
					if (String.isBlank(valeurChamp)) {
						valide = false;
						$erreur.show();
					}
					return valide;
				};
				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$('.message-erreur').hide();

					$nom.val('');
					$prenom.val('');
					$fonction.val('');
					$organisation.val('');
					$pays.val('');
					$('input[name="champ-participation-session"]').attr('checked', false);
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.controllerContactCommun = new ControllerContactCommun();

					$('.message-error').hide();
					$('#container-mail').courriel({ id: 'mail', 'clazz': 'champ-formulaire text-email' });
					$('#container-mail-confirm').courriel({ id: 'mail-confirm', 'clazz': 'champ-formulaire text-email' });

					// déplacement du formulaire
					var $context = $(".formulaire.actif");
					var $formulaire = $("#formulaire-inscription-asso-compta-nat");
					var $context = $('.formulaire.actif');
					this.$success = $('#success-confirm');

					if ($formulaire.length > 0 && $context.length > 0) {
						$formulaire.detach().appendTo($context);
						$formulaire.removeClass("formulaire-bas-de-page");
					}
					ctx.effacer();

					$('#valider').click(function () {
						ctx.valider();
					});
					$('#effacer').click(function () {
						ctx.effacer();
					});
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactBibliotheque = function () {
			var ctx;

			return function () {
				ctx = this;

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.controllerContactCommun = new ControllerContactCommun();

					$(".message-error").hide();

					$('#container-message').zoneSaisie({ maxlength: 1000, id: 'message', 'clazz': 'champ-formulaire' });

					this.$champMessage = $('#message');
					this.$champEchelon = $('#champ-echelon').combobox();
					this.$champPeriode = $('#champ-periode').combobox();
					this.$champVousEtes = $('#champ-vous-etes').combobox();
					this.$vousEtes = $('#vous-etes').combobox();
					this.$champConnaissanceService = $('#champ-connaissance-service').combobox();
					this.$champMail = $('#mail').courrielEx();
					this.$champMailConfirm = $('#mail-confirm').courrielEx();

					// déplacement du formulaire
					var $context = $('.formulaire.actif');
					var $demande = $('#formulaire-bibliotheque');
					this.$success = $('#success-confirm');
					$('.formulaire').removeClass('formulaire');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}
					$(".formulaire-bas-de-page").html("");

					$('#valider').click(function (e) {
						ctx.valider();
					});
					$('#effacer').click(function (e) {
						ctx.effacer();
					});
				};

				/* */
				this.valider = function () {
					$('.message-error').hide();
					var valide = this.controllerContactCommun.valider();

					if (valide) {
						var demande = SecuredBeanFactory.securedBean({
							message: $('#container-message').zoneSaisie('value'),
							echelon: $('#champ-echelon').find(':selected').text(),
							periode: $('#champ-periode').find(':selected').text(),
							sudoc: $('#champ-sudoc').val(),
							premiereFois: $('input[name=champ-premiere-fois][type=radio]:checked').val(),
							vousEtes: $('#champ-vous-etes').find(':selected').text(),
							connaissanceService: $('#champ-connaissance-service').find(':selected').text(),
							email: $('#mail').val()
						});
						this.controllerContactCommun.post_contact(demande, '/information/contact-bibliotheque');
					}
				};

				/* */
				this.effacer = function () {
					$('.message-error').hide();
					this.controllerContactCommun.effacer();
					$('#champ-echelon').val('0').combobox('refresh');
					$('#champ-periode').val('0').combobox('refresh');
					$('#champ-sudoc').val('');
					$('input[name=champ-premiere-fois][type=radio]:checked').removeAttr('checked');
					$('#champ-vous-etes').val('0').combobox('refresh');
					$('#champ-connaissance-service').val('0').combobox('refresh');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactCategorieEntreprise = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun();

				/* */
				this.valider = function () {
					var valide = this.controllerContactCommun.valider(),
					    siren = $("#siren").val();
					if (valide) {
						var params = {
							siren: siren,
							categorie: '10'
						};
						this.controllerContactCommun.post(params, function () {
							ctx.effacer();
						});
					}
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$("#siren").val('');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {
					this.enqueteEnCour = values;
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					$('#message-error').hide();

					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact-entreprise");
					this.$success = $('#success-confirm');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					this.effacer();

					this.uriManager = new UriManager(window.location.pathname, 'Insee | Contact');
					this.uriManager.manage('enquete', this, 'enquete');
					this.uriManager.reload();

					this.controllerContactCommun.start(true);
					$('#valider').click(function () {
						ctx.valider();
					});
				};
			};
		}();
		var ControllerContactCommun = function () {

			return function (nbRows) {
				var $rows = nbRows != 'undefined' && nbRows > 0 ? nbRows : 4;
				var ctx = this;
				this.$successMail = $('#success-mail');
				this.$errorMail = $('#error-mail');
				this.$error = $("#error");
				this.$container = $("#formulaire-container");

				/* */
				this.effacer = function () {
					$('#erreur-mail').hide();
					$('#erreur-mail-confirm').hide();
					$('#erreur-mail-different').hide();
					$('#erreur-message').hide();
					$('#erreur-departement').hide();
					$('#erreur-vous-etes').hide();

					$("#libelle-court").val('');
					$("#identifiant-enquete").val('');
					$('#mail').courrielEx('effacer');
					$('#mail-confirm').courrielEx('effacer');
					$('#departement').val('0').combobox('refresh');
					$('#vous-etes').val('0').combobox('refresh');
					$('#message').val('');
				};

				/* */
				this.start = function (etranger) {
					$.getJSON(contextPath + '/' + langue + '/contact/ajax/contact/departements').done(function (data) {
						var dpt = $('#departement');
						if (etranger) {
							dpt.append($('<option>').val('Etranger').text('Etranger').attr('code', '-1'));
						}
						data.forEach(function (e) {
							dpt.append($('<option>').val(e.value).text(e.value).attr('code', e.key));
						});
						dpt.val(0).combobox();
					}).fail(function () {});
					$('#container-message').zoneSaisie({ size: 2000, id: 'message', 'clazz': 'text-email', rows: $rows });

					$('#mail').courrielEx();
					$('#mail-confirm').courrielEx();
				};

				/* */
				this.post = function (params, done) {
					params = $.extend({
						message: $('#container-message').zoneSaisie('value'),
						mail: $('#mail').val(),
						vousEtes: $('#vous-etes').find(':selected').text(),
						codeDepartement: $('#departement').find(':selected').text(),
						tel: $('#telephone').val()
					}, params);
					params = SecuredBeanFactory.securedBean(params);
					$("#wait").attr("class", "wait-on");
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/contact/ajax/submit'),
						type: "POST",
						dataType: 'json',
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						success: function success(data) {
							$("#wait").attr("class", "wait-off");
							done.call(this);
							ctx.afficherMessageSucces(data);
						},
						fail: function fail(data) {
							$("#wait").attr("class", "wait-off");
							if (!data.formatUploadedFileOk) {
								$('#erreur-file-format').show();
							}
							if (!data.tailleUploadedFileOk) {
								$('#erreur-file-size').show();
							}
							console.log('Erreur send contact', arguments);
						}
					});
				};

				this.afficherMessageSucces = function (data) {
					var $val = $('#success-confirm').attr("data-i18n", "[html]contact.success-commun").i18n().text();
					$('#success-confirm').text($val.replace("{{email}}", data.mail));
					$('#success-confirm').show();
					$('#container-message').empty();
					$('#container-message').zoneSaisie({ size: 2000, id: 'message', 'clazz': 'text-email', rows: nbRows });
				};

				/* */
				this.post_contact = function (params, url) {
					params = $.extend({
						email: $('#mail').val()
					}, params);
					params = SecuredBeanFactory.securedBean(params);
					$("#wait").attr("class", "wait-on");
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + url),
						type: "POST",
						dataType: 'json',
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						success: function success(data, textStatus, jqXHR) {
							$("#wait").attr("class", "wait-off");
							if (jqXHR.status == 204) {
								ctx.$successMail.show();
								ctx.$container.hide();
							} else {
								ctx.$successMail.hide();
								ctx.$error.show();
								ctx.$container.show();
							}
						},
						error: function error(jqXHR, textStatus, errorThrown) {
							$("#wait").attr("class", "wait-off");
							ctx.$successMail.hide();
							ctx.$container.show();
							if (jqXHR.status == 400) {
								ctx.$errorMail.show();
							} else {
								ctx.$error.show();
							}
						}
					});
				};

				/* */
				this.valider = function () {
					$('#erreur-mail').hide();
					$('#erreur-mail-confirm').hide();
					$('#erreur-mail-different').hide();
					$('#erreur-message').hide();
					$('#erreur-departement').hide();
					$('#erreur-vous-etes').hide();
					$('#success-confirm').hide();

					var valide = true;
					var $message = $('#message');
					var message = $message.val();
					var mail = $('#mail').courrielEx('value');
					var mailConfirm = $('#mail-confirm').courrielEx('value');
					var $vousEtes = $('#vous-etes');
					var vousEtes = $vousEtes.val();
					var departement = $('#departement').val();

					if (!$('#mail').courrielEx('isValid')) {
						valide = false;
						$('#erreur-mail').show();
					}
					if (!$('#mail-confirm').courrielEx('isValid')) {
						valide = false;
						$('#erreur-mail-confirm').show();
					} else if (mail != mailConfirm) {
						valide = false;
						$('#erreur-mail-different').show();
					}

					if ($message.length > 0 && String.isBlank(message)) {
						valide = false;
						$('#erreur-message').show();
					}
					if ($vousEtes.length > 0 && vousEtes == '0') {
						valide = false;
						$('#erreur-vous-etes').show();
					}
					if (departement == '0') {
						valide = false;
						$('#erreur-departement').show();
					}
					location.hash = "#contenu";
					return valide;
				};

				this.focusPremiereErreur = function (valide) {
					if (!valide) {
						var $premiereErreur = $('.message-error:visible').eq(0);
						var idToFocus = $premiereErreur.attr('data-idToFocus');
						$('#' + idToFocus).focus();
					}
				};

				this.controlerNumTel = function (tel, dep) {
					if (!String.isBlank(tel) && dep != 0) {
						if (dep == 'Etranger') {
							if (isNaN(tel) || tel.length < 8) {
								if (langue == 'fr') {
									$('#erreur-tel').text('Erreur : le champ \"Téléphone\" est invalide. Veuillez entrer un numéro composé de 8 chiffres minimum.');
								} else {
									$('#erreur-tel').text('the \"Phone number\" field is invalid. Should be a at least 8 number.');
								}
								$('#erreur-tel').show();
								return false;
							}
						} else {
							if (isNaN(tel) || tel.length != 10 || !tel.startsWith('0')) {
								if (langue == 'fr') {
									$('#erreur-tel').text('Erreur : le champ \"Téléphone\" est invalide. Veuillez entrer un numéro composé de 10 chiffres et commençant par un 0 sans espace.');
								} else {
									$('#erreur-tel').text('Error: the \"Phone number\" field is invalid. Please enter a 10-digit number starting with a 0 without spaces.');
								}
								$('#erreur-tel').show();
								return false;
							}
						}
					}
					return true;
				};

				this.controlerSiren = function (siren) {
					if (String.isBlank(siren)) {
						$('#erreur-siren-vide').show();
						return false;
					}
					if (isNaN(siren) || siren.length !== 9) {
						$('#erreur-siren-invalide').show();
						return false;
					}
					var chars = "";
					for (var i = 0; i < 9; i++) {
						if (i % 2 == 0) {
							chars += siren.charAt(i);
						} else {
							chars += siren.charAt(i) * 2;
						}
					}
					var res = 0;
					for (var i = 0; i < chars.length; i++) {
						res += parseInt(chars.charAt(i), 10);
					}
					if (res % 10 != 0) {
						$('#erreur-siren-invalide').show();
						return false;
					}
					return true;
				};

				/* */
				this.redirigerVersPageParente = function () {
					var TEMPS_REDIRECTION = 3 * 1000;

					// Cherche le lien contenu dans l'avant dernier libellé du fil d'ariane, c'est-à-dire celui de la page parente.
					var lienPageParente = $(".breadcrum").first().find(".fil-ariane").first().find("li").eq(-2).find("a").attr("href");

					window.setTimeout(function () {
						window.location.replace(window.location.origin + lienPageParente);
					}, TEMPS_REDIRECTION);
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactConcours = function () {

			return function () {
				var ctx = this;

				/* */
				this.valider = function () {
					$('#erreur-nom').hide();
					$('#erreur-prenom').hide();

					var mail = $('#container-mail').courrielEx('value');
					var mailConfirm = $('#container-mail-confirm').courrielEx('value');
					var nom = $('#nom').val();
					var prenom = $('#prenom').val();

					var valide = this.controllerContactCommun.valider();

					if (String.isBlank(nom)) {
						valide = false;
						$('#erreur-nom').show();
					}
					if (String.isBlank(prenom)) {
						valide = false;
						$('#erreur-prenom').show();
					}

					if (valide) {
						var demande = SecuredBeanFactory.securedBean({
							nom: $('#nom').val(),
							prenom: $('#prenom').val(),
							message: $('#container-message').zoneSaisie('value')
						});
						this.controllerContactCommun.post_contact(demande, '/information/contact-concours');
					}
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$('#erreur-nom').hide();
					$('#erreur-prenom').hide();

					$('#nom').val('');
					$('#prenom').val('');
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.controllerContactCommun = new ControllerContactCommun();

					$('.message-error').hide();
					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact-concours");

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					$('#valider').click(function () {
						ctx.valider();
					});
					$('#effacer').click(function () {
						ctx.effacer();
					});
					$(".formulaire-bas-de-page").html("");
					this.$success = $('#success-confirm');
					this.effacer();

					this.uriManager = new UriManager(window.location.pathname, 'Insee | Contact');
					this.uriManager.manage("concours", this, "concours");
					this.uriManager.reload();

					$('#container-message').zoneSaisie({ size: 2000, id: 'message', 'clazz': 'champ-formulaire text-email' });
					$('#container-mail').courriel({ id: 'mail', 'clazz': 'champ-formulaire text-email' });
					$('#container-mail-confirm').courriel({ id: 'mail-confirm', 'clazz': 'champ-formulaire text-email' });
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactDevis = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun();

				/* */
				this.valider = function () {
					var valide = this.controllerContactCommun.valider(),
					    annee = $('#annee').val(),
					    produit = $('#produit').val();

					if (valide) {
						var params = {
							identifiant: produit,
							annee: annee,
							categorie: '9'
						};
						this.controllerContactCommun.post(params, function () {
							ctx.effacer();
						});
					}
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$("#annee").val('');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {
					this.produit = values;
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();

					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-devis");
					this.$success = $('#success-confirm');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					$('#valider').click(function () {
						ctx.valider();
					});
					this.effacer();

					this.uriManager = new UriManager(window.location.pathname, 'Insee | Contact');
					this.uriManager.manage('produit', this, 'produit');
					this.uriManager.reload();

					this.controllerContactCommun.start(true);
					if (this.produit != null) {
						$('#produit').val(this.produit);
					}
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactEnquete = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun();

				/* */
				this.valider = function () {
					var valide = this.controllerContactCommun.valider();
					if (valide) {
						var params = {
							identifiant: $('#identifiant-enquete').val(),
							libelleCourt: $('#libelle-court').val(),
							libelleLong: this.enquetes[this.enqueteEnCour],
							categorie: '8'
						};
						this.controllerContactCommun.post(params, function () {
							ctx.effacer();
						});
					}
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$("#libelle-court").val('');
					$("#identifiant-enquete").val('');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {
					this.enqueteEnCour = values;
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					$('.message-error').hide();

					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact");
					this.$success = $('#success-confirm');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					$('#valider').click(function () {
						ctx.valider();
					});
					this.effacer();

					this.enquetes = {};
					$("#enquetes").find('li').each(function () {
						ctx.enquetes[$(this).attr('id')] = $(this).text();
					});

					this.enqueteEnCour = null;
					this.uriManager = new UriManager(window.location.pathname, 'Insee | Contact');
					this.uriManager.manage('enquete', this, 'enquete');
					this.uriManager.reload();

					this.controllerContactCommun.start(true);
					if (this.enqueteEnCour != null) {
						$('.chapeau').text(this.enquetes[this.enqueteEnCour]);
						$('#libelle-court').val(this.enqueteEnCour);
						$('#nom-long-enquete').text(this.enquetes[this.enqueteEnCour]);
					}
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactInseeAcessibilite = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun();

				this.valider = function () {
					var valide = this.validerChamp();

					this.controllerContactCommun.focusPremiereErreur(valide);
					if (valide) {
						var params = {
							site: $('#site').val(),
							categorie: '11'
						};
						this.controllerContactCommun.post(params, function () {
							ctx.effacer();
						});
					}
				};

				this.validerChamp = function () {
					$('#erreur-mail').hide();
					$('#erreur-mail-confirm').hide();
					$('#erreur-mail-different').hide();
					$('#erreur-message').hide();
					$('#success-confirm').hide();

					var valide = true;
					var $message = $('#message');
					var message = $message.val();
					var mail = $('#mail').courrielEx('value');
					var mailConfirm = $('#mail-confirm').courrielEx('value');

					if (!$('#mail').courrielEx('isValid')) {
						valide = false;
						$('#erreur-mail').show();
					}
					if (!$('#mail-confirm').courrielEx('isValid')) {
						valide = false;
						$('#erreur-mail-confirm').show();
					} else if (mail != mailConfirm) {
						valide = false;
						$('#erreur-mail-different').show();
					}

					if ($message.length > 0 && String.isBlank(message)) {
						valide = false;
						$('#erreur-message').show();
					}
					return valide;
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$("#libelle-court").val('');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					$('.message-error').hide();

					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact");
					this.$success = $('#success-confirm');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					$('#valider').click(function (e) {
						e.preventDefault();
						ctx.valider();
					});
					this.effacer();

					this.uriManager = new UriManager(window.location.pathname, 'Insee | Contact');
					this.uriManager.manage('site', this, 'site');
					this.uriManager.reload();

					$('#container-message').zoneSaisie({ size: 2000, id: 'message', 'clazz': 'text-email', rows: 4 });
					$('#politesse').hide();

					$('#mail').courrielEx();
					$('#mail-confirm').courrielEx();
				};
			};
		}();

		WEB4G.CONTROLLER.ControllerContactRencontre = function () {
			var ctx;

			return function () {
				ctx = this;

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.controllerContactCommun = new ControllerContactCommun();

					$(".message-error").hide();

					$('#container-message-adresse').zoneSaisie({ maxlength: 500, id: 'message-adresse', 'clazz': 'champ-formulaire' });
					$('#container-message-accompagnateurs').zoneSaisie({ maxlength: 500, id: 'message-accompagnateurs', 'clazz': 'champ-formulaire' });

					this.$champMail = $('#mail').courrielEx();
					this.$champMailConfirm = $('#mail-confirm').courrielEx();

					this.emailContact = $('#email-contact').text();
					this.objetMail = $('#nom-rencontre').text();
					if (String.isBlank(this.emailContact)) {
						this.emailContact = 'email@insee.fr';
					}

					// déplacement du formulaire
					var $context = $('.formulaire.actif');
					var $demande = $('#formulaire-rencontre');
					this.$success = $('#success-confirm');
					$('.formulaire').removeClass('formulaire');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}
					$(".formulaire-bas-de-page").html("");

					$('#valider').click(function (e) {
						ctx.valider();
					});
					$('#effacer').click(function (e) {
						ctx.effacer();
					});
				};

				/* */
				this.valider = function () {
					$('.message-error').hide();
					var valide = this.controllerContactCommun.valider();
					if (String.isBlank($('#champ-nom').val())) {
						valide = false;
						$('#erreur-nom').show();
					}
					if (String.isBlank($('#champ-organisme').val())) {
						valide = false;
						$('#erreur-organisme').show();
					}

					if (valide) {
						var demande = SecuredBeanFactory.securedBean({
							emailContact: this.emailContact,
							nom: $('#champ-nom').val(),
							prenom: $('#champ-prenom').val(),
							telephone: $('#champ-telephone').val(),
							fax: $('#champ-fax').val(),
							fonction: $('#champ-fonction').val(),
							organisme: $('#champ-organisme').val(),
							adresse: $('#container-message-adresse').zoneSaisie('value'),
							accompagnateurs: $('#container-message-accompagnateurs').zoneSaisie('value'),
							email: $('#mail').val(),
							objet: this.objetMail
						});
						this.controllerContactCommun.post_contact(demande, '/information/contact-rencontre');
					}
				};

				/* */
				this.effacer = function () {
					$('.message-error').hide();
					this.controllerContactCommun.effacer();
					$('#container-message-adresse').val('');
					$('#container-message-accompagnateurs').val('');
					$('#champ-nom').val('');
					$('#champ-prenom').val('');
					$('#champ-telephone').val('');
					$('#champ-fax').val('');
					$('#champ-fonction').val('');
					$('#champ-organisme').val('');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactSirenModifApe = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun(12);

				/* */
				this.valider = function () {
					this.effacerMessagesErreur();
					var valide = this.controllerContactCommun.valider();
					var siren = $('#siren').val();
					var tel = $('#telephone').val();
					var dep = $('#departement').val();

					valide = this.controllerContactCommun.controlerSiren(siren) && valide;
					valide = this.controllerContactCommun.controlerNumTel(tel, dep) && valide;
					valide = this.controlerTypePublic() && valide;
					valide = this.controlerFileUpload() && valide;

					this.controllerContactCommun.focusPremiereErreur(valide);
					if (valide) {
						this.post(function (data) {
							ctx.afficheSuccess(data);
						});
					}
				};

				this.post = function (done) {
					var data = new FormData();
					data.append("message", $('#container-message').zoneSaisie('value'));
					data.append("mail", $('#mail').val());
					data.append("codeDepartement", $('#departement').find(':selected').text());
					data.append("typeEtablissement", $('#type-etablissement').find(':selected').text());
					data.append("tel", $('#telephone').val());
					data.append("siren", String.isBlank($('#siren').val()) ? '' : $('#siren').val());
					data.append("categorie", "12");
					data.append("multipartFile", $('#upload-file')[0].files[0]);

					$("#wait").attr("class", "wait-on");
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/contact/demande-modif-ape/submit'),
						type: "POST",
						data: data,
						processData: false,
						contentType: false,
						cache: false,
						success: function success(data) {
							$("#wait").attr("class", "wait-off");
							done.call(this, data);
						},
						error: function error(data) {
							$("#wait").attr("class", "wait-off");
							if (!data.responseJSON.formatUploadedFileOk) {
								$('#erreur-file-format').show();
							}
							if (!data.responseJSON.tailleUploadedFileOk) {
								$('#erreur-file-size').show();
							}
							console.log('Erreur send contact', arguments);
						}
					});
				};

				this.controlerTypePublic = function (siren) {
					if ($('#type-etablissement').length > 0 && $('#type-etablissement').val() == '0') {
						$('#erreur-type-etablissement').show();
						return false;
					}
					return true;
				};

				this.controlerFileUpload = function () {
					if (!$('#upload-file')[0].files[0] || $('#upload-file')[0].files[0] === null || $('#upload-file')[0].files[0] === undefined) {
						$('#erreur-file-absent').show();
						return false;
					}
					var size = $('#upload-file')[0].files[0].size;
					if ($('#upload-file')[0].files[0].size >= 4000000) {
						$('#erreur-file-size').show();
						return false;
					}
					return true;
				};

				this.afficheSuccess = function (data) {
					this.effacer();
					this.controllerContactCommun.afficherMessageSucces(data);
				};

				this.effacer = function () {
					this.controllerContactCommun.effacer();
					this.effacerMessagesErreur();
					$('#type-etablissement').val(0);
					$('#telephone').val('');
					$("#siren").val('');
					$('#type-etablissement').val(0).combobox();
					$('#span-filename').text("1 pièce jointe attendue");
				};

				this.effacerMessagesErreur = function () {
					$('.message-error').each(function (index, element) {
						$(element).hide();
					});
				};

				/* */
				this.reloadBookmark_ = function (key, values) {};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.effacerMessagesErreur();
					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact-siren");
					this.$success = $('#success-confirm');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					$('#valider').click(function () {
						ctx.valider();
					});
					$('#upload-bouton').click(function () {
						$('#upload-file').click();
					});
					$('#upload-file').on("change", function () {
						var pathElements = $('#upload-file').val().split("\\");
						var filename = pathElements[pathElements.length - 1];
						$('#span-filename').text(filename);
					});

					$('#type-etablissement').val(0).combobox();
					this.effacer();
					this.controllerContactCommun.start(true);
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContactSiren = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun(12);

				/* */
				this.valider = function () {

					$('#erreur-siren-vide').hide();
					$('#erreur-siren-invalide').hide();
					$('#erreur-tel').hide();
					var valide = this.controllerContactCommun.valider();
					var siren = $('#siren').val();
					var tel = $('#telephone').val();
					var dep = $('#departement').val();

					valide = this.controllerContactCommun.controlerSiren(siren) && valide;
					valide = this.controllerContactCommun.controlerNumTel(tel, dep) && valide;

					if (valide) {
						var params = {
							siren: String.isBlank(siren) ? '' : siren,
							categorie: '7'
						};
						this.controllerContactCommun.post(params, function () {
							ctx.effacer();
						});
					}
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$('#erreur-tel').hide();
					$('#telephone').val('');
					$('#erreur-siren-vide').hide();
					$('#erreur-siren-invalide').hide();
					$("#siren").val('');
				};

				/* */
				this.reloadBookmark_ = function (key, values) {
					this.enqueteEnCour = values;
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					$('#message-error').hide();

					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact-siren");
					this.$success = $('#success-confirm');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}

					$('#valider').click(function () {
						ctx.valider();
					});
					this.effacer();

					this.controllerContactCommun.start(true);
					//			$('#message').attr('rows', '12');
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerContact = function () {

			return function () {
				var ctx = this;

				this.controllerContactCommun = new ControllerContactCommun(12);

				/* */
				this.valider = function () {
					$('#erreur-categorie').hide();
					$('#erreur-nom-enquete').hide();
					$('#erreur-identifiant').hide();
					$('#erreur-disfonctionnement').hide();
					$('#erreur-siren-vide').hide();
					$('#erreur-siren-invalide').hide();
					$('#erreur-tel').hide();

					var valide = this.controllerContactCommun.valider();
					var cat = $('#categorie').val();
					var nomEnquete = $('#nom-enquete').val();
					var disfonctionnement = $('#adresse-page').val();
					var siren = $('#siren').val();
					var tel = $('#telephone').val();
					var dep = $('#departement').val();

					if (cat == '0') {
						valide = false;
						$('#erreur-categorie').show();
					} else if (cat == '2') {
						if (String.isBlank(nomEnquete)) {
							valide = false;
							$('#erreur-nom-enquete').show();
						}
					} else if (cat == '3') {
						if (String.isBlank(disfonctionnement)) {
							valide = false;
							$('#erreur-disfonctionnement').show();
						}
					} else if (cat == '7') {
						valide = this.controllerContactCommun.controlerSiren(siren) && valide;
					}

					valide = this.controllerContactCommun.controlerNumTel(tel, dep) && valide;

					if (valide) {
						var params = {
							categorie: $('#categorie').val(),
							categorieLibelle: $('#categorie').find(':selected').text(),
							nomEnquete: nomEnquete,
							identifiant: $('#identifiant').val(),
							disfonctionnement: disfonctionnement,
							siren: siren
						};
						this.controllerContactCommun.post(params, function () {
							ctx.effacer();
						});
					}
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$('#erreur-categorie').hide();
					$('#erreur-nom-enquete').hide();
					$('#erreur-identifiant').hide();
					$('#erreur-disfonctionnement').hide();
					$('#erreur-siren-vide').hide();
					$('#erreur-siren-invalide').hide();
					$('#erreur-tel').hide();

					$('#categorie').val('0').combobox('refresh');
					$('#nom-enquete').val('');
					$('#identifiant').val('');
					$('#disfonctionnement').val('');
					$('#siren').val('');
					$('#telephone').val('');
				};

				this.reloadBookmark_ = function (key, values) {
					$('#categorie').val(values[0]);
					$('#categorie').combobox('refresh');
					$('#categorie').change();
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();

					$('.message-error').hide();
					var $context = $(".formulaire.actif");
					var $demande = $("#formulaire-contact");

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");

						var $disf = $('#disfonctionnement').hide();
						var $info = $('#info-enquete').hide();
						var $siren = $('#div-siren').hide();
						$('#categorie').change(function () {
							var val = $(this).val();
							$disf.hide();
							$info.hide();
							$siren.hide();
							if (val == '2') {
								$info.show();
							} else if (val == '3') {
								$disf.show();
							} else if (val == '7') {
								$siren.show();
							}
							ctx.uriManager.setValue("categorie", val);
							ctx.uriManager.refreshUri();
						});
						this.controllerContactCommun.start(true);
						//				$('#message').attr('rows', '12');
					}

					$('#valider').click(function () {
						ctx.valider();
					});
					$(".formulaire-bas-de-page").html("");
					this.$success = $('#success-confirm');
					this.effacer();

					this.uriManager = new UriManager(window.location.pathname, 'Insee | Contact');
					this.uriManager.manage("categorie", this, "categorie");
					this.uriManager.reload();
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerInscriptionAssoComptaNat = function () {
			return function () {
				var ctx = this;
				var $nom = $("#champ-nom");
				var $prenom = $("#champ-prenom");
				var $mail = $("#champ-mail");
				var $fonction = $("#champ-fonction");
				var $organisation = $("#champ-organisation");
				var $pays = $("#champ-pays");
				var $containerAdresse = $('#container-adresse-complete');

				/* */
				this.valider = function () {
					$('.message-error').hide();

					var ctxValider = this;
					var mail = $('#mail').courrielEx('value');
					var mailConfirm = $('#mail-confirm').courrielEx('value');
					var nom = $nom.val();
					var prenom = $prenom.val();
					var fonction = $fonction.val();
					var organisation = $organisation.val();
					var pays = $pays.val();
					var langue = $('input[name="champ-langue-correspondance"]:checked').val();
					var adresse = $('#container-adresse-complete').zoneSaisie('value');

					var valide = this.controllerContactCommun.valider();

					valide = ctx.verifierChampVide(nom, $("#erreur-nom"), valide);
					valide = ctx.verifierChampVide(prenom, $("#erreur-prenom"), valide);
					valide = ctx.verifierChampVide(mail, $("#erreur-mail"), valide);
					valide = ctx.verifierChampVide(mailConfirm, $("#erreur-mail-confirm"), valide);
					valide = ctx.verifierChampVide(fonction, $("#erreur-fonction"), valide);
					valide = ctx.verifierChampVide(organisation, $("#erreur-organisation"), valide);
					valide = ctx.verifierChampVide(pays, $("#erreur-pays"), valide);
					valide = ctx.verifierChampVide(adresse, $("#erreur-adresse"), valide);
					if ($('input[name="champ-langue-correspondance"]:checked').length <= 0) {
						valide = false;
						$("#erreur-langue-correspondance").show();
					}

					if (valide) {
						var formulaire = SecuredBeanFactory.securedBean({
							nom: nom,
							prenom: prenom,
							email: mail,
							fonction: fonction,
							organisation: organisation,
							pays: pays,
							langue: langue,
							adresse: adresse
						});
						this.controllerContactCommun.post_contact(formulaire, '/information/inscription-acn');
						this.controllerContactCommun.redirigerVersPageParente();
					}
				};

				/* */
				this.verifierChampVide = function (valeurChamp, $erreur, valide) {
					if (String.isBlank(valeurChamp)) {
						valide = false;
						$erreur.show();
					}
					return valide;
				};

				/* */
				this.effacer = function () {
					this.controllerContactCommun.effacer();
					$('.message-erreur').hide();

					$nom.val('');
					$prenom.val('');
					$fonction.val('');
					$organisation.val('');
					$pays.val('');
					$('input[name="champ-langue-correspondance"]').attr('checked', false);
					$("#adresse").val('');
				};

				/* */
				this.start = function () {
					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.controllerContactCommun = new ControllerContactCommun();

					$('.message-error').hide();
					$containerAdresse.zoneSaisie({ maxlength: 500, id: 'adresse', 'clazz': 'champ-formulaire' });
					$('#container-mail').courriel({ id: 'mail', 'clazz': 'champ-formulaire text-email' });
					$('#container-mail-confirm').courriel({ id: 'mail-confirm', 'clazz': 'champ-formulaire text-email' });

					// déplacement du formulaire
					var $context = $(".formulaire.actif");
					var $formulaire = $("#formulaire-inscription-asso-compta-nat");
					var $context = $('.formulaire.actif');
					this.$success = $('#success-confirm');

					if ($formulaire.length > 0 && $context.length > 0) {
						$formulaire.detach().appendTo($context);
						$formulaire.removeClass("formulaire-bas-de-page");
					}
					ctx.effacer();

					$('#valider').click(function () {
						ctx.valider();
					});
					$('#effacer').click(function () {
						ctx.effacer();
					});
				};
			};
		}();
		WEB4G.CONTROLLER.ControllerInscriptionSirene = function () {
			var ctx;

			return function () {
				ctx = this;

				this.$ulEntrepreneur = $('#ul-entrepreneur');
				this.$ulSociete = $('#ul-societe');
				this.$ulAssociation = $('#ul-association');
				this.$sectionEntrepreneur = $('#section-entrepreneur');
				this.$sectionSociete = $('#section-societe');
				this.$sectionAssociation = $('#section-association');

				this.$localisation = $('#localisation');

				this.$nom = $('#champ-nom');
				this.$prenom = $('#champ-prenom');
				this.$dateNaissance = $('#champ-date-naissance');
				this.$raisonSociale = $('#champ-raison-sociale');
				this.$nomAssociation = $('#champ-nom-association');
				this.$commune = $('#champ-commune');
				this.$arrondissement = $('#champ-arrondissement');
				this.$voie = $('#champ-voie');
				this.$telephone = $('#champ-telephone');

				this.$successMail = $('#success-mail');
				this.$errorMail = $('#error-mail');
				this.$error = $("#error");
				this.$container = $(".sommaire-container");

				//		this.$ = $('#champ-');

				/* */
				this.start = function () {
					var _$dateNaissance$datet;

					CommonControllerFactory.prepareControllerStandard(this);
					this.initController();
					this.controllerContactCommun = new ControllerContactCommun();

					// initialisation formulaire
					this.$dateNaissance.datetimepicker((_$dateNaissance$datet = {
						lang: "fr",
						timepicker: true,
						format: "d/m/Y",
						startDate: 0
					}, _defineProperty(_$dateNaissance$datet, 'timepicker', false), _defineProperty(_$dateNaissance$datet, 'closeOnDateSelect', true), _defineProperty(_$dateNaissance$datet, 'minDate', $.datepicker.parseDate('dd/mm/yy', "01/03/1971")), _defineProperty(_$dateNaissance$datet, 'maxDate', 0), _defineProperty(_$dateNaissance$datet, 'value', $.datepicker.formatDate('dd/mm/yy', new Date())), _$dateNaissance$datet));

					this.$sectionEntrepreneur.click(function () {
						ctx.blocEntrepreneur(true);
						ctx.blocSociete(false);
						ctx.blocAssociation(false);
					});
					this.$sectionSociete.click(function () {
						ctx.blocEntrepreneur(false);
						ctx.blocSociete(true);
						ctx.blocAssociation(false);
					});
					this.$sectionAssociation.click(function () {
						ctx.blocEntrepreneur(false);
						ctx.blocSociete(false);
						ctx.blocAssociation(true);
					});
					$('#valider').click(function (e) {
						e.stopImmediatePropagation();
						var categorie = $('input[name=categorie]').filter(':checked').val();
						if (ctx.valider(categorie)) {
							ctx.post(categorie);
						}
					});
					$('#effacer').click(function (e) {
						ctx.effacer();
					});

					//
					this.blocEntrepreneur(false);
					this.blocSociete(false);
					this.blocAssociation(false);

					// déplacement du formulaire
					var $context = $('.formulaire.actif');
					var $demande = $('#formulaire-inscription-sirene');

					$('.formulaire').removeClass('formulaire');

					if ($demande.length > 0 && $context.length > 0) {
						$demande.detach().appendTo($context);
						$demande.removeClass("formulaire-bas-de-page");
					}
					$(".formulaire-bas-de-page").html("");
					this.controllerContactCommun.start(false);
				};

				/* */
				this.blocEntrepreneur = function (active) {
					this.resetBloc();
					if (active) {
						$("input[name=categorie]").val(['entrepreneur']);
						this.$ulSociete.hide();
						this.$ulAssociation.hide();
						this.$sectionSociete.removeClass('expanded');
						this.$sectionSociete.addClass('collapsed');
						this.$sectionAssociation.removeClass('expanded');
						this.$sectionAssociation.addClass('collapsed');
						this.$nom.prop('disabled', false);
						this.$prenom.prop('disabled', false);
						this.$dateNaissance.prop('disabled', false);
					} else {
						this.$sectionEntrepreneur.removeClass('expanded');
						this.$sectionEntrepreneur.addClass('collapsed');
						this.$nom.prop('disabled', true);
						this.$prenom.prop('disabled', true);
						this.$dateNaissance.prop('disabled', true);
					}
				};

				/* */
				this.blocSociete = function (active) {
					this.resetBloc();
					if (active) {
						$("input[name=categorie]").val(['societe']);
						this.$ulEntrepreneur.hide();
						this.$ulAssociation.hide();
						this.$sectionEntrepreneur.removeClass('expanded');
						this.$sectionEntrepreneur.addClass('collapsed');
						this.$sectionAssociation.removeClass('expanded');
						this.$sectionAssociation.addClass('collapsed');
						this.$raisonSociale.prop('disabled', false);
					} else {
						this.$raisonSociale.prop('disabled', true);
						this.$sectionSociete.removeClass('expanded');
						this.$sectionSociete.addClass('collapsed');
					}
				};

				/* */
				this.blocAssociation = function (active) {
					this.resetBloc();
					if (active) {
						$("input[name=categorie]").val(['association']);
						this.$ulEntrepreneur.hide();
						this.$ulSociete.hide();
						this.$sectionSociete.removeClass('expanded');
						this.$sectionSociete.addClass('collapsed');
						this.$sectionEntrepreneur.removeClass('expanded');
						this.$sectionEntrepreneur.addClass('collapsed');
						this.$nomAssociation.prop('disabled', false);
					} else {
						this.$nomAssociation.prop('disabled', true);
						this.$sectionAssociation.removeClass('expanded');
						this.$sectionAssociation.addClass('collapsed');
					}
				};

				/* */
				this.resetBloc = function () {
					this.$nom.val('');
					this.$prenom.val('');
					this.$dateNaissance.val('');
					this.$raisonSociale.val('');
					this.$nomAssociation.val('');
				};

				/* */
				this.effacer = function () {
					this.resetBloc();
					this.controllerContactCommun.effacer();
					this.$commune.val('');
					this.$arrondissement.val('');
					this.$voie.val('');
					this.$telephone.val('');
				};

				/* */
				this.valider = function (categorie) {
					$('.message-error').hide();

					var valide = this.controllerContactCommun.valider();
					if (categorie == 'entrepreneur') {
						if (String.isBlank(this.$nom.val())) {
							valide = false;
							$('#erreur-nom').show();
						}
						if (String.isBlank(this.$prenom.val())) {
							valide = false;
							$('#erreur-prenom').show();
						}
						if (String.isBlank(this.$dateNaissance.val())) {
							valide = false;
							$('#erreur-date-naissance').show();
						}
					} else if (categorie == 'societe') {
						if (String.isBlank(this.$raisonSociale.val())) {
							valide = false;
							$('#erreur-raison-sociale').show();
						}
					} else if (categorie == 'association') {
						if (String.isBlank(this.$nomAssociation.val())) {
							valide = false;
							$('#erreur-nom-association').show();
						}
					} else {
						valide = false;
						$('#erreur-categorie').show();
					}

					if (String.isBlank(this.$commune.val())) {
						valide = false;
						$('#erreur-commune').show();
					}
					if (String.isBlank(this.$voie.val())) {
						valide = false;
						$('#erreur-voie').show();
					}

					return valide;
				};

				/* */
				this.post = function (categorie) {
					var data = {
						categorie: categorie,
						departement: $('#departement').find(':selected').text(),
						codeDepartement: $('#departement').find(':selected').attr('code'),
						commune: $('#champ-commune').val(),
						arrondissement: $('#champ-arrondissement').val(),
						voie: $('#champ-voie').val(),
						telephone: $('#champ-telephone').val()
					};

					if (categorie == 'entrepreneur') {
						data.nom = $('#champ-nom').val();
						data.prenom = $('#champ-prenom').val();
						data.dateNaissance = $('#champ-date-naissance').val();
					} else if (categorie == 'societe') {
						data.raisonSociale = $('#champ-raison-sociale').val();
					} else if (categorie == 'association') {
						data.nomAssociation = $('#champ-nom-association').val();
					}

					var url = '/information/suivi-inscription-sirene';
					this.controllerContactCommun.post_contact(data, url);
				};
			};
		}();

		WEB4G.CONTROLLER.ActualiteSSMController = function (params) {

			params = $.extend({
				title: document.title,
				pathname: window.location.origin + window.location.pathname,
				isNavigation: true
			}, params);

			CommonControllerFactory.prepareController(this);
			CommonControllerFactory.prepareFacetController(this);
			var ctx = this;

			this.sortField = { field: "dateDiffusion", order: "desc" };
			this.$documents = $("#documents");
			this.$numFound = $("#nombre-resultats");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$mesCriteres = $("#mes-criteres");
			this.search;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.famillesView;
			this.uriManager = new UriManager(params.pathname, params.title);
			this.filters = new Filters();
			this.mesCriteres;

			this.start = function () {
				ctx.dynamicStart();
				$("#wait").attr("class", "wait-on");
				$.when($.getJSON(contextPath + "/" + langue + "/actualite-ssm/ajax/actualites-ssm"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques")).done(function (actualites, rubriques) {
					ctx.launch(actualites[0], rubriques[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			this.launch = function (jsonActualites, jsonRubriques) {

				var sortAction = function sortAction(value) {
					ctx.sortField = { field: "dateDiffusion", order: value };
					ctx.post();
				};
				var sortOptions = [{ value: "asc", libelle: 'Trier par date croissante', action: sortAction, i18n: "echos.infos.trier-date-croissante" }, { value: "desc", libelle: 'Trier par date décroissante', action: sortAction, i18n: "echos.infos.trier-date-decroissante" }];

				this.search = new Search(contextPath + "/" + langue + "/solr/consultation");

				this.search.post = function (callback) {
					var filters = this.getFilters();
					filters.push({ field: 'typeProduit', values: ['actualiteSSM'] });

					var params = { // objet js au format de l'objet java
						q: this.q,
						defType: this.defType,
						start: this.start,
						sortFields: this.sortFields,
						filters: filters,
						rows: this.rows,
						facetsField: [{ field: 'facetteActualiteSSMId', tag: 'tagFacetteActualiteSSMId' }],
						facetsQuery: new Array()
					};

					$(this.facetsQuery).each(function () {
						params.facetsQuery[params.facetsQuery.length] = { query: this };
					});

					$.ajax({
						url: encodeURI(this.url),
						type: "POST",
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: callback,
						error: function error(data) {
							console.log("error");
							// TODO mieux que ça !
						}
					});
				};

				this.search.getController = function () {
					return ctx;
				};
				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewUp.getController = function () {
					return ctx;
				};
				this.navigateurViewUp.$echoTri.show();
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.navigateurViewDown.getController = function () {
					return ctx;
				};
				this.navigateurViewDown.$echoTri.show();

				this.famillesView = new CollectionFacet({
					$containerFacetteCollection: $("#familles-liste-content"),
					$searchBar: $("#familles-filtre"),
					$choix: $("#familles-choix"),
					$facetteListe: $("#familles-liste"),
					facetteId: FACETTE.facetteActualiteSSMIdFacet.id,
					beanDefinition: { id: "id", title: "libelleFr" }
				});
				this.famillesView.initialise(jsonActualites, { id: "code", title: "libelleFr" });
				this.famillesView.addObserver(this);

				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.documentsView = new DocumentsView(this.$documents);

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);
				this.searchbarView.isNavigation = this.isNavigation;
				this.mesCriteres = new MesCriteres(this.$mesCriteres);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);

				this.uriManager.manage(FACETTE.facetteActualiteSSMIdFacet.id, this.famillesView, URL_PARAMS.familleIdFacet);
				this.uriManager.reload();

				this.post();
				this.initReset();
				Responsive.ResponsiveManager.reset();
			};

			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.search.sortFields = [this.sortField];
				this.uriManager.refreshUri();
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback(json);
				});
			};

			this.reset = function () {
				this.search.start = 0;
				this.famillesView.reset();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			this.callback = function (json) {
				$(json.documents).each(function () {
					this.libelleGeographique = this.famille.facetteActualiteSSM.libelleFr;
				});
				$("#wait").attr("class", "wait-off");
				this.mesCriteres.cleanAll();
				this.numfound.render(json.numFounds, SOLR_PARAMS.defaultQuery);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField.order);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField.order);
				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q));

				// gestion des facets.
				$(json.facetsField).each(function () {
					if (this.name == "facetteActualiteSSMId") {
						ctx.famillesView.render(this);
					}
				});
			};

			this.initReset = function () {

				$("#bouton-raz-familles").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.famillesView.reset();
					ctx.post();
				});

				$("#bouton-raz-criteres").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.removeAllValues();
					ctx.reset();
					ctx.post();
				});
			};

			this.getFiltres = function () {
				return this.filters;
			};

			this.getFacetFilters = function (facetName) {
				return this.filters.getFiltersValues(facetName);
			};

			this.notify = function (message, data) {
				if (message == "rechercher") {
					this.redirection();
				} else if (message == MSG_FACETTE.post) {
					this.post();
				} else if (message == MSG_FACETTE.addFilter) {
					this.addFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.removeFilter) {
					this.removeFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.cleanFilter) {
					this.removeValues(data.facette, data.updateUrl);
				} else if (message == MSG_FACETTE.addCritere) {
					this.addCritere(data);
				} else if (message == MSG_FACETTE.addFacetQuery) {
					this.addFacetQuery(data.query);
				} else if (message == MSG_FACETTE.removeFacetQuery) {
					this.removeFacetQuery(data.query);
				} else if (message == MSG_FACETTE.refreshUrlParam) {
					this.setUrlValue(data.key, data.value);
				}
			};

			/**
    * Ajoute une facette de type query à la requête.
    */
			this.addFacetQuery = function (query) {
				if ($.inArray(query, this.search.facetsQuery) == -1) {
					this.search.facetsQuery[this.search.facetsQuery.length] = query;
				}
			};

			/**
    * Retire une facette de type query de la requête.
    */
			this.removeFacetQuery = function (query) {
				var index = $.inArray(query, this.search.facetsQuery);
				if (index != -1) {
					this.search.facetsQuery.splice(index, 1);
				}
			};

			this.removeAllFacetQuery = function (query) {
				this.search.facetsQuery = [];
			};

			/**
    * Nettoie l'ensemble des valeurs de tout les filtres.
    */
			this.removeAllValues = function () {
				this.search.start = 0;
				this.filters.removeAllValues();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Permet d'affecter un ensemble de valeur à un élément de l'url.
    */
			this.setUrlValue = function (key, value) {
				if ($.isArray(value)) {
					this.uriManager.setValue(key, value);
				} else {
					this.uriManager.setValue(key, [value]);
				}
				//		this.uriManager.refreshUri(); // faut pas sinon on perds les paramètres 
			};

			this.dynamicStart = function () {

				var $demande = $("#formulaire-1");
				var $context = $(".formulaire.actif");

				$context.hide();

				$("#contenu-actualite-ssm").detach().appendTo($(".contenu"));

				if ($demande.length > 0 && $context.length > 0) {
					$demande.detach().appendTo($context);
					$demande.removeClass("formulaire-bas-de-page");
				}

				$(".formulaire-bas-de-page").html("");
			};
		};
		WEB4G.CONTROLLER.AvisParutionDesabonnementController = function ($) {

			var checkEmail = function checkEmail(emailAddress) {
				var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
				var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
				var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
				var sQuotedPair = '\\x5c[\\x00-\\x7f]';
				var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
				var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
				var sDomain_ref = sAtom;
				var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
				var sWord = '(' + sAtom + '|' + sQuotedString + ')';
				var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
				var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
				var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
				var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

				var reValidEmail = new RegExp(sValidEmail);

				return reValidEmail.test(emailAddress);
			};

			var validerEmail = function validerEmail(email) {
				if (checkEmail(email)) {
					return true;
				}
				return false;
			};

			return function () {
				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				$("#confirmer").click(function () {
					var mail = $("#mail").val();
					$(".message-success").hide();
					$("#erreur-reponse").hide();
					$("#mail-invalide").hide();
					if (validerEmail(mail)) {
						var abonnement = "";
						var spanAbonnement = $("#page-avis-parution-desabonnement-id-abonnement");

						if (spanAbonnement.length > 0) {
							abonnement = "/" + spanAbonnement.text();
						}

						$.ajax({
							url: encodeURI(contextPath + '/' + langue + '/avis-parution/desabonnement/envoi-mail' + abonnement),
							type: "POST",
							dataType: 'text',
							contentType: 'application/json; charset=utf-8',
							data: mail,
							success: function success(data) {
								$(".message-success").show();
							},
							error: function error(data) {
								$("#erreur-reponse").show();
							}
						});
					} else {
						$("#mail-invalide").show();
					}
				});
			};
		}(jQuery);
		WEB4G.CONTROLLER.AvisParutionController = function () {

			CommonControllerFactory.prepareControllerStandard(this);
			this.initController();

			var instance = this;
			var messages = {
				$abonnement: $('#message-abonnement'),
				$email: $('#message-email'),
				$emailConfirme: $('#message-email-confirme'),
				$abonnements: $('#message-collections')
			};

			this.start = function () {
				$('#formulaire-avis-parution').detach().appendTo($('.formulaire.actif'));
				$('#bouton-valider').click(function (event) {
					validerAbonnements();
				});
				$('.placeholder-mail').courrielPlaceHolder(langue);
				trouverAbonnements();
			};

			var isNotEmpty = function isNotEmpty(array) {
				return typeof array !== 'undefined' && array.length > 0;
			};

			var demandeAbonnement = function demandeAbonnement() {
				var abonnements = $('.checkbox-abonnement:checked').map(function () {
					return $(this).val();
				}).get();

				var demandeAbo = SecuredBeanFactory.securedBean({
					email: $('#text-email').val(),
					langue: langue,
					abonnements: abonnements
				});
				return demandeAbo;
			};

			var checkEmail = function checkEmail(emailAddress) {
				var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
				var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
				var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
				var sQuotedPair = '\\x5c[\\x00-\\x7f]';
				var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
				var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
				var sDomain_ref = sAtom;
				var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
				var sWord = '(' + sAtom + '|' + sQuotedString + ')';
				var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
				var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
				var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
				var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

				var reValidEmail = new RegExp(sValidEmail);

				return reValidEmail.test(emailAddress);
			};

			var trouverAbonnements = function trouverAbonnements() {
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/avis-parution/abonnements'),
					type: 'GET',
					contentType: 'application/json; charset=utf-8',
					success: function success(abonnements) {
						$('.onglet').each(function (index, onglet) {
							creerArbreAbonnements(abonnements, $(onglet).attr("aria-controls"));
						});
						masquerImageChargement();
						Tools.plierDeplierSommaires();
						gererClickBdm();
						gererClickTheme();
						gererClickIr();
						var abonnement = $('#page-avis-parution-codeFamille').text();
						if (abonnement !== '') {
							Tools.plierSommaires();
							var divAbonnement = $('#' + abonnement);
							divAbonnement.addClass("expanded");
							divAbonnement.next("ul").show();
							divAbonnement[0].scrollIntoView();
						}
					},
					error: function error(xhr) {
						console.log('Erreur lors de la récupération des abonnements : ' + xhr.statusText);
					}
				});
			};

			var gererClickBdm = function gererClickBdm() {
				$('.bdm.all').click(function () {
					var estCochee = $(this).find('input').is(':checked');
					$('.bdm.all').each(function (index, liBdmAll) {
						$(liBdmAll).find('input').prop('checked', estCochee);
					});
					$('.bdm').each(function (index, liBdm) {
						$(liBdm).find('input').prop('checked', estCochee);
					});
				});
			};

			var gererClickIr = function gererClickIr() {
				$('.infoRap.all').click(function () {
					var estCochee = $(this).find('input').is(':checked');
					$(this).find('input').prop('checked', estCochee);
					$('.infoRap').each(function (index, liInfoRap) {
						$(liInfoRap).find('input').prop('checked', estCochee);
					});
				});
			};

			var gererClickTheme = function gererClickTheme() {
				$('.theme.parent').click(function () {
					var estCochee = $(this).find('input').is(':checked');
					var idTheme = $(this).attr('data-theme');
					$(this).find('input').prop('checked', estCochee);
					$('.theme').each(function (index, liTheme) {
						if ($(liTheme).attr('data-theme') === idTheme) {
							$(liTheme).find('input').prop('checked', estCochee);
						}
					});
				});
				$('.theme:not(.parent)').click(function () {
					var estCochee = $(this).find('input').is(':checked');
					var idTheme = $(this).attr('data-theme');
					if (tousLesEnfantsCoches(idTheme)) {
						$('.theme.parent').each(function (index, liTheme) {
							if ($(liTheme).attr('data-theme') === idTheme) {
								$(liTheme).find('input').prop('checked', true);
							}
						});
					} else {
						$('.theme.parent').each(function (index, liTheme) {
							if ($(liTheme).attr('data-theme') === idTheme) {
								$(liTheme).find('input').prop('checked', false);
							}
						});
					}
				});
			};

			var tousLesEnfantsCoches = function tousLesEnfantsCoches(idTheme) {
				var nbEnfants = 0;
				var nbEnfantsCoches = 0;
				$('.theme:not(.parent)').each(function (index, liTheme) {
					var coche = $(liTheme).find('input').prop('checked');
					if ($(liTheme).attr('data-theme') === idTheme) {
						nbEnfants++;
						if (coche) {
							nbEnfantsCoches++;
						}
					}
				});
				return nbEnfants === nbEnfantsCoches;
			};

			var validerEmail = function validerEmail(demande) {
				if (checkEmail(demande.email)) {
					return true;
				}
				ajouterMessageError(messages.$email, 'Erreur : le champ Adresse électronique est obligatoire et doit respecter le format attendu. Exemple : nom@domaine.fr', '');
				return false;
			};

			var validerEmailConfirme = function validerEmailConfirme(demande) {
				var emailConfirme = $('#text-email-confirme').val();
				if (!checkEmail(emailConfirme)) {
					ajouterMessageError(messages.$emailConfirme, 'Erreur : le champ Confirmez votre adresse électronique est obligatoire et doit respecter le format attendu. Exemple : nom@domaine.fr', 'The e-mail address is not valid.');
					return false;
				}
				if (!(demande.email == emailConfirme)) {
					ajouterMessageError(messages.$emailConfirme, 'Erreur : Vous n’avez pas renseigné deux fois la même adresse mail.', 'The e-mail addresses are different.');
					return false;
				}
				return true;
			};

			var validerListeAbonnements = function validerListeAbonnements(demande) {
				if (isNotEmpty(demande.abonnements)) {
					return true;
				}
				ajouterMessageError(messages.$abonnements, 'Erreur : votre demande ne peut pas être validée car vous n\'avez sélectionné aucune collection. Veuillez cocher au moins une collection.', 'Check at least one collection.');
				return false;
			};

			var validerFormulaire = function validerFormulaire(demande) {
				if (validerEmailConfirme(demande) & validerEmail(demande) & validerListeAbonnements(demande)) {
					return true;
				}
				// ajouterMessageError(messages.$abonnement, 'Le formulaire comporte des erreurs.', 'Some fields contain errors.');
				return false;
			};

			var validerAbonnements = function validerAbonnements() {
				Messages.hideAll();
				var demande = demandeAbonnement();
				if (validerFormulaire(demande)) {
					var messageSucces1;
					var messageSucces2;
					switch (langue) {
						default:
						case 'fr':
							messageSucces1 = 'Un message vous a été envoyé à l’adresse ' + demande.email + '.';
							messageSucces2 = 'Cliquez sur le lien qu’il contient pour confirmer votre demande d’abonnement.';
							break;
						case 'en':
							messageSucces1 = 'An e-mail was sent to the address ' + demande.email + '.';
							messageSucces2 = 'Click on the link in the e-mail to confirm your subscription.';
							break;
					}
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/avis-parution/demande-abonnement'),
						type: 'POST',
						dataType: 'json',
						data: JSON.stringify(demande),
						contentType: 'application/json; charset=utf-8',
						success: function success(nombreAbonnements) {
							Messages.hideAll();
							Messages.success(messages.$abonnement, [messageSucces1, messageSucces2]);
							$(".checkbox-abonnement").prop("checked", false);
							$('#text-email').val("");
							$('#text-email-confirme').val("");
						},
						error: function error(xhr) {
							Messages.error(messages.$abonnement, 'Une erreur est survenue, merci de bien vouloir réessayer ultérieurement.');
						}
					});
				}
			};

			var ajouterMessageError = function ajouterMessageError(objet, erreurFr, erreurEn) {
				var erreur;
				switch (langue) {
					default:
					case 'fr':
						erreur = erreurFr;
						break;
					case 'en':
						erreur = erreurEn;
						break;
				}
				Messages.error(objet, erreur);
			};

			var creerArbreAbonnements = function creerArbreAbonnements(abonnements, idOnglet) {
				var $container = $('#collections-abonnables-' + idOnglet);
				abonnements.forEach(function (abonnement, index, array) {
					if (idOnglet.toUpperCase() === abonnement.onglet) {
						var sousAbonnements = abonnement.enfants;
						var possedeSousAbonnements = isNotEmpty(sousAbonnements);
						var $liAbonnement;

						if (possedeSousAbonnements) {
							$liAbonnement = $('<div id="' + abonnement.code + '" class="abonnement-niveau-1 titre-entree" tabindex="0">').append($('<h2>').text(abonnement.libelle));
						} else {
							$liAbonnement = $('<li>', { 'class': 'abonnement-niveau-1' }).append($('<h2>').text(abonnement.libelle));
						}
						$container.append($('<li>').append($liAbonnement));

						if (possedeSousAbonnements) {
							var $ulSousAbonnements = $('<ul>', { 'class': 'groupe-niveau-2 sommaire' });
							$liAbonnement.after($ulSousAbonnements);
							sousAbonnements.forEach(function (sousAbonnement, index, array) {
								var isTheme = sousAbonnement.theme;
								var isInfoRap = sousAbonnement.infoRap;
								var isBdm = sousAbonnement.bdm && sousAbonnement.idFamilleBdm === null;
								var sousSousAbonnements = sousAbonnement.enfants;
								var possedeSousSousAbonnements = isNotEmpty(sousSousAbonnements);
								var $liSousAbonnement;
								if (possedeSousSousAbonnements) {
									$liSousAbonnement = $('<div>', { 'class': 'abonnement-niveau-2 titre-entree collapsed', 'tabindex': '0' }).text(sousAbonnement.libelle);
								} else {
									var classNiveau2 = 'abonnement-niveau-2';
									if (isBdm) {
										classNiveau2 += ' bdm all';
									} else if (isInfoRap) {
										classNiveau2 += ' infoRap all';
									} else if (isTheme) {
										classNiveau2 += ' theme parent';
									}
									$liSousAbonnement = $('<li>', { 'class': classNiveau2, 'data-theme': sousAbonnement.idTheme }).text(sousAbonnement.libelle);
									$liSousAbonnement.prepend($('<input>', {
										type: 'checkbox',
										value: sousAbonnement.idAbonnement,
										'class': 'checkbox-abonnement'
									}));
									$liSousAbonnement.contents().wrapAll($('<label>'));
								}
								$ulSousAbonnements.append($('<li>').append($liSousAbonnement));

								if (possedeSousSousAbonnements) {
									var $ulSousSousAbonnements = $('<ul>', { 'class': 'groupe-niveau-3 sommaire' });
									$liSousAbonnement.after($ulSousSousAbonnements);
									sousSousAbonnements.forEach(function (sousSousAbonnement, index, array) {

										var classNiveau3 = 'abonnement-niveau-3';
										if (isBdm) {
											classNiveau3 += ' bdm';
										} else if (isInfoRap) {
											classNiveau3 += ' infoRap';
										} else if (isTheme) {
											classNiveau3 += ' theme';
										}
										var $liSousSousAbonnement = $('<li>', { 'class': classNiveau3, 'data-theme': sousSousAbonnement.idThemeParent }).text(sousSousAbonnement.libelle);
										$liSousSousAbonnement.prepend($('<input>', {
											type: 'checkbox',
											value: sousSousAbonnement.idAbonnement,
											'class': 'checkbox-abonnement'
										}));
										$liSousSousAbonnement.contents().wrapAll($('<label>'));
										$ulSousSousAbonnements.append($liSousSousAbonnement);
									});
								}
							});
						}
					}
				});
			};

			var masquerImageChargement = function masquerImageChargement() {
				$('#image-loader').hide();
			};
		};
		WEB4G.CONTROLLER.ConvertisseurFrancEuro = function ($) {

			var MONNAIE = {
				"1": "Euros",
				"2": "Francs",
				"3": "Anciens francs"
			};
			var somme;
			var monnaieOrigine;
			var anneeOrigine;
			var monnaieConversion;
			var anneeConversion;
			var erreurSomme;
			var erreurSommeInvalide;
			var erreurOrigine;
			var erreurConversion;

			var gererErreur = function gererErreur(condition, erreur) {
				if (condition) {
					erreur.show();
					return true;
				} else {
					erreur.hide();
					return false;
				}
			};

			var anneePlusRecente = function anneePlusRecente() {
				$.getJSON(contextPath + '/' + langue + '/information/convertisseur-franc-euro/annee-plus-recente').done(function (data) {
					var select = $('.select-annee-convertisseur');
					for (var i = 1901; i <= data; i++) {
						select.append($('<option>').val(i).text(i));
					}
					if (data >= 2000) {
						$("#annee-origine").val(2000).combobox();
					}
					$("#annee-conversion").val(data).combobox();
				}).fail(function () {});
			};

			var requeteAjax = function requeteAjax($context) {
				var params = {
					somme: somme.val().replace(",", "."),
					monnaieOrigine: monnaieOrigine.find("option:selected").val(),
					anneeOrigine: anneeOrigine.find("option:selected").text(),
					monnaieConversion: monnaieConversion.find("option:selected").val(),
					anneeConversion: anneeConversion.find("option:selected").text()
				};
				var erreur = false;
				var reponse = $context.find("#reponse");
				reponse.html("");

				erreur = gererErreur(params.somme == "", erreurSomme) || erreur;
				erreur = gererErreur(isNaN(params.somme), erreurSommeInvalide) || erreur;
				erreur = gererErreur(params.monnaieOrigine == -1, erreurOrigine) || erreur;
				erreur = gererErreur(params.monnaieConversion == -1, erreurConversion) || erreur;

				if (!erreur) {
					var $wait = $("#information-waiting").attr("class", "waiting-on");
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/information/convertisseur-franc-euro/'),
						type: "POST",
						dataType: 'json',
						contentType: 'application/json; charset=utf-8',
						data: JSON.stringify(params),
						success: function success(data) {
							var h3 = $("<h3>").addClass("titre-formulaire").text("Résultat : " + data.resultatFormate + " " + MONNAIE[params.monnaieConversion]);
							var p = $("<p>").text("Compte tenu de l'érosion monétaire due à l'inflation, le pouvoir d'achat de " + data.sommeFormatee + " " + MONNAIE[params.monnaieOrigine] + " en " + params.anneeOrigine + " est donc le même que celui de " + data.resultatFormate + " " + MONNAIE[params.monnaieConversion] + " en " + params.anneeConversion + ".");
							reponse.append(h3).append(p);
							$wait.attr("class", "wait-off");
						},
						error: function error(data) {
							$context.find("#reponse").html("Une erreur est survenue.");
							$wait.attr("class", "wait-off");
						}
					});
				}
			};

			return function () {
				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				var $spanRetour = $(".retour-fil-ariane");
				if ($spanRetour.length == 0) {
					var $spanRetour = $('<span>', { 'class': 'retour-fil-ariane hidden' }).attr("id", "retour-faq").append($('<span>', { 'class': 'icon-flecheArr' }), $('<a>', { 'data-i18n': 'breadcrum.retour', 'class': 'lien-retour', 'href': '#' }).text('Retour'), $('<span>', { 'class': 'barre-verticale' }).text('|'));
					$(".fil-ariane").before($spanRetour);
					$spanRetour.i18n();
					$spanRetour.find(".lien-retour").click(function (event) {
						history.back();
						event.preventDefault();
						event.stopImmediatePropagation();
					});
				}

				var $context = $(".formulaire.actif");
				var $demande = $("#formulaire-1");
				var $selectMois = $("#mois-ind-rev");

				$context.removeClass("bloc");

				if ($demande.length > 0 && $context.length > 0) {
					$demande.detach().appendTo($context);
					$demande.removeClass("formulaire-bas-de-page");

					anneePlusRecente();

					var reponse = $context.find("#reponse");
					somme = $("#somme");
					monnaieOrigine = $("#monnaie-origine");
					monnaieOrigine.selectric('refresh');
					anneeOrigine = $("#annee-origine");
					anneeOrigine.selectric('refresh');
					monnaieConversion = $("#monnaie-conversion");
					monnaieConversion.selectric('refresh');
					anneeConversion = $("#annee-conversion");
					anneeConversion.selectric('refresh');
					erreurSomme = $("#erreur-somme");
					erreurSommeInvalide = $("#erreur-somme-invalide");
					erreurOrigine = $("#erreur-origine");
					erreurConversion = $("#erreur-conversion");

					$("#valider").click(function (e) {
						requeteAjax($context);
						e.preventDefault();
					});

					$("#effacer").click(function (e) {
						somme.val("");
						monnaieOrigine.val(-1).combobox();
						monnaieConversion.val(-1).combobox();
						anneeOrigine.val(2000).combobox();
						anneeConversion.val(anneeConversion.find("option:last").val()).combobox();
						reponse.html("");
						erreurSomme.hide();
						erreurSommeInvalide.hide();
						erreurOrigine.hide();
						erreurConversion.hide();
						e.preventDefault();
					});
				}

				$(".formulaire-bas-de-page").html("");
			};
		}(jQuery);
		WEB4G.CONTROLLER.CategorieEntrepriseController = function ($) {

			var demandeSiren = function demandeSiren(id) {
				var demandeSiren = SecuredBeanFactory.securedBean({
					siren: id
				});
				return demandeSiren;
			};

			var requeteAjax = function requeteAjax($context, $input) {
				var $wait = $("#information-waiting").attr("class", "waiting-on");
				var id = $input.val().split(" ").join("");
				var demande = demandeSiren(id);
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/information/demande-categorie-entreprise'),
					type: "POST",
					dataType: 'json',
					data: JSON.stringify(demande),
					contentType: 'application/json; charset=utf-8',
					success: function success(data) {
						var $reponse = $context.find(".reponse");
						var sirenFormatte;
						if (data.siren) {
							sirenFormatte = data.siren.separerNombres(3, 9);
						}
						id = id.separerNombres(3, 9);
						if (data.statut == 429) {
							$reponse.html("<span class=\"gras\">Le service a été interrompu en raison d’un trop grand nombre de requêtes, veuillez réessayer dans quelques minutes.</span>");
						} else if (data.statut == 301) {
							$reponse.html("<span class=\"gras\">L’unité légale " + id + " est fermée pour cause de doublon</span>");
						} else if (data.statut == 404) {
							$reponse.html("<span class=\"gras\">Le Siren " + id.separerNombres(3, 9) + " n’existe pas</span>, veuillez corriger votre siren.");
						} else if (data.statut == 403) {
							$reponse.html("<span class=\"gras\">Le Siren " + id.separerNombres(3, 9) + " correspond à une unité légale du répertoire Sirene non diffusible</span>");
						} else if (!data.categorie) {
							$reponse.html("<span class=\"gras\">L’Insee n’a pas pu attribuer une catégorie d’entreprise pour le siren " + id + ". Il s’agit soit d’une unité légale nouvellement créée, soit d’une unité " + "légale cessée, soit d’une unité légale hors champ du calcul de la catégorie (unité légale agricole ou ne faisant pas partie du système productif)");
						} else if (id !== sirenFormatte) {
							$reponse.html("<span class=\"gras\">Le siren " + id + " n’existe plus dans Sirene. Le siren devant être pris en compte est le " + sirenFormatte + ". Pour l’année " + data.categorieAnnee + ", la catégorie d’entreprise du Siren " + sirenFormatte + " est \"" + data.categorieLibelle + "\".</span><br/><br/>Siren : " + sirenFormatte + "<br/>Raison sociale (ou nom prénom pour Personne physique) : " + data.raisonSociale + ".");
						} else {
							$reponse.html("<span class=\"gras\">Pour l’année " + data.categorieAnnee + ", la catégorie d’entreprise du Siren " + id + " est \"" + data.categorieLibelle + "\".</span><br/><br/>Siren : " + id + "<br/>Raison sociale (ou nom prénom pour Personne physique) : " + data.raisonSociale + ".");
						}
						$wait.attr("class", "wait-off");
					},
					error: function error(data) {
						var $reponse = $context.find(".reponse");
						if (id == null || id == "" || id.length < 9) {
							$reponse.html("<span class=\"gras\">Erreur : Le Siren n’existe pas</span>, veuillez corriger votre siren.</span>");
							$wait.attr("class", "wait-off");
						} else {
							$reponse.html("<span class=\"gras\">Le service est actuellement indisponible, veuillez nous excuser pour la gêne occasionnée.</span>");
							$wait.attr("class", "wait-off");
						}
					}
				});
			};

			return function () {
				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				var $context = $(".formulaire.actif");
				var $demande = $("#formulaire-1");

				if ($demande.length > 0 && $context.length > 0) {
					$demande.detach().appendTo($context);
					$demande.removeClass("formulaire-bas-de-page");

					var searchbar = new SearchbarView($("#searchbar-categorie-entreprise"));
					var $input = searchbar.$input;
					searchbar.onChange = function (request) {
						if (request != null) {
							requeteAjax($context, $input);
						}
					};

					$input.siren();
				}

				$(".formulaire-bas-de-page").html("");
			};
		}(jQuery);
		WEB4G.CONTROLLER.FaqController = function ($) {
			var navigationHistorique = new NavigationHistorique();

			var $input;
			var filAriane;
			var tailleFilAriane;
			var $wait;

			// Inutile pour l'instant
			var updateFilAriane = function updateFilAriane(onglet) {
				if (onglet === null) {
					filAriane.children().eq(tailleFilAriane).detach();
				} else if (filAriane.children().length <= tailleFilAriane) {
					filAriane.append("<li>" + onglet + "</li>");
				} else {
					filAriane.children().eq(tailleFilAriane).html("<li>" + onglet + "</li>");
				}
			};

			var poserQuestion = function poserQuestion($select, $questionReponse, $reponse) {
				var question = $input.val();
				if (question !== '') {
					var theme = $select.val();
					$("#faq-accueil").hide();
					$("#reponse").hide();
					$("#question-reponse").show();
					$wait.attr("class", "wait-on");

					var params = SecuredBeanFactory.securedBean({ question: question });
					$questionReponse.empty();

					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/ajax/faq/theme/' + theme),
						type: "POST",
						dataType: 'json',
						async: false,
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						success: function success(data) {
							data.forEach(function (element, index, array) {
								var $container = DocumentViewDom.getDom({
									id: 'echo_' + index,
									titre: element.titre,
									typeDocument: '',
									libelleTypeDocumentFr: ''
								});
								$questionReponse.append($container);
								$container.find("a").click(function (event) {
									lireReponse($reponse, element.id);
									event.preventDefault();
								});
							});
							var href = location.href;
							href = navigationHistorique.removeUrlParam(href, "reponse");
							if (theme != -1) {
								href = navigationHistorique.addUrlParam(href, "theme", theme);
							} else {
								href = navigationHistorique.removeUrlParam(href, "theme");
							}
							href = navigationHistorique.addUrlParam(href, "question", question);
							navigationHistorique.ajouterHistorique(href);
							$("#retour-faq").removeClass("hidden");
							$wait.attr("class", "wait-off");
						},
						error: function error(data) {
							$questionReponse.empty();
							$questionReponse.append("<div>Vous avez validé le formulaire trop vite</div>");
							$wait.attr("class", "wait-off");
						}
					});
				}
			};

			var lireReponse = function lireReponse($reponse, idQuestion) {
				if (idQuestion === -1) {
					return;
				}
				var $wait = $("#wait");
				$input.val("");
				$("#faq-accueil").hide();
				$("#question-reponse").hide();
				$("#reponse").show();
				$wait.attr("class", "wait-on");
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/ajax/faq/reponse/' + idQuestion),
					type: "POST",
					dataType: 'json',
					async: false,
					contentType: 'application/json; charset=utf-8',
					success: function success(data) {
						$reponse.empty();
						$reponse.append($('<h2>').text(data.titre));
						$reponse.append($('<p>').html(data.contenu));
						var href = navigationHistorique.addUrlParam(location.href, "reponse", idQuestion);
						navigationHistorique.ajouterHistorique(href);
						$wait.attr("class", "wait-off");
						$("#retour-faq").removeClass("hidden");
						$(window).scrollTop($("#consulter").position().top);
					},
					error: function error(data) {}
				});
			};

			var remplirThemes = function remplirThemes() {
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/ajax/faq/themes'),
					type: "POST",
					dataType: 'json',
					async: false,
					contentType: 'application/json; charset=utf-8',
					success: function success(data) {
						var $selecteur = $(".select-themes");
						var $departSommaire = $(".sommaire-seul > .sommaire-container > .sommaire");
						data.forEach(function (element) {
							$selecteur.append($('<option>', { value: element.id }).text(element.libelle));
							var $item = $('<div>', { 'class': 'titre-entree collapsed' }).append($('<h2>').text(element.libelle));
							var $ul = $('<ul>', { 'class': 'sommaire', 'style': 'display:none' });
							$departSommaire.append($('<li>').append($item).append($ul));
							$item.click(function (event) {
								if ($(this).hasClass("collapsed")) {
									remplirUnTheme($ul, element.id);
								}
								event.preventDefault();
							});
						});
						updateTheme($selecteur);
					},
					error: function error(data) {}
				});
			};

			var themeClick = function themeClick(theme) {
				theme.addClass("collapsed");
				theme.click(function () {
					theme.toggleClass("collapsed expanded");
					theme.next().slideToggle("fast");
				});
				theme.keydown(function (e) {
					if (e.which == KeyCode.space || e.which == KeyCode.enter) {
						theme.toggleClass("collapsed expanded");
						theme.next().slideToggle("fast");
					}
				});
			};

			var remplirUnTheme = function remplirUnTheme($container, theme) {
				var $wait = $("#wait");
				$wait.attr("class", "wait-on");
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/ajax/faq/theme/questions/' + theme),
					type: "POST",
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					success: function success(data) {
						$container.empty();
						data.forEach(function (element) {
							if (element.sousTheme) {
								var $item = $('<div>', { 'class': 'titre-entree collapsed', 'tabindex': 0 }).text(element.titre);
								var $ul = $('<ul>', { 'class': 'sommaire', 'style': 'display:none' });
								$container.append($('<li>').append($item).append($ul));
								$item.click(function (event) {
									if ($(this).hasClass("collapsed")) {
										remplirUnTheme($ul, element.id);
									}
									event.preventDefault();
								});
								themeClick($item);
							} else {
								var lien = $('<a>', { 'class': 'renvoi pointer' }).text(element.titre);
								$container.append($('<li>', { 'class': 'item' }).append(lien));
								lien.click(function (event) {
									lireReponse($("#reponse .reponse"), element.id);
									event.preventDefault();
								});
							}
						});
						$wait.attr("class", "wait-off");
					},
					error: function error(data) {
						$wait.attr("class", "wait-off");
					}
				});
			};

			var remplirQuestionsPopulaires = function remplirQuestionsPopulaires($reponse) {
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/ajax/faq/questions-populaires'),
					type: "POST",
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					success: function success(data) {
						var $selecteur = $(".questions-populaires ul");
						data.forEach(function (element) {
							var lien = $('<a>', { 'class': 'renvoi pointer' }).text(element.titre);
							$selecteur.append($('<li>', { 'class': 'item' }).append(lien));
							lien.click(function (event) {
								lireReponse($reponse, element.id);
								event.preventDefault();
							});
						});
					},
					error: function error(data) {}
				});
			};

			var updateTheme = function updateTheme($select) {
				var theme = navigationHistorique.getUrlParam("theme");
				if (theme !== null) {
					$select.val(theme);
				} else {
					$select.val(-1);
				}
				$select.selectric("refresh");
			};

			var update = function update($select, $questionReponse, $reponse, premiereFois) {
				updateTheme($select);
				var reponse = navigationHistorique.getUrlParam("reponse");
				if (reponse !== null) {
					lireReponse($reponse, reponse);
				} else {
					var question = navigationHistorique.getUrlParam("question");
					if (question !== null) {
						$input.val(decodeURIComponent(question));
						if (premiereFois) {
							$wait.attr("class", "wait-on");
							setTimeout(function () {
								poserQuestion($select, $questionReponse, $reponse);
							}, 1000);
						} else {
							poserQuestion($select, $questionReponse, $reponse);
						}
					} else {
						$input.val("");
						$("#faq-accueil").show();
						$("#reponse").hide();
						$("#question-reponse").hide();
						$("#retour-faq").addClass("hidden");
					}
				}
			};

			return function () {
				/*filAriane = $(".breadcrum .fil-ariane");
    tailleFilAriane = filAriane.children().length;*/
				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				if (langue.toLowerCase() == 'fr') {
					$('#question').attr('placeholder', 'Votre question');
					$('.searchbar-icon').attr('title', 'rechercher');
				} else {
					$('#question').attr('placeholder', 'Your question');
					$('.searchbar-icon').attr('title', 'search');
				}

				$wait = $("#wait");
				var $spanRetour = $(".retour-fil-ariane");
				if ($spanRetour.length == 0) {
					var $spanRetour = $('<span>', { 'class': 'retour-fil-ariane hidden' }).attr("id", "retour-faq").append($('<span>', { 'class': 'icon-flecheArr' }), $('<a>', { 'data-i18n': 'breadcrum.retour', 'class': 'lien-retour', 'href': '#' }).text('Retour'), $('<span>', { 'class': 'barre-verticale' }).text('|'));
					$spanRetour.i18n();
					$(".fil-ariane").before($spanRetour);
					$spanRetour.find(".lien-retour").click(function (event) {
						history.back();
						event.preventDefault();
						event.stopImmediatePropagation();
					});
				}

				var $questionReponse = $("#question-reponse #documents");
				var $reponse = $("#reponse .reponse");
				var $context = $(".formulaire.actif");
				var searchbar = new SearchbarView($("#searchbar-faq"));
				$input = searchbar.$input;

				remplirQuestionsPopulaires($reponse);

				$("#question-reponse").detach().appendTo($(".corps-publication"));
				$("#reponse").detach().appendTo($(".corps-publication"));
				$("#faq-accueil").detach().appendTo($(".corps-publication"));

				var $demande = $("#formulaire-1");
				$context.removeClass("bloc");

				if ($demande.length > 0 && $context.length > 0) {
					$demande.detach().appendTo($context);
					$demande.removeClass("formulaire-bas-de-page");

					var $select = $(".select-themes");
					searchbar.onChange = function (request) {
						if (request !== null) {
							poserQuestion($select, $questionReponse, $reponse);
						}
					};

					remplirThemes();
					update($select, $questionReponse, $reponse, true);

					navigationHistorique.ajouterEvent(function () {
						update($select, $questionReponse, $reponse, false);
					});
				}

				$(".formulaire-bas-de-page").html("");
				$(".select-themes").combobox();
			};
		}(jQuery);
		WEB4G.CONTROLLER.FluxRssController = function () {
			CommonControllerFactory.prepareControllerStandard(this);
			this.initController();

			var instance = this;

			this.start = function () {
				$('#formulaire-flux-rss').detach().appendTo($('.formulaire.actif'));
				trouverFluxNationaux();
				trouverFluxRegionaux();
			};

			var trouverFluxNationaux = function trouverFluxNationaux() {
				$.ajax({
					url: encodeURI(contextPath + '/' + langue + '/flux-rss/nationaux'),
					type: 'GET',
					contentType: 'application/json; charset=utf-8',
					success: function success(flux) {
						creerArbreFlux(flux, 'NAT');
						masquerImageChargement('NAT');
					},
					error: function error(xhr) {
						console.log('Erreur lors de la récupération des flux rss nationaux: ' + xhr.statusText);
					}
				});
			};
			var trouverFluxRegionaux = function trouverFluxRegionaux() {
				if (langue === 'en') {
					supprimerArbreFlux('REG');
				} else {
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/flux-rss/regionaux'),
						type: 'GET',
						contentType: 'application/json; charset=utf-8',
						success: function success(flux) {
							creerArbreFlux(flux, 'REG');
							masquerImageChargement('REG');
						},
						error: function error(xhr) {
							console.log('Erreur lors de la récupération des flux rss régionaux: ' + xhr.statusText);
						}
					});
				}
			};

			var creerArbreFlux = function creerArbreFlux(fluxs, id) {
				var $container = $('#flux-rss-' + id);
				fluxs.forEach(function (flux, index, array) {
					var $liFamille = $('<li>', { class: 'famille-niveau-2' }).append($('<a>', { href: urlFlux(flux) }).text(flux.titre));
					$container.append($liFamille);
				});
			};

			var supprimerArbreFlux = function supprimerArbreFlux(id) {
				var $elementListe = $('#flux-rss-' + id).parent();
				$elementListe.remove();
			};

			var urlFlux = function urlFlux(flux) {
				if (flux.id === 7 || flux.id === 33) {
					return 'https://bdm.insee.fr/series/sdmx/rss/donnees';
				} else {
					return contextPath + '/' + flux.langue + '/flux/' + flux.id;
				}
			};

			var masquerImageChargement = function masquerImageChargement(id) {
				$('#image-loader-' + id).hide();
			};
		};

		WEB4G.CONTROLLER.PensionAlimentaire = function ($) {

			var ERREUR_INDICE_NON_PARU = "erreur - indice non paru";
			var lienCas;
			var navigationHistorique = new NavigationHistorique();
			var dateJugement;
			var dateRevision;
			var selectIndice;
			var indiceMois;
			var indiceExpliciteMois;
			var indiceExpliciteAnnee;
			var montantEuros;
			var montantFrancs;
			var erreurDateJugement;
			var erreurDateRevision;
			var erreurIndiceMois;
			var erreurMontantVide;
			var erreurMontantTrop;
			var erreurIndiceExplicite;
			var erreurIndiceExpliciteAnnee;
			var erreurIndiceExpliciteMois;
			var erreurMontantNombreInvalide;
			var erreurIndiceNonParu;

			var gererErreur = function gererErreur(condition, erreur) {
				if (condition) {
					erreur.show();
					return true;
				} else {
					erreur.hide();
					return false;
				}
			};

			var dateImpliciteValide = function dateImpliciteValide(mois, annee) {
				var now = new Date();
				var moisDAvant = now.setMonth(now.getMonth() - 1);
				return $.datepicker.parseDate('dd/mm/yy', "01/" + (mois + 1) % 12 + "/" + annee).getTime() <= moisDAvant;
			};

			var anneeValide = function anneeValide(annee) {
				return new Date().getFullYear >= annee && annee >= 1992;
			};

			var requeteAjax = function requeteAjax($context) {
				var params = {
					dateJugement: $.datepicker.parseDate('dd/mm/yy', dateJugement.val()),
					indiceIdBank: selectIndice.val(),
					indiceTexte: selectIndice.find("option:selected").text(),
					dateRevision: $.datepicker.parseDate('dd/mm', dateRevision.val()),
					choixIndiceRevision: $('input[type=radio][name=choix-ind-rev]:checked').val(),
					indiceMois: indiceMois.val(),
					montantEuros: montantEuros.val().replace(",", "."),
					montantFrancs: montantFrancs.val().replace(",", "."),
					choixIndiceDepart: $('input[type=radio][name=choix-ind-depart]:checked').val(),
					indiceExpliciteMois: indiceExpliciteMois.val(),
					indiceExpliciteAnnee: indiceExpliciteAnnee.val()
				};
				var erreur = false;
				var reponse = $context.find("#reponse");
				reponse.html("");

				erreur = gererErreur(params.dateJugement == null, erreurDateJugement) || erreur;
				erreur = gererErreur(params.dateRevision == null, erreurDateRevision) || erreur;
				//			erreur = gererErreur(params.choixIndiceDepart == 1 && 
				//			(params.indiceExpliciteAnnee == "" || params.indiceExpliciteMois == -1 
				//				|| !dateImpliciteValide(params.indiceExpliciteMois, params.indiceExpliciteAnnee)), erreurIndiceExplicite) || erreur;
				//		
				erreur = gererErreur(params.choixIndiceDepart == 1 && (!dateImpliciteValide(params.indiceExpliciteMois, params.indiceExpliciteAnnee) || params.indiceExpliciteAnnee == "" || !anneeValide(params.indiceExpliciteAnnee)), erreurIndiceExpliciteAnnee) || erreur;
				/*erreur = gererErreur(params.choixIndiceDepart == 1 && 
    	(params.indiceExpliciteAnnee == "" 
    		|| !anneeValide(params.indiceExpliciteAnnee)), erreurIndiceExpliciteAnnee) || erreur;*/
				erreur = gererErreur(params.choixIndiceDepart == 1 && params.indiceExpliciteMois == -1, erreurIndiceExpliciteMois) || erreur;

				erreur = gererErreur(params.choixIndiceRevision == 3 && params.indiceMois == -1, erreurIndiceMois) || erreur;
				erreur = gererErreur(params.montantEuros == "" && params.montantFrancs == "", erreurMontantVide) || erreur;
				erreur = gererErreur(params.montantEuros != "" && params.montantFrancs != "", erreurMontantTrop) || erreur;
				erreur = gererErreur(isNaN(params.montantEuros) || isNaN(params.montantFrancs), erreurMontantNombreInvalide) || erreur;
				erreurIndiceNonParu.hide();

				if (!erreur) {
					var $wait = $("#information-waiting").attr("class", "waiting-on");
					$.ajax({
						url: encodeURI(contextPath + '/' + langue + '/information/pension-alimentaire/' + lienCas),
						type: "POST",
						dataType: 'text',
						contentType: 'application/json; charset=utf-8',
						data: JSON.stringify(params),
						success: function success(data) {
							if (data == ERREUR_INDICE_NON_PARU) {
								erreurIndiceNonParu.show();
								$wait.attr("class", "wait-off");
							} else {
								reponse.html(data);
								$wait.attr("class", "wait-off");
							}
							//Ajout du tableau responsive
							Responsive.ResponsiveManager.start();
							new ResponsiveTableEx($(".tableau-produit"));
							Responsive.ResponsiveManager.reset();
						},
						error: function error(data) {
							$context.find("#reponse").html("Une erreur est survenue.");
							$wait.attr("class", "wait-off");
						}
					});
				}
			};

			var update = function update($accueil, $cas) {
				var reponse = navigationHistorique.getUrlParam("cas");
				$("#effacer").click();
				$("#reponse").html("");
				if (reponse != null) {
					var titres = $(".titre-formulaire");
					titres.eq(0).html("1 - Indiquez la date de votre jugement");
					titres.eq(1).html("2 - Sélectionnez l'indice avec lequel vous souhaitez faire votre révision");
					if (reponse == "A") {
						lienCas = "cas-a";
						$(".casB").hide();
						$("#titre-cas").html("Cas A : Vous souhaitez revaloriser votre pension alimentaire par rapport à l'année dernière");
						titres.eq(3).html("3 - Indiquez la date exacte de révision de votre pension inscrite dans votre jugement.");
						titres.eq(4).html("4 - Indiquez le montant actuel de votre pension alimentaire.");
					} else if (reponse == "B") {
						lienCas = "cas-b";
						$(".casB").show();
						$("#titre-cas").html("Cas B : Vous avez divorcé en 1971 ou après et vous n’avez pas revalorisé régulièrement votre pension alimentaire");
						titres.eq(2).html("3 - Quelles sont les précisions inscrites dans votre jugement concernant l'indice de départ (ou indice de référence) ?");
						titres.eq(3).html("4 - Indiquez la date exacte de révision de votre pension inscrite dans votre jugement.");
						titres.eq(4).html("5 - Indiquez le montant de départ de votre pension (montant inscrit sur votre jugement) (*).");
					}
					$accueil.hide();
					$cas.show();
				} else {
					$cas.hide();
					$accueil.show();
					$("#retour-faq").addClass("hidden");
				}
			};

			return function () {
				CommonControllerFactory.prepareControllerStandard(this);
				this.initController();

				var $spanRetour = $(".retour-fil-ariane");
				if ($spanRetour.length == 0) {
					var $spanRetour = $('<span>', { 'class': 'retour-fil-ariane hidden' }).attr("id", "retour-faq").append($('<span>', { 'class': 'icon-flecheArr' }), $('<a>', { 'data-i18n': 'breadcrum.retour', 'class': 'lien-retour', 'href': '#' }).text('Retour'), $('<span>', { 'class': 'barre-verticale' }).text('|'));
					$(".fil-ariane").before($spanRetour);
					$spanRetour.i18n();
					$spanRetour.find(".lien-retour").click(function (event) {
						history.back();
						event.preventDefault();
						event.stopImmediatePropagation();
					});
				}

				var $context = $(".formulaire.actif");
				var $demande = $("#formulaire-1");
				var $selectMois = $("#mois-ind-rev");
				var $cas = $("#cas");
				var $accueil = $("#accueil");

				$context.removeClass("bloc");

				if ($demande.length > 0 && $context.length > 0) {
					var _dateJugement$datetim, _dateRevision$datetim;

					$demande.detach().appendTo($context);
					$demande.removeClass("formulaire-bas-de-page");

					dateJugement = $("#date-jugement");
					dateRevision = $("#date-revision");
					selectIndice = $("#indice");
					indiceMois = $("#mois-ind-rev");
					indiceExpliciteMois = $("#mois-depart");
					indiceExpliciteAnnee = $("#annee-depart");
					montantEuros = $("#montant-euros");
					montantFrancs = $("#montant-francs");
					erreurDateJugement = $("#erreur-date-jugement");
					erreurDateRevision = $("#erreur-date-revision");
					erreurIndiceMois = $("#erreur-indice-mois");
					erreurMontantVide = $("#erreur-montant-vide");
					erreurMontantTrop = $("#erreur-montant-trop");
					erreurIndiceExplicite = $("#erreur-indice-explicite");
					erreurIndiceExpliciteAnnee = $("#erreur-indice-explicite-annee");
					erreurIndiceExpliciteMois = $("#erreur-indice-explicite-mois");
					erreurMontantNombreInvalide = $("#erreur-montant-nombre-invalide");
					erreurIndiceNonParu = $("#erreur-indice-non-paru");

					$("input[type=radio][name=choix-ind-rev]").change(function (e) {
						if (this.value == 3) {
							$selectMois.prop("disabled", false);
							$selectMois.selectric('refresh');
						} else {
							$selectMois.prop("disabled", true);
							$selectMois.selectric('refresh');
						}
					});
					$selectMois.selectric('refresh');

					$("input[type=radio][name=choix-ind-depart]").change(function (e) {
						if (this.value == 1) {
							//$("#choix1-ind-depart").nextAll().prop("disabled", false);
							indiceExpliciteMois.prop("disabled", false);
							$("#annee-depart").prop("disabled", false);
							indiceExpliciteMois.selectric('refresh');
						} else {
							//$("#choix1-ind-depart").nextAll().prop("disabled", true);
							indiceExpliciteMois.prop("disabled", true);
							$("#annee-depart").prop("disabled", true);
							indiceExpliciteMois.selectric('refresh');
						}
					});
					$("#choix1-ind-depart").nextAll().prop("disabled", true);
					indiceExpliciteMois.selectric('refresh');

					dateJugement.datetimepicker((_dateJugement$datetim = {
						lang: "fr",
						timepicker: true,
						format: "d/m/Y",
						startDate: 0
					}, _defineProperty(_dateJugement$datetim, 'timepicker', false), _defineProperty(_dateJugement$datetim, 'closeOnDateSelect', true), _defineProperty(_dateJugement$datetim, 'minDate', $.datepicker.parseDate('dd/mm/yy', "01/03/1971")), _defineProperty(_dateJugement$datetim, 'maxDate', 0), _defineProperty(_dateJugement$datetim, 'value', $.datepicker.formatDate('dd/mm/yy', new Date())), _dateJugement$datetim));

					dateRevision.datetimepicker((_dateRevision$datetim = {
						lang: "fr",
						timepicker: true,
						format: "d/m",
						startDate: 0
					}, _defineProperty(_dateRevision$datetim, 'timepicker', false), _defineProperty(_dateRevision$datetim, 'closeOnDateSelect', true), _defineProperty(_dateRevision$datetim, 'value', $.datepicker.formatDate('dd/mm', new Date())), _dateRevision$datetim));
					$(".xdsoft_year:last").hide();

					$("#valider").click(function (e) {
						requeteAjax($context);
						e.preventDefault();
					});

					$("#effacer").click(function (e) {
						$("#form")[0].reset();
						dateJugement.val($.datepicker.formatDate('dd/mm/yy', new Date()));
						dateRevision.val($.datepicker.formatDate('dd/mm', new Date()));
						$selectMois.prop("disabled", true);
						$("#choix1-ind-depart").nextAll().prop("disabled", true);
						erreurDateJugement.hide();
						erreurDateRevision.hide();
						erreurIndiceMois.hide();
						erreurMontantVide.hide();
						erreurMontantTrop.hide();
						erreurIndiceExplicite.hide();
						erreurIndiceExpliciteAnnee.hide();
						erreurIndiceExpliciteMois.hide();
						erreurMontantNombreInvalide.hide();
						e.preventDefault();
					});

					$("#lien-cas-a").click(function () {
						var href = navigationHistorique.addUrlParam(window.location.href, "cas", "A");
						navigationHistorique.ajouterHistorique(href);
						update($accueil, $cas);
						$("#retour-faq").removeClass("hidden");
					});

					$("#lien-cas-b").click(function () {
						var href = navigationHistorique.addUrlParam(window.location.href, "cas", "B");
						navigationHistorique.ajouterHistorique(href);
						update($accueil, $cas);
						$("#retour-faq").removeClass("hidden");
					});

					navigationHistorique.ajouterEvent(function () {
						update($accueil, $cas);
					});
					update($accueil, $cas);

					dateJugement.change(function () {
						var date = $.datepicker.parseDate('dd/mm/yy', dateJugement.val()).getTime();
						if (date <= $.datepicker.parseDate('dd/mm/yy', "01/03/1971").getTime()) {
							date = $.datepicker.parseDate('dd/mm/yy', "01/03/1971");
							dateJugement.val("01/03/1971");
						} else if (date >= new Date().getTime()) {
							date = new Date();
							dateJugement.val($.datepicker.formatDate('dd/mm/yy', new Date()));
						}
						selectIndice.empty();
						if (lienCas === "cas-b") {
							if (date <= $.datepicker.parseDate('dd/mm/yy', "28/02/1983").getTime()) {
								selectIndice.append($('<option>').val("1761305").text("ménages urbains dont le chef est ouvrier ou employé, série France entière (indice des 295 postes)")).append($('<option>').val("1761306").text("ménages urbains dont le chef est ouvrier ou employé, série parisienne (indice des 295 postes)"));
							} else if (date <= $.datepicker.parseDate('dd/mm/yy', "29/02/1992").getTime()) {
								selectIndice.append($('<option>').val("1761305").text("ménages urbains dont le chef est ouvrier ou employé, France entière (indice des 296 postes), avec tabac")).append($('<option>').val("1761306").text("ménages urbains dont le chef est ouvrier ou employé, série parisienne (indice des 296 postes), avec tabac")).append($('<option>').val("1768557").text("ménages urbains dont le chef est ouvrier ou employé, France entière (indice des 296 postes), hors tabac")).append($('<option>').val("1761307").text("ménages urbains dont le chef est ouvrier ou employé, série parisienne (indice des 296 postes), hors tabac"));
							} else if (date <= $.datepicker.parseDate('dd/mm/yy', "01/03/1998").getTime()) {
								selectIndice.append($('<option>').val("1763415").text("ménages urbains dont le chef est ouvrier ou employé, France entière (indice des 265 postes), hors tabac")).append($('<option>').val("1761307").text("ménages urbains dont le chef est ouvrier ou employé, série parisienne (indice des 265 postes), hors tabac")).append($('<option>').val("1763852").text("ensemble des ménages, France entière (indice des 265 postes), hors tabac"));
							} else {
								selectIndice.append($('<option>').val("1763415").text("ménages urbains dont le chef est ouvrier ou employé, hors tabac (métropole et DOM)")).append($('<option>').val("1763852").text("ensemble des ménages, hors tabac (métropole et DOM)"));
							}
						} else {
							selectIndice.append($('<option>').val("1763852").text("ensemble des ménages, hors tabac (métropole et DOM)")).append($('<option>').val("1763415").text("ménages urbains dont le chef est ouvrier ou employé, hors tabac (métropole et DOM)"));
						}
						selectIndice.selectric('refresh');
					});
					dateJugement.change();
				}

				$(".formulaire-bas-de-page").html("");
			};
		}(jQuery);
		WEB4G.CONTROLLER.PresseDetController = function (params) {

			params = $.extend({
				title: document.title,
				pathname: window.location.origin + window.location.pathname,
				isNavigation: true
			}, params);

			CommonControllerFactory.prepareController(this);
			CommonControllerFactory.prepareFacetController(this);
			var ctx = this;

			this.sortField = { field: "dateDiffusion", order: "desc" };
			this.$documents = $("#documents");
			this.$numFound = $("#nombre-resultats");
			this.$navUp = $("#navigateur-up");
			this.$navDown = $("#navigateur-down");
			this.$mesCriteres = $("#mes-criteres");
			this.search;
			this.navigateurViewUp;
			this.navigateurViewDown;
			this.regionsView;
			this.uriManager = new UriManager(params.pathname, params.title);
			this.filters = new Filters();
			this.mesCriteres;
			this.facetteRegion = $.urlParam("facetteReg");

			this.start = function () {
				ctx.dynamicStart();
				$("#wait").attr("class", "wait-on");
				$.when($.getJSON(contextPath + "/" + langue + "/presse/ajax/regions"), $.getJSON(contextPath + "/" + langue + "/solr/rubriques")).done(function (regions, rubriques) {
					ctx.launch(regions[0], rubriques[0]);
				}).fail(function () {
					console.log('error', arguments);
				});
			};

			this.launch = function (jsonRegions, jsonRubriques) {

				var sortAction = function sortAction(value) {
					ctx.sortField = { field: "dateDiffusion", order: value };
					ctx.post();
				};
				var sortOptions = [{ value: "asc", libelle: 'Trier par date croissante', action: sortAction, i18n: "echos.infos.trier-date-croissante" }, { value: "desc", libelle: 'Trier par date décroissante', action: sortAction, i18n: "echos.infos.trier-date-decroissante" }];

				this.search = new Search(contextPath + "/" + langue + "/solr/consultation");

				this.search.post = function (callback) {
					var filters = this.getFilters();
					filters.push({ field: 'typeProduit', values: ['communiquesDePresse'] });

					/*var familleIdParams = $.urlParam("familleId");
     if (familleIdParams != null) {				//
     	var split = familleIdParams.split(URL_PARAMS.separator);
     	var familleIds = split.length > 1 ? split : [this.familleIdParams];
     }
     
     filters.push({ field : 'familleId', values : familleIds });*/

					var params = { // objet js au format de l'objet java
						q: this.q,
						defType: this.defType,
						start: this.start,
						sortFields: this.sortFields,
						filters: filters,
						rows: this.rows,
						facetsField: [{ field: 'codeGeo', tag: 'tagCodeGeo' }],
						facetsQuery: new Array()
					};

					$(this.facetsQuery).each(function () {
						params.facetsQuery[params.facetsQuery.length] = { query: this };
					});

					$.ajax({
						url: encodeURI(this.url),
						type: "POST",
						data: JSON.stringify(params),
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: callback,
						error: function error(data) {
							console.log("error");
							// TODO mieux que ça !
						}
					});
				};

				this.search.getController = function () {
					return ctx;
				};
				this.navigateurViewUp = new NavigateurView({ $target: this.$navUp, sortOptions: sortOptions });
				this.navigateurViewUp.getController = function () {
					return ctx;
				};
				this.navigateurViewUp.$echoTri.show();
				this.navigateurViewDown = new NavigateurView({ $target: this.$navDown, sortOptions: sortOptions });
				this.navigateurViewDown.getController = function () {
					return ctx;
				};
				this.navigateurViewDown.$echoTri.show();
				if (!this.facetteRegion || this.facetteRegion.toLowerCase() !== 'false') {
					this.regionsView = new CollectionFacet({
						$containerFacetteCollection: $("#regions-liste-content"),
						$searchBar: $("#regions-filtre"),
						$choix: $("#regions-choix"),
						$facetteListe: $("#regions-liste"),
						facetteId: FACETTE.facetteRegions.id,
						beanDefinition: { id: "key", title: "value" }
					});
					this.regionsView.initialise(jsonRegions, { id: "key", title: "value" });
					this.regionsView.addObserver(this);
				}
				this.searchbarView = new SearchbarView($("#searchbar-header"), this.uriManager);
				this.numfound = new NumFoundView(this.$numFound, $(".sticky-left").find(".sticky-text"));
				this.documentsView = new DocumentsView(this.$documents);

				this.searchbarView.addObserver(this.navigateurViewUp);
				this.searchbarView.addObserver(this.navigateurViewDown);
				this.searchbarView.addObserver(this);
				this.searchbarView.isNavigation = this.isNavigation;
				this.mesCriteres = new MesCriteres(this.$mesCriteres);

				Responsive.ResponsiveManager.addObserver(this);

				this.uriManager.manage(URL_PARAMS.q, this.search, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewUp, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this.navigateurViewDown, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.q, this, URL_PARAMS.q);
				this.uriManager.manage(URL_PARAMS.rows, this.search, URL_PARAMS.rows);
				this.uriManager.manage(URL_PARAMS.start, this.search, URL_PARAMS.start, 0);
				this.uriManager.manage(URL_PARAMS.familleId, this.filters, URL_PARAMS.familleId);
				if (!this.facetteRegion || this.facetteRegion.toLowerCase() !== 'false') {
					this.uriManager.manage(FACETTE.facetteRegions.id, this.regionsView, URL_PARAMS.facetteRegions);
				}
				this.uriManager.reload();

				if (this.facetteRegion && this.facetteRegion.toLowerCase() === 'false') {
					$("#facettes").hide();
					$("#echos").addClass("noFacets");
				}
				this.post();
				this.initReset();
				Responsive.ResponsiveManager.reset();
			};

			this.post = function () {
				$("#wait").attr("class", "wait-on");
				this.search.sortFields = [this.sortField];
				this.uriManager.refreshUri();
				this.search.post(function (json) {
					ctx.search.numFounds = json.numFounds;
					ctx.callback(json);
				});
			};

			this.reset = function () {
				this.search.start = 0;
				if (!this.facetteRegion || this.facetteRegion.toLowerCase() !== 'false') {
					this.regionsView.reset();
				}
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			this.callback = function (json) {
				$("#wait").attr("class", "wait-off");
				this.mesCriteres.cleanAll();
				this.numfound.render(json.numFounds, SOLR_PARAMS.defaultQuery);
				this.navigateurViewUp.render(json.start, this.search.rows, json.numFounds, this.sortField.order);
				this.navigateurViewDown.render(json.start, this.search.rows, json.numFounds, this.sortField.order);
				this.documentsView.render(json.documents, this.uriManager.getBookmarkParam(URL_PARAMS.q));

				// gestion des facets.
				$(json.facetsField).each(function () {
					if (this.name == "codeGeo" && (!ctx.facetteRegion || ctx.facetteRegion.toLowerCase() !== 'false')) {
						ctx.regionsView.render(this);
					}
				});
			};

			this.initReset = function () {

				$("#bouton-raz-regions").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					if (!this.facetteRegion || this.facetteRegion.toLowerCase() !== 'false') {
						ctx.regionsView.reset();
					}
					ctx.post();
				});

				$("#bouton-raz-criteres").click(function (e) {
					e.preventDefault();
					e.stopImmediatePropagation();
					ctx.removeAllValues();
					ctx.reset();
					ctx.post();
				});
			};

			this.getFiltres = function () {
				return this.filters;
			};

			this.getFacetFilters = function (facetName) {
				return this.filters.getFiltersValues(facetName);
			};

			this.notify = function (message, data) {
				if (message == "rechercher") {
					this.redirection();
				} else if (message == MSG_FACETTE.post) {
					this.post();
				} else if (message == MSG_FACETTE.addFilter) {
					this.addFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.removeFilter) {
					this.removeFilterValue(data.facette, data.value, data.updateUrl);
				} else if (message == MSG_FACETTE.cleanFilter) {
					this.removeValues(data.facette, data.updateUrl);
				} else if (message == MSG_FACETTE.addCritere) {
					this.addCritere(data);
				} else if (message == MSG_FACETTE.addFacetQuery) {
					this.addFacetQuery(data.query);
				} else if (message == MSG_FACETTE.removeFacetQuery) {
					this.removeFacetQuery(data.query);
				} else if (message == MSG_FACETTE.refreshUrlParam) {
					this.setUrlValue(data.key, data.value);
				}
			};

			/**
    * Ajoute une facette de type query à la requête.
    */
			this.addFacetQuery = function (query) {
				if ($.inArray(query, this.search.facetsQuery) == -1) {
					this.search.facetsQuery[this.search.facetsQuery.length] = query;
				}
			};

			/**
    * Retire une facette de type query de la requête.
    */
			this.removeFacetQuery = function (query) {
				var index = $.inArray(query, this.search.facetsQuery);
				if (index != -1) {
					this.search.facetsQuery.splice(index, 1);
				}
			};

			this.removeAllFacetQuery = function (query) {
				this.search.facetsQuery = [];
			};

			/**
    * Nettoie l'ensemble des valeurs de tout les filtres.
    */
			this.removeAllValues = function () {
				this.search.start = 0;
				this.filters.removeAllValues();
				this.uriManager.setValue(URL_PARAMS.start, 0);
			};

			/**
    * Permet d'affecter un ensemble de valeur à un élément de l'url.
    */
			this.setUrlValue = function (key, value) {
				if ($.isArray(value)) {
					this.uriManager.setValue(key, value);
				} else {
					this.uriManager.setValue(key, [value]);
				}
				//		this.uriManager.refreshUri(); // faut pas sinon on perds les paramètres 
			};

			this.dynamicStart = function () {

				var $demande = $("#formulaire-1");
				var $context = $(".formulaire.actif");

				$context.hide();

				$("#contenu-presse").detach().appendTo($(".contenu"));

				if ($demande.length > 0 && $context.length > 0) {
					$demande.detach().appendTo($context);
					$demande.removeClass("formulaire-bas-de-page");
				}

				$(".formulaire-bas-de-page").html("");
			};
		};
		var SecuredBeanFactory = function SecuredBeanFactory() {};

		SecuredBeanFactory.securedBean = function (bean) {
			var $verificationCheckbox = $('#verification-checkbox');
			if ($verificationCheckbox.length <= 0) {
				console.error("Un élément dont l'identifiant est 'verification-checkbox' doit être présent dans la page.\nAjouter une balise <insee:secured /> dans la JSP.");
			}
			bean.checked = $verificationCheckbox.is(':checked');
			bean.ajax = true;
			return bean;
		};
		WEB4G.CONTROLLER.VersionController = function () {

			CommonControllerFactory.prepareControllerStandard(this);
			this.initController();

			var instance = this;

			this.start = function () {
				var $formulaire = $('#formulaire-version');
				$formulaire.detach().appendTo($('.formulaire.actif'));
				$formulaire.load(contextPath + '/version');
			};
		};
		/* eslint-disable no-console */
		window.Web4gCharts = {}; //on le met en objet global
		Web4gCharts.scriptLoadMap = {};
		Web4gCharts.maps = {};

		Web4gCharts.test = function () {
			console.log("Web4gCharts.test()");
		};
		Web4gCharts.addScript = function (src) {
			console.log('script ' + src + ' added');
			Web4gCharts.scriptLoadMap[src] = false;
		};
		Web4gCharts.isScriptAdded = function (src) {
			return src in Web4gCharts.scriptLoadMap;
		};
		Web4gCharts.markScriptFullyLoaded = function (src) {
			console.log('script ' + src + ' fully loaded');
			Web4gCharts.scriptLoadMap[src] = true;
		};
		Web4gCharts.addMap = function (src, json) {
			console.log('maps ' + src + ' fully loaded json');
			Web4gCharts.maps[src] = json;
		};
		Web4gCharts.checkScriptFullyLoaded = function (src) {
			if (src in Web4gCharts.scriptLoadMap && Web4gCharts.scriptLoadMap[src]) {
				console.log('script ' + src + ' fully loaded, we can go on');
				return Promise.resolve();
			} else {
				console.log('script ' + src + ' added but still not fully loaded');
				return setTimeout(function () {
					return Web4gCharts.checkScriptFullyLoaded(src);
				}, 200);
			}
		};
		Web4gCharts.loadScript = function (url) {
			if (url === '') {
				return Promise.resolve();
			}
			if (Web4gCharts.isScriptAdded(url)) {
				return Web4gCharts.checkScriptFullyLoaded(url);
			}
			Web4gCharts.addScript(url);
			return new Promise(function (resolve, reject) {
				var script = document.createElement('script');
				script.onload = function () {
					Web4gCharts.markScriptFullyLoaded(url);return resolve();
				};
				script.onerror = reject;
				script.type = 'application/javascript';
				script.defer = true;
				script.src = url;
				document.head.appendChild(script);
			});
		};

		Web4gCharts.checkResponse = function (response) {
			if (!response.ok) {
				throw new Error('HTTP error! status: ' + response.status);
			}
			return response;
		};

		Web4gCharts.getDocument = function (data) {
			var parser = new DOMParser();
			return parser.parseFromString(data, 'application/xml');
		};

		Web4gCharts.getUrlFichierJs = function (fichierJsName) {
			var results = new RegExp(/\/.*?\/(statistiques|information)\/(\d+)\/?.*/gm).exec(window.location.pathname);
			if (fichierJsName !== null && fichierJsName !== '' && results !== null) {
				var idProduit = results[2];
				return encodeURI(window.location.pathname.replace(idProduit, 'script/' + idProduit + '/' + fichierJsName));
			}
			return Promise.resolve();
		};

		// les modules ça marche pas, y' a toujours une erreur quelle que soit la manière de charger.
		Web4gCharts.loadHighchart = function () {
			//highcharts + module map src return Promise.all([Web4gCharts.loadScript('/static/js/highcharts/highcharts.src.js'), Web4gCharts.loadScript('/static/js/highcharts/modules/map.src.js'), Web4gCharts.loadScript('/static/js/highcharts/modules/stock.src.js')]);
			//highcharts + module map min return Promise.all([Web4gCharts.loadScript('/static/js/highcharts/highcharts.js'), Web4gCharts.loadScript('/static/js/highcharts/modules/map.js'), Web4gCharts.loadScript('/static/js/highcharts/modules/stock.js')]);
			//highcharts + module map cdn return Promise.all([Web4gCharts.loadScript('https://code.highcharts.com/highcharts.js'), Web4gCharts.loadScript('https://code.highcharts.com/maps/modules/map.js')]);
			//highmaps min return Promise.all([Web4gCharts.loadScript('/static/js/highcharts/highmaps.js'), Web4gCharts.loadScript('/static/js/web4gcharts/proj4.js')]);
			//highmaps src
			return Promise.all([Web4gCharts.loadScript('/static/js/highcharts/highmaps.src.js'), Web4gCharts.loadScript('/static/js/web4gcharts/proj4.js')]);
		};

		// Changes XML to JSON
		Web4gCharts.xmlToJson = function (xml) {
			var obj = {}; // Create the return object
			if (xml.nodeType == 1) {
				// element => do attributes
				Array.from(xml.attributes).forEach(function (attribute) {
					return obj[attribute.nodeName] = attribute.nodeValue;
				});
			} else if (xml.nodeType == 3) {
				// text
				obj = xml.nodeValue;
			}
			// do children
			Array.from(xml.childNodes).forEach(function (child) {
				return Web4gCharts.xmlToJsonNode(child, obj);
			});
			return obj;
		};
		Web4gCharts.xmlToJsonNode = function (item, obj) {
			// do children
			var nodeName = item.nodeName;
			if (typeof obj[nodeName] == "undefined") {
				obj[nodeName] = Web4gCharts.xmlToJson(item);
			} else {
				if (typeof obj[nodeName].push == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(Web4gCharts.xmlToJson(item));
			}
		};
		Web4gCharts.addParams = function (obj, paramsExternes) {
			console.log("avant ", obj, paramsExternes, obj.params);
			if (obj.params && obj.params.param && obj.params.param.length > 0) {
				Array.from(obj.params.param).forEach(function (param) {
					return paramsExternes[param.name] = param.value;
				});
			}
			obj.params = paramsExternes;
			return obj;
		};
		// les parametres mis dans l'url surcharge ceux du xml. Et les params passé en javascript surchargent tous

		Web4gCharts.log = function (obj) {
			console.log("truc trouvé", { obj: obj });return obj;
		};

		Web4gCharts.getCarte = function (idGraphique, obj) {
			var carteParam = obj.params.carte;
			if (carteParam) {
				console.log("carteParam carte trouvé, mais on va charger /fond-carte/epci2019_4326.json", { carteParam: carteParam });
				carteParam = '/fond-carte/epci2019_4326.json'; //TODO mettre le bon truc
				if (Web4gCharts.isScriptAdded(carteParam)) {
					return Web4gCharts.checkScriptFullyLoaded(carteParam).then(function () {
						return Web4gCharts.maps[carteParam];
					});
				}
				Web4gCharts.addScript(carteParam);
				return fetch(carteParam).then(Web4gCharts.checkResponse).then(function (response) {
					return response.json();
				}).then(function (json) {
					return Web4gCharts.addMap(carteParam, json);
				}).then(function () {
					return Web4gCharts.markScriptFullyLoaded(carteParam);
				}).then(function () {
					return Web4gCharts.maps[carteParam];
				}).catch(function (error) {
					return Web4gCharts.gererErreur(idGraphique, error, ' lors de la récupération de la carte');
				});
			} else {
				console.log('carte ' + idGraphique + ' PAS trouv\xE9');
				return Promise.resolve();
			}
		};

		Web4gCharts.gererErreur = function (idGraphique, error, texte) {
			console.error('erreur sur le graph ' + idGraphique + ' ' + texte, error);
			document.getElementById(idGraphique).innerHTML = '<p class="error">une erreur est survenue lors du chargement du graphique : ' + error + '</p>';
			return Promise.reject();
		};

		Web4gCharts.drawGraph = function (idGraphique, url, paramsExternes) {
			console.log('dans drawGraph log0', { idGraphique: idGraphique, url: url, paramsExternes: paramsExternes }, window);
			var highchartLoaded = Web4gCharts.loadHighchart();

			var xmlGraph = fetch(url).then(Web4gCharts.checkResponse).then(function (response) {
				return response.text();
			}).then(Web4gCharts.getDocument).catch(function (error) {
				return Web4gCharts.gererErreur(idGraphique, error, ' lors de la récupération');
			});
			var objGraph = xmlGraph.then(Web4gCharts.xmlToJson).then(function (obj) {
				return obj.xml;
			}).then(function (obj) {
				return Web4gCharts.addParams(obj, paramsExternes);
			}).then(Web4gCharts.log).catch(function (error) {
				return Web4gCharts.gererErreur(idGraphique, error, ' lors de la transformation');
			});
			var scriptLoaded = objGraph.then(function (obj) {
				return obj.params.script;
			}).then(Web4gCharts.getUrlFichierJs).then(Web4gCharts.log).then(Web4gCharts.loadScript).catch(function (error) {
				return Web4gCharts.gererErreur(idGraphique, error, ' lors de la récupération du script');
			});
			// récupérer l'éventuelle carte. ça marche mais je sais pas si besoin'
			var carteLoaded = objGraph.then(function (obj) {
				return Web4gCharts.getCarte(idGraphique, obj);
			}).catch(function (error) {
				return Web4gCharts.gererErreur(idGraphique, error, ' lors de la récupération de la carte');
			});

			return Promise.all([highchartLoaded, scriptLoaded, objGraph, carteLoaded, xmlGraph]).then(function (values) {
				console.log("Promise.all", { values: values, objGraph: objGraph }, window, document);
				if (values[2].librairie === 'highcharts_test') {
					return Web4gChartsProduit.test(idGraphique, values[2], values[3], values[4]);
				} else {
					return Web4gChartsProduit.chart(idGraphique, values[2], values[3]);
				}
			}).catch(function (error) {
				return Web4gCharts.gererErreur(idGraphique, error, 'lors de la génération');
			});
		};

		/**
  * Identifie la page et effectue un traitement spécifique si necessaire.
  * Recherche, s'il existe un controller spécifique à la page.
  * Celui-ci doit-être indiqué dans un span caché avec l'id controller-name.
  * La classe du controller est rangée dans la zone de nom WEB4G.CONTROLLER
  * Il est possible de transmettre des paramètres depuis la jsp avec des span
  * cachés de class controller-param, avec un paramètre data-name pour le nom du paramètre.
  * Quelques compléments figures dans /documentation technique/javascript_fo.odt
  */
		var Web4gPageLauncher = {

			launch: function launch() {
				var controllerName = $('#controller-name').text();
				if (!String.isBlank(controllerName)) {
					var params = {};
					$('.controller-param').each(function () {
						params[$(this).attr('data-name')] = $(this).text();
					});
					var controller = new WEB4G.CONTROLLER[controllerName](params);
					if (typeof controller.start === 'function') {
						controller.start.call(controller);
					}
				} else {
					var controller = {};
					CommonControllerFactory.prepareControllerStandard(controller);
					controller.initController();
				}
			}
		};

		// import * as CommunFacette from
		// '../jss/navigation/facette/navigation-facette';

		$(document).ready(function () {

			var options = {
				lng: langue, // intercepter la langue selon la stratégie choisie
				// (dans l'url, un param sur la page...)
				resGetPath: contextPath + "/static/locales/" + langue + "/translation.json",
				escapeInterpolation: true,
				debug: false, // en dev
				useCookie: false
			};

			/**
    * On lance le i18n sur l'élément racine pour qu'il analyse tous les
    * éléments de la page
    */
			i18n.init(options, function (t) {
				$("html").i18n();
				start.call(this);
			});

			var start = function start() {

				/** déplacé au début pour la gestion des ancre. J'espère que ça nepas le reste
      * Traitement spécifique selon la page.
      */
				Web4gPageLauncher.launch();

				var $firstTabbableElement = $(document).find(":tabbable").first();

				$(".indicateur a").focus(function () {
					$(this).parent(".indicateur").addClass("focus");
				}).blur(function () {
					$(this).parent(".indicateur").removeClass("focus");
				});

				/**
     * Gestion du lien qui permet de changer de langue
     */
				$("#lien-changement-langue, #lien-changement-langue-responsive").mouseup(function (event) {
					switch (event.which) {
						case 1:
						case 2:
						case 3:
							var url = $(this).attr("href");
							if (url.indexOf("url=") != -1) {
								var regexp = new RegExp("(url=)[^&]+");
								url = url.replace(regexp, "$1" + encodeURIComponent(window.location.pathname + window.location.search));
							} else {
								url += "?url=" + encodeURIComponent(window.location.pathname + window.location.search);
							}
							$(this).attr("href", url);
							break;
					}
				});

				/**
     * Gestion du marquage du menu actif
     */
				var libelleActif;
				switch (langue) {
					default:
					case "fr":
						libelleActif = "actif";
						break;
					case "en":
						libelleActif = "active";
						break;
				}
				var $liens = $(".menu > li > .lien");
				$liens.removeClass("menu-actif");
				var $ongletActif = $(".menu > li > .lien").eq(numOnglet);
				$ongletActif.addClass("menu-actif");
				$ongletActif.addClass("fleche");
				$ongletActif.parent().addClass("menu-actif-parent");
				var attrTitle = $ongletActif.attr("title");
				if ((typeof attrTitle === 'undefined' ? 'undefined' : _typeof(attrTitle)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && attrTitle !== false) {
					$ongletActif.attr("title", $ongletActif.attr("title") + " " + libelleActif);
				} else {
					$ongletActif.attr("title", libelleActif);
				}

				/**
     * Gestion de la lightbox d'information
     */
				var isLightbox = $("#isLightbox").text();

				if (isLightbox == "true") {
					var urlAlternative = $("#urlAlternative").text();
					var urlCible = $("#urlCible").text();
					var urlCibleAlternative = $("#urlCibleAlternative").text();

					var urls = [urlCible, urlCibleAlternative];
					var urlToDisplay = urlAlternative == "true" ? urls[Math.floor(Math.random() * 2)] : urlCible;
					$("#lightbox-visiter").attr("href", urlToDisplay);

					var tempsLatence = $("#lightbox-temps-latence").text() === "" ? 0 : $("#lightbox-temps-latence").text();

					setTimeout(function () {
						var cookieName = "lightbox_" + $("#lightbox-id").text();

						$("#lightbox-visiter").click(function () {
							$.featherlight.close();
						});

						if (!$.cookie(cookieName)) {
							$.featherlight($("#lightbox-information"), {
								closeOnClick: false,
								otherClose: "#lightbox-annuler",
								afterClose: function afterClose() {},
								beforeClose: function beforeClose() {}
							});
						}

						var dateCookie = $.datepicker.parseDate("yy-mm-dd", $("#lightbox-dateFin").text());
						dateCookie.setDate(dateCookie.getDate() + 10);

						$.cookie(cookieName, true, {
							path: "/",
							expires: dateCookie
						});
					}, tempsLatence * 1000);
				}
				/**
     * Activer les boutons pour imprimer sur la page
     */
				$(".bouton-imprimante").click(function (event) {
					print();
					event.preventDefault();
				});

				/**
     * Sticky pour retourner en haut de page
     */
				// Afficher ou masquer le bouton
				$(window).scroll(function () {
					if ($(this).scrollTop() > 50 && $(".hamburger-clicked").length == 0) {
						$(".sticky-top").fadeIn(300);
					} else {
						$(".sticky-top").fadeOut(200);
					}
				});

				// Animer le retour en haut
				$(".sticky-top").click(function (event) {
					event.preventDefault();
					$("html, body").animate({
						scrollTop: 0
					}, 300);
					$firstTabbableElement.focus();
				});
				if ($("#criteres").length > 0) {
					$(".sticky-left").click(function (e) {
						e.preventDefault();
						e.stopImmediatePropagation();
						actionAfficherResultat();
						$("html, body").animate({
							scrollTop: $("#criteres").offset().top
						}, 300);
					});
				} else {
					$(".sticky-left").remove();
				}

				/**
     * Gestion générique des onglets. DOM attendu :
     * <ul class="onglets">
     * <li class="onglet"><a href="#graphique">Graphique</a></li>
     * <li class="onglet courant"><a href="#tableau">Tableau</a></li>
     * </ul>
     * <div id="tableau" class="panneau courant"> ... </div> <div
     * id="graphique" class="panneau"> ... </div>
     */
				$(".onglets").tabpanel();
				$(".onglets .onglet a").click(function (event) {
					event.preventDefault();
					clickOnglet($(this).attr("href"), true);
				});

				$(".select-onglets select").change(function (event) {
					clickOnglet('#' + $(this).val(), true);
				});
				$('.onglet').each(function (indexOnglet, onglet) {
					$(onglet).keyup(function (e) {
						if (e.keyCode == 13) {
							$(this).find('a').click();
						}
					});
				});

				/**
     * Plus besoin, géré par la surveillance des ancres dans controller-factory
     * Gestion des ancres internes : ouverture de l'onglet vers lequel elles
     * renvoient
     */
				//    $("a.renvoi").click(function (e) {
				//    	console.log("a.renvoi", $(this))
				//      var href = $(this).attr("href");
				//      if (href.startsWith("#")) {
				//    	console.log("a.renvoi allerVersAncreByIdAncre idAncre plus besoin", href)
				//       allerVersAncreByIdAncre(href);
				//      }
				//    });

				/**
     * Gestion des ancres lorsque l'on accède à une URL avec une ancre.
     */
				// plus besoin avec la gestion par jss\navigation\controller\controller-factory.js initControllerStandard() qui utilise  surveillerAncre ()
				// allerVersAncre();


				/**
     * Gestion de l'affichage des facettes.
     */
				$(".accordion-container").accordion();

				$("#menu").menuBar();

				/**
     * Gestion de la vue facette/echos en vue mobile
     */
				$(".affiner-recherche").click(function (e) {
					actionAffinerRecherche();
				});

				$(".afficher-resultat").click(function (e) {
					actionAfficherResultat();
				});

				/** j'y met là parce que euuuh' */
				$("img[data-alt]").each(function (index, element) {
					var alt = $(this).attr("data-alt");
					if (alt != undefined) {
						$(this).attr("alt", i18n.t(alt));
					}
				});

				/**
     * Gestion des graphiques SVG, 
     * d'abord des trucs pour les libriries externes de grpahique
     * on ajoute la gestion des ancres après que tous les graphs soient chargés
     */
				var librairieGraphiqueExterne = document.getElementsByClassName("librairie");
				if (librairieGraphiqueExterne.length > 0) {
					console.log("y'a des librairieGraphiqueExterne", librairieGraphiqueExterne, document.scripts, window);
					Web4gCharts.loadHighchart().then(function (v) {
						return console.log("tout chargé de highcharts dans le truc du tout début", { v: v }, window);
					});
				}
				var nbGraphs = $(".graphique-container[data-graphique]").length;
				var nbGraphsCharges = 0;
				var addParam = function addParam(params, name, value) {
					if (value != undefined && value != '') {
						params[name] = value;
					}
					return params;
				};
				$(".graphique-container[data-graphique]").each(function (index, element) {
					var urlGraphique = element.getAttribute("data-graphique");
					var $lienGraphique = $(this).find(".graphique-lien");

					var params = {};
					var select = $(this).prevAll(".tcrd-select").find(".tcrd-indice-change");
					calculerSelectSvg(select);
					addParam(params, "labelSoutre", select.find("option:selected").text());
					addParam(params, "alt", i18n.t(element.getAttribute("data-alt")));
					addParam(params, "desc", element.getAttribute("data-desc"));
					addParam(params, "titre", element.getAttribute("title-graphique"));
					addParam(params, "unite", element.getAttribute("unite-graphique"));
					if (element.classList.contains('librairie')) {
						addParam(params, "librairie", element.getAttribute("data-librairie"));
						Web4gCharts.drawGraph(element.getAttribute("id"), urlGraphique, params).then(function () {
							nbGraphsCharges++;console.log('graph fini ' + element.getAttribute("id") + ' ' + urlGraphique + ' ' + nbGraphsCharges + '/' + nbGraphs);
						}).catch(function (error) {
							nbGraphsCharges++;console.error('erreur lors du graph ' + element.getAttribute("id") + '  ' + nbGraphsCharges + '/' + nbGraphs, error);
						});
					} else if ($lienGraphique.length > 0) {
						$lienGraphique.load(encodeURI(urlGraphique), params, function (responseText, textStatus, jqXHR) {
							return callBackGraphique(responseText, textStatus, jqXHR, $lienGraphique);
						});
					} else {
						$(this).load(encodeURI(urlGraphique), params, function () {
							return callBackGraphique();
						});
					}
					if (nbGraphsCharges === nbGraphs) {
						// marche quand même pas faudrait utiliser des promise partout
						var hash = window.location.hash;
						if (!String.isBlank(hash)) {
							allerVersAncreByIdAncre(hash);
						}
					}
				});

				var callBackGraphique = function callBackGraphique(responseText, textStatus, jqXHR, $lienGraphique) {
					if ($lienGraphique && $lienGraphique.length > 0) {
						$lienGraphique.find("svg").attr("aria-hidden", true);
					}
					afficherGraphEnfant();
					nbGraphsCharges++;
				};

				var tcrdIndiceChange = $(".tcrd-indice-change");
				if (tcrdIndiceChange.length > 0) {
					var chargerSVG = function chargerSVG(containerGraphique) {
						$("#wait").attr("class", "wait-on");
						var indice = containerGraphique.attr("tcrd-indice");
						var zoom = containerGraphique.attr("tcrd-zoom");
						var params = {
							labelSousTitre: containerGraphique.prevAll("div.tcrd-select").find(".selectricScroll .selected").text()
						};
						if (zoom != undefined && zoom != "NOREG") {
							params.zoom = zoom;
							params.couchezoom = "france_regions2016";
						}

						containerGraphique.load(indice, params, function () {
							$("#wait").attr("class", "wait-off");
						});
					};

					tcrdIndiceChange.change(function () {
						tcrdIndiceChange.val($(this).val());
						tcrdIndiceChange.selectric("refresh");

						// Verrue pour corriger les bugs d'affichage du select de selectric
						$(".mCSB_container").each(function () {
							if ($(this).children().length == 0) {
								var selectricScrollQuiEstPerdu = $(this).parent().nextAll(".selectricScroll");
								$(this).html(selectricScrollQuiEstPerdu);
							}
						});

						tcrdIndiceChange.each(function () {
							var containerGraphique = $(this).closest(".tcrd-select").nextAll(".graphique-container");
							containerGraphique.attr("tcrd-indice", $(this).attr("data-graphique") + "/" + $(this).val());
							chargerSVG(containerGraphique);
						});
					});

					tcrdIndiceChange.each(function (index, element) {
						$(this).combobox();
					});

					var tcrdZoomChange = $(".tcrd-zoom-change");

					if (tcrdZoomChange.length > 0) {
						tcrdZoomChange.change(function () {
							var containerGraphique = $(this).closest(".zoom-select").nextAll(".graphique-container");
							var containerTableau = $(this).closest("figure").prev("figure").find("table");
							containerGraphique.attr("tcrd-zoom", $(this).val());
							chargerSVG(containerGraphique);

							var lignes = containerTableau.find("tbody tr");
							lignes.removeClass("ligne-grise ligne-blanche");
							lignes.show();
							if (!isNaN($(this).val())) {
								$.ajax({
									url: encodeURI(contextPath + "/" + langue + "/graphique/tcrd/ajax/referentiel-departements/" + $(this).val()),
									type: "POST",
									contentType: "application/json; charset=utf-8",
									dataType: "json",
									success: function success(data) {
										containerTableau.find("tbody tr").hide();
										data.forEach(function (element, index, array) {
											var tr = containerTableau.find("tbody tr th[code='" + element.code + "']").parent();
											tr.show();
											if (index % 2 == 0) {
												tr.addClass("ligne-grise");
											} else {
												tr.addClass("ligne-blanche");
											}
										});
									},
									error: function error(data) {
										console.log("erreur chargement départements");
									}
								});
							}
						});

						var remplirRegions = function remplirRegions(select, regions) {
							select.each(function (index, element) {
								var $select = $(this);
								regions.forEach(function (element, index, array) {
									$select.append("<option value='" + element.code + "'>" + element.libelle + "</option>");
								});
								$(this).combobox();
							});
						};

						$.ajax({
							url: encodeURI(contextPath + "/" + langue + "/graphique/tcrd/ajax/referentiel-regions"),
							type: "POST",
							contentType: "application/json; charset=utf-8",
							dataType: "json",
							success: function success(data) {
								remplirRegions(tcrdZoomChange, data);
							},
							error: function error(data) {
								console.log("erreur chargement régions");
							}
						});
					}
				}

				/*
     * Plier déplier les sommaires du dossier complet
     */
				$(".deroulement-li-niveau-2").click(function (event) {
					$(this).toggleClass("expanded collapsed");
					$(this).parent().nextUntil(":not(.li-niveau2)").slideToggle("fast");
				});

				Tools.plierDeplierSommaires();

				if ($("#isSommaireSeriePhare") != undefined) {
					var isSommaireSeriePhare = $.trim($("#isSommaireSeriePhare").text()) == "true";
					if (isSommaireSeriePhare) {
						Tools.plierDeuxiemeNiveauSommaire();
					}
				}

				var idProduit = $(".sommaire-container").attr("data-produit");
				var $feuille = null;
				$(".sommaire-container").find(".lien-produit").each(function () {
					if ($(this).attr("data-feuille") == idProduit && $(this).attr("data-feuille") != undefined) {
						$feuille = $(this);
						$feuille.addClass("feuille-courante");
						$feuille.attr("title", $feuille.text() + " page active");
					}
				});

				if ($feuille != null) {
					$(".sommaire-container").find(".titre-entree").each(function () {
						var instance = $(this);
						if (instance.hasClass("collapsed")) {
							instance.next().hide();
						} else {
							instance.addClass("expanded");
							instance.next().show();
						}
						var matches = $(this).next("ul").find(".lien-produit[data-feuille='" + idProduit + "']");
						if (matches.length > 0) {
							$(this).removeClass("collapsed");
							$(this).addClass("expanded");
							$(this).next().show();
						}
					});
				}

				/**
     * Bouton retour à gauche du fil d'Ariane quand on arrive depuis une
     * page de navigation multicritères ou de moteur de recherche
     */
				if (afficherBoutonRetour()) {
					var $spanRetour = $("<span>", { class: "retour-fil-ariane" }).append($("<span>", { class: "icon-flecheArr" }), $("<a>", {
						"data-i18n": "breadcrum.retour",
						class: "lien-retour",
						href: "#"
					}).text("Retour"), $("<span>", { class: "barre-verticale" }).text("|"));
					$spanRetour.i18n();
					$spanRetour.click(function (event) {
						window.history.back();
						event.preventDefault();
					});
					$(".fil-ariane").before($spanRetour);
				}

				Tools.ligneCliquable();

				// Gestion responsive en js.
				Responsive.ResponsiveManager.start();

				// Tableaux responsives
				$(".tableau-produit").each(function () {
					new ResponsiveTableEx($(this));
				});

				// Indicateurs de la page d'accueil
				Responsive.ResponsiveManager.addObserver(new SwiperContainerIndicateurs(".swiper-container-indicateurs"));

				// Graphiques de la page d'accueil
				Responsive.ResponsiveManager.addObserver(new SwiperContainerGraphiques(".swiper-container-graphiques"));

				// Bandeau de communication de la page d'accueil
				Responsive.ResponsiveManager.addObserver(new SwiperContainerBandeauCommunication(".swiper-container-bandeau-communication"));

				// pour permettre d'annuler le swipping quand il n'y a qu'un seul élément dans le bandeau
				if ($(".bandeau-com.swiper-slide").length == 1) {
					$(".swiper-wrapper").addClass("swipping-off");
					$(".swiper-pagination").addClass("swipping-off");
					$(".fleche-bandeau").addClass("swipping-off");
				}

				// Menu navigation smartphone.
				Responsive.ResponsiveManager.addObserver({
					responsive: function responsive(format, width) {
						if (format == Responsive.smartphone) {
							mettreAjourPage();
						} else {
							$(".contenu .facettes .titre-recherche, .contenu .facettes .facette").show();
							$(".contenu .facettes .criteres").show();
							$(".accordion-container").show();
							$("#echos").show();
						}
					}
				});

				/**
     * Gestion du sticky gauche.
     */
				var $sticky = $(".sticky-left");
				Responsive.ResponsiveManager.addObserver({
					responsive: function ($sticky) {
						return function (format, width) {
							var onEchos = $("#echos").is(":visible");
							if (format == Responsive.smartphone) {
								if (!onEchos) $sticky.show();else $sticky.hide();
							} else {
								$sticky.hide();
							}
						};
					}($sticky)
				});

				/**
     * ??? sommaire sur smartphone.
     */
				Responsive.ResponsiveManager.addObserver({
					responsive: function responsive(format, width) {
						if (format == Responsive.smartphone || format == Responsive.tablette) {
							resetSommaireButtons();
							if ($("#consulter-sommaire .fermeture:visible").length > 0) {
								vueContenuSeul();
							}
							$(".ouverture-contenu").click(function (event) {
								vueContenuSeul();
							});
							$(".ouverture-sommaire").click(function (event) {
								vueSommaireSeul();
							});
						} else {
							resetSommaireButtons();
							$(".fermeture-gauche").unbind("click");
							$(".fermeture-gauche").click(function (event) {
								vueContenuSeul();
							});
							$(".fermeture-droite").click(function (event) {
								vueSommaireSeul();
							});
							$(".ouverture-contenu").click(function (event) {
								vueDouble();
							});
							$(".ouverture-sommaire").click(function (event) {
								vueDouble();
							});
						}
					}
				});

				/*
     * Infobulles rmes et ad hoc.
     */
				$(".rmes-definition").each(function () {
					var reference = $($(this).attr("href"));
					if (reference.length === 0) {
						$(this).rmesTooltip();
					} else {
						$(this).adhocTooltip();
					}
				});
				$(".adhoc-definition").each(function () {
					$(this).adhocTooltip();
				});
				$(".infobulles").hide();
				$(".infobulle").each(function () {
					$(this).infobulleTooltip();
				});

				/**
     * Les facettes sont pliées sur smartphone.
     */
				Responsive.ResponsiveManager.addObserver({
					responsive: function responsive(format, width) {
						if (format == Responsive.smartphone) {
							replierFacettes();
						} else {
							var idFacette = parseInt($.urlParam(URL_PARAMS.idFacetteDepliee));
							if (!isNaN(idFacette)) {
								replierFacettes();
								var $facettes = $(".accordion-header");
								if (idFacette > 0 && idFacette <= $facettes.size()) {
									$facettes.get(idFacette - 1).click();
								}
							}
						}
					}
				});

				/**
     * Création du menu.
     */
				Web4gMenu.start();

				/**
     * a été déplacé au début pour la gestion des ancres
     * Traitement spécifique selon la page. => remonté au début
     */
				//    console.log("application.js Web4gPageLauncher.launch")
				//    Web4gPageLauncher.launch();

				/**
     * réinit pour contrôle initial de la largeur de l'écran.
     */
				Responsive.ResponsiveManager.reset();

				/**
     * ajout du toggle pour les images thumbnails des liens-transverses (pour en savoir plus), pour les publications sans sommaire
     */
				$(".thumbnail").hover(function () {
					var srcThumbnail = $(this).attr("src");
					var src = srcThumbnail.replace("thumbnail_", "");
					$(this).attr("src", src);
				}, function () {
					var srcThumbnailBig = $(this).attr("src");
					var lastSlashIndex = srcThumbnailBig.lastIndexOf("/");
					var src = srcThumbnailBig.substring(0, lastSlashIndex + 1) + "thumbnail_" + srcThumbnailBig.substring(lastSlashIndex + 1);
					$(this).attr("src", src);
				});

				/**
     * gestion du click sur les boutons radio des produits panorama
     */
				labelEnGras();

				$(".div_radio_graphique input[type=radio]").change(function () {
					var url = window.location.origin + window.location.pathname + window.location.search + '#' + $(this).attr("name") + $(this).attr("value");
					var navigationHistorique = new NavigationHistorique();
					// c'est un graphique tableau : on modifie l'url sans rajouter un historique
					navigationHistorique.modifierHistorique(url);
					toggleBoutonRadio($(this));
				});

				/**
    * Gestion de la pop up dans l'onglet "en six questions"
    */
				/* on déclenche des click sur l'élément sur lequel on presse enter : sur les images pour ouvrir la pop-up */
				$(".image-question").keypress(function (e) {
					if (e.which == 13) {
						$(this).click();
					}
				});
				$(".image-question").click(function () {
					var questionId = $(this).attr("id").replace("image-", "");
					var divReponseId = "reponse-" + questionId;
					var $elemDetached = null;
					var $elemDetachedParent = $("#en-six-questions-content").parent().closest("div");

					$.featherlight($("#" + divReponseId), {
						variant: "featherlight-questions contenu",
						closeOnClick: "background", /* Close lightbox on click ('background', 'anywhere', or false) */
						closeOnEsc: true, /* Close lightbox when pressing esc */
						closeIcon: "&#10005;", /* Event that triggers the lightbox */
						closeTrigger: 'click',
						afterOpen: function afterOpen(event) {
							$elemDetached = $("#en-six-questions-content").detach();
							$('.featherlight-content').find('div.featherlight-inner > div, span.featherlight-close').each(function (index) {
								$(this).prop('tabindex', 0);
							});
							$("#titre-reponse-" + questionId).focus();
							/* on déclenche un click sur la croix de la pop-up pour la fermer au keypress sur enter */
							$(".featherlight-close").keypress(function (e) {
								if (e.which == 13) {
									$(this).click();
								}
							});
						},
						afterClose: function afterClose(event) {
							$elemDetachedParent.append($elemDetached);
							/* On remet le focus sur l'image quand on ferme la pop-up */
							setTimeout(function () {
								$("#image-question-" + questionId).focus();
							}, 100);
						},
						beforeClose: function beforeClose() {}
					});
				});

				/**
      * Gestion de la pop up pour les images agrandissables dans les publications
      */
				$(".image-agrandissable").click(function () {
					var imageId = $(this).attr("id").replace("image-agrandissable-", "");
					var imageAgrandieId = "image-agrandie-" + imageId;

					$.featherlight($("#" + imageAgrandieId), {
						variant: "featherlight-questions contenu",
						closeOnClick: "background" /* Close lightbox on click ('background', 'anywhere', or false) */
						, closeOnEsc: true /* Close lightbox when pressing esc */
						, closeIcon: "&#10005;",
						afterClose: function afterClose() {},
						beforeClose: function beforeClose() {}
					});
				});
			};

			/* Gestion de la taille des vidéos dans les bloc-sommaire */
			var $video = $("ul.sommaire-flex.image-full-space .bloc .panneau .video-image-lien-telechargement .video-image-lien .video-image video");

			$(window).resize(function () {
				resizeVideo();
			});
			$(window).trigger('resize');

			function resizeVideo() {
				// set the video viewport to the window size
				$video.height($video.width());
			};
		});
	}, { "../jss/navigation/facette/navigation-facetteNode": 2, "i18next": 18 }], 2: [function (require, module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var FacetteNode = exports.FacetteNode = function () {
			function FacetteNode() {
				_classCallCheck(this, FacetteNode);
			}

			_createClass(FacetteNode, [{
				key: "toggleOn",
				value: function toggleOn() {}
			}, {
				key: "toggleOff",
				value: function toggleOff() {}
			}, {
				key: "isActive",
				value: function isActive() {}
			}]);

			return FacetteNode;
		}();
	}, {}], 3: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _slicedToArray = function () {
			function sliceIterator(arr, i) {
				var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
					for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
						_arr.push(_s.value);if (i && _arr.length === i) break;
					}
				} catch (err) {
					_d = true;_e = err;
				} finally {
					try {
						if (!_n && _i["return"]) _i["return"]();
					} finally {
						if (_d) throw _e;
					}
				}return _arr;
			}return function (arr, i) {
				if (Array.isArray(arr)) {
					return arr;
				} else if (Symbol.iterator in Object(arr)) {
					return sliceIterator(arr, i);
				} else {
					throw new TypeError("Invalid attempt to destructure non-iterable instance");
				}
			};
		}();

		var _utils = require('./utils');

		var utils = _interopRequireWildcard(_utils);

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		var _EventEmitter2 = require('./EventEmitter');

		var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _defaults(obj, defaults) {
			var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
				var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
					Object.defineProperty(obj, key, value);
				}
			}return obj;
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
		}

		function remove(arr, what) {
			var found = arr.indexOf(what);

			while (found !== -1) {
				arr.splice(found, 1);
				found = arr.indexOf(what);
			}
		}

		var Connector = function (_EventEmitter) {
			_inherits(Connector, _EventEmitter);

			function Connector(backend, store, services) {
				var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

				_classCallCheck(this, Connector);

				var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

				_this.backend = backend;
				_this.store = store;
				_this.services = services;
				_this.options = options;
				_this.logger = _logger2.default.create('backendConnector');

				_this.state = {};
				_this.queue = [];

				_this.backend && _this.backend.init && _this.backend.init(services, options.backend, options);
				return _this;
			}

			Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
				var _this2 = this;

				// find what needs to be loaded
				var toLoad = [],
				    pending = [],
				    toLoadLanguages = [],
				    toLoadNamespaces = [];

				languages.forEach(function (lng) {
					var hasAllNamespaces = true;

					namespaces.forEach(function (ns) {
						var name = lng + '|' + ns;

						if (_this2.store.hasResourceBundle(lng, ns)) {
							_this2.state[name] = 2; // loaded
						} else if (_this2.state[name] < 0) {
							// nothing to do for err
						} else if (_this2.state[name] === 1) {
							if (pending.indexOf(name) < 0) pending.push(name);
						} else {
							_this2.state[name] = 1; // pending

							hasAllNamespaces = false;

							if (pending.indexOf(name) < 0) pending.push(name);
							if (toLoad.indexOf(name) < 0) toLoad.push(name);
							if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
						}
					});

					if (!hasAllNamespaces) toLoadLanguages.push(lng);
				});

				if (toLoad.length || pending.length) {
					this.queue.push({
						pending: pending,
						loaded: {},
						errors: [],
						callback: callback
					});
				}

				return {
					toLoad: toLoad,
					pending: pending,
					toLoadLanguages: toLoadLanguages,
					toLoadNamespaces: toLoadNamespaces
				};
			};

			Connector.prototype.loaded = function loaded(name, err, data) {
				var _this3 = this;

				var _name$split = name.split('|'),
				    _name$split2 = _slicedToArray(_name$split, 2),
				    lng = _name$split2[0],
				    ns = _name$split2[1];

				if (err) this.emit('failedLoading', lng, ns, err);

				if (data) {
					this.store.addResourceBundle(lng, ns, data);
				}

				// set loaded
				this.state[name] = err ? -1 : 2;
				// callback if ready
				this.queue.forEach(function (q) {
					utils.pushPath(q.loaded, [lng], ns);
					remove(q.pending, name);

					if (err) q.errors.push(err);

					if (q.pending.length === 0 && !q.done) {
						_this3.emit('loaded', q.loaded);
						q.errors.length ? q.callback(q.errors) : q.callback();
						q.done = true;
					}
				});

				// remove done load requests
				this.queue = this.queue.filter(function (q) {
					return !q.done;
				});
			};

			Connector.prototype.read = function read(lng, ns, fcName, tried, wait, callback) {
				var _this4 = this;

				if (!tried) tried = 0;
				if (!wait) wait = 250;

				if (!lng.length) return callback(null, {}); // noting to load

				this.backend[fcName](lng, ns, function (err, data) {
					if (err && data /* = retryFlag */ && tried < 5) {
						setTimeout(function () {
							_this4.read.call(_this4, lng, ns, fcName, ++tried, wait * 2, callback);
						}, wait);
						return;
					}
					callback(err, data);
				});
			};

			Connector.prototype.load = function load(languages, namespaces, callback) {
				var _this5 = this;

				if (!this.backend) {
					this.logger.warn('No backend was added via i18next.use. Will not load resources.');
					return callback && callback();
				}
				var options = _extends({}, this.backend.options, this.options.backend);

				if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
				if (typeof namespaces === 'string') namespaces = [namespaces];

				var toLoad = this.queueLoad(languages, namespaces, callback);
				if (!toLoad.toLoad.length) {
					if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now
					return; // pendings will trigger callback
				}

				// load with multi-load
				if (options.allowMultiLoading && this.backend.readMulti) {
					this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, 'readMulti', null, null, function (err, data) {
						if (err) _this5.logger.warn('loading namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading failed', err);
						if (!err && data) _this5.logger.log('loaded namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading', data);

						toLoad.toLoad.forEach(function (name) {
							var _name$split3 = name.split('|'),
							    _name$split4 = _slicedToArray(_name$split3, 2),
							    l = _name$split4[0],
							    n = _name$split4[1];

							var bundle = utils.getPath(data, [l, n]);
							if (bundle) {
								_this5.loaded(name, err, bundle);
							} else {
								var _err = 'loading namespace ' + n + ' for language ' + l + ' via multiloading failed';
								_this5.loaded(name, _err);
								_this5.logger.error(_err);
							}
						});
					});
				}

				// load one by one
				else {
						(function () {
							var readOne = function readOne(name) {
								var _this6 = this;

								var _name$split5 = name.split('|'),
								    _name$split6 = _slicedToArray(_name$split5, 2),
								    lng = _name$split6[0],
								    ns = _name$split6[1];

								this.read(lng, ns, 'read', null, null, function (err, data) {
									if (err) _this6.logger.warn('loading namespace ' + ns + ' for language ' + lng + ' failed', err);
									if (!err && data) _this6.logger.log('loaded namespace ' + ns + ' for language ' + lng, data);

									_this6.loaded(name, err, data);
								});
							};

							;

							toLoad.toLoad.forEach(function (name) {
								readOne.call(_this5, name);
							});
						})();
					}
			};

			Connector.prototype.reload = function reload(languages, namespaces) {
				var _this7 = this;

				if (!this.backend) {
					this.logger.warn('No backend was added via i18next.use. Will not load resources.');
				}
				var options = _extends({}, this.backend.options, this.options.backend);

				if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
				if (typeof namespaces === 'string') namespaces = [namespaces];

				// load with multi-load
				if (options.allowMultiLoading && this.backend.readMulti) {
					this.read(languages, namespaces, 'readMulti', null, null, function (err, data) {
						if (err) _this7.logger.warn('reloading namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading failed', err);
						if (!err && data) _this7.logger.log('reloaded namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading', data);

						languages.forEach(function (l) {
							namespaces.forEach(function (n) {
								var bundle = utils.getPath(data, [l, n]);
								if (bundle) {
									_this7.loaded(l + '|' + n, err, bundle);
								} else {
									var _err2 = 'reloading namespace ' + n + ' for language ' + l + ' via multiloading failed';
									_this7.loaded(l + '|' + n, _err2);
									_this7.logger.error(_err2);
								}
							});
						});
					});
				}

				// load one by one
				else {
						(function () {
							var readOne = function readOne(name) {
								var _this8 = this;

								var _name$split7 = name.split('|'),
								    _name$split8 = _slicedToArray(_name$split7, 2),
								    lng = _name$split8[0],
								    ns = _name$split8[1];

								this.read(lng, ns, 'read', null, null, function (err, data) {
									if (err) _this8.logger.warn('reloading namespace ' + ns + ' for language ' + lng + ' failed', err);
									if (!err && data) _this8.logger.log('reloaded namespace ' + ns + ' for language ' + lng, data);

									_this8.loaded(name, err, data);
								});
							};

							;

							languages.forEach(function (l) {
								namespaces.forEach(function (n) {
									readOne.call(_this7, l + '|' + n);
								});
							});
						})();
					}
			};

			Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue) {
				if (this.backend && this.backend.create) this.backend.create(languages, namespace, key, fallbackValue);

				// write to store to avoid resending
				if (!languages || !languages[0]) return;
				this.store.addResource(languages[0], namespace, key, fallbackValue);
			};

			return Connector;
		}(_EventEmitter3.default);

		exports.default = Connector;
	}, { "./EventEmitter": 5, "./logger": 15, "./utils": 17 }], 4: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _utils = require('./utils');

		var utils = _interopRequireWildcard(_utils);

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		var _EventEmitter2 = require('./EventEmitter');

		var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _defaults(obj, defaults) {
			var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
				var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
					Object.defineProperty(obj, key, value);
				}
			}return obj;
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
		}

		var Connector = function (_EventEmitter) {
			_inherits(Connector, _EventEmitter);

			function Connector(cache, store, services) {
				var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

				_classCallCheck(this, Connector);

				var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

				_this.cache = cache;
				_this.store = store;
				_this.services = services;
				_this.options = options;
				_this.logger = _logger2.default.create('cacheConnector');

				_this.cache && _this.cache.init && _this.cache.init(services, options.cache, options);
				return _this;
			}

			Connector.prototype.load = function load(languages, namespaces, callback) {
				var _this2 = this;

				if (!this.cache) return callback && callback();
				var options = _extends({}, this.cache.options, this.options.cache);

				if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
				if (typeof namespaces === 'string') namespaces = [namespaces];

				if (options.enabled) {
					this.cache.load(languages, function (err, data) {
						if (err) _this2.logger.error('loading languages ' + languages.join(', ') + ' from cache failed', err);
						if (data) {
							for (var l in data) {
								for (var n in data[l]) {
									if (n === 'i18nStamp') continue;
									var bundle = data[l][n];
									if (bundle) _this2.store.addResourceBundle(l, n, bundle);
								}
							}
						}
						if (callback) callback();
					});
				} else {
					if (callback) callback();
				}
			};

			Connector.prototype.save = function save() {
				if (this.cache && this.options.cache && this.options.cache.enabled) this.cache.save(this.store.data);
			};

			return Connector;
		}(_EventEmitter3.default);

		exports.default = Connector;
	}, { "./EventEmitter": 5, "./logger": 15, "./utils": 17 }], 5: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var EventEmitter = function () {
			function EventEmitter() {
				_classCallCheck(this, EventEmitter);

				this.observers = {};
			}

			EventEmitter.prototype.on = function on(events, listener) {
				var _this = this;

				events.split(' ').forEach(function (event) {
					_this.observers[event] = _this.observers[event] || [];
					_this.observers[event].push(listener);
				});
			};

			EventEmitter.prototype.off = function off(event, listener) {
				var _this2 = this;

				if (!this.observers[event]) {
					return;
				}

				this.observers[event].forEach(function () {
					if (!listener) {
						delete _this2.observers[event];
					} else {
						var index = _this2.observers[event].indexOf(listener);
						if (index > -1) {
							_this2.observers[event].splice(index, 1);
						}
					}
				});
			};

			EventEmitter.prototype.emit = function emit(event) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				if (this.observers[event]) {
					var cloned = [].concat(this.observers[event]);
					cloned.forEach(function (observer) {
						observer.apply(undefined, args);
					});
				}

				if (this.observers['*']) {
					var _cloned = [].concat(this.observers['*']);
					_cloned.forEach(function (observer) {
						var _ref;

						observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
					});
				}
			};

			return EventEmitter;
		}();

		exports.default = EventEmitter;
	}, {}], 6: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _utils = require('./utils');

		var utils = _interopRequireWildcard(_utils);

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var Interpolator = function () {
			function Interpolator() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				_classCallCheck(this, Interpolator);

				this.logger = _logger2.default.create('interpolator');

				this.init(options, true);
			}

			Interpolator.prototype.init = function init() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var reset = arguments[1];

				if (reset) {
					this.options = options;
					this.format = options.interpolation && options.interpolation.format || function (value) {
						return value;
					};
					this.escape = options.interpolation && options.interpolation.escape || utils.escape;
				}
				if (!options.interpolation) options.interpolation = { escapeValue: true };

				var iOpts = options.interpolation;

				this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;

				this.prefix = iOpts.prefix ? utils.regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
				this.suffix = iOpts.suffix ? utils.regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';

				this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';

				this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
				this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

				this.nestingPrefix = iOpts.nestingPrefix ? utils.regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || utils.regexEscape('$t(');
				this.nestingSuffix = iOpts.nestingSuffix ? utils.regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || utils.regexEscape(')');

				// the regexp
				this.resetRegExp();
			};

			Interpolator.prototype.reset = function reset() {
				if (this.options) this.init(this.options);
			};

			Interpolator.prototype.resetRegExp = function resetRegExp() {
				// the regexp
				var regexpStr = this.prefix + '(.+?)' + this.suffix;
				this.regexp = new RegExp(regexpStr, 'g');

				var regexpUnescapeStr = this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
				this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

				var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
				this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
			};

			Interpolator.prototype.interpolate = function interpolate(str, data, lng) {
				var _this = this;

				var match = void 0,
				    value = void 0;

				function regexSafe(val) {
					return val.replace(/\$/g, '$$$$');
				}

				var handleFormat = function handleFormat(key) {
					if (key.indexOf(_this.formatSeparator) < 0) return utils.getPath(data, key);

					var p = key.split(_this.formatSeparator);
					var k = p.shift().trim();
					var f = p.join(_this.formatSeparator).trim();

					return _this.format(utils.getPath(data, k), f, lng);
				};

				this.resetRegExp();

				// unescape if has unescapePrefix/Suffix
				while (match = this.regexpUnescape.exec(str)) {
					var _value = handleFormat(match[1].trim());
					str = str.replace(match[0], _value);
					this.regexpUnescape.lastIndex = 0;
				}

				// regular escape on demand
				while (match = this.regexp.exec(str)) {
					value = handleFormat(match[1].trim());
					if (typeof value !== 'string') value = utils.makeString(value);
					if (!value) {
						this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
						value = '';
					}
					value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
					str = str.replace(match[0], value);
					this.regexp.lastIndex = 0;
				}
				return str;
			};

			Interpolator.prototype.nest = function nest(str, fc) {
				var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				var match = void 0,
				    value = void 0;

				var clonedOptions = _extends({}, options);
				clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

				function regexSafe(val) {
					return val.replace(/\$/g, '$$$$');
				}

				// if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"
				function handleHasOptions(key) {
					if (key.indexOf(',') < 0) return key;

					var p = key.split(',');
					key = p.shift();
					var optionsString = p.join(',');
					optionsString = this.interpolate(optionsString, clonedOptions);
					optionsString = optionsString.replace(/'/g, '"');

					try {
						clonedOptions = JSON.parse(optionsString);
					} catch (e) {
						this.logger.error('failed parsing options string in nesting for key ' + key, e);
					}

					return key;
				}

				// regular escape on demand
				while (match = this.nestingRegexp.exec(str)) {
					value = fc(handleHasOptions.call(this, match[1].trim()), clonedOptions);
					if (typeof value !== 'string') value = utils.makeString(value);
					if (!value) {
						this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
						value = '';
					}
					// Nested keys should not be escaped by default #854
					// value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
					str = str.replace(match[0], value);
					this.regexp.lastIndex = 0;
				}
				return str;
			};

			return Interpolator;
		}();

		exports.default = Interpolator;
	}, { "./logger": 15, "./utils": 17 }], 7: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		var LanguageUtil = function () {
			function LanguageUtil(options) {
				_classCallCheck(this, LanguageUtil);

				this.options = options;

				this.whitelist = this.options.whitelist || false;
				this.logger = _logger2.default.create('languageUtils');
			}

			LanguageUtil.prototype.getScriptPartFromCode = function getScriptPartFromCode(code) {
				if (!code || code.indexOf('-') < 0) return null;

				var p = code.split('-');
				if (p.length === 2) return null;
				p.pop();
				return this.formatLanguageCode(p.join('-'));
			};

			LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
				if (!code || code.indexOf('-') < 0) return code;

				var p = code.split('-');
				return this.formatLanguageCode(p[0]);
			};

			LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
				// http://www.iana.org/assignments/language-tags/language-tags.xhtml
				if (typeof code === 'string' && code.indexOf('-') > -1) {
					var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
					var p = code.split('-');

					if (this.options.lowerCaseLng) {
						p = p.map(function (part) {
							return part.toLowerCase();
						});
					} else if (p.length === 2) {
						p[0] = p[0].toLowerCase();
						p[1] = p[1].toUpperCase();

						if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
					} else if (p.length === 3) {
						p[0] = p[0].toLowerCase();

						// if lenght 2 guess it's a country
						if (p[1].length === 2) p[1] = p[1].toUpperCase();
						if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();

						if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
						if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
					}

					return p.join('-');
				} else {
					return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
				}
			};

			LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code, exactMatch) {
				if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist && !exactMatch) {
					code = this.getLanguagePartFromCode(code);
				}
				return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1 ? true : false;
			};

			LanguageUtil.prototype.getFallbackCodes = function getFallbackCodes(fallbacks, code) {
				if (!fallbacks) return [];
				if (typeof fallbacks === 'string') fallbacks = [fallbacks];
				if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;

				if (!code) return fallbacks.default || [];

				// asume we have an object defining fallbacks
				var found = fallbacks[code];
				if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
				if (!found) found = fallbacks[this.formatLanguageCode(code)];
				if (!found) found = fallbacks.default;

				return found || [];
			};

			LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
				var _this = this;

				var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);

				var codes = [];
				var addCode = function addCode(code) {
					var exactMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

					if (!code) return;
					if (_this.isWhitelisted(code, exactMatch)) {
						codes.push(code);
					} else {
						_this.logger.warn('rejecting non-whitelisted language code: ' + code);
					}
				};

				if (typeof code === 'string' && code.indexOf('-') > -1) {
					if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code), true);
					if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code), true);
					if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
				} else if (typeof code === 'string') {
					addCode(this.formatLanguageCode(code));
				}

				fallbackCodes.forEach(function (fc) {
					if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
				});

				return codes;
			};

			return LanguageUtil;
		}();

		;

		exports.default = LanguageUtil;
	}, { "./logger": 15 }], 8: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
		/* eslint-disable */
		var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

		var _rulesPluralsTypes = {
			1: function _(n) {
				return Number(n > 1);
			},
			2: function _(n) {
				return Number(n != 1);
			},
			3: function _(n) {
				return 0;
			},
			4: function _(n) {
				return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
			},
			5: function _(n) {
				return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
			},
			6: function _(n) {
				return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
			},
			7: function _(n) {
				return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
			},
			8: function _(n) {
				return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
			},
			9: function _(n) {
				return Number(n >= 2);
			},
			10: function _(n) {
				return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
			},
			11: function _(n) {
				return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
			},
			12: function _(n) {
				return Number(n % 10 != 1 || n % 100 == 11);
			},
			13: function _(n) {
				return Number(n !== 0);
			},
			14: function _(n) {
				return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
			},
			15: function _(n) {
				return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
			},
			16: function _(n) {
				return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
			},
			17: function _(n) {
				return Number(n == 1 || n % 10 == 1 ? 0 : 1);
			},
			18: function _(n) {
				return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
			},
			19: function _(n) {
				return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
			},
			20: function _(n) {
				return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
			},
			21: function _(n) {
				return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
			}
		};
		/* eslint-enable */

		function createRules() {
			var l,
			    rules = {};
			sets.forEach(function (set) {
				set.lngs.forEach(function (l) {
					return rules[l] = {
						numbers: set.nr,
						plurals: _rulesPluralsTypes[set.fc]
					};
				});
			});
			return rules;
		}

		var PluralResolver = function () {
			function PluralResolver(languageUtils) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				_classCallCheck(this, PluralResolver);

				this.languageUtils = languageUtils;
				this.options = options;

				this.logger = _logger2.default.create('pluralResolver');

				this.rules = createRules();
			}

			PluralResolver.prototype.addRule = function addRule(lng, obj) {
				this.rules[lng] = obj;
			};

			PluralResolver.prototype.getRule = function getRule(code) {
				return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
			};

			PluralResolver.prototype.needsPlural = function needsPlural(code) {
				var rule = this.getRule(code);

				return rule && rule.numbers.length <= 1 ? false : true;
			};

			PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
				var _this = this;

				var rule = this.getRule(code);

				if (rule) {
					var _ret = function () {
						if (rule.numbers.length === 1) return {
							v: ''
						}; // only singular

						var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
						var suffix = rule.numbers[idx];

						// special treatment for lngs only having singular and plural
						if (_this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
							if (suffix === 2) {
								suffix = 'plural';
							} else if (suffix === 1) {
								suffix = '';
							}
						}

						var returnSuffix = function returnSuffix() {
							return _this.options.prepend && suffix.toString() ? _this.options.prepend + suffix.toString() : suffix.toString();
						};

						// COMPATIBILITY JSON
						// v1
						if (_this.options.compatibilityJSON === 'v1') {
							if (suffix === 1) return {
								v: ''
							};
							if (typeof suffix === 'number') return {
								v: '_plural_' + suffix.toString()
							};
							return {
								v: returnSuffix()
							};
						}
						// v2
						else if (_this.options.compatibilityJSON === 'v2' || rule.numbers.length === 2 && rule.numbers[0] === 1) {
								return {
									v: returnSuffix()
								};
							}
							// v3 - gettext index
							else if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
									return {
										v: returnSuffix()
									};
								}
						return {
							v: _this.options.prepend && idx.toString() ? _this.options.prepend + idx.toString() : idx.toString()
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				} else {
					this.logger.warn('no plural rule found for: ' + code);
					return '';
				}
			};

			return PluralResolver;
		}();

		;

		exports.default = PluralResolver;
	}, { "./logger": 15 }], 9: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _EventEmitter2 = require('./EventEmitter');

		var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

		var _utils = require('./utils');

		var utils = _interopRequireWildcard(_utils);

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _defaults(obj, defaults) {
			var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
				var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
					Object.defineProperty(obj, key, value);
				}
			}return obj;
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
		}

		var ResourceStore = function (_EventEmitter) {
			_inherits(ResourceStore, _EventEmitter);

			function ResourceStore() {
				var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ns: ['translation'], defaultNS: 'translation' };

				_classCallCheck(this, ResourceStore);

				var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

				_this.data = data;
				_this.options = options;
				return _this;
			}

			ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
				if (this.options.ns.indexOf(ns) < 0) {
					this.options.ns.push(ns);
				}
			};

			ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
				var index = this.options.ns.indexOf(ns);
				if (index > -1) {
					this.options.ns.splice(index, 1);
				}
			};

			ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
				var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

				var keySeparator = options.keySeparator || this.options.keySeparator;
				if (keySeparator === undefined) keySeparator = '.';

				var path = [lng, ns];
				if (key && typeof key !== 'string') path = path.concat(key);
				if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

				if (lng.indexOf('.') > -1) {
					path = lng.split('.');
				}

				return utils.getPath(this.data, path);
			};

			ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
				var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { silent: false };

				var keySeparator = this.options.keySeparator;
				if (keySeparator === undefined) keySeparator = '.';

				var path = [lng, ns];
				if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

				if (lng.indexOf('.') > -1) {
					path = lng.split('.');
					value = ns;
					ns = path[1];
				}

				this.addNamespaces(ns);

				utils.setPath(this.data, path, value);

				if (!options.silent) this.emit('added', lng, ns, key, value);
			};

			ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
				for (var m in resources) {
					if (typeof resources[m] === 'string') this.addResource(lng, ns, m, resources[m], { silent: true });
				}
				this.emit('added', lng, ns, resources);
			};

			ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
				var path = [lng, ns];
				if (lng.indexOf('.') > -1) {
					path = lng.split('.');
					deep = resources;
					resources = ns;
					ns = path[1];
				}

				this.addNamespaces(ns);

				var pack = utils.getPath(this.data, path) || {};

				if (deep) {
					utils.deepExtend(pack, resources, overwrite);
				} else {
					pack = _extends({}, pack, resources);
				}

				utils.setPath(this.data, path, pack);

				this.emit('added', lng, ns, resources);
			};

			ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
				if (this.hasResourceBundle(lng, ns)) {
					delete this.data[lng][ns];
				}
				this.removeNamespaces(ns);

				this.emit('removed', lng, ns);
			};

			ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
				return this.getResource(lng, ns) !== undefined;
			};

			ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
				if (!ns) ns = this.options.defaultNS;

				// TODO: COMPATIBILITY remove extend in v2.1.0
				if (this.options.compatibilityAPI === 'v1') return _extends({}, this.getResource(lng, ns));

				return this.getResource(lng, ns);
			};

			ResourceStore.prototype.toJSON = function toJSON() {
				return this.data;
			};

			return ResourceStore;
		}(_EventEmitter3.default);

		exports.default = ResourceStore;
	}, { "./EventEmitter": 5, "./utils": 17 }], 10: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		var _EventEmitter2 = require('./EventEmitter');

		var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

		var _postProcessor = require('./postProcessor');

		var _postProcessor2 = _interopRequireDefault(_postProcessor);

		var _v = require('./compatibility/v1');

		var compat = _interopRequireWildcard(_v);

		var _utils = require('./utils');

		var utils = _interopRequireWildcard(_utils);

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _defaults(obj, defaults) {
			var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
				var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
					Object.defineProperty(obj, key, value);
				}
			}return obj;
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
		}

		var Translator = function (_EventEmitter) {
			_inherits(Translator, _EventEmitter);

			function Translator(services) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				_classCallCheck(this, Translator);

				var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

				utils.copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], services, _this);

				_this.options = options;
				_this.logger = _logger2.default.create('translator');
				return _this;
			}

			Translator.prototype.changeLanguage = function changeLanguage(lng) {
				if (lng) this.language = lng;
			};

			Translator.prototype.exists = function exists(key) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { interpolation: {} };

				if (this.options.compatibilityAPI === 'v1') {
					options = compat.convertTOptions(options);
				}

				return this.resolve(key, options) !== undefined;
			};

			Translator.prototype.extractFromKey = function extractFromKey(key, options) {
				var nsSeparator = options.nsSeparator || this.options.nsSeparator;
				if (nsSeparator === undefined) nsSeparator = ':';
				var keySeparator = options.keySeparator || this.options.keySeparator || '.';

				var namespaces = options.ns || this.options.defaultNS;
				if (nsSeparator && key.indexOf(nsSeparator) > -1) {
					var parts = key.split(nsSeparator);
					if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
					key = parts.join(keySeparator);
				}
				if (typeof namespaces === 'string') namespaces = [namespaces];

				return {
					key: key,
					namespaces: namespaces
				};
			};

			Translator.prototype.translate = function translate(keys) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
					options = this.options.overloadTranslationOptionHandler(arguments);
				} else if (this.options.compatibilityAPI === 'v1') {
					options = compat.convertTOptions(options);
				}

				// non valid keys handling
				if (keys === undefined || keys === null || keys === '') return '';
				if (typeof keys === 'number') keys = String(keys);
				if (typeof keys === 'string') keys = [keys];

				// separators
				var keySeparator = options.keySeparator || this.options.keySeparator || '.';

				// get namespace(s)

				var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
				    key = _extractFromKey.key,
				    namespaces = _extractFromKey.namespaces;

				var namespace = namespaces[namespaces.length - 1];

				// return key on CIMode
				var lng = options.lng || this.language;
				var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
				if (lng && lng.toLowerCase() === 'cimode') {
					if (appendNamespaceToCIMode) {
						var nsSeparator = options.nsSeparator || this.options.nsSeparator;
						return namespace + nsSeparator + key;
					}

					return key;
				}

				// resolve from store
				var res = this.resolve(keys, options);

				var resType = Object.prototype.toString.apply(res);
				var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
				var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

				// object
				if (res && typeof res !== 'string' && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
					if (!options.returnObjects && !this.options.returnObjects) {
						this.logger.warn('accessing an object - but returnObjects options is not enabled!');
						return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(key, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
					}

					// if we got a separator we loop over children - else we just return object as is
					// as having it set to false means no hierarchy so no lookup for nested values
					if (options.keySeparator || this.options.keySeparator) {
						var copy = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

						for (var m in res) {
							if (res.hasOwnProperty(m)) {
								copy[m] = this.translate('' + key + keySeparator + m, _extends({}, options, { joinArrays: false, ns: namespaces }));
							}
						}
						res = copy;
					}
				}
				// array special treatment
				else if (joinArrays && resType === '[object Array]') {
						res = res.join(joinArrays);
						if (res) res = this.extendTranslation(res, key, options);
					}
					// string, empty or null
					else {
							var usedDefault = false,
							    usedKey = false;

							// fallback value
							if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
								usedDefault = true;
								res = options.defaultValue;
							}
							if (!this.isValidLookup(res)) {
								usedKey = true;
								res = key;
							}

							// save missing
							if (usedKey || usedDefault) {
								this.logger.log('missingKey', lng, namespace, key, res);

								var lngs = [];
								var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
								if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
									for (var i = 0; i < fallbackLngs.length; i++) {
										lngs.push(fallbackLngs[i]);
									}
								} else if (this.options.saveMissingTo === 'all') {
									lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
								} else {
									//(this.options.saveMissingTo === 'current' || (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng[0] === false) ) {
									lngs.push(options.lng || this.language);
								}

								if (this.options.saveMissing) {
									if (this.options.missingKeyHandler) {
										this.options.missingKeyHandler(lngs, namespace, key, res);
									} else if (this.backendConnector && this.backendConnector.saveMissing) {
										this.backendConnector.saveMissing(lngs, namespace, key, res);
									}
								}

								this.emit('missingKey', lngs, namespace, key, res);
							}

							// extend
							res = this.extendTranslation(res, key, options);

							// append namespace if still key
							if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ':' + key;

							// parseMissingKeyHandler
							if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
						}

				// return
				return res;
			};

			Translator.prototype.extendTranslation = function extendTranslation(res, key, options) {
				var _this2 = this;

				if (options.interpolation) this.interpolator.init(_extends({}, options, { interpolation: _extends({}, this.options.interpolation, options.interpolation) }));

				// interpolate
				var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
				if (this.options.interpolation.defaultVariables) data = _extends({}, this.options.interpolation.defaultVariables, data);
				res = this.interpolator.interpolate(res, data, this.language);

				// nesting
				res = this.interpolator.nest(res, function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					return _this2.translate.apply(_this2, args);
				}, options);

				if (options.interpolation) this.interpolator.reset();

				// post process
				var postProcess = options.postProcess || this.options.postProcess;
				var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

				if (res !== undefined && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
					res = _postProcessor2.default.handle(postProcessorNames, res, key, options, this);
				}

				return res;
			};

			Translator.prototype.resolve = function resolve(keys) {
				var _this3 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var found = void 0;

				if (typeof keys === 'string') keys = [keys];

				// forEach possible key
				keys.forEach(function (k) {
					if (_this3.isValidLookup(found)) return;

					var _extractFromKey2 = _this3.extractFromKey(k, options),
					    key = _extractFromKey2.key,
					    namespaces = _extractFromKey2.namespaces;

					if (_this3.options.fallbackNS) namespaces = namespaces.concat(_this3.options.fallbackNS);

					var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
					var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

					var codes = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);

					namespaces.forEach(function (ns) {
						if (_this3.isValidLookup(found)) return;

						codes.forEach(function (code) {
							if (_this3.isValidLookup(found)) return;

							var finalKey = key;
							var finalKeys = [finalKey];

							var pluralSuffix = void 0;
							if (needsPluralHandling) pluralSuffix = _this3.pluralResolver.getSuffix(code, options.count);

							// fallback for plural if context not found
							if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);

							// get key for context if needed
							if (needsContextHandling) finalKeys.push(finalKey += '' + _this3.options.contextSeparator + options.context);

							// get key for plural if needed
							if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);

							// iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
							var possibleKey = void 0;
							while (possibleKey = finalKeys.pop()) {
								if (_this3.isValidLookup(found)) continue;
								found = _this3.getResource(code, ns, possibleKey, options);
							}
						});
					});
				});

				return found;
			};

			Translator.prototype.isValidLookup = function isValidLookup(res) {
				return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
			};

			Translator.prototype.getResource = function getResource(code, ns, key) {
				var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

				return this.resourceStore.getResource(code, ns, key, options);
			};

			return Translator;
		}(_EventEmitter3.default);

		exports.default = Translator;
	}, { "./EventEmitter": 5, "./compatibility/v1": 11, "./logger": 15, "./postProcessor": 16, "./utils": 17 }], 11: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.convertAPIOptions = convertAPIOptions;
		exports.convertJSONOptions = convertJSONOptions;
		exports.convertTOptions = convertTOptions;
		exports.appendBackwardsAPI = appendBackwardsAPI;

		var _logger = require('../logger');

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function convertInterpolation(options) {

			options.interpolation = {
				unescapeSuffix: 'HTML'
			};

			options.interpolation.prefix = options.interpolationPrefix || '__';
			options.interpolation.suffix = options.interpolationSuffix || '__';
			options.interpolation.escapeValue = options.escapeInterpolation || false;

			options.interpolation.nestingPrefix = options.reusePrefix || '$t(';
			options.interpolation.nestingSuffix = options.reuseSuffix || ')';

			return options;
		}

		function convertAPIOptions(options) {
			if (options.resStore) options.resources = options.resStore;

			if (options.ns && options.ns.defaultNs) {
				options.defaultNS = options.ns.defaultNs;
				options.ns = options.ns.namespaces;
			} else {
				options.defaultNS = options.ns || 'translation';
			}

			if (options.fallbackToDefaultNS && options.defaultNS) options.fallbackNS = options.defaultNS;

			options.saveMissing = options.sendMissing;
			options.saveMissingTo = options.sendMissingTo || 'current';
			options.returnNull = options.fallbackOnNull ? false : true;
			options.returnEmptyString = options.fallbackOnEmpty ? false : true;
			options.returnObjects = options.returnObjectTrees;
			options.joinArrays = '\n';

			options.returnedObjectHandler = options.objectTreeKeyHandler;
			options.parseMissingKeyHandler = options.parseMissingKey;
			options.appendNamespaceToMissingKey = true;

			options.nsSeparator = options.nsseparator || ':';
			options.keySeparator = options.keyseparator || '.';

			if (options.shortcutFunction === 'sprintf') {
				options.overloadTranslationOptionHandler = function (args) {
					var values = [];

					for (var i = 1; i < args.length; i++) {
						values.push(args[i]);
					}

					return {
						postProcess: 'sprintf',
						sprintf: values
					};
				};
			}

			options.whitelist = options.lngWhitelist;
			options.preload = options.preload;
			if (options.load === 'current') options.load = 'currentOnly';
			if (options.load === 'unspecific') options.load = 'languageOnly';

			// backend
			options.backend = options.backend || {};
			options.backend.loadPath = options.resGetPath || 'locales/__lng__/__ns__.json';
			options.backend.addPath = options.resPostPath || 'locales/add/__lng__/__ns__';
			options.backend.allowMultiLoading = options.dynamicLoad;

			// cache
			options.cache = options.cache || {};
			options.cache.prefix = 'res_';
			options.cache.expirationTime = 7 * 24 * 60 * 60 * 1000;
			options.cache.enabled = options.useLocalStorage ? true : false;

			options = convertInterpolation(options);
			if (options.defaultVariables) options.interpolation.defaultVariables = options.defaultVariables;

			// TODO: deprecation
			// if (options.getAsync === false) throw deprecation error

			return options;
		}

		function convertJSONOptions(options) {
			options = convertInterpolation(options);
			options.joinArrays = '\n';

			return options;
		}

		function convertTOptions(options) {
			if (options.interpolationPrefix || options.interpolationSuffix || options.escapeInterpolation) {
				options = convertInterpolation(options);
			}

			options.nsSeparator = options.nsseparator;
			options.keySeparator = options.keyseparator;

			options.returnObjects = options.returnObjectTrees;

			return options;
		}

		function appendBackwardsAPI(i18n) {
			i18n.lng = function () {
				_logger2.default.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.');
				return i18n.services.languageUtils.toResolveHierarchy(i18n.language)[0];
			};

			i18n.preload = function (lngs, cb) {
				_logger2.default.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()');
				i18n.loadLanguages(lngs, cb);
			};

			i18n.setLng = function (lng, options, callback) {
				_logger2.default.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.');
				if (typeof options === 'function') {
					callback = options;
					options = {};
				}
				if (!options) options = {};

				if (options.fixLng === true) {
					if (callback) return callback(null, i18n.getFixedT(lng));
				}

				i18n.changeLanguage(lng, callback);
			};

			i18n.addPostProcessor = function (name, fc) {
				_logger2.default.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })');
				i18n.use({
					type: 'postProcessor',
					name: name,
					process: fc
				});
			};
		}
	}, { "../logger": 15 }], 12: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.get = get;
		exports.transformOptions = transformOptions;
		function get() {
			return {
				debug: false,
				initImmediate: true,

				ns: ['translation'],
				defaultNS: ['translation'],
				fallbackLng: ['dev'],
				fallbackNS: false, // string or array of namespaces

				whitelist: false, // array with whitelisted languages
				nonExplicitWhitelist: false,
				load: 'all', // | currentOnly | languageOnly
				preload: false, // array with preload languages

				simplifyPluralSuffix: true,
				keySeparator: '.',
				nsSeparator: ':',
				pluralSeparator: '_',
				contextSeparator: '_',

				saveMissing: false, // enable to send missing values
				saveMissingTo: 'fallback', // 'current' || 'all'
				missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

				postProcess: false, // string or array of postProcessor names
				returnNull: true, // allows null value as valid translation
				returnEmptyString: true, // allows empty string value as valid translation
				returnObjects: false,
				joinArrays: false, // or string to join array
				returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
				parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
				appendNamespaceToMissingKey: false,
				appendNamespaceToCIMode: false,
				overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
					return { defaultValue: args[1] };
				},

				interpolation: {
					escapeValue: true,
					format: function format(value, _format, lng) {
						return value;
					},
					prefix: '{{',
					suffix: '}}',
					formatSeparator: ',',
					// prefixEscaped: '{{',
					// suffixEscaped: '}}',
					// unescapeSuffix: '',
					unescapePrefix: '-',

					nestingPrefix: '$t(',
					nestingSuffix: ')',
					// nestingPrefixEscaped: '$t(',
					// nestingSuffixEscaped: ')',
					defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
				}
			};
		}

		function transformOptions(options) {
			// create namespace object if namespace is passed in as string
			if (typeof options.ns === 'string') options.ns = [options.ns];
			if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
			if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

			// extend whitelist with cimode
			if (options.whitelist && options.whitelist.indexOf('cimode') < 0) options.whitelist.push('cimode');

			return options;
		}
	}, {}], 13: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _logger = require('./logger');

		var _logger2 = _interopRequireDefault(_logger);

		var _EventEmitter2 = require('./EventEmitter');

		var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

		var _ResourceStore = require('./ResourceStore');

		var _ResourceStore2 = _interopRequireDefault(_ResourceStore);

		var _Translator = require('./Translator');

		var _Translator2 = _interopRequireDefault(_Translator);

		var _LanguageUtils = require('./LanguageUtils');

		var _LanguageUtils2 = _interopRequireDefault(_LanguageUtils);

		var _PluralResolver = require('./PluralResolver');

		var _PluralResolver2 = _interopRequireDefault(_PluralResolver);

		var _Interpolator = require('./Interpolator');

		var _Interpolator2 = _interopRequireDefault(_Interpolator);

		var _BackendConnector = require('./BackendConnector');

		var _BackendConnector2 = _interopRequireDefault(_BackendConnector);

		var _CacheConnector = require('./CacheConnector');

		var _CacheConnector2 = _interopRequireDefault(_CacheConnector);

		var _defaults2 = require('./defaults');

		var _postProcessor = require('./postProcessor');

		var _postProcessor2 = _interopRequireDefault(_postProcessor);

		var _v = require('./compatibility/v1');

		var compat = _interopRequireWildcard(_v);

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}newObj.default = obj;return newObj;
			}
		}

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _defaults(obj, defaults) {
			var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
				var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
					Object.defineProperty(obj, key, value);
				}
			}return obj;
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
		}

		function noop() {};

		var I18n = function (_EventEmitter) {
			_inherits(I18n, _EventEmitter);

			function I18n() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var callback = arguments[1];

				_classCallCheck(this, I18n);

				var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

				_this.options = (0, _defaults2.transformOptions)(options);
				_this.services = {};
				_this.logger = _logger2.default;
				_this.modules = { external: [] };

				if (callback && !_this.isInitialized && !options.isClone) {
					var _ret;

					// https://github.com/i18next/i18next/issues/879
					if (!_this.options.initImmediate) return _ret = _this.init(options, callback), _possibleConstructorReturn(_this, _ret);
					setTimeout(function () {
						_this.init(options, callback);
					}, 0);
				}
				return _this;
			}

			I18n.prototype.init = function init(options, callback) {
				var _this2 = this;

				if (typeof options === 'function') {
					callback = options;
					options = {};
				}
				if (!options) options = {};

				if (options.compatibilityAPI === 'v1') {
					this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertAPIOptions(options)), {});
				} else if (options.compatibilityJSON === 'v1') {
					this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertJSONOptions(options)), {});
				} else {
					this.options = _extends({}, (0, _defaults2.get)(), this.options, (0, _defaults2.transformOptions)(options));
				}
				if (!callback) callback = noop;

				function createClassOnDemand(ClassOrObject) {
					if (!ClassOrObject) return;
					if (typeof ClassOrObject === 'function') return new ClassOrObject();
					return ClassOrObject;
				}

				// init services
				if (!this.options.isClone) {
					if (this.modules.logger) {
						_logger2.default.init(createClassOnDemand(this.modules.logger), this.options);
					} else {
						_logger2.default.init(null, this.options);
					}

					var lu = new _LanguageUtils2.default(this.options);
					this.store = new _ResourceStore2.default(this.options.resources, this.options);

					var s = this.services;
					s.logger = _logger2.default;
					s.resourceStore = this.store;
					s.resourceStore.on('added removed', function (lng, ns) {
						s.cacheConnector.save();
					});
					s.languageUtils = lu;
					s.pluralResolver = new _PluralResolver2.default(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix });
					s.interpolator = new _Interpolator2.default(this.options);

					s.backendConnector = new _BackendConnector2.default(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
					// pipe events from backendConnector
					s.backendConnector.on('*', function (event) {
						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						_this2.emit.apply(_this2, [event].concat(args));
					});

					s.backendConnector.on('loaded', function (loaded) {
						s.cacheConnector.save();
					});

					s.cacheConnector = new _CacheConnector2.default(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
					// pipe events from backendConnector
					s.cacheConnector.on('*', function (event) {
						for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
							args[_key2 - 1] = arguments[_key2];
						}

						_this2.emit.apply(_this2, [event].concat(args));
					});

					if (this.modules.languageDetector) {
						s.languageDetector = createClassOnDemand(this.modules.languageDetector);
						s.languageDetector.init(s, this.options.detection, this.options);
					}

					this.translator = new _Translator2.default(this.services, this.options);
					// pipe events from translator
					this.translator.on('*', function (event) {
						for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
							args[_key3 - 1] = arguments[_key3];
						}

						_this2.emit.apply(_this2, [event].concat(args));
					});

					this.modules.external.forEach(function (m) {
						if (m.init) m.init(_this2);
					});
				}

				// append api
				var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'];
				storeApi.forEach(function (fcName) {
					_this2[fcName] = function () {
						return this.store[fcName].apply(this.store, arguments);
					};
				});

				// TODO: COMPATIBILITY remove this
				if (this.options.compatibilityAPI === 'v1') compat.appendBackwardsAPI(this);

				var load = function load() {
					_this2.changeLanguage(_this2.options.lng, function (err, t) {
						_this2.isInitialized = true;
						_this2.logger.log('initialized', _this2.options);
						_this2.emit('initialized', _this2.options);

						callback(err, t);
					});
				};

				if (this.options.resources || !this.options.initImmediate) {
					load();
				} else {
					setTimeout(load, 0);
				}

				return this;
			};

			I18n.prototype.loadResources = function loadResources() {
				var _this3 = this;

				var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

				if (!this.options.resources) {
					var _ret2 = function () {
						if (_this3.language && _this3.language.toLowerCase() === 'cimode') return {
							v: callback()
						}; // avoid loading resources for cimode

						var toLoad = [];

						var append = function append(lng) {
							if (!lng) return;
							var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
							lngs.forEach(function (l) {
								if (toLoad.indexOf(l) < 0) toLoad.push(l);
							});
						};

						if (!_this3.language) {
							// at least load fallbacks in this case
							var fallbacks = _this3.services.languageUtils.getFallbackCodes(_this3.options.fallbackLng);
							fallbacks.forEach(function (l) {
								return append(l);
							});
						} else {
							append(_this3.language);
						}

						if (_this3.options.preload) {
							_this3.options.preload.forEach(function (l) {
								return append(l);
							});
						}

						_this3.services.cacheConnector.load(toLoad, _this3.options.ns, function () {
							_this3.services.backendConnector.load(toLoad, _this3.options.ns, callback);
						});
					}();

					if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
				} else {
					callback(null);
				}
			};

			I18n.prototype.reloadResources = function reloadResources(lngs, ns) {
				if (!lngs) lngs = this.languages;
				if (!ns) ns = this.options.ns;
				this.services.backendConnector.reload(lngs, ns);
			};

			I18n.prototype.use = function use(module) {
				if (module.type === 'backend') {
					this.modules.backend = module;
				}

				if (module.type === 'cache') {
					this.modules.cache = module;
				}

				if (module.type === 'logger' || module.log && module.warn && module.error) {
					this.modules.logger = module;
				}

				if (module.type === 'languageDetector') {
					this.modules.languageDetector = module;
				}

				if (module.type === 'postProcessor') {
					_postProcessor2.default.addPostProcessor(module);
				}

				if (module.type === '3rdParty') {
					this.modules.external.push(module);
				}

				return this;
			};

			I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
				var _this4 = this;

				var done = function done(err) {
					if (lng) {
						_this4.emit('languageChanged', lng);
						_this4.logger.log('languageChanged', lng);
					}

					if (callback) callback(err, function () {
						for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
							args[_key4] = arguments[_key4];
						}

						return _this4.t.apply(_this4, args);
					});
				};

				if (!lng && this.services.languageDetector) lng = this.services.languageDetector.detect();

				if (lng) {
					this.language = lng;
					this.languages = this.services.languageUtils.toResolveHierarchy(lng);

					this.translator.changeLanguage(lng);

					if (this.services.languageDetector) this.services.languageDetector.cacheUserLanguage(lng);
				}

				this.loadResources(function (err) {
					done(err);
				});
			};

			I18n.prototype.getFixedT = function getFixedT(lng, ns) {
				var _this5 = this;

				var fixedT = function fixedT(key) {
					var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

					var options = _extends({}, opts);
					options.lng = options.lng || fixedT.lng;
					options.ns = options.ns || fixedT.ns;
					return _this5.t(key, options);
				};
				fixedT.lng = lng;
				fixedT.ns = ns;
				return fixedT;
			};

			I18n.prototype.t = function t() {
				return this.translator && this.translator.translate.apply(this.translator, arguments);
			};

			I18n.prototype.exists = function exists() {
				return this.translator && this.translator.exists.apply(this.translator, arguments);
			};

			I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
				this.options.defaultNS = ns;
			};

			I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
				var _this6 = this;

				if (!this.options.ns) return callback && callback();
				if (typeof ns === 'string') ns = [ns];

				ns.forEach(function (n) {
					if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
				});

				this.loadResources(callback);
			};

			I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
				if (typeof lngs === 'string') lngs = [lngs];
				var preloaded = this.options.preload || [];

				var newLngs = lngs.filter(function (lng) {
					return preloaded.indexOf(lng) < 0;
				});
				// Exit early if all given languages are already preloaded
				if (!newLngs.length) return callback();

				this.options.preload = preloaded.concat(newLngs);
				this.loadResources(callback);
			};

			I18n.prototype.dir = function dir(lng) {
				if (!lng) lng = this.language;
				if (!lng) return 'rtl';

				var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

				return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
			};

			I18n.prototype.createInstance = function createInstance() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var callback = arguments[1];

				return new I18n(options, callback);
			};

			I18n.prototype.cloneInstance = function cloneInstance() {
				var _this7 = this;

				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

				var mergedOptions = _extends({}, options, this.options, { isClone: true });
				var clone = new I18n(mergedOptions, callback);
				var membersToCopy = ['store', 'services', 'language'];
				membersToCopy.forEach(function (m) {
					clone[m] = _this7[m];
				});
				clone.translator = new _Translator2.default(clone.services, clone.options);
				clone.translator.on('*', function (event) {
					for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
						args[_key5 - 1] = arguments[_key5];
					}

					clone.emit.apply(clone, [event].concat(args));
				});
				clone.init(mergedOptions, callback);

				return clone;
			};

			return I18n;
		}(_EventEmitter3.default);

		exports.default = new I18n();
	}, { "./BackendConnector": 3, "./CacheConnector": 4, "./EventEmitter": 5, "./Interpolator": 6, "./LanguageUtils": 7, "./PluralResolver": 8, "./ResourceStore": 9, "./Translator": 10, "./compatibility/v1": 11, "./defaults": 12, "./logger": 15, "./postProcessor": 16 }], 14: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.use = exports.t = exports.setDefaultNamespace = exports.on = exports.off = exports.loadResources = exports.loadNamespaces = exports.loadLanguages = exports.init = exports.getFixedT = exports.exists = exports.dir = exports.createInstance = exports.cloneInstance = exports.changeLanguage = undefined;

		var _i18next = require('./i18next');

		var _i18next2 = _interopRequireDefault(_i18next);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = _i18next2.default;
		var changeLanguage = exports.changeLanguage = _i18next2.default.changeLanguage.bind(_i18next2.default);
		var cloneInstance = exports.cloneInstance = _i18next2.default.cloneInstance.bind(_i18next2.default);
		var createInstance = exports.createInstance = _i18next2.default.createInstance.bind(_i18next2.default);
		var dir = exports.dir = _i18next2.default.dir.bind(_i18next2.default);
		var exists = exports.exists = _i18next2.default.exists.bind(_i18next2.default);
		var getFixedT = exports.getFixedT = _i18next2.default.getFixedT.bind(_i18next2.default);
		var init = exports.init = _i18next2.default.init.bind(_i18next2.default);
		var loadLanguages = exports.loadLanguages = _i18next2.default.loadLanguages.bind(_i18next2.default);
		var loadNamespaces = exports.loadNamespaces = _i18next2.default.loadNamespaces.bind(_i18next2.default);
		var loadResources = exports.loadResources = _i18next2.default.loadResources.bind(_i18next2.default);
		var off = exports.off = _i18next2.default.off.bind(_i18next2.default);
		var on = exports.on = _i18next2.default.on.bind(_i18next2.default);
		var setDefaultNamespace = exports.setDefaultNamespace = _i18next2.default.setDefaultNamespace.bind(_i18next2.default);
		var t = exports.t = _i18next2.default.t.bind(_i18next2.default);
		var use = exports.use = _i18next2.default.use.bind(_i18next2.default);
	}, { "./i18next": 13 }], 15: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var consoleLogger = {
			type: 'logger',

			log: function log(args) {
				this._output('log', args);
			},
			warn: function warn(args) {
				this._output('warn', args);
			},
			error: function error(args) {
				this._output('error', args);
			},
			_output: function _output(type, args) {
				if (console && console[type]) console[type].apply(console, Array.prototype.slice.call(args));
			}
		};

		var Logger = function () {
			function Logger(concreteLogger) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				_classCallCheck(this, Logger);

				this.init(concreteLogger, options);
			}

			Logger.prototype.init = function init(concreteLogger) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				this.prefix = options.prefix || 'i18next:';
				this.logger = concreteLogger || consoleLogger;
				this.options = options;
				this.debug = options.debug === false ? false : true;
			};

			Logger.prototype.setDebug = function setDebug(bool) {
				this.debug = bool;
			};

			Logger.prototype.log = function log() {
				this.forward(arguments, 'log', '', true);
			};

			Logger.prototype.warn = function warn() {
				this.forward(arguments, 'warn', '', true);
			};

			Logger.prototype.error = function error() {
				this.forward(arguments, 'error', '');
			};

			Logger.prototype.deprecate = function deprecate() {
				this.forward(arguments, 'warn', 'WARNING DEPRECATED: ', true);
			};

			Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
				if (debugOnly && !this.debug) return;
				if (typeof args[0] === 'string') args[0] = prefix + this.prefix + ' ' + args[0];
				this.logger[lvl](args);
			};

			Logger.prototype.create = function create(moduleName) {
				var sub = new Logger(this.logger, _extends({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));

				return sub;
			};

			// createInstance(options = {}) {
			//   return new Logger(options, callback);
			// }

			return Logger;
		}();

		;

		exports.default = new Logger();
	}, {}], 16: [function (require, module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {

			processors: {},

			addPostProcessor: function addPostProcessor(module) {
				this.processors[module.name] = module;
			},
			handle: function handle(processors, value, key, options, translator) {
				var _this = this;

				processors.forEach(function (processor) {
					if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
				});

				return value;
			}
		};
	}, {}], 17: [function (require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.makeString = makeString;
		exports.copy = copy;
		exports.setPath = setPath;
		exports.pushPath = pushPath;
		exports.getPath = getPath;
		exports.deepExtend = deepExtend;
		exports.regexEscape = regexEscape;
		exports.escape = escape;
		function makeString(object) {
			if (object == null) return '';
			return '' + object;
		}

		function copy(a, s, t) {
			a.forEach(function (m) {
				if (s[m]) t[m] = s[m];
			});
		}

		function getLastOfPath(object, path, Empty) {
			function cleanKey(key) {
				return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
			}

			function canNotTraverseDeeper() {
				return !object || typeof object === 'string';
			}

			var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
			while (stack.length > 1) {
				if (canNotTraverseDeeper()) return {};

				var key = cleanKey(stack.shift());
				if (!object[key] && Empty) object[key] = new Empty();
				object = object[key];
			}

			if (canNotTraverseDeeper()) return {};
			return {
				obj: object,
				k: cleanKey(stack.shift())
			};
		}

		function setPath(object, path, newValue) {
			var _getLastOfPath = getLastOfPath(object, path, Object),
			    obj = _getLastOfPath.obj,
			    k = _getLastOfPath.k;

			obj[k] = newValue;
		}

		function pushPath(object, path, newValue, concat) {
			var _getLastOfPath2 = getLastOfPath(object, path, Object),
			    obj = _getLastOfPath2.obj,
			    k = _getLastOfPath2.k;

			obj[k] = obj[k] || [];
			if (concat) obj[k] = obj[k].concat(newValue);
			if (!concat) obj[k].push(newValue);
		}

		function getPath(object, path) {
			var _getLastOfPath3 = getLastOfPath(object, path),
			    obj = _getLastOfPath3.obj,
			    k = _getLastOfPath3.k;

			if (!obj) return undefined;
			return obj[k];
		}

		function deepExtend(target, source, overwrite) {
			for (var prop in source) {
				if (prop in target) {
					// If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
					if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
						if (overwrite) target[prop] = source[prop];
					} else {
						deepExtend(target[prop], source[prop], overwrite);
					}
				} else {
					target[prop] = source[prop];
				}
			}return target;
		}

		function regexEscape(str) {
			return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
		}

		/* eslint-disable */
		var _entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};
		/* eslint-enable */

		function escape(data) {
			if (typeof data === 'string') {
				return data.replace(/[&<>"'\/]/g, function (s) {
					return _entityMap[s];
				});
			} else {
				return data;
			}
		}
	}, {}], 18: [function (require, module, exports) {
		module.exports = require('./dist/commonjs/index.js').default;
	}, { "./dist/commonjs/index.js": 14 }] }, {}, [1]);
//# sourceMappingURL=application.babel.js.map
